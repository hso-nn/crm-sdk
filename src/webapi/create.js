
const create = superclass => class extends superclass {
    static async createEntity(logicalName, attributes) {
        const entitySetName = await this.getEntitySetName(logicalName);
        return await this.requestAndReturnBody("POST", `${entitySetName}`, attributes, {Prefer: "return=representation"});
    }

    static getEntityIdFromHeader(header) {
        const regExp = /\(([^)]+)\)/,
            matches = regExp.exec(header);
        return matches[1];
    }
};
export default create;
