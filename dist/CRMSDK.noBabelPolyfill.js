/*! crm-sdk 1.8.0 | (c) Dynamics Software | MIT license - https://github.com/dys-solutions/crm-sdk/blob/develop/LICENSE */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("CRMSDK.noBabelPolyfill", [], factory);
	else if(typeof exports === 'object')
		exports["CRMSDK.noBabelPolyfill"] = factory();
	else
		root["CRMSDK.noBabelPolyfill"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 356);
/******/ })
/************************************************************************/
/******/ ({

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Entity = __webpack_require__(68);

Object.defineProperty(exports, "Entity", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Entity).default;
  }
});

var _Account = __webpack_require__(141);

Object.defineProperty(exports, "Account", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Account).default;
  }
});

var _Annotation = __webpack_require__(142);

Object.defineProperty(exports, "Annotation", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Annotation).default;
  }
});

var _Systemuser = __webpack_require__(143);

Object.defineProperty(exports, "Systemuser", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Systemuser).default;
  }
});

var _WebAPI = __webpack_require__(15);

Object.defineProperty(exports, "WebAPI", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_WebAPI).default;
  }
});

var _Webresource = __webpack_require__(144);

Object.defineProperty(exports, "Webresource", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Webresource).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Base64 = function () {
    function Base64() {
        _classCallCheck(this, Base64);
    }

    _createClass(Base64, [{
        key: "decode",
        value: function decode(base64) {
            return this.getClass().decode(base64);
        }
    }, {
        key: "encode",
        value: function encode(text) {
            return this.getClass().encode(text);
        }
    }, {
        key: "blob",
        value: function blob(base64) {
            var contentType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
            var sliceSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 512;

            return this.getClass().blob(base64, contentType, sliceSize);
        }
    }, {
        key: "decodeBlob",
        value: function decodeBlob(blob) {
            return this.getClass().decodeBlob(blob);
        }
    }], [{
        key: "decode",
        value: function decode(base64) {
            if (typeof window !== "undefined") {
                return decodeURIComponent(Array.prototype.map.call(window.atob(base64), function (c) {
                    return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
                }).join(""));
            } else {
                return Buffer.from(base64, "base64").toString("ascii");
            }
        }
    }, {
        key: "encode",
        value: function encode(text) {
            if (typeof window !== "undefined") {
                return window.btoa(encodeURIComponent(text).replace(/%([0-9A-F]{2})/g, function (match, p1) {
                    return String.fromCharCode("0x" + p1);
                }));
            } else {
                return Buffer.from(text).toString("base64");
            }
        }
    }, {
        key: "blob",
        value: function blob(base64) {
            var mimetype = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
            var sliceSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 512;

            var input = base64.replace(/\s/g, ""),
                byteCharacters = atob(input),
                byteArrays = [];
            var offset = void 0,
                slice = void 0,
                byteNumbers = void 0,
                i = void 0,
                byteArray = void 0,
                blob = void 0;

            for (offset = 0; offset < byteCharacters.length; offset += sliceSize) {
                slice = byteCharacters.slice(offset, offset + sliceSize);
                byteNumbers = new Array(slice.length);
                for (i = 0; i < slice.length; i += 1) {
                    byteNumbers[i] = slice.charCodeAt(i);
                }
                byteArray = new Uint8Array(byteNumbers);
                byteArrays.push(byteArray);
            }

            try {
                blob = new Blob(byteArrays, {
                    type: mimetype
                });
            } catch (e) {
                // TypeError old chrome, FF and Android browser
                window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
                if (e.name === "TypeError" && window.BlobBuilder) {
                    var bb = new window.BlobBuilder();
                    for (offset = 0; offset < byteArrays.length; offset += 1) {
                        bb.append(byteArrays[offset].buffer);
                    }
                    blob = bb.getBlob(mimetype);
                } else if (e.name === "InvalidStateError") {
                    blob = new Blob(byteArrays, {
                        type: mimetype
                    });
                } else {
                    return null;
                }
            }
            return blob;
        }
    }, {
        key: "decodeBlob",
        value: function decodeBlob(blob) {
            return new Promise(function (resolve, reject) {
                var fileReader = new window.FileReader();
                fileReader.onload = function (readerEvt) {
                    var data = readerEvt.target.result;
                    var prefix = "base64,";
                    if (data.includes(prefix)) {
                        data = data.substr(data.indexOf(prefix) + prefix.length);
                    }
                    resolve(data);
                };
                fileReader.onerror = function (error) {
                    reject(error);
                };
                fileReader.readAsDataURL(blob);
            });
        }
    }]);

    return Base64;
}();

exports.default = Base64;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(153).Buffer))

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SubEntity2 = __webpack_require__(52);

var _SubEntity3 = _interopRequireDefault(_SubEntity2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Account = function (_SubEntity) {
    _inherits(Account, _SubEntity);

    function Account() {
        _classCallCheck(this, Account);

        return _possibleConstructorReturn(this, (Account.__proto__ || Object.getPrototypeOf(Account)).apply(this, arguments));
    }

    _createClass(Account, null, [{
        key: "getActiveAccounts",
        value: function getActiveAccounts() {
            var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            if (!query.filters) {
                query.filters = [];
            }
            query.filters.push(this.activeFilter);
            return this.query(query);
        }
    }, {
        key: "logicalName",
        get: function get() {
            return "account";
        }
    }, {
        key: "activeFilter",
        get: function get() {
            return {
                type: "and",
                conditions: [{
                    attribute: "statecode",
                    value: 0
                }]
            };
        }
    }]);

    return Account;
}(_SubEntity3.default);

exports.default = Account;

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Base = __webpack_require__(140);

var _Base2 = _interopRequireDefault(_Base);

var _SubEntity2 = __webpack_require__(52);

var _SubEntity3 = _interopRequireDefault(_SubEntity2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Annotation = function (_SubEntity) {
    _inherits(Annotation, _SubEntity);

    function Annotation() {
        _classCallCheck(this, Annotation);

        return _possibleConstructorReturn(this, (Annotation.__proto__ || Object.getPrototypeOf(Annotation)).apply(this, arguments));
    }

    _createClass(Annotation, [{
        key: "parseFile",
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(annotation) {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                return _context.abrupt("return", this.getClass().parseFile(annotation));

                            case 1:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function parseFile(_x) {
                return _ref.apply(this, arguments);
            }

            return parseFile;
        }()
    }, {
        key: "parseAnnotation",
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(file) {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                return _context2.abrupt("return", this.getClass().parseAnnotation(file));

                            case 1:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function parseAnnotation(_x2) {
                return _ref2.apply(this, arguments);
            }

            return parseAnnotation;
        }()
    }], [{
        key: "parseFile",
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(annotation) {
                var documentbody, mimetype, blob;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                documentbody = annotation.documentbody, mimetype = annotation.mimetype, blob = _Base2.default.blob(documentbody, mimetype);

                                blob.name = annotation.filename;
                                return _context3.abrupt("return", blob);

                            case 3:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function parseFile(_x3) {
                return _ref3.apply(this, arguments);
            }

            return parseFile;
        }()
    }, {
        key: "parseAnnotation",
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(file, accountid) {
                var base64, name, type, annotation, strippedAccountid;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                if (accountid) {
                                    _context4.next = 2;
                                    break;
                                }

                                throw new Error("No accountid specified!");

                            case 2:
                                _context4.next = 4;
                                return _Base2.default.decodeBlob(file);

                            case 4:
                                base64 = _context4.sent;
                                name = file.name, type = file.type;
                                annotation = new this({
                                    filename: name,
                                    mimetype: type,
                                    documentbody: base64
                                });
                                strippedAccountid = accountid.startsWith("{") && accountid.endsWith("}") ? accountid.substr(1, accountid.length - 2) : accountid;
                                _context4.prev = 8;
                                _context4.next = 11;
                                return annotation.bind("objectid", strippedAccountid, "account");

                            case 11:
                                return _context4.abrupt("return", annotation);

                            case 14:
                                _context4.prev = 14;
                                _context4.t0 = _context4["catch"](8);
                                throw _context4.t0;

                            case 17:
                            case "end":
                                return _context4.stop();
                        }
                    }
                }, _callee4, this, [[8, 14]]);
            }));

            function parseAnnotation(_x4, _x5) {
                return _ref4.apply(this, arguments);
            }

            return parseAnnotation;
        }()
    }, {
        key: "logicalName",
        get: function get() {
            return "annotation";
        }
    }]);

    return Annotation;
}(_SubEntity3.default);

