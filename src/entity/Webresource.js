import SubEntity from "./SubEntity";
import WebAPI from "../webapi/WebAPI";
const solutionUniqueNameWeakMap = new WeakMap();

class Webresource extends SubEntity {
    static get logicalName() {
        return "webresource";
    }

    async update() {
        await super.update();
        const data = {
            ParameterXml: `<importexportxml><webresources><webresource>{${this.webresourceid}}</webresource></webresources></importexportxml>`
        };
        return WebAPI.executeAction("PublishXml", data);
    }

    async create() {
        this.data.webresourcetype = await this.getWebresourcetype();
        await super.create();
        const data = {
            ComponentId: this.data.webresourceid,
            ComponentType: 61,
            SolutionUniqueName: this.solutionUniqueName,
            AddRequiredComponents: false,
            IncludedComponentSettingsValues: null
        };
        return WebAPI.executeAction("AddSolutionComponent", data);
    }

    set solutionUniqueName(solutionUniqueName) {
        solutionUniqueNameWeakMap.set(this, solutionUniqueName);
    }

    get solutionUniqueName() {
        return solutionUniqueNameWeakMap.get(this);
    }

    async getWebresourcetype() {
        const options = await WebAPI.getOptionSet(this.logicalName, "webresourcetype"),
            namesplit = this.data.name.split("."),
            extension = namesplit[namesplit.length - 1];
        for (const {value, label} of options) {
            if (label.toLowerCase().includes(extension)) {
                return parseInt(value);
            }
        }
    }
}
export default Webresource;
