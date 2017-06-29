import canParse from "./canParse";
import Class from "../Class";
import create from "./create";
import del from "./delete";
import fetch from "./fetch";
import Metadata from "../metadata/Metadata";
import read from "./read";
import update from "./update";
import WebAPI from "../webapi/WebAPI";

class Entity extends canParse(create(del(fetch(read(update(Class)))))) {
    constructor(data, logicalName) {
        super(...arguments);
        this.data = data;
        this.logicalName = logicalName || this.getClass().logicalName;
    }

    get logicalName() {
        return this.logicName;
    }

    set logicalName(logicalName) {
        this.logicName = logicalName;
    }

    get data() {
        return this.dat;
    }

    set data(data) {
        this.dat = data;
    }

    get isNew() {
        return !this.data.hasOwnProperty("@odata.etag");
    }

    async getEntityMetadata() {
        return await Metadata.getEntityDefinitions(this.logicalName);
    }

    async getPrimaryIdAttribute() {
        const entityMetadata = await this.getEntityMetadata();
        return entityMetadata.PrimaryIdAttribute;
    }

    async getPrimaryId() {
        const primaryIdAttribute = await this.getPrimaryIdAttribute();
        return this.data[primaryIdAttribute];
    }

    static async getEntityAttributes(logicalName = this.logicalName) {
        if (!this.cachedEntityAttributes) {
            this.cachedEntityAttributes = {};
        }
        if (this.cachedEntityAttributes[logicalName]) {
            return this.cachedEntityAttributes[logicalName];
        } else {
            try {
                const entityDefinitionAttributes = await Metadata.getEntityDefinitionAttributes(logicalName),
                    value = entityDefinitionAttributes.value,
                    entityAttributes = {};
                for (const entityDefinitionAttribute of value) {
                    entityAttributes[entityDefinitionAttribute.LogicalName] = entityDefinitionAttribute;
                }
                this.cachedEntityAttributes[logicalName] = entityAttributes;
                return entityAttributes;
            } catch (e) {
                throw e;
            }
        }
    }

    static getCachedEntityAttributes(logicalName = this.logicalName) {
        if (!this.cachedEntityAttributes) {
            this.cachedEntityAttributes = {};
        }
        return this.cachedEntityAttributes[logicalName];
    }

    get changes() {
        if (!this.chngs) {
            this.chngs = {};
        }
        return this.chngs;
    }

    set changes(changes) {
        this.chngs = changes || {};
    }

    getAttribute(name, navigationProperty) {
        const data = this.data[navigationProperty || name];
        if (data) {
            if (navigationProperty) {
                const entityAttributes = this.getClass().getCachedEntityAttributes(this.logicalName),
                    entityAttribute = entityAttributes[name],
                    entityDefinitions = Metadata.getCachedEntityDefinitions(entityAttribute.Targets[0]);
                if (entityDefinitions) {
                    const {SchemaName, PrimaryIdAttribute, PrimaryNameAttribute} = entityDefinitions;
                    data.LogicalName = SchemaName;
                    data.Id = data[PrimaryIdAttribute];
                    data.Name = data[PrimaryNameAttribute];
                }
            }
        } else {
            const logicalName = this.logicalName;
            console.log(`${logicalName} has no attribute '${name}'`);
        }
        return data;
    }

    setAttribute(name, value) {
        if (this.data.hasOwnProperty(name) || name.endsWith("@odata.bind")) {
            if (typeof this.data[name] !== "object") {
                const currentValue = this.data[name];
                if (currentValue !== value) {
                    this.data[name] = value;
                    this.changes[name] = value;
                }
            } else {
                const logicalName = this.logicalName;
                console.log(`${logicalName} attribute ${name} is a Lookup. Use systemuser.bind(${name}, ${value}) instead.`);
            }
        } else {
            const logicalName = this.logicalName;
            console.log(`${logicalName} has no attribute '${name}'`);
        }
    }

    //account.setAttribute("primarycontactid@odata.bind", "https://dys001.crm4.dynamics.com/api/data/v8.0/contacts(465b158c-541c-e511-80d3-3863bb347ba8)");
    async bind(name, value) {
        if (this.data.hasOwnProperty(name)) {
            const entityDefinitionAttributes = await this.getClass().getEntityAttributes(this.logicalName),
                baseURL = WebAPI.webAPIPath,
                target = entityDefinitionAttributes[name].Targets[0],
                entityMetadata = await Metadata.getEntityDefinitions(target),
                entitySetName = entityMetadata.EntitySetName,
                url = `${baseURL}/${entitySetName}(${value})`;
            this.setAttribute(`${name}@odata.bind`, url);
            await this.updateBinding(name, target, value);
        }
    }

    /**
     * @private
     * @param name
     * @param bindingName
     * @param value
     * @returns {Promise.<void>}
     */
    async updateBinding(name, bindingName, value) {
        const dataAttribute = this.getAttribute(name),
            attributes = [];
        for (const key of Object.keys(dataAttribute)) {
            attributes.push(key);
        }
        await Entity.get(bindingName, value, {
            select: attributes
        }).then(bindingEntity => {
            for (const key of attributes) {
                dataAttribute[key] = bindingEntity[key];
            }
            this.setAttribute(name, dataAttribute);
        });
    }
}
export default Entity;
