import SubEntity from "./SubEntity";

class Systemuser extends SubEntity {
    static get logicalName() {
        return "systemuser";
    }

    static getCurrent(query = {}) {
        if (!query.filters) {
            query.filters = [];
        }
        query.filters.push(this.currentFilter);
        return this.get(null, query);
    }

    static get currentFilter() {
        return {
            type: "and",
            conditions: [{
                attribute: "systemuserid",
                value: this.userId
            }]
        };
    }

    static get userId() {
        let userId = window.Xrm.Page.context.getUserId();
        return userId.slice(1, userId.length - 1);
    }
}
export default Systemuser;