exports.default = Annotation;

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SubEntity2 = __webpack_require__(52);

var _SubEntity3 = _interopRequireDefault(_SubEntity2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Systemuser = function (_SubEntity) {
    _inherits(Systemuser, _SubEntity);

    function Systemuser() {
        _classCallCheck(this, Systemuser);

        return _possibleConstructorReturn(this, (Systemuser.__proto__ || Object.getPrototypeOf(Systemuser)).apply(this, arguments));
    }

    _createClass(Systemuser, null, [{
        key: "getCurrent",
        value: function getCurrent() {
            var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            if (!query.filters) {
                query.filters = [];
            }
            query.filters.push(this.currentFilter);
            return this.get(null, query);
        }
    }, {
        key: "logicalName",
        get: function get() {
            return "systemuser";
        }
    }, {
        key: "currentFilter",
        get: function get() {
            return {
                type: "and",
                conditions: [{
                    attribute: "systemuserid",
                    value: this.userId
                }]
            };
        }
    }, {
        key: "userId",
        get: function get() {
            try {
                var userId = window.Xrm.Page.context.getUserId();
                return userId.slice(1, userId.length - 1);
            } catch (e) {
                if (e.message === "window is not defined") {
                    throw new Error("If using NodeJS, please don't use Systemuser.userId.");
                }
            }
        }
    }]);

    return Systemuser;
}(_SubEntity3.default);

exports.default = Systemuser;

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _SubEntity2 = __webpack_require__(52);

var _SubEntity3 = _interopRequireDefault(_SubEntity2);

var _WebAPI = __webpack_require__(15);

var _WebAPI2 = _interopRequireDefault(_WebAPI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var solutionUniqueNameWeakMap = new WeakMap();

var Webresource = function (_SubEntity) {
    _inherits(Webresource, _SubEntity);

    function Webresource() {
        _classCallCheck(this, Webresource);

        return _possibleConstructorReturn(this, (Webresource.__proto__ || Object.getPrototypeOf(Webresource)).apply(this, arguments));
    }

    _createClass(Webresource, [{
        key: "update",
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var data;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _get(Webresource.prototype.__proto__ || Object.getPrototypeOf(Webresource.prototype), "update", this).call(this);

                            case 2:
                                data = {
                                    ParameterXml: "<importexportxml><webresources><webresource>{" + this.webresourceid + "}</webresource></webresources></importexportxml>"
                                };
                                return _context.abrupt("return", _WebAPI2.default.executeAction("PublishXml", data));

                            case 4:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function update() {
                return _ref.apply(this, arguments);
            }

            return update;
        }()
    }, {
        key: "create",
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var data;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return this.getWebresourcetype();

                            case 2:
                                this.data.webresourcetype = _context2.sent;
                                _context2.next = 5;
                                return _get(Webresource.prototype.__proto__ || Object.getPrototypeOf(Webresource.prototype), "create", this).call(this);

                            case 5:
                                data = {
                                    ComponentId: this.data.webresourceid,
                                    ComponentType: 61,
                                    SolutionUniqueName: this.solutionUniqueName,
                                    AddRequiredComponents: false,
                                    IncludedComponentSettingsValues: null
                                };
                                return _context2.abrupt("return", _WebAPI2.default.executeAction("AddSolutionComponent", data));

                            case 7:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function create() {
                return _ref2.apply(this, arguments);
            }

            return create;
        }()
    }, {
        key: "getWebresourcetype",
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var options, namesplit, extension, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _step$value, value, label;

                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return _WebAPI2.default.getOptionSet(this.logicalName, "webresourcetype");

                            case 2:
                                options = _context3.sent;
                                namesplit = this.data.name.split(".");
                                extension = namesplit[namesplit.length - 1];
                                _iteratorNormalCompletion = true;
                                _didIteratorError = false;
                                _iteratorError = undefined;
                                _context3.prev = 8;
                                _iterator = options[Symbol.iterator]();

                            case 10:
                                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                    _context3.next = 17;
                                    break;
                                }

                                _step$value = _step.value, value = _step$value.value, label = _step$value.label;

                                if (!label.toLowerCase().includes(extension)) {
                                    _context3.next = 14;
                                    break;
                                }

                                return _context3.abrupt("return", parseInt(value));

                            case 14:
                                _iteratorNormalCompletion = true;
                                _context3.next = 10;
                                break;

                            case 17:
                                _context3.next = 23;
                                break;

                            case 19:
                                _context3.prev = 19;
                                _context3.t0 = _context3["catch"](8);
                                _didIteratorError = true;
                                _iteratorError = _context3.t0;

                            case 23:
                                _context3.prev = 23;
                                _context3.prev = 24;

                                if (!_iteratorNormalCompletion && _iterator.return) {
                                    _iterator.return();
                                }

                            case 26:
                                _context3.prev = 26;

                                if (!_didIteratorError) {
                                    _context3.next = 29;
                                    break;
                                }

                                throw _iteratorError;

                            case 29:
                                return _context3.finish(26);

                            case 30:
                                return _context3.finish(23);

                            case 31:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this, [[8, 19, 23, 31], [24,, 26, 30]]);
            }));

            function getWebresourcetype() {
                return _ref3.apply(this, arguments);
            }

            return getWebresourcetype;
        }()
    }, {
        key: "solutionUniqueName",
        set: function set(solutionUniqueName) {
            solutionUniqueNameWeakMap.set(this, solutionUniqueName);
        },
        get: function get() {
            return solutionUniqueNameWeakMap.get(this);
        }
    }], [{
        key: "logicalName",
        get: function get() {
            return "webresource";
        }
    }]);

    return Webresource;
}(_SubEntity3.default);

exports.default = Webresource;

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Entity = __webpack_require__(68);

var _Entity2 = _interopRequireDefault(_Entity);

var _Metadata = __webpack_require__(43);

