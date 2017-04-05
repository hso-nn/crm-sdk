
const canParse = superclass => class extends superclass {
    static async getQueryAttributes(query = {}, logicalName = this.logicalName) {
        let attributes = this.extractQueryAttributes(query);
        if (attributes.length === 0) {
            let entityAttributes = await this.getEntityAttributes(logicalName);
            for (let attributeName of Object.keys(entityAttributes)) {
                attributes.push(attributeName);
            }
        }
        return attributes;
    }

    static extractQueryAttributes({select, expand = []}) {
        let attributes = select ? select.slice() : [];
        for (let item of expand) {
            if (typeof item === "string") {
                attributes.push(item);
            } else {
                attributes.push(item.attribute);
            }
        }
        return attributes;
    }

    static parseResult(data = [], logicalName, attributes) {
        let entities = [];
        for (let entityData of data) {
            let instance = new this(entityData, logicalName);
            this.addDescriptors(instance, attributes);
            entities.push(instance);
        }
        return entities;
    }

    static addDescriptors(instance, attributes = []) {
        for (let attribute of attributes) {
            let descriptor = this.getDescriptor(attribute);
            Object.defineProperty(instance, attribute, descriptor);
        }
    }

    static getDescriptor(attribute) {
        let origDescriptor = this.getPropertyDescriptor(attribute),
            descriptor = null;
        if (!origDescriptor || !origDescriptor.get || !origDescriptor.set) {
            descriptor = {};
        }
        if (!origDescriptor || !origDescriptor.get) {
            descriptor.get = function () {
                return this.getAttribute(attribute);
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
