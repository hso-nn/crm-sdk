
const create = superclass => class extends superclass {
    static async createEntity(logicalName, attributes) {
        let entitySetName = await this.getEntitySetName(logicalName),
            entityIdHeader = await this.requestAndReturnHeader("POST", entitySetName, attributes, "OData-EntityId");
        if (entityIdHeader) {
            return this.getEntityIdFromHeader(entityIdHeader);
        }
    }

    static getEntityIdFromHeader(header) {
        let regExp = /\(([^)]+)\)/,
            matches = regExp.exec(header);
        return matches[1];
    }
};
export default create;
