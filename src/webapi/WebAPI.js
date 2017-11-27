/* global define */
import actions from "./actions";
import associate from "./associate";
import Class from "../Class";
import Context from "../context/Context";
import create from "./create";
import destroy from "./destroy";
import functions from "./functions";
import Metadata from "../metadata/Metadata";
import read from "./read";
import request from "./request";
import update from "./update";
const bearerWeakMap = new WeakMap();

if (typeof window !== "undefined" && typeof window.Xrm === "undefined" && typeof window.parent.Xrm !== "undefined") {
    window.Xrm = window.parent.Xrm;
}

class WebAPI extends actions(associate(create(destroy(functions(read(request(update(Class)))))))) {
    static get webAPIPath() {
        const version = Context.version;
        return `${Context.clientUrl}/api/data/${version}`;
    }

    static get bearer() {
        return bearerWeakMap.get(this);
    }

    static set bearer(bearer) {
        bearerWeakMap.set(this, bearer);
    }

    static getEntityDefinitions(logicalName) {
        return Metadata.getEntityDefinitions(logicalName);
    }

    static async getEntitySetName(logicalName) {
        const entityMetadata = await this.getEntityDefinitions(logicalName);
        return entityMetadata.EntitySetName;
    }

    static getOptionSet(logicalName, attribute) {
        return Metadata.getOptionSet(logicalName, attribute);
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
        } else if (entityId.startsWith("{") && entityId.endsWith("}")) {
            parsedEntityId = parsedEntityId.substr(1, parsedEntityId.length - 2);
        }
        return parsedEntityId;
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
            if (queryOptions.top) {
                queryParts.push(`$top=${queryOptions.top}`);
            }
            if (queryOptions.count) {
                queryParts.push(`$count=${queryOptions.count}`);
            }
        }
        return queryParts.length ? "?" + queryParts.join("&") : "";
    }
}
export {WebAPI};
export default WebAPI;

// webpack hack to export class directly,
// - instead of using 'new WebpackAutoInject.default()',
// - with this you can just use WebpackAutoInject();
if (typeof define === "function") {
    define(() => {
        return WebAPI;
    });
}
