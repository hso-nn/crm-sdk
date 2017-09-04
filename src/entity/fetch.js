import WebAPI from "../webapi/WebAPI";

const fetch = superclass => class extends superclass {
    static async fetch(logicalName = this.logicalName, fetchXml) {
        console.log(`Fetch ${logicalName} ${fetchXml}`);
        const result = await WebAPI.executeFetchXml(logicalName, fetchXml);
        return this.parseResult(result.value, logicalName);
    }
};
export default fetch;
