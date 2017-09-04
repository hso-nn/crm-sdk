import Entity from "./Entity";
import Metadata from "../metadata/Metadata";

const canParse = superclass => class extends superclass {
    static async parseResult(data = [], logicalName) {
        const entities = [];
        const DerivedClass = await this.getDerivedClass(logicalName);
        for (const entityData of data) {
            const instance = new DerivedClass(entityData, logicalName);
            entities.push(instance);
        }
        return entities;
    }

    static async getDerivedClass(logicalName) {
        if (!this.derivedClasses) {
            this.derivedClasses = {};
        }
        let DerivedClass = this.derivedClasses[logicalName];
        if (!DerivedClass) {
            try {
                DerivedClass = class Derived extends Entity {};
                await this.addDescriptors(DerivedClass.prototype, logicalName);
                this.derivedClasses[logicalName] = DerivedClass;
            } catch(e) {
                throw e;
            }
        }
        return DerivedClass;
    }

    static async addDescriptors(instance, logicalName) {
        const entityAttributes = await this.getEntityAttributes(logicalName);
        for (const entityName of Object.keys(entityAttributes)) {
            const entityAttribute = entityAttributes[entityName],
                descriptor = await this.getDescriptor(entityAttribute, logicalName);
            if (descriptor) {
                Object.defineProperty(instance, entityAttribute.LogicalName, descriptor);
            }
        }
        return instance;
    }

    static async getDescriptor(entityAttribute, logicalName) {
        try {
            const origDescriptor = this.getPropertyDescriptor(entityAttribute.LogicalName);
            let descriptor = null;

            const navigationProperty = entityAttribute.AttributeType === "Lookup" ? await this.getNavigationProperty(entityAttribute.LogicalName, logicalName) : null;
            if (!origDescriptor || !origDescriptor.get || !origDescriptor.set) {
                descriptor = {};
            }
            if (!origDescriptor || !origDescriptor.get) {
                descriptor.get = function () {
                    return this.getAttribute(entityAttribute.LogicalName, navigationProperty);
                };
            }
            if (!origDescriptor || !origDescriptor.set) {
                descriptor.set = function (value) {
                    this.setAttribute(entityAttribute.LogicalName, value);
                };
            }
            return descriptor;
        } catch(e) {
            throw e;
        }
    }

    static getPropertyDescriptor(name) {
        let propertyDescriptor = Object.getOwnPropertyDescriptor(this.prototype, name),
            parentPrototype;
        if (!propertyDescriptor) {
            parentPrototype = Object.getPrototypeOf(this.prototype);
        }
        while (!propertyDescriptor && parentPrototype) {
            propertyDescriptor = Object.getOwnPropertyDescriptor(parentPrototype, name);
            parentPrototype = Object.getPrototypeOf(parentPrototype);
        }
        return propertyDescriptor;
    }

    static get cachedNavigationProperties() {
        if (!this.navProperties) {
            this.navProperties = {};
        }
        return this.navProperties;
    }

    static async getNavigationProperty(attribute, logicalName) {
        const cacheKey = `${logicalName}${attribute}`;
        if (this.cachedNavigationProperties[cacheKey]) {
            return this.cachedNavigationProperties[cacheKey];
        }
        let navigationProperty;
        try {
            const entityDefinitions = await Metadata.getEntityDefinitions(logicalName);
            for (const {ReferencingAttribute, ReferencingEntity, ReferencingEntityNavigationPropertyName} of entityDefinitions.ManyToOneRelationships) {
                if (ReferencingAttribute === attribute && ReferencingEntity === logicalName) {
                    navigationProperty = ReferencingEntityNavigationPropertyName;
                    break;
                }
            }
        } catch(e) {
            console.log(e);
            throw e;
        }
        if (!navigationProperty) {
            throw new Error(`No navigation property '${attribute}' for entity '${logicalName}'`);
        }
        this.cachedNavigationProperties[cacheKey] = navigationProperty;
        return navigationProperty;
    }
};
export default canParse;
