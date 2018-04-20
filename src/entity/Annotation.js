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

    static async parseAnnotation(file, id, logicalName) {
        if (!id) {
            throw new Error("No id specified!");
        }
        if (!logicalName) {
            throw new Error("No logicalName specified");
        }
        const base64 = await Base64.decodeBlob(file);
        const {name, type} = file;
        const annotation = new this({
            filename: name,
            mimetype: type,
            documentbody: base64
        });
        const strippedId = id.startsWith("{") && id.endsWith("}") ? id.substr(1, id.length - 2) : id;
        try {
            await annotation.bind("objectid", strippedId, logicalName);
            return annotation;
        } catch(e) {
            throw e;
        }
    }

    async parseAnnotation(file, id, logicalName) {
        return this.getClass().parseAnnotation(file, id, logicalName);
    }
}
export default Annotation;
