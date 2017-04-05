import WebAPI from "../webapi/WebAPI";

const update = superclass => class extends superclass {
    async save() {
        if (this.isNew) {
            return this.create();
        } else if (Object.keys(this.changes).length !== 0) {
            return this.update();
        }
    }

    async update() {
        const {changes} = this,
            primaryId = await this.getPrimaryId(),
            logicalName = this.logicalName;

        console.log(`Update ${logicalName} (${primaryId})`);
        await WebAPI.updateEntity(logicalName, primaryId, changes);
        this.changes = null;
    }
};
export default update;
