
const create = superclass => class extends superclass {
    static async createEntity(logicalName, attributes) {
        const entitySetName = await this.getEntitySetName(logicalName),
            entityIdHeader = await this.requestAndReturnHeader("POST", entitySetName, attributes, "OData-EntityId");
        if (entityIdHeader) {
            return this.getEntityIdFromHeader(entityIdHeader);
        }
    }

    static getEntityIdFromHeader(header) {
        const regExp = /\(([^)]+)\)/,
            matches = regExp.exec(header);
        return matches[1];
    }
};
export default create;
