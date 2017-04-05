import WebAPI from "../webapi/WebAPI";

const del = superclass => class extends superclass {
    async delete() {
        const primaryId = await this.getPrimaryId(),
            logicalName = this.logicalName;
        console.log(`Delete ${logicalName} (${primaryId})`);
        return WebAPI.deleteEntity(logicalName, primaryId);
    }
};
export default del;
