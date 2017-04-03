
## CRM-SDK


Javasript Software Development Kit for CRM Web API

## BETA

This library is in beta now and will be used in internal project first.

## Table of contents

- [WebAPI](https://github.com/dys-solutions/crm-sdk/blob/develop/WebAPI.md)
- [Building](#building)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [Copyright](#copyright-and-license)

## Building

To build:
- `npm install`
- `npm run build:prod` or `npm run build` or `npm start` (live reload)

## Folder Structure

The new build has the following structure:
- **\src** -> contains source files
- **\dist** -> contains distribution files
- **\dist\WebAPI.js and \dist\CRMSDK.js -> use these if not using a package manager and put CRMSDK on
the global scope. The new JavaScript distribution files contain the CSS for the grid, no need to reference
separately.
- **\src\webapi\settings.json -> contains default settings

## Contributing

Please don't do Pull Request for dist folder

## Copyright and license

Code and documentation copyright 2011-2017 Dynamics Software. Code released under the [MIT License](https://github.com/dys-solutions/crm-sdk/blob/master/LICENSE).
