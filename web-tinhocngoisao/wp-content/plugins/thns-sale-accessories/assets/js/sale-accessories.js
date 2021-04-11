/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./wp-content/plugins/thns-sale-accessories/private/javascripts/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-runtime/core-js/json/stringify.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/json/stringify.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/json/stringify */ "./node_modules/core-js/library/fn/json/stringify.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol.js":
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol */ "./node_modules/core-js/library/fn/symbol/index.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol/iterator.js":
/*!***************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol/iterator.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "./node_modules/core-js/library/fn/symbol/iterator.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/typeof.js":
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/typeof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/babel-runtime/core-js/symbol/iterator.js");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/babel-runtime/core-js/symbol.js");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ "./node_modules/core-js/library/fn/json/stringify.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/fn/json/stringify.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/core-js/library/modules/es6.symbol.js");
__webpack_require__(/*! ../../modules/es6.object.to-string */ "./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js");
__webpack_require__(/*! ../../modules/es7.symbol.observable */ "./node_modules/core-js/library/modules/es7.symbol.observable.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Symbol;


/***/ }),

/***/ "./node_modules/core-js/library/fn/symbol/iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/fn/symbol/iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__(/*! ../../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js").f('iterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_a-function.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_a-function.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_add-to-unscopables.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "./node_modules/core-js/library/modules/_an-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_an-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/library/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/library/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_cof.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_cof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_core.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_core.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ctx.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ctx.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_defined.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_defined.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/library/modules/_enum-keys.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_enum-keys.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_export.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_export.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_fails.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_fails.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_global.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_global.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/library/modules/_has.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_has.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_hide.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_hide.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_html.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iobject.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iobject.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-array.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_is-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_is-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-create.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-create.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-define.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/library/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iter-step.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iter-step.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_iterators.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_iterators.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_library.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_library.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_meta.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_meta.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/library/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/library/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/library/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-dps.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopd.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopd.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/library/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn-ext.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gopn.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gopn.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gops.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gpo.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/library/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/library/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/library/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_redefine.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_redefine.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_shared.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_shared.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-at.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-at.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-length.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-length.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/library/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-object.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-object.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_uid.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_uid.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-define.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-define.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");
var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");


/***/ }),

/***/ "./node_modules/core-js/library/modules/_wks.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/modules/_wks.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.array.iterator.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/library/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/library/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.to-string.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/library/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.symbol.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.symbol.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/library/modules/_has.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/library/modules/_redefine.js");
var META = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/library/modules/_meta.js").KEY;
var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/library/modules/_shared.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/library/modules/_set-to-string-tag.js");
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/library/modules/_uid.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js");
var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/library/modules/_wks-ext.js");
var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js");
var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/library/modules/_enum-keys.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/library/modules/_is-array.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/library/modules/_is-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/library/modules/_to-primitive.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/library/modules/_property-desc.js");
var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/library/modules/_object-create.js");
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/library/modules/_object-gopn-ext.js");
var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js");
var $GOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/library/modules/_object-dp.js");
var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/library/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.async-iterator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js")('asyncIterator');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.symbol.observable.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/library/modules/_wks-define.js")('observable');


/***/ }),

/***/ "./node_modules/core-js/library/modules/web.dom.iterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/library/modules/es6.array.iterator.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/library/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "./wp-content/plugins/thns-sale-accessories/private/javascripts/app.js":
/*!*****************************************************************************!*\
  !*** ./wp-content/plugins/thns-sale-accessories/private/javascripts/app.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Se_Campaign = __webpack_require__(/*! ./se-campaign */ "./wp-content/plugins/thns-sale-accessories/private/javascripts/se-campaign.js");

jQuery(window).load(function () {
    Se_Campaign.init();
});

/***/ }),

/***/ "./wp-content/plugins/thns-sale-accessories/private/javascripts/se-campaign.js":
/*!*************************************************************************************!*\
  !*** ./wp-content/plugins/thns-sale-accessories/private/javascripts/se-campaign.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = jQuery;
var Se_Group_Controller = __webpack_require__(/*! ./se-group-controller */ "./wp-content/plugins/thns-sale-accessories/private/javascripts/se-group-controller.js");
var Se_Campaign = {
    se_group: null,
    xhrRequest: null,
    init: function init() {
        $('#campaign-start-date').datepicker();
        $('#campaign-end-date').datepicker();

        $('body').on('click', '#save-campaign', Se_Campaign.saveCampaign);

        Se_Campaign.se_group = Se_Group_Controller;
        Se_Campaign.se_group.init();
        if (typeof campaign_id !== 'undefined' && campaign_id !== '') {
            Se_Campaign.se_group.campaign_id = campaign_id;
        }
    },

    isValidDate: function isValidDate(date) {
        // var matches = /^(\d{4})[-\/](\d{1,2})[-\/](\d{1,2})$/.exec(date);
        // if (matches == null) return false;
        // var d = matches[3];
        // var m = matches[2];
        // var y = matches[1];
        // var composedDate = new Date(y, m, d);
        // return composedDate.getDate() == d &&
        //         composedDate.getMonth() == m &&
        //         composedDate.getFullYear() == y;
        // First check for the pattern
        var regex_date = /^\d{4}\-\d{1,2}\-\d{1,2}$/;

        if (!regex_date.test(date)) {
            return false;
        }

        // Parse the date parts to integers
        var parts = date.split("-");
        var day = parseInt(parts[2], 10);
        var month = parseInt(parts[1], 10);
        var year = parseInt(parts[0], 10);

        // Check the ranges of month and year
        if (year < 1000 || year > 3000 || month == 0 || month > 12) {
            return false;
        }

        var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        // Adjust for leap years
        if (year % 400 == 0 || year % 100 != 0 && year % 4 == 0) {
            monthLength[1] = 29;
        }

        // Check the range of the day
        return day > 0 && day <= monthLength[month - 1];
    },

    saveCampaign: function saveCampaign(e) {
        e.preventDefault();
        if (Se_Campaign.xhrRequest != null) return;

        var campaign_name = $('#campaign-name').val().trim();
        var campaign_start_date = $('#campaign-start-date').val().trim();
        var campaign_end_date = $('#campaign-end-date').val().trim();

        if (!campaign_name || campaign_name == '') {
            window.alert('Vui lòng nhập tên chiến dịch');
            return;
        }

        if (!campaign_start_date || campaign_start_date == '') {
            window.alert('Vui lòng nhập thời gian bắt đầu chiến dịch');
            return;
        }

        if (!Se_Campaign.isValidDate(campaign_start_date)) {
            window.alert('Vui lòng nhập thời gian bắt đâu hợp lệ');
            return;
        }

        if (!campaign_end_date || campaign_end_date == '') {
            window.alert('Vui lòng nhập thời gian kết thúc chiến dịch');
            return;
        }

        if (!Se_Campaign.isValidDate(campaign_end_date)) {
            window.alert('Vui lòng nhập thời gian kết thúc hợp lệ');
            return;
        }

        if (Date.parse(campaign_start_date) > Date.parse(campaign_end_date)) {
            window.alert('Thời gian kết thúc phải lớn hơn hoặc bằng thời gian bắt đầu');
            return;
        }

        var campaign_enable = 0;
        if ($('#campaign_enable').is(":checked")) campaign_enable = 1;

        // call ajax to save new campaign
        Se_Campaign.xhrRequest = jQuery.ajax({
            type: 'post',
            url: se_admin_ajax,
            data: {
                action: 'se_insert_campaign',
                campaign_name: campaign_name,
                campaign_start_date: campaign_start_date,
                campaign_end_date: campaign_end_date,
                current_product_id: current_product_id,
                campaign_enable: campaign_enable
            },
            beforeSend: function beforeSend() {
                jQuery('body').addClass('gearvn_loading');
            },
            success: function success(response) {
                if (response.success) {
                    Se_Campaign.se_group.campaign_id = response.data.campaign_id;
                } else {
                    Se_Campaign.se_group.campaign_id = null;
                }
            },
            error: function error(response, errorStatus, errorMsg) {
                //console.log( response )
            },
            complete: function complete(data) {
                jQuery('body').removeClass('gearvn_loading');
                Se_Campaign.xhrRequest.abort();
                Se_Campaign.xhrRequest = null;
            }
        });
    }

};

module.exports = Se_Campaign;

/***/ }),

/***/ "./wp-content/plugins/thns-sale-accessories/private/javascripts/se-group-controller.js":
/*!*********************************************************************************************!*\
  !*** ./wp-content/plugins/thns-sale-accessories/private/javascripts/se-group-controller.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * [
 *      {
 *          "se_name" : name,
 *          "se_type" : type,
 *          "se_down" : value,
 *          "products" : [id1, id2, id3]
 *      }
 * ]
 */

var _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ "./node_modules/babel-runtime/core-js/json/stringify.js");

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var $ = jQuery;
var Se_Group_Products = __webpack_require__(/*! ./se-group-products */ "./wp-content/plugins/thns-sale-accessories/private/javascripts/se-group-products.js");
var Se_Group_Controller = {
    campaign_id: null,
    xhrRequest: null,
    group_values: [],
    itemSelected: null,
    init: function init() {
        Se_Group_Controller.initGroupValue();

        $('#save-se-group').on('click', Se_Group_Controller.saveSEGroup);

        $('body').on('click', '.update-se-group', Se_Group_Controller.updateSEGroup);

        // delete group item
        $('body').on('click', '#se-group-items .delete', Se_Group_Controller.deleteSEGroup);

        // swap group item
        $('body').on('click', '#se-group-items .move_up', Se_Group_Controller.moveUpSEGroup);
        $('body').on('click', '#se-group-items .move_down', Se_Group_Controller.moveDownSEGroup);

        // add products
        $('body').on('click', '#se-group-items .se-group-name', Se_Group_Controller.addProductToSEGroup);

        $('body').on('change', 'select[name ="se-group-type"]', Se_Group_Controller.groupTypeChange);

        Se_Group_Products.init(Se_Group_Controller);
    },

    initGroupValue: function initGroupValue() {
        try {

            // let jsonString = decodeURIComponent(escape(window.atob($('#se_group_values').val().trim())));

            // let jsonData = JSON.parse( jsonString );

            Se_Group_Controller.group_values = group_items;

            Se_Group_Controller.renderListSEGroup();
        } catch (e) {}
    },

    renderListSEGroup: function renderListSEGroup() {
        var html = '';
        var clicked = -1;
        for (var index = 0; index < Se_Group_Controller.group_values.length; index++) {
            var item = Se_Group_Controller.group_values[index];
            if (Se_Group_Controller.itemSelected && Se_Group_Controller.itemSelected['se_name'] == item.se_name) clicked = index;
            //<span class="move move_up"></span>
            // <span class="move move_down"></span>
            html += '<div class="se-group-item" data-index="' + index + '">\n                        <span class="delete"></span>\n                        <p class="se-group-name">' + item.name + '</p>\n                        \n                        <div class="form-edit-group" style="display:none">\n                            <div class="form-group">\n                                <label>Lo\u1EA1i gi\u1EA3m gi\xE1:</label>\n                                <select name="se-group-type" value="' + item.discount_type + '">\n                                    <option value="price" ' + (item.discount_type == 'price' ? 'selected' : '') + ' >Gi\u1EA3m ti\u1EC1n</option>\n                                    <option value="percent" ' + (item.discount_type == 'percent' ? 'selected' : '') + '>Gi\u1EA3m theo %</option>\n                                    <option value="gift" ' + (item.discount_type == 'gift' ? 'selected' : '') + '>Qu\xE0 t\u1EB7ng</option>\n                                </select>\n                            </div>\n                            <div class="form-group" ' + (item.discount_type == 'gift' ? 'style="display:none"' : '') + ' >\n                                <label>Gi\u1EA3m:</label>\n                                <input type="number" name="se-down-value" value="' + item.discount_value + '">\n                            </div>\n                            <div class="form-group" >\n                                <label>Th\u1EE9 t\u1EF1 hi\u1EC3n th\u1ECB:</label>\n                                <input type="number" name="se-display-index" value="' + item.display_index + '">\n                            </div>\n                            <div class="form-group">\n                                <button class="update-se-group" data-index="' + index + '" data-key="' + item.ID + '" class="button" type="button">C\u1EADp nh\u1EADt</button>\n                            </div>\n                        </div>\n                    </div>';
        }
        $('#se-group-items').html(html);
        // update value to input

        $('#se_group_values').val(btoa(unescape(encodeURIComponent((0, _stringify2.default)(Se_Group_Controller.group_values)))));

        if (clicked != -1) {
            $($($('#se-group-items .se-group-item')[clicked]).find('.se-group-name')[0]).trigger('click');
        } else {
            Se_Group_Products.renderListProductSelected(null);
        }
    },

    updateSelectedData: function updateSelectedData() {

        for (var index in Se_Group_Controller.group_values) {
            if (Se_Group_Controller.group_values[index].se_name == Se_Group_Controller.itemSelected.se_name) {
                Se_Group_Controller.group_values[index] = Se_Group_Controller.itemSelected;
                break;
            }
        }

        $('#se_group_values').val(btoa(unescape(encodeURIComponent((0, _stringify2.default)(Se_Group_Controller.group_values)))));
    },

    saveSEGroup: function saveSEGroup(e) {
        e.preventDefault();
        if (Se_Group_Controller.campaign_id == null) {
            window.alert('Vui lòng tạo 1 chiến dịch!');
            return;
        }

        if (Se_Group_Controller.group_values.length == 3) {
            window.alert('Chúng tôi chỉ hỗ trợ tối đa 3 nhóm phụ kiện!');
            return;
        }

        var name = $('#se-group-name').val().trim();
        var type = $('#se-group-type').val().trim();
        var down = $('#se-down-value').val().trim();
        var index = $('#se-display-index').val().trim();

        if (name == '') {
            window.alert('Vui lòng nhập tên nhóm!');
            $('#se-group-name').focus();
            return;
        }
        if (type == '') {
            window.alert('Vui lòng chọn loại giảm giá!');
            return;
        }
        if (down == '') {
            window.alert('Vui lòng nhập giá giảm!');
            $('#se-down-value').focus();
            return;
        }
        if (index == '') {
            window.alert('Vui lòng nhập vị trí hiển thị!');
            $('#se-display-index').focus();
            return;
        }

        // check value down
        if (type == 'price') {
            if (down < 1000 || down % 1000 != 0) {
                window.alert('Giá giảm phải là một số chia hết cho 1000');
                $('#se-down-value').focus();
                return;
            }
        } else {
            if (down > 100 || down < 0) {
                window.alert('Phần trăm giảm phải lớn -1 và nhỏ hơn hoặc bằng 100');
                $('#se-down-value').focus();
                return;
            }
        }

        if (index <= 0) {
            window.alert('Vị trí hiển thị phải lớn hơn 0!');
            $('#se-display-index').focus();
            return;
        }

        // call ajax to insert new group
        if (Se_Group_Controller.xhrRequest != null) return;
        Se_Group_Controller.xhrRequest = jQuery.ajax({
            type: 'post',
            url: se_admin_ajax,
            data: {
                action: 'se_insert_campaign_group',
                campaign_id: Se_Group_Controller.campaign_id,
                name: name,
                discount_type: type,
                discount_value: down,
                display_index: index
            },
            beforeSend: function beforeSend() {
                jQuery('body').addClass('gearvn_loading');
            },
            success: function success(response) {
                if (response.success) {
                    var item = {
                        "ID": response.data.group_id,
                        "campaign_id": Se_Group_Controller.campaign_id,
                        "name": name,
                        "discount_type": type,
                        "discount_value": down,
                        "display_index": index
                    };
                    Se_Group_Controller.group_values.push(item);
                    Se_Group_Controller.renderListSEGroup();
                    $('#se-group-name').val('');
                    $('#se-down-value').val('0');
                    $('#se-display-index').val('0');
                } else {}
            },
            error: function error(response, errorStatus, errorMsg) {
                //console.log( response )
            },
            complete: function complete(data) {
                jQuery('body').removeClass('gearvn_loading');
                Se_Group_Controller.xhrRequest.abort();
                Se_Group_Controller.xhrRequest = null;
            }
        });

        // if ( Se_Group_Controller.checkExistsValue( name ) ) {
        //     window.alert('Nhóm này đã tồn tại!');
        //     $('#se-group-name').focus();
        // } else {
        //     let item = {
        //         "se_name" : name,
        //         "se_type" : type,
        //         "se_down" : down,
        //         "products" : []
        //     };

        //     Se_Group_Controller.group_values.push(item);
        //     Se_Group_Controller.renderListSEGroup();
        //     $('#se-group-name').val('').focus();
        //     $('#se-down-value').val('0');
        // }
    },

    checkExistsValue: function checkExistsValue(value) {
        for (var index = 0; index < Se_Group_Controller.group_values.length; index++) {
            var item = Se_Group_Controller.group_values[index];
            if (value.trim().toLowerCase() == item.se_name.trim().toLowerCase()) {
                return true;
            }
        }
        return false;
    },

    deleteSEGroup: function deleteSEGroup(e) {
        if (Se_Group_Controller.xhrRequest != null) return;

        var index = $($(this).parent()).attr('data-index');
        if (index == null || typeof index == 'undefined') return;
        if (typeof index == 'string') index = parseInt(index);

        var item = Se_Group_Controller.group_values[index];

        var r = confirm("Bạn muốn xóa " + item['name'] + ' ?');
        if (r == true) {
            // call ajax to update
            Se_Group_Controller.xhrRequest = jQuery.ajax({
                type: 'post',
                url: se_admin_ajax,
                data: {
                    action: 'se_remove_campaign_group',
                    group: item
                },
                beforeSend: function beforeSend() {
                    jQuery('body').addClass('gearvn_loading');
                },
                success: function success(response) {
                    if (response.success) {
                        window.alert('Đã xóa nhóm ' + item['name']);
                        Se_Group_Controller.group_values.splice(index, 1);
                        Se_Group_Controller.renderListSEGroup();
                    } else {}
                },
                error: function error(response, errorStatus, errorMsg) {
                    //console.log( response )
                },
                complete: function complete(data) {
                    jQuery('body').removeClass('gearvn_loading');
                    Se_Group_Controller.xhrRequest.abort();
                    Se_Group_Controller.xhrRequest = null;
                }
            });
        } else {}

        // Se_Group_Controller.group_values.splice(index, 1);
        // Se_Group_Controller.renderListSEGroup();
    },

    moveUpSEGroup: function moveUpSEGroup(e) {
        var index = $($(this).parent()).attr('data-index');
        if (index == null || typeof index == 'undefined') return;
        if (typeof index == 'string') index = parseInt(index);

        if (index == 0) return;

        var item = Se_Group_Controller.group_values[index];
        Se_Group_Controller.group_values[index] = Se_Group_Controller.group_values[index - 1];
        Se_Group_Controller.group_values[index - 1] = item;

        Se_Group_Controller.renderListSEGroup();
    },

    moveDownSEGroup: function moveDownSEGroup(e) {
        var index = $($(this).parent()).attr('data-index');
        if (index == null || typeof index == 'undefined') return;
        if (typeof index == 'string') index = parseInt(index);

        if (index == Se_Group_Controller.group_values.length - 1) return;

        var item = Se_Group_Controller.group_values[index];
        Se_Group_Controller.group_values[index] = Se_Group_Controller.group_values[index + 1];
        Se_Group_Controller.group_values[index + 1] = item;

        Se_Group_Controller.renderListSEGroup();
    },

    addProductToSEGroup: function addProductToSEGroup() {
        var index = $($(this).parent()).attr('data-index');
        if (index == null || typeof index == 'undefined') return;
        if (typeof index == 'string') index = parseInt(index);

        $('#se-group-items .se-group-item').removeClass('active');
        $('.form-edit-group').css({ 'display': 'none' });
        $($(this).parent()).addClass('active');
        $($(this).parent()).find('.form-edit-group').css({ 'display': 'block' });
        $('.right-container').css({
            'display': 'block'
        });
        Se_Group_Controller.itemSelected = Se_Group_Controller.group_values[index];
        $('#group-name-display').text(Se_Group_Controller.itemSelected.name);
        Se_Group_Products.resetData();
        Se_Group_Products.renderListProductSelectedIDs(Se_Group_Controller.itemSelected);
    },

    groupTypeChange: function groupTypeChange(e) {
        var val = $(this).val().trim();
        if ($(this).closest('#se-groups').length > 0) {
            if (val == 'gift') {
                $('#se-down-value').val('100');
                $($('#se-down-value').closest('.form-group')[0]).css({ 'display': 'none' });
            } else {
                $('#se-down-value').val('0');
                $($('#se-down-value').closest('.form-group')[0]).css({ 'display': 'flex' });
            }
        } else if ($(this).closest('.form-edit-group').length > 0) {
            var parent = $($(this).closest('.form-edit-group')[0]);
            var input = $(parent.find('input[name=se-down-value]')[0]);
            if (val == 'gift') {
                input.val('100');
                $(input.closest('.form-group')[0]).css({ 'display': 'none' });
            } else {
                input.val('0');
                $(input.closest('.form-group')[0]).css({ 'display': 'flex' });
            }
        }
    },

    updateSEGroup: function updateSEGroup() {

        if (Se_Group_Controller.xhrRequest != null) return;

        var index = $(this).attr('data-index');
        if (index == null || typeof index == 'undefined') return;
        if (typeof index == 'string') index = parseInt(index);
        var parent = $(this).closest('.form-edit-group');
        var select_type = $(parent.find('select[name ="se-group-type"]')[0]);
        var input_price = $(parent.find('input[name ="se-down-value"]')[0]);
        var input_index = $(parent.find('input[name ="se-display-index"]')[0]);
        var type = select_type.val().trim();
        var down = input_price.val().trim();
        var display_index = input_index.val().trim();

        if (type == '') {
            window.alert('Vui lòng chọn loại giảm giá!');
            return;
        }
        if (down == '') {
            window.alert('Vui lòng nhập giá giảm!');
            input_price.focus();
            return;
        }

        if (display_index == '') {
            window.alert('Vui lòng nhập vị trí hiển thị!');
            input_index.focus();
            return;
        }

        // check value down
        if (type == 'price') {
            if (down < 1000 || down % 1000 != 0) {
                window.alert('Giá giảm phải là một số chia hết cho 1000');
                input_price.focus();
                return;
            }
        } else {
            if (down > 100 || down < 0) {
                window.alert('Phần trăm giảm phải lớn -1 và nhỏ hơn hoặc bằng 100');
                input_price.focus();
                return;
            }
        }

        if (display_index <= 0) {
            window.alert('Vị trí hiển thị phải lớn hơn 0!');
            input_index.focus();
            return;
        }

        var group_data = Se_Group_Controller.itemSelected;
        group_data['discount_type'] = type;
        group_data['discount_value'] = down;
        group_data['display_index'] = display_index;
        // call ajax to update
        Se_Group_Controller.xhrRequest = jQuery.ajax({
            type: 'post',
            url: se_admin_ajax,
            data: {
                action: 'se_update_campaign_group',
                group: group_data
            },
            beforeSend: function beforeSend() {
                jQuery('body').addClass('gearvn_loading');
            },
            success: function success(response) {
                if (response.success) {
                    window.alert('Đã cập nhật thành công!');
                    Se_Group_Controller.group_values[index] = group_data;
                    Se_Group_Controller.renderListSEGroup();
                } else {}
            },
            error: function error(response, errorStatus, errorMsg) {
                //console.log( response )
            },
            complete: function complete(data) {
                jQuery('body').removeClass('gearvn_loading');
                Se_Group_Controller.xhrRequest.abort();
                Se_Group_Controller.xhrRequest = null;
            }
        });
    },

    updateRecordGroup: function updateRecordGroup() {}
};

