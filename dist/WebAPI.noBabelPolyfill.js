/*! crm-sdk 1.8.0 | (c) Dynamics Software | MIT license - https://github.com/dys-solutions/crm-sdk/blob/develop/LICENSE */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("WebAPI.noBabelPolyfill", [], factory);
	else if(typeof exports === 'object')
		exports["WebAPI.noBabelPolyfill"] = factory();
	else
		root["WebAPI.noBabelPolyfill"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 357);
/******/ })
/************************************************************************/
/******/ ({

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WebAPI = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _actions2 = __webpack_require__(70);

var _actions3 = _interopRequireDefault(_actions2);

var _associate = __webpack_require__(71);

var _associate2 = _interopRequireDefault(_associate);

var _Class = __webpack_require__(51);

var _Class2 = _interopRequireDefault(_Class);

var _create = __webpack_require__(72);

var _create2 = _interopRequireDefault(_create);

var _destroy = __webpack_require__(73);

var _destroy2 = _interopRequireDefault(_destroy);

var _functions = __webpack_require__(74);

var _functions2 = _interopRequireDefault(_functions);

var _Metadata = __webpack_require__(43);

var _Metadata2 = _interopRequireDefault(_Metadata);

var _read = __webpack_require__(75);

var _read2 = _interopRequireDefault(_read);

var _request = __webpack_require__(76);

var _request2 = _interopRequireDefault(_request);

var _update = __webpack_require__(77);

var _update2 = _interopRequireDefault(_update);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global define */


var bearerWeakMap = new WeakMap();

if (typeof window !== "undefined" && typeof window.Xrm === "undefined" && typeof window.parent.Xrm !== "undefined") {
    window.Xrm = window.parent.Xrm;
}

var WebAPI = function (_actions) {
    _inherits(WebAPI, _actions);

    function WebAPI() {
        _classCallCheck(this, WebAPI);

        return _possibleConstructorReturn(this, (WebAPI.__proto__ || Object.getPrototypeOf(WebAPI)).apply(this, arguments));
    }

    _createClass(WebAPI, null, [{
        key: "getEntityDefinitions",
        value: function getEntityDefinitions(logicalName) {
            return _Metadata2.default.getEntityDefinitions(logicalName);
        }
    }, {
        key: "getEntitySetName",
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(logicalName) {
                var entityMetadata;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.getEntityDefinitions(logicalName);

                            case 2:
                                entityMetadata = _context.sent;
                                return _context.abrupt("return", entityMetadata.EntitySetName);

                            case 4:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getEntitySetName(_x) {
                return _ref.apply(this, arguments);
            }

            return getEntitySetName;
        }()
    }, {
        key: "getOptionSet",
        value: function getOptionSet(logicalName, attribute) {
            return _Metadata2.default.getOptionSet(logicalName, attribute);
        }
    }, {
        key: "parseEntityId",
        value: function parseEntityId(entityId) {
            var parsedEntityId = entityId;
            if ((typeof entityId === "undefined" ? "undefined" : _typeof(entityId)) === "object") {
                var entityIdList = [];
                for (var field in entityId) {
                    if (entityId.hasOwnProperty(field)) {
                        entityIdList.push(field + "='" + entityId[field] + "'");
                    }
                }
                parsedEntityId = entityIdList.join(",");
            } else if (entityId.startsWith("{") && entityId.endsWith("}")) {
                parsedEntityId = parsedEntityId.substr(1, parsedEntityId.length - 2);
            }
            return parsedEntityId;
        }
    }, {
        key: "buildQueryString",
        value: function buildQueryString() {
            var queryOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var queryParts = [];
            if (typeof queryOptions === "string") {
                queryParts.push(queryOptions);
            } else {
                if (queryOptions.select) {
                    var selectValue = void 0;
                    if (_typeof(queryOptions.select) === "object") {
                        selectValue = queryOptions.select.join(",");
                    } else {
                        selectValue = queryOptions.select;
                    }
                    queryParts.push("$select=" + selectValue);
                }
                if (queryOptions.top) {
                    queryParts.push("$top=" + queryOptions.top);
                }
                if (queryOptions.count) {
                    queryParts.push("$count=" + queryOptions.count);
                }
            }
            return queryParts.length ? "?" + queryParts.join("&") : "";
        }
    }, {
        key: "urlQueryString",
        value: function urlQueryString() {
            var locationSearch = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location.search;

            if (locationSearch.charAt(0) !== "?") {
                return locationSearch;
            }

            var pairs = locationSearch.substring(1).split("&"),
                obj = {},
                pair,
                i,
                key,
                value;

            for (i in pairs) {
                if (pairs[i] === "") continue;

                pair = pairs[i].split("=");

                key = decodeURIComponent(pair[0]);
                value = this.urlQueryString(decodeURIComponent(pair[1]));

                obj[key] = value;
            }

            return obj;
        }
    }, {
        key: "context",
        get: function get() {
            if (typeof window.Xrm !== "undefined") {
                return window.Xrm.Page.context;
            } else if (typeof window.GetGlobalContext !== "undefined") {
                return window.GetGlobalContext();
            } else {
                throw new Error("Context is not available.");
            }
        }
    }, {
        key: "clientUrl",
        get: function get() {
            if (!this.clntUrl) {
                var context = void 0;
                try {
                    context = this.context;
                    this.clntUrl = context.getClientUrl();
                } catch (e) {
                    if (e.message === "window is not defined") {
                        throw new Error("If using NodeJS, please set clientUrl using WebAPI.clientUrl setter");
                    }
                    throw e;
                }
            }
            return this.clntUrl;
        },
        set: function set(clientUrl) {
            this.clntUrl = clientUrl;
        }
    }, {
        key: "webAPIPath",
        get: function get() {
            var api = this.version;
            return this.clientUrl + "/api/data/" + api;
        }
    }, {
        key: "version",
        get: function get() {
            if (!this.api) {
                var context = void 0;
                try {
                    context = this.context;
                } catch (e) {
                    if (e.message === "window is not defined") {
                        throw new Error("If using NodeJS, please set webAPI version using WebAPI.version setter");
                    }
                    throw e;
                }
                var version = context.getVersion();
                /**
                 * <script src="../ClientGlobalContext.js.aspx" type="text/javascript"></script> resulted in a context without version
                 */
                if (!version) {
                    version = window.parent.Xrm.Page.context.getVersion();
                }
                this.version = version.substr(0, 3);
            }
            return this.api;
        },
        set: function set(version) {
            if (!version.startsWith("v")) {
                version = "v" + version;
            }
            this.api = version;
        }
    }, {
        key: "bearer",
        get: function get() {
            return bearerWeakMap.get(this);
        },
        set: function set(bearer) {
            bearerWeakMap.set(this, bearer);
        }
    }]);

    return WebAPI;
}((0, _actions3.default)((0, _associate2.default)((0, _create2.default)((0, _destroy2.default)((0, _functions2.default)((0, _read2.default)((0, _request2.default)((0, _update2.default)(_Class2.default)))))))));

exports.WebAPI = WebAPI;
exports.default = WebAPI;

// webpack hack to export class directly,
// - instead of using 'new WebpackAutoInject.default()',
// - with this you can just use WebpackAutoInject();

if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
        return WebAPI;
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}

/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);


