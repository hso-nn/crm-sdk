import SubEntity from "./SubEntity";

class Account extends SubEntity {
    static get logicalName() {
        return "account";
    }

    static getActiveAccounts(query = {}) {
        if (!query.filters) {
            query.filters = [];
        }
        query.filters.push(this.activeFilter);
        return this.query(query);
    }

    static get activeFilter() {
        return {
            type: "and",
            conditions: [{
                attribute: "statecode",
                value: 0
            }]
        };
    }
}
export default Account;
