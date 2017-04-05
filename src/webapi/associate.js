
const associate = superclass => class extends superclass {
    //https://msdn.microsoft.com/en-us/library/mt607875.aspx
    static async associateEntities(logicalName, entityId, navigationProperty, associateEntity, associateEntityId) {
        let entitySetName = await this.getEntitySetName(logicalName),
            baseURL = this.webAPIPath,
            data = {
                "@odata.id": `${baseURL}/${associateEntity}(${associateEntityId})`
            };
        return this.requestAndReturnBody("POST", `${entitySetName}(${entityId})/${navigationProperty}/$ref`, data);
    }

    //https://msdn.microsoft.com/en-us/library/mt607875.aspx
    static async disassociateEntities(logicalName, entityId, navigationProperty, associateEntityId) {
        let entitySetName = await this.getEntitySetName(logicalName);
        return this.requestAndReturnBody("DELETE", `${entitySetName}(${entityId})/${navigationProperty}(${associateEntityId})/$ref`);
    }
};
export default associate;
