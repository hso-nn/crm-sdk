import actions from "./actions";
import associate from "./associate";
import Class from "../Class";
import create from "./create";
import destroy from "./destroy";
import functions from "./functions";
import Metadata from "../metadata/Metadata";
import read from "./read";
import request from "./request";
import settings from "./settings.json";
import update from "./update";

class WebAPI extends actions(associate(create(destroy(functions(read(request(update(Class)))))))) {
    static get context() {
        if (typeof window.Xrm !== "undefined") {
            return window.Xrm.Page.context;
        } else if (typeof window.GetGlobalContext !== "undefined") {
            return window.GetGlobalContext();
        } else {
            throw new Error("Context is not available.");
        }
    }

    static get webAPIPath() {
        const clientUrl = this.context.getClientUrl(),
            api = this.version;
        return `${clientUrl}/api/data/${api}`;
    }

    static get version() {
        return this.api || settings.api;
    }

    static set version(version) {
        if (!version.startsWith("v")) {
            version = `v${version}`;
        }
        this.api = version;
    }

    static async getEntitySetName(logicalName) {
        const entityMetadata = await Metadata.getEntityDefinitions(logicalName);
        return entityMetadata.EntitySetName;
    }

    static async retrieveEntitySetProperty(entitySetName, entityId, property, queryOptions) {
        const queryString = WebAPI.buildQueryString(queryOptions),
            parsedEntityId = WebAPI.parseEntityId(entityId);
        return WebAPI.requestAndReturnBody("GET", `${entitySetName}(${parsedEntityId})/${property}${queryString}`);
    }

    static parseEntityId(entityId) {
        let parsedEntityId = entityId;
        if (typeof entityId === "object") {
            const entityIdList = [];
            for (const field in entityId) {
                if (entityId.hasOwnProperty(field)) {
                    entityIdList.push(`${field}='${entityId[field]}'`);
                }
            }
            parsedEntityId = entityIdList.join(",");
        }
        return parsedEntityId;
    }

    static requestNextLinks(nextLink) {
        let values = [];
        return WebAPI.requestAndReturnBody("GET", nextLink).then(async body => {
            values = body.value;
            if (body["@odata.nextLink"]) {
                //@odata.nextLink is an absolute url...
                values = values.concat(await WebAPI.requestNextLinks(body["@odata.nextLink"]));
            }
            return values;
        });
    }

    static buildQueryString(queryOptions = {}) {
        const queryParts = [];
        if (typeof queryOptions === "string") {
            queryParts.push(queryOptions);
        } else {
            if (queryOptions.select) {
                let selectValue;
                if (typeof queryOptions.select === "object") {
                    selectValue = queryOptions.select.join(",");
                } else {
                    selectValue = queryOptions.select;
                }
                queryParts.push(`$select=${selectValue}`);
            }
        }
        return queryParts.length ? "?" + queryParts.join("&") : "";
    }
}
export {WebAPI};
export default WebAPI;
