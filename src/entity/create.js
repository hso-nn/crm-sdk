import WebAPI from "../webapi/WebAPI";

const create = superclass => class extends superclass {
    static async create(logicalName, entityData) {
        console.log(`Create ${logicalName}`);
        const returnedData = await WebAPI.createEntity(logicalName, entityData);
        return this.parseResult([returnedData], logicalName).then(entities => entities[0]);
    }

    async create() {
        return this.getClass().create(this.logicalName, this.data).then(async entity => {
            this.data = entity.data;
            await this.getClass().addDescriptors(this, this.logicalName);
        });
    }
};
export default create;