module.exports = Se_Group_Controller;

/***/ }),

/***/ "./wp-content/plugins/thns-sale-accessories/private/javascripts/se-group-products.js":
/*!*******************************************************************************************!*\
  !*** ./wp-content/plugins/thns-sale-accessories/private/javascripts/se-group-products.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var $ = jQuery;
var Se_Group_Products = {
    group_controller: null,
    xhrRequestSearch: null,
    xhrRequestGetProducts: null,
    data_products: null,
    data_products_display: [],

    init: function init(parent) {
        Se_Group_Products.group_controller = parent;

        $('body').on('keyup', '#se-search-group-name', Se_Group_Products.searchProducts);
        $('body').on('click', '#close-search', function () {
            Se_Group_Products.data_products = null;
            $('.search_group #list-products').remove();
            $('#se-search-group-name').val('');
            $(this).remove();
        });

        $('body').on('click', '#list-products .item', Se_Group_Products.setProductGroup);

        $('body').on('click', '#list-product-selected .delete', Se_Group_Products.removeProduct);
        $('body').on('click', '#list-product-selected .move_up', Se_Group_Products.moveUpSEGroup);
        $('body').on('click', '#list-product-selected .move_down', Se_Group_Products.moveDownSEGroup);

        $('body').on('click', '#update-lst-product', Se_Group_Products.updateListProduct);
    },

    searchProducts: function searchProducts(e) {
        var keysearch = e.target.value.trim();

        if (keysearch == '' || keysearch.length < 3) return;

        if (Se_Group_Products.xhrRequestSearch != null) {
            Se_Group_Products.xhrRequestSearch.abort();
            Se_Group_Products.xhrRequestSearch = null;
        }

        Se_Group_Products.xhrRequestSearch = jQuery.ajax({
            type: 'get',
            url: se_admin_ajax,
            data: {
                action: 'se_search_product',
                fn: 'get_ajax_search',
                term: keysearch
            },
            beforeSend: function beforeSend() {
                $('.search_group span.spinner').addClass('is-active');
            },
            success: function success(response) {
                if (response.success) {
                    var products = response.data.products;
                    Se_Group_Products.data_products = products;

                    Se_Group_Products.showListProduct(Se_Group_Products.data_products);
                } else {
                    Se_Group_Products.showListProduct(null);
                }
            },
            error: function error(response, errorStatus, errorMsg) {
                //console.log( response )
            },
            complete: function complete(data) {
                Se_Group_Products.xhrRequestSearch.abort();
                Se_Group_Products.xhrRequestSearch = null;
                $('.search_group span.spinner').removeClass('is-active');
            }
        });
    },

    showListProduct: function showListProduct() {
        var products = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        if (products && products.length > 0) {
            var html = '<button type="button" id="close-search">X</button>';
            html += '<div id="list-products">';
            for (var i = 0; i < products.length; i++) {
                var item = products[i];
                html += '<div class="item" data-pr-id="' + i + '">\n                            <img src="' + item.image + '" />\n                            <div class="pr-detail">\n                                <p>' + item.name + '</p>\n                                <p>Gi\xE1: ' + item.price + '</p>\n                            </div>\n                        </div>';
            }

            html += '</div>';
            $('.search_group #list-products').remove();
            $('.search_group').append(html);
        } else {
            $('.search_group #list-products').remove();
        }
    },

    setProductGroup: function setProductGroup(e) {

        if (Se_Group_Products.data_products_display.length >= 8) {
            alert('Mỗi nhóm chúng tôi chỉ hỗ trợ tối đa 8 sản phẩm!');
            return;
        }

        var index = $(this).attr('data-pr-id');
        if (Se_Group_Products.data_products == null || Se_Group_Products.length < index) return;

        var item = Se_Group_Products.data_products[index];

        if (!Se_Group_Products.checkProductIdSelected(item.ID)) {

            if (Se_Group_Products.group_controller.itemSelected) {

                if (!(typeof item === 'undefined' ? 'undefined' : (0, _typeof3.default)(item)) === 'undefined' || !Se_Group_Products.group_controller.itemSelected.products || Se_Group_Products.group_controller.itemSelected.products.indexOf(item.ID) < 0) {

                    // Se_Group_Products.group_controller.itemSelected.products.push(item.ID);

                    // Se_Group_Products.group_controller.updateSelectedData();

                    Se_Group_Products.data_products_display.push(item);

                    Se_Group_Products.renderListProductSelected(Se_Group_Products.data_products_display);
                }
            }
        }

        $(this).remove();
    },

    renderListProductSelected: function renderListProductSelected() {
        var products = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        if (products !== null && products.length > 0) {
            var html = '';

            for (var i = 0; i < products.length; i++) {
                var item = products[i];
                html += '<div class="item" data-pr-id="' + i + '">\n                            <span class="delete"></span>\n                            <div class="content">\n                                <img src="' + item.image + '" />\n                                <div class="pr-detail">\n                                    <p>' + item.name + '</p>\n                                    <p>Gi\xE1: ' + item.price + '</p>\n                                </div>\n                            </div>\n                            <span class="move move_up"></span>\n                            <span class="move move_down"></span>\n                        </div>';
            }
            $('#list-product-selected').html('');
            $('#list-product-selected').html(html);
        } else {
            $('#list-product-selected').html('');
        }
    },

    renderListProductSelectedIDs: function renderListProductSelectedIDs(itemSelected) {
        if (Se_Group_Products.xhrRequestGetProducts != null) return;
        var ids = itemSelected.products;
        if (ids == null || ids.length <= 0) {
            Se_Group_Products.renderListProductSelected(null);
            return;
        };

        Se_Group_Products.xhrRequestGetProducts = jQuery.ajax({
            type: 'POST',
            url: se_admin_ajax,
            data: {
                action: 'se_get_product_data',
                fn: 'post_ajax_search',
                ids: ids
            },
            beforeSend: function beforeSend() {
                jQuery('body').addClass('gearvn_loading');
            },
            success: function success(response) {
                if (response.success) {
                    var products = response.data.products;
                    Se_Group_Products.data_products = products;
                    Se_Group_Products.data_products_display = products;
                    Se_Group_Products.renderListProductSelected(Se_Group_Products.data_products_display);
                } else {
                    Se_Group_Products.renderListProductSelected(null);
                }
            },
            error: function error(response, errorStatus, errorMsg) {
                //console.log( response )
            },
            complete: function complete(data) {
                Se_Group_Products.xhrRequestGetProducts.abort();
                Se_Group_Products.xhrRequestGetProducts = null;
                jQuery('body').removeClass('gearvn_loading');
            }
        });
    },

    removeProduct: function removeProduct(e) {
        var index = $($(this).parent()).attr('data-pr-id');
        if (typeof index == 'undefined' || index == null) return;

        Se_Group_Products.data_products_display.splice(index, 1);

        if (Se_Group_Products.group_controller.itemSelected) {
            // Se_Group_Products.group_controller.itemSelected.products.splice(index,1);

            // Se_Group_Products.group_controller.updateSelectedData();
            Se_Group_Products.renderListProductSelected(Se_Group_Products.data_products_display);
        }
    },

    resetData: function resetData() {
        Se_Group_Products.xhrRequestSearch = null;
        Se_Group_Products.xhrRequestGetProducts = null;
        Se_Group_Products.data_products = null;
        Se_Group_Products.data_products_display = [];
        Se_Group_Products.renderListProductSelected(null);
    },

    checkProductIdSelected: function checkProductIdSelected(id) {
        for (var index in Se_Group_Products.group_controller.group_values) {
            if (Se_Group_Products.group_controller.group_values[index].products == null || Se_Group_Products.group_controller.group_values[index].products.length == 0) return false;
            if (Se_Group_Products.group_controller.group_values[index].products.indexOf(id) > -1) return true;
        }
        return false;
    },

    moveUpSEGroup: function moveUpSEGroup(e) {
        var index = parseInt($($(this).parent()).attr('data-pr-id'));
        if (index == null) index = 0;
        if (typeof index == 'undefined' || index == null) return;
        if (index == 0) return;

        var item = Se_Group_Products.data_products_display[index];
        Se_Group_Products.data_products_display[index] = Se_Group_Products.data_products_display[index - 1];
        Se_Group_Products.data_products_display[index - 1] = item;

        var arrPrs = [];
        for (var i in Se_Group_Products.data_products_display) {
            arrPrs.push(Se_Group_Products.data_products_display[i].ID);
        }
        // Se_Group_Products.group_controller.itemSelected.products = arrPrs;
        // Se_Group_Products.group_controller.updateSelectedData();
        Se_Group_Products.renderListProductSelected(Se_Group_Products.data_products_display);
    },

    moveDownSEGroup: function moveDownSEGroup(e) {
        var index = parseInt($($(this).parent()).attr('data-pr-id'));
        if (index == null) index = 0;

        if (typeof index == 'undefined' || index == null) return;
        if (index == Se_Group_Products.data_products_display.length - 1) return;

        var item = Se_Group_Products.data_products_display[index];
        Se_Group_Products.data_products_display[index] = Se_Group_Products.data_products_display[index + 1];
        Se_Group_Products.data_products_display[index + 1] = item;

        var arrPrs = [];
        for (var i in Se_Group_Products.data_products_display) {
            arrPrs.push(Se_Group_Products.data_products_display[i].ID);
        }
        // Se_Group_Products.group_controller.itemSelected.products = arrPrs;
        // Se_Group_Products.group_controller.updateSelectedData();
        Se_Group_Products.renderListProductSelected(Se_Group_Products.data_products_display);
    },

    updateListProduct: function updateListProduct(e) {
        if (Se_Group_Products.xhrRequestGetProducts != null) return;

        var arrPrs = [];
        for (var i in Se_Group_Products.data_products_display) {
            arrPrs.push(Se_Group_Products.data_products_display[i].ID);
        }
        if (arrPrs.length <= 0) return;

        Se_Group_Products.xhrRequestGetProducts = jQuery.ajax({
            type: 'POST',
            url: se_admin_ajax,
            data: {
                action: 'se_update_product_data',
                group_id: Se_Group_Products.group_controller.itemSelected.ID,
                ids: arrPrs
            },
            beforeSend: function beforeSend() {
                jQuery('body').addClass('gearvn_loading');
            },
            success: function success(response) {
                if (response.success) {
                    Se_Group_Products.group_controller.itemSelected.products = arrPrs;
                } else {
                    Se_Group_Products.renderListProductSelected(null);
                }
            },
            error: function error(response, errorStatus, errorMsg) {
                //console.log( response )
            },
            complete: function complete(data) {
                Se_Group_Products.xhrRequestGetProducts.abort();
                Se_Group_Products.xhrRequestGetProducts = null;
                jQuery('body').removeClass('gearvn_loading');
            }
        });
    }
};

module.exports = Se_Group_Products;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2pzb24vc3RyaW5naWZ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3drcy1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvcGx1Z2lucy90aG5zLXNhbGUtYWNjZXNzb3JpZXMvcHJpdmF0ZS9qYXZhc2NyaXB0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vd3AtY29udGVudC9wbHVnaW5zL3RobnMtc2FsZS1hY2Nlc3Nvcmllcy9wcml2YXRlL2phdmFzY3JpcHRzL3NlLWNhbXBhaWduLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvcGx1Z2lucy90aG5zLXNhbGUtYWNjZXNzb3JpZXMvcHJpdmF0ZS9qYXZhc2NyaXB0cy9zZS1ncm91cC1jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3dwLWNvbnRlbnQvcGx1Z2lucy90aG5zLXNhbGUtYWNjZXNzb3JpZXMvcHJpdmF0ZS9qYXZhc2NyaXB0cy9zZS1ncm91cC1wcm9kdWN0cy5qcyJdLCJuYW1lcyI6WyJTZV9DYW1wYWlnbiIsInJlcXVpcmUiLCJqUXVlcnkiLCIkIiwiU2VfR3JvdXBfQ29udHJvbGxlciIsInNlX2dyb3VwIiwieGhyUmVxdWVzdCIsImluaXQiLCJjYW1wYWlnbl9pZCIsImlzVmFsaWREYXRlIiwicmVnZXhfZGF0ZSIsInBhcnRzIiwiZGF0ZSIsImRheSIsInBhcnNlSW50IiwibW9udGgiLCJ5ZWFyIiwibW9udGhMZW5ndGgiLCJzYXZlQ2FtcGFpZ24iLCJlIiwiY2FtcGFpZ25fbmFtZSIsImNhbXBhaWduX3N0YXJ0X2RhdGUiLCJjYW1wYWlnbl9lbmRfZGF0ZSIsIndpbmRvdyIsIkRhdGUiLCJjYW1wYWlnbl9lbmFibGUiLCJ0eXBlIiwidXJsIiwiZGF0YSIsImFjdGlvbiIsImN1cnJlbnRfcHJvZHVjdF9pZCIsImJlZm9yZVNlbmQiLCJzdWNjZXNzIiwicmVzcG9uc2UiLCJlcnJvciIsImNvbXBsZXRlIiwibW9kdWxlIiwiU2VfR3JvdXBfUHJvZHVjdHMiLCJncm91cF92YWx1ZXMiLCJpdGVtU2VsZWN0ZWQiLCJpbml0R3JvdXBWYWx1ZSIsInJlbmRlckxpc3RTRUdyb3VwIiwiaHRtbCIsImNsaWNrZWQiLCJpbmRleCIsIml0ZW0iLCJidG9hIiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJ1cGRhdGVTZWxlY3RlZERhdGEiLCJzYXZlU0VHcm91cCIsIm5hbWUiLCJkb3duIiwiZGlzY291bnRfdHlwZSIsImRpc2NvdW50X3ZhbHVlIiwiZGlzcGxheV9pbmRleCIsImNoZWNrRXhpc3RzVmFsdWUiLCJ2YWx1ZSIsImRlbGV0ZVNFR3JvdXAiLCJyIiwiY29uZmlybSIsImdyb3VwIiwibW92ZVVwU0VHcm91cCIsIm1vdmVEb3duU0VHcm91cCIsImFkZFByb2R1Y3RUb1NFR3JvdXAiLCJncm91cFR5cGVDaGFuZ2UiLCJ2YWwiLCJwYXJlbnQiLCJpbnB1dCIsInVwZGF0ZVNFR3JvdXAiLCJzZWxlY3RfdHlwZSIsImlucHV0X3ByaWNlIiwiaW5wdXRfaW5kZXgiLCJncm91cF9kYXRhIiwidXBkYXRlUmVjb3JkR3JvdXAiLCJncm91cF9jb250cm9sbGVyIiwieGhyUmVxdWVzdFNlYXJjaCIsInhoclJlcXVlc3RHZXRQcm9kdWN0cyIsImRhdGFfcHJvZHVjdHMiLCJkYXRhX3Byb2R1Y3RzX2Rpc3BsYXkiLCJzZWFyY2hQcm9kdWN0cyIsImtleXNlYXJjaCIsImZuIiwidGVybSIsInByb2R1Y3RzIiwic2hvd0xpc3RQcm9kdWN0IiwiaSIsInNldFByb2R1Y3RHcm91cCIsImFsZXJ0IiwicmVuZGVyTGlzdFByb2R1Y3RTZWxlY3RlZCIsInJlbmRlckxpc3RQcm9kdWN0U2VsZWN0ZWRJRHMiLCJpZHMiLCJyZW1vdmVQcm9kdWN0IiwicmVzZXREYXRhIiwiY2hlY2tQcm9kdWN0SWRTZWxlY3RlZCIsImFyclBycyIsInVwZGF0ZUxpc3RQcm9kdWN0IiwiZ3JvdXBfaWQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FB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QTtBQUNBMUQsb0RBQThDQSxrQkFBOUNBO0FBclFrQjs7QUF3UXRCMkQsdUJBQW1CLDhCQUFZO0FBQzNCLFlBQUszRCwyQ0FBTCxNQUF1RDs7QUFFdkQsWUFBSTBELFNBQUo7QUFDQSxhQUFLLElBQUwsS0FBYzFELGtCQUFkLHVCQUF3RDtBQUNwRDBELHdCQUFhMUQsMkNBQWIwRDtBQUNIO0FBQ0QsWUFBS0EsaUJBQUwsR0FBMEI7O0FBRzFCMUQsa0RBQTBDLFlBQVk7QUFDbERYLGtCQURrRDtBQUVsREMsaUJBRmtEO0FBR2xEQyxrQkFBTTtBQUNGQyx3QkFERTtBQUVGb0UsMEJBQVU1RCxnREFGUjtBQUdGc0QscUJBQU1JO0FBSEosYUFINEM7QUFRbERoRSx3QkFBWSxzQkFBWTtBQUNwQjdCO0FBVDhDO0FBV2xEOEIscUJBQVMsMkJBQW9CO0FBQ3pCLG9CQUFJQyxTQUFKLFNBQXNCO0FBQ2xCSTtBQURKLHVCQUVPO0FBQ0hBO0FBQ0g7QUFoQjZDO0FBa0JsREgsbUJBQU8sZ0RBQTJDO0FBQy9DO0FBbkIrQztBQXFCbERDLHNCQUFXLHdCQUFnQjtBQUN2QkU7QUFDQUE7QUFDQW5DO0FBQ0g7QUF6QmlELFNBQVosQ0FBMUNtQztBQTJCSDtBQTdTcUIsQ0FBMUI7O0FBZ1RBRCxtQyIsImZpbGUiOiJ3cC1jb250ZW50L3BsdWdpbnMvdGhucy1zYWxlLWFjY2Vzc29yaWVzL2Fzc2V0cy9qcy9zYWxlLWFjY2Vzc29yaWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi93cC1jb250ZW50L3BsdWdpbnMvdGhucy1zYWxlLWFjY2Vzc29yaWVzL3ByaXZhdGUvamF2YXNjcmlwdHMvYXBwLmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2pzb24vc3RyaW5naWZ5XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbFwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pdGVyYXRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvclwiKTtcblxudmFyIF9pdGVyYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pdGVyYXRvcik7XG5cbnZhciBfc3ltYm9sID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sXCIpO1xuXG52YXIgX3N5bWJvbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zeW1ib2wpO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIF9pdGVyYXRvcjIuZGVmYXVsdCA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YoX2l0ZXJhdG9yMi5kZWZhdWx0KSA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufTsiLCJ2YXIgY29yZSA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKTtcbnZhciAkSlNPTiA9IGNvcmUuSlNPTiB8fCAoY29yZS5KU09OID0geyBzdHJpbmdpZnk6IEpTT04uc3RyaW5naWZ5IH0pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICByZXR1cm4gJEpTT04uc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmd1bWVudHMpO1xufTtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN5bWJvbCcpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuU3ltYm9sO1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fd2tzLWV4dCcpLmYoJ2l0ZXJhdG9yJyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi9fdG8tYWJzb2x1dGUtaW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSU9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSB7XG4gICAgICBpZiAoT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHsgdmVyc2lvbjogJzIuNi4xMicgfTtcbmlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuIiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgcmVzdWx0ID0gZ2V0S2V5cyhpdCk7XG4gIHZhciBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZiAoZ2V0U3ltYm9scykge1xuICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdCk7XG4gICAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIga2V5O1xuICAgIHdoaWxlIChzeW1ib2xzLmxlbmd0aCA+IGkpIGlmIChpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciBJU19XUkFQID0gdHlwZSAmICRleHBvcnQuVztcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGtleSwgb3duLCBvdXQ7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYgKG93biAmJiBoYXMoZXhwb3J0cywga2V5KSkgY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbiAoQykge1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIEMpIHtcbiAgICAgICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDKCk7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmIChJU19QUk9UTykge1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmICh0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKSBoaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYgKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpIF9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsInZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xubW9kdWxlLmV4cG9ydHMgPSBkb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcbiIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGRlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpIHtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7IG5leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCkgfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciAkaXRlckNyZWF0ZSA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQlVHR1kgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSk7IC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbnZhciBGRl9JVEVSQVRPUiA9ICdAQGl0ZXJhdG9yJztcbnZhciBLRVlTID0gJ2tleXMnO1xudmFyIFZBTFVFUyA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCkge1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbiAoa2luZCkge1xuICAgIGlmICghQlVHR1kgJiYga2luZCBpbiBwcm90bykgcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgPSBOQU1FICsgJyBJdGVyYXRvcic7XG4gIHZhciBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVM7XG4gIHZhciBWQUxVRVNfQlVHID0gZmFsc2U7XG4gIHZhciBwcm90byA9IEJhc2UucHJvdG90eXBlO1xuICB2YXIgJG5hdGl2ZSA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXTtcbiAgdmFyICRkZWZhdWx0ID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVCk7XG4gIHZhciAkZW50cmllcyA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWQ7XG4gIHZhciAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZTtcbiAgdmFyIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYgKCRhbnlOYXRpdmUpIHtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSgpKSk7XG4gICAgaWYgKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlICYmIEl0ZXJhdG9yUHJvdG90eXBlLm5leHQpIHtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZiAoIUxJQlJBUlkgJiYgdHlwZW9mIEl0ZXJhdG9yUHJvdG90eXBlW0lURVJBVE9SXSAhPSAnZnVuY3Rpb24nKSBoaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYgKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUykge1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZiAoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpIHtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddID0gcmV0dXJuVGhpcztcbiAgaWYgKERFRkFVTFQpIHtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6IElTX1NFVCA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmIChGT1JDRUQpIGZvciAoa2V5IGluIG1ldGhvZHMpIHtcbiAgICAgIGlmICghKGtleSBpbiBwcm90bykpIHJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkb25lLCB2YWx1ZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZSB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge307XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7XG4iLCJ2YXIgTUVUQSA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBzZXREZXNjID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBpZCA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBpc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbnZhciBzZXRNZXRhID0gZnVuY3Rpb24gKGl0KSB7XG4gIHNldERlc2MoaXQsIE1FVEEsIHsgdmFsdWU6IHtcbiAgICBpOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3OiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IH0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZiAoIWNyZWF0ZSkgcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSkgc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6IE1FVEEsXG4gIE5FRUQ6IGZhbHNlLFxuICBmYXN0S2V5OiBmYXN0S2V5LFxuICBnZXRXZWFrOiBnZXRXZWFrLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07XG4iLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGRQcyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBFbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpO1xuICB2YXIgaSA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgdmFyIGx0ID0gJzwnO1xuICB2YXIgZ3QgPSAnPic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZSAoaS0tKSBkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHkoKTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBkUCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBQO1xuICB3aGlsZSAobGVuZ3RoID4gaSkgZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciBnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGdPUEQgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZ09QRChPLCBQKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXMoTywgUCkpIHJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG4iLCIvLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGdPUE4gPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmY7XG52YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uIChpdCkge1xuICB0cnkge1xuICAgIHJldHVybiBnT1BOKGl0KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScgPyBnZXRXaW5kb3dOYW1lcyhpdCkgOiBnT1BOKHRvSU9iamVjdChpdCkpO1xufTtcbiIsIi8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKS5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG4iLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuIiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKE8pIHtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZiAoaGFzKE8sIElFX1BST1RPKSkgcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZiAodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG4iLCJ2YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSBpZiAoa2V5ICE9IElFX1BST1RPKSBoYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG4iLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbiIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgdGFnLCBzdGF0KSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKSBkZWYoaXQsIFRBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWcgfSk7XG59O1xuIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG4iLCJ2YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB7fSk7XG59KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gIHZlcnNpb246IGNvcmUudmVyc2lvbixcbiAgbW9kZTogcmVxdWlyZSgnLi9fbGlicmFyeScpID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMjAgRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknXG59KTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUT19TVFJJTkcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGF0LCBwb3MpIHtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbiAgICB2YXIgaSA9IHRvSW50ZWdlcihwb3MpO1xuICAgIHZhciBsID0gcy5sZW5ndGg7XG4gICAgdmFyIGEsIGI7XG4gICAgaWYgKGkgPCAwIHx8IGkgPj0gbCkgcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcbiIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcbiAgaWYgKG5hbWUuY2hhckF0KDApICE9ICdfJyAmJiAhKG5hbWUgaW4gJFN5bWJvbCkpIGRlZmluZVByb3BlcnR5KCRTeW1ib2wsIG5hbWUsIHsgdmFsdWU6IHdrc0V4dC5mKG5hbWUpIH0pO1xufTtcbiIsImV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX3drcycpO1xuIiwidmFyIHN0b3JlID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbDtcbnZhciBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKTtcbnZhciBzdGVwID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIga2luZCA9IHRoaXMuX2s7XG4gIHZhciBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYgKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKSB7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbiAoaXRlcmF0ZWQpIHtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBpbmRleCA9IHRoaXMuX2k7XG4gIHZhciBwb2ludDtcbiAgaWYgKGluZGV4ID49IE8ubGVuZ3RoKSByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7IHZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2UgfTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gRUNNQVNjcmlwdCA2IHN5bWJvbHMgc2hpbVxudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIE1FVEEgPSByZXF1aXJlKCcuL19tZXRhJykuS0VZO1xudmFyICRmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIHdrcyA9IHJlcXVpcmUoJy4vX3drcycpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciB3a3NEZWZpbmUgPSByZXF1aXJlKCcuL193a3MtZGVmaW5lJyk7XG52YXIgZW51bUtleXMgPSByZXF1aXJlKCcuL19lbnVtLWtleXMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIF9jcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZ09QTkV4dCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuLWV4dCcpO1xudmFyICRHT1BEID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKTtcbnZhciAkR09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgJERQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUEQgPSAkR09QRC5mO1xudmFyIGRQID0gJERQLmY7XG52YXIgZ09QTiA9IGdPUE5FeHQuZjtcbnZhciAkU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciAkSlNPTiA9IGdsb2JhbC5KU09OO1xudmFyIF9zdHJpbmdpZnkgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgSElEREVOID0gd2tzKCdfaGlkZGVuJyk7XG52YXIgVE9fUFJJTUlUSVZFID0gd2tzKCd0b1ByaW1pdGl2ZScpO1xudmFyIGlzRW51bSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xudmFyIFN5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtcmVnaXN0cnknKTtcbnZhciBBbGxTeW1ib2xzID0gc2hhcmVkKCdzeW1ib2xzJyk7XG52YXIgT1BTeW1ib2xzID0gc2hhcmVkKCdvcC1zeW1ib2xzJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3RbUFJPVE9UWVBFXTtcbnZhciBVU0VfTkFUSVZFID0gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJyAmJiAhISRHT1BTLmY7XG52YXIgUU9iamVjdCA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRQKHRoaXMsICdhJywgeyB2YWx1ZTogNyB9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uIChpdCwga2V5LCBEKSB7XG4gIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZiAocHJvdG9EZXNjKSBkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgZFAoaXQsIGtleSwgRCk7XG4gIGlmIChwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKSBkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uICh0YWcpIHtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc3ltLl9rID0gdGFnO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpIHtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90bykgJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYgKGhhcyhBbGxTeW1ib2xzLCBrZXkpKSB7XG4gICAgaWYgKCFELmVudW1lcmFibGUpIHtcbiAgICAgIGlmICghaGFzKGl0LCBISURERU4pKSBkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkgaXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7IGVudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpIH0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG4gIH0gcmV0dXJuIGRQKGl0LCBrZXksIEQpO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApIHtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpO1xuICB2YXIgaSA9IDA7XG4gIHZhciBsID0ga2V5cy5sZW5ndGg7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChsID4gaSkgJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCkge1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSkge1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZiAodGhpcyA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgaXQgPSB0b0lPYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBpZiAoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm47XG4gIHZhciBEID0gZ09QRChpdCwga2V5KTtcbiAgaWYgKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSkgRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCkge1xuICB2YXIgbmFtZXMgPSBnT1BOKHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOICYmIGtleSAhPSBNRVRBKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpIHtcbiAgdmFyIElTX09QID0gaXQgPT09IE9iamVjdFByb3RvO1xuICB2YXIgbmFtZXMgPSBnT1BOKElTX09QID8gT1BTeW1ib2xzIDogdG9JT2JqZWN0KGl0KSk7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGkgPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkge1xuICAgIGlmIChoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpIHJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKSB0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvKSAkc2V0LmNhbGwoT1BTeW1ib2xzLCB2YWx1ZSk7XG4gICAgICBpZiAoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSkgdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZiAoREVTQ1JJUFRPUlMgJiYgc2V0dGVyKSBzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXQgfSk7XG4gICAgcmV0dXJuIHdyYXAodGFnKTtcbiAgfTtcbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICREUC5mID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gICRHT1BTLmYgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIGlmIChERVNDUklQVE9SUyAmJiAhcmVxdWlyZSgnLi9fbGlicmFyeScpKSB7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cblxuICB3a3NFeHQuZiA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIHdyYXAod2tzKG5hbWUpKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgeyBTeW1ib2w6ICRTeW1ib2wgfSk7XG5cbmZvciAodmFyIGVzNlN5bWJvbHMgPSAoXG4gIC8vIDE5LjQuMi4yLCAxOS40LjIuMywgMTkuNC4yLjQsIDE5LjQuMi42LCAxOS40LjIuOCwgMTkuNC4yLjksIDE5LjQuMi4xMCwgMTkuNC4yLjExLCAxOS40LjIuMTIsIDE5LjQuMi4xMywgMTkuNC4yLjE0XG4gICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsc3BlY2llcyxzcGxpdCx0b1ByaW1pdGl2ZSx0b1N0cmluZ1RhZyx1bnNjb3BhYmxlcydcbikuc3BsaXQoJywnKSwgaiA9IDA7IGVzNlN5bWJvbHMubGVuZ3RoID4gajspd2tzKGVzNlN5bWJvbHNbaisrXSk7XG5cbmZvciAodmFyIHdlbGxLbm93blN5bWJvbHMgPSAka2V5cyh3a3Muc3RvcmUpLCBrID0gMDsgd2VsbEtub3duU3ltYm9scy5sZW5ndGggPiBrOykgd2tzRGVmaW5lKHdlbGxLbm93blN5bWJvbHNbaysrXSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdTeW1ib2wnLCB7XG4gIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuICAnZm9yJzogZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBoYXMoU3ltYm9sUmVnaXN0cnksIGtleSArPSAnJylcbiAgICAgID8gU3ltYm9sUmVnaXN0cnlba2V5XVxuICAgICAgOiBTeW1ib2xSZWdpc3RyeVtrZXldID0gJFN5bWJvbChrZXkpO1xuICB9LFxuICAvLyAxOS40LjIuNSBTeW1ib2wua2V5Rm9yKHN5bSlcbiAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioc3ltKSB7XG4gICAgaWYgKCFpc1N5bWJvbChzeW0pKSB0aHJvdyBUeXBlRXJyb3Ioc3ltICsgJyBpcyBub3QgYSBzeW1ib2whJyk7XG4gICAgZm9yICh2YXIga2V5IGluIFN5bWJvbFJlZ2lzdHJ5KSBpZiAoU3ltYm9sUmVnaXN0cnlba2V5XSA9PT0gc3ltKSByZXR1cm4ga2V5O1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IGZhbHNlOyB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIENocm9tZSAzOCBhbmQgMzkgYE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHNgIGZhaWxzIG9uIHByaW1pdGl2ZXNcbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTM0NDNcbnZhciBGQUlMU19PTl9QUklNSVRJVkVTID0gJGZhaWxzKGZ1bmN0aW9uICgpIHsgJEdPUFMuZigxKTsgfSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogRkFJTFNfT05fUFJJTUlUSVZFUywgJ09iamVjdCcsIHtcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpIHtcbiAgICByZXR1cm4gJEdPUFMuZih0b09iamVjdChpdCkpO1xuICB9XG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7IGE6IFMgfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KSB7XG4gICAgdmFyIGFyZ3MgPSBbaXRdO1xuICAgIHZhciBpID0gMTtcbiAgICB2YXIgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgJHJlcGxhY2VyID0gcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmICghaXNPYmplY3QocmVwbGFjZXIpICYmIGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKSByZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICBpZiAoIWlzQXJyYXkocmVwbGFjZXIpKSByZXBsYWNlciA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICBpZiAodHlwZW9mICRyZXBsYWNlciA9PSAnZnVuY3Rpb24nKSB2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYgKCFpc1N5bWJvbCh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG4gIH1cbn0pO1xuXG4vLyAxOS40LjMuNCBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdKGhpbnQpXG4kU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSB8fCByZXF1aXJlKCcuL19oaWRlJykoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7XG4iLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ2FzeW5jSXRlcmF0b3InKTtcbiIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnb2JzZXJ2YWJsZScpO1xuIiwicmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIFRPX1NUUklOR19UQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxudmFyIERPTUl0ZXJhYmxlcyA9ICgnQ1NTUnVsZUxpc3QsQ1NTU3R5bGVEZWNsYXJhdGlvbixDU1NWYWx1ZUxpc3QsQ2xpZW50UmVjdExpc3QsRE9NUmVjdExpc3QsRE9NU3RyaW5nTGlzdCwnICtcbiAgJ0RPTVRva2VuTGlzdCxEYXRhVHJhbnNmZXJJdGVtTGlzdCxGaWxlTGlzdCxIVE1MQWxsQ29sbGVjdGlvbixIVE1MQ29sbGVjdGlvbixIVE1MRm9ybUVsZW1lbnQsSFRNTFNlbGVjdEVsZW1lbnQsJyArXG4gICdNZWRpYUxpc3QsTWltZVR5cGVBcnJheSxOYW1lZE5vZGVNYXAsTm9kZUxpc3QsUGFpbnRSZXF1ZXN0TGlzdCxQbHVnaW4sUGx1Z2luQXJyYXksU1ZHTGVuZ3RoTGlzdCxTVkdOdW1iZXJMaXN0LCcgK1xuICAnU1ZHUGF0aFNlZ0xpc3QsU1ZHUG9pbnRMaXN0LFNWR1N0cmluZ0xpc3QsU1ZHVHJhbnNmb3JtTGlzdCxTb3VyY2VCdWZmZXJMaXN0LFN0eWxlU2hlZXRMaXN0LFRleHRUcmFja0N1ZUxpc3QsJyArXG4gICdUZXh0VHJhY2tMaXN0LFRvdWNoTGlzdCcpLnNwbGl0KCcsJyk7XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgRE9NSXRlcmFibGVzLmxlbmd0aDsgaSsrKSB7XG4gIHZhciBOQU1FID0gRE9NSXRlcmFibGVzW2ldO1xuICB2YXIgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXTtcbiAgdmFyIHByb3RvID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgaWYgKHByb3RvICYmICFwcm90b1tUT19TVFJJTkdfVEFHXSkgaGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IEl0ZXJhdG9ycy5BcnJheTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgU2VfQ2FtcGFpZ249IHJlcXVpcmUoJy4vc2UtY2FtcGFpZ24nKTtcblxualF1ZXJ5KHdpbmRvdykubG9hZChmdW5jdGlvbigpIHtcbiAgICBTZV9DYW1wYWlnbi5pbml0KCk7XG59KTsiLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0ICQgPSBqUXVlcnk7XG5jb25zdCBTZV9Hcm91cF9Db250cm9sbGVyID0gcmVxdWlyZSgnLi9zZS1ncm91cC1jb250cm9sbGVyJyk7XG5jb25zdCBTZV9DYW1wYWlnbiA9IHtcbiAgICBzZV9ncm91cCA6IG51bGwsXG4gICAgeGhyUmVxdWVzdDogbnVsbCxcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgJCgnI2NhbXBhaWduLXN0YXJ0LWRhdGUnKS5kYXRlcGlja2VyKCk7IFxuICAgICAgICAkKCcjY2FtcGFpZ24tZW5kLWRhdGUnKS5kYXRlcGlja2VyKCk7IFxuXG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnI3NhdmUtY2FtcGFpZ24nLCBTZV9DYW1wYWlnbi5zYXZlQ2FtcGFpZ24gKTtcblxuICAgICAgICBTZV9DYW1wYWlnbi5zZV9ncm91cCA9IFNlX0dyb3VwX0NvbnRyb2xsZXI7XG4gICAgICAgIFNlX0NhbXBhaWduLnNlX2dyb3VwLmluaXQoKTtcbiAgICAgICAgaWYgKCB0eXBlb2YgY2FtcGFpZ25faWQgIT09ICd1bmRlZmluZWQnICYmIGNhbXBhaWduX2lkICE9PSAnJyApIHtcbiAgICAgICAgICAgIFNlX0NhbXBhaWduLnNlX2dyb3VwLmNhbXBhaWduX2lkID0gY2FtcGFpZ25faWQ7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgaXNWYWxpZERhdGU6IGZ1bmN0aW9uIChkYXRlKVxuICAgIHtcbiAgICAgICAgLy8gdmFyIG1hdGNoZXMgPSAvXihcXGR7NH0pWy1cXC9dKFxcZHsxLDJ9KVstXFwvXShcXGR7MSwyfSkkLy5leGVjKGRhdGUpO1xuICAgICAgICAvLyBpZiAobWF0Y2hlcyA9PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIC8vIHZhciBkID0gbWF0Y2hlc1szXTtcbiAgICAgICAgLy8gdmFyIG0gPSBtYXRjaGVzWzJdO1xuICAgICAgICAvLyB2YXIgeSA9IG1hdGNoZXNbMV07XG4gICAgICAgIC8vIHZhciBjb21wb3NlZERhdGUgPSBuZXcgRGF0ZSh5LCBtLCBkKTtcbiAgICAgICAgLy8gcmV0dXJuIGNvbXBvc2VkRGF0ZS5nZXREYXRlKCkgPT0gZCAmJlxuICAgICAgICAvLyAgICAgICAgIGNvbXBvc2VkRGF0ZS5nZXRNb250aCgpID09IG0gJiZcbiAgICAgICAgLy8gICAgICAgICBjb21wb3NlZERhdGUuZ2V0RnVsbFllYXIoKSA9PSB5O1xuICAgICAgICAgLy8gRmlyc3QgY2hlY2sgZm9yIHRoZSBwYXR0ZXJuXG4gICAgICAgIHZhciByZWdleF9kYXRlID0gL15cXGR7NH1cXC1cXGR7MSwyfVxcLVxcZHsxLDJ9JC87XG5cbiAgICAgICAgaWYoIXJlZ2V4X2RhdGUudGVzdChkYXRlKSlcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUGFyc2UgdGhlIGRhdGUgcGFydHMgdG8gaW50ZWdlcnNcbiAgICAgICAgdmFyIHBhcnRzICAgPSBkYXRlLnNwbGl0KFwiLVwiKTtcbiAgICAgICAgdmFyIGRheSAgICAgPSBwYXJzZUludChwYXJ0c1syXSwgMTApO1xuICAgICAgICB2YXIgbW9udGggICA9IHBhcnNlSW50KHBhcnRzWzFdLCAxMCk7XG4gICAgICAgIHZhciB5ZWFyICAgID0gcGFyc2VJbnQocGFydHNbMF0sIDEwKTtcblxuICAgICAgICAvLyBDaGVjayB0aGUgcmFuZ2VzIG9mIG1vbnRoIGFuZCB5ZWFyXG4gICAgICAgIGlmKHllYXIgPCAxMDAwIHx8IHllYXIgPiAzMDAwIHx8IG1vbnRoID09IDAgfHwgbW9udGggPiAxMilcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG1vbnRoTGVuZ3RoID0gWyAzMSwgMjgsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxIF07XG5cbiAgICAgICAgLy8gQWRqdXN0IGZvciBsZWFwIHllYXJzXG4gICAgICAgIGlmKHllYXIgJSA0MDAgPT0gMCB8fCAoeWVhciAlIDEwMCAhPSAwICYmIHllYXIgJSA0ID09IDApKVxuICAgICAgICB7XG4gICAgICAgICAgICBtb250aExlbmd0aFsxXSA9IDI5O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgdGhlIHJhbmdlIG9mIHRoZSBkYXlcbiAgICAgICAgcmV0dXJuIGRheSA+IDAgJiYgZGF5IDw9IG1vbnRoTGVuZ3RoW21vbnRoIC0gMV07XG4gICAgfSxcblxuICAgIHNhdmVDYW1wYWlnbjogZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmKCBTZV9DYW1wYWlnbi54aHJSZXF1ZXN0ICE9IG51bGwgKSByZXR1cm47XG4gICAgICAgIFxuICAgICAgICB2YXIgY2FtcGFpZ25fbmFtZSA9ICQoJyNjYW1wYWlnbi1uYW1lJykudmFsKCkudHJpbSgpO1xuICAgICAgICB2YXIgY2FtcGFpZ25fc3RhcnRfZGF0ZSA9ICQoJyNjYW1wYWlnbi1zdGFydC1kYXRlJykudmFsKCkudHJpbSgpO1xuICAgICAgICB2YXIgY2FtcGFpZ25fZW5kX2RhdGUgPSAkKCcjY2FtcGFpZ24tZW5kLWRhdGUnKS52YWwoKS50cmltKCk7XG4gICAgICAgIFxuICAgICAgICBpZiAoICFjYW1wYWlnbl9uYW1lIHx8Y2FtcGFpZ25fbmFtZSA9PSAnJyApIHtcbiAgICAgICAgICAgIHdpbmRvdy5hbGVydCgnVnVpIGzDsm5nIG5o4bqtcCB0w6puIGNoaeG6v24gZOG7i2NoJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoICFjYW1wYWlnbl9zdGFydF9kYXRlIHx8Y2FtcGFpZ25fc3RhcnRfZGF0ZSA9PSAnJyApIHtcbiAgICAgICAgICAgIHdpbmRvdy5hbGVydCgnVnVpIGzDsm5nIG5o4bqtcCB0aOG7nWkgZ2lhbiBi4bqvdCDEkeG6p3UgY2hp4bq/biBk4buLY2gnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggIVNlX0NhbXBhaWduLmlzVmFsaWREYXRlKCBjYW1wYWlnbl9zdGFydF9kYXRlICkgKSB7XG4gICAgICAgICAgICB3aW5kb3cuYWxlcnQoJ1Z1aSBsw7JuZyBuaOG6rXAgdGjhu51pIGdpYW4gYuG6r3QgxJHDonUgaOG7o3AgbOG7hycpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCAhY2FtcGFpZ25fZW5kX2RhdGUgfHxjYW1wYWlnbl9lbmRfZGF0ZSA9PSAnJyApIHtcbiAgICAgICAgICAgIHdpbmRvdy5hbGVydCgnVnVpIGzDsm5nIG5o4bqtcCB0aOG7nWkgZ2lhbiBr4bq/dCB0aMO6YyBjaGnhur9uIGThu4tjaCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCAhU2VfQ2FtcGFpZ24uaXNWYWxpZERhdGUoIGNhbXBhaWduX2VuZF9kYXRlICkgKSB7XG4gICAgICAgICAgICB3aW5kb3cuYWxlcnQoJ1Z1aSBsw7JuZyBuaOG6rXAgdGjhu51pIGdpYW4ga+G6v3QgdGjDumMgaOG7o3AgbOG7hycpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBEYXRlLnBhcnNlKCBjYW1wYWlnbl9zdGFydF9kYXRlICkgPiBEYXRlLnBhcnNlKCBjYW1wYWlnbl9lbmRfZGF0ZSApICkge1xuICAgICAgICAgICAgd2luZG93LmFsZXJ0KCdUaOG7nWkgZ2lhbiBr4bq/dCB0aMO6YyBwaOG6o2kgbOG7m24gaMahbiBob+G6t2MgYuG6sW5nIHRo4budaSBnaWFuIGLhuq90IMSR4bqndScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNhbXBhaWduX2VuYWJsZSA9IDA7XG4gICAgICAgIGlmICggJCgnI2NhbXBhaWduX2VuYWJsZScpLmlzKFwiOmNoZWNrZWRcIikgKSBjYW1wYWlnbl9lbmFibGUgPSAxO1xuXG4gICAgICAgIC8vIGNhbGwgYWpheCB0byBzYXZlIG5ldyBjYW1wYWlnblxuICAgICAgICBTZV9DYW1wYWlnbi54aHJSZXF1ZXN0ID0galF1ZXJ5LmFqYXgoe1xuICAgICAgICAgICAgdHlwZTogJ3Bvc3QnLFxuICAgICAgICAgICAgdXJsOiBzZV9hZG1pbl9hamF4LFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGFjdGlvbjogJ3NlX2luc2VydF9jYW1wYWlnbicsXG4gICAgICAgICAgICAgICAgY2FtcGFpZ25fbmFtZTogY2FtcGFpZ25fbmFtZSxcbiAgICAgICAgICAgICAgICBjYW1wYWlnbl9zdGFydF9kYXRlOiBjYW1wYWlnbl9zdGFydF9kYXRlLFxuICAgICAgICAgICAgICAgIGNhbXBhaWduX2VuZF9kYXRlOiBjYW1wYWlnbl9lbmRfZGF0ZSxcbiAgICAgICAgICAgICAgICBjdXJyZW50X3Byb2R1Y3RfaWQ6IGN1cnJlbnRfcHJvZHVjdF9pZCxcbiAgICAgICAgICAgICAgICBjYW1wYWlnbl9lbmFibGU6IGNhbXBhaWduX2VuYWJsZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBqUXVlcnkoJ2JvZHknKS5hZGRDbGFzcygnZ2VhcnZuX2xvYWRpbmcnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICBTZV9DYW1wYWlnbi5zZV9ncm91cC5jYW1wYWlnbl9pZCA9IHJlc3BvbnNlLmRhdGEuY2FtcGFpZ25faWQ7IFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIFNlX0NhbXBhaWduLnNlX2dyb3VwLmNhbXBhaWduX2lkID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChyZXNwb25zZSwgZXJyb3JTdGF0dXMsIGVycm9yTXNnKSB7XG4gICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCByZXNwb25zZSApXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tcGxldGUgOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGpRdWVyeSgnYm9keScpLnJlbW92ZUNsYXNzKCdnZWFydm5fbG9hZGluZycpO1xuICAgICAgICAgICAgICAgIFNlX0NhbXBhaWduLnhoclJlcXVlc3QuYWJvcnQoKTtcbiAgICAgICAgICAgICAgICBTZV9DYW1wYWlnbi54aHJSZXF1ZXN0ID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2VfQ2FtcGFpZ247IiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFtcbiAqICAgICAge1xuICogICAgICAgICAgXCJzZV9uYW1lXCIgOiBuYW1lLFxuICogICAgICAgICAgXCJzZV90eXBlXCIgOiB0eXBlLFxuICogICAgICAgICAgXCJzZV9kb3duXCIgOiB2YWx1ZSxcbiAqICAgICAgICAgIFwicHJvZHVjdHNcIiA6IFtpZDEsIGlkMiwgaWQzXVxuICogICAgICB9XG4gKiBdXG4gKi9cblxuY29uc3QgJCA9IGpRdWVyeTtcbmNvbnN0IFNlX0dyb3VwX1Byb2R1Y3RzID0gcmVxdWlyZSgnLi9zZS1ncm91cC1wcm9kdWN0cycpO1xuY29uc3QgU2VfR3JvdXBfQ29udHJvbGxlciA9IHtcbiAgICBjYW1wYWlnbl9pZCA6IG51bGwsXG4gICAgeGhyUmVxdWVzdDogbnVsbCxcbiAgICBncm91cF92YWx1ZXMgOiBbXSxcbiAgICBpdGVtU2VsZWN0ZWQgOiBudWxsLFxuICAgIGluaXQgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgU2VfR3JvdXBfQ29udHJvbGxlci5pbml0R3JvdXBWYWx1ZSgpO1xuXG4gICAgICAgICQoJyNzYXZlLXNlLWdyb3VwJykub24oJ2NsaWNrJywgU2VfR3JvdXBfQ29udHJvbGxlci5zYXZlU0VHcm91cCApO1xuXG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnLnVwZGF0ZS1zZS1ncm91cCcsIFNlX0dyb3VwX0NvbnRyb2xsZXIudXBkYXRlU0VHcm91cCApO1xuXG4gICAgICAgIC8vIGRlbGV0ZSBncm91cCBpdGVtXG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnI3NlLWdyb3VwLWl0ZW1zIC5kZWxldGUnLCBTZV9Hcm91cF9Db250cm9sbGVyLmRlbGV0ZVNFR3JvdXAgKTtcblxuICAgICAgICAvLyBzd2FwIGdyb3VwIGl0ZW1cbiAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsICcjc2UtZ3JvdXAtaXRlbXMgLm1vdmVfdXAnLCBTZV9Hcm91cF9Db250cm9sbGVyLm1vdmVVcFNFR3JvdXAgKTtcbiAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsICcjc2UtZ3JvdXAtaXRlbXMgLm1vdmVfZG93bicsIFNlX0dyb3VwX0NvbnRyb2xsZXIubW92ZURvd25TRUdyb3VwICk7XG5cbiAgICAgICAgLy8gYWRkIHByb2R1Y3RzXG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnI3NlLWdyb3VwLWl0ZW1zIC5zZS1ncm91cC1uYW1lJywgU2VfR3JvdXBfQ29udHJvbGxlci5hZGRQcm9kdWN0VG9TRUdyb3VwICk7XG5cbiAgICAgICAgJCgnYm9keScpLm9uKCdjaGFuZ2UnLCAnc2VsZWN0W25hbWUgPVwic2UtZ3JvdXAtdHlwZVwiXScsIFNlX0dyb3VwX0NvbnRyb2xsZXIuZ3JvdXBUeXBlQ2hhbmdlICk7XG4gICAgXG4gICAgICAgIFNlX0dyb3VwX1Byb2R1Y3RzLmluaXQoIFNlX0dyb3VwX0NvbnRyb2xsZXIgKTtcbiAgICB9LFxuXG4gICAgaW5pdEdyb3VwVmFsdWUgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGxldCBqc29uU3RyaW5nID0gZGVjb2RlVVJJQ29tcG9uZW50KGVzY2FwZSh3aW5kb3cuYXRvYigkKCcjc2VfZ3JvdXBfdmFsdWVzJykudmFsKCkudHJpbSgpKSkpO1xuXG4gICAgICAgICAgICAvLyBsZXQganNvbkRhdGEgPSBKU09OLnBhcnNlKCBqc29uU3RyaW5nICk7XG5cbiAgICAgICAgICAgIFNlX0dyb3VwX0NvbnRyb2xsZXIuZ3JvdXBfdmFsdWVzID0gZ3JvdXBfaXRlbXM7XG5cbiAgICAgICAgICAgIFNlX0dyb3VwX0NvbnRyb2xsZXIucmVuZGVyTGlzdFNFR3JvdXAoKTtcbiAgICAgICAgfSBjYXRjaCAoIGUgKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICByZW5kZXJMaXN0U0VHcm91cDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBodG1sID0gJyc7XG4gICAgICAgIGxldCBjbGlja2VkID0gLTE7XG4gICAgICAgIGZvciggbGV0IGluZGV4ID0gMDsgaW5kZXggPCBTZV9Hcm91cF9Db250cm9sbGVyLmdyb3VwX3ZhbHVlcy5sZW5ndGg7IGluZGV4KysgKSB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IFNlX0dyb3VwX0NvbnRyb2xsZXIuZ3JvdXBfdmFsdWVzW2luZGV4XTtcbiAgICAgICAgICAgIGlmICggU2VfR3JvdXBfQ29udHJvbGxlci5pdGVtU2VsZWN0ZWQgJiYgU2VfR3JvdXBfQ29udHJvbGxlci5pdGVtU2VsZWN0ZWRbJ3NlX25hbWUnXSA9PSBpdGVtLnNlX25hbWUgKSBjbGlja2VkID0gaW5kZXg7XG4gICAgICAgICAgICAvLzxzcGFuIGNsYXNzPVwibW92ZSBtb3ZlX3VwXCI+PC9zcGFuPlxuICAgICAgICAgICAgLy8gPHNwYW4gY2xhc3M9XCJtb3ZlIG1vdmVfZG93blwiPjwvc3Bhbj5cbiAgICAgICAgICAgIGh0bWwgKz0gYDxkaXYgY2xhc3M9XCJzZS1ncm91cC1pdGVtXCIgZGF0YS1pbmRleD1cIiR7aW5kZXh9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRlbGV0ZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwic2UtZ3JvdXAtbmFtZVwiPiR7aXRlbS5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZWRpdC1ncm91cFwiIHN0eWxlPVwiZGlzcGxheTpub25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkxv4bqhaSBnaeG6o20gZ2nDoTo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJzZS1ncm91cC10eXBlXCIgdmFsdWU9XCIke2l0ZW0uZGlzY291bnRfdHlwZX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwcmljZVwiICR7aXRlbS5kaXNjb3VudF90eXBlPT0ncHJpY2UnID8gJ3NlbGVjdGVkJyA6ICcnfSA+R2nhuqNtIHRp4buBbjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInBlcmNlbnRcIiAke2l0ZW0uZGlzY291bnRfdHlwZT09J3BlcmNlbnQnID8gJ3NlbGVjdGVkJyA6ICcnfT5HaeG6o20gdGhlbyAlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZ2lmdFwiICR7aXRlbS5kaXNjb3VudF90eXBlPT0nZ2lmdCcgPyAnc2VsZWN0ZWQnIDogJyd9PlF1w6AgdOG6t25nPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgJHtpdGVtLmRpc2NvdW50X3R5cGU9PSdnaWZ0JyA/ICdzdHlsZT1cImRpc3BsYXk6bm9uZVwiJyA6ICcnfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5HaeG6o206PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwic2UtZG93bi12YWx1ZVwiIHZhbHVlPVwiJHtpdGVtLmRpc2NvdW50X3ZhbHVlfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+VGjhu6kgdOG7sSBoaeG7g24gdGjhu4s6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwic2UtZGlzcGxheS1pbmRleFwiIHZhbHVlPVwiJHtpdGVtLmRpc3BsYXlfaW5kZXh9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInVwZGF0ZS1zZS1ncm91cFwiIGRhdGEtaW5kZXg9XCIke2luZGV4fVwiIGRhdGEta2V5PVwiJHtpdGVtLklEfVwiIGNsYXNzPVwiYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiPkPhuq1wIG5o4bqtdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgIH1cbiAgICAgICAgJCgnI3NlLWdyb3VwLWl0ZW1zJykuaHRtbCggaHRtbCApO1xuICAgICAgICAvLyB1cGRhdGUgdmFsdWUgdG8gaW5wdXRcbiAgICAgICAgXG4gICAgICAgICQoJyNzZV9ncm91cF92YWx1ZXMnKS52YWwoIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KCBTZV9Hcm91cF9Db250cm9sbGVyLmdyb3VwX3ZhbHVlcyApKSkpICk7XG5cbiAgICAgICAgaWYgKCBjbGlja2VkICE9IC0xICkge1xuICAgICAgICAgICAgJCgkKCQoJyNzZS1ncm91cC1pdGVtcyAuc2UtZ3JvdXAtaXRlbScpW2NsaWNrZWRdKS5maW5kKCcuc2UtZ3JvdXAtbmFtZScpWzBdKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgU2VfR3JvdXBfUHJvZHVjdHMucmVuZGVyTGlzdFByb2R1Y3RTZWxlY3RlZChudWxsKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICB1cGRhdGVTZWxlY3RlZERhdGEgOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgZm9yKGxldCBpbmRleCBpbiBTZV9Hcm91cF9Db250cm9sbGVyLmdyb3VwX3ZhbHVlcykge1xuICAgICAgICAgICAgaWYgKCBTZV9Hcm91cF9Db250cm9sbGVyLmdyb3VwX3ZhbHVlc1tpbmRleF0uc2VfbmFtZSA9PSBTZV9Hcm91cF9Db250cm9sbGVyLml0ZW1TZWxlY3RlZC5zZV9uYW1lICkge1xuICAgICAgICAgICAgICAgIFNlX0dyb3VwX0NvbnRyb2xsZXIuZ3JvdXBfdmFsdWVzW2luZGV4XSA9IFNlX0dyb3VwX0NvbnRyb2xsZXIuaXRlbVNlbGVjdGVkO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJCgnI3NlX2dyb3VwX3ZhbHVlcycpLnZhbCggYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoIFNlX0dyb3VwX0NvbnRyb2xsZXIuZ3JvdXBfdmFsdWVzICkpKSkgKTtcbiAgICB9LFxuXG4gICAgc2F2ZVNFR3JvdXAgOiBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKCBTZV9Hcm91cF9Db250cm9sbGVyLmNhbXBhaWduX2lkID09IG51bGwgKSB7XG4gICAgICAgICAgICB3aW5kb3cuYWxlcnQoJ1Z1aSBsw7JuZyB04bqhbyAxIGNoaeG6v24gZOG7i2NoIScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBTZV9Hcm91cF9Db250cm9sbGVyLmdyb3VwX3ZhbHVlcy5sZW5ndGggPT0gMyApIHtcbiAgICAgICAgICAgIHdpbmRvdy5hbGVydCgnQ2jDum5nIHTDtGkgY2jhu4kgaOG7lyB0cuG7oyB04buRaSDEkWEgMyBuaMOzbSBwaOG7pSBraeG7h24hJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbmFtZSA9ICQoJyNzZS1ncm91cC1uYW1lJykudmFsKCkudHJpbSgpO1xuICAgICAgICBsZXQgdHlwZSA9ICQoJyNzZS1ncm91cC10eXBlJykudmFsKCkudHJpbSgpO1xuICAgICAgICBsZXQgZG93biA9ICQoJyNzZS1kb3duLXZhbHVlJykudmFsKCkudHJpbSgpO1xuICAgICAgICBsZXQgaW5kZXggPSAkKCcjc2UtZGlzcGxheS1pbmRleCcpLnZhbCgpLnRyaW0oKTtcblxuICAgICAgICBpZiAoIG5hbWUgPT0gJycgKSB7XG4gICAgICAgICAgICB3aW5kb3cuYWxlcnQoJ1Z1aSBsw7JuZyBuaOG6rXAgdMOqbiBuaMOzbSEnKTtcbiAgICAgICAgICAgICQoJyNzZS1ncm91cC1uYW1lJykuZm9jdXMoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIHR5cGUgPT0gJycgKSB7XG4gICAgICAgICAgICB3aW5kb3cuYWxlcnQoJ1Z1aSBsw7JuZyBjaOG7jW4gbG/huqFpIGdp4bqjbSBnacOhIScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICggZG93biA9PSAnJyApIHtcbiAgICAgICAgICAgIHdpbmRvdy5hbGVydCgnVnVpIGzDsm5nIG5o4bqtcCBnacOhIGdp4bqjbSEnKTtcbiAgICAgICAgICAgICQoJyNzZS1kb3duLXZhbHVlJykuZm9jdXMoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIGluZGV4ID09ICcnICkge1xuICAgICAgICAgICAgd2luZG93LmFsZXJ0KCdWdWkgbMOybmcgbmjhuq1wIHbhu4sgdHLDrSBoaeG7g24gdGjhu4shJyk7XG4gICAgICAgICAgICAkKCcjc2UtZGlzcGxheS1pbmRleCcpLmZvY3VzKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayB2YWx1ZSBkb3duXG4gICAgICAgIGlmICggdHlwZSA9PSAncHJpY2UnICkge1xuICAgICAgICAgICAgaWYgKCBkb3duIDwgMTAwMCB8fCBkb3duICUgMTAwMCAhPSAwICkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydCgnR2nDoSBnaeG6o20gcGjhuqNpIGzDoCBt4buZdCBz4buRIGNoaWEgaOG6v3QgY2hvIDEwMDAnKTtcbiAgICAgICAgICAgICAgICAkKCcjc2UtZG93bi12YWx1ZScpLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCBkb3duID4gMTAwIHx8IGRvd24gPCAwICkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydCgnUGjhuqduIHRyxINtIGdp4bqjbSBwaOG6o2kgbOG7m24gLTEgdsOgIG5o4buPIGjGoW4gaG/hurdjIGLhurFuZyAxMDAnKTtcbiAgICAgICAgICAgICAgICAkKCcjc2UtZG93bi12YWx1ZScpLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBpbmRleCA8PSAwICkge1xuICAgICAgICAgICAgd2luZG93LmFsZXJ0KCdW4buLIHRyw60gaGnhu4NuIHRo4buLIHBo4bqjaSBs4bubbiBoxqFuIDAhJyk7XG4gICAgICAgICAgICAkKCcjc2UtZGlzcGxheS1pbmRleCcpLmZvY3VzKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBcblxuICAgICAgICAvLyBjYWxsIGFqYXggdG8gaW5zZXJ0IG5ldyBncm91cFxuICAgICAgICBpZiggU2VfR3JvdXBfQ29udHJvbGxlci54aHJSZXF1ZXN0ICE9IG51bGwgKSByZXR1cm47XG4gICAgICAgIFNlX0dyb3VwX0NvbnRyb2xsZXIueGhyUmVxdWVzdCA9IGpRdWVyeS5hamF4KHtcbiAgICAgICAgICAgIHR5cGU6ICdwb3N0JyxcbiAgICAgICAgICAgIHVybDogc2VfYWRtaW5fYWpheCxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdzZV9pbnNlcnRfY2FtcGFpZ25fZ3JvdXAnLFxuICAgICAgICAgICAgICAgIGNhbXBhaWduX2lkOiBTZV9Hcm91cF9Db250cm9sbGVyLmNhbXBhaWduX2lkLFxuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgZGlzY291bnRfdHlwZTogdHlwZSxcbiAgICAgICAgICAgICAgICBkaXNjb3VudF92YWx1ZTogZG93bixcbiAgICAgICAgICAgICAgICBkaXNwbGF5X2luZGV4OiBpbmRleFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBqUXVlcnkoJ2JvZHknKS5hZGRDbGFzcygnZ2VhcnZuX2xvYWRpbmcnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiSURcIjogICByZXNwb25zZS5kYXRhLmdyb3VwX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjYW1wYWlnbl9pZFwiOiAgU2VfR3JvdXBfQ29udHJvbGxlci5jYW1wYWlnbl9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXNjb3VudF90eXBlXCI6IHR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpc2NvdW50X3ZhbHVlXCI6IGRvd24sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpc3BsYXlfaW5kZXhcIjogaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBTZV9Hcm91cF9Db250cm9sbGVyLmdyb3VwX3ZhbHVlcy5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICBTZV9Hcm91cF9Db250cm9sbGVyLnJlbmRlckxpc3RTRUdyb3VwKCk7XG4gICAgICAgICAgICAgICAgICAgICQoJyNzZS1ncm91cC1uYW1lJykudmFsKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnI3NlLWRvd24tdmFsdWUnKS52YWwoJzAnKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnI3NlLWRpc3BsYXktaW5kZXgnKS52YWwoJzAnKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHJlc3BvbnNlLCBlcnJvclN0YXR1cywgZXJyb3JNc2cpIHtcbiAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coIHJlc3BvbnNlIClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21wbGV0ZSA6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgalF1ZXJ5KCdib2R5JykucmVtb3ZlQ2xhc3MoJ2dlYXJ2bl9sb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgU2VfR3JvdXBfQ29udHJvbGxlci54aHJSZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgICAgICAgICAgU2VfR3JvdXBfQ29udHJvbGxlci54aHJSZXF1ZXN0ID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cblxuICAgICAgICAvLyBpZiAoIFNlX0dyb3VwX0NvbnRyb2xsZXIuY2hlY2tFeGlzdHNWYWx1ZSggbmFtZSApICkge1xuICAgICAgICAvLyAgICAgd2luZG93LmFsZXJ0KCdOaMOzbSBuw6B5IMSRw6MgdOG7k24gdOG6oWkhJyk7XG4gICAgICAgIC8vICAgICAkKCcjc2UtZ3JvdXAtbmFtZScpLmZvY3VzKCk7XG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICBsZXQgaXRlbSA9IHtcbiAgICAgICAgLy8gICAgICAgICBcInNlX25hbWVcIiA6IG5hbWUsXG4gICAgICAgIC8vICAgICAgICAgXCJzZV90eXBlXCIgOiB0eXBlLFxuICAgICAgICAvLyAgICAgICAgIFwic2VfZG93blwiIDogZG93bixcbiAgICAgICAgLy8gICAgICAgICBcInByb2R1Y3RzXCIgOiBbXVxuICAgICAgICAvLyAgICAgfTtcbiAgICBcbiAgICAgICAgLy8gICAgIFNlX0dyb3VwX0NvbnRyb2xsZXIuZ3JvdXBfdmFsdWVzLnB1c2goaXRlbSk7XG4gICAgICAgIC8vICAgICBTZV9Hcm91cF9Db250cm9sbGVyLnJlbmRlckxpc3RTRUdyb3VwKCk7XG4gICAgICAgIC8vICAgICAkKCcjc2UtZ3JvdXAtbmFtZScpLnZhbCgnJykuZm9jdXMoKTtcbiAgICAgICAgLy8gICAgICQoJyNzZS1kb3duLXZhbHVlJykudmFsKCcwJyk7XG4gICAgICAgIC8vIH1cbiAgICB9LFxuXG4gICAgY2hlY2tFeGlzdHNWYWx1ZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgZm9yKCBsZXQgaW5kZXggPSAwOyBpbmRleCA8IFNlX0dyb3VwX0NvbnRyb2xsZXIuZ3JvdXBfdmFsdWVzLmxlbmd0aDsgaW5kZXgrKyApIHtcbiAgICAgICAgICAgIGxldCBpdGVtID0gU2VfR3JvdXBfQ29udHJvbGxlci5ncm91cF92YWx1ZXNbaW5kZXhdO1xuICAgICAgICAgICAgaWYgKCB2YWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKSA9PSBpdGVtLnNlX25hbWUudHJpbSgpLnRvTG93ZXJDYXNlKCkgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG5cbiAgICBkZWxldGVTRUdyb3VwOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiggU2VfR3JvdXBfQ29udHJvbGxlci54aHJSZXF1ZXN0ICE9IG51bGwgKSByZXR1cm47XG5cbiAgICAgICAgbGV0IGluZGV4ID0gJCgkKHRoaXMpLnBhcmVudCgpKS5hdHRyKCdkYXRhLWluZGV4Jyk7XG4gICAgICAgIGlmICggaW5kZXggPT0gbnVsbCB8fCB0eXBlb2YgaW5kZXggPT0gJ3VuZGVmaW5lZCcgKSByZXR1cm47XG4gICAgICAgIGlmICggdHlwZW9mIGluZGV4ID09ICdzdHJpbmcnICkgaW5kZXggPSBwYXJzZUludChpbmRleCk7XG5cbiAgICAgICAgdmFyIGl0ZW0gPSBTZV9Hcm91cF9Db250cm9sbGVyLmdyb3VwX3ZhbHVlc1tpbmRleF07XG5cbiAgICAgICAgdmFyIHIgPSBjb25maXJtKFwiQuG6oW4gbXXhu5FuIHjDs2EgXCIgKyBpdGVtWyduYW1lJ10gKyAnID8nKTtcbiAgICAgICAgaWYgKHIgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgLy8gY2FsbCBhamF4IHRvIHVwZGF0ZVxuICAgICAgICAgICAgU2VfR3JvdXBfQ29udHJvbGxlci54aHJSZXF1ZXN0ID0galF1ZXJ5LmFqYXgoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdwb3N0JyxcbiAgICAgICAgICAgICAgICB1cmw6IHNlX2FkbWluX2FqYXgsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICdzZV9yZW1vdmVfY2FtcGFpZ25fZ3JvdXAnLFxuICAgICAgICAgICAgICAgICAgICBncm91cDogaXRlbVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJ2JvZHknKS5hZGRDbGFzcygnZ2VhcnZuX2xvYWRpbmcnKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KCfEkMOjIHjDs2EgbmjDs20gJyArIGl0ZW1bJ25hbWUnXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBTZV9Hcm91cF9Db250cm9sbGVyLmdyb3VwX3ZhbHVlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgU2VfR3JvdXBfQ29udHJvbGxlci5yZW5kZXJMaXN0U0VHcm91cCgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAocmVzcG9uc2UsIGVycm9yU3RhdHVzLCBlcnJvck1zZykge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coIHJlc3BvbnNlIClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNvbXBsZXRlIDogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KCdib2R5JykucmVtb3ZlQ2xhc3MoJ2dlYXJ2bl9sb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgICAgIFNlX0dyb3VwX0NvbnRyb2xsZXIueGhyUmVxdWVzdC5hYm9ydCgpO1xuICAgICAgICAgICAgICAgICAgICBTZV9Hcm91cF9Db250cm9sbGVyLnhoclJlcXVlc3QgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZV9Hcm91cF9Db250cm9sbGVyLmdyb3VwX3ZhbHVlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAvLyBTZV9Hcm91cF9Db250cm9sbGVyLnJlbmRlckxpc3RTRUdyb3VwKCk7XG4gICAgfSxcblxuICAgIG1vdmVVcFNFR3JvdXA6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gJCgkKHRoaXMpLnBhcmVudCgpKS5hdHRyKCdkYXRhLWluZGV4Jyk7XG4gICAgICAgIGlmICggaW5kZXggPT0gbnVsbCB8fCB0eXBlb2YgaW5kZXggPT0gJ3VuZGVmaW5lZCcgKSByZXR1cm47XG4gICAgICAgIGlmICggdHlwZW9mIGluZGV4ID09ICdzdHJpbmcnICkgaW5kZXggPSBwYXJzZUludChpbmRleCk7XG5cbiAgICAgICAgaWYgKCBpbmRleCA9PSAwICkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBpdGVtID0gU2VfR3JvdXBfQ29udHJvbGxlci5ncm91cF92YWx1ZXNbaW5kZXhdO1xuICAgICAgICBTZV9Hcm91cF9Db250cm9sbGVyLmdyb3VwX3ZhbHVlc1tpbmRleF0gPSBTZV9Hcm91cF9Db250cm9sbGVyLmdyb3VwX3ZhbHVlc1tpbmRleC0xXTtcbiAgICAgICAgU2VfR3JvdXBfQ29udHJvbGxlci5ncm91cF92YWx1ZXNbaW5kZXgtMV0gPSBpdGVtO1xuICAgICAgICBcbiAgICAgICAgU2VfR3JvdXBfQ29udHJvbGxlci5yZW5kZXJMaXN0U0VHcm91cCgpO1xuICAgIH0sXG4gICAgXG4gICAgbW92ZURvd25TRUdyb3VwOiBmdW5jdGlvbihlKSB7XG4gICAgICAgIGxldCBpbmRleCA9ICQoJCh0aGlzKS5wYXJlbnQoKSkuYXR0cignZGF0YS1pbmRleCcpO1xuICAgICAgICBpZiAoIGluZGV4ID09IG51bGwgfHwgdHlwZW9mIGluZGV4ID09ICd1bmRlZmluZWQnICkgcmV0dXJuO1xuICAgICAgICBpZiAoIHR5cGVvZiBpbmRleCA9PSAnc3RyaW5nJyApIGluZGV4ID0gcGFyc2VJbnQoaW5kZXgpO1xuXG4gICAgICAgIGlmICggaW5kZXggPT0gU2VfR3JvdXBfQ29udHJvbGxlci5ncm91cF92YWx1ZXMubGVuZ3RoIC0gMSApIHJldHVybjtcblxuICAgICAgICBsZXQgaXRlbSA9IFNlX0dyb3VwX0NvbnRyb2xsZXIuZ3JvdXBfdmFsdWVzW2luZGV4XTtcbiAgICAgICAgU2VfR3JvdXBfQ29udHJvbGxlci5ncm91cF92YWx1ZXNbaW5kZXhdID0gU2VfR3JvdXBfQ29udHJvbGxlci5ncm91cF92YWx1ZXNbaW5kZXgrMV07XG4gICAgICAgIFNlX0dyb3VwX0NvbnRyb2xsZXIuZ3JvdXBfdmFsdWVzW2luZGV4KzFdID0gaXRlbTtcbiAgICAgICAgXG4gICAgICAgIFNlX0dyb3VwX0NvbnRyb2xsZXIucmVuZGVyTGlzdFNFR3JvdXAoKTtcbiAgICB9LFxuXG4gICAgYWRkUHJvZHVjdFRvU0VHcm91cDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBpbmRleCA9ICQoJCh0aGlzKS5wYXJlbnQoKSkuYXR0cignZGF0YS1pbmRleCcpO1xuICAgICAgICBpZiAoIGluZGV4ID09IG51bGwgfHwgdHlwZW9mIGluZGV4ID09ICd1bmRlZmluZWQnICkgcmV0dXJuO1xuICAgICAgICBpZiAoIHR5cGVvZiBpbmRleCA9PSAnc3RyaW5nJyApIGluZGV4ID0gcGFyc2VJbnQoaW5kZXgpO1xuXG4gICAgICAgICQoJyNzZS1ncm91cC1pdGVtcyAuc2UtZ3JvdXAtaXRlbScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJCgnLmZvcm0tZWRpdC1ncm91cCcpLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xuICAgICAgICAkKCQodGhpcykucGFyZW50KCkpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgJCgkKHRoaXMpLnBhcmVudCgpKS5maW5kKCcuZm9ybS1lZGl0LWdyb3VwJykuY3NzKHsnZGlzcGxheSc6J2Jsb2NrJ30pO1xuICAgICAgICAkKCcucmlnaHQtY29udGFpbmVyJykuY3NzKHtcbiAgICAgICAgICAgICdkaXNwbGF5JzogJ2Jsb2NrJ1xuICAgICAgICB9KTtcbiAgICAgICAgU2VfR3JvdXBfQ29udHJvbGxlci5pdGVtU2VsZWN0ZWQgPSBTZV9Hcm91cF9Db250cm9sbGVyLmdyb3VwX3ZhbHVlc1tpbmRleF07XG4gICAgICAgICQoJyNncm91cC1uYW1lLWRpc3BsYXknKS50ZXh0KCBTZV9Hcm91cF9Db250cm9sbGVyLml0ZW1TZWxlY3RlZC5uYW1lICk7XG4gICAgICAgIFNlX0dyb3VwX1Byb2R1Y3RzLnJlc2V0RGF0YSgpO1xuICAgICAgICBTZV9Hcm91cF9Qcm9kdWN0cy5yZW5kZXJMaXN0UHJvZHVjdFNlbGVjdGVkSURzKCBTZV9Hcm91cF9Db250cm9sbGVyLml0ZW1TZWxlY3RlZCApO1xuICAgIH0sXG5cbiAgICBncm91cFR5cGVDaGFuZ2U6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdmFyIHZhbCA9ICQodGhpcykudmFsKCkudHJpbSgpO1xuICAgICAgICBpZiAoICQodGhpcykuY2xvc2VzdCggJyNzZS1ncm91cHMnICkubGVuZ3RoID4gMCApIHtcbiAgICAgICAgICAgIGlmICggdmFsID09ICdnaWZ0JyApIHtcbiAgICAgICAgICAgICAgICAkKCcjc2UtZG93bi12YWx1ZScpLnZhbCgnMTAwJyk7XG4gICAgICAgICAgICAgICAgJCgkKCcjc2UtZG93bi12YWx1ZScpLmNsb3Nlc3QoJy5mb3JtLWdyb3VwJylbMF0pLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCcjc2UtZG93bi12YWx1ZScpLnZhbCgnMCcpO1xuICAgICAgICAgICAgICAgICQoJCgnI3NlLWRvd24tdmFsdWUnKS5jbG9zZXN0KCcuZm9ybS1ncm91cCcpWzBdKS5jc3MoeydkaXNwbGF5JzonZmxleCd9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICggJCh0aGlzKS5jbG9zZXN0KCAnLmZvcm0tZWRpdC1ncm91cCcgKS5sZW5ndGggPiAwICkge1xuICAgICAgICAgICAgdmFyIHBhcmVudCA9ICQoICQodGhpcykuY2xvc2VzdCggJy5mb3JtLWVkaXQtZ3JvdXAnIClbMF0gKTtcbiAgICAgICAgICAgIHZhciBpbnB1dCA9ICQoIHBhcmVudC5maW5kKCdpbnB1dFtuYW1lPXNlLWRvd24tdmFsdWVdJylbMF0gKTtcbiAgICAgICAgICAgIGlmICggdmFsID09ICdnaWZ0JyApIHtcbiAgICAgICAgICAgICAgICBpbnB1dC52YWwoJzEwMCcpO1xuICAgICAgICAgICAgICAgICQoaW5wdXQuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKVswXSkuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlucHV0LnZhbCgnMCcpO1xuICAgICAgICAgICAgICAgICQoaW5wdXQuY2xvc2VzdCgnLmZvcm0tZ3JvdXAnKVswXSkuY3NzKHsnZGlzcGxheSc6J2ZsZXgnfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICB9LFxuXG4gICAgdXBkYXRlU0VHcm91cDogZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgaWYoIFNlX0dyb3VwX0NvbnRyb2xsZXIueGhyUmVxdWVzdCAhPSBudWxsICkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBpbmRleCA9ICQodGhpcykuYXR0cignZGF0YS1pbmRleCcpO1xuICAgICAgICBpZiAoIGluZGV4ID09IG51bGwgfHwgdHlwZW9mIGluZGV4ID09ICd1bmRlZmluZWQnICkgcmV0dXJuO1xuICAgICAgICBpZiAoIHR5cGVvZiBpbmRleCA9PSAnc3RyaW5nJyApIGluZGV4ID0gcGFyc2VJbnQoaW5kZXgpO1xuICAgICAgICBsZXQgcGFyZW50ID0gJCh0aGlzKS5jbG9zZXN0KCAnLmZvcm0tZWRpdC1ncm91cCcgKTtcbiAgICAgICAgbGV0IHNlbGVjdF90eXBlID0gJChwYXJlbnQuZmluZCgnc2VsZWN0W25hbWUgPVwic2UtZ3JvdXAtdHlwZVwiXScpWzBdKTtcbiAgICAgICAgbGV0IGlucHV0X3ByaWNlID0gJChwYXJlbnQuZmluZCgnaW5wdXRbbmFtZSA9XCJzZS1kb3duLXZhbHVlXCJdJylbMF0pO1xuICAgICAgICBsZXQgaW5wdXRfaW5kZXggPSAkKHBhcmVudC5maW5kKCdpbnB1dFtuYW1lID1cInNlLWRpc3BsYXktaW5kZXhcIl0nKVswXSk7XG4gICAgICAgIGxldCB0eXBlID0gc2VsZWN0X3R5cGUudmFsKCkudHJpbSgpO1xuICAgICAgICBsZXQgZG93biA9IGlucHV0X3ByaWNlLnZhbCgpLnRyaW0oKTtcbiAgICAgICAgbGV0IGRpc3BsYXlfaW5kZXggPSBpbnB1dF9pbmRleC52YWwoKS50cmltKCk7XG5cbiAgICAgICAgaWYgKCB0eXBlID09ICcnICkge1xuICAgICAgICAgICAgd2luZG93LmFsZXJ0KCdWdWkgbMOybmcgY2jhu41uIGxv4bqhaSBnaeG6o20gZ2nDoSEnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIGRvd24gPT0gJycgKSB7XG4gICAgICAgICAgICB3aW5kb3cuYWxlcnQoJ1Z1aSBsw7JuZyBuaOG6rXAgZ2nDoSBnaeG6o20hJyk7XG4gICAgICAgICAgICBpbnB1dF9wcmljZS5mb2N1cygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBkaXNwbGF5X2luZGV4ID09ICcnICkge1xuICAgICAgICAgICAgd2luZG93LmFsZXJ0KCdWdWkgbMOybmcgbmjhuq1wIHbhu4sgdHLDrSBoaeG7g24gdGjhu4shJyk7XG4gICAgICAgICAgICBpbnB1dF9pbmRleC5mb2N1cygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2sgdmFsdWUgZG93blxuICAgICAgICBpZiAoIHR5cGUgPT0gJ3ByaWNlJyApIHtcbiAgICAgICAgICAgIGlmICggZG93biA8IDEwMDAgfHwgZG93biAlIDEwMDAgIT0gMCApIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoJ0dpw6EgZ2nhuqNtIHBo4bqjaSBsw6AgbeG7mXQgc+G7kSBjaGlhIGjhur90IGNobyAxMDAwJyk7XG4gICAgICAgICAgICAgICAgaW5wdXRfcHJpY2UuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIGRvd24gPiAxMDAgfHwgZG93biA8IDAgKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KCdQaOG6p24gdHLEg20gZ2nhuqNtIHBo4bqjaSBs4bubbiAtMSB2w6Agbmjhu48gaMahbiBob+G6t2MgYuG6sW5nIDEwMCcpO1xuICAgICAgICAgICAgICAgIGlucHV0X3ByaWNlLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBkaXNwbGF5X2luZGV4IDw9IDAgKSB7XG4gICAgICAgICAgICB3aW5kb3cuYWxlcnQoJ1bhu4sgdHLDrSBoaeG7g24gdGjhu4sgcGjhuqNpIGzhu5tuIGjGoW4gMCEnKTtcbiAgICAgICAgICAgIGlucHV0X2luZGV4LmZvY3VzKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZ3JvdXBfZGF0YSA9IFNlX0dyb3VwX0NvbnRyb2xsZXIuaXRlbVNlbGVjdGVkO1xuICAgICAgICBncm91cF9kYXRhWydkaXNjb3VudF90eXBlJ10gPSB0eXBlO1xuICAgICAgICBncm91cF9kYXRhWydkaXNjb3VudF92YWx1ZSddID0gZG93bjtcbiAgICAgICAgZ3JvdXBfZGF0YVsnZGlzcGxheV9pbmRleCddID0gZGlzcGxheV9pbmRleDtcbiAgICAgICAgLy8gY2FsbCBhamF4IHRvIHVwZGF0ZVxuICAgICAgICBTZV9Hcm91cF9Db250cm9sbGVyLnhoclJlcXVlc3QgPSBqUXVlcnkuYWpheCh7XG4gICAgICAgICAgICB0eXBlOiAncG9zdCcsXG4gICAgICAgICAgICB1cmw6IHNlX2FkbWluX2FqYXgsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnc2VfdXBkYXRlX2NhbXBhaWduX2dyb3VwJyxcbiAgICAgICAgICAgICAgICBncm91cDogZ3JvdXBfZGF0YVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBqUXVlcnkoJ2JvZHknKS5hZGRDbGFzcygnZ2VhcnZuX2xvYWRpbmcnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoJ8SQw6MgY+G6rXAgbmjhuq10IHRow6BuaCBjw7RuZyEnKTtcbiAgICAgICAgICAgICAgICAgICAgU2VfR3JvdXBfQ29udHJvbGxlci5ncm91cF92YWx1ZXNbaW5kZXhdID0gZ3JvdXBfZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgU2VfR3JvdXBfQ29udHJvbGxlci5yZW5kZXJMaXN0U0VHcm91cCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHJlc3BvbnNlLCBlcnJvclN0YXR1cywgZXJyb3JNc2cpIHtcbiAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coIHJlc3BvbnNlIClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21wbGV0ZSA6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgalF1ZXJ5KCdib2R5JykucmVtb3ZlQ2xhc3MoJ2dlYXJ2bl9sb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgU2VfR3JvdXBfQ29udHJvbGxlci54aHJSZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgICAgICAgICAgU2VfR3JvdXBfQ29udHJvbGxlci54aHJSZXF1ZXN0ID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIHVwZGF0ZVJlY29yZEdyb3VwOiBmdW5jdGlvbiggICkge1xuXG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNlX0dyb3VwX0NvbnRyb2xsZXI7IiwiJ3VzZSBzdHJpY3QnO1xuXG5cbmNvbnN0ICQgPSBqUXVlcnk7XG5jb25zdCBTZV9Hcm91cF9Qcm9kdWN0cyA9IHtcbiAgICBncm91cF9jb250cm9sbGVyIDogbnVsbCxcbiAgICB4aHJSZXF1ZXN0U2VhcmNoIDogbnVsbCxcbiAgICB4aHJSZXF1ZXN0R2V0UHJvZHVjdHMgOiBudWxsLFxuICAgIGRhdGFfcHJvZHVjdHMgOiBudWxsLFxuICAgIGRhdGFfcHJvZHVjdHNfZGlzcGxheTogW10sXG5cbiAgICBpbml0IDogZnVuY3Rpb24gKHBhcmVudCkge1xuICAgICAgICBTZV9Hcm91cF9Qcm9kdWN0cy5ncm91cF9jb250cm9sbGVyID0gcGFyZW50O1xuXG4gICAgICAgICQoJ2JvZHknKS5vbigna2V5dXAnLCAnI3NlLXNlYXJjaC1ncm91cC1uYW1lJywgU2VfR3JvdXBfUHJvZHVjdHMuc2VhcmNoUHJvZHVjdHMpO1xuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJyNjbG9zZS1zZWFyY2gnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIFNlX0dyb3VwX1Byb2R1Y3RzLmRhdGFfcHJvZHVjdHMgPSBudWxsO1xuICAgICAgICAgICAgJCgnLnNlYXJjaF9ncm91cCAjbGlzdC1wcm9kdWN0cycpLnJlbW92ZSgpO1xuICAgICAgICAgICAgJCgnI3NlLXNlYXJjaC1ncm91cC1uYW1lJykudmFsKCcnKTtcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnI2xpc3QtcHJvZHVjdHMgLml0ZW0nLCBTZV9Hcm91cF9Qcm9kdWN0cy5zZXRQcm9kdWN0R3JvdXApO1xuICAgICAgICBcbiAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsICcjbGlzdC1wcm9kdWN0LXNlbGVjdGVkIC5kZWxldGUnLCBTZV9Hcm91cF9Qcm9kdWN0cy5yZW1vdmVQcm9kdWN0KTtcbiAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsICcjbGlzdC1wcm9kdWN0LXNlbGVjdGVkIC5tb3ZlX3VwJywgU2VfR3JvdXBfUHJvZHVjdHMubW92ZVVwU0VHcm91cCApO1xuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJyNsaXN0LXByb2R1Y3Qtc2VsZWN0ZWQgLm1vdmVfZG93bicsIFNlX0dyb3VwX1Byb2R1Y3RzLm1vdmVEb3duU0VHcm91cCApO1xuXG4gICAgICAgICQoJ2JvZHknKS5vbiggJ2NsaWNrJywgJyN1cGRhdGUtbHN0LXByb2R1Y3QnLCBTZV9Hcm91cF9Qcm9kdWN0cy51cGRhdGVMaXN0UHJvZHVjdCApXG4gICAgfSxcblxuICAgIHNlYXJjaFByb2R1Y3RzIDogZnVuY3Rpb24oZSkge1xuICAgICAgICB2YXIga2V5c2VhcmNoID0gZS50YXJnZXQudmFsdWUudHJpbSgpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCBrZXlzZWFyY2ggPT0gJycgfHwga2V5c2VhcmNoLmxlbmd0aCA8IDMgKSByZXR1cm47XG5cbiAgICAgICAgaWYgKCBTZV9Hcm91cF9Qcm9kdWN0cy54aHJSZXF1ZXN0U2VhcmNoICE9IG51bGwgKSB7XG4gICAgICAgICAgICBTZV9Hcm91cF9Qcm9kdWN0cy54aHJSZXF1ZXN0U2VhcmNoLmFib3J0KCk7XG4gICAgICAgICAgICBTZV9Hcm91cF9Qcm9kdWN0cy54aHJSZXF1ZXN0U2VhcmNoID0gbnVsbDtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgU2VfR3JvdXBfUHJvZHVjdHMueGhyUmVxdWVzdFNlYXJjaCA9IGpRdWVyeS5hamF4KHtcbiAgICAgICAgICAgIHR5cGU6ICdnZXQnLFxuICAgICAgICAgICAgdXJsOiBzZV9hZG1pbl9hamF4LFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGFjdGlvbjogJ3NlX3NlYXJjaF9wcm9kdWN0JyxcbiAgICAgICAgICAgICAgICBmbiA6ICdnZXRfYWpheF9zZWFyY2gnLFxuICAgICAgICAgICAgICAgIHRlcm0gOiBrZXlzZWFyY2hcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCgnLnNlYXJjaF9ncm91cCBzcGFuLnNwaW5uZXInKS5hZGRDbGFzcyggJ2lzLWFjdGl2ZScgKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdHMgPSByZXNwb25zZS5kYXRhLnByb2R1Y3RzO1xuICAgICAgICAgICAgICAgICAgICBTZV9Hcm91cF9Qcm9kdWN0cy5kYXRhX3Byb2R1Y3RzID0gcHJvZHVjdHM7XG5cbiAgICAgICAgICAgICAgICAgICAgU2VfR3JvdXBfUHJvZHVjdHMuc2hvd0xpc3RQcm9kdWN0KFNlX0dyb3VwX1Byb2R1Y3RzLmRhdGFfcHJvZHVjdHMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIFNlX0dyb3VwX1Byb2R1Y3RzLnNob3dMaXN0UHJvZHVjdChudWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChyZXNwb25zZSwgZXJyb3JTdGF0dXMsIGVycm9yTXNnKSB7XG4gICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCByZXNwb25zZSApXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tcGxldGUgOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIFNlX0dyb3VwX1Byb2R1Y3RzLnhoclJlcXVlc3RTZWFyY2guYWJvcnQoKTtcbiAgICAgICAgICAgICAgICBTZV9Hcm91cF9Qcm9kdWN0cy54aHJSZXF1ZXN0U2VhcmNoID0gbnVsbDtcbiAgICAgICAgICAgICAgICAkKCcuc2VhcmNoX2dyb3VwIHNwYW4uc3Bpbm5lcicpLnJlbW92ZUNsYXNzKCAnaXMtYWN0aXZlJyApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgc2hvd0xpc3RQcm9kdWN0OiBmdW5jdGlvbiAoIHByb2R1Y3RzID0gbnVsbCApIHtcbiAgICAgICAgXG4gICAgICAgIGlmICggcHJvZHVjdHMgJiYgcHJvZHVjdHMubGVuZ3RoID4gMCApIHtcbiAgICAgICAgICAgIHZhciBodG1sID0gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiY2xvc2Utc2VhcmNoXCI+WDwvYnV0dG9uPic7XG4gICAgICAgICAgICBodG1sICs9ICc8ZGl2IGlkPVwibGlzdC1wcm9kdWN0c1wiPic7XG4gICAgICAgICAgICBmb3IoIHZhciBpID0gMDsgaTwgcHJvZHVjdHMubGVuZ3RoOyBpKysgKSB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBwcm9kdWN0c1tpXTtcbiAgICAgICAgICAgICAgICBodG1sICs9IGA8ZGl2IGNsYXNzPVwiaXRlbVwiIGRhdGEtcHItaWQ9XCIke2l9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2l0ZW0uaW1hZ2V9XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHItZGV0YWlsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7aXRlbS5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+R2nDoTogJHtpdGVtLnByaWNlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGh0bWwgKz0gJzwvZGl2Pic7XG4gICAgICAgICAgICAkKCcuc2VhcmNoX2dyb3VwICNsaXN0LXByb2R1Y3RzJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAkKCcuc2VhcmNoX2dyb3VwJykuYXBwZW5kKGh0bWwpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKCcuc2VhcmNoX2dyb3VwICNsaXN0LXByb2R1Y3RzJykucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc2V0UHJvZHVjdEdyb3VwOiBmdW5jdGlvbiAoZSkge1xuXG4gICAgICAgIGlmICggU2VfR3JvdXBfUHJvZHVjdHMuZGF0YV9wcm9kdWN0c19kaXNwbGF5Lmxlbmd0aCA+PSA4ICkge1xuICAgICAgICAgICAgYWxlcnQoJ03hu5dpIG5ow7NtIGNow7puZyB0w7RpIGNo4buJIGjhu5cgdHLhu6MgdOG7kWkgxJFhIDggc+G6o24gcGjhuqltIScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGluZGV4ID0gJCh0aGlzKS5hdHRyKCdkYXRhLXByLWlkJyk7XG4gICAgICAgIGlmICggU2VfR3JvdXBfUHJvZHVjdHMuZGF0YV9wcm9kdWN0cyA9PSBudWxsIHx8IFNlX0dyb3VwX1Byb2R1Y3RzLmxlbmd0aCA8IGluZGV4ICkgcmV0dXJuO1xuXG4gICAgICAgIHZhciBpdGVtID0gU2VfR3JvdXBfUHJvZHVjdHMuZGF0YV9wcm9kdWN0c1tpbmRleF07XG4gICAgICAgIFxuICAgICAgICBpZiAoICFTZV9Hcm91cF9Qcm9kdWN0cy5jaGVja1Byb2R1Y3RJZFNlbGVjdGVkKCBpdGVtLklEICkgKSB7XG5cbiAgICAgICAgICAgIGlmICggU2VfR3JvdXBfUHJvZHVjdHMuZ3JvdXBfY29udHJvbGxlci5pdGVtU2VsZWN0ZWQgKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoICF0eXBlb2YgaXRlbSA9PT0gJ3VuZGVmaW5lZCcgfHwgIVNlX0dyb3VwX1Byb2R1Y3RzLmdyb3VwX2NvbnRyb2xsZXIuaXRlbVNlbGVjdGVkLnByb2R1Y3RzIHx8IFNlX0dyb3VwX1Byb2R1Y3RzLmdyb3VwX2NvbnRyb2xsZXIuaXRlbVNlbGVjdGVkLnByb2R1Y3RzLmluZGV4T2YoIGl0ZW0uSUQgKSA8IDAgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gU2VfR3JvdXBfUHJvZHVjdHMuZ3JvdXBfY29udHJvbGxlci5pdGVtU2VsZWN0ZWQucHJvZHVjdHMucHVzaChpdGVtLklEKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gU2VfR3JvdXBfUHJvZHVjdHMuZ3JvdXBfY29udHJvbGxlci51cGRhdGVTZWxlY3RlZERhdGEoKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgU2VfR3JvdXBfUHJvZHVjdHMuZGF0YV9wcm9kdWN0c19kaXNwbGF5LnB1c2goIGl0ZW0gKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgU2VfR3JvdXBfUHJvZHVjdHMucmVuZGVyTGlzdFByb2R1Y3RTZWxlY3RlZCggU2VfR3JvdXBfUHJvZHVjdHMuZGF0YV9wcm9kdWN0c19kaXNwbGF5ICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xuICAgIH0sXG5cbiAgICByZW5kZXJMaXN0UHJvZHVjdFNlbGVjdGVkOiBmdW5jdGlvbiAoIHByb2R1Y3RzID0gbnVsbCApIHtcbiAgICAgICAgaWYgKCBwcm9kdWN0cyAhPT0gbnVsbCAmJiBwcm9kdWN0cy5sZW5ndGggPiAwICkge1xuICAgICAgICAgICAgdmFyIGh0bWwgPSAnJztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9yKCB2YXIgaSA9IDA7IGk8IHByb2R1Y3RzLmxlbmd0aDsgaSsrICkge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gcHJvZHVjdHNbaV07XG4gICAgICAgICAgICAgICAgaHRtbCArPSBgPGRpdiBjbGFzcz1cIml0ZW1cIiBkYXRhLXByLWlkPVwiJHtpfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGVsZXRlXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpdGVtLmltYWdlfVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwci1kZXRhaWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7aXRlbS5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkdpw6E6ICR7aXRlbS5wcmljZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibW92ZSBtb3ZlX3VwXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibW92ZSBtb3ZlX2Rvd25cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJCgnI2xpc3QtcHJvZHVjdC1zZWxlY3RlZCcpLmh0bWwoJycpO1xuICAgICAgICAgICAgJCgnI2xpc3QtcHJvZHVjdC1zZWxlY3RlZCcpLmh0bWwoaHRtbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKCcjbGlzdC1wcm9kdWN0LXNlbGVjdGVkJykuaHRtbCgnJyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgcmVuZGVyTGlzdFByb2R1Y3RTZWxlY3RlZElEczogZnVuY3Rpb24gKCBpdGVtU2VsZWN0ZWQgKSB7XG4gICAgICAgIGlmICggU2VfR3JvdXBfUHJvZHVjdHMueGhyUmVxdWVzdEdldFByb2R1Y3RzICE9IG51bGwgKSByZXR1cm47XG4gICAgICAgIHZhciBpZHMgPSBpdGVtU2VsZWN0ZWQucHJvZHVjdHM7XG4gICAgICAgIGlmICggaWRzID09IG51bGwgfHwgaWRzLmxlbmd0aCA8PSAwICkge1xuICAgICAgICAgICAgU2VfR3JvdXBfUHJvZHVjdHMucmVuZGVyTGlzdFByb2R1Y3RTZWxlY3RlZChudWxsKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIFNlX0dyb3VwX1Byb2R1Y3RzLnhoclJlcXVlc3RHZXRQcm9kdWN0cyA9IGpRdWVyeS5hamF4KHtcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgICAgIHVybDogc2VfYWRtaW5fYWpheCxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdzZV9nZXRfcHJvZHVjdF9kYXRhJyxcbiAgICAgICAgICAgICAgICBmbiA6ICdwb3N0X2FqYXhfc2VhcmNoJyxcbiAgICAgICAgICAgICAgICBpZHMgOiBpZHNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgalF1ZXJ5KCdib2R5JykuYWRkQ2xhc3MoJ2dlYXJ2bl9sb2FkaW5nJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb2R1Y3RzID0gcmVzcG9uc2UuZGF0YS5wcm9kdWN0cztcbiAgICAgICAgICAgICAgICAgICAgU2VfR3JvdXBfUHJvZHVjdHMuZGF0YV9wcm9kdWN0cyA9IHByb2R1Y3RzO1xuICAgICAgICAgICAgICAgICAgICBTZV9Hcm91cF9Qcm9kdWN0cy5kYXRhX3Byb2R1Y3RzX2Rpc3BsYXkgPSBwcm9kdWN0cztcbiAgICAgICAgICAgICAgICAgICAgU2VfR3JvdXBfUHJvZHVjdHMucmVuZGVyTGlzdFByb2R1Y3RTZWxlY3RlZCggU2VfR3JvdXBfUHJvZHVjdHMuZGF0YV9wcm9kdWN0c19kaXNwbGF5ICk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgU2VfR3JvdXBfUHJvZHVjdHMucmVuZGVyTGlzdFByb2R1Y3RTZWxlY3RlZChudWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChyZXNwb25zZSwgZXJyb3JTdGF0dXMsIGVycm9yTXNnKSB7XG4gICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCByZXNwb25zZSApXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tcGxldGUgOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIFNlX0dyb3VwX1Byb2R1Y3RzLnhoclJlcXVlc3RHZXRQcm9kdWN0cy5hYm9ydCgpO1xuICAgICAgICAgICAgICAgIFNlX0dyb3VwX1Byb2R1Y3RzLnhoclJlcXVlc3RHZXRQcm9kdWN0cyA9IG51bGw7XG4gICAgICAgICAgICAgICAgalF1ZXJ5KCdib2R5JykucmVtb3ZlQ2xhc3MoJ2dlYXJ2bl9sb2FkaW5nJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICByZW1vdmVQcm9kdWN0OiBmdW5jdGlvbiAoZSkge1xuICAgICAgICBsZXQgaW5kZXggPSAkKCQodGhpcykucGFyZW50KCkpLmF0dHIoJ2RhdGEtcHItaWQnKTtcbiAgICAgICAgaWYgKCB0eXBlb2YgaW5kZXggPT0gJ3VuZGVmaW5lZCcgfHwgaW5kZXggPT0gbnVsbCApIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIFNlX0dyb3VwX1Byb2R1Y3RzLmRhdGFfcHJvZHVjdHNfZGlzcGxheS5zcGxpY2UoaW5kZXgsMSk7XG5cbiAgICAgICAgaWYgKCBTZV9Hcm91cF9Qcm9kdWN0cy5ncm91cF9jb250cm9sbGVyLml0ZW1TZWxlY3RlZCApIHtcbiAgICAgICAgICAgIC8vIFNlX0dyb3VwX1Byb2R1Y3RzLmdyb3VwX2NvbnRyb2xsZXIuaXRlbVNlbGVjdGVkLnByb2R1Y3RzLnNwbGljZShpbmRleCwxKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gU2VfR3JvdXBfUHJvZHVjdHMuZ3JvdXBfY29udHJvbGxlci51cGRhdGVTZWxlY3RlZERhdGEoKTtcbiAgICAgICAgICAgIFNlX0dyb3VwX1Byb2R1Y3RzLnJlbmRlckxpc3RQcm9kdWN0U2VsZWN0ZWQoIFNlX0dyb3VwX1Byb2R1Y3RzLmRhdGFfcHJvZHVjdHNfZGlzcGxheSApO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHJlc2V0RGF0YTogZnVuY3Rpb24oICkge1xuICAgICAgICBTZV9Hcm91cF9Qcm9kdWN0cy54aHJSZXF1ZXN0U2VhcmNoID0gbnVsbDtcbiAgICAgICAgU2VfR3JvdXBfUHJvZHVjdHMueGhyUmVxdWVzdEdldFByb2R1Y3RzID0gbnVsbDtcbiAgICAgICAgU2VfR3JvdXBfUHJvZHVjdHMuZGF0YV9wcm9kdWN0cyA9IG51bGw7XG4gICAgICAgIFNlX0dyb3VwX1Byb2R1Y3RzLmRhdGFfcHJvZHVjdHNfZGlzcGxheT0gW107XG4gICAgICAgIFNlX0dyb3VwX1Byb2R1Y3RzLnJlbmRlckxpc3RQcm9kdWN0U2VsZWN0ZWQobnVsbCk7XG4gICAgfSxcblxuICAgIGNoZWNrUHJvZHVjdElkU2VsZWN0ZWQ6IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICBmb3IoIGxldCBpbmRleCBpbiBTZV9Hcm91cF9Qcm9kdWN0cy5ncm91cF9jb250cm9sbGVyLmdyb3VwX3ZhbHVlcyApIHtcbiAgICAgICAgICAgIGlmICggU2VfR3JvdXBfUHJvZHVjdHMuZ3JvdXBfY29udHJvbGxlci5ncm91cF92YWx1ZXNbaW5kZXhdLnByb2R1Y3RzID09IG51bGxcbiAgICAgICAgICAgICAgICB8fCBTZV9Hcm91cF9Qcm9kdWN0cy5ncm91cF9jb250cm9sbGVyLmdyb3VwX3ZhbHVlc1tpbmRleF0ucHJvZHVjdHMubGVuZ3RoID09IDAgKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBpZiAoIFNlX0dyb3VwX1Byb2R1Y3RzLmdyb3VwX2NvbnRyb2xsZXIuZ3JvdXBfdmFsdWVzW2luZGV4XS5wcm9kdWN0cy5pbmRleE9mKGlkKSA+IC0xICkgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG5cbiAgICBtb3ZlVXBTRUdyb3VwOiBmdW5jdGlvbihlKSB7XG4gICAgICAgIGxldCBpbmRleCA9IHBhcnNlSW50KCQoJCh0aGlzKS5wYXJlbnQoKSkuYXR0cignZGF0YS1wci1pZCcpKTtcbiAgICAgICAgaWYoIGluZGV4ID09IG51bGwgKSBpbmRleCA9IDA7XG4gICAgICAgIGlmICggdHlwZW9mIGluZGV4ID09ICd1bmRlZmluZWQnIHx8IGluZGV4ID09IG51bGwgKSByZXR1cm47XG4gICAgICAgIGlmICggaW5kZXggPT0gMCApIHJldHVybjtcblxuICAgICAgICBsZXQgaXRlbSA9IFNlX0dyb3VwX1Byb2R1Y3RzLmRhdGFfcHJvZHVjdHNfZGlzcGxheVtpbmRleF07XG4gICAgICAgIFNlX0dyb3VwX1Byb2R1Y3RzLmRhdGFfcHJvZHVjdHNfZGlzcGxheVtpbmRleF0gPSBTZV9Hcm91cF9Qcm9kdWN0cy5kYXRhX3Byb2R1Y3RzX2Rpc3BsYXlbaW5kZXgtMV07XG4gICAgICAgIFNlX0dyb3VwX1Byb2R1Y3RzLmRhdGFfcHJvZHVjdHNfZGlzcGxheVtpbmRleC0xXSA9IGl0ZW07XG5cbiAgICAgICAgbGV0IGFyclBycyA9IFtdO1xuICAgICAgICBmb3IoIGxldCBpIGluIFNlX0dyb3VwX1Byb2R1Y3RzLmRhdGFfcHJvZHVjdHNfZGlzcGxheSApIHtcbiAgICAgICAgICAgIGFyclBycy5wdXNoKCBTZV9Hcm91cF9Qcm9kdWN0cy5kYXRhX3Byb2R1Y3RzX2Rpc3BsYXlbaV0uSUQgKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTZV9Hcm91cF9Qcm9kdWN0cy5ncm91cF9jb250cm9sbGVyLml0ZW1TZWxlY3RlZC5wcm9kdWN0cyA9IGFyclBycztcbiAgICAgICAgLy8gU2VfR3JvdXBfUHJvZHVjdHMuZ3JvdXBfY29udHJvbGxlci51cGRhdGVTZWxlY3RlZERhdGEoKTtcbiAgICAgICAgU2VfR3JvdXBfUHJvZHVjdHMucmVuZGVyTGlzdFByb2R1Y3RTZWxlY3RlZCggIFNlX0dyb3VwX1Byb2R1Y3RzLmRhdGFfcHJvZHVjdHNfZGlzcGxheSApO1xuICAgIH0sXG5cbiAgICBtb3ZlRG93blNFR3JvdXA6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gcGFyc2VJbnQoJCgkKHRoaXMpLnBhcmVudCgpKS5hdHRyKCdkYXRhLXByLWlkJykpO1xuICAgICAgICBpZiggaW5kZXggPT0gbnVsbCApIGluZGV4ID0gMDtcblxuICAgICAgICBpZiAoIHR5cGVvZiBpbmRleCA9PSAndW5kZWZpbmVkJyB8fCBpbmRleCA9PSBudWxsICkgcmV0dXJuO1xuICAgICAgICBpZiAoIGluZGV4ID09IFNlX0dyb3VwX1Byb2R1Y3RzLmRhdGFfcHJvZHVjdHNfZGlzcGxheS5sZW5ndGggLTEgKSByZXR1cm47XG5cbiAgICAgICAgbGV0IGl0ZW0gPSBTZV9Hcm91cF9Qcm9kdWN0cy5kYXRhX3Byb2R1Y3RzX2Rpc3BsYXlbaW5kZXhdO1xuICAgICAgICBTZV9Hcm91cF9Qcm9kdWN0cy5kYXRhX3Byb2R1Y3RzX2Rpc3BsYXlbaW5kZXhdID0gU2VfR3JvdXBfUHJvZHVjdHMuZGF0YV9wcm9kdWN0c19kaXNwbGF5W2luZGV4ICsgMV07XG4gICAgICAgIFNlX0dyb3VwX1Byb2R1Y3RzLmRhdGFfcHJvZHVjdHNfZGlzcGxheVtpbmRleCArIDFdID0gaXRlbTtcbiAgICAgICAgXG5cbiAgICAgICAgbGV0IGFyclBycyA9IFtdO1xuICAgICAgICBmb3IoIGxldCBpIGluIFNlX0dyb3VwX1Byb2R1Y3RzLmRhdGFfcHJvZHVjdHNfZGlzcGxheSApIHtcbiAgICAgICAgICAgIGFyclBycy5wdXNoKCBTZV9Hcm91cF9Qcm9kdWN0cy5kYXRhX3Byb2R1Y3RzX2Rpc3BsYXlbaV0uSUQgKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTZV9Hcm91cF9Qcm9kdWN0cy5ncm91cF9jb250cm9sbGVyLml0ZW1TZWxlY3RlZC5wcm9kdWN0cyA9IGFyclBycztcbiAgICAgICAgLy8gU2VfR3JvdXBfUHJvZHVjdHMuZ3JvdXBfY29udHJvbGxlci51cGRhdGVTZWxlY3RlZERhdGEoKTtcbiAgICAgICAgU2VfR3JvdXBfUHJvZHVjdHMucmVuZGVyTGlzdFByb2R1Y3RTZWxlY3RlZCggIFNlX0dyb3VwX1Byb2R1Y3RzLmRhdGFfcHJvZHVjdHNfZGlzcGxheSApO1xuICAgIH0sXG5cbiAgICB1cGRhdGVMaXN0UHJvZHVjdDogZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAoIFNlX0dyb3VwX1Byb2R1Y3RzLnhoclJlcXVlc3RHZXRQcm9kdWN0cyAhPSBudWxsICkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBhcnJQcnMgPSBbXTtcbiAgICAgICAgZm9yKCBsZXQgaSBpbiBTZV9Hcm91cF9Qcm9kdWN0cy5kYXRhX3Byb2R1Y3RzX2Rpc3BsYXkgKSB7XG4gICAgICAgICAgICBhcnJQcnMucHVzaCggU2VfR3JvdXBfUHJvZHVjdHMuZGF0YV9wcm9kdWN0c19kaXNwbGF5W2ldLklEICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCBhcnJQcnMubGVuZ3RoIDw9IDAgKSByZXR1cm47XG5cblxuICAgICAgICBTZV9Hcm91cF9Qcm9kdWN0cy54aHJSZXF1ZXN0R2V0UHJvZHVjdHMgPSBqUXVlcnkuYWpheCh7XG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgICAgICB1cmw6IHNlX2FkbWluX2FqYXgsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnc2VfdXBkYXRlX3Byb2R1Y3RfZGF0YScsXG4gICAgICAgICAgICAgICAgZ3JvdXBfaWQ6IFNlX0dyb3VwX1Byb2R1Y3RzLmdyb3VwX2NvbnRyb2xsZXIuaXRlbVNlbGVjdGVkLklELFxuICAgICAgICAgICAgICAgIGlkcyA6IGFyclByc1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBqUXVlcnkoJ2JvZHknKS5hZGRDbGFzcygnZ2VhcnZuX2xvYWRpbmcnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICBTZV9Hcm91cF9Qcm9kdWN0cy5ncm91cF9jb250cm9sbGVyLml0ZW1TZWxlY3RlZC5wcm9kdWN0cyA9IGFyclBycztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBTZV9Hcm91cF9Qcm9kdWN0cy5yZW5kZXJMaXN0UHJvZHVjdFNlbGVjdGVkKG51bGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHJlc3BvbnNlLCBlcnJvclN0YXR1cywgZXJyb3JNc2cpIHtcbiAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coIHJlc3BvbnNlIClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21wbGV0ZSA6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgU2VfR3JvdXBfUHJvZHVjdHMueGhyUmVxdWVzdEdldFByb2R1Y3RzLmFib3J0KCk7XG4gICAgICAgICAgICAgICAgU2VfR3JvdXBfUHJvZHVjdHMueGhyUmVxdWVzdEdldFByb2R1Y3RzID0gbnVsbDtcbiAgICAgICAgICAgICAgICBqUXVlcnkoJ2JvZHknKS5yZW1vdmVDbGFzcygnZ2VhcnZuX2xvYWRpbmcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNlX0dyb3VwX1Byb2R1Y3RzOyJdLCJzb3VyY2VSb290IjoiIn0=