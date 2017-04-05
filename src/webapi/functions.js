
const functions = superclass => class extends superclass {
    //Also confused when to use bound and when to use unbound? Use this one.
    static executeFunction(functionString, logicalName, entityId) { //eslint-disable-line no-unused-vars
        if (logicalName) {
            return this.executeBoundFunction(...arguments);
        } else {
            return this.executeUnboundFunction(...arguments);
        }
    }

    //https://msdn.microsoft.com/en-us/library/gg309638.aspx
    static async executeBoundFunction(functionString, logicalName, entityId) {
        const entitySetName = await this.getEntitySetName(logicalName);
        return this.requestAndReturnBody("GET", `${entitySetName}(${entityId})/Microsoft.Dynamics.CRM.${functionString}`);
    }

    //https://msdn.microsoft.com/en-us/library/gg309638.aspx
    static executeUnboundFunction(functionString) {
        return this.requestAndReturnBody("GET", `${functionString}`);
    }
};
export default functions;
