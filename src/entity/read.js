import Metadata from "../metadata/Metadata";
import WebAPI from "../webapi/WebAPI";

const read = superclass => class extends superclass {
    static get queryElements() {
        return ["attribute", "filters", "select", "expand", "orders", "maxpagesize", "top", "count"];
    }

    static async get(logicalName = this.logicalName, id, query = {}) {
        const queryOptions = await this.getQueryOptions(query, logicalName);
        if (id && query.filters) {
            console.log(`Get by 'id' does negate filters on query`);
        }
        console.log(`Get ${logicalName} (${id}) ${queryOptions}`);
        const data = await WebAPI.retrieveEntity(logicalName, id, queryOptions),
            value = data.value ? data.value : [data];
        const result = await this.parseResult(value, logicalName);
        return result[0];
    }

    static count(logicalName = this.logicalName) {
        return WebAPI.count(logicalName);
    }

    /**
     * query: {filters: [{type, conditions, filters}]}
     * type: "or" | "and"
     * conditions: [{attribute, operator, value}]
     *
     */
    static async query(logicalName = this.logicalName, query = {}) {
        const queryOptions = await this.getQueryOptions(query, logicalName);
        console.log(`Query ${logicalName}`);
        const result = await WebAPI.retrieveMultiple(logicalName, queryOptions, this.getHeaders(query));
        return this.parseResult(result.value, logicalName);
    }

    static getHeaders(query) {
        const headers = {};
        if (query.maxpagesize) {
            headers.Prefer = `odata.maxpagesize=${query.maxpagesize}`;
        }
        return headers;
    }

    /**
     * Rewrites filter attributes on query to filters collection in query.
     * .query({myAttribute: "abc"}) => .query({filters: [conditions: [{attribute: "myAttribute", operator: "eq", value: "abc"}]]})
     */
    static rewriteFilters(query) {
        const filter = {
            type: "and",
            conditions: []
        };
        if (!query.filters) {
            query.filters = [];
        }
        for (const key of Object.keys(query)) {
            if (!this.queryElements.includes(key)) {
                filter.conditions.push({
                    attribute: key.toLowerCase(),
                    operator: "eq",
                    value: query[key]
                });
            }
        }
        if (filter.conditions.length > 0) {
            query.filters.push(filter);
        }
    }

    /**
     * Rewrites select attributes, which are Lookups to expand.
     */
    static async rewriteSelect(query, logicalName) {
        if (query.select) {
            const entityAttributes = await this.getEntityAttributes(logicalName),
                clone = query.select.slice();
            for (const attribute of clone) {
                const entityAttribute = entityAttributes[attribute],
                    AttributeType = entityAttribute && entityAttribute.AttributeType;
                if (AttributeType === "Lookup") {
                    const entityMetadata = await Metadata.getEntityDefinitions(entityAttribute.Targets[0]),
                        index = query.select.indexOf(attribute);
                    query.select.splice(index, 1);
                    if (!query.expand) {
                        query.expand = [];
                    }
                    query.expand.push({
                        attribute: attribute,
                        select: [entityMetadata.PrimaryIdAttribute, entityMetadata.PrimaryNameAttribute]
                    });
                } else if (!AttributeType) {
                    throw(`Unexisting select field found: ${attribute}`);
                }
            }
        }
    }

    static async getQueryOptions(query, logicalName, separator = "&") {
        this.rewriteFilters(query);
        await this.rewriteSelect(query, logicalName);
        const options = [],
            parsedSelect = this.parseSelect(query.select),
            parsedFilters = await this.parseFilters(query.filters, logicalName),
            parsedExpand = await this.parseExpand(query.expand, logicalName),
            parsedOrders = this.parseOrders(query.orders),
            parsedTop = this.parseTop(query.top),
            parsedCount = this.parseCount(query.count);
        if (parsedFilters) {
            options.push(parsedFilters);
        }
        if (parsedSelect) {
            options.push(parsedSelect);
        }
        if (parsedExpand) {
            options.push(parsedExpand);
        }
        if (parsedOrders) {
            options.push(parsedOrders);
        }
        if (parsedTop) {
            options.push(parsedTop);
        }
        if (parsedCount) {
            options.push(parsedCount);
        }
        return options.join(separator);
    }

    static async parseExpand(expand = [], logicalName) {
        let parsedExpand = null;
        if (expand.length > 0) {
            let attributeString = "";
            for (const item of expand) {
                if (attributeString !== "") {
                    attributeString += ",";
                }
                if (typeof item === "string") {
                    try {
                        const navigationProperty = await this.getNavigationProperty(item, logicalName);
                        attributeString += `${navigationProperty}`;
                    } catch(e) {
                        throw e;
                    }
                } else {
                    try {
                        const {attribute} = item,
                            navigationProperty = await this.getNavigationProperty(attribute, logicalName),
                            entityAttributes = await this.getEntityAttributes(logicalName),
                            parsedSubQuery = await this.getQueryOptions(item, entityAttributes[attribute].Targets[0], ";");
                        attributeString += `${navigationProperty}(${parsedSubQuery})`;
                    } catch(e) {
                        throw e;
                    }
                }
            }
            parsedExpand = `$expand=${attributeString}`;
        }
        return parsedExpand;
    }

    static parseSelect(select = []) {
        let parsedAttributes = null;
        if (select.length > 0) {
            let attributeString = "";
            for (const attribute of select) {
                if (attributeString !== "") {
                    attributeString += ",";
                }
                attributeString += `${attribute}`;
            }
            parsedAttributes = `$select=${attributeString}`;
        }
        return parsedAttributes;
    }

    static async parseFilters(filters = [], logicalName) {
        let parsedFiltersString = null;
        if (filters.length > 0) {
            const parsedFilters = [];
            for (const filter of filters) {
                const {type, conditions} = filter;
                parsedFilters.push(await this.parseConditions(conditions, type, logicalName));
                if (filter.filters) {
                    const parsedSubFilterString = await this.parseFilters(filter.filters, logicalName);
                    parsedFilters.push(parsedSubFilterString.substring(8));//scrape $filter=
                }
            }
            parsedFiltersString = "$filter=" + parsedFilters.join("and");
        }
        return parsedFiltersString;
    }

    static async parseConditions(conditions = [], type = "and", logicalName) {
        let parsedConditions = "";
        const entityAttributes = await this.getEntityAttributes(logicalName);
        for (const condition of conditions) {
            let {operator, value} = condition,
                {attribute} = condition;
            const {AttributeType} = entityAttributes[attribute];
            attribute = AttributeType === "Lookup" ? `_${attribute}_value` : attribute;
            operator = operator || "eq";
            value = AttributeType === "String" ? `'${value}'` : `${value}`;
            if (parsedConditions !== "") {
                parsedConditions += ` ${type} `;
            }
            parsedConditions += `${attribute} ${operator} ${value}`;
        }
        //return encodeURIComponent(`(${parsedConditions})`);
        return `(${parsedConditions})`;
    }

    static parseOrders(orders = []) {
        let parsedOrders = null;
        if (orders.length > 0) {
            let attributeString = "";
            for (const {attribute, descending} of orders) {
                const orderString = !descending ? "asc" : "desc";
                if (attributeString !== "") {
                    attributeString += ",";
                }
                attributeString += `${attribute} ${orderString}`;
            }
            parsedOrders = `$orderby=${attributeString}`;
        }
        return parsedOrders;
    }

    static parseTop(top) {
        let parsedTop = null;
        if (top) {
            parsedTop = `$top=${top}`;
        }
        return parsedTop;
    }

    static parseCount(count) {
        let parsedCount = null;
        if (count === true) {
            parsedCount = `$count=${count}`;
        }
        return parsedCount;
    }
};
export default read;
