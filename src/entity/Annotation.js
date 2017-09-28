import Base64 from "../base64/Base64";
import SubEntity from "./SubEntity";

class Annotation extends SubEntity {
    static get logicalName() {
        return "annotation";
    }

    static async parseFile(annotation) {
        const {documentbody, mimetype} = annotation,
            blob = Base64.blob(documentbody, mimetype);
        blob.name = annotation.filename;
        return blob;
    }

    async parseFile(annotation) {
        return this.getClass().parseFile(annotation);
    }

    static async parseAnnotation(file, accountid) {
        if (!accountid) {
            throw new Error("No accountid specified!");
        }
        const base64 = await Base64.decodeBlob(file);
        const {name, type} = file;
        const annotation = new this({
            filename: name,
            mimetype: type,
            documentbody: base64
        });
        const strippedAccountid = accountid.startsWith("{") && accountid.endsWith("}") ? accountid.substr(1, accountid.length - 2) : accountid;
        try {
            await annotation.bind("objectid", strippedAccountid, "account");
            return annotation;
        } catch(e) {
            throw e;
        }
    }

    async parseAnnotation(file) {
        return this.getClass().parseAnnotation(file);
    }
}
export default Annotation;