/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _WebAPI = __webpack_require__(15);

var _WebAPI2 = _interopRequireDefault(_WebAPI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Metadata = function () {
    function Metadata() {
        _classCallCheck(this, Metadata);
    }

    _createClass(Metadata, null, [{
        key: "getEntityDefinitions",
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(logicalName) {
                var result, entityDefinitions;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (!this.cachedEntityDefinitions[logicalName]) {
                                    _context.next = 2;
                                    break;
                                }

                                return _context.abrupt("return", this.cachedEntityDefinitions[logicalName]);

                            case 2:
                                if (!(typeof logicalName !== "string")) {
                                    _context.next = 4;
                                    break;
                                }

                                throw Error("Invalid logicalName given");

                            case 4:
                                _context.next = 6;
                                return _WebAPI2.default.retrieveEntitySet("EntityDefinitions", null, "$filter=LogicalName eq '" + logicalName + "'&$expand=Attributes,ManyToOneRelationships");

                            case 6:
                                result = _context.sent;
                                entityDefinitions = result.value[0];

                                this.cachedEntityDefinitions[logicalName] = entityDefinitions;
                                return _context.abrupt("return", entityDefinitions);

                            case 10:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getEntityDefinitions(_x) {
                return _ref.apply(this, arguments);
            }

            return getEntityDefinitions;
        }()
    }, {
        key: "getCachedEntityDefinitions",
        value: function getCachedEntityDefinitions(logicalName) {
            return this.cachedEntityDefinitions[logicalName];
        }
    }, {
        key: "getOptionSet",
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(logicalName, attribute) {
                var entityDefinitions, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, entityDefinitionAttribute, type;

                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return this.getEntityDefinitions(logicalName);

                            case 2:
                                entityDefinitions = _context2.sent;
                                _iteratorNormalCompletion = true;
                                _didIteratorError = false;
                                _iteratorError = undefined;
                                _context2.prev = 6;
                                _iterator = entityDefinitions.Attributes[Symbol.iterator]();

                            case 8:
                                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                    _context2.next = 22;
                                    break;
                                }

                                entityDefinitionAttribute = _step.value;

                                if (!(entityDefinitionAttribute.LogicalName === attribute)) {
                                    _context2.next = 19;
                                    break;
                                }

                                type = entityDefinitionAttribute.AttributeType;

                                if (!(type === "Picklist")) {
                                    _context2.next = 16;
                                    break;
                                }

                                return _context2.abrupt("return", this.getPicklistOptionSet(logicalName, attribute));

                            case 16:
                                if (!(type === "Boolean")) {
                                    _context2.next = 18;
                                    break;
                                }

                                return _context2.abrupt("return", this.getBooleanOptionSet(logicalName, attribute));

                            case 18:
                                return _context2.abrupt("break", 22);

                            case 19:
                                _iteratorNormalCompletion = true;
                                _context2.next = 8;
                                break;

                            case 22:
                                _context2.next = 28;
                                break;

                            case 24:
                                _context2.prev = 24;
                                _context2.t0 = _context2["catch"](6);
                                _didIteratorError = true;
                                _iteratorError = _context2.t0;

                            case 28:
                                _context2.prev = 28;
                                _context2.prev = 29;

                                if (!_iteratorNormalCompletion && _iterator.return) {
                                    _iterator.return();
                                }

                            case 31:
                                _context2.prev = 31;

                                if (!_didIteratorError) {
                                    _context2.next = 34;
                                    break;
                                }

                                throw _iteratorError;

                            case 34:
                                return _context2.finish(31);

                            case 35:
                                return _context2.finish(28);

                            case 36:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this, [[6, 24, 28, 36], [29,, 31, 35]]);
            }));

            function getOptionSet(_x2, _x3) {
                return _ref2.apply(this, arguments);
            }

            return getOptionSet;
        }()
    }, {
        key: "getPicklistOptionSet",
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(logicalName, attribute) {
                var result, options;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return _WebAPI2.default.retrieveEntitySet("EntityDefinitions(LogicalName='" + logicalName + "')/Attributes(LogicalName='" + attribute + "')/Microsoft.Dynamics.CRM.PicklistAttributeMetadata", null, "$select=LogicalName&$expand=OptionSet");

                            case 2:
                                result = _context3.sent;
                                options = result.OptionSet.Options.map(function (option) {
                                    return {
                                        value: option.Value,
                                        label: option.Label.UserLocalizedLabel.Label
                                    };
                                });
                                return _context3.abrupt("return", options);

                            case 5:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function getPicklistOptionSet(_x4, _x5) {
                return _ref3.apply(this, arguments);
            }

            return getPicklistOptionSet;
        }()
    }, {
        key: "getBooleanOptionSet",
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(logicalName, attribute) {
                var result, optionSet, falseOption, trueOption, options;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.next = 2;
                                return _WebAPI2.default.retrieveEntitySet("EntityDefinitions(LogicalName='" + logicalName + "')/Attributes(LogicalName='" + attribute + "')/Microsoft.Dynamics.CRM.BooleanAttributeMetadata", null, "$select=LogicalName&$expand=OptionSet");

                            case 2:
                                result = _context4.sent;
                                optionSet = result.OptionSet;
                                falseOption = optionSet.FalseOption;
                                trueOption = optionSet.TrueOption;
                                options = [];

                                options.push({
                                    value: falseOption.Value,
                                    label: falseOption.Label.UserLocalizedLabel.Label
                                });
                                options.push({
                                    value: trueOption.Value,
                                    label: trueOption.Label.UserLocalizedLabel.Label
                                });
                                return _context4.abrupt("return", options);

                            case 10:
                            case "end":
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function getBooleanOptionSet(_x6, _x7) {
                return _ref4.apply(this, arguments);
            }

            return getBooleanOptionSet;
        }()
    }, {
        key: "cachedEntityDefinitions",
        get: function get() {
            if (!this.entityDef) {
                this.entityDef = {};
            }
            return this.entityDef;
        }
    }]);

    return Metadata;
}();

