
const create = superclass => class extends superclass {
    /**
     * createRecord
     * https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-webapi/createrecord
     * @param entityLogicalName
     * @param data
     * @returns {Promise<*>}
     */
    static async createRecord(entityLogicalName, data) {
        if (window.Xrm && window.Xrm.WebApi) {
            return window.Xrm.WebApi.createRecord(entityLogicalName, data);
        } else {
            const entitySetName = await this.getEntitySetName(entityLogicalName);
            return await this.requestAndReturnBody("POST", `${entitySetName}`, data, {Prefer: "return=representation"});
        }
    }

    /**
     * @deprecated
     * @param logicalName
     * @param attributes
     * @returns {Promise<void>}
     */
    static async createEntity(logicalName, attributes) {
        console.log("Deprecated: use WebApi.createRecord instead");
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
