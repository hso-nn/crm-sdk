
## Contribute
Please feel free to contribute to this library.
Please don't do Pull Request for dist folder.
Please use the .eslintrc.json.

## Table of contents

- [Clone](#clone)
- [Node Modules](#node-modules)
- [Building](#building)
- [Folder Structure](#folder-structure)
- [Linting](#linting)

## Clone

```sh
$ git clone https://github.com/dys-solutions/crm-sdk.git
```

## Node modules
```sh
    npm install
```

## Building

There are three ways to build:
- Production: `npm run build:prod`
- Develop: `npm run build`
- Develop using webpack-dev-server: `npm start`

## Folder Structure

The project has the following structure:
- **src** -> contains source files
    - **src\webapi\settings.json** -> contains default settings
- **dist** -> contains distribution files
    - **dist\WebAPI.js** -> the low-level WebAPI
    - **dist\CRMSDK.js** -> the high-level WebAPI
    
## Linting
The code is linted by ESLint. Please use the .eslintrc.json config file.