exports.default = Metadata;

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Class = function () {
    function Class() {
        _classCallCheck(this, Class);
    }

    _createClass(Class, [{
        key: "getClass",
        value: function getClass() {
            return Object.getPrototypeOf(this).constructor;
        }
    }]);

    return Class;
}();

exports.default = Class;

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var allowedRequestMethods = ["DELETE", "GET", "PATCH", "POST", "PUT"];

var requestJSON = function requestJSON(url) {
    var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "GET";
    var data = arguments[2];
    var headers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    if (allowedRequestMethods.indexOf(method) === -1) {
        throw new Error("Request method must be one of the following: " + allowedRequestMethods.join(", "));
    }
    var requestData = null;
    if (data) {
        requestData = JSON.stringify(data); // when data is undefined IE sends undefined as a string
    }
    var totalHeaders = Object.assign({
        "OData-MaxVersion": "4.0",
        "OData-Version": "4.0",
        "Accept": "application/json",
        "Content-Type": "application/json; charset=utf-8"
    }, headers);

    if (typeof XMLHttpRequest !== "undefined") {
        return requestXMLHttpRequest(url, method, requestData, totalHeaders);
    } else {
        return requestNodeHttpRequest(url, method, requestData, totalHeaders);
    }
};

var requestXMLHttpRequest = function requestXMLHttpRequest(url, method, data, headers) {
    return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        request.open(method, encodeURI(url), true);
        for (var header in headers) {
            request.setRequestHeader(header, headers[header]);
        }
        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                request.onreadystatechange = null;
                try {
                    var response = handleXMLHttpsRequest(request);
                    resolve(response);
                } catch (e) {
                    reject(e);
                }
            }
        };
        request.send(data);
    });
};

