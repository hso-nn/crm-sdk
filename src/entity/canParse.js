import Metadata from "../metadata/Metadata";

const canParse = superclass => class extends superclass {
    static async getQueryAttributes(query = {}, logicalName = this.logicalName) {
        const attributes = this.extractQueryAttributes(query);
        if (attributes.length === 0) {
            const entityAttributes = await this.getEntityAttributes(logicalName);
            for (const attributeName of Object.keys(entityAttributes)) {
                attributes.push(attributeName);
            }
        }
        return attributes;
    }

    static extractQueryAttributes({select, expand = []}) {
        const attributes = select ? select.slice() : [];
        for (const item of expand) {
            if (typeof item === "string") {
                attributes.push(item);
            } else {
                attributes.push(item.attribute);
            }
        }
        return attributes;
    }

    static async parseResult(data = [], logicalName, attributes) {
        const entities = [];
        for (const entityData of data) {
            const instance = new this(entityData, logicalName);
            try {
                await this.addDescriptors(instance, attributes, logicalName);
            } catch(e) {
                throw e;
            }
            entities.push(instance);
        }
        return entities;
    }

    static async addDescriptors(instance, attributes = [], logicalName) {
        for (const attribute of attributes) {
            const descriptor = await this.getDescriptor(attribute, logicalName);
            if (descriptor) {
                Object.defineProperty(instance, attribute, descriptor);
            }
        }
        return instance;
    }

    static async getDescriptor(attribute, logicalName) {
        try {
            const origDescriptor = this.getPropertyDescriptor(attribute);
            let descriptor = null;
            const entityAttributes = await this.getEntityAttributes(logicalName),
                entityAttribute = entityAttributes[attribute],
                navigationProperty = entityAttribute.AttributeType === "Lookup" ? await this.getNavigationProperty(attribute, logicalName) : null;
            if (!origDescriptor || !origDescriptor.get || !origDescriptor.set) {
                descriptor = {};
            }
            if (!origDescriptor || !origDescriptor.get) {
                descriptor.get = function () {
                    return this.getAttribute(attribute, navigationProperty);
                };
            }
            if (!origDescriptor || !origDescriptor.set) {
                descriptor.set = function (value) {
                    this.setAttribute(attribute, value);
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

    static async getNavigationProperty(attribute, logicalName) {
        let navigationProperty;
        try {
            const manyToManyRelationships = await Metadata.getEntityDefinitionManyToOneRelationships(logicalName);
            for (const {ReferencingAttribute, ReferencingEntity, ReferencingEntityNavigationPropertyName} of manyToManyRelationships.value) {
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
        return navigationProperty;
    }
};
export default canParse;
