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
        const result = await WebAPI.retrieveEntitySet("EntityDefinitions", null, `$filter=LogicalName eq '${logicalName}'&$expand=Attributes,ManyToOneRelationships`),
            entityDefinitions = result.value[0];
        this.cachedEntityDefinitions[logicalName] = entityDefinitions;
        return entityDefinitions;
    }

    static getCachedEntityDefinitions(logicalName) {
        return this.cachedEntityDefinitions[logicalName];
    }
}
export default Metadata;
