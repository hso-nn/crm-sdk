import WebAPI from "../webapi/WebAPI";

class Metadata {
    static get cachedEntityDefinitions() {
        if (!this.entityDef) {
            this.entityDef = {};
        }
        return this.entityDef;
    }

    static async getEntityDefinitions(logicalName) {
        if (this.cachedEntityDefinitions[logicalName]) {
            return this.cachedEntityDefinitions[logicalName];
        }
        if (typeof logicalName !== "string") {
            throw Error("Invalid logicalName given");
        }
        const result = await WebAPI.retrieveEntitySet("EntityDefinitions", null, `$filter=LogicalName eq '${logicalName}'&$expand=Attributes,ManyToOneRelationships`),
            entityDefinitions = result.value[0];
        this.cachedEntityDefinitions[logicalName] = entityDefinitions;
        return entityDefinitions;
    }

    static getCachedEntityDefinitions(logicalName) {
        return this.cachedEntityDefinitions[logicalName];
    }

    static async getOptionSet(logicalName, attribute) {
        const entityDefinitions = await this.getEntityDefinitions(logicalName);
        for (const entityDefinitionAttribute of entityDefinitions.Attributes) {
            if (entityDefinitionAttribute.LogicalName === attribute) {
                const type = entityDefinitionAttribute.AttributeType;
                if (type === "Picklist") {
                    return this.getPicklistOptionSet(logicalName, attribute);
                } else if (type === "Boolean") {
                    return this.getBooleanOptionSet(logicalName, attribute);
                }
                break;
            }
        }
    }

    static async getPicklistOptionSet(logicalName, attribute) {
        const result = await WebAPI.retrieveEntitySet(`EntityDefinitions(LogicalName='${logicalName}')/Attributes(LogicalName='${attribute}')/Microsoft.Dynamics.CRM.PicklistAttributeMetadata`, null, `$select=LogicalName&$expand=OptionSet`);
        const options = result.OptionSet.Options.map(option => {
            return {
                value: option.Value,
                externalValue: option.ExternalValue,
                label: option.Label.UserLocalizedLabel.Label
            };
        });
        return options;
    }

    static async getBooleanOptionSet(logicalName, attribute) {
        const result = await WebAPI.retrieveEntitySet(`EntityDefinitions(LogicalName='${logicalName}')/Attributes(LogicalName='${attribute}')/Microsoft.Dynamics.CRM.BooleanAttributeMetadata`, null, `$select=LogicalName&$expand=OptionSet`),
            optionSet = result.OptionSet,
            falseOption = optionSet.FalseOption,
            trueOption = optionSet.TrueOption,
            options = [];
        options.push({
            value: falseOption.Value,
            label: falseOption.Label.UserLocalizedLabel.Label
        });
        options.push({
            value: trueOption.Value,
            label: trueOption.Label.UserLocalizedLabel.Label
        });
        return options;
    }
}
export default Metadata;