var _Metadata2 = _interopRequireDefault(_Metadata);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var canParse = function canParse(superclass) {
    return function (_superclass) {
        _inherits(_class, _superclass);

        function _class() {
            _classCallCheck(this, _class);

            return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        _createClass(_class, null, [{
            key: "parseResult",
            value: function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                    var logicalName = arguments[1];

                    var entities, DerivedClass, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, entityData, instance;

                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    entities = [];
                                    _context.next = 3;
                                    return this.getDerivedClass(logicalName);

                                case 3:
                                    DerivedClass = _context.sent;
                                    _iteratorNormalCompletion = true;
                                    _didIteratorError = false;
                                    _iteratorError = undefined;
                                    _context.prev = 7;

                                    for (_iterator = data[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                        entityData = _step.value;
                                        instance = new DerivedClass(entityData, logicalName);

                                        entities.push(instance);
                                    }
                                    _context.next = 15;
                                    break;

                                case 11:
                                    _context.prev = 11;
                                    _context.t0 = _context["catch"](7);
                                    _didIteratorError = true;
                                    _iteratorError = _context.t0;

                                case 15:
                                    _context.prev = 15;
                                    _context.prev = 16;

                                    if (!_iteratorNormalCompletion && _iterator.return) {
                                        _iterator.return();
                                    }

                                case 18:
                                    _context.prev = 18;

                                    if (!_didIteratorError) {
                                        _context.next = 21;
                                        break;
                                    }

                                    throw _iteratorError;

                                case 21:
                                    return _context.finish(18);

                                case 22:
                                    return _context.finish(15);

                                case 23:
                                    return _context.abrupt("return", entities);

                                case 24:
                                case "end":
                                    return _context.stop();
                            }
                        }
                    }, _callee, this, [[7, 11, 15, 23], [16,, 18, 22]]);
                }));

                function parseResult() {
                    return _ref.apply(this, arguments);
                }

                return parseResult;
            }()
        }, {
            key: "getDerivedClass",
            value: function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(logicalName) {
                    var DerivedClass;
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    if (!_Entity2.default.derivedClasses) {
                                        _Entity2.default.derivedClasses = {};
                                    }
                                    DerivedClass = _Entity2.default.derivedClasses[logicalName];

                                    if (DerivedClass) {
                                        _context2.next = 13;
                                        break;
                                    }

                                    _context2.prev = 3;

                                    DerivedClass = function (_ref3) {
                                        _inherits(Derived, _ref3);

                                        function Derived() {
                                            _classCallCheck(this, Derived);

                                            return _possibleConstructorReturn(this, (Derived.__proto__ || Object.getPrototypeOf(Derived)).apply(this, arguments));
                                        }

                                        return Derived;
                                    }(this);
                                    _context2.next = 7;
                                    return this.addDescriptors(DerivedClass.prototype, logicalName);

                                case 7:
                                    _Entity2.default.derivedClasses[logicalName] = DerivedClass;
                                    _context2.next = 13;
                                    break;

                                case 10:
                                    _context2.prev = 10;
                                    _context2.t0 = _context2["catch"](3);
                                    throw _context2.t0;

                                case 13:
                                    return _context2.abrupt("return", DerivedClass);

                                case 14:
                                case "end":
                                    return _context2.stop();
                            }
                        }
                    }, _callee2, this, [[3, 10]]);
                }));

                function getDerivedClass(_x2) {
                    return _ref2.apply(this, arguments);
                }

                return getDerivedClass;
            }()
        }, {
            key: "addDescriptors",
            value: function () {
                var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(instance, logicalName) {
                    var entityAttributes, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, entityName, entityAttribute, descriptor;

                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                        while (1) {
                            switch (_context3.prev = _context3.next) {
                                case 0:
                                    _context3.next = 2;
                                    return this.getEntityAttributes(logicalName);

                                case 2:
                                    entityAttributes = _context3.sent;
                                    _iteratorNormalCompletion2 = true;
                                    _didIteratorError2 = false;
                                    _iteratorError2 = undefined;
                                    _context3.prev = 6;
                                    _iterator2 = Object.keys(entityAttributes)[Symbol.iterator]();

                                case 8:
                                    if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                                        _context3.next = 18;
                                        break;
                                    }

                                    entityName = _step2.value;
                                    entityAttribute = entityAttributes[entityName];
                                    _context3.next = 13;
                                    return this.getDescriptor(entityAttribute, logicalName);

                                case 13:
                                    descriptor = _context3.sent;

                                    if (descriptor) {
                                        Object.defineProperty(instance, entityAttribute.LogicalName, descriptor);
                                    }

                                case 15:
                                    _iteratorNormalCompletion2 = true;
                                    _context3.next = 8;
                                    break;

                                case 18:
                                    _context3.next = 24;
                                    break;

                                case 20:
                                    _context3.prev = 20;
                                    _context3.t0 = _context3["catch"](6);
                                    _didIteratorError2 = true;
                                    _iteratorError2 = _context3.t0;

                                case 24:
                                    _context3.prev = 24;
                                    _context3.prev = 25;

                                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                        _iterator2.return();
                                    }

                                case 27:
                                    _context3.prev = 27;

                                    if (!_didIteratorError2) {
                                        _context3.next = 30;
                                        break;
                                    }

                                    throw _iteratorError2;

                                case 30:
                                    return _context3.finish(27);

                                case 31:
                                    return _context3.finish(24);

                                case 32:
                                    return _context3.abrupt("return", instance);

                                case 33:
                                case "end":
                                    return _context3.stop();
                            }
                        }
                    }, _callee3, this, [[6, 20, 24, 32], [25,, 27, 31]]);
                }));

                function addDescriptors(_x3, _x4) {
                    return _ref4.apply(this, arguments);
                }

                return addDescriptors;
            }()
        }, {
            key: "getDescriptor",
            value: function () {
                var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(entityAttribute, logicalName) {
                    var origDescriptor, descriptor, navigationProperty;
                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                        while (1) {
                            switch (_context4.prev = _context4.next) {
                                case 0:
                                    _context4.prev = 0;
                                    origDescriptor = this.getPropertyDescriptor(entityAttribute.LogicalName);
                                    descriptor = null;

                                    if (!(entityAttribute.AttributeType === "Lookup")) {
                                        _context4.next = 9;
                                        break;
                                    }

                                    _context4.next = 6;
                                    return this.getNavigationProperty(entityAttribute.LogicalName, logicalName);

                                case 6:
                                    _context4.t0 = _context4.sent;
                                    _context4.next = 10;
                                    break;

                                case 9:
                                    _context4.t0 = null;

                                case 10:
                                    navigationProperty = _context4.t0;

                                    if (!origDescriptor || !origDescriptor.get || !origDescriptor.set) {
                                        descriptor = {};
                                    }
                                    if (!origDescriptor || !origDescriptor.get) {
                                        descriptor.get = function () {
                                            return this.getAttribute(entityAttribute.LogicalName, navigationProperty);
                                        };
                                    }
                                    if (!origDescriptor || !origDescriptor.set) {
                                        descriptor.set = function (value) {
                                            this.setAttribute(entityAttribute.LogicalName, value);
                                        };
                                    }
                                    return _context4.abrupt("return", descriptor);

                                case 17:
                                    _context4.prev = 17;
                                    _context4.t1 = _context4["catch"](0);
                                    throw _context4.t1;

                                case 20:
                                case "end":
                                    return _context4.stop();
                            }
                        }
                    }, _callee4, this, [[0, 17]]);
                }));

                function getDescriptor(_x5, _x6) {
                    return _ref5.apply(this, arguments);
                }

                return getDescriptor;
            }()
        }, {
            key: "getPropertyDescriptor",
            value: function getPropertyDescriptor(name) {
                var propertyDescriptor = Object.getOwnPropertyDescriptor(this.prototype, name),
                    parentPrototype = void 0;
                if (!propertyDescriptor) {
                    parentPrototype = Object.getPrototypeOf(this.prototype);
                }
                while (!propertyDescriptor && parentPrototype) {
                    propertyDescriptor = Object.getOwnPropertyDescriptor(parentPrototype, name);
                    parentPrototype = Object.getPrototypeOf(parentPrototype);
                }
                return propertyDescriptor;
            }
        }, {
            key: "getNavigationProperty",
            value: function () {
                var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(attribute, logicalName) {
                    var targetEntity = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

                    var cacheKey, navigationProperty, entityDefinitions, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, _step3$value, ReferencingAttribute, ReferencingEntity, ReferencedEntity, ReferencingEntityNavigationPropertyName;

                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                        while (1) {
                            switch (_context5.prev = _context5.next) {
                                case 0:
                                    cacheKey = "" + logicalName + attribute + targetEntity;

                                    if (!this.cachedNavigationProperties[cacheKey]) {
                                        _context5.next = 3;
                                        break;
                                    }

                                    return _context5.abrupt("return", this.cachedNavigationProperties[cacheKey]);

                                case 3:
                                    navigationProperty = void 0;
                                    _context5.prev = 4;
                                    _context5.next = 7;
                                    return _Metadata2.default.getEntityDefinitions(logicalName);

                                case 7:
                                    entityDefinitions = _context5.sent;
                                    _iteratorNormalCompletion3 = true;
                                    _didIteratorError3 = false;
                                    _iteratorError3 = undefined;
                                    _context5.prev = 11;
                                    _iterator3 = entityDefinitions.ManyToOneRelationships[Symbol.iterator]();

                                case 13:
                                    if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
                                        _context5.next = 22;
                                        break;
                                    }

                                    _step3$value = _step3.value, ReferencingAttribute = _step3$value.ReferencingAttribute, ReferencingEntity = _step3$value.ReferencingEntity, ReferencedEntity = _step3$value.ReferencedEntity, ReferencingEntityNavigationPropertyName = _step3$value.ReferencingEntityNavigationPropertyName;

                                    if (!(ReferencingAttribute === attribute && ReferencingEntity === logicalName)) {
                                        _context5.next = 19;
                                        break;
                                    }

                                    navigationProperty = !targetEntity || ReferencedEntity === targetEntity ? ReferencingEntityNavigationPropertyName : null;

                                    if (!navigationProperty) {
                                        _context5.next = 19;
                                        break;
                                    }

                                    return _context5.abrupt("break", 22);

                                case 19:
                                    _iteratorNormalCompletion3 = true;
                                    _context5.next = 13;
                                    break;

                                case 22:
                                    _context5.next = 28;
                                    break;

                                case 24:
                                    _context5.prev = 24;
                                    _context5.t0 = _context5["catch"](11);
                                    _didIteratorError3 = true;
                                    _iteratorError3 = _context5.t0;

                                case 28:
                                    _context5.prev = 28;
                                    _context5.prev = 29;

                                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                        _iterator3.return();
                                    }

                                case 31:
                                    _context5.prev = 31;

                                    if (!_didIteratorError3) {
                                        _context5.next = 34;
                                        break;
                                    }

                                    throw _iteratorError3;

                                case 34:
                                    return _context5.finish(31);

                                case 35:
                                    return _context5.finish(28);

                                case 36:
                                    _context5.next = 42;
                                    break;

                                case 38:
                                    _context5.prev = 38;
                                    _context5.t1 = _context5["catch"](4);

                                    console.log(_context5.t1);
                                    throw _context5.t1;

                                case 42:
                                    this.cachedNavigationProperties[cacheKey] = navigationProperty;
                                    return _context5.abrupt("return", navigationProperty);

                                case 44:
                                case "end":
                                    return _context5.stop();
                            }
                        }
                    }, _callee5, this, [[4, 38], [11, 24, 28, 36], [29,, 31, 35]]);
                }));

                function getNavigationProperty(_x7, _x8) {
                    return _ref6.apply(this, arguments);
                }

                return getNavigationProperty;
            }()
        }, {
            key: "cachedNavigationProperties",
            get: function get() {
                if (!this.navProperties) {
                    this.navProperties = {};
                }
                return this.navProperties;
            }
        }]);

        return _class;
    }(superclass);
};
exports.default = canParse;

