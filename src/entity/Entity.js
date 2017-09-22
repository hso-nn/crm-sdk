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

    async isNew() {
        const value = await this.getPrimaryId();
        return !value;
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
                const entityDefinitions = await Metadata.getEntityDefinitions(logicalName),
                    entityAttributes = {};
                for (const entityDefinitionAttribute of entityDefinitions.Attributes) {
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
        }
        return data;
    }

    setAttribute(name, value) {
        const entityAttributes = this.getClass().getCachedEntityAttributes(this.logicalName),
            entityAttribute = entityAttributes && entityAttributes[name];
        if (entityAttribute || name.endsWith("@odata.bind")) {
            if (entityAttribute && entityAttribute.AttributeType === "Lookup" && typeof value !== "object") {
                const logicalName = this.logicalName;
                console.log(`${logicalName} attribute ${name} is a Lookup. Use ${this.logicalName}.bind('${name}', '${value}') instead.`);
            } else {
                const currentValue = this.data[name];
                if (currentValue !== value) {
                    this.data[name] = value;
                    this.changes[name] = value;
                }
            }
        } else {
            const logicalName = this.logicalName;
            console.log(`${logicalName} has no attribute '${name}'`);
        }
    }

    //account.setAttribute("primarycontactid@odata.bind", "https://dys001.crm4.dynamics.com/api/data/v8.0/contacts(465b158c-541c-e511-80d3-3863bb347ba8)");
    async bind(name, value) {
        const entityDefinitionAttributes = await this.getClass().getEntityAttributes(this.logicalName),
            entityDefinitionAttribute = entityDefinitionAttributes[name];
        if (entityDefinitionAttribute.AttributeType === "Lookup") {
            const baseURL = WebAPI.webAPIPath,
                target = entityDefinitionAttribute.Targets[0],
                entityMetadata = await Metadata.getEntityDefinitions(target),
                navigationProperty = await Entity.getNavigationProperty(name, this.logicalName),
                entitySetName = entityMetadata.EntitySetName,
                url = `${baseURL}/${entitySetName}(${value})`;
            this.setAttribute(`${navigationProperty}@odata.bind`, url);
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
        const dataAttribute = this.getAttribute(name);
        if (!dataAttribute) {
            return;
        }
        const attributes = Object.keys(dataAttribute).filter(attr => !["Id", "LogicalName", "Name"].includes(attr));
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
