
## CRM-SDK

[![npm](https://img.shields.io/npm/dm/crm-sdk.svg)](https://www.npmjs.com/package/crm-sdk)
[![npm](https://img.shields.io/npm/dt/crm-sdk.svg)](https://www.npmjs.com/package/crm-sdk)
[![npm](https://img.shields.io/npm/v/crm-sdk.svg)](https://www.npmjs.com/package/crm-sdk)


Javascript Software Development Kit for Dynamics CRM Web API.

## Why another library
There are several SDK's available, so why another one?
* This library does paging for you (using @odata-nextLink to do multiple requests)
* This library always finds correct entitySetName (which is not always: LogicalName + 's')
* This library is promise based
* This library supports modules
* This library supports default [WebAPI](#webapi-example) like other libraries, but also
* This library supports extra [Entity abstraction](#entity-abstraction-example)

## Table of contents

- [Install](#install)
- [WebAPI example](#webapi-example)
- [WebAPI](./WebAPI.md)
- [Entity abstraction example](#entity-abstraction-example)
- [Entity abstraction](./Entity.md)
- [Contribute](./Contribute.md)
- [Copyright](#copyright-and-license)

## Install

### Install with Npm
```sh
$ npm install crm-sdk
```

#### Modules
```javascript
//app.js
import {WebAPI} from "crm-sdk";

WebAPI.retrieveEntity("account", "475b158c-541c-e511-80d3-3863bb347ba8").then(function (data) {
    //todo logic here
});
```

#### Require
```javascript
//app.js
var CRMSDK = require("crm-sdk"); //umd
var WebAPI = CRMSDK.WebAPI;

WebAPI.retrieveEntity("account", "475b158c-541c-e511-80d3-3863bb347ba8").then(function (data) {
    //todo logic here
});
```

### Install via download
[Download latest release](https://github.com/dys-solutions/crm-sdk/archive/0.2.0.zip) and put reference to dist/CRMSDK.js in your index.html.

In example below, the app.js is your own application code.
If you only need CRMSDK.WebAPI, you can include CRMSDK.slim.js in index.html instead of CRMSDK.js.
```html
<html>
<body>
    <script type="text/javascript" src="CRMSDK.js"/>
    <script type="text/javascript" src="app.js"/>
</body>
</html>
```

In app.js, The WebAPI will be available on window.CRMSDK scope. Example for using WebAPI below:
```javascript
//app.js
var WebAPI = window.CRMSDK.WebAPI;

WebAPI.retrieveEntity("account", "475b158c-541c-e511-80d3-3863bb347ba8").then(function (data) {
    //todo logic here 
});
```

## WebAPI example
### Index.html
```html
<html>
<body>
    <script type="text/javascript" src="CRMSDK.slim.js"/>
    <script type="text/javascript" src="app.js"/>
</body>
</html>
```

### app.js
```javascript
    var WebAPI = CRMSDK.WebAPI;

    WebAPI.retrieveEntity("account", "475b158c-541c-e511-80d3-3863bb347ba8")
    .then(function (accountData) {
        WebAPI.updateEntity("account", accountData.accountid, {
            emailaddress1: "test2@company.com"
        }).then(function (data) {
            console.log("saved " + data.accountid);
        });
    });
```

## Entity abstraction example
### Index.html
```html
<html>
<body>
    <script type="text/javascript" src="CRMSDK.js"/>
    <script type="text/javascript" src="app.js"/>
</body>
</html>
```

### app.js
```javascript
    var WebAPI = CRMSDK.WebAPI;
    var Entity = CRMSDK.Entity;

    Entity.get("account", "475b158c-541c-e511-80d3-3863bb347ba8")
    .then(function (account) {
        account.emailaddress1 = "test2@company.com";
        account.save().then(function () {
            console.log("saved! " + account.accountid);
        });
    });
```

## Copyright and license

Code and documentation copyright 2011-2017 Dynamics Software. Code released under the [MIT License](https://github.com/dys-solutions/crm-sdk/blob/master/LICENSE).
