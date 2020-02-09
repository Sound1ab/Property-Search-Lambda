(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(10);
var EmailManager_1 = __webpack_require__(7);
var createEmail_1 = __webpack_require__(1);
var api_1 = __webpack_require__(11);
var mjml_1 = __importDefault(__webpack_require__(9));
var emailManager = new EmailManager_1.EmailManager();
exports.hello = function (event) { return __awaiter(void 0, void 0, void 0, function () {
    var listings, unknownListings, emailTemplate, htmlOutput, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, api_1.getPropertylistings()];
            case 1:
                listings = _a.sent();
                return [4 /*yield*/, utils_1.findUnknownListings(listings)];
            case 2:
                unknownListings = _a.sent();
                if (unknownListings.length === 0) {
                    return [2 /*return*/, {
                            body: 'No new listings',
                            statusCode: 200,
                        }];
                }
                return [4 /*yield*/, utils_1.storeNewListings(unknownListings)];
            case 3:
                _a.sent();
                emailTemplate = createEmail_1.createEmail(unknownListings);
                htmlOutput = mjml_1.default(emailTemplate, {
                    minify: true,
                    validationLevel: 'skip',
                });
                return [4 /*yield*/, emailManager.send(htmlOutput.html)];
            case 4:
                response = _a.sent();
                return [2 /*return*/, {
                        body: JSON.stringify({
                            response: response,
                        }, null, 2),
                        statusCode: 200,
                    }];
        }
    });
}); };


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var createBody_1 = __webpack_require__(2);
var createCard_1 = __webpack_require__(3);
function createEmail(listings) {
    var NA = 'Not available';
    var cards = listings.map(function (listing) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
        return createCard_1.createCard({
            address: (_b = (_a = listing) === null || _a === void 0 ? void 0 : _a.displayable_address, (_b !== null && _b !== void 0 ? _b : NA)),
            available: (_d = (_c = listing) === null || _c === void 0 ? void 0 : _c.available_from_display, (_d !== null && _d !== void 0 ? _d : NA)),
            bedrooms: (_f = (_e = listing) === null || _e === void 0 ? void 0 : _e.num_bedrooms, (_f !== null && _f !== void 0 ? _f : NA)),
            description: (_h = (_g = listing) === null || _g === void 0 ? void 0 : _g.description, (_h !== null && _h !== void 0 ? _h : NA)),
            estateAgent: {
                address: (_k = (_j = listing) === null || _j === void 0 ? void 0 : _j.agent_address, (_k !== null && _k !== void 0 ? _k : NA)),
                tel: (_m = (_l = listing) === null || _l === void 0 ? void 0 : _l.agent_phone, (_m !== null && _m !== void 0 ? _m : NA)),
            },
            gmap: ((_o = listing) === null || _o === void 0 ? void 0 : _o.latitude) && ((_p = listing) === null || _p === void 0 ? void 0 : _p.longitude)
                ? "https://maps.google.com/?q=" + listing.latitude + "," + listing.longitude
                : undefined,
            image: (_r = (_q = listing) === null || _q === void 0 ? void 0 : _q.image_url, (_r !== null && _r !== void 0 ? _r : NA)),
            price: ((_t = (_s = listing) === null || _s === void 0 ? void 0 : _s.rental_prices) === null || _t === void 0 ? void 0 : _t.per_month) ? listing.rental_prices.per_month + "/month"
                : NA,
            published: ((_u = listing) === null || _u === void 0 ? void 0 : _u.first_published_date) ? new Date(listing.first_published_date).toDateString()
                : NA,
            zoopla: (_w = (_v = listing) === null || _v === void 0 ? void 0 : _v.details_url, (_w !== null && _w !== void 0 ? _w : NA)),
        });
    });
    return createBody_1.createBody(cards);
}
exports.createEmail = createEmail;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function createBody(children) {
    return "<mjml>\n  <mj-body background-color=\"#F2F2F2\">\n    " + children.join('') + "\n  </mj-body>\n</mjml>";
}
exports.createBody = createBody;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function createCard(_a) {
    var address = _a.address, available = _a.available, description = _a.description, estateAgent = _a.estateAgent, bedrooms = _a.bedrooms, gmap = _a.gmap, image = _a.image, price = _a.price, published = _a.published, zoopla = _a.zoopla;
    return "<mj-wrapper>\n      <mj-section background-color=\"white\" padding=\"0\">\n        <mj-column>\n          <mj-text line-height=\"1.5\">\n            <h3>\n              " + address + "\n            </h3>\n            <h4>\n              " + price + "\n            </h4>\n          </mj-text>\n        </mj-column>\n      </mj-section>\n      <mj-section background-color=\"white\" padding=\"0\">\n        <mj-column>\n          <mj-image padding=\"0\" src=\"" + image + "\" />\n        </mj-column>\n      </mj-section>\n      <mj-section background-color=\"white\" padding=\"0\">\n        <mj-column>\n          <mj-text line-height=\"1.5\">\n            <h3>\n              " + available + "\n            </h3>\n          </mj-text>\n        </mj-column>\n      </mj-section>\n      <mj-section background-color=\"white\" padding=\"0\">\n        <mj-column>\n          <mj-text line-height=\"1.5\">" + description + "</mj-text>\n        </mj-column>\n      </mj-section>\n      <mj-section background-color=\"white\" padding=\"0\">\n        <mj-column>\n          <mj-text line-height=\"1.5\">\n            <h4>\n              Estate agent\n            </h4>\n            <p>" + estateAgent.address + "</p>\n            <p>" + estateAgent.tel + "</p>\n          </mj-text>\n        </mj-column>\n        <mj-column>\n          <mj-text>\n            <h4>\n              Bedrooms\n            </h4>\n            <p>" + bedrooms + "</p>\n          </mj-text>\n        </mj-column>\n      </mj-section>\n      <mj-section background-color=\"white\" padding=\"0\">\n        <mj-column>\n          <mj-button background-color=\"#2DDCB4\" border-radius=\"8px\" href=\"" + zoopla + "\" font-size=\"14px\" font-family=\"Helvetica,Arial,sans-serif\" line-height=\"120%\">View on Zoopla</mj-button>\n        </mj-column>\n        " + (gmap
        ? "<mj-column>\n          <mj-button background-color=\"#2DDCB4\" border-radius=\"8px\" href=\"" + gmap + "\" font-size=\"14px\" font-family=\"Helvetica,Arial,sans-serif\" line-height=\"120%\">View in Google Maps</mj-button>\n        </mj-column>"
        : '') + "\n      </mj-section>\n      <mj-section background-color=\"white\" padding=\"0\">\n        <mj-column>\n          <mj-text align=\"right\">\n            <h5>\n              " + published + "\n            </h5>\n          </mj-text>\n        </mj-column>\n      </mj-section>\n    </mj-wrapper>";
}
exports.createCard = createCard;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(5));


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var aws_sdk_1 = __webpack_require__(6);
var options =  true
    ? {
        accessKeyId: 'DEFAULT_ACCESS_KEY',
        endpoint: 'http://localhost:8000',
        region: 'localhost',
        secretAccessKey: 'DEFAULT_SECRET',
    }
    : undefined;