var handleXMLHttpsRequest = function handleXMLHttpsRequest(request) {
    var dataHandler = function dataHandler() {
        var body = null;
        try {
            body = JSON.parse(request.response, dateReviver);
        } catch (ex) {
            throw new Error("JSON response can't be parsed");
        }

        return {
            body: body,
            getResponseHeader: request.getResponseHeader.bind(request),
            statusCode: request.status
        };
    };
    var statusHandlers = {
        200: function _() {
            return dataHandler();
        },
        201: function _() {
            return dataHandler();
        },
        204: function _() {
            return {
                body: null,
                getResponseHeader: request.getResponseHeader.bind(request),
                statusCode: request.status
            };
        }
    };

    var statusHandler = statusHandlers[request.status];
    if (statusHandler) {
        return statusHandler();
    } else {
        throw new Error("Unexpected Error");
    }
};

var requestNodeHttpRequest = function requestNodeHttpRequest(url, method, data, headers) {
    return new Promise(function (resolve, reject) {
        var https = eval("require")("https"),
            // hack for now: https://stackoverflow.com/questions/34828722/how-can-i-make-webpack-skip-an-require
        split = url.split("/"),
            hostname = split[2],
            path = "/" + split.slice(3, split.length).join("/");

        if (method !== "GET") {
            headers["Content-Length"] = data.length;
        }
        var req = https.request({
            hostname: hostname,
            port: 443,
            path: encodeURI(path),
            method: method,
            headers: headers
        }, function (response) {
            var body = "";
            response.setEncoding("utf8");
            response.on("data", function (chunk) {
                return body += chunk;
            });
            response.on("end", function () {
                try {
                    resolve(handleNodeHttpsResponse(response, body));
                } catch (e) {
                    reject(e);
                }
            });
        });
        req.on("error", function (error) {
            reject(error);
        });
        if (method !== "GET") {
            req.write(data);
        }
        req.end();
    });
};

var handleNodeHttpsResponse = function handleNodeHttpsResponse(response, bodyString) {
    var dataHandler = function dataHandler() {
        var body = null;
        try {
            body = JSON.parse(bodyString, dateReviver);
        } catch (ex) {
            throw new Error("JSON response can't be parsed");
        }
        return {
            body: body,
            getResponseHeader: function getResponseHeader(headerName) {
                return response.headers[headerName];
            },
            statusCode: response.statusCode
        };
    };
    var statusHandlers = {
        200: function _() {
            return dataHandler();
        },
        201: function _() {
            return dataHandler();
        },
        204: function _() {
            return {
                body: null,
                getResponseHeader: function getResponseHeader(headerName) {
                    return response.headers[headerName];
                },
                statusCode: response.statusCode
            };
        }
    };

    var statusHandler = statusHandlers[response.statusCode];
    if (statusHandler) {
        return statusHandler();
    } else {
        if (response.statusCode === 401) {
            throw new Error("Unauthorized");
        }
        throw new Error(response.statusCode + ": " + response.statusMessage + "\n " + bodyString);
    }
};

