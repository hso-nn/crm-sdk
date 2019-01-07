
## WebAPI tutorial

## 1) Dynamics CRM Web-API
The Web-API is new for Microsoft Dynamics 365 (online and on-premises).
See more about your Web-API version via CRM => Settings => Customizations => Developer Resources.
See more about Dynamics CRM Web API at https://msdn.microsoft.com/en-us/library/gg334767.aspx.

# 2) WebAPI

## 2.1) Create
The createRecord method has two arguments:
* entityLogicalName
* data

```javascript
WebAPI.createRecord(entityLogicalName, data).then(function (data) {});
```

```javascript
WebAPI.createRecord("account", {
    emailaddress1: "test@company.com" 
}).then(function (data) {});
```

## 2.2) Delete
The deleteRecord method has two arguments:
* entityLogicalName
* id

```javascript
WebAPI.deleteRecord(entityLogicalName, id).then(function (data) {});
```

```javascript
WebAPI.deleteRecord("account", "475b158c-541c-e511-80d3-3863bb347ba8").then(function (data) {});
```

## 2.3.1) RetrieveRecord
The retrieveRecord method has four arguments:
* entityLogicalName
* id
* options

```javascript
WebAPI.retrieveRecord(entityLogicalName, id, options).then(function (data) {});
```

```javascript
WebAPI.retrieveRecord("account", "475b158c-541c-e511-80d3-3863bb347ba8").then(function (data) {});
```

## 2.3.2) RetrieveEntity
The retrieveEntity method has four arguments:
* logicalName
* entityId
* queryOptions (odata query string)
* headers (odata headers)

```javascript
WebAPI.retrieveEntity(logicalName, entityId, queryOptions, headers).then(function (data) {});
```

```javascript
WebAPI.retrieveEntity("account", "475b158c-541c-e511-80d3-3863bb347ba8").then(function (data) {});
```

## 2.4) GetEntityDefinitions
The getEntityDefinitions method is used to get the metadata.
There is one argument:
* logicalName

```javascript
WebAPI.getEntityDefinitions(logicalName).then(function(metadata) {});
```

## 2.5) RetrieveEntitySet
This method is used by retrieveEntity after finding the entitySetName
and can be used when entitySetName is known already.
The retrieveEntitySet method has three arguments:
* entitySetName
* entityId
* queryOptions (odata query string)

```javascript
WebAPI.retrieveEntitySet(entitySetName, entityId, queryOptions).then(function (data) {});
```

```javascript
WebAPI.retrieveEntitySet("accounts", "475b158c-541c-e511-80d3-3863bb347ba8").then(function (data) {});
```

## 2.6.1) RetrieveMultipleRecords
The retrieveMultipleRecords method has three arguments:
* entityLogicalName
* options
* maxPageSize

```javascript
WebAPI.retrieveMultipleRecords(entityLogicalName, options, maxPageSize).then(function (data) {});
```

## 2.6.2) RetrieveMultiple
The retrieveMultiple method has two arguments:
* logicalName
* queryOptions (odata query string)
* headers (odata headers)

```javascript
WebAPI.retrieveMultiple(logicalName, queryOptions, headers).then(function (data) {});
```

```javascript
WebAPI.retrieveMultiple("account", {
    emailaddress: "test@company.com"
}).then(function (data) {});
```

```javascript
WebAPI.retrieveMultiple("account", {}, {
    Prefer: "odata.maxpagesize=3"
}).then(function (data) {});
```

```javascript
WebAPI.retrieveMultiple("account", {
    top: 3
}).then(function (data) {});
```

## 2.7) Count
The count has one argument:
  * logicalName
  
```javascript
WebAPI.count(logicalName).then(function (nrEntities) {});
```

## 2.8) ExecuteFetchXml
The executeFetchXml has two arguments:
  * logicalName
  * fetchXml

```javascript
WebAPI.executeFetchXml(logicalName, fetchXml).then(function (data) {});
```

```javascript
WebAPI.executeFetchXml("systemuser", `<fetch>
                <entity name='systemuser'>
                    <attribute name='systemuserid' />
                    <filter type='and'>
                        <condition attribute='systemuserid' operator='eq-userid' />
                    </filter>
                </entity>
            </fetch>`)
.then(function (data) {});
```

## 2.9) ExecuteSavedQuery
```text
Enterprise version only
```
The executeSavedQuery has two arguments:
  * logicalName
  * queryName

```javascript
WebAPI.executeSavedQuery("account", "Active Accounts").then(data => {});
```

## 2.10) ExecuteUserQuery
```text
Enterprise version only
```
The executeUserQuery has two arguments:
  * logicalName
  * queryName
  
```javascript
WebAPI.executeUserQuery("account", "HelloWorld").then(data => {});
```