/***/ }),

/***/ 146:
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

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var create = function create(superclass) {
    return function (_superclass) {
        _inherits(_class, _superclass);

        function _class() {
            _classCallCheck(this, _class);

            return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        _createClass(_class, [{
            key: "create",
            value: function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                    var _this2 = this;

                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    return _context2.abrupt("return", this.getClass().create(this.logicalName, this.data).then(function () {
                                        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(entity) {
                                            return regeneratorRuntime.wrap(function _callee$(_context) {
                                                while (1) {
                                                    switch (_context.prev = _context.next) {
                                                        case 0:
                                                            _this2.data = entity.data;
                                                            _context.next = 3;
                                                            return _this2.getClass().addDescriptors(_this2, _this2.logicalName);

                                                        case 3:
                                                        case "end":
                                                            return _context.stop();
                                                    }
                                                }
                                            }, _callee, _this2);
                                        }));

                                        return function (_x) {
                                            return _ref2.apply(this, arguments);
                                        };
                                    }()));

                                case 1:
                                case "end":
                                    return _context2.stop();
                            }
                        }
                    }, _callee2, this);
                }));

                function create() {
                    return _ref.apply(this, arguments);
                }

                return create;
            }()
        }], [{
            key: "create",
            value: function () {
                var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(logicalName, entityData) {
                    var returnedData;
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                        while (1) {
                            switch (_context3.prev = _context3.next) {
                                case 0:
                                    console.log("Create " + logicalName);
                                    _context3.next = 3;
                                    return _WebAPI2.default.createEntity(logicalName, entityData);

                                case 3:
                                    returnedData = _context3.sent;
                                    return _context3.abrupt("return", this.parseResult([returnedData], logicalName).then(function (entities) {
                                        return entities[0];
                                    }));

                                case 5:
                                case "end":
                                    return _context3.stop();
                            }
                        }
                    }, _callee3, this);
                }));

                function create(_x2, _x3) {
                    return _ref3.apply(this, arguments);
                }

                return create;
            }()
        }]);

        return _class;
    }(superclass);
};
exports.default = create;

/***/ }),

/***/ 147:
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

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var del = function del(superclass) {
    return function (_superclass) {
        _inherits(_class, _superclass);

        function _class() {
            _classCallCheck(this, _class);

            return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        _createClass(_class, [{
            key: "delete",
            value: function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    var primaryId, logicalName;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.next = 2;
                                    return this.getPrimaryId();

                                case 2:
                                    primaryId = _context.sent;
                                    logicalName = this.logicalName;

                                    console.log("Delete " + logicalName + " (" + primaryId + ")");
                                    return _context.abrupt("return", _WebAPI2.default.deleteEntity(logicalName, primaryId));

                                case 6:
                                case "end":
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));

                function _delete() {
                    return _ref.apply(this, arguments);
                }

                return _delete;
            }()
        }]);

        return _class;
    }(superclass);
};
exports.default = del;

/***/ }),

/***/ 148:
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

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var fetch = function fetch(superclass) {
    return function (_superclass) {
        _inherits(_class, _superclass);

        function _class() {
            _classCallCheck(this, _class);

            return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        _createClass(_class, null, [{
            key: "fetch",
            value: function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    var logicalName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.logicalName;
                    var fetchXml = arguments[1];
                    var result;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    console.log("Fetch " + logicalName + " " + fetchXml);
                                    _context.next = 3;
                                    return _WebAPI2.default.executeFetchXml(logicalName, fetchXml);

                                case 3:
                                    result = _context.sent;
                                    return _context.abrupt("return", this.parseResult(result.value, logicalName));

                                case 5:
                                case "end":
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));

                function fetch() {
                    return _ref.apply(this, arguments);
                }

                return fetch;
            }()
        }]);

        return _class;
    }(superclass);
};
exports.default = fetch;

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Metadata = __webpack_require__(43);

var _Metadata2 = _interopRequireDefault(_Metadata);

var _WebAPI = __webpack_require__(15);

