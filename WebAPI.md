
## WebAPI tutorial

## 1) Dynamics CRM Web-API
The Web-API is new for Microsoft Dynamics 365 (online and on-premises).
See more about your Web-API version via CRM => Settings => Customizations => Developer Resources.
See more about Dynamics CRM Web API at https://msdn.microsoft.com/en-us/library/gg334767.aspx.

# 2) WebAPI

## 2.1) Create
The createEntity method has two parameters:
* logicalName
* attributes

```javascript
WebAPI.createEntity(logicalName, attributes).then(function (data) {});
```

```javascript
WebAPI.createEntity("account", {
    emailaddress1: "test@company.com" 
}).then(function (data) {});
```

## 2.2) Delete
The deleteEntity method has two parameters:
* logicalName
* entityId

```javascript
WebAPI.deleteEntity(logicalName, entityId).then(function (data) {});
```

```javascript
WebAPI.deleteEntity("account", "475b158c-541c-e511-80d3-3863bb347ba8").then(function (data) {});
```

## 2.3) RetrieveEntity
The retrieveEntity method has four parameters:
* logicalName
* entityId
* queryOptions (odata query string)
* headers (odata headers) (Enterprise version only)

```javascript
WebAPI.retrieveEntity(logicalName, entityId, queryOptions).then(function (data) {});
```

```javascript
WebAPI.retrieveEntity("account", "475b158c-541c-e511-80d3-3863bb347ba8").then(function (data) {});
```

## 2.4) RetrieveEntitySet
This class is used by retrieveEntity after finding the entitySetName
and can be used when entitySetName is known already.
The retrieveEntitySet method has three parameters:
* entitySetName
* entityId
* queryOptions (odata query string)

```javascript
WebAPI.retrieveEntitySet(entitySetName, entityId, queryOptions).then(function (data) {});
```

```javascript
WebAPI.retrieveEntitySet("accounts", "475b158c-541c-e511-80d3-3863bb347ba8").then(function (data) {});
```

## 2.5) RetrieveMultiple
The retrieveMultiple method has two parameters:
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

## 2.6) Count
The count has one parameter:
  * logicalName
  
```javascript
WebAPI.count(logicalName).then(function (nrEntities) {});
```

## 2.6) ExecuteFetchXml
The executeFetchXml has two parameters:
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

## 2.7) UpdateEntity
The updateEntity has four parameters:
* logicalName
* entityId
* attributes
* query (enterprise version only; $select only: see https://msdn.microsoft.com/en-us/library/mt607664.aspx)

```javascript
WebAPI.updateEntity(logicalName, entityId, attributes, query).then(function (data) {});
```

```javascript
WebAPI.updateEntity("account", "475b158c-541c-e511-80d3-3863bb347ba8", {
    emailaddress1: "test2@company.com"
}).then(function (data) {});
```

Update using query results in having return=representation (https://msdn.microsoft.com/en-us/library/mt607664.aspx)
```text
Enterprise version only
```
```javascript
WebAPI.updateEntity("account", data.accountid, {
    emailaddress3: "test3@test.com"
}, "$select=emailaddress3, accountid").then(function (result) {
    console.log("Update using select " + JSON.stringify(result.body));
});
```

## 2.8) Actions
Bound and unbound actions can be executed via the webAPI.
If you don't know which one to use, the executeAction will do the check for you.
```javascript
WebAPI.executeAction(actionName, data, logicalName, entityId).then(function () {});
```

### 2.8.1) Unbound action
See https://msdn.microsoft.com/en-us/library/mt607600.aspx.
Unbound action has two parameters:
* actionName
* data

```javascript
WebAPI.executeUnboundAction(actionName, data).then(function () {});
```

### 2.8.2) Bound action
See https://msdn.microsoft.com/en-us/library/mt607600.aspx.
The bound action has four parameters:
* actionName
* data
* logicalName
* entityId

```javascript
WebAPI.executeBoundAction(actionName, data, logicalName, entityId).then(function () {});
```

## 2.9) Functions
Bound and unbound functions can be executed via the WebAPI.
If you don't know which one to use, the executeFunction will do the check for you.
```javascript
WebAPI.executeFunction(functionString, logicalName, entityId).then(function () {});
```

### 2.9.1) Unbound function
See https://msdn.microsoft.com/en-us/library/gg309638.aspx.
The execute unbound function has one parameters:
* functionString

```javascript
WebAPI.executeUnboundFunction(functionString).then(function (data) {});
```

```javascript
WebAPI.executeUnboundFunction("WhoAmI").then(function (data) {
    console.log("UnboundFunction WhoAmI " + JSON.stringify(data));
});
```

### 2.9.2) Bound function
See https://msdn.microsoft.com/en-us/library/gg309638.aspx.
The execute bound function has three parameters:
* functionString
* logicalName
* entityId

```javascript
WebAPI.executeBoundFunction(functionString, logicalName, entityId).then(function () {});
```

## 2.10) Workflow
```text
Enterprise version only
```

Workflows can be executed by WebAPI.executeWorkflow.
A workflow is a bound action. See https://msdn.microsoft.com/en-us/library/mt491159.aspx for more information.
https://msdn.microsoft.com/en-us/library/mt491159.aspx
There are two parameters:
* workflowName
* entityId

```javascript
WebAPI.executeWorkflow("MyWorkflow", "475b158c-541c-e511-80d3-3863bb347ba8").then(function (data) {
    console.log("Workflow MyWorkflow " + JSON.stringify(data));
});
```

## 2.11) Associate/disassociate entities
See https://msdn.microsoft.com/en-us/library/mt607875.aspx.
Entities can be associated or disassociated using the WebAPI.

### 2.11.1) Associate entities
The associateEntities has five parameters:
* logicalName
* entityId
* navigationProperty
* associateEntity
* associateEntityId

```javascript
WebAPI.associateEntities(logicalName, entityId, navigationProperty, 
    associateEntity, associateEntityId).then(function () {});
```

### 2.11.2) disassociate entities
The disassociateEntities has four parameters:
* logicalName
* entityId
* navigationProperty
* associateEntityId

```javascript
WebAPI.disassociateEntities(logicalName, entityId, 
    navigationProperty, associateEntityId).then(function () {});
```

## 2.12) getEntitySetName
The getEntitySetName has one parameter:
* logicalName

```javascript
WebAPI.getEntitySetName(logicalName).then(function (entitySetName) {});
```

```javascript
WebAPI.getEntitySetName("account").then(function (entitySetName) {
   console.log(entitySetName); //accounts 
});
```

## 2.13) batch
```text
Enterprise version only
```

The batch has two parameters:
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

### 2.13.1) Referencing
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

## 2.14) Odata headers
### 2.14.1) odata.include-annotations
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
