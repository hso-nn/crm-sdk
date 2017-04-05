
const update = superclass => class extends superclass {
    static async updateEntity(logicalName, entityId, attributes) {
        const entitySetName = await this.getEntitySetName(logicalName);
        return this.request("PATCH", `${entitySetName}(${entityId})`, attributes);
    }
};
export default update;