var _WebAPI2 = _interopRequireDefault(_WebAPI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
            key: "get",
            value: function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    var logicalName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.logicalName;
                    var id = arguments[1];
                    var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                    var queryOptions, data, value, result;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.next = 2;
                                    return this.getQueryOptions(query, logicalName);

                                case 2:
                                    queryOptions = _context.sent;

                                    if (id && query.filters) {
                                        console.log("Get by 'id' does negate filters on query");
                                    }
                                    console.log("Get " + logicalName + " (" + id + ") " + queryOptions);
                                    _context.next = 7;
                                    return _WebAPI2.default.retrieveEntity(logicalName, id, queryOptions);

                                case 7:
                                    data = _context.sent;
                                    value = data.value ? data.value : [data];
                                    _context.next = 11;
                                    return this.parseResult(value, logicalName);

                                case 11:
                                    result = _context.sent;
                                    return _context.abrupt("return", result[0]);

                                case 13:
                                case "end":
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));

                function get() {
                    return _ref.apply(this, arguments);
                }

                return get;
            }()
        }, {
            key: "count",
            value: function count() {
                var logicalName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.logicalName;

                return _WebAPI2.default.count(logicalName);
            }

            /**
             * query: {filters: [{type, conditions, filters}]}
             * type: "or" | "and"
             * conditions: [{attribute, operator, value}]
             *
             */

        }, {
            key: "query",
            value: function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                    var logicalName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.logicalName;

                    var _query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

                    var queryOptions, result;
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    _context2.next = 2;
                                    return this.getQueryOptions(_query, logicalName);

                                case 2:
                                    queryOptions = _context2.sent;

                                    console.log("Query " + logicalName);
                                    _context2.next = 6;
                                    return _WebAPI2.default.retrieveMultiple(logicalName, queryOptions, this.getHeaders(_query));

                                case 6:
                                    result = _context2.sent;
                                    return _context2.abrupt("return", this.parseResult(result.value, logicalName));

                                case 8:
                                case "end":
                                    return _context2.stop();
                            }
                        }
                    }, _callee2, this);
                }));

                function query() {
                    return _ref2.apply(this, arguments);
                }

                return query;
            }()
        }, {
            key: "getHeaders",
            value: function getHeaders(query) {
                var headers = {};
                if (query.maxpagesize) {
                    headers.Prefer = "odata.maxpagesize=" + query.maxpagesize;
                }
                return headers;
            }

            /**
             * Rewrites filter attributes on query to filters collection in query.
             * .query({myAttribute: "abc"}) => .query({filters: [conditions: [{attribute: "myAttribute", operator: "eq", value: "abc"}]]})
             */

        }, {
            key: "rewriteFilters",
            value: function rewriteFilters(query) {
                var filter = {
                    type: "and",
                    conditions: []
                };
                if (!query.filters) {
                    query.filters = [];
                }
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = Object.keys(query)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var key = _step.value;

                        if (!this.queryElements.includes(key)) {
                            filter.conditions.push({
                                attribute: key.toLowerCase(),
                                operator: "eq",
                                value: query[key]
                            });
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }

                if (filter.conditions.length > 0) {
                    query.filters.push(filter);
                }
            }

            /**
             * Rewrites select attributes, which are Lookups to expand.
             */

        }, {
            key: "rewriteSelect",
            value: function () {
                var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(query, logicalName) {
                    var entityAttributes, clone, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, attribute, entityAttribute, AttributeType, entityMetadata, index;

                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                        while (1) {
                            switch (_context3.prev = _context3.next) {
                                case 0:
                                    if (!query.select) {
                                        _context3.next = 42;
                                        break;
                                    }

                                    _context3.next = 3;
                                    return this.getEntityAttributes(logicalName);

                                case 3:
                                    entityAttributes = _context3.sent;
                                    clone = query.select.slice();
                                    _iteratorNormalCompletion2 = true;
                                    _didIteratorError2 = false;
                                    _iteratorError2 = undefined;
                                    _context3.prev = 8;
                                    _iterator2 = clone[Symbol.iterator]();

                                case 10:
                                    if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                                        _context3.next = 28;
                                        break;
                                    }

                                    attribute = _step2.value;
                                    entityAttribute = entityAttributes[attribute], AttributeType = entityAttribute && entityAttribute.AttributeType;

                                    if (!(AttributeType === "Lookup")) {
                                        _context3.next = 23;
                                        break;
                                    }

                                    _context3.next = 16;
                                    return _Metadata2.default.getEntityDefinitions(entityAttribute.Targets[0]);

                                case 16:
                                    entityMetadata = _context3.sent;
                                    index = query.select.indexOf(attribute);

                                    query.select.splice(index, 1);
                                    if (!query.expand) {
                                        query.expand = [];
                                    }
                                    query.expand.push({
                                        attribute: attribute,
                                        select: [entityMetadata.PrimaryIdAttribute, entityMetadata.PrimaryNameAttribute]
                                    });
                                    _context3.next = 25;
                                    break;

                                case 23:
                                    if (AttributeType) {
                                        _context3.next = 25;
                                        break;
                                    }

                                    throw "Unexisting select field found: " + attribute;

                                case 25:
                                    _iteratorNormalCompletion2 = true;
                                    _context3.next = 10;
                                    break;

                                case 28:
                                    _context3.next = 34;
                                    break;

                                case 30:
                                    _context3.prev = 30;
                                    _context3.t0 = _context3["catch"](8);
                                    _didIteratorError2 = true;
                                    _iteratorError2 = _context3.t0;

                                case 34:
                                    _context3.prev = 34;
                                    _context3.prev = 35;

                                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                        _iterator2.return();
                                    }

                                case 37:
                                    _context3.prev = 37;

                                    if (!_didIteratorError2) {
                                        _context3.next = 40;
                                        break;
                                    }

                                    throw _iteratorError2;

                                case 40:
                                    return _context3.finish(37);

                                case 41:
                                    return _context3.finish(34);

                                case 42:
                                case "end":
                                    return _context3.stop();
                            }
                        }
                    }, _callee3, this, [[8, 30, 34, 42], [35,, 37, 41]]);
                }));

                function rewriteSelect(_x6, _x7) {
                    return _ref3.apply(this, arguments);
                }

                return rewriteSelect;
            }()
        }, {
            key: "getQueryOptions",
            value: function () {
                var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(query, logicalName) {
                    var separator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "&";
                    var options, parsedSelect, parsedFilters, parsedExpand, parsedOrders, parsedTop, parsedCount;
                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                        while (1) {
                            switch (_context4.prev = _context4.next) {
                                case 0:
                                    this.rewriteFilters(query);
                                    _context4.next = 3;
                                    return this.rewriteSelect(query, logicalName);

                                case 3:
                                    options = [];
                                    parsedSelect = this.parseSelect(query.select);
                                    _context4.next = 7;
                                    return this.parseFilters(query.filters, logicalName);

                                case 7:
                                    parsedFilters = _context4.sent;
                                    _context4.next = 10;
                                    return this.parseExpand(query.expand, logicalName);

                                case 10:
                                    parsedExpand = _context4.sent;
                                    parsedOrders = this.parseOrders(query.orders);
                                    parsedTop = this.parseTop(query.top);
                                    parsedCount = this.parseCount(query.count);

                                    if (parsedFilters) {
                                        options.push(parsedFilters);
                                    }
                                    if (parsedSelect) {
                                        options.push(parsedSelect);
                                    }
                                    if (parsedExpand) {
                                        options.push(parsedExpand);
                                    }
                                    if (parsedOrders) {
                                        options.push(parsedOrders);
                                    }
                                    if (parsedTop) {
                                        options.push(parsedTop);
                                    }
                                    if (parsedCount) {
                                        options.push(parsedCount);
                                    }
                                    return _context4.abrupt("return", options.join(separator));

                                case 21:
                                case "end":
                                    return _context4.stop();
                            }
                        }
                    }, _callee4, this);
                }));

                function getQueryOptions(_x8, _x9) {
                    return _ref4.apply(this, arguments);
                }

                return getQueryOptions;
            }()
        }, {
            key: "parseExpand",
            value: function () {
                var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                    var expand = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                    var logicalName = arguments[1];

                    var parsedExpand, attributeString, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, item, navigationProperty, attribute, _navigationProperty, entityAttributes, parsedSubQuery;

                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                        while (1) {
                            switch (_context5.prev = _context5.next) {
                                case 0:
                                    parsedExpand = null;

                                    if (!(expand.length > 0)) {
                                        _context5.next = 59;
                                        break;
                                    }

                                    attributeString = "";
                                    _iteratorNormalCompletion3 = true;
                                    _didIteratorError3 = false;
                                    _iteratorError3 = undefined;
                                    _context5.prev = 6;
                                    _iterator3 = expand[Symbol.iterator]();

                                case 8:
                                    if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
                                        _context5.next = 44;
                                        break;
                                    }

                                    item = _step3.value;

                                    if (attributeString !== "") {
                                        attributeString += ",";
                                    }

                                    if (!(typeof item === "string")) {
                                        _context5.next = 24;
                                        break;
                                    }

                                    _context5.prev = 12;
                                    _context5.next = 15;
                                    return this.getNavigationProperty(item, logicalName);

                                case 15:
                                    navigationProperty = _context5.sent;

                                    attributeString += "" + navigationProperty;
                                    _context5.next = 22;
                                    break;

                                case 19:
                                    _context5.prev = 19;
                                    _context5.t0 = _context5["catch"](12);
                                    throw _context5.t0;

                                case 22:
                                    _context5.next = 41;
                                    break;

                                case 24:
                                    _context5.prev = 24;
                                    attribute = item.attribute;
                                    _context5.next = 28;
                                    return this.getNavigationProperty(attribute, logicalName);

                                case 28:
                                    _navigationProperty = _context5.sent;
                                    _context5.next = 31;
                                    return this.getEntityAttributes(logicalName);

                                case 31:
                                    entityAttributes = _context5.sent;
                                    _context5.next = 34;
                                    return this.getQueryOptions(item, entityAttributes[attribute].Targets[0], ";");

                                case 34:
                                    parsedSubQuery = _context5.sent;

                                    attributeString += _navigationProperty + "(" + parsedSubQuery + ")";
                                    _context5.next = 41;
                                    break;

                                case 38:
                                    _context5.prev = 38;
                                    _context5.t1 = _context5["catch"](24);
                                    throw _context5.t1;

                                case 41:
                                    _iteratorNormalCompletion3 = true;
                                    _context5.next = 8;
                                    break;

                                case 44:
                                    _context5.next = 50;
                                    break;

                                case 46:
                                    _context5.prev = 46;
                                    _context5.t2 = _context5["catch"](6);
                                    _didIteratorError3 = true;
                                    _iteratorError3 = _context5.t2;

                                case 50:
                                    _context5.prev = 50;
                                    _context5.prev = 51;

                                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                        _iterator3.return();
                                    }

                                case 53:
                                    _context5.prev = 53;

                                    if (!_didIteratorError3) {
                                        _context5.next = 56;
                                        break;
                                    }

                                    throw _iteratorError3;

                                case 56:
                                    return _context5.finish(53);

                                case 57:
                                    return _context5.finish(50);

                                case 58:
                                    parsedExpand = "$expand=" + attributeString;

                                case 59:
                                    return _context5.abrupt("return", parsedExpand);

                                case 60:
                                case "end":
                                    return _context5.stop();
                            }
                        }
                    }, _callee5, this, [[6, 46, 50, 58], [12, 19], [24, 38], [51,, 53, 57]]);
                }));

                function parseExpand() {
                    return _ref5.apply(this, arguments);
                }

                return parseExpand;
            }()
        }, {
            key: "parseSelect",
            value: function parseSelect() {
                var select = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

                var parsedAttributes = null;
                if (select.length > 0) {
                    var attributeString = "";
                    var _iteratorNormalCompletion4 = true;
                    var _didIteratorError4 = false;
                    var _iteratorError4 = undefined;

                    try {
                        for (var _iterator4 = select[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                            var attribute = _step4.value;

                            if (attributeString !== "") {
                                attributeString += ",";
                            }
                            attributeString += "" + attribute;
                        }
                    } catch (err) {
                        _didIteratorError4 = true;
                        _iteratorError4 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion4 && _iterator4.return) {
                                _iterator4.return();
                            }
                        } finally {
                            if (_didIteratorError4) {
                                throw _iteratorError4;
                            }
                        }
                    }

                    parsedAttributes = "$select=" + attributeString;
                }
                return parsedAttributes;
            }
        }, {
            key: "parseFilters",
            value: function () {
                var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                    var filters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                    var logicalName = arguments[1];

                    var parsedFiltersString, parsedFilters, _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, filter, type, conditions, parsedSubFilterString;

                    return regeneratorRuntime.wrap(function _callee6$(_context6) {
                        while (1) {
                            switch (_context6.prev = _context6.next) {
                                case 0:
                                    parsedFiltersString = null;

                                    if (!(filters.length > 0)) {
                                        _context6.next = 39;
                                        break;
                                    }

                                    parsedFilters = [];
                                    _iteratorNormalCompletion5 = true;
                                    _didIteratorError5 = false;
                                    _iteratorError5 = undefined;
                                    _context6.prev = 6;
                                    _iterator5 = filters[Symbol.iterator]();

                                case 8:
                                    if (_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done) {
                                        _context6.next = 24;
                                        break;
                                    }

                                    filter = _step5.value;
                                    type = filter.type, conditions = filter.conditions;
                                    _context6.t0 = parsedFilters;
                                    _context6.next = 14;
                                    return this.parseConditions(conditions, type, logicalName);

                                case 14:
                                    _context6.t1 = _context6.sent;

                                    _context6.t0.push.call(_context6.t0, _context6.t1);

                                    if (!filter.filters) {
                                        _context6.next = 21;
                                        break;
                                    }

                                    _context6.next = 19;
                                    return this.parseFilters(filter.filters, logicalName);

                                case 19:
                                    parsedSubFilterString = _context6.sent;

                                    parsedFilters.push(parsedSubFilterString.substring(8)); //scrape $filter=

                                case 21:
                                    _iteratorNormalCompletion5 = true;
                                    _context6.next = 8;
                                    break;

                                case 24:
                                    _context6.next = 30;
                                    break;

                                case 26:
                                    _context6.prev = 26;
                                    _context6.t2 = _context6["catch"](6);
                                    _didIteratorError5 = true;
                                    _iteratorError5 = _context6.t2;

                                case 30:
                                    _context6.prev = 30;
                                    _context6.prev = 31;

                                    if (!_iteratorNormalCompletion5 && _iterator5.return) {
                                        _iterator5.return();
                                    }

                                case 33:
                                    _context6.prev = 33;

                                    if (!_didIteratorError5) {
                                        _context6.next = 36;
                                        break;
                                    }

                                    throw _iteratorError5;

                                case 36:
                                    return _context6.finish(33);

                                case 37:
                                    return _context6.finish(30);

                                case 38:
                                    parsedFiltersString = "$filter=" + parsedFilters.join("and");

                                case 39:
                                    return _context6.abrupt("return", parsedFiltersString);

                                case 40:
                                case "end":
                                    return _context6.stop();
                            }
                        }
                    }, _callee6, this, [[6, 26, 30, 38], [31,, 33, 37]]);
                }));

                function parseFilters() {
                    return _ref6.apply(this, arguments);
                }

                return parseFilters;
            }()
        }, {
            key: "parseConditions",
            value: function () {
                var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                    var conditions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "and";
                    var logicalName = arguments[2];

                    var parsedConditions, entityAttributes, _iteratorNormalCompletion6, _didIteratorError6, _iteratorError6, _iterator6, _step6, condition, operator, value, attribute, AttributeType;

                    return regeneratorRuntime.wrap(function _callee7$(_context7) {
                        while (1) {
                            switch (_context7.prev = _context7.next) {
                                case 0:
                                    parsedConditions = "";
                                    _context7.next = 3;
                                    return this.getEntityAttributes(logicalName);

                                case 3:
                                    entityAttributes = _context7.sent;
                                    _iteratorNormalCompletion6 = true;
                                    _didIteratorError6 = false;
                                    _iteratorError6 = undefined;
                                    _context7.prev = 7;

                                    for (_iterator6 = conditions[Symbol.iterator](); !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                                        condition = _step6.value;
                                        operator = condition.operator, value = condition.value, attribute = condition.attribute;
                                        AttributeType = entityAttributes[attribute].AttributeType;

                                        attribute = AttributeType === "Lookup" ? "_" + attribute + "_value" : attribute;
                                        operator = operator || "eq";
                                        value = AttributeType === "String" ? "'" + value + "'" : "" + value;
                                        if (parsedConditions !== "") {
                                            parsedConditions += " " + type + " ";
                                        }
                                        parsedConditions += attribute + " " + operator + " " + value;
                                    }
                                    //return encodeURIComponent(`(${parsedConditions})`);
                                    _context7.next = 15;
                                    break;

                                case 11:
                                    _context7.prev = 11;
                                    _context7.t0 = _context7["catch"](7);
                                    _didIteratorError6 = true;
                                    _iteratorError6 = _context7.t0;

                                case 15:
                                    _context7.prev = 15;
                                    _context7.prev = 16;

                                    if (!_iteratorNormalCompletion6 && _iterator6.return) {
                                        _iterator6.return();
                                    }

                                case 18:
                                    _context7.prev = 18;

                                    if (!_didIteratorError6) {
                                        _context7.next = 21;
                                        break;
                                    }

                                    throw _iteratorError6;

                                case 21:
                                    return _context7.finish(18);

                                case 22:
                                    return _context7.finish(15);

                                case 23:
                                    return _context7.abrupt("return", "(" + parsedConditions + ")");

                                case 24:
                                case "end":
                                    return _context7.stop();
                            }
                        }
                    }, _callee7, this, [[7, 11, 15, 23], [16,, 18, 22]]);
                }));

                function parseConditions() {
                    return _ref7.apply(this, arguments);
                }

                return parseConditions;
            }()
        }, {
            key: "parseOrders",
            value: function parseOrders() {
                var orders = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

                var parsedOrders = null;
                if (orders.length > 0) {
                    var attributeString = "";
                    var _iteratorNormalCompletion7 = true;
                    var _didIteratorError7 = false;
                    var _iteratorError7 = undefined;

                    try {
                        for (var _iterator7 = orders[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                            var _step7$value = _step7.value,
                                attribute = _step7$value.attribute,
                                descending = _step7$value.descending;

                            var orderString = !descending ? "asc" : "desc";
                            if (attributeString !== "") {
                                attributeString += ",";
                            }
                            attributeString += attribute + " " + orderString;
                        }
                    } catch (err) {
                        _didIteratorError7 = true;
                        _iteratorError7 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion7 && _iterator7.return) {
                                _iterator7.return();
                            }
                        } finally {
                            if (_didIteratorError7) {
                                throw _iteratorError7;
                            }
                        }
                    }

                    parsedOrders = "$orderby=" + attributeString;
                }
                return parsedOrders;
            }
        }, {
            key: "parseTop",
            value: function parseTop(top) {
                var parsedTop = null;
                if (top) {
                    parsedTop = "$top=" + top;
                }
                return parsedTop;
            }
        }, {
            key: "parseCount",
            value: function parseCount(count) {
                var parsedCount = null;
                if (count === true) {
                    parsedCount = "$count=" + count;
                }
                return parsedCount;
            }
        }, {
            key: "queryElements",
            get: function get() {
                return ["attribute", "filters", "select", "expand", "orders", "maxpagesize", "top", "count"];
            }
        }]);

        return _class;
    }(superclass);
};
exports.default = read;

