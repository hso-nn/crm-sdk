
class Context {
    static get context() {
        if (typeof window.Xrm !== "undefined") {
            return window.Xrm.Page.context;
        } else if (typeof window.GetGlobalContext !== "undefined") {
            return window.GetGlobalContext();
        } else {
            throw new Error("Context is not available.");
        }
    }

    static get lcid() {
        const context = this.context;
        return context.getUserLcid() || context.getOrgLcid;
    }

    static get clientUrl() {
        if (!this.clntUrl) {
            let context;
            try {
                context = this.context;
                this.clntUrl = context.getClientUrl();
            } catch (e) {
                if (e.message === "window is not defined") {
                    throw new Error("If using NodeJS, please set clientUrl using Context.clientUrl setter");
                }
                throw e;
            }
        }
        return this.clntUrl;
    }

    static set clientUrl(clientUrl) {
        this.clntUrl = clientUrl;
    }

    static get version() {
        if (!this.api) {
            let context;
            try {
                context = this.context;
            } catch (e) {
                if (e.message === "window is not defined") {
                    throw new Error("If using NodeJS, please set webAPI version using Context.version setter");
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
}
export default Context;
