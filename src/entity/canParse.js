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
        if (!Entity.derivedClasses) {
            Entity.derivedClasses = {};
        }
        let DerivedClass = Entity.derivedClasses[logicalName];
        if (!DerivedClass) {
            try {
                DerivedClass = class Derived extends this {};
                await this.addDescriptors(DerivedClass.prototype, logicalName);
                Entity.derivedClasses[logicalName] = DerivedClass;
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
            if (descriptor && !instance.hasOwnProperty(entityAttribute.LogicalName)) {
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

    static async getNavigationProperty(attribute, logicalName, targetEntity = "") {
        const cacheKey = `${logicalName}${attribute}${targetEntity}`;
        if (this.cachedNavigationProperties[cacheKey]) {
            return this.cachedNavigationProperties[cacheKey];
        }
        let navigationProperty;
        try {
            const entityDefinitions = await Metadata.getEntityDefinitions(logicalName);
            for (const {ReferencingAttribute, ReferencingEntity, ReferencedEntity, ReferencingEntityNavigationPropertyName} of entityDefinitions.ManyToOneRelationships) {
                if (ReferencingAttribute === attribute && ReferencingEntity === logicalName) {
                    navigationProperty = !targetEntity || ReferencedEntity === targetEntity ? ReferencingEntityNavigationPropertyName : null;
                    if (navigationProperty) {
                        break;
                    }
                }
            }
        } catch(e) {
            console.log(e);
            throw e;
        }
        this.cachedNavigationProperties[cacheKey] = navigationProperty;
        return navigationProperty;
    }
};
export default canParse;
