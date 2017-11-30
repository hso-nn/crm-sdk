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

    static async instantiate(data, logicalName) {
        const DerivedClass = await this.getDerivedClass(logicalName);
        const entity = new DerivedClass(data, logicalName);
        this.addDataToChanges(entity, data);
        return entity;
    }

    static addDataToChanges(entity, data) {
        const entityAttributes = entity.getClass().getCachedEntityAttributes(entity.logicalName);
        Object.keys(data).forEach(name => {
            const entityAttribute = entityAttributes && entityAttributes[name];
            if (entityAttribute) {
                entity.changes[name] = data[name];
            }
        });
    }

    async instantiate(data) {
        return this.getClass().instantiate(data, this.logicalName);
    }
};
export default create;
