
## Translation

Translation is a wrapper of [i18next](https://www.i18next.com/). It also uses [i18next-xhr-backend](https://github.com/i18next/i18next-xhr-backend) to support lazy loading of translations. The advantage of being a wrapper is that it's also possible to use [i18next-scanner](https://www.npmjs.com/package/i18next-scanner) to extract key/values.
It will use the CRM lcid to load the corresponding location file.

### Usage

The Translation module is available on CRMSDK.
The Translation needs to be initialized first. This is asynchrone, since the lcid corresponding location file needs to be loaded.
The relativePath is the path to the location files folder. It's the Publisher prefix and maybe some subfolder. 
In the example below all translation files are put inside 'locales' subfolder.
By default the location files are supposed to be json files, but it's possible to use 'fileExtension' to change to 'js' for example. This is because the CRM file upload doesn't support 'json'.

Upload file '1033.json' to new_/locales:
```json
{
  "test": "Hello world"
}
```

```javascript
var Translation = CRMSDK.Translation;
// import {Translation} from "CRMSDK";

Translation.init({
    relativePath: "new_/locales"
    /*fileExtension: "js"*/
}).then(function () {
    console.log(Translation.translate("test"));
}).catch(e => {
   console.log(e);
});
```

### Extract key/value pairs from your project
Use [i18next-scanner](https://www.npmjs.com/package/i18next-scanner) to extract key/value pairs from your project.
Install i18next-scanner and use configuration example below. The func.list has "Translation.translate" and "Translator.t", which will do the trick.


```javascript
module.exports = {
    options: {
        debug: false,
        removeUnusedKeys: true,
        func: {
            list: ["Translation.translate", "Translator.t"]
        },
        lngs: ["1025", "1026", "1027", "1028", "1029", "1030", "1031", "1032", "1033", "1035", "1036", "1037", "1038",
            "1040", "1041", "1042", "1043", "1044", "1045", "1046", "1048", "1049", "1050", "1051", "1053", "1054", "1055", "1057", "1058",
            "1060", "1061", "1062", "1063", "1066", "1069", "1081", "1086", "1087", "1110",
            "2052", "2070", "2074",
            "3076", "3082", "3098"],
        resource: {
            loadPath: "src/translation/locales/{{lng}}.json",
            savePath: "src/translation/locales/{{lng}}.json"
        }
    }
};
```

Add following line to your package.json scripts part:
```json
{
  "scripts": {
    "i18next-scanner": "i18next-scanner --config i18next-scanner.config.js src/**/*.js"
  }
}
```

Now you can run that statement in the command line: npm run i18next-scanner
