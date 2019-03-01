
const read = superclass => class extends superclass {
    /**
     * retrieveRecord
     * https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-webapi/retrieverecord
     * @param entityLogicalName
     * @param id
     * @param options
     * @returns {Promise<*>}
     */
    static async retrieveRecord(entityLogicalName, id, options) {
        if (typeof window !== "undefined" && window.Xrm && window.Xrm.WebApi) {
            return window.Xrm.WebApi.retrieveRecord(entityLogicalName, id, options);
        } else {
            return this.retrieveEntity(entityLogicalName, id, options.substr(1));
        }
    }

    static async retrieveEntity(logicalName, entityId, query, headers) {
        const entitySetName = await this.getEntitySetName(logicalName);
        return this.retrieveEntitySet(entitySetName, entityId, query, headers);
    }

    static retrieveEntitySet(entitySetName, entityId, queryOptions, headers) {
        const queryString = this.buildQueryString(queryOptions),
            parsedEntityId = entityId ? this.parseEntityId(entityId) : null;
        let url = `${entitySetName}`;
        if (parsedEntityId) {
            url += `(${parsedEntityId})`;
        }
        url += `${queryString}`;
        return this.requestAndReturnBody("GET", url, null, headers);
    }

    /**
     * retrieveMultipleRecords
     * https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-webapi/retrievemultiplerecords
     * @param entityLogicalName
     * @param options
     * @param maxPageSize
     * @returns {Promise<*>}
     */
    static async retrieveMultipleRecords(entityLogicalName, options, maxPageSize) {
        if (typeof window !== "undefined" && window.Xrm && window.Xrm.WebApi) {
            return window.Xrm.WebApi.retrieveMultipleRecords(entityLogicalName, options, maxPageSize);
        } else {
            const headers = maxPageSize ? {Prefer: `odata.maxpagesize=${maxPageSize}`} : {};
            return this.retrieveMultiple(entityLogicalName, options.substr(1), headers);
        }
    }

    static async retrieveMultiple(logicalName, query, headers) {
        const entitySetName = await this.getEntitySetName(logicalName),
            queryString = this.buildQueryString(query);
        return this.requestAndReturnBody("GET", `${entitySetName}${queryString}`, null, headers).then(async body => {
            const hasMaxpagesize = headers && headers.Prefer && headers.Prefer.includes("odata.maxpagesize");
            if (body["@odata.nextLink"] && !hasMaxpagesize) {
                const nextPagesValues = await this.requestNextLinks(body["@odata.nextLink"]);
                body.value = body.value.concat(nextPagesValues);
                delete body["@odata.nextLink"];
            }
            return body;
        });
    }

    static requestNextLinks(nextLink) {
        let values = [];
        return this.requestAndReturnBody("GET", decodeURI(nextLink)).then(async body => {
            values = body.value;
            if (body["@odata.nextLink"]) {
                //@odata.nextLink is an absolute url...
                values = values.concat(await this.requestNextLinks(body["@odata.nextLink"]));
            }
            return values;
        });
    }

    static async executeFetchXml(logicalName, fetchXml) {
        const entitySetName = await this.getEntitySetName(logicalName);
        return this.requestAndReturnBody("GET", `${entitySetName}?fetchXml=${fetchXml}`).then(async body => {
            if (body["@odata.nextLink"]) {
                const nextPagesValues = await this.requestNextLinks(body["@odata.nextLink"]);
                body.value = body.value.concat(nextPagesValues);
                delete body["@odata.nextLink"];
            }
            return body;
        });
    }

    static async count(logicalName) {
        const entitySetName = await this.getEntitySetName(logicalName),
            body = await this.requestAndReturnBody("GET", `${entitySetName}/$count`);
        return body;
    }
};
export default read;
