
const destroy = superclass => class extends superclass {
    static async deleteEntity(logicalName, entityId) {
        let entitySetName = await this.getEntitySetName(logicalName);
        return this.request("DELETE", `${entitySetName}(${entityId})`);
    }
};
export default destroy;

