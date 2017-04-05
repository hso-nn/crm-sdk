
const actions = superclass => class extends superclass {
    //Also confused when to use bound and when to use unbound? Use this one.
    static async executeAction(actionName, data, logicalName, entityId) { //eslint-disable-line no-unused-vars
        if (logicalName) {
            return this.executeBoundAction(...arguments);
        } else {
            return this.executeUnboundAction(...arguments);
        }
    }

    //https://msdn.microsoft.com/en-us/library/mt607600.aspx
    static async executeBoundAction(actionName, data, logicalName, entityId) {
        const entitySetName = await this.getEntitySetName(logicalName);
        return this.requestAndReturnBody("POST", `${entitySetName}(${entityId})/Microsoft.Dynamics.CRM.${actionName}`, data);
    }

    //https://msdn.microsoft.com/en-us/library/mt607600.aspx
    static executeUnboundAction(actionName, data) {
        return this.requestAndReturnBody("POST", `${actionName}`, data);
    }
};
export default actions;
