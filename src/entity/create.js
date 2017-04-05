import Metadata from "../metadata/Metadata";
import WebAPI from "../webapi/WebAPI";

const create = superclass => class extends superclass {
    static async create(logicalName, entityData) {
        const entityMetadata = await Metadata.getEntityDefinitions(logicalName),
            attributes = [];
        console.log(`Create ${logicalName}`);
        entityData[entityMetadata.PrimaryIdAttribute] = await WebAPI.createEntity(logicalName, entityData);
        for (const attribute of Object.keys(entityData)) {
            attributes.push(attribute);
        }
        return this.parseResult([entityData], logicalName, attributes)[0];
    }

    async create() {
        return this.getClass().create(this.logicalName, this.data);
    }
};
export default create;
