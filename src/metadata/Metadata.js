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
            return this.cachedEntityDefinitions[logicalName];
        }
        if (typeof logicalName !== "string") {
            throw Error("Invalid logicalName given");
        }
        const result = await WebAPI.retrieveEntitySet("EntityDefinitions", {LogicalName: logicalName});
        this.cachedEntityDefinitions[logicalName] = result;
        return result;
    }

    static getCachedEntityDefinitions(logicalName) {
        return this.cachedEntityDefinitions[logicalName];
    }

    static get cachedEntityDefinitionAttributes() {
        if (!this.entityDefAttributes) {
            this.entityDefAttributes = {};
        }
        return this.entityDefAttributes;
    }

    static async getEntityDefinitionAttributes(logicalName) {
        if (this.cachedEntityDefinitionAttributes[logicalName]) {
            return this.cachedEntityDefinitionAttributes[logicalName];
        }

        const result = await WebAPI.retrieveEntitySetProperty("EntityDefinitions", {LogicalName: logicalName}, "Attributes");
        this.cachedEntityDefinitionAttributes[logicalName] = result;
        return result;
    }

    static get cachedEntityDefinitionsManyToOneRelationships() {
        if (!this.entityDefManyToOneRelationships) {
            this.entityDefManyToOneRelationships = {};
        }
        return this.entityDefManyToOneRelationships;
    }

    static async getEntityDefinitionManyToOneRelationships(logicalName) {
        if (this.cachedEntityDefinitionsManyToOneRelationships[logicalName]) {
            return this.cachedEntityDefinitionsManyToOneRelationships[logicalName];
        }
        try {
            const result = await WebAPI.retrieveEntitySetProperty("EntityDefinitions", {LogicalName: logicalName}, "ManyToOneRelationships");
            this.cachedEntityDefinitionsManyToOneRelationships[logicalName] = result;
            return result;
        } catch(e) {
            throw e;
        }
    }
}
export default Metadata;
