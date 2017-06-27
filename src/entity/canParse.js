
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
            await this.addDescriptors(instance, attributes, logicalName);
            entities.push(instance);
        }
        return entities;
    }

    static async addDescriptors(instance, attributes = [], logicalName) {
        for (const attribute of attributes) {
            const descriptor = await this.getDescriptor(attribute, logicalName);
            Object.defineProperty(instance, attribute, descriptor);
        }
    }

    static async getDescriptor(attribute, logicalName) {
        const origDescriptor = this.getPropertyDescriptor(attribute);
        let descriptor = null,
            navigationProperty = null;
        const entityAttributes = await this.getEntityAttributes(logicalName),
            entityAttribute = entityAttributes[attribute];
        if (entityAttribute.AttributeType === "Lookup") {
            navigationProperty = await this.getNavigationProperty(attribute, logicalName);
        }
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
};
export default canParse;
