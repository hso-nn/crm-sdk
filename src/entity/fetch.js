import WebAPI from "../webapi/WebAPI";

const fetch = superclass => class extends superclass {
    static async fetch(logicalName = this.logicalName, fetchXml) {
        console.log(`Fetch ${logicalName} ${fetchXml}`);
        let result = await WebAPI.executeFetchXml(logicalName, fetchXml),
            attributes = await this.getQueryAttributes(undefined, logicalName);
        return this.parseResult(result.value, logicalName, attributes);
    }
};
export default fetch;