## 2.11) UpdateRecord
The updateRecord has four arguments:
  * entityLogicalName
  * entityId
  * attributes
  * query (enterprise version only; $select only: see https://msdn.microsoft.com/en-us/library/mt607664.aspx)

```javascript
WebAPI.updateRecord(entityLogicalName, entityId, attributes, query).then(function (data) {});
```

```javascript
WebAPI.updateRecord("account", "475b158c-541c-e511-80d3-3863bb347ba8", {
    emailaddress1: "test2@company.com"
}).then(function (data) {});
```

## 2.12) Actions
Bound and unbound actions can be executed via the webAPI.
If you don't know which one to use, the executeAction will do the check for you.
```javascript
WebAPI.executeAction(actionName, data, logicalName, entityId).then(function () {});
```

### 2.12.1) Unbound action
See https://msdn.microsoft.com/en-us/library/mt607600.aspx.
Unbound action has two arguments:
* actionName
* data

```javascript
WebAPI.executeUnboundAction(actionName, data).then(function () {});
```

### 2.12.2) Bound action
See https://msdn.microsoft.com/en-us/library/mt607600.aspx.
The bound action has four arguments:
* actionName
* data
* logicalName
* entityId

```javascript
WebAPI.executeBoundAction(actionName, data, logicalName, entityId).then(function () {});
```

## 2.13) Functions
Bound and unbound functions can be executed via the WebAPI.
If you don't know which one to use, the executeFunction will do the check for you.
```javascript
WebAPI.executeFunction(functionString, logicalName, entityId).then(function () {});
```

### 2.13.1) Unbound function
See https://msdn.microsoft.com/en-us/library/gg309638.aspx.
The execute unbound function has one argument:
* functionString

```javascript
WebAPI.executeUnboundFunction(functionString).then(function (data) {});
```

```javascript
WebAPI.executeUnboundFunction("WhoAmI").then(function (data) {
    console.log("UnboundFunction WhoAmI " + JSON.stringify(data));
});
```

### 2.13.2) Bound function
See https://msdn.microsoft.com/en-us/library/gg309638.aspx.
The execute bound function has three arguments:
* functionString
* logicalName
* entityId

```javascript
WebAPI.executeBoundFunction(functionString, logicalName, entityId).then(function () {});
```

## 2.14) Workflow
```text
Enterprise version only
```

Workflows can be executed by WebAPI.executeWorkflow.
A workflow is a bound action. See https://msdn.microsoft.com/en-us/library/mt491159.aspx for more information.
https://msdn.microsoft.com/en-us/library/mt491159.aspx
There are two arguments:
* workflowName
* entityId

```javascript
WebAPI.executeWorkflow("MyWorkflow", "475b158c-541c-e511-80d3-3863bb347ba8").then(function (data) {
    console.log("Workflow MyWorkflow " + JSON.stringify(data));
});
```

## 2.15) Associate/disassociate entities
See https://msdn.microsoft.com/en-us/library/mt607875.aspx.
Entities can be associated or disassociated using the WebAPI.

### 2.15.1) Associate entities
The associateEntities has five arguments:
* logicalName
* entityId
* navigationProperty
* associateEntity
* associateEntityId

```javascript
WebAPI.associateEntities(logicalName, entityId, navigationProperty, 
    associateEntity, associateEntityId).then(function () {});
```

### 2.15.2) disassociate entities
The disassociateEntities has four arguments:
* logicalName
* entityId
* navigationProperty
* associateEntityId

```javascript
WebAPI.disassociateEntities(logicalName, entityId, 
    navigationProperty, associateEntityId).then(function () {});
```

## 2.16) getEntitySetName
The getEntitySetName has one argument:
* logicalName

```javascript
WebAPI.getEntitySetName(logicalName).then(function (entitySetName) {});
```

```javascript
WebAPI.getEntitySetName("account").then(function (entitySetName) {
   console.log(entitySetName); //accounts 
});
```

## 2.17) batch
```text
Enterprise version only
```

The batch has two arguments:
* changeSets
* getSet

The result of changeSets is a boolean set to indicate whether it succeeded.
The result of getSet is the data like retrieveMultiple.

```javascript
WebAPI.batch(changeSets, getSets).then(function (result) {
    var changeSetsResult = result[0];
    var getSetResult = result[1];
});
```

```javascript
var changeSet1 = [{
    logicalName: "account",
    attributes: {
        accountid: "475b158c-541c-e511-80d3-3863bb347ba8",
        emailaddress1: "hallo@abc.nl"
    }
}, {
    logicalName: "account",
    attributes: {
        accountid: "475b158c-541c-e511-80d3-3863bb347ba8",
        emailaddress1: "olla@abc.nl"
    }
}];
var changeSet2 = [{
    logicalName: "account",
    attributes: {
        accountid: "475b158c-541c-e511-80d3-3863bb347ba8",
        emailaddress1: "ollahoe@abc.nl"
    }
}];
var getSet = [{
    logicalName: "account"
}, {
    logicalName: "systemuser"
}];
WebAPI.batch([changeSet1, changeSet2], getSet).then(function (result) {
     var changeSetsResult = result[0]; //[[true, true], [true]]
     var getSetResult = result[1]; //[accountData, systemuserData]
});
```

## 2.17.1) Referencing
It's also possible to [reference](http://www.odata.org/documentation/odata-version-3-0/batch-processing/) in a changeSet.
User reference instead of logicalName

```javascript
WebAPI.batch([[{
    logicalName: "account",
    attributes: {
        accountid: "475b158c-541c-e511-80d3-3863bb347ba8",
        emailaddress1: "hallo@abc.nl"
    }
}, {
    reference: "$0/Orders",
    attributes: {
        name: "x"
    }
}]]).then(function (data) {});
```

## 2.18) Odata headers
### 2.18.1) odata.include-annotations
Odata.include-annotations can be passed using the 'Prefer' header.
```javascript
WebAPI.retrieveMultiple("account", null, {
    Prefer: `odata.include-annotations=*`
}).then(data => {});
```

Following include-annotations are CRM specific. More can be found on in odata documentation on the web.
* Microsoft.Dynamics.CRM.lookuplogicalname
* Microsoft.Dynamics.CRM.associatednavigationproperty
* OData.Community.Display.V1.FormattedValue
* \*

## 2.19) getOptionSet
OptionSet for a specific entity attribute can be received for both Picklist as well as Boolean(Two Option) attributes.
The OptionSet will be mapped to a key-value object.
```javascript
WebAPI.getOptionSet("account", "industrycode").then(function (options) {
    options.forEach(function (option) {
        console.log(option.label + " " + option.value);
    });
}).catch(function (e) {
    throw e;
});
```