import WebAPI from "../webapi/WebAPI";

class Metadata {
    static get cachedEntityDefinitions() {
        if (!this.entityDef) {
            this.entityDef = {};
        }
        return this.entityDef;
    }

    static async getEntityDefinitions(logicalName) {
        if (this.cachedEntityDefinitions[logicalName]) {
            return Promise.resolve(this.cachedEntityDefinitions[logicalName]);
        }
        if (typeof logicalName !== "string") {
            throw Error("Invalid logicalName given");
        }
        let result = await WebAPI.retrieveEntitySet("EntityDefinitions", {LogicalName: logicalName});
        this.cachedEntityDefinitions[logicalName] = result;
        return result;
    }

    static getCachedEntityDefinitions(logicalName) {
        return this.cachedEntityDefinitionAttributes[logicalName];
    }

    static get cachedEntityDefinitionAttributes() {
        if (!this.entityDefAttributes) {
            this.entityDefAttributes = {};
        }
        return this.entityDefAttributes;
    }

    static async getEntityDefinitionAttributes(logicalName) {
        if (this.cachedEntityDefinitionAttributes[logicalName]) {
            return Promise.resolve(this.cachedEntityDefinitionAttributes[logicalName]);
        }

        let result = await WebAPI.retrieveEntitySetProperty("EntityDefinitions", {LogicalName: logicalName}, "Attributes");
        this.cachedEntityDefinitionAttributes[logicalName] = result;
        return result;
    }
}
export default Metadata;
