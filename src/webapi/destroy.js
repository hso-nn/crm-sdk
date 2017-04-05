
const destroy = superclass => class extends superclass {
    static async deleteEntity(logicalName, entityId) {
        const entitySetName = await this.getEntitySetName(logicalName);
        return this.request("DELETE", `${entitySetName}(${entityId})`);
    }
};
export default destroy;