/***/ }),

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

/***/ 150:
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

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var update = function update(superclass) {
    return function (_superclass) {
        _inherits(_class, _superclass);

        function _class() {
            _classCallCheck(this, _class);

            return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        _createClass(_class, [{
            key: "save",
            value: function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.next = 2;
                                    return this.isNew();

                                case 2:
                                    if (!_context.sent) {
                                        _context.next = 6;
                                        break;
                                    }

                                    return _context.abrupt("return", this.create());

                                case 6:
                                    if (!(Object.keys(this.changes).length !== 0)) {
                                        _context.next = 8;
                                        break;
                                    }

                                    return _context.abrupt("return", this.update());

                                case 8:
                                case "end":
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));

                function save() {
                    return _ref.apply(this, arguments);
                }

                return save;
            }()
        }, {
            key: "update",
            value: function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                    var changes, primaryId, logicalName;
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    changes = this.changes;
                                    _context2.next = 3;
                                    return this.getPrimaryId();

                                case 3:
                                    primaryId = _context2.sent;
                                    logicalName = this.logicalName;

                                    console.log("Update " + logicalName + " (" + primaryId + ")");
                                    _context2.next = 8;
                                    return _WebAPI2.default.updateEntity(logicalName, primaryId, changes);

                                case 8:
                                    this.changes = null;

                                case 9:
                                case "end":
                                    return _context2.stop();
                            }
                        }
                    }, _callee2, this);
                }));

                function update() {
                    return _ref2.apply(this, arguments);
                }

                return update;
            }()
        }]);

        return _class;
    }(superclass);
};
exports.default = update;

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return (b64.length * 3 / 4) - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr((len * 3 / 4) - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0; i < l; i += 4) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}


