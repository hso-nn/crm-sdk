
const destroy = superclass => class extends superclass {
    /**
     * deleteRecord
     * https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-webapi/deleterecord
     * @param entityLogicalName
     * @param id
     * @returns {Promise<*>}
     */
    static async deleteRecord(entityLogicalName, id) {
        if (window.Xrm && window.Xrm.WebApi) {
            return window.Xrm.WebApi.deleteRecord(entityLogicalName, id);
        } else {
            const entitySetName = await this.getEntitySetName(entityLogicalName);
            return this.request("DELETE", `${entitySetName}(${id})`);
        }
    }

    /**
     * @deprecated
     * @param logicalName
     * @param entityId
     * @returns {Promise<*>}
     */
    static async deleteEntity(logicalName, entityId) {
        console.log("Deprecated: use WebApi.deleteRecord instead");
        const entitySetName = await this.getEntitySetName(logicalName);
        return this.request("DELETE", `${entitySetName}(${entityId})`);
    }
};
export default destroy;

