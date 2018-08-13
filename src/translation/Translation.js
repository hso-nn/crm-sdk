import Context from "../context/Context";
import i18next from "i18next";
import XHR from "i18next-xhr-backend";

class Translation {
    static init(options = {relativePath: null, fileExtension: null}) {
        return new Promise((resolve, reject) => {
            if (!options.relativePath) {
                reject("Please specify relativePath like 'new_'");
                return;
            }
            i18next
                .use(XHR)
                .init({
                    lng: Context.lcid.toString(),
                    fallbackLng: "1033",
                    backend: {
                        loadPath: this.getLoadPath(options.relativePath, options.fileExtension)
                    }
                }, (err, t) => {
                    err ? reject(err) : resolve(t);
                });
        });
    }

    static getLoadPath(relativePath = "", fileExtension = "json") {
        const resourceVersion = window.top.WEB_RESOURCE_ORG_VERSION_NUMBER || "",
            clientUrl = Context.clientUrl;
        let path = relativePath;
        path = path.startsWith(".") ? path.substr(1) : path;
        path = !path.startsWith("/") ? `/${path}` : path;
        return `${clientUrl}/${resourceVersion}/WebResources/${path}/{{lng}}.${fileExtension}`;
    }

    static translate(text, options) {
        if (text instanceof Array) {
            const translations = [];
            for (const txt of text) {
                translations.push(this.translate(txt, options));
            }
            return translations;
        } else {
            return i18next.t(text, options);
        }
    }

    static t(text, options) {
        return this.translate(text, options);
    }
}
export default Translation;
