import Entity from "./Entity";

class SubEntity extends Entity {
    static async get(id, query) {
        return super.get(this.logicalName, id, query);
    }

    static async query(query) {
        return super.query(this.logicalName, query);
    }

    static async fetch(fetchXml) {
        return super.fetch(this.logicalName, fetchXml);
    }
}
export default SubEntity;
