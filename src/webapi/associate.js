
const associate = superclass => class extends superclass {
    //https://msdn.microsoft.com/en-us/library/mt607875.aspx
    static async associateEntities(logicalName, entityId, navigationProperty, associateEntity, associateEntityId) {
        const entitySetName = await this.getEntitySetName(logicalName),
            baseURL = this.webAPIPath,
            data = {
                "@odata.id": `${baseURL}/${associateEntity}(${associateEntityId})`
            };
        return this.requestAndReturnBody("POST", `${entitySetName}(${entityId})/${navigationProperty}/$ref`, data);
    }

    //https://msdn.microsoft.com/en-us/library/mt607875.aspx
    static async disassociateEntities(logicalName, entityId, navigationProperty, associateEntityId = "") {
        const entitySetName = await this.getEntitySetName(logicalName);
        let associateEntityIdParam = "";
        if (associateEntityId) {
            associateEntityIdParam = `(${associateEntityId})`;
        }
        return this.requestAndReturnBody("DELETE", `${entitySetName}(${entityId})/${navigationProperty}${associateEntityIdParam}/$ref`);
    }
};
export default associate;
