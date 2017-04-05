
const read = superclass => class extends superclass {
    static async retrieveEntity(logicalName, entityId, queryOptions) {
        let entitySetName = await this.getEntitySetName(logicalName);
        return this.retrieveEntitySet(entitySetName, entityId, queryOptions);
    }

    static retrieveEntitySet(entitySetName, entityId, queryOptions) {
        let queryString = this.buildQueryString(queryOptions),
            parsedEntityId = entityId ? this.parseEntityId(entityId) : null,
            url = `${entitySetName}`;
        if (parsedEntityId) {
            url += `(${parsedEntityId})`;
        }
        url += `${queryString}`;
        return this.requestAndReturnBody("GET", url);
    }

    static async retrieveMultiple(logicalName, queryOptions) {
        let entitySetName = await this.getEntitySetName(logicalName),
            queryString = this.buildQueryString(queryOptions);
        return this.requestAndReturnBody("GET", `${entitySetName}${queryString}`).then(async body => {
            if (body["@odata.nextLink"]) {
                let nextPagesValues = await this.requestNextLinks(body["@odata.nextLink"]);
                body.value = body.value.concat(nextPagesValues);
                delete body["@odata.nextLink"];
            }
            return body;
        });
    }

    static async executeFetchXml(logicalName, fetchXml) {
        let entitySetName = await this.getEntitySetName(logicalName);
        return this.requestAndReturnBody("GET", `${entitySetName}?fetchXml=${fetchXml}`).then(async body => {
            if (body["@odata.nextLink"]) {
                let nextPagesValues = await this.requestNextLinks(body["@odata.nextLink"]);
                body.value = body.value.concat(nextPagesValues);
                delete body["@odata.nextLink"];
            }
            return body;
        });
    }
};
export default read;
