/* global define */
import actions from "./actions";
import associate from "./associate";
import Class from "../Class";
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
    static get context() {
        if (typeof window.Xrm !== "undefined") {
            return window.Xrm.Page.context;
        } else if (typeof window.GetGlobalContext !== "undefined") {
            return window.GetGlobalContext();
        } else {
            throw new Error("Context is not available.");
        }
    }

    static get clientUrl() {
        if (!this.clntUrl) {
            let context;
            try {
                context = this.context;
                this.clntUrl = context.getClientUrl();
            } catch (e) {
                if (e.message === "window is not defined") {
                    throw new Error("If using NodeJS, please set clientUrl using WebAPI.clientUrl setter");
                }
                throw e;
            }
        }
        return this.clntUrl;
    }

    static set clientUrl(clientUrl) {
        this.clntUrl = clientUrl;
    }

    static get webAPIPath() {
        const api = this.version;
        return `${this.clientUrl}/api/data/${api}`;
    }

    static get version() {
        if (!this.api) {
            let context;
            try {
                context = this.context;
            } catch (e) {
                if (e.message === "window is not defined") {
                    throw new Error("If using NodeJS, please set webAPI version using WebAPI.version setter");
                }
                throw e;
            }
            let version = context.getVersion();
            /**
             * <script src="../ClientGlobalContext.js.aspx" type="text/javascript"></script> resulted in a context without version
             */
            if (!version) {
                version = window.parent.Xrm.Page.context.getVersion();
            }
            this.version = version.substr(0, 3);
        }
        return this.api;
    }

    static set version(version) {
        if (!version.startsWith("v")) {
            version = `v${version}`;
        }
        this.api = version;
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
    
    static urlQueryString(locationSearch = window.location.search) {
        if (locationSearch.charAt(0) !== "?") {
            return locationSearch;
        }
        
        var pairs = locationSearch.substring(1).split("&"),
            obj = {}, pair, i, key, value;
        
        for ( i in pairs ) {
            if ( pairs[i] === "" ) continue;
            
            pair = pairs[i].split("=");
            
            key = decodeURIComponent(pair[0]);
            value = this.urlQueryString(decodeURIComponent(pair[1]));
            
            obj[key] = value;
        }
        
        return obj;
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