var dateReviver = function dateReviver(key, value) {
    if (typeof value === "string") {
        var d = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?::(\d*))?Z$/.exec(value);
        if (d) {
            return new Date(Date.UTC(+d[1], +d[2] - 1, +d[3], +d[4], +d[5], +d[6], +d[7] || 0));
        }
    }
    return value;
};

exports.default = requestJSON;

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var actions = function actions(superclass) {
    return function (_superclass) {
        _inherits(_class, _superclass);

        function _class() {
            _classCallCheck(this, _class);

            return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        _createClass(_class, null, [{
            key: "executeAction",

            //Also confused when to use bound and when to use unbound? Use this one.
            value: function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(actionName, data, logicalName, entityId) {
                    var _args = arguments;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    if (!logicalName) {
                                        _context.next = 4;
                                        break;
                                    }

                                    return _context.abrupt("return", this.executeBoundAction.apply(this, _args));

                                case 4:
                                    return _context.abrupt("return", this.executeUnboundAction.apply(this, _args));

                                case 5:
                                case "end":
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));

                function executeAction(_x, _x2, _x3, _x4) {
                    return _ref.apply(this, arguments);
                }

                return executeAction;
            }()

            //https://msdn.microsoft.com/en-us/library/mt607600.aspx

        }, {
            key: "executeBoundAction",
            value: function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(actionName, data, logicalName, entityId) {
                    var entitySetName;
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    _context2.next = 2;
                                    return this.getEntitySetName(logicalName);

                                case 2:
                                    entitySetName = _context2.sent;
                                    return _context2.abrupt("return", this.requestAndReturnBody("POST", entitySetName + "(" + entityId + ")/Microsoft.Dynamics.CRM." + actionName, data));

                                case 4:
                                case "end":
                                    return _context2.stop();
                            }
                        }
                    }, _callee2, this);
                }));

                function executeBoundAction(_x5, _x6, _x7, _x8) {
                    return _ref2.apply(this, arguments);
                }

                return executeBoundAction;
            }()

            //https://msdn.microsoft.com/en-us/library/mt607600.aspx

        }, {
            key: "executeUnboundAction",
            value: function executeUnboundAction(actionName, data) {
                return this.requestAndReturnBody("POST", "" + actionName, data);
            }
        }]);

        return _class;
    }(superclass);
};
exports.default = actions;

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var associate = function associate(superclass) {
    return function (_superclass) {
        _inherits(_class, _superclass);

        function _class() {
            _classCallCheck(this, _class);

            return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        _createClass(_class, null, [{
            key: "associateEntities",

            //https://msdn.microsoft.com/en-us/library/mt607875.aspx
            value: function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(logicalName, entityId, navigationProperty, associateEntity, associateEntityId) {
                    var entitySetName, baseURL, data;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.next = 2;
                                    return this.getEntitySetName(logicalName);

                                case 2:
                                    entitySetName = _context.sent;
                                    baseURL = this.webAPIPath;
                                    data = {
                                        "@odata.id": baseURL + "/" + associateEntity + "(" + associateEntityId + ")"
                                    };
                                    return _context.abrupt("return", this.requestAndReturnBody("POST", entitySetName + "(" + entityId + ")/" + navigationProperty + "/$ref", data));

                                case 6:
                                case "end":
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));

                function associateEntities(_x, _x2, _x3, _x4, _x5) {
                    return _ref.apply(this, arguments);
                }

                return associateEntities;
            }()

            //https://msdn.microsoft.com/en-us/library/mt607875.aspx

        }, {
            key: "disassociateEntities",
            value: function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(logicalName, entityId, navigationProperty, associateEntityId) {
                    var entitySetName;
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    _context2.next = 2;
                                    return this.getEntitySetName(logicalName);

                                case 2:
                                    entitySetName = _context2.sent;
                                    return _context2.abrupt("return", this.requestAndReturnBody("DELETE", entitySetName + "(" + entityId + ")/" + navigationProperty + "(" + associateEntityId + ")/$ref"));

                                case 4:
                                case "end":
                                    return _context2.stop();
                            }
                        }
                    }, _callee2, this);
                }));

                function disassociateEntities(_x6, _x7, _x8, _x9) {
                    return _ref2.apply(this, arguments);
                }

                return disassociateEntities;
            }()
        }]);

        return _class;
    }(superclass);
};
exports.default = associate;

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var create = function create(superclass) {
    return function (_superclass) {
        _inherits(_class, _superclass);

        function _class() {
            _classCallCheck(this, _class);

            return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        _createClass(_class, null, [{
            key: "createEntity",
            value: function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(logicalName, attributes) {
                    var entitySetName;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.next = 2;
                                    return this.getEntitySetName(logicalName);

                                case 2:
                                    entitySetName = _context.sent;
                                    _context.next = 5;
                                    return this.requestAndReturnBody("POST", "" + entitySetName, attributes, { Prefer: "return=representation" });

                                case 5:
                                    return _context.abrupt("return", _context.sent);

                                case 6:
                                case "end":
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));

                function createEntity(_x, _x2) {
                    return _ref.apply(this, arguments);
                }

                return createEntity;
            }()
        }, {
            key: "getEntityIdFromHeader",
            value: function getEntityIdFromHeader(header) {
                var regExp = /\(([^)]+)\)/,
                    matches = regExp.exec(header);
                return matches[1];
            }
        }]);

        return _class;
    }(superclass);
};
exports.default = create;

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var destroy = function destroy(superclass) {
    return function (_superclass) {
        _inherits(_class, _superclass);

        function _class() {
            _classCallCheck(this, _class);

            return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        _createClass(_class, null, [{
            key: "deleteEntity",
            value: function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(logicalName, entityId) {
                    var entitySetName;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.next = 2;
                                    return this.getEntitySetName(logicalName);

                                case 2:
                                    entitySetName = _context.sent;
                                    return _context.abrupt("return", this.request("DELETE", entitySetName + "(" + entityId + ")"));

                                case 4:
                                case "end":
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));

                function deleteEntity(_x, _x2) {
                    return _ref.apply(this, arguments);
                }

                return deleteEntity;
            }()
        }]);

        return _class;
    }(superclass);
};
exports.default = destroy;

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var functions = function functions(superclass) {
    return function (_superclass) {
        _inherits(_class, _superclass);

        function _class() {
            _classCallCheck(this, _class);

            return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        _createClass(_class, null, [{
            key: "executeFunction",

            //Also confused when to use bound and when to use unbound? Use this one.
            value: function executeFunction(functionString, logicalName, entityId) {
                //eslint-disable-line no-unused-vars
                if (logicalName) {
                    return this.executeBoundFunction.apply(this, arguments);
                } else {
                    return this.executeUnboundFunction.apply(this, arguments);
                }
            }

            //https://msdn.microsoft.com/en-us/library/gg309638.aspx

        }, {
            key: "executeBoundFunction",
            value: function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(functionString, logicalName, entityId) {
                    var entitySetName;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.next = 2;
                                    return this.getEntitySetName(logicalName);

                                case 2:
                                    entitySetName = _context.sent;
                                    return _context.abrupt("return", this.requestAndReturnBody("GET", entitySetName + "(" + entityId + ")/Microsoft.Dynamics.CRM." + functionString));

                                case 4:
                                case "end":
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));

                function executeBoundFunction(_x, _x2, _x3) {
                    return _ref.apply(this, arguments);
                }

                return executeBoundFunction;
            }()

            //https://msdn.microsoft.com/en-us/library/gg309638.aspx

        }, {
            key: "executeUnboundFunction",
            value: function executeUnboundFunction(functionString) {
                return this.requestAndReturnBody("GET", "" + functionString);
            }
        }]);

        return _class;
    }(superclass);
};
exports.default = functions;

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var read = function read(superclass) {
    return function (_superclass) {
        _inherits(_class, _superclass);

        function _class() {
            _classCallCheck(this, _class);

            return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        _createClass(_class, null, [{
            key: "retrieveEntity",
            value: function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(logicalName, entityId, query, headers) {
                    var entitySetName;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.next = 2;
                                    return this.getEntitySetName(logicalName);

                                case 2:
                                    entitySetName = _context.sent;
                                    return _context.abrupt("return", this.retrieveEntitySet(entitySetName, entityId, query, headers));

                                case 4:
                                case "end":
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));

                function retrieveEntity(_x, _x2, _x3, _x4) {
                    return _ref.apply(this, arguments);
                }

                return retrieveEntity;
            }()
        }, {
            key: "retrieveEntitySet",
            value: function retrieveEntitySet(entitySetName, entityId, queryOptions, headers) {
                var queryString = this.buildQueryString(queryOptions),
                    parsedEntityId = entityId ? this.parseEntityId(entityId) : null;
                var url = "" + entitySetName;
                if (parsedEntityId) {
                    url += "(" + parsedEntityId + ")";
                }
                url += "" + queryString;
                return this.requestAndReturnBody("GET", url, null, headers);
            }
        }, {
            key: "retrieveMultiple",
            value: function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(logicalName, query, headers) {
                    var _this2 = this;

                    var entitySetName, queryString;
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                        while (1) {
                            switch (_context3.prev = _context3.next) {
                                case 0:
                                    _context3.next = 2;
                                    return this.getEntitySetName(logicalName);

                                case 2:
                                    entitySetName = _context3.sent;
                                    queryString = this.buildQueryString(query);
                                    return _context3.abrupt("return", this.requestAndReturnBody("GET", "" + entitySetName + queryString, null, headers).then(function () {
                                        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(body) {
                                            var hasMaxpagesize, nextPagesValues;
                                            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                                while (1) {
                                                    switch (_context2.prev = _context2.next) {
                                                        case 0:
                                                            hasMaxpagesize = headers && headers.Prefer && headers.Prefer.includes("odata.maxpagesize");

                                                            if (!(body["@odata.nextLink"] && !hasMaxpagesize)) {
                                                                _context2.next = 7;
                                                                break;
                                                            }

                                                            _context2.next = 4;
                                                            return _this2.requestNextLinks(body["@odata.nextLink"]);

                                                        case 4:
                                                            nextPagesValues = _context2.sent;

                                                            body.value = body.value.concat(nextPagesValues);
                                                            delete body["@odata.nextLink"];

                                                        case 7:
                                                            return _context2.abrupt("return", body);

                                                        case 8:
                                                        case "end":
                                                            return _context2.stop();
                                                    }
                                                }
                                            }, _callee2, _this2);
                                        }));

                                        return function (_x8) {
                                            return _ref3.apply(this, arguments);
                                        };
                                    }()));

                                case 5:
                                case "end":
                                    return _context3.stop();
                            }
                        }
                    }, _callee3, this);
                }));

                function retrieveMultiple(_x5, _x6, _x7) {
                    return _ref2.apply(this, arguments);
                }

                return retrieveMultiple;
            }()
        }, {
            key: "requestNextLinks",
            value: function requestNextLinks(nextLink) {
                var _this3 = this;

                var values = [];
                return this.requestAndReturnBody("GET", decodeURI(nextLink)).then(function () {
                    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(body) {
                        return regeneratorRuntime.wrap(function _callee4$(_context4) {
                            while (1) {
                                switch (_context4.prev = _context4.next) {
                                    case 0:
                                        values = body.value;

                                        if (!body["@odata.nextLink"]) {
                                            _context4.next = 7;
                                            break;
                                        }

                                        _context4.t0 = values;
                                        _context4.next = 5;
                                        return _this3.requestNextLinks(body["@odata.nextLink"]);

                                    case 5:
                                        _context4.t1 = _context4.sent;
                                        values = _context4.t0.concat.call(_context4.t0, _context4.t1);

                                    case 7:
                                        return _context4.abrupt("return", values);

                                    case 8:
                                    case "end":
                                        return _context4.stop();
                                }
                            }
                        }, _callee4, _this3);
                    }));

                    return function (_x9) {
                        return _ref4.apply(this, arguments);
                    };
                }());
            }
        }, {
            key: "executeFetchXml",
            value: function () {
                var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(logicalName, fetchXml) {
                    var _this4 = this;

                    var entitySetName;
                    return regeneratorRuntime.wrap(function _callee6$(_context6) {
                        while (1) {
                            switch (_context6.prev = _context6.next) {
                                case 0:
                                    _context6.next = 2;
                                    return this.getEntitySetName(logicalName);

                                case 2:
                                    entitySetName = _context6.sent;
                                    return _context6.abrupt("return", this.requestAndReturnBody("GET", entitySetName + "?fetchXml=" + fetchXml).then(function () {
                                        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(body) {
                                            var nextPagesValues;
                                            return regeneratorRuntime.wrap(function _callee5$(_context5) {
                                                while (1) {
                                                    switch (_context5.prev = _context5.next) {
                                                        case 0:
                                                            if (!body["@odata.nextLink"]) {
                                                                _context5.next = 6;
                                                                break;
                                                            }

                                                            _context5.next = 3;
                                                            return _this4.requestNextLinks(body["@odata.nextLink"]);

                                                        case 3:
                                                            nextPagesValues = _context5.sent;

                                                            body.value = body.value.concat(nextPagesValues);
                                                            delete body["@odata.nextLink"];

                                                        case 6:
                                                            return _context5.abrupt("return", body);

                                                        case 7:
                                                        case "end":
                                                            return _context5.stop();
                                                    }
                                                }
                                            }, _callee5, _this4);
                                        }));

                                        return function (_x12) {
                                            return _ref6.apply(this, arguments);
                                        };
                                    }()));

                                case 4:
                                case "end":
                                    return _context6.stop();
                            }
                        }
                    }, _callee6, this);
                }));

                function executeFetchXml(_x10, _x11) {
                    return _ref5.apply(this, arguments);
                }

                return executeFetchXml;
            }()
        }, {
            key: "count",
            value: function () {
                var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(logicalName) {
                    var entitySetName, body;
                    return regeneratorRuntime.wrap(function _callee7$(_context7) {
                        while (1) {
                            switch (_context7.prev = _context7.next) {
                                case 0:
                                    _context7.next = 2;
                                    return this.getEntitySetName(logicalName);

                                case 2:
                                    entitySetName = _context7.sent;
                                    _context7.next = 5;
                                    return this.requestAndReturnBody("GET", entitySetName + "/$count");

                                case 5:
                                    body = _context7.sent;
                                    return _context7.abrupt("return", body);

                                case 7:
                                case "end":
                                    return _context7.stop();
                            }
                        }
                    }, _callee7, this);
                }));

                function count(_x13) {
                    return _ref7.apply(this, arguments);
                }

                return count;
            }()
        }]);

        return _class;
    }(superclass);
};
exports.default = read;

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requestJSON = __webpack_require__(69);