var dynamoDb = new aws_sdk_1.DynamoDB.DocumentClient(options);
var DynamoManager = /** @class */ (function () {
    function DynamoManager(tableName) {
        this.TableName = tableName;
    }
    DynamoManager.prototype.create = function (id, values) {
        return __awaiter(this, void 0, void 0, function () {
            var timestamp, params, response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        timestamp = new Date().getTime();
                        params = {
                            Item: __assign({ createdAt: timestamp, id: id, updatedAt: timestamp }, values),
                            TableName: this.TableName,
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, dynamoDb.put(params).promise()];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, response];
                    case 3:
                        error_1 = _a.sent();
                        throw new Error("DynamoDB put error: " + error_1);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    DynamoManager.prototype.read = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var params, response, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = {
                            Key: {
                                id: id,
                            },
                            TableName: this.TableName,
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, dynamoDb.get(params).promise()];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, response];
                    case 3:
                        error_2 = _a.sent();
                        throw new Error("DynamoDB read error: " + error_2);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    DynamoManager.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var params, response, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = {
                            Key: {
                                id: id,
                            },
                            TableName: this.TableName,
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, dynamoDb.delete(params).promise()];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, response];
                    case 3:
                        error_3 = _a.sent();
                        throw new Error("DynamoDB delete error: " + error_3);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return DynamoManager;
}());
exports.DynamoManager = DynamoManager;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("aws-sdk");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var aws_sdk_1 = __webpack_require__(6);
var config = {
    accessKeyId: process.env.SERVERLESS_APP_AWS_ACCESS_KEY_ID,
    apiVersion: '2010-12-01',
    region: process.env.SERVERLESS_APP_REGION,
    secretAccessKey: process.env.SERVERLESS_APP_AWS_SECRET_ACCESS_KEY,
};
var ses = new aws_sdk_1.SES(config);
var EmailManager = /** @class */ (function () {
    function EmailManager() {
    }
    EmailManager.prototype.send = function (html) {
        return __awaiter(this, void 0, void 0, function () {
            var params, response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = {
                            Destination: {
                                ToAddresses: ['info@phillipparker.io'],
                            },
                            Message: {
                                Body: {
                                    Html: {
                                        Charset: 'UTF-8',
                                        Data: html,
                                    },
                                },
                                Subject: {
                                    Charset: 'UTF-8',
                                    Data: 'Test email',
                                },
                            },
                            Source: 'phillip-parker@outlook.com',
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, ses.sendEmail(params).promise()];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, response];
                    case 3:
                        error_1 = _a.sent();
                        return [2 /*return*/, null];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return EmailManager;
}());
exports.EmailManager = EmailManager;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("mjml");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var services_1 = __webpack_require__(4);
var tableName = process.env.DYNAMODB_TABLE;
if (!tableName) {
    throw new Error('No tablename set');
}
var dynamoDb = new services_1.DynamoManager(tableName);
function findUnknownListings(listings) {
    return __awaiter(this, void 0, void 0, function () {
        var readPromises, results, knownPropertyIds;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    readPromises = listings.map(function (_a) {
                        var listing_id = _a.listing_id;
                        return listing_id ? dynamoDb.read(listing_id) : null;
                    });
                    return [4 /*yield*/, Promise.all(readPromises)];
                case 1:
                    results = _a.sent();
                    knownPropertyIds = results
                        .filter(function (result) { var _a, _b; return (_b = (_a = result) === null || _a === void 0 ? void 0 : _a.Item) === null || _b === void 0 ? void 0 : _b.id; })
                        .map(function (result) { var _a, _b; return (_b = (_a = result) === null || _a === void 0 ? void 0 : _a.Item) === null || _b === void 0 ? void 0 : _b.id; });
                    return [2 /*return*/, listings.filter(function (_a) {
                            var listing_id = _a.listing_id;
                            return listing_id && !knownPropertyIds.includes(listing_id);
                        })];
            }
        });
    });
}
exports.findUnknownListings = findUnknownListings;
function storeNewListings(listings) {
    return __awaiter(this, void 0, void 0, function () {
        var createPromises;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    createPromises = listings.map(function (_a) {
                        var listing_id = _a.listing_id;
                        return listing_id ? dynamoDb.create(listing_id) : null;
                    });
                    return [4 /*yield*/, Promise.all(createPromises)];
                case 1:
                    _a.sent();
                    return [2 /*return*/, listings];
            }
        });
    });
}
exports.storeNewListings = storeNewListings;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(12));


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(__webpack_require__(8));
function getPropertylistings() {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var postcode, apiKey, radius, orderBy, ordering, listingStatus, minimumPrice, maximumPrice, minimumBeds, maximumBeds, pageSize, summarised, url, _b, status, statusText, data;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    postcode = 'n14pu';
                    apiKey = 'ngthxgk2nxwmm3pxng2zs9b7';
                    radius = 1;
                    orderBy = 'age';
                    ordering = 'descending';
                    listingStatus = 'rent';
                    minimumPrice = '325';
                    maximumPrice = '400';
                    minimumBeds = 1;
                    maximumBeds = 2;
                    pageSize = 2;
                    summarised = 'yes';
                    url = "https://api.zoopla.co.uk/api/v1/property_listings.json?postcode=" + postcode + "&api_key=" + apiKey + "&radius=" + radius + "&order_by=" + orderBy + "&ordering=" + ordering + "&listing_status=" + listingStatus + "&minimum_price=" + minimumPrice + "&maximum_price=" + maximumPrice + "&minimum_beds=" + minimumBeds + "&maximum_beds=" + maximumBeds + "&page_size=" + pageSize + "summarised=" + summarised;
                    return [4 /*yield*/, axios_1.default.get(url)];
                case 1:
                    _b = _c.sent(), status = _b.status, statusText = _b.statusText, data = _b.data;
                    if (status !== 200 || statusText !== 'OK' || !((_a = data) === null || _a === void 0 ? void 0 : _a.listing)) {
                        throw new Error('Zoopla api failed');
                    }
                    return [2 /*return*/, data.listing];
            }
        });
    });
}
exports.getPropertylistings = getPropertylistings;


/***/ })
/******/ ])));
//# sourceMappingURL=handlers.js.map