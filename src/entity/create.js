import Metadata from "../metadata/Metadata";
import WebAPI from "../webapi/WebAPI";

const create = superclass => class extends superclass {
    static async create(logicalName, entityData) {
        const entityMetadata = await Metadata.getEntityDefinitions(logicalName);
        console.log(`Create ${logicalName}`);
        entityData[entityMetadata.PrimaryIdAttribute] = await WebAPI.createEntity(logicalName, entityData);
        return this.parseResult([entityData], logicalName)[0];
    }

    async create() {
        return this.getClass().create(this.logicalName, this.data);
    }
};
export default create;
