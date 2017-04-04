
## WebAPI tutorial

## 1) CRM Web-API
The Web-API is promise based and will:
* Page (using @odata-nextLink)
* Use LogicalName(entityName) by finding correct entitySetName instead of LogicalName + 's'

### 1.1 Check WebApi support
The Web-API is new for Microsoft Dynamics 365 (online and on-premises).
See more about your Web-API version via CRM => Settings => Customizations => Developer Resources.
See more about Dynamics CRM Web API at https://msdn.microsoft.com/en-us/library/gg334767.aspx.

## 2) Include library
The WebAPI supports low-level requests. 
There is also a CRMSDK to support low- and high-level requests.
The library can be used via index.html or via modules. 
Besides the including, the usage of the library is equal for both index.html and module way of use. 

### 2.1) Index.html
Include the library in your index.html. The app.js is your own application code.
```html
<html>
<body>
    <script type="text/javascript" src="WebAPI.js"/>
    <script type="text/javascript" src="app.js"/>
</body>
</html>
```

In app.js, The WebAPI will be available on window scope. Example for using WebAPI below:
```javascript
//app.js
var WebAPI = window.WebAPI;

WebAPI.retrieveEntity("account", "475b158c-541c-e511-80d3-3863bb347ba8").then(function (data) {
    //todo logic here 
});
```

### 2.2) Modules
The library can be imported or required. 
Using that means no include of the WebAPI.js in index.html is needed.
You only have to upload app.js to CRM instead of the WebAPI.js too.

#### 2.2.1) Example of ECMAScript 6.
```javascript
//app.js
import {WebAPI} from "../dist/WebAPI";

WebAPI.retrieveEntity("account", "475b158c-541c-e511-80d3-3863bb347ba8").then(function (data) {
    //todo logic here 
});
```

#### 2.2.2) Example of require
```javascript
//app.js
var WebAPI = require("../dist/WebAPI.js"); //umd

WebAPI.retrieveEntity("account", "475b158c-541c-e511-80d3-3863bb347ba8").then(function (data) {
    //todo logic here 
});
```

# 3) WebAPI
The WebAPI.js is the low level SDK for the CRM webApi.

## 3.1) Version
The default webApi version is 8.0, but you can change it runtime by setting the version.
```javascript
WebAPI.version = "8.2";
```

## 3.2) Create
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

## 3.3) Delete
The deleteEntity method has two parameters:
* logicalName
* entityId

```javascript
WebAPI.deleteEntity(logicalName, entityId).then(function (data) {});
```

```javascript
WebAPI.deleteEntity("account", "475b158c-541c-e511-80d3-3863bb347ba8").then(function (data) {});
```

## 3.4) RetrieveEntity
The retrieveEntity method has three parameters:
* logicalName
* entityId
* queryOptions (odata query string)

```javascript
WebAPI.retrieveEntity(logicalName, entityId, queryOptions).then(function (data) {});
```

```javascript
WebAPI.retrieveEntity("account", "475b158c-541c-e511-80d3-3863bb347ba8").then(function (data) {});
```

## 3.5) RetrieveEntitySet
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

## 3.6) RetrieveMultiple
The retrieveMultiple method has two parameters:
* logicalName
* queryOptions (odata query string)

```javascript
WebAPI.retrieveMultiple(logicalName, queryOptions).then(function (data) {});
```

```javascript
WebAPI.retrieveMultiple("account", {
    emailaddress: "test@company.com"
}).then(function (data) {});
```

## 3.7) ExecuteFetchXml
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

## 3.8) UpdateEntity
The updateEntity has three parameters:
* logicalName
* entityId
* attributes

```javascript
WebAPI.updateEntity(logicalName, entityId, attributes).then(function (data) {});
```

```javascript
WebAPI.updateEntity("account", "475b158c-541c-e511-80d3-3863bb347ba8", {
    emailaddress1: "test2@company.com"
}).then(function (data) {});
```

## 3.9) Actions
Bound and unbound actions can be executed via the webAPI.
If you don't know which one to use, the executeAction will do the check for you.
```javascript
WebAPI.executeAction(actionName, data, logicalName, entityId).then(function () {});
```

### 3.9.1) Unbound action
See https://msdn.microsoft.com/en-us/library/mt607600.aspx.
Unbound action has two parameters:
* actionName
* data

```javascript
WebAPI.executeUnboundAction(actionName, data).then(function () {});
```

### 3.9.2) Bound action
See https://msdn.microsoft.com/en-us/library/mt607600.aspx.
The bound action has four parameters:
* actionName
* data
* logicalName
* entityId

```javascript
WebAPI.executeBoundAction(actionName, data, logicalName, entityId).then(function () {});
```

## 3.10) Functions
Bound and unbound functions can be executed via the WebAPI.
If you don't know which one to use, the executeFunction will do the check for you.
```javascript
WebAPI.executeFunction(functionString, logicalName, entityId).then(function () {});
```

### 3.10.1) Unbound function
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

### 3.10.2) Bound function
See https://msdn.microsoft.com/en-us/library/gg309638.aspx.
The execute bound function has three parameters:
* functionString
* logicalName
* entityId

```javascript
WebAPI.executeBoundFunction(functionString, logicalName, entityId).then(function () {});
```

## 3.11) Associate/disassociate entities
See https://msdn.microsoft.com/en-us/library/mt607875.aspx.
Entities can be associated or disassociated using the WebAPI.

### 3.11.1) Associate entities
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

### 3.11.2) disassociate entities
The disassociateEntities has four parameters:
* logicalName
* entityId
* navigationProperty
* associateEntityId

```javascript
WebAPI.disassociateEntities(logicalName, entityId, 
    navigationProperty, associateEntityId).then(function () {});
```

## 3.12) getEntitySetName
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