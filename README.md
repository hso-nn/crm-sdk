
## CRM-SDK

[![npm](https://img.shields.io/npm/dm/crm-sdk.svg)](https://www.npmjs.com/package/crm-sdk)
[![npm](https://img.shields.io/npm/dt/crm-sdk.svg)](https://www.npmjs.com/package/crm-sdk)
[![npm](https://img.shields.io/npm/v/crm-sdk.svg)](https://www.npmjs.com/package/crm-sdk)


Javasript Software Development Kit for CRM Web API.

## Why another library
There are several SDK's available, so why another one?
* This library does paging for you (using @odata-nextLink to do multiple requests)
* This library always finds correct entitySetName (which is not always: LogicalName + 's')
* This library is promise based
* This library supports ES6+
* This library supports default [WebAPI](#webapi-example) like other libraries, but also
* This library will support extra [abstraction](#crm-sdk-example) on short term

## BETA

This library is in beta. Source files will be added on short term.
[abstraction](#crm-sdk-example) layer will be added on short term.

## Table of contents

- [Install](#install)
- [WebAPI example](#webapi-example)
- [WebAPI](./WebAPI.md)
- [CRM-SDK](#crm-sdk-example)
- [Contribute](./Contribute.md)
- [Copyright](#copyright-and-license)

## Install

#### Install with Npm
```sh
$ npm install crm-sdk
```

#### Install via download
[Download latest release](https://github.com/dys-solutions/crm-sdk/archive/0.1.0.zip) and put reference to dist/WebAPI.js in your index.html.

## WebAPI example
#### Index.html
```html
<html>
<body>
    <script type="text/javascript" src="WebAPI.js"/>
    <script type="text/javascript" src="app.js"/>
</body>
</html>
```

#### app.js
```javascript
    WebAPI.version = "8.2"; //default 8.0

    WebAPI.retrieveEntity("account", "475b158c-541c-e511-80d3-3863bb347ba8")
    .then(function (accountData) {
        WebAPI.updateEntity("account", accountData.accountid, {
            emailaddress1: "test2@company.com"
        }).then(function (data) {
            console.log("saved " + data.accountid);
        });
    });
```

## CRM-SDK example
#### Index.html
```html
<html>
<body>
    <script type="text/javascript" src="CRMSDK.js"/>
    <script type="text/javascript" src="app.js"/>
</body>
</html>
```

#### app.js
```javascript
    var WebAPI = CRMSDK.WebAPI;
    var Entity = CRMSDK.Entity;
    WebAPI.version = "8.2"; //default 8.0

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