var _requestJSON2 = _interopRequireDefault(_requestJSON);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var request = function request(superclass) {
    return function (_superclass) {
        _inherits(_class, _superclass);

        function _class() {
            _classCallCheck(this, _class);

            return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        _createClass(_class, null, [{
            key: "request",
            value: function request(method, url, data) {
                var headers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

                var baseURL = this.webAPIPath,
                    mergedHeaders = this.bearer ? Object.assign({}, headers, {
                    Authorization: "Bearer " + this.bearer
                }) : headers;
                var requestUrl = void 0;
                if (url.indexOf("http") === 0) {
                    requestUrl = url;
                } else {
                    requestUrl = baseURL + "/" + url;
                }
                return (0, _requestJSON2.default)(requestUrl, method, data, mergedHeaders);
            }
        }, {
            key: "requestAndReturnBody",
            value: function requestAndReturnBody(method, url, data, headers) {
                return this.request(method, url, data, headers).then(function (response) {
                    return response.body;
                });
            }
        }, {
            key: "requestAndReturnHeader",
            value: function requestAndReturnHeader(method, url, data, header) {
                return this.request(method, url, data).then(function (response) {
                    return response.getResponseHeader(header);
                });
            }
        }]);

        return _class;
    }(superclass);
};
exports.default = request;

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var update = function update(superclass) {
    return function (_superclass) {
        _inherits(_class, _superclass);

        function _class() {
            _classCallCheck(this, _class);

            return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        _createClass(_class, null, [{
            key: "updateEntity",
            value: function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(logicalName, entityId, attributes) {
                    var entitySetName;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.next = 2;
                                    return this.getEntitySetName(logicalName);

                                case 2:
                                    entitySetName = _context.sent;
                                    return _context.abrupt("return", this.request("PATCH", entitySetName + "(" + entityId + ")", attributes));

                                case 4:
                                case "end":
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));

                function updateEntity(_x, _x2, _x3) {
                    return _ref.apply(this, arguments);
                }

                return updateEntity;
            }()
        }]);

        return _class;
    }(superclass);
};
exports.default = update;

/***/ })

/******/ });
});
//# sourceMappingURL=WebAPI.noBabelPolyfill.js.map