/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(152)
var ieee754 = __webpack_require__(354)
var isArray = __webpack_require__(355)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(67)))

/***/ }),

/***/ 354:
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ 355:
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(138);


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

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Entity2 = __webpack_require__(68);

var _Entity3 = _interopRequireDefault(_Entity2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SubEntity = function (_Entity) {
    _inherits(SubEntity, _Entity);

    function SubEntity() {
        _classCallCheck(this, SubEntity);

        return _possibleConstructorReturn(this, (SubEntity.__proto__ || Object.getPrototypeOf(SubEntity)).apply(this, arguments));
    }

    _createClass(SubEntity, null, [{
        key: "get",
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id, query) {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                return _context.abrupt("return", _get(SubEntity.__proto__ || Object.getPrototypeOf(SubEntity), "get", this).call(this, this.logicalName, id, query));

                            case 1:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function get(_x, _x2) {
                return _ref.apply(this, arguments);
            }

            return get;
        }()
    }, {
        key: "query",
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_query) {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                return _context2.abrupt("return", _get(SubEntity.__proto__ || Object.getPrototypeOf(SubEntity), "query", this).call(this, this.logicalName, _query));

                            case 1:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function query(_x3) {
                return _ref2.apply(this, arguments);
            }

            return query;
        }()
    }, {
        key: "fetch",
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(fetchXml) {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                return _context3.abrupt("return", _get(SubEntity.__proto__ || Object.getPrototypeOf(SubEntity), "fetch", this).call(this, this.logicalName, fetchXml));

                            case 1:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function fetch(_x4) {
                return _ref3.apply(this, arguments);
            }

            return fetch;
        }()
    }]);

    return SubEntity;
}(_Entity3.default);

exports.default = SubEntity;

/***/ }),

/***/ 67:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _canParse2 = __webpack_require__(145);

var _canParse3 = _interopRequireDefault(_canParse2);

var _Class = __webpack_require__(51);

var _Class2 = _interopRequireDefault(_Class);

var _create = __webpack_require__(146);

var _create2 = _interopRequireDefault(_create);

var _delete = __webpack_require__(147);

var _delete2 = _interopRequireDefault(_delete);

var _fetch = __webpack_require__(148);

var _fetch2 = _interopRequireDefault(_fetch);

var _Metadata = __webpack_require__(43);

var _Metadata2 = _interopRequireDefault(_Metadata);

var _read = __webpack_require__(149);

var _read2 = _interopRequireDefault(_read);

var _update = __webpack_require__(150);

var _update2 = _interopRequireDefault(_update);

var _WebAPI = __webpack_require__(15);

