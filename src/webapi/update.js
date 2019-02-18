
const update = superclass => class extends superclass {
    /**
     * updateRecord
     * https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-webapi/updaterecord
     * @param entityLogicalName
     * @param id
     * @param data
     * @returns {Promise<*>}
     */
    static async updateRecord(entityLogicalName, id, data) {
        if (typeof window !== "undefined" && window.Xrm && window.Xrm.WebApi) {
            return window.Xrm.WebApi.updateRecord(entityLogicalName, id, data);
        } else {
            const entitySetName = await this.getEntitySetName(entityLogicalName);
            return this.request("PATCH", `${entitySetName}(${id})`, data);
        }
    }

    static async updateEntity(logicalName, entityId, attributes) {
        console.log("Deprecated: use WebApi.updateRecord instead");
        const entitySetName = await this.getEntitySetName(logicalName);
        return this.request("PATCH", `${entitySetName}(${entityId})`, attributes);
    }
};
export default update;