var _WebAPI2 = _interopRequireDefault(_WebAPI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Entity = function (_canParse) {
    _inherits(Entity, _canParse);

    function Entity(data, logicalName) {
        _classCallCheck(this, Entity);

        var _this = _possibleConstructorReturn(this, (Entity.__proto__ || Object.getPrototypeOf(Entity)).apply(this, arguments));

        _this.data = data;
        _this.logicalName = logicalName || _this.getClass().logicalName;
        return _this;
    }

    _createClass(Entity, [{
        key: "isNew",
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var value;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.getPrimaryId();

                            case 2:
                                value = _context.sent;
                                return _context.abrupt("return", !value);

                            case 4:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function isNew() {
                return _ref.apply(this, arguments);
            }

            return isNew;
        }()
    }, {
        key: "getEntityMetadata",
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _Metadata2.default.getEntityDefinitions(this.logicalName);

                            case 2:
                                return _context2.abrupt("return", _context2.sent);

                            case 3:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getEntityMetadata() {
                return _ref2.apply(this, arguments);
            }

            return getEntityMetadata;
        }()
    }, {
        key: "getPrimaryIdAttribute",
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var entityMetadata;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return this.getEntityMetadata();

                            case 2:
                                entityMetadata = _context3.sent;
                                return _context3.abrupt("return", entityMetadata.PrimaryIdAttribute);

                            case 4:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function getPrimaryIdAttribute() {
                return _ref3.apply(this, arguments);
            }

            return getPrimaryIdAttribute;
        }()
    }, {
        key: "getPrimaryId",
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                var primaryIdAttribute;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.next = 2;
                                return this.getPrimaryIdAttribute();

                            case 2:
                                primaryIdAttribute = _context4.sent;
                                return _context4.abrupt("return", this.data[primaryIdAttribute]);

                            case 4:
                            case "end":
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function getPrimaryId() {
                return _ref4.apply(this, arguments);
            }

            return getPrimaryId;
        }()
    }, {
        key: "getAttribute",
        value: function getAttribute(name, navigationProperty) {
            var data = this.data[navigationProperty || name];
            if (data) {
                if (navigationProperty) {
                    var entityAttributes = this.getClass().getCachedEntityAttributes(this.logicalName),
                        entityAttribute = entityAttributes[name],
                        entityDefinitions = _Metadata2.default.getCachedEntityDefinitions(entityAttribute.Targets[0]);
                    if (entityDefinitions) {
                        var SchemaName = entityDefinitions.SchemaName,
                            PrimaryIdAttribute = entityDefinitions.PrimaryIdAttribute,
                            PrimaryNameAttribute = entityDefinitions.PrimaryNameAttribute;

                        data.LogicalName = SchemaName;
                        data.Id = data[PrimaryIdAttribute];
                        data.Name = data[PrimaryNameAttribute];
                    }
                }
            }
            return data;
        }
    }, {
        key: "setAttribute",
        value: function setAttribute(name, value) {
            var entityAttributes = this.getClass().getCachedEntityAttributes(this.logicalName),
                entityAttribute = entityAttributes && entityAttributes[name];
            if (entityAttribute || name.endsWith("@odata.bind")) {
                if (entityAttribute && entityAttribute.AttributeType === "Lookup" && (typeof value === "undefined" ? "undefined" : _typeof(value)) !== "object") {
                    var logicalName = this.logicalName;
                    console.log(logicalName + " attribute " + name + " is a Lookup. Use " + this.logicalName + ".bind('" + name + "', '" + value + "') instead.");
                } else {
                    var currentValue = this.data[name];
                    if (currentValue !== value) {
                        this.data[name] = value;
                        this.changes[name] = value;
                    }
                }
            } else {
                var _logicalName = this.logicalName;
                console.log(_logicalName + " has no attribute '" + name + "'");
            }
        }

        //account.setAttribute("primarycontactid@odata.bind", "https://dys001.crm4.dynamics.com/api/data/v8.0/contacts(465b158c-541c-e511-80d3-3863bb347ba8)");

    }, {
        key: "bind",
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(name, value, targetEntity) {
                var entityDefinitionAttributes, entityDefinitionAttribute, baseURL, target, entityMetadata, navigationProperty, entitySetName, url;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                _context5.next = 2;
                                return this.getClass().getEntityAttributes(this.logicalName);

                            case 2:
                                entityDefinitionAttributes = _context5.sent;
                                entityDefinitionAttribute = entityDefinitionAttributes[name];

                                if (!(entityDefinitionAttribute.AttributeType === "Lookup")) {
                                    _context5.next = 18;
                                    break;
                                }

                                baseURL = _WebAPI2.default.webAPIPath;
                                target = targetEntity || entityDefinitionAttribute.Targets[0];
                                _context5.next = 9;
                                return _Metadata2.default.getEntityDefinitions(target);

                            case 9:
                                entityMetadata = _context5.sent;
                                _context5.next = 12;
                                return Entity.getNavigationProperty(name, this.logicalName, target);

                            case 12:
                                navigationProperty = _context5.sent;
                                entitySetName = entityMetadata.EntitySetName;
                                url = baseURL + "/" + entitySetName + "(" + value + ")";

                                this.setAttribute(navigationProperty + "@odata.bind", url);
                                _context5.next = 18;
                                return this.updateBinding(name, target, value);

                            case 18:
                            case "end":
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function bind(_x, _x2, _x3) {
                return _ref5.apply(this, arguments);
            }

            return bind;
        }()

        /**
         * @private
         * @param name
         * @param bindingName
         * @param value
         * @returns {Promise.<void>}
         */

    }, {
        key: "updateBinding",
        value: function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(name, bindingName, value) {
                var _this2 = this;

                var dataAttribute, attributes;
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                dataAttribute = this.getAttribute(name);

                                if (dataAttribute) {
                                    _context6.next = 3;
                                    break;
                                }

                                return _context6.abrupt("return");

                            case 3:
                                attributes = Object.keys(dataAttribute).filter(function (attr) {
                                    return !["Id", "LogicalName", "Name"].includes(attr);
                                });
                                _context6.next = 6;
                                return Entity.get(bindingName, value, {
                                    select: attributes
                                }).then(function (bindingEntity) {
                                    var _iteratorNormalCompletion = true;
                                    var _didIteratorError = false;
                                    var _iteratorError = undefined;

                                    try {
                                        for (var _iterator = attributes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                            var key = _step.value;

                                            dataAttribute[key] = bindingEntity[key];
                                        }
                                    } catch (err) {
                                        _didIteratorError = true;
                                        _iteratorError = err;
                                    } finally {
                                        try {
                                            if (!_iteratorNormalCompletion && _iterator.return) {
                                                _iterator.return();
                                            }
                                        } finally {
                                            if (_didIteratorError) {
                                                throw _iteratorError;
                                            }
                                        }
                                    }

                                    _this2.setAttribute(name, dataAttribute);
                                });

                            case 6:
                            case "end":
                                return _context6.stop();
                        }
                    }
                }, _callee6, this);
            }));

            function updateBinding(_x4, _x5, _x6) {
                return _ref6.apply(this, arguments);
            }

            return updateBinding;
        }()
    }, {
        key: "logicalName",
        get: function get() {
            return this.logicName;
        },
        set: function set(logicalName) {
            this.logicName = logicalName;
        }
    }, {
        key: "data",
        get: function get() {
            return this.dat;
        },
        set: function set(data) {
            this.dat = data;
        }
    }, {
        key: "changes",
        get: function get() {
            if (!this.chngs) {
                this.chngs = {};
            }
            return this.chngs;
        },
        set: function set(changes) {
            this.chngs = changes || {};
        }
    }], [{
        key: "getEntityAttributes",
        value: function () {
            var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                var logicalName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.logicalName;

                var entityDefinitions, entityAttributes, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, entityDefinitionAttribute;

                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) {
                        switch (_context7.prev = _context7.next) {
                            case 0:
                                if (!Entity.cachedEntityAttributes) {
                                    Entity.cachedEntityAttributes = {};
                                }

                                if (!Entity.cachedEntityAttributes[logicalName]) {
                                    _context7.next = 5;
                                    break;
                                }

                                return _context7.abrupt("return", Entity.cachedEntityAttributes[logicalName]);

                            case 5:
                                _context7.prev = 5;
                                _context7.next = 8;
                                return _Metadata2.default.getEntityDefinitions(logicalName);

                            case 8:
                                entityDefinitions = _context7.sent;
                                entityAttributes = {};
                                _iteratorNormalCompletion2 = true;
                                _didIteratorError2 = false;
                                _iteratorError2 = undefined;
                                _context7.prev = 13;

                                for (_iterator2 = entityDefinitions.Attributes[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                    entityDefinitionAttribute = _step2.value;

                                    entityAttributes[entityDefinitionAttribute.LogicalName] = entityDefinitionAttribute;
                                }
                                _context7.next = 21;
                                break;

                            case 17:
                                _context7.prev = 17;
                                _context7.t0 = _context7["catch"](13);
                                _didIteratorError2 = true;
                                _iteratorError2 = _context7.t0;

                            case 21:
                                _context7.prev = 21;
                                _context7.prev = 22;

                                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                    _iterator2.return();
                                }

                            case 24:
                                _context7.prev = 24;

                                if (!_didIteratorError2) {
                                    _context7.next = 27;
                                    break;
                                }

                                throw _iteratorError2;

                            case 27:
                                return _context7.finish(24);

                            case 28:
                                return _context7.finish(21);

                            case 29:
                                Entity.cachedEntityAttributes[logicalName] = entityAttributes;
                                return _context7.abrupt("return", entityAttributes);

                            case 33:
                                _context7.prev = 33;
                                _context7.t1 = _context7["catch"](5);
                                throw _context7.t1;

                            case 36:
                            case "end":
                                return _context7.stop();
                        }
                    }
                }, _callee7, this, [[5, 33], [13, 17, 21, 29], [22,, 24, 28]]);
            }));

            function getEntityAttributes() {
                return _ref7.apply(this, arguments);
            }

            return getEntityAttributes;
        }()
    }, {
        key: "getCachedEntityAttributes",
        value: function getCachedEntityAttributes() {
            var logicalName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.logicalName;

            if (!Entity.cachedEntityAttributes) {
                Entity.cachedEntityAttributes = {};
            }
            return Entity.cachedEntityAttributes[logicalName];
        }
    }]);

    return Entity;
}((0, _canParse3.default)((0, _create2.default)((0, _delete2.default)((0, _fetch2.default)((0, _read2.default)((0, _update2.default)(_Class2.default)))))));

exports.default = Entity;

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
//# sourceMappingURL=CRMSDK.noBabelPolyfill.js.map