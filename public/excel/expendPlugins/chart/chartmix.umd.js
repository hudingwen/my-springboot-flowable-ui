(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("echarts"), require("Vuex"), require("Vue"));
	else if(typeof define === 'function' && define.amd)
		define(["echarts", "Vuex", "Vue"], factory);
	else if(typeof exports === 'object')
		exports["chartmix"] = factory(require("echarts"), require("Vuex"), require("Vue"));
	else
		root["chartmix"] = factory(root["echarts"], root["Vuex"], root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__164e__, __WEBPACK_EXTERNAL_MODULE__5880__, __WEBPACK_EXTERNAL_MODULE__8bbf__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00fd":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("9e69");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "03dd":
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__("eac5"),
    nativeKeys = __webpack_require__("57a5");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "0644":
/***/ (function(module, exports, __webpack_require__) {

var baseClone = __webpack_require__("3818");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

module.exports = cloneDeep;


/***/ }),

/***/ "07c7":
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "087d":
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ "0b07":
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__("34ac"),
    getValue = __webpack_require__("3698");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "0d24":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__("2b3e"),
    stubFalse = __webpack_require__("07c7");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("62e4")(module)))

/***/ }),

/***/ "0f0f":
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__("8eeb"),
    keysIn = __webpack_require__("9934");

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),

/***/ "100e":
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__("cd9d"),
    overRest = __webpack_require__("2286"),
    setToString = __webpack_require__("c1c9");

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),

/***/ "1041":
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__("8eeb"),
    getSymbolsIn = __webpack_require__("a029");

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),

/***/ "1157":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.6.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2022-08-26T17:52Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket trac-14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

		// Support: Chrome <=57, Firefox <=52
		// In some browsers, typeof returns "function" for HTML <object> elements
		// (i.e., `typeof document.createElement( "object" ) === "function"`).
		// We don't want to classify *any* DOM node as a function.
		// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
		// Plus for old WebKit, typeof returns "function" for HTML collections
		// (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
		return typeof obj === "function" && typeof obj.nodeType !== "number" &&
			typeof obj.item !== "function";
	};


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.6.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
						[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( _i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.6
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2021-02-16
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem && elem.namespaceURI,
		docElem = elem && ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {

		// If no nodeType, this is expected to be an array
		while ( ( node = elem[ i++ ] ) ) {

			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {

			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {

								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :

			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?

				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

	return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

}
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (trac-9521)
	// Strict HTML recognition (trac-11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the primary Deferred
			primary = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						primary.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, primary.done( updateFunc( i ) ).resolve, primary.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( primary.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return primary.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), primary.reject );
		}

		return primary.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See trac-6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (trac-9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see trac-8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (trac-14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (trac-11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (trac-14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (trac-13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (trac-15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (trac-12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
				dataPriv.get( this, "events" ) || Object.create( null )
			)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (trac-13208)
				// Don't process clicks on disabled elements (trac-6911, trac-8165, trac-11382, trac-11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (trac-13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
						return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
						return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();

						// Support: Chrome 86+
						// In Chrome, if an element having a focusout handler is blurred by
						// clicking outside of it, it invokes the handler synchronously. If
						// that handler calls `.remove()` on the element, the data is cleared,
						// leaving `result` undefined. We need to guard against this.
						return result && result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (trac-504, trac-13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,
	which: true
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		// Suppress native focus or blur if we're currently inside
		// a leveraged native-event stack
		_default: function( event ) {
			return dataPriv.get( event.target, type );
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,

	rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (trac-8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {

							// Unwrap a CDATA section containing script contents. This shouldn't be
							// needed as in XML documents they're already not visible when
							// inspecting element contents and in HTML documents they have no
							// meaning but we're preserving that logic for backwards compatibility.
							// This will be removed completely in 4.0. See gh-4904.
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var rcustomProp = /^--/;


var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (trac-15098, trac-14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );

var whitespace = "[\\x20\\t\\r\\n\\f]";


var rtrimCSS = new RegExp(
	"^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
	"g"
);




( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (trac-8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		//
		// Support: Firefox 70+
		// Only Firefox includes border widths
		// in computed dimensions. (gh-4529)
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
				tr.style.cssText = "border:1px solid";

				// Support: Chrome 86+
				// Height set through cssText does not get applied.
				// Computed height then comes back as 0.
				tr.style.height = "1px";
				trChild.style.height = "9px";

				// Support: Android 8 Chrome 86+
				// In our bodyBackground.html iframe,
				// display for all div elements is set to "inline",
				// which causes a problem only in Android 8 Chrome 86.
				// Ensuring the div is display: block
				// gets around this issue.
				trChild.style.display = "block";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = ( parseInt( trStyle.height, 10 ) +
					parseInt( trStyle.borderTopWidth, 10 ) +
					parseInt( trStyle.borderBottomWidth, 10 ) ) === tr.offsetHeight;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		isCustomProp = rcustomProp.test( name ),

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, trac-12537)
	//   .css('--customProperty) (gh-3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		// trim whitespace for custom property (issue gh-4926)
		if ( isCustomProp ) {

			// rtrim treats U+000D CARRIAGE RETURN and U+000C FORM FEED
			// as whitespace while CSS does not, but this is not a problem
			// because CSS preprocessing replaces them with U+000A LINE FEED
			// (which *is* CSS whitespace)
			// https://www.w3.org/TR/css-syntax-3/#input-preprocessing
			ret = ret.replace( rtrimCSS, "$1" );
		}

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (trac-7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug trac-9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (trac-7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
					swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, dimension, extra );
					} ) :
					getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
			) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
				jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

				/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (trac-12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
					animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};

		doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// Use proper attribute retrieval (trac-12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classNames, cur, curValue, className, i, finalValue;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classNames = classesToArray( value );

		if ( classNames.length ) {
			return this.each( function() {
				curValue = getClass( this );
				cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					for ( i = 0; i < classNames.length; i++ ) {
						className = classNames[ i ];
						if ( cur.indexOf( " " + className + " " ) < 0 ) {
							cur += className + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						this.setAttribute( "class", finalValue );
					}
				}
			} );
		}

		return this;
	},

	removeClass: function( value ) {
		var classNames, cur, curValue, className, i, finalValue;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classNames = classesToArray( value );

		if ( classNames.length ) {
			return this.each( function() {
				curValue = getClass( this );

				// This expression is here for better compressibility (see addClass)
				cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					for ( i = 0; i < classNames.length; i++ ) {
						className = classNames[ i ];

						// Remove *all* instances
						while ( cur.indexOf( " " + className + " " ) > -1 ) {
							cur = cur.replace( " " + className + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						this.setAttribute( "class", finalValue );
					}
				}
			} );
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var classNames, className, i, self,
			type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		classNames = classesToArray( value );

		return this.each( function() {
			if ( isValidValue ) {

				// Toggle individual class names
				self = jQuery( this );

				for ( i = 0; i < classNames.length; i++ ) {
					className = classNames[ i ];

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
				return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (trac-14686, trac-14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (trac-2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (trac-9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (trac-9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || Object.create( null ) )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (trac-6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, parserErrorElem;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {}

	parserErrorElem = xml && xml.getElementsByTagName( "parsererror" )[ 0 ];
	if ( !xml || parserErrorElem ) {
		jQuery.error( "Invalid XML: " + (
			parserErrorElem ?
				jQuery.map( parserErrorElem.childNodes, function( el ) {
					return el.textContent;
				} ).join( "\n" ) :
				data
		) );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} ).filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} ).map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// trac-7653, trac-8125, trac-8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (trac-10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );

originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes trac-9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (trac-10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket trac-12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (trac-15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// trac-9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script but not if jsonp
			if ( !isSuccess &&
				jQuery.inArray( "script", s.dataTypes ) > -1 &&
				jQuery.inArray( "json", s.dataTypes ) < 0 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (trac-11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// trac-1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see trac-8605, trac-14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// trac-14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( {
		padding: "inner" + name,
		content: type,
		"": "outer" + name
	}, function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each(
	( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	}
);




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
// Require that the "whitespace run" starts from a non-whitespace
// to avoid O(N^2) behavior when the engine would try matching "\s+$" at each space position.
var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "$1" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (trac-7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (trac-13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "1290":
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "1310":
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "1368":
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__("da03");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "164e":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__164e__;

/***/ }),

/***/ "1a2d":
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__("42a2"),
    isObjectLike = __webpack_require__("1310");

/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;


/***/ }),

/***/ "1a8c":
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "1bac":
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__("7d1f"),
    getSymbolsIn = __webpack_require__("a029"),
    keysIn = __webpack_require__("9934");

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),

/***/ "1c3c":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("9e69"),
    Uint8Array = __webpack_require__("2474"),
    eq = __webpack_require__("9638"),
    equalArrays = __webpack_require__("a2be"),
    mapToArray = __webpack_require__("edfa"),
    setToArray = __webpack_require__("ac41");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),

/***/ "1cec":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("0b07"),
    root = __webpack_require__("2b3e");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "1efc":
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "1fc8":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("4245");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "2286":
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__("85e3");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),

/***/ "2474":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("2b3e");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "2478":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("4245");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "2524":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("6044");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "253c":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("3729"),
    isObjectLike = __webpack_require__("1310");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "28c9":
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "29f3":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "2b3e":
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__("585a");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "2d7c":
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ "2dcb":
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__("91e9");

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ "2ec1":
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__("100e"),
    isIterateeCall = __webpack_require__("9aff");

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),

/***/ "2fcc":
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "30c9":
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__("9520"),
    isLength = __webpack_require__("b218");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "32b3":
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__("872a"),
    eq = __webpack_require__("9638");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "32f4":
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__("2d7c"),
    stubArray = __webpack_require__("d327");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ "34ac":
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__("9520"),
    isMasked = __webpack_require__("1368"),
    isObject = __webpack_require__("1a8c"),
    toSource = __webpack_require__("dc57");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "3698":
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "3729":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("9e69"),
    getRawTag = __webpack_require__("00fd"),
    objectToString = __webpack_require__("29f3");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "3818":
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__("7e64"),
    arrayEach = __webpack_require__("8057"),
    assignValue = __webpack_require__("32b3"),
    baseAssign = __webpack_require__("5b01"),
    baseAssignIn = __webpack_require__("0f0f"),
    cloneBuffer = __webpack_require__("e538"),
    copyArray = __webpack_require__("4359"),
    copySymbols = __webpack_require__("54eb"),
    copySymbolsIn = __webpack_require__("1041"),
    getAllKeys = __webpack_require__("a994"),
    getAllKeysIn = __webpack_require__("1bac"),
    getTag = __webpack_require__("42a2"),
    initCloneArray = __webpack_require__("c87c"),
    initCloneByTag = __webpack_require__("c2b6"),
    initCloneObject = __webpack_require__("fa21"),
    isArray = __webpack_require__("6747"),
    isBuffer = __webpack_require__("0d24"),
    isMap = __webpack_require__("cc45"),
    isObject = __webpack_require__("1a8c"),
    isSet = __webpack_require__("d7ee"),
    keys = __webpack_require__("ec69"),
    keysIn = __webpack_require__("9934");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),

/***/ "39ff":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("0b07"),
    root = __webpack_require__("2b3e");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "3b4a":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("0b07");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ "41c3":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("1a8c"),
    isPrototype = __webpack_require__("eac5"),
    nativeKeysIn = __webpack_require__("ec8c");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ "4245":
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__("1290");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "42454":
/***/ (function(module, exports, __webpack_require__) {

var baseMerge = __webpack_require__("f909"),
    createAssigner = __webpack_require__("2ec1");

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

module.exports = merge;


/***/ }),

/***/ "4284":
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),

/***/ "42a2":
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__("b5a7"),
    Map = __webpack_require__("79bc"),
    Promise = __webpack_require__("1cec"),
    Set = __webpack_require__("c869"),
    WeakMap = __webpack_require__("39ff"),
    baseGetTag = __webpack_require__("3729"),
    toSource = __webpack_require__("dc57");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "4359":
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ "49f4":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("6044");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "4f4d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};


/***/ }),

/***/ "4f50":
/***/ (function(module, exports, __webpack_require__) {

var assignMergeValue = __webpack_require__("b760"),
    cloneBuffer = __webpack_require__("e538"),
    cloneTypedArray = __webpack_require__("c8fe"),
    copyArray = __webpack_require__("4359"),
    initCloneObject = __webpack_require__("fa21"),
    isArguments = __webpack_require__("d370"),
    isArray = __webpack_require__("6747"),
    isArrayLikeObject = __webpack_require__("dcbe"),
    isBuffer = __webpack_require__("0d24"),
    isFunction = __webpack_require__("9520"),
    isObject = __webpack_require__("1a8c"),
    isPlainObject = __webpack_require__("60ed"),
    isTypedArray = __webpack_require__("73ac"),
    safeGet = __webpack_require__("8adb"),
    toPlainObject = __webpack_require__("8de2");

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;


/***/ }),

/***/ "50d8":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "54eb":
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__("8eeb"),
    getSymbols = __webpack_require__("32f4");

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),

/***/ "55a3":
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "57a5":
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__("91e9");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "585a":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "5880":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__5880__;

/***/ }),

/***/ "5b01":
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__("8eeb"),
    keys = __webpack_require__("ec69");

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),

/***/ "5d89":
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__("f8af");

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),

/***/ "5e2e":
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__("28c9"),
    listCacheDelete = __webpack_require__("69d5"),
    listCacheGet = __webpack_require__("b4c0"),
    listCacheHas = __webpack_require__("fba5"),
    listCacheSet = __webpack_require__("67ca");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "6044":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("0b07");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "60ed":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("3729"),
    getPrototype = __webpack_require__("2dcb"),
    isObjectLike = __webpack_require__("1310");

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),

/***/ "62e4":
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "63ea":
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__("c05f");

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

module.exports = isEqual;


/***/ }),

/***/ "6747":
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "67ca":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("cb5a");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "69d5":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("cb5a");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "6f6c":
/***/ (function(module, exports) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),

/***/ "6fcd":
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__("50d8"),
    isArguments = __webpack_require__("d370"),
    isArray = __webpack_require__("6747"),
    isBuffer = __webpack_require__("0d24"),
    isIndex = __webpack_require__("c098"),
    isTypedArray = __webpack_require__("73ac");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "72af":
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__("99cd");

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ "72f0":
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),

/***/ "73ac":
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__("743f"),
    baseUnary = __webpack_require__("b047"),
    nodeUtil = __webpack_require__("99d3");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "743f":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("3729"),
    isLength = __webpack_require__("b218"),
    isObjectLike = __webpack_require__("1310");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "7530":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("1a8c");

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ "77ad":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartSetting_vue_vue_type_style_index_0_id_dc2be93c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a520");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartSetting_vue_vue_type_style_index_0_id_dc2be93c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartSetting_vue_vue_type_style_index_0_id_dc2be93c_prod_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "79bc":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("0b07"),
    root = __webpack_require__("2b3e");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "7a48":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("6044");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "7b83":
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__("7c64"),
    mapCacheDelete = __webpack_require__("93ed"),
    mapCacheGet = __webpack_require__("2478"),
    mapCacheHas = __webpack_require__("a524"),
    mapCacheSet = __webpack_require__("1fc8");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "7b97":
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__("7e64"),
    equalArrays = __webpack_require__("a2be"),
    equalByTag = __webpack_require__("1c3c"),
    equalObjects = __webpack_require__("b1e5"),
    getTag = __webpack_require__("42a2"),
    isArray = __webpack_require__("6747"),
    isBuffer = __webpack_require__("0d24"),
    isTypedArray = __webpack_require__("73ac");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),

/***/ "7c64":
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__("e24b"),
    ListCache = __webpack_require__("5e2e"),
    Map = __webpack_require__("79bc");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "7d1f":
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__("087d"),
    isArray = __webpack_require__("6747");

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ "7e64":
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__("5e2e"),
    stackClear = __webpack_require__("efb6"),
    stackDelete = __webpack_require__("2fcc"),
    stackGet = __webpack_require__("802a"),
    stackHas = __webpack_require__("55a3"),
    stackSet = __webpack_require__("d02c");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "7ed2":
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ "802a":
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "8057":
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),

/***/ "84a0":
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

	    return {

	        clustering: __webpack_require__(1),
	        regression: __webpack_require__(5),
	        statistics: __webpack_require__(6),
	        histogram: __webpack_require__(15),

	        transform: {
	            regression: __webpack_require__(18),
	            histogram: __webpack_require__(21),
	            clustering: __webpack_require__(22)
	        }

	    };

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

	    var dataProcess = __webpack_require__(2);
	    var dataPreprocess = dataProcess.dataPreprocess;
	    var normalizeDimensions = dataProcess.normalizeDimensions;
	    var arrayUtil = __webpack_require__(3);
	    var numberUtil = __webpack_require__(4);
	    var arraySize = arrayUtil.size;
	    var sumOfColumn = arrayUtil.sumOfColumn;
	    var arraySum = arrayUtil.sum;
	    var zeros = arrayUtil.zeros;
	    // var isArray = arrayUtil.isArray;
	    var numberUtil = __webpack_require__(4);
	    var isNumber = numberUtil.isNumber;
	    var mathPow = Math.pow;

	    var OutputType = {
	        /**
	         * Data are all in one. Cluster info are added as an attribute of data.
	         * ```ts
	         * type OutputDataSingle = {
	         *     // Each index of `data` is the index of the input data.
	         *     data: OutputDataItem[];
	         *     // The index of `centroids` is the cluster index.
	         *     centroids: [ValueOnX, ValueOnY][];
	         * };
	         * type InputDataItem = (ValueOnX | ValueOnY | OtherValue)[];
	         * type OutputDataItem = (...InputDataItem | ClusterIndex | SquareDistanceToCentroid)[];
	         * ```
	         */
	        SINGLE: 'single',
	        /**
	         * Data are separated by cluster. Suitable for retrieving data form each cluster.
	         * ```ts
	         * type OutputDataMultiple = {
	         *     // Each index of `clusterAssment` is the index of the input data.
	         *     clusterAssment: [ClusterIndex, SquareDistanceToCentroid][];
	         *     // The index of `centroids` is the cluster index.
	         *     centroids: [ValueOnX, ValueOnY][];
	         *     // The index of `pointsInCluster` is the cluster index.
	         *     pointsInCluster: DataItemListInOneCluster[];
	         * }
	         * type DataItemListInOneCluster = InputDataItem[];
	         * type InputDataItem = (ValueOnX | ValueOnY | OtherValue)[];
	         * type SquareDistanceToCentroid = number;
	         * type ClusterIndex = number;
	         * type ValueOnX = number;
	         * type ValueOnY = number;
	         * type OtherValue = unknown;
	         * ```
	         */
	        MULTIPLE: 'multiple'
	    }

	    /**
	     * KMeans of clustering algorithm.
	     * @param {Array.<Array.<number>>} data two-dimension array
	     * @param {number} k the number of clusters in a dataset
	     * @return {Object}
	     */
	    function kMeans(data, k, dataMeta) {

	        // create array to assign data points to centroids, also holds SE of each point
	        var clusterAssigned = zeros(data.length, 2);
	        var centroids = createRandCent(k, calcExtents(data, dataMeta.dimensions));
	        var clusterChanged = true;
	        var minDist;
	        var minIndex;
	        var distIJ;
	        var ptsInClust;

	        while (clusterChanged) {
	            clusterChanged = false;
	            for (var i = 0; i < data.length; i++) {
	                minDist = Infinity;
	                minIndex = -1;
	                for (var j = 0; j < k; j++) {
	                    distIJ = distEuclid(data[i], centroids[j], dataMeta);
	                    if (distIJ < minDist) {
	                        minDist = distIJ;
	                        minIndex = j;
	                    }
	                }
	                if (clusterAssigned[i][0] !== minIndex) {
	                    clusterChanged = true;
	                }
	                clusterAssigned[i][0] = minIndex;
	                clusterAssigned[i][1] = minDist;
	            }
	            //recalculate centroids
	            for (var i = 0; i < k; i++) {
	                ptsInClust = [];
	                for (var j = 0; j < clusterAssigned.length; j++) {
	                    if (clusterAssigned[j][0] === i) {
	                        ptsInClust.push(data[j]);
	                    }
	                }
	                centroids[i] = meanInColumns(ptsInClust, dataMeta);
	            }
	        }

	        var clusterWithKmeans = {
	            centroids: centroids,
	            clusterAssigned: clusterAssigned
	        };
	        return clusterWithKmeans;
	    }

	    /**
	     * Calculate the average of each column in a two-dimensional array
	     * and returns the values as an array.
	     */
	    function meanInColumns(dataList, dataMeta) {
	        var meanArray = [];
	        var sum;
	        var mean;
	        for (var j = 0; j < dataMeta.dimensions.length; j++) {
	            var dimIdx = dataMeta.dimensions[j];
	            sum = 0;
	            for (var i = 0; i < dataList.length; i++) {
	                sum += dataList[i][dimIdx];
	            }
	            mean = sum / dataList.length;
	            meanArray.push(mean);
	        }
	        return meanArray;
	    }

	    /**
	     * The combine of hierarchical clustering and k-means.
	     * @param {Array} data two-dimension array.
	     * @param {Object|number} [clusterCountOrConfig] config or clusterCountOrConfig.
	     * @param {number} clusterCountOrConfig.clusterCount Mandatory.
	     *        The number of clusters in a dataset. It has to be greater than 1.
	     * @param {boolean} [clusterCountOrConfig.stepByStep=false] Optional.
	     * @param {OutputType} [clusterCountOrConfig.outputType='multiple'] Optional.
	     *        See `OutputType`.
	     * @param {number} [clusterCountOrConfig.outputClusterIndexDimension] Mandatory.
	     *        Only work in `OutputType.SINGLE`.
	     * @param {number} [clusterCountOrConfig.outputCentroidDimensions] Optional.
	     *        If specified, the centroid will be set to those dimensions of the result data one by one.
	     *        By default not set centroid to result.
	     *        Only work in `OutputType.SINGLE`.
	     * @param {Array.<number>} [clusterCountOrConfig.dimensions] Optional.
	     *        Target dimensions to calculate the regression.
	     *        By default: use all of the data.
	     * @return {Array} See `OutputType`.
	     */
	    function hierarchicalKMeans(data, clusterCountOrConfig, stepByStep) {
	        var config = (
	            isNumber(clusterCountOrConfig)
	                ? {clusterCount: clusterCountOrConfig, stepByStep: stepByStep}
	                : clusterCountOrConfig
	        ) || {clusterCount: 2};

	        var k = config.clusterCount;

	        if (k < 2) {
	            return;
	        }

	        var dataMeta = parseDataMeta(data, config);
	        var isOutputTypeSingle = dataMeta.outputType === OutputType.SINGLE;

	        var dataSet = dataPreprocess(data, {dimensions: dataMeta.dimensions});

	        var clusterAssment = zeros(dataSet.length, 2);
	        var outputSingleData;
	        var setClusterIndex;
	        var getClusterIndex;

	        function setDistance(dataIndex, dist) {
	            clusterAssment[dataIndex][1] = dist;
	        }
	        function getDistance(dataIndex) {
	            return clusterAssment[dataIndex][1];
	        };

	        if (isOutputTypeSingle) {
	            outputSingleData = [];
	            var outputClusterIndexDimension = dataMeta.outputClusterIndexDimension;

	            setClusterIndex = function (dataIndex, clusterIndex) {
	                outputSingleData[dataIndex][outputClusterIndexDimension] = clusterIndex;
	            };
	            getClusterIndex = function (dataIndex) {
	                return outputSingleData[dataIndex][outputClusterIndexDimension];
	            };

	            for (var i = 0; i < dataSet.length; i++) {
	                outputSingleData.push(dataSet[i].slice());
	                setDistance(i, 0);
	                setClusterIndex(i, 0);
	            }
	        }
	        else {
	            setClusterIndex = function (dataIndex, clusterIndex) {
	                clusterAssment[dataIndex][0] = clusterIndex;
	            };
	            getClusterIndex = function (dataIndex) {
	                return clusterAssment[dataIndex][0];
	            };
	        }

	        // initial center point.
	        var centroid0 = meanInColumns(dataSet, dataMeta);
	        var centList = [centroid0];
	        for (var i = 0; i < dataSet.length; i++) {
	            var dist = distEuclid(dataSet[i], centroid0, dataMeta);
	            setDistance(i, dist);
	        }

	        var lowestSSE;
	        var ptsInClust;
	        var ptsNotClust;
	        var clusterInfo;
	        var sseSplit;
	        var sseNotSplit;
	        var index = 1;
	        var result = {
	            data: outputSingleData,
	            centroids: centList,
	            isEnd: false
	        };
	        if (!isOutputTypeSingle) {
	            // Only for backward compat.
	            result.clusterAssment = clusterAssment;
	        }

	        function oneStep() {
	            //the existing clusters are continuously divided
	            //until the number of clusters is k
	            if (index < k) {
	                lowestSSE = Infinity;
	                var centSplit;
	                var newCentroid;
	                var newClusterAss;

	                for (var j = 0; j < centList.length; j++) {
	                    ptsInClust = [];
	                    ptsNotClust = [];
	                    for (var i = 0; i < dataSet.length; i++) {
	                        if (getClusterIndex(i) === j) {
	                            ptsInClust.push(dataSet[i]);
	                        }
	                        else {
	                            ptsNotClust.push(getDistance(i));
	                        }
	                    }
	                    clusterInfo = kMeans(ptsInClust, 2, dataMeta);
	                    sseSplit = sumOfColumn(clusterInfo.clusterAssigned, 1);
	                    sseNotSplit = arraySum(ptsNotClust);
	                    if (sseSplit + sseNotSplit < lowestSSE) {
	                        lowestSSE = sseNotSplit + sseSplit;
	                        centSplit = j;
	                        newCentroid = clusterInfo.centroids;
	                        newClusterAss = clusterInfo.clusterAssigned;
	                    }
	                }

	                for (var i = 0; i < newClusterAss.length; i++) {
	                    if (newClusterAss[i][0] === 0) {
	                        newClusterAss[i][0] = centSplit;
	                    }
	                    else if (newClusterAss[i][0] === 1) {
	                        newClusterAss[i][0] = centList.length;
	                    }
	                }

	                centList[centSplit] = newCentroid[0];
	                centList.push(newCentroid[1]);
	                for (var i = 0, j = 0; i < dataSet.length && j < newClusterAss.length; i++) {
	                    if (getClusterIndex(i) === centSplit) {
	                        setClusterIndex(i, newClusterAss[j][0]);
	                        setDistance(i, newClusterAss[j++][1]);
	                    }
	                }

	                var pointInClust = [];
	                if (!isOutputTypeSingle) {
	                    for (var i = 0; i < centList.length; i++) {
	                        pointInClust[i] = [];
	                        for (var j = 0; j < dataSet.length; j++) {
	                            if (getClusterIndex(j) === i) {
	                                pointInClust[i].push(dataSet[j]);
	                            }
	                        }
	                    }
	                    result.pointsInCluster = pointInClust;
	                }

	                index++;
	            }
	            else {
	                result.isEnd = true;
	            }
	        }

	        if (!config.stepByStep) {
	            while (oneStep(), !result.isEnd);
	        }
	        else {
	            result.next = function () {
	                oneStep();
	                setCentroidToResultData(result, dataMeta);
	                return result;
	            };
	        }
	        setCentroidToResultData(result, dataMeta);
	        return result;
	    }

	    function setCentroidToResultData(result, dataMeta) {
	        var outputCentroidDimensions = dataMeta.outputCentroidDimensions;
	        if (dataMeta.outputType !== OutputType.SINGLE || outputCentroidDimensions == null) {
	            return;
	        }
	        var outputSingleData = result.data;
	        var centroids = result.centroids;

	        for (var i = 0; i < outputSingleData.length; i++) {
	            var line = outputSingleData[i];
	            var clusterIndex = line[dataMeta.outputClusterIndexDimension];
	            var centroid = centroids[clusterIndex];
	            var dimLen = Math.min(centroid.length, outputCentroidDimensions.length);
	            for (var j = 0; j < dimLen; j++) {
	                line[outputCentroidDimensions[j]] = centroid[j];
	            }
	        }
	    }

	    /**
	     * Create random centroid of kmeans.
	     */
	    function createRandCent(k, extents) {
	        //constructs a two-dimensional array with all values 0
	        var centroids = zeros(k, extents.length);
	        //create random cluster centers, within bounds of each dimension
	        for (var j = 0; j < extents.length; j++) {
	            var extentItem = extents[j];
	            for (var i = 0; i < k; i++) {
	                centroids[i][j] = extentItem.min + extentItem.span * Math.random();
	            }
	        }
	        return centroids;
	    }

	    /**
	     * Distance method for calculating similarity
	     */
	    function distEuclid(dataItem, centroid, dataMeta) {
	        // The distance should be normalized between different dimensions,
	        // otherwise they may provide different weight in the final distance.
	        // The greater weight offers more effect in the cluster determination.

	        var powerSum = 0;
	        var dimensions = dataMeta.dimensions;
	        var extents = dataMeta.rawExtents;
	        //subtract the corresponding elements in the vectors
	        for (var i = 0; i < dimensions.length; i++) {
	            var span = extents[i].span;
	            // If span is 0, do not count.
	            if (span) {
	                var dimIdx = dimensions[i];
	                var dist = (dataItem[dimIdx] - centroid[i]) / span;
	                powerSum += mathPow(dist, 2);
	            }
	        }

	        return powerSum;
	    }

	    function parseDataMeta(dataSet, config) {
	        var size = arraySize(dataSet);
	        if (size.length < 1) {
	            throw new Error('The input data of clustering should be two-dimension array.');
	        }
	        var colCount = size[1];
	        var defaultDimensions = [];
	        for (var i = 0; i < colCount; i++) {
	            defaultDimensions.push(i);
	        }
	        var dimensions = normalizeDimensions(config.dimensions, defaultDimensions);
	        var outputType = config.outputType || OutputType.MULTIPLE;

	        var outputClusterIndexDimension = config.outputClusterIndexDimension;
	        if (outputType === OutputType.SINGLE && !numberUtil.isNumber(outputClusterIndexDimension)) {
	            throw new Error('outputClusterIndexDimension is required as a number.');
	        }
	        var extents = calcExtents(dataSet, dimensions);

	        return {
	            dimensions: dimensions,
	            rawExtents: extents,
	            outputType: outputType,
	            outputClusterIndexDimension: outputClusterIndexDimension,
	            outputCentroidDimensions: config.outputCentroidDimensions,
	        };
	    }

	    function calcExtents(dataSet, dimensions) {
	        var extents = [];
	        var dimLen = dimensions.length;
	        for (var i = 0; i < dimLen; i++) {
	            extents.push({ min: Infinity, max: -Infinity });
	        }
	        for (var i = 0; i < dataSet.length; i++) {
	            var line = dataSet[i];
	            for (var j = 0; j < dimLen; j++) {
	                var extentItem = extents[j];
	                var val = line[dimensions[j]];
	                extentItem.min > val && (extentItem.min = val);
	                extentItem.max < val && (extentItem.max = val);
	            }
	        }
	        for (var i = 0; i < dimLen; i++) {
	            extents[i].span = extents[i].max - extents[i].min;
	        }
	        return extents;
	    }

	    return {
	        OutputType: OutputType,
	        hierarchicalKMeans: hierarchicalKMeans
	    };

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

	    var array = __webpack_require__(3);
	    var isArray = array.isArray;
	    var size = array.size;
	    var number = __webpack_require__(4);
	    var isNumber = number.isNumber;

	    /**
	     * @param  {Array.<number>|number} dimensions like `[2, 4]` or `4`
	     * @param  {Array.<number>} [defaultDimensions=undefined] By default `undefined`.
	     * @return {Array.<number>} number like `4` is normalized to `[4]`,
	     *         `null`/`undefined` is normalized to `defaultDimensions`.
	     */
	    function normalizeDimensions(dimensions, defaultDimensions) {
	        return typeof dimensions === 'number'
	            ? [dimensions]
	            : dimensions == null
	            ? defaultDimensions
	            : dimensions;
	    }

	    /**
	     * Data preprocessing, filter the wrong data object.
	     *  for example [12,] --- missing y value
	     *              [,12] --- missing x value
	     *              [12, b] --- incorrect y value
	     *              ['a', 12] --- incorrect x value
	     * @param  {Array.<Array>} data
	     * @param  {Object?} [opt]
	     * @param  {Array.<number>} [opt.dimensions] Optional. Like [2, 4],
	     *         means that dimension index 2 and dimension index 4 need to be number.
	     *         If null/undefined (by default), all dimensions need to be number.
	     * @param  {boolean} [opt.toOneDimensionArray] Convert to one dimension array.
	     *         Each value is from `opt.dimensions[0]` or dimension 0.
	     * @return {Array.<Array.<number>>}
	     */
	    function dataPreprocess(data, opt) {
	        opt = opt || {};
	        var dimensions = opt.dimensions;
	        var numberDimensionMap = {};
	        if (dimensions != null) {
	            for (var i = 0; i < dimensions.length; i++) {
	                numberDimensionMap[dimensions[i]] = true;
	            }
	        }
	        var targetOneDim = opt.toOneDimensionArray
	            ? (dimensions ? dimensions[0] : 0)
	            : null;

	        function shouldBeNumberDimension(dimIdx) {
	            return !dimensions || numberDimensionMap.hasOwnProperty(dimIdx);
	        }

	        if (!isArray(data)) {
	            throw new Error('Invalid data type, you should input an array');
	        }
	        var predata = [];
	        var arraySize = size(data);

	        if (arraySize.length === 1) {
	            for (var i = 0; i < arraySize[0]; i++) {
	                var item = data[i];
	                if (isNumber(item)) {
	                    predata.push(item);
	                }
	            }
	        }
	        else if (arraySize.length === 2) {
	            for (var i = 0; i < arraySize[0]; i++) {
	                var isCorrect = true;
	                var item = data[i];
	                for (var j = 0; j < arraySize[1]; j++) {
	                    if (shouldBeNumberDimension(j) && !isNumber(item[j])) {
	                        isCorrect = false;
	                    }
	                }
	                if (isCorrect) {
	                    predata.push(
	                        targetOneDim != null
	                            ? item[targetOneDim]
	                            : item
	                    );
	                }
	            }
	        }
	        return predata;
	    }

	    /**
	     * @param {string|number} val
	     * @return {number}
	     */
	    function getPrecision(val) {
	        var str = val.toString();
	        // scientific notation is not considered
	        var dotIndex = str.indexOf('.');
	        return dotIndex < 0 ? 0 : str.length - 1 - dotIndex;
	    }

	    return {
	        normalizeDimensions: normalizeDimensions,
	        dataPreprocess: dataPreprocess,
	        getPrecision: getPrecision
	    };

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

	    var objToString = Object.prototype.toString;
	    var arrayProto = Array.prototype;
	    var nativeMap = arrayProto.map;

	    /**
	     * Get the size of a array
	     * @param  {Array} data
	     * @return {Array}
	     */
	    function size(data) {
	        var s = [];
	        while (isArray(data)) {
	            s.push(data.length);
	            data = data[0];
	        }
	        return s;
	    }

	    /**
	     * @param {*}  value
	     * @return {boolean}
	     */
	    function isArray(value) {
	        return objToString.call(value) === '[object Array]';
	    }

	    /**
	     * constructs a (m x n) array with all values 0
	     * @param  {number} m  the row
	     * @param  {number} n  the column
	     * @return {Array}
	     */
	    function zeros(m, n) {
	        var zeroArray = [];
	        for (var i = 0; i < m ; i++) {
	            zeroArray[i] = [];
	            for (var j = 0; j < n; j++) {
	                zeroArray[i][j] = 0;
	            }
	        }
	        return zeroArray;
	    }

	    /**
	     * Sums each element in the array.
	     * Internal use, for performance considerations, to avoid
	     * unnecessary judgments and calculations.
	     * @param  {Array} vector
	     * @return {number}
	     */
	    function sum(vector) {
	        var sum = 0;
	        for (var i = 0; i < vector.length; i++) {
	            sum += vector[i];
	        }
	        return sum;
	    }

	    /**
	     * Computes the sum of the specified column elements in a two-dimensional array
	     * @param  {Array.<Array>} dataList  two-dimensional array
	     * @param  {number} n  the specified column, zero-based
	     * @return {number}
	     */
	    function sumOfColumn(dataList, n) {
	        var sum = 0;
	        for (var i = 0; i < dataList.length; i++) {
	            sum += dataList[i][n];
	        }
	        return sum;
	    }


	    function ascending(a, b) {

	        return a > b ? 1 : a < b ? -1 : a === b ? 0 : NaN;

	    }

	    /**
	     * Binary search algorithm --- this bisector is specidfied to histogram, which every bin like that [a, b),
	     * so the return value use to add 1.
	     * @param  {Array.<number>} array
	     * @param  {number} value
	     * @param  {number} start
	     * @param  {number} end
	     * @return {number}
	     */
	    function bisect(array, value, start, end) { //移出去

	        if (start == null) {
	            start = 0;
	        }
	        if (end == null) {
	            end = array.length;
	        }
	        while (start < end) {
	            var mid = Math.floor((start + end) / 2);
	            var compare = ascending(array[mid], value);
	            if (compare > 0) {
	                end = mid;
	            }
	            else if (compare < 0) {
	                start = mid + 1;
	            }
	            else {
	                return mid + 1;
	            }
	        }
	        return start;
	    }

	    /**
	     * 数组映射
	     * @memberOf module:zrender/core/util
	     * @param {Array} obj
	     * @param {Function} cb
	     * @param {*} [context]
	     * @return {Array}
	     */
	    function map(obj, cb, context) {
	        if (!(obj && cb)) {
	            return;
	        }
	        if (obj.map && obj.map === nativeMap) {
	            return obj.map(cb, context);
	        }
	        else {
	            var result = [];
	            for (var i = 0, len = obj.length; i < len; i++) {
	                result.push(cb.call(context, obj[i], i, obj));
	            }
	            return result;
	        }
	    }

	    return {
	        size: size,
	        isArray: isArray,
	        zeros: zeros,
	        sum: sum,
	        sumOfColumn: sumOfColumn,
	        ascending: ascending,
	        bisect: bisect,
	        map: map
	    };

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

	    /**
	     * Test whether value is a number.
	     * @param  {*}  value
	     * @return {boolean}
	     */
	    function isNumber(value) {

	        value = value === null ? NaN : +value;
	        return typeof value === 'number' && !isNaN(value);
	    }

	    /**
	     * Test if a number is integer.
	     * @param  {number}  value
	     * @return {boolean}
	     */
	    function isInteger(value) {
	        return isFinite(value) && value === Math.round(value);
	    }

	    function quantityExponent(val) {
	        if (val === 0) {
	            return 0;
	        }
	        var exp = Math.floor(Math.log(val) / Math.LN10);
	        // Fix pricision loss.
	        if (val / Math.pow(10, exp) >= 10) {
	            exp++;
	        }
	        return exp;
	    }

	    return {
	        isNumber: isNumber,
	        isInteger: isInteger,
	        quantityExponent: quantityExponent
	    };

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

	    var dataProcess = __webpack_require__(2);
	    var dataPreprocess = dataProcess.dataPreprocess;
	    var normalizeDimensions = dataProcess.normalizeDimensions;

	    var regreMethods = {

	        /**
	         * Common linear regression algorithm
	         */
	        linear: function (predata, opt) {

	            var xDimIdx = opt.dimensions[0];
	            var yDimIdx = opt.dimensions[1];
	            var sumX = 0;
	            var sumY = 0;
	            var sumXY = 0;
	            var sumXX = 0;
	            var len = predata.length;

	            for (var i = 0; i < len; i++) {
	                var rawItem = predata[i];
	                sumX += rawItem[xDimIdx];
	                sumY += rawItem[yDimIdx];
	                sumXY += rawItem[xDimIdx] * rawItem[yDimIdx];
	                sumXX += rawItem[xDimIdx] * rawItem[xDimIdx];
	            }

	            var gradient = ((len * sumXY) - (sumX * sumY)) / ((len * sumXX) - (sumX * sumX));
	            var intercept = (sumY / len) - ((gradient * sumX) / len);

	            var result = [];
	            for (var j = 0; j < predata.length; j++) {
	                var rawItem = predata[j];
	                var resultItem = rawItem.slice();
	                resultItem[xDimIdx] = rawItem[xDimIdx];
	                resultItem[yDimIdx] = gradient * rawItem[xDimIdx] + intercept;
	                result.push(resultItem);
	            }

	            var expression = 'y = ' + Math.round(gradient * 100) / 100 + 'x + ' + Math.round(intercept * 100) / 100;

	            return {
	                points: result,
	                parameter: {
	                    gradient: gradient,
	                    intercept: intercept
	                },
	                expression: expression
	            };
	        },

	        /**
	         * If the raw data include [0,0] point, we should choose linearThroughOrigin
	         *   instead of linear.
	         */
	        linearThroughOrigin: function (predata, opt) {

	            var xDimIdx = opt.dimensions[0];
	            var yDimIdx = opt.dimensions[1];
	            var sumXX = 0;
	            var sumXY = 0;

	            for (var i = 0; i < predata.length; i++) {
	                var rawItem = predata[i];
	                sumXX += rawItem[xDimIdx] * rawItem[xDimIdx];
	                sumXY += rawItem[xDimIdx] * rawItem[yDimIdx];
	            }

	            var gradient = sumXY / sumXX;
	            var result = [];

	            for (var j = 0; j < predata.length; j++) {
	                var rawItem = predata[j];
	                var resultItem = rawItem.slice();
	                resultItem[xDimIdx] = rawItem[xDimIdx];
	                resultItem[yDimIdx] = rawItem[xDimIdx] * gradient;
	                result.push(resultItem);
	            }

	            var expression = 'y = ' + Math.round(gradient * 100) / 100 + 'x';

	            return {
	                points: result,
	                parameter: {
	                    gradient: gradient
	                },
	                expression: expression
	            };
	        },

	        /**
	         * Exponential regression
	         */
	        exponential: function (predata, opt) {

	            var xDimIdx = opt.dimensions[0];
	            var yDimIdx = opt.dimensions[1];
	            var sumX = 0;
	            var sumY = 0;
	            var sumXXY = 0;
	            var sumYlny = 0;
	            var sumXYlny = 0;
	            var sumXY = 0;

	            for (var i = 0; i < predata.length; i++) {
	                var rawItem = predata[i];
	                sumX += rawItem[xDimIdx];
	                sumY += rawItem[yDimIdx];
	                sumXY += rawItem[xDimIdx] * rawItem[yDimIdx];
	                sumXXY += rawItem[xDimIdx] * rawItem[xDimIdx] * rawItem[yDimIdx];
	                sumYlny += rawItem[yDimIdx] * Math.log(rawItem[yDimIdx]);
	                sumXYlny += rawItem[xDimIdx] * rawItem[yDimIdx] * Math.log(rawItem[yDimIdx]);
	            }

	            var denominator = (sumY * sumXXY) - (sumXY * sumXY);
	            var coefficient = Math.pow(Math.E, (sumXXY * sumYlny - sumXY * sumXYlny) / denominator);
	            var index = (sumY * sumXYlny - sumXY * sumYlny) / denominator;
	            var result = [];

	            for (var j = 0; j < predata.length; j++) {
	                var rawItem = predata[j];
	                var resultItem = rawItem.slice();
	                resultItem[xDimIdx] = rawItem[xDimIdx];
	                resultItem[yDimIdx] = coefficient * Math.pow(Math.E, index * rawItem[xDimIdx]);
	                result.push(resultItem);
	            }

	            var expression = 'y = ' + Math.round(coefficient * 100) / 100 + 'e^(' + Math.round(index * 100) / 100 + 'x)';

	            return {
	                points: result,
	                parameter: {
	                    coefficient: coefficient,
	                    index: index
	                },
	                expression: expression
	            };

	        },

	        /**
	         * Logarithmic regression
	         */
	        logarithmic: function (predata, opt) {

	            var xDimIdx = opt.dimensions[0];
	            var yDimIdx = opt.dimensions[1];
	            var sumlnx = 0;
	            var sumYlnx = 0;
	            var sumY = 0;
	            var sumlnxlnx = 0;

	            for (var i = 0; i < predata.length; i++) {
	                var rawItem = predata[i];
	                sumlnx += Math.log(rawItem[xDimIdx]);
	                sumYlnx += rawItem[yDimIdx] * Math.log(rawItem[xDimIdx]);
	                sumY += rawItem[yDimIdx];
	                sumlnxlnx += Math.pow(Math.log(rawItem[xDimIdx]), 2);
	            }

	            var gradient = (i * sumYlnx - sumY * sumlnx) / (i * sumlnxlnx - sumlnx * sumlnx);
	            var intercept = (sumY - gradient * sumlnx) / i;
	            var result = [];

	            for (var j = 0; j < predata.length; j++) {
	                var rawItem = predata[j];
	                var resultItem = rawItem.slice();
	                resultItem[xDimIdx] = rawItem[xDimIdx];
	                resultItem[yDimIdx] = gradient * Math.log(rawItem[xDimIdx]) + intercept;
	                result.push(resultItem);
	            }

	            var expression =
	                'y = '
	                + Math.round(intercept * 100) / 100
	                + ' + '
	                + Math.round(gradient * 100) / 100 + 'ln(x)';

	            return {
	                points: result,
	                parameter: {
	                    gradient: gradient,
	                    intercept: intercept
	                },
	                expression: expression
	            };

	        },

	        /**
	         * Polynomial regression
	         */
	        polynomial: function (predata, opt) {

	            var xDimIdx = opt.dimensions[0];
	            var yDimIdx = opt.dimensions[1];
	            var order = opt.order;

	            if (order == null) {
	                order = 2;
	            }
	            //coefficient matrix
	            var coeMatrix = [];
	            var lhs = [];
	            var k = order + 1;

	            for (var i = 0; i < k; i++) {
	                var sumA = 0;
	                for (var n = 0; n < predata.length; n++) {
	                    var rawItem = predata[n];
	                    sumA += rawItem[yDimIdx] * Math.pow(rawItem[xDimIdx], i);
	                }
	                lhs.push(sumA);

	                var temp = [];
	                for (var j = 0; j < k; j++) {
	                    var sumB = 0;
	                    for (var m = 0; m < predata.length; m++) {
	                        sumB += Math.pow(predata[m][xDimIdx], i + j);
	                    }
	                    temp.push(sumB);
	                }
	                coeMatrix.push(temp);
	            }
	            coeMatrix.push(lhs);

	            var coeArray = gaussianElimination(coeMatrix, k);

	            var result = [];

	            for (var i = 0; i < predata.length; i++) {
	                var value = 0;
	                var rawItem = predata[i];
	                for (var n = 0; n < coeArray.length; n++) {
	                    value += coeArray[n] * Math.pow(rawItem[xDimIdx], n);
	                }
	                var resultItem = rawItem.slice();
	                resultItem[xDimIdx] = rawItem[xDimIdx];
	                resultItem[yDimIdx] = value;
	                result.push(resultItem);
	            }

	            var expression = 'y = ';
	            for (var i = coeArray.length - 1; i >= 0; i--) {
	                if (i > 1) {
	                    expression += Math.round(coeArray[i] * Math.pow(10, i + 1)) / Math.pow(10, i + 1) + 'x^' + i + ' + ';
	                }
	                else if (i === 1) {
	                    expression += Math.round(coeArray[i] * 100) / 100 + 'x' + ' + ';
	                }
	                else {
	                    expression += Math.round(coeArray[i] * 100) / 100;
	                }
	            }

	            return {
	                points: result,
	                parameter: coeArray,
	                expression: expression
	            };

	        }

	    };

	    /**
	     * Gaussian elimination
	     * @param  {Array.<Array.<number>>} matrix   two-dimensional number array
	     * @param  {number} number
	     * @return {Array}
	     */
	    function gaussianElimination(matrix, number) {

	        for (var i = 0; i < matrix.length - 1; i++) {
	            var maxColumn = i;
	            for (var j = i + 1; j < matrix.length - 1; j++) {
	                if (Math.abs(matrix[i][j]) > Math.abs(matrix[i][maxColumn])) {
	                    maxColumn = j;
	                }
	            }
	            // the matrix here is the transpose of the common Augmented matrix.
	            //  so the can perform the primary column transform, in fact, equivalent
	            //  to the primary line changes
	            for (var k = i; k < matrix.length; k++) {
	                var temp = matrix[k][i];
	                matrix[k][i] = matrix[k][maxColumn];
	                matrix[k][maxColumn] = temp;
	            }
	            for (var n = i + 1; n < matrix.length - 1; n++) {
	                for (var m = matrix.length - 1; m >= i; m--) {
	                    matrix[m][n] -= matrix[m][i] / matrix[i][i] * matrix[i][n];
	                }
	            }
	        }

	        var data = new Array(number);
	        var len = matrix.length - 1;
	        for (var j = matrix.length - 2; j >= 0; j--) {
	            var temp = 0;
	            for (var i = j + 1; i < matrix.length - 1; i++) {
	                temp += matrix[i][j] * data[i];
	            }
	            data[j] = (matrix[len][j] - temp) / matrix[j][j];

	        }

	        return data;
	    }

	    /**
	     * @param  {string} regreMethod
	     * @param  {Array.<Array.<number>>} data   two-dimensional number array
	     * @param  {Object|number} [optOrOrder]  opt or order
	     * @param  {number} [optOrOrder.order]  order of polynomials
	     * @param  {Array.<number>|number} [optOrOrder.dimensions=[0, 1]]  Target dimensions to calculate the regression.
	     *         By defualt: use [0, 1] as [x, y].
	     * @return {Array}
	     */
	    var regression = function (regreMethod, data, optOrOrder) {
	        var opt = typeof optOrOrder === 'number'
	            ? { order: optOrOrder }
	            : (optOrOrder || {});

	        var dimensions = normalizeDimensions(opt.dimensions, [0, 1]);

	        var predata = dataPreprocess(data, { dimensions: dimensions });
	        var result = regreMethods[regreMethod](predata, {
	            order: opt.order,
	            dimensions: dimensions
	        });

	        // Sort for line chart.
	        var xDimIdx = dimensions[0];
	        result.points.sort(function (itemA, itemB) {
	            return itemA[xDimIdx] - itemB[xDimIdx];
	        });

	        return result;
	    };

	    return regression;

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

	    var statistics = {};

	    statistics.max = __webpack_require__(7);
	    statistics.deviation = __webpack_require__(8);
	    statistics.mean = __webpack_require__(10);
	    statistics.median = __webpack_require__(12);
	    statistics.min = __webpack_require__(14);
	    statistics.quantile = __webpack_require__(13);
	    statistics.sampleVariance = __webpack_require__(9);
	    statistics.sum = __webpack_require__(11);

	    return statistics;

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

	    var number = __webpack_require__(4);
	    var isNumber = number.isNumber;

	    /**
	     * Is a method for computing the max value of a list of numbers,
	     * which will filter other data types.
	     * @param  {Array.<number>} data
	     * @return {number}
	     */
	    function max(data) {

	        var maxData = -Infinity;
	        for (var i = 0; i < data.length; i++) {
	            if (isNumber(data[i]) && data[i] > maxData) {
	                maxData = data[i];
	            }
	        }
	        return maxData;
	    }

	    return max;

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

	    var variance = __webpack_require__(9);

	    /**
	     * Computing the deviation
	     * @param  {Array.<number>} data
	     * @return {number}
	     */
	    return function (data) {

	        var squaredDeviation = variance(data);

	        return squaredDeviation ? Math.sqrt(squaredDeviation) : squaredDeviation;
	    };
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

	    var number = __webpack_require__(4);
	    var isNumber = number.isNumber;
	    var mean = __webpack_require__(10);

	    /**
	     * Computing the variance of list of sample
	     * @param  {Array.<number>} data
	     * @return {number}
	     */
	    function sampleVariance(data) {

	        var len = data.length;
	        if (!len || len < 2) {
	            return 0;
	        }
	        if (data.length >= 2) {

	            var meanValue = mean(data);
	            var sum = 0;
	            var temple;

	            for (var i = 0; i < data.length; i++) {
	                if (isNumber(data[i])) {
	                    temple = data[i] - meanValue;
	                    sum += temple * temple;
	                }
	            }
	            return sum / (data.length - 1);
	        }
	    }

	    return sampleVariance;

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

	    var sum = __webpack_require__(11);

	    /**
	     * Is a method for computing the mean value of a list of numbers,
	     * which will filter other data types.
	     * @param  {Array.<number>} data
	     * @return {number}
	     */
	    function mean(data) {

	        var len = data.length;

	        if (!len) {
	            return 0;
	        }

	        return sum(data) / data.length;

	    }

	    return mean;


	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

	    var number = __webpack_require__(4);
	    var isNumber = number.isNumber;

	    /**
	     * Is a method for computing the sum of a list of numbers,
	     * which will filter other data types.
	     * @param  {Array.<number>} data
	     * @return {number}
	     */
	    function sum(data) {

	        var len = data.length;

	        if (!len) {
	            return 0;
	        }
	        var sumData = 0;
	        for (var i = 0; i < len; i++) {
	            if (isNumber(data[i])) {
	                sumData += data[i];
	            }
	        }
	        return sumData;
	    }

	    return sum;

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

	    var quantile = __webpack_require__(13);

	    /**
	     * Is a method for computing the median value of a sorted array of numbers
	     * @param  {Array.<number>} data
	     * @return {number}
	     */
	    function median(data) {

	        return quantile(data, 0.5);
	    }

	    return median;

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

	    /**
	     * Estimating quantiles from a sorted sample of numbers
	     * @see https://en.wikipedia.org/wiki/Quantile#Estimating_quantiles_from_a_sample
	     * R-7 method
	     * @param  {Array.<number>} data  sorted array
	     * @param  {number} p
	     */
	    return function (data, p) {

	        var len = data.length;

	        if (!len) {
	            return 0;
	        }
	        if (p <= 0 || len < 2) {
	            return data[0];
	        }
	        if (p >= 1) {
	            return data[len -1];
	        }
	        // in the wikipedia's R-7 method h = (N - 1)p + 1, but here array index start from 0
	        var h = (len - 1) * p;
	        var i = Math.floor(h);
	        var a = data[i];
	        var b = data[i + 1];
	        return a + (b - a) * (h - i);
	    };

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

	    var number = __webpack_require__(4);
	    var isNumber = number.isNumber;

	    /**
	     * Is a method for computing the min value of a list of numbers,
	     * which will filter other data types.
	     * @param  {Array.<number>} data
	     * @return {number}
	     */
	    function min(data) {

	        var minData = Infinity;
	        for (var i = 0; i < data.length; i++) {
	            if (isNumber(data[i]) && data[i] < minData) {
	                minData = data[i];
	            }
	        }
	        return minData;
	    }

	    return min;

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

	    var max = __webpack_require__(7);
	    var min = __webpack_require__(14);
	    var quantile = __webpack_require__(13);
	    var deviation = __webpack_require__(8);
	    var dataProcess = __webpack_require__(2);
	    var dataPreprocess = dataProcess.dataPreprocess;
	    var normalizeDimensions = dataProcess.normalizeDimensions;
	    var array = __webpack_require__(3);
	    var ascending = array.ascending;
	    var map = array.map;
	    var range = __webpack_require__(16);
	    var bisect = array.bisect;
	    var tickStep = __webpack_require__(17);

	    /**
	     * Compute bins for histogram
	     * @param  {Array.<number>} data
	     * @param  {Object|string} optOrMethod Optional settings or `method`.
	     * @param  {Object|string} optOrMethod.method 'squareRoot' | 'scott' | 'freedmanDiaconis' | 'sturges'
	     * @param  {Array.<number>|number} optOrMethod.dimensions If data is a 2-d array,
	     *         which dimension will be used to calculate histogram.
	     * @return {Object}
	     */
	    function computeBins(data, optOrMethod) {
	        var opt = typeof optOrMethod === 'string'
	            ? { method: optOrMethod }
	            : (optOrMethod || {});

	        var threshold = opt.method == null
	            ? thresholdMethod.squareRoot
	            : thresholdMethod[opt.method];
	        var dimensions = normalizeDimensions(opt.dimensions);

	        var values = dataPreprocess(data, {
	            dimensions: dimensions,
	            toOneDimensionArray: true
	        });
	        var maxValue = max(values);
	        var minValue = min(values);
	        var binsNumber = threshold(values, minValue, maxValue);
	        var tickStepResult = tickStep(minValue, maxValue, binsNumber);
	        var step = tickStepResult.step;
	        var toFixedPrecision = tickStepResult.toFixedPrecision;

	        // return the xAxis coordinate for each bins, except the end point of the value
	        var rangeArray = range(
	            // use function toFixed() to avoid data like '0.700000001'
	            +((Math.ceil(minValue / step) * step).toFixed(toFixedPrecision)),
	            +((Math.floor(maxValue / step) * step).toFixed(toFixedPrecision)),
	            step,
	            toFixedPrecision
	        );

	        var len = rangeArray.length;

	        var bins = new Array(len + 1);

	        for (var i = 0; i <= len; i++) {
	            bins[i] = {};
	            bins[i].sample = [];
	            bins[i].x0 = i > 0
	                ? rangeArray[i - 1]
	                : (rangeArray[i] - minValue) === step
	                ? minValue
	                : (rangeArray[i] - step);
	            bins[i].x1 = i < len
	                ? rangeArray[i]
	                : (maxValue - rangeArray[i-1]) === step
	                ? maxValue
	                : rangeArray[i - 1] + step;
	        }

	        for (var i = 0; i < values.length; i++) {
	            if (minValue <= values[i] && values[i] <= maxValue) {
	                bins[bisect(rangeArray, values[i], 0, len)].sample.push(values[i]);
	            }
	        }

	        var data = map(bins, function (bin) {
	            // use function toFixed() to avoid data like '6.5666638489'
	            return [
	                +((bin.x0 + bin.x1) / 2).toFixed(toFixedPrecision),
	                bin.sample.length,
	                bin.x0,
	                bin.x1,
	                bin.x0 + ' - ' + bin.x1
	            ];
	        });

	        var customData = map(bins, function (bin) {
	            return [bin.x0, bin.x1, bin.sample.length];
	        });

	        return {
	            bins: bins,
	            data: data,
	            customData: customData
	        };
	    }

	    /**
	     * Four kinds of threshold methods used to
	     * compute how much bins the histogram should be divided
	     * @see  https://en.wikipedia.org/wiki/Histogram
	     * @type {Object}
	     */
	    var thresholdMethod = {

	        squareRoot: function (data) {

	            var bins = Math.ceil(Math.sqrt(data.length));

	            return bins > 50 ? 50 : bins;
	        },

	        scott: function (data, min, max) {

	            return Math.ceil((max - min) / (3.5 * deviation(data) * Math.pow(data.length, -1 / 3)));
	        },

	        freedmanDiaconis: function (data, min, max) {

	            data.sort(ascending);

	            return Math.ceil(
	                (max - min) / (2 * (quantile(data, 0.75) - quantile(data, 0.25)) * Math.pow(data.length, -1 / 3))
	            );
	        },

	        sturges: function (data) {

	            return Math.ceil(Math.log(data.length) / Math.LN2) + 1;

	        }
	    };

	    return computeBins;

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

	    var dataProcess = __webpack_require__(2);
	    var getPrecision = dataProcess.getPrecision;

	    /**
	     * Computing range array.
	     * Adding param precision to fix range value, avoiding range[i] = 0.7000000001.
	     * @param  {number} start
	     * @param  {number} end
	     * @param  {number} step
	     * @param  {number} precision
	     * @return {Array.<number>}
	     */
	    return function (start, end, step, precision) {

	        var len = arguments.length;

	        if (len < 2) {
	            end = start;
	            start = 0;
	            step = 1;
	        }
	        else if (len < 3) {
	            step = 1;
	        }
	        else if (len < 4) {
	            step = +step;
	            precision = getPrecision(step);
	        }
	        else {
	            precision = +precision;
	        }

	        var n = Math.ceil(((end - start) / step).toFixed(precision));
	        var range = new Array(n + 1);
	        for (var i = 0; i < n + 1; i++) {
	            range[i] = +(start + i * step).toFixed(precision);
	        }
	        return range;
	    };

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

	    var numberUtil = __webpack_require__(4);

	    /**
	     * Computing the length of step
	     * @see  https://github.com/d3/d3-array/blob/master/src/ticks.js
	     * @param {number} start
	     * @param {number} stop
	     * @param {number} count
	     */
	    return function (start, stop, count) {

	        var step0 = Math.abs(stop - start) / count;
	        var precision = numberUtil.quantityExponent(step0);

	        var step1 = Math.pow(10, precision);
	        var error = step0 / step1;

	        if (error >= Math.sqrt(50)) {
	            step1 *= 10;
	        }
	        else if (error >= Math.sqrt(10)) {
	            step1 *= 5;
	        }
	        else if(error >= Math.sqrt(2)) {
	            step1 *= 2;
	        }

	        var toFixedPrecision = precision < 0 ? -precision : 0;
	        var resultStep = +(
	            (stop >= start ? step1 : -step1).toFixed(toFixedPrecision)
	        );

	        return {
	            step: resultStep,
	            toFixedPrecision: toFixedPrecision
	        };
	    };

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

	    var regression = __webpack_require__(5);
	    var transformHelper = __webpack_require__(19);
	    var FORMULA_DIMENSION = 2;

	    return {

	        type: 'ecStat:regression',

	        /**
	         * @param {Paramter<typeof regression>[0]} [params.config.method='linear'] 'linear' by default
	         * @param {Paramter<typeof regression>[2]} [params.config.order=2] Only work when method is `polynomial`.
	         * @param {DimensionLoose[]|DimensionLoose} [params.config.dimensions=[0, 1]] dimensions that used to calculate regression.
	         *        By default [0, 1].
	         * @param {'start' | 'end' | 'all'} params.config.formulaOn Include formula on the last (third) dimension of the:
	         *        'start': first data item.
	         *        'end': last data item (by default).
	         *        'all': all data items.
	         *        'none': no data item.
	         */
	        transform: function transform(params) {
	            var upstream = params.upstream;
	            var config = params.config || {};
	            var method = config.method || 'linear';

	            var result = regression(method, upstream.cloneRawData(), {
	                order: config.order,
	                dimensions: transformHelper.normalizeExistingDimensions(params, config.dimensions)
	            });
	            var points = result.points;

	            var formulaOn = config.formulaOn;
	            if (formulaOn == null) {
	                formulaOn = 'end';
	            }

	            var dimensions;
	            if (formulaOn !== 'none') {
	                for (var i = 0; i < points.length; i++) {
	                    points[i][FORMULA_DIMENSION] =
	                    (
	                        (formulaOn === 'start' && i === 0)
	                        || (formulaOn === 'all')
	                        || (formulaOn === 'end' && i === points.length - 1)
	                    ) ? result.expression : '';
	                }
	                dimensions = upstream.cloneAllDimensionInfo();
	                dimensions[FORMULA_DIMENSION] = {};
	            }

	            return [{
	                dimensions: dimensions,
	                data: points
	            }];
	        }
	    };

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

	    var arrayUtil = __webpack_require__(3);
	    var numberUtil = __webpack_require__(4);
	    var objectUtil = __webpack_require__(20);

	    /**
	     * type DimensionLoose = DimensionIndex | DimensionName;
	     * type DimensionIndex = number;
	     * type DimensionName = string;
	     *
	     * @param {object} transformParams The parameter of echarts transfrom.
	     * @param {DimensionLoose | DimensionLoose[]} dimensionsConfig
	     * @return {DimensionIndex | DimensionIndex[]}
	     */
	    function normalizeExistingDimensions(transformParams, dimensionsConfig) {
	        if (dimensionsConfig == null) {
	            return;
	        }
	        var upstream = transformParams.upstream;

	        if (arrayUtil.isArray(dimensionsConfig)) {
	            var result = [];
	            for (var i = 0; i < dimensionsConfig.length; i++) {
	                var dimInfo = upstream.getDimensionInfo(dimensionsConfig[i]);
	                validateDimensionExists(dimInfo, dimensionsConfig[i]);
	                result[i] = dimInfo.index;
	            }
	            return result;
	        }
	        else {
	            var dimInfo = upstream.getDimensionInfo(dimensionsConfig);
	            validateDimensionExists(dimInfo, dimensionsConfig);
	            return dimInfo.index;
	        }

	        function validateDimensionExists(dimInfo, dimConfig) {
	            if (!dimInfo) {
	                throw new Error('Can not find dimension by ' + dimConfig);
	            }
	        }
	    }

	    /**
	     * @param {object} transformParams The parameter of echarts transfrom.
	     * @param {(DimensionIndex | {name: DimensionName, index: DimensionIndex})[]} dimensionsConfig
	     * @param {{name: DimensionName | DimensionName[], index: DimensionIndex | DimensionIndex[]}}
	     */
	    function normalizeNewDimensions(dimensionsConfig) {
	        if (arrayUtil.isArray(dimensionsConfig)) {
	            var names = [];
	            var indices = [];
	            for (var i = 0; i < dimensionsConfig.length; i++) {
	                var item = parseDimensionNewItem(dimensionsConfig[i]);
	                names.push(item.name);
	                indices.push(item.index);
	            }
	            return {name: names, index: indices};
	        }
	        else if (dimensionsConfig != null) {
	            return parseDimensionNewItem(dimensionsConfig);
	        }

	        function parseDimensionNewItem(dimConfig) {
	            if (numberUtil.isNumber(dimConfig)) {
	                return { index: dimConfig };
	            }
	            else if (objectUtil.isObject(dimConfig) && numberUtil.isNumber(dimConfig.index)) {
	                return dimConfig;
	            }
	            throw new Error('Illegle new dimensions config. Expect `{ name: string, index: number }`.');
	        }
	    }

	    return {
	        normalizeExistingDimensions: normalizeExistingDimensions,
	        normalizeNewDimensions: normalizeNewDimensions
	    };
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

	    function extend(target, source) {
	        if (Object.assign) {
	            Object.assign(target, source);
	        }
	        else {
	            for (var key in source) {
	                if (source.hasOwnProperty(key)) {
	                    target[key] = source[key];
	                }
	            }
	        }
	        return target;
	    }

	    function isObject(value) {
	        const type = typeof value;
	        return type === 'function' || (!!value && type === 'object');
	    }

	    return {
	        extend: extend,
	        isObject: isObject
	    };

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

	    var histogram = __webpack_require__(15);
	    var transformHelper = __webpack_require__(19);

	    return {

	        type: 'ecStat:histogram',

	        /**
	         * @param {'squareRoot' | 'scott' | 'freedmanDiaconis' | 'sturges'} [params.config.method='squareRoot']
	         * @param {DimnensionLoose[]} [params.config.dimensions=[0, 1]] dimensions that used to calculate histogram.
	         *        By default [0].
	         */
	        transform: function transform(params) {
	            var upstream = params.upstream;
	            var config = params.config || {};

	            var result = histogram(upstream.cloneRawData(), {
	                method: config.method,
	                dimensions: transformHelper.normalizeExistingDimensions(params, config.dimensions)
	            });

	            return [{
	                dimensions: ['MeanOfV0V1', 'VCount', 'V0', 'V1', 'DisplayableName'],
	                data: result.data
	            }, {
	                data: result.customData
	            }];
	        }
	    };

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {

	    var clustering = __webpack_require__(1);
	    var numberUtil = __webpack_require__(4);
	    var transformHelper = __webpack_require__(19);

	    var isNumber = numberUtil.isNumber;

	    return {

	        type: 'ecStat:clustering',

	        /**
	         * @param {number} params.config.clusterCount Mandatory.
	         *        The number of clusters in a dataset. It has to be greater than 1.
	         * @param {(DimensionName | DimensionIndex)[]} [params.config.dimensions] Optional.
	         *        Target dimensions to calculate the regression.
	         *        By default: use all of the data.
	         * @param {(DimensionIndex | {name?: DimensionName, index: DimensionIndex})} [params.config.outputClusterIndexDimension] Mandatory.
	         * @param {(DimensionIndex | {name?: DimensionName, index: DimensionIndex})[]} [params.config.outputCentroidDimensions] Optional.
	         *        If specified, the centroid will be set to those dimensions of the result data one by one.
	         *        By default not set centroid to result.
	         */
	        transform: function transform(params) {
	            var upstream = params.upstream;
	            var config = params.config || {};
	            var clusterCount = config.clusterCount;

	            if (!isNumber(clusterCount) || clusterCount <= 0) {
	                throw new Error('config param "clusterCount" need to be specified as an interger greater than 1.');
	            }

	            if (clusterCount === 1) {
	                return [{
	                }, {
	                    data: []
	                }];
	            }

	            var outputClusterIndexDimension = transformHelper.normalizeNewDimensions(
	                config.outputClusterIndexDimension
	            );
	            var outputCentroidDimensions = transformHelper.normalizeNewDimensions(
	                config.outputCentroidDimensions
	            );

	            if (outputClusterIndexDimension == null) {
	                throw new Error('outputClusterIndexDimension is required as a number.');
	            }

	            var result = clustering.hierarchicalKMeans(upstream.cloneRawData(), {
	                clusterCount: clusterCount,
	                stepByStep: false,
	                dimensions: transformHelper.normalizeExistingDimensions(params, config.dimensions),
	                outputType: clustering.OutputType.SINGLE,
	                outputClusterIndexDimension: outputClusterIndexDimension.index,
	                outputCentroidDimensions: (outputCentroidDimensions || {}).index
	            });

	            var sourceDimAll = upstream.cloneAllDimensionInfo();
	            var resultDimsDef = [];
	            for (var i = 0; i < sourceDimAll.length; i++) {
	                var sourceDimItem = sourceDimAll[i];
	                resultDimsDef.push(sourceDimItem.name);
	            }

	            // Always set to dims def even if name not exists, because the resultDimsDef.length
	            // need to be enlarged to tell echarts that there is "cluster index dimension" and "dist dimension".
	            resultDimsDef[outputClusterIndexDimension.index] = outputClusterIndexDimension.name;

	            if (outputCentroidDimensions) {
	                for (var i = 0; i < outputCentroidDimensions.index.length; i++) {
	                    if (outputCentroidDimensions.name[i] != null) {
	                        resultDimsDef[outputCentroidDimensions.index[i]] = outputCentroidDimensions.name[i];
	                    }
	                }
	            }

	            return [{
	                dimensions: resultDimsDef,
	                data: result.data
	            }, {
	                data: result.centroids
	            }];
	        }
	    };

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })
/******/ ])
});
;

/***/ }),

/***/ "85e3":
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ "86d5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("84a0");


/***/ }),

/***/ "872a":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("3b4a");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "8adb":
/***/ (function(module, exports) {

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

module.exports = safeGet;


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "8ce1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartBaseSlider_vue_vue_type_style_index_0_id_d0824222_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("de44");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartBaseSlider_vue_vue_type_style_index_0_id_d0824222_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartBaseSlider_vue_vue_type_style_index_0_id_d0824222_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "8de2":
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__("8eeb"),
    keysIn = __webpack_require__("9934");

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;


/***/ }),

/***/ "8eeb":
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__("32b3"),
    baseAssignValue = __webpack_require__("872a");

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ "91e9":
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "93ed":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("4245");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "9520":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("3729"),
    isObject = __webpack_require__("1a8c");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "9638":
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "9934":
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__("6fcd"),
    baseKeysIn = __webpack_require__("41c3"),
    isArrayLike = __webpack_require__("30c9");

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ "99cd":
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ "99d3":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__("585a");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("62e4")(module)))

/***/ }),

/***/ "9aff":
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__("9638"),
    isArrayLike = __webpack_require__("30c9"),
    isIndex = __webpack_require__("c098"),
    isObject = __webpack_require__("1a8c");

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),

/***/ "9e69":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("2b3e");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "a029":
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__("087d"),
    getPrototype = __webpack_require__("2dcb"),
    getSymbols = __webpack_require__("32f4"),
    stubArray = __webpack_require__("d327");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),

/***/ "a2be":
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__("d612"),
    arraySome = __webpack_require__("4284"),
    cacheHas = __webpack_require__("c584");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),

/***/ "a2db":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("9e69");

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),

/***/ "a454":
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__("72f0"),
    defineProperty = __webpack_require__("3b4a"),
    identity = __webpack_require__("cd9d");

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),

/***/ "a520":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a524":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("4245");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "a994":
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__("7d1f"),
    getSymbols = __webpack_require__("32f4"),
    keys = __webpack_require__("ec69");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ "ac41":
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ "b047":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "b1e5":
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__("a994");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),

/***/ "b218":
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "b4c0":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("cb5a");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "b5a7":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("0b07"),
    root = __webpack_require__("2b3e");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "b760":
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__("872a"),
    eq = __webpack_require__("9638");

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;


/***/ }),

/***/ "bbc0":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("6044");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "c05f":
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__("7b97"),
    isObjectLike = __webpack_require__("1310");

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),

/***/ "c098":
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "c1c9":
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__("a454"),
    shortOut = __webpack_require__("f3c1");

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),

/***/ "c2b6":
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__("f8af"),
    cloneDataView = __webpack_require__("5d89"),
    cloneRegExp = __webpack_require__("6f6c"),
    cloneSymbol = __webpack_require__("a2db"),
    cloneTypedArray = __webpack_require__("c8fe");

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),

/***/ "c3fc":
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__("42a2"),
    isObjectLike = __webpack_require__("1310");

/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;


/***/ }),

/***/ "c584":
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ "c869":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("0b07"),
    root = __webpack_require__("2b3e");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "c87c":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "c8fe":
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__("f8af");

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),

/***/ "cb5a":
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__("9638");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "cc45":
/***/ (function(module, exports, __webpack_require__) {

var baseIsMap = __webpack_require__("1a2d"),
    baseUnary = __webpack_require__("b047"),
    nodeUtil = __webpack_require__("99d3");

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;


/***/ }),

/***/ "cd9d":
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "d02c":
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__("5e2e"),
    Map = __webpack_require__("79bc"),
    MapCache = __webpack_require__("7b83");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "d327":
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ "d370":
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__("253c"),
    isObjectLike = __webpack_require__("1310");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "d42f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d612":
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__("7b83"),
    setCacheAdd = __webpack_require__("7ed2"),
    setCacheHas = __webpack_require__("dc0f");

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ "d7ee":
/***/ (function(module, exports, __webpack_require__) {

var baseIsSet = __webpack_require__("c3fc"),
    baseUnary = __webpack_require__("b047"),
    nodeUtil = __webpack_require__("99d3");

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

module.exports = isSet;


/***/ }),

/***/ "d81a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartList_vue_vue_type_style_index_0_id_d01548cc_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d42f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartList_vue_vue_type_style_index_0_id_d01548cc_prod_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartList_vue_vue_type_style_index_0_id_d01548cc_prod_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "da03":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("2b3e");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "dc0f":
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ "dc57":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "dcbe":
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__("30c9"),
    isObjectLike = __webpack_require__("1310");

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),

/***/ "de44":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e24b":
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__("49f4"),
    hashDelete = __webpack_require__("1efc"),
    hashGet = __webpack_require__("bbc0"),
    hashHas = __webpack_require__("7a48"),
    hashSet = __webpack_require__("2524");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "e538":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__("2b3e");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("62e4")(module)))

/***/ }),

/***/ "eac5":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "ec69":
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__("6fcd"),
    baseKeys = __webpack_require__("03dd"),
    isArrayLike = __webpack_require__("30c9");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "ec8c":
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ "edfa":
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),

/***/ "efb6":
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__("5e2e");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "f3c1":
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),

/***/ "f8af":
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__("2474");

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),

/***/ "f909":
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__("7e64"),
    assignMergeValue = __webpack_require__("b760"),
    baseFor = __webpack_require__("72af"),
    baseMergeDeep = __webpack_require__("4f50"),
    isObject = __webpack_require__("1a8c"),
    keysIn = __webpack_require__("9934"),
    safeGet = __webpack_require__("8adb");

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack);
    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;


/***/ }),

/***/ "fa21":
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__("7530"),
    getPrototype = __webpack_require__("2dcb"),
    isPrototype = __webpack_require__("eac5");

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./src/utils/importUtil.js
var importUtil_namespaceObject = {};
__webpack_require__.r(importUtil_namespaceObject);
__webpack_require__.d(importUtil_namespaceObject, "ChartBaseLabel", function() { return ChartBaseLabel; });
__webpack_require__.d(importUtil_namespaceObject, "ChartBaseSwitch", function() { return ChartBaseSwitch; });
__webpack_require__.d(importUtil_namespaceObject, "ChartBaseInput", function() { return ChartBaseInput; });
__webpack_require__.d(importUtil_namespaceObject, "ChartBaseSelect", function() { return ChartBaseSelect; });
__webpack_require__.d(importUtil_namespaceObject, "ChartBaseSlider", function() { return ChartBaseSlider; });
__webpack_require__.d(importUtil_namespaceObject, "ChartBaseBox", function() { return ChartBaseBox; });
__webpack_require__.d(importUtil_namespaceObject, "deepCopy", function() { return deepCopy; });
__webpack_require__.d(importUtil_namespaceObject, "isEqual", function() { return isEqual_default.a; });
__webpack_require__.d(importUtil_namespaceObject, "importComp", function() { return importComp; });
__webpack_require__.d(importUtil_namespaceObject, "mapActions", function() { return external_Vuex_["mapActions"]; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"23c09074-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/ChartMix/ChartSetting.vue?vue&type=template&id=dc2be93c&
var ChartSettingvue_type_template_id_dc2be93c_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "chartSetting"
  }, [_c('div', {
    staticStyle: {
      "overflow": "hidden",
      "height": "100%"
    }
  }, [_c('chart-list', {
    attrs: {
      "chartAllType": _vm.currentChartType,
      "showList": _vm.showList,
      "lang": _vm.lang
    },
    on: {
      "closeChartShowList": function ($event) {
        _vm.showList = false;
      }
    }
  }), _c('div', [_c('el-tabs', {
    attrs: {
      "type": "card"
    },
    on: {
      "tab-click": _vm.handleClick
    },
    model: {
      value: _vm.activeName,
      callback: function ($$v) {
        _vm.activeName = $$v;
      },
      expression: "activeName"
    }
  }, [_c('el-tab-pane', {
    attrs: {
      "name": "data"
    }
  }, [_c('span', {
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_c('i', {
    staticClass: "el-icon-date"
  }), _vm._v(" " + _vm._s(_vm.setItem.data) + " ")]), _c('el-row', [_c('el-col', {
    attrs: {
      "span": 2
    }
  }, [_c('div', [_vm._v(" ")])]), _c('el-col', {
    attrs: {
      "span": 22
    }
  }, [_c('div', {
    staticStyle: {
      "margin-top": "1px"
    }
  }, [_vm._v(_vm._s(_vm.setItem.chartType))]), _c('div', {
    staticStyle: {
      "margin-top": "10px"
    }
  }, [_c('el-button', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "size": "small"
    },
    on: {
      "click": function ($event) {
        _vm.showList = !_vm.showList;
      }
    }
  }, [_c('i', {
    staticClass: "iconfont",
    class: _vm.chartTypeTxt[0],
    staticStyle: {
      "float": "left"
    }
  }), _vm._v(" " + _vm._s(_vm.chartTypeTxt[1]) + " "), _c('i', {
    staticClass: "iconfont icon-jiantou",
    staticStyle: {
      "float": "right"
    }
  })])], 1), _c('div', {
    staticStyle: {
      "margin-top": "25px"
    }
  }), _vm.chartXYSeriesList ? _c('div', _vm._l(_vm.chartXYSeriesList.fix, function (item) {
    return _c('div', {
      key: item.title,
      staticStyle: {
        "margin-top": "10px"
      }
    }, [_c('el-row', {
      attrs: {
        "gutter": 10
      }
    }, [_c('el-col', {
      staticStyle: {
        "line-height": "28px",
        "text-align": "right"
      },
      attrs: {
        "span": 4
      }
    }, [_vm._v(_vm._s(item.title) + ":")]), _c('el-col', {
      attrs: {
        "span": 20
      }
    }, [_c('el-tag', {
      staticStyle: {
        "width": "100%",
        "text-align": "center"
      },
      attrs: {
        "size": "medium"
      }
    }, [_c('i', {
      staticClass: "iconfont",
      class: item.type,
      staticStyle: {
        "float": "left"
      }
    }), _vm._v(" " + _vm._s(item.field) + " ")])], 1)], 1)], 1);
  }), 0) : _vm._e(), _c('div', {
    staticStyle: {
      "margin-top": "25px"
    }
  }), _vm.chartXYSeriesList ? _c('div', _vm._l(_vm.chartXYSeriesList.change, function (item, index) {
    return _c('div', {
      key: index,
      staticStyle: {
        "margin-top": "10px"
      }
    }, [_c('el-row', {
      attrs: {
        "gutter": 10
      }
    }, [_c('el-col', {
      staticStyle: {
        "line-height": "28px",
        "text-align": "right"
      },
      attrs: {
        "span": 4
      }
    }, [_vm._v(_vm._s(item.title) + ":")]), _c('el-col', {
      attrs: {
        "span": 20
      }
    }, [_c('el-dropdown', {
      staticStyle: {
        "width": "100%"
      },
      attrs: {
        "size": "medium",
        "trigger": "click"
      },
      on: {
        "command": _vm.handleSeriseCommand
      }
    }, [_c('el-button', {
      staticStyle: {
        "width": "100%"
      },
      attrs: {
        "size": "mini"
      }
    }, [_c('i', {
      staticClass: "iconfont",
      class: item.type,
      staticStyle: {
        "float": "left",
        "font-size": "16px"
      }
    }), _vm._v(" " + _vm._s(item.field) + " "), _c('i', {
      staticClass: "iconfont icon-jiantou",
      staticStyle: {
        "float": "right"
      }
    })]), _c('el-dropdown-menu', {
      staticStyle: {
        "min-width": "306px"
      },
      attrs: {
        "slot": "dropdown"
      },
      slot: "dropdown"
    }, _vm._l(_vm.chartXYSeriesList.option, function (ditem, index) {
      return _c('el-dropdown-item', {
        key: `A-${index}`,
        attrs: {
          "command": {
            series: item,
            option: ditem
          }
        }
      }, [_vm._v(" " + _vm._s(ditem.field) + " "), item.id == ditem.id ? _c('i', {
        staticClass: "iconfont icon-dagou",
        staticStyle: {
          "float": "right"
        }
      }) : _vm._e()]);
    }), 1)], 1)], 1)], 1)], 1);
  }), 0) : _vm._e(), _c('div', {
    staticStyle: {
      "margin-top": "25px"
    }
  }), _c('el-row', [_c('div', {
    staticStyle: {
      "margin": "25px 0"
    }
  }), _c('el-checkbox', {
    on: {
      "change": _vm.checkBoxChange
    },
    model: {
      value: _vm.currentRangeConfigCheck,
      callback: function ($$v) {
        _vm.currentRangeConfigCheck = $$v;
      },
      expression: "currentRangeConfigCheck"
    }
  }, [_vm._v(_vm._s(_vm.setItem.transpose))]), _c('div', {
    staticStyle: {
      "margin": "15px 0"
    }
  }), _c('el-checkbox', {
    attrs: {
      "disabled": _vm.checkRowDisabled
    },
    on: {
      "change": _vm.checkBoxChange
    },
    model: {
      value: _vm.currentRangeRowCheck.exits,
      callback: function ($$v) {
        _vm.$set(_vm.currentRangeRowCheck, "exits", $$v);
      },
      expression: "currentRangeRowCheck.exits"
    }
  }, [_vm._v(_vm._s(_vm.setItem.row1) + " " + _vm._s(_vm.getColRowCheckTxt(true)) + " " + _vm._s(_vm.setItem.row2))]), _c('div', {
    staticStyle: {
      "margin": "15px 0"
    }
  }), _c('el-checkbox', {
    attrs: {
      "disabled": _vm.checkColDisabled
    },
    on: {
      "change": _vm.checkBoxChange
    },
    model: {
      value: _vm.currentRangeColCheck.exits,
      callback: function ($$v) {
        _vm.$set(_vm.currentRangeColCheck, "exits", $$v);
      },
      expression: "currentRangeColCheck.exits"
    }
  }, [_vm._v(_vm._s(_vm.setItem.column1) + " " + _vm._s(_vm.getColRowCheckTxt()) + " " + _vm._s(_vm.setItem.column2))])], 1)], 1)], 1)], 1), _c('el-tab-pane', [_c('span', {
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_c('i', {
    staticClass: "el-icon-s-data"
  }), _vm._v(" " + _vm._s(_vm.setItem.style) + " ")]), _c('el-row', [_c('el-col', {
    attrs: {
      "span": 1
    }
  }, [_c('div', [_vm._v(" ")])]), _c('el-col', {
    attrs: {
      "span": 22
    }
  }, [_c('el-collapse', [_c('chart-title', {
    attrs: {
      "router": 'title',
      "chartAllType": _vm.currentChartType,
      "titleOption": _vm.titleOption,
      "lang": _vm.lang
    }
  }), _c('chart-sub-title', {
    attrs: {
      "router": 'subtitle',
      "chartAllType": _vm.currentChartType,
      "subTitleOption": _vm.subTitleOption,
      "lang": _vm.lang
    }
  }), _c('chart-cursor', {
    attrs: {
      "router": 'tooltip',
      "chartAllType": _vm.currentChartType,
      "cursorOption": _vm.cursorOption,
      "lang": _vm.lang
    }
  }), _c('chart-legend', {
    attrs: {
      "router": 'legend',
      "chartAllType": _vm.currentChartType,
      "legendOption": _vm.legendOption,
      "lang": _vm.lang
    }
  }), _vm.currentChartType.split('|')[1] != 'pie' ? _c('chart-axis', {
    attrs: {
      "router": 'axis',
      "axisOption": _vm.axisOption,
      "chartAllType": _vm.currentChartType,
      "lang": _vm.lang
    }
  }) : _vm._e()], 1)], 1), _c('el-col', {
    attrs: {
      "span": 1
    }
  }, [_c('div', [_vm._v(" ")])])], 1)], 1)], 1)], 1)], 1)]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./src/packages/ChartMix/ChartSetting.vue?vue&type=template&id=dc2be93c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"23c09074-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/ChartMix/ChartList.vue?vue&type=template&id=d01548cc&
var ChartListvue_type_template_id_d01548cc_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _vm.showList ? _c('div', {
    staticClass: "luckysheet-datavisual-quick-m",
    style: {
      position: 'absolute',
      zIndex: _vm.zindex,
      bottom: '0px',
      left: '0px',
      right: '0px',
      background: '#fff'
    }
  }, [_c('el-button', {
    staticStyle: {
      "width": "100%",
      "margin": "2px 4px 8px 4px"
    },
    attrs: {
      "plain": "",
      "round": "",
      "size": "small",
      "type": "danger"
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('closeChartShowList');
      }
    }
  }, [_c('i', {
    staticClass: "iconfont icon-guanbi",
    staticStyle: {
      "float": "left"
    }
  }), _vm._v(" " + _vm._s(_vm.close) + " ")]), _c('el-radio-group', {
    staticStyle: {
      "display": "block",
      "text-align": "center"
    },
    attrs: {
      "size": "mini"
    },
    model: {
      value: _vm.currentPro,
      callback: function ($$v) {
        _vm.currentPro = $$v;
      },
      expression: "currentPro"
    }
  }, _vm._l(_vm.config, function (item, index) {
    return _c('el-radio-button', {
      key: index,
      attrs: {
        "label": item.type
      }
    }, [_vm._v(_vm._s(item.name))]);
  }), 1), _c('div', {
    staticClass: "luckysheet-datavisual-quick-menu",
    attrs: {
      "id": "luckysheet-datavisual-quick-menu"
    }
  }, _vm._l(_vm.currentConfig.data, function (item, index) {
    return _c('div', {
      key: index,
      attrs: {
        "data-type": item.type,
        "id": 'luckysheet-datavisual-chart-menu-' + item.type
      },
      on: {
        "click": _vm.quickMenu
      }
    }, [_c('i', {
      staticClass: "iconfont",
      class: item.icon,
      attrs: {
        "aria-hidden": "true"
      }
    }), _c('span', [_vm._v(_vm._s(item.name))])]);
  }), 0), _c('div', {
    staticClass: "luckysheet-datavisual-quick-list luckysheet-scrollbars",
    attrs: {
      "id": "luckysheet-datavisual-quick-list"
    },
    on: {
      "scroll": _vm.quickListScroll
    }
  }, [_vm._l(_vm.currentConfig.data, function (item, index) {
    return [_c('div', {
      key: index,
      staticClass: "luckysheet-datavisual-quick-list-title"
    }, [_c('a', {
      attrs: {
        "data-type": item.type,
        "id": 'luckysheet-datavisual-chart-listtitle-' + item.type
      }
    }, [_c('i', {
      staticClass: "iconfont",
      class: item.icon,
      attrs: {
        "aria-hidden": "true"
      }
    }), _vm._v(" " + _vm._s(item.name) + " ")])]), _c('div', {
      staticClass: "luckysheet-datavisual-quick-list-ul"
    }, _vm._l(item.data, function (chartItem, index) {
      return _c('el-tooltip', {
        key: index,
        attrs: {
          "content": chartItem.name,
          "open-delay": 500,
          "effect": "dark",
          "placement": "bottom"
        }
      }, [_c('div', {
        staticClass: "luckysheet-datavisual-quick-list-item",
        class: chartItem.type == _vm.currentChartType ? 'luckysheet-datavisual-quick-list-item-active' : '',
        attrs: {
          "chartAllType": chartItem.type,
          "data-style": chartItem.type.split('-')[2],
          "data-type": chartItem.type.split('-')[1]
        },
        on: {
          "click": function ($event) {
            return _vm.changeChartType(chartItem.type);
          }
        }
      }, [_c('img', {
        attrs: {
          "src": chartItem.img.length == 0 ? 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjQyIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDI0MiAyMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjxkZWZzLz48cmVjdCB3aWR0aD0iMjQyIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9IjkzIiB5PSIxMDAiIHN0eWxlPSJmaWxsOiNBQUFBQUE7Zm9udC13ZWlnaHQ6Ym9sZDtmb250LWZhbWlseTpBcmlhbCwgSGVsdmV0aWNhLCBPcGVuIFNhbnMsIHNhbnMtc2VyaWYsIG1vbm9zcGFjZTtmb250LXNpemU6MTFwdDtkb21pbmFudC1iYXNlbGluZTpjZW50cmFsIj4yNDJ4MjAwPC90ZXh0PjwvZz48L3N2Zz4=' : chartItem.img,
          "alt": "图片"
        }
      })])]);
    }), 1)];
  })], 2)], 1) : _vm._e();
};

var ChartListvue_type_template_id_d01548cc_staticRenderFns = [];

// CONCATENATED MODULE: ./src/packages/ChartMix/ChartList.vue?vue&type=template&id=d01548cc&

// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js
var jquery = __webpack_require__("1157");
var jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);

// EXTERNAL MODULE: external "Vuex"
var external_Vuex_ = __webpack_require__("5880");
var external_Vuex_default = /*#__PURE__*/__webpack_require__.n(external_Vuex_);

// CONCATENATED MODULE: ./src/data/chartJson.js
/**
 * 图表的样式结构: 为chartOptions.defaultOption下的所有属性,应该是所有图表类型的并集
 * DOM的结构与此对应: DOM操作后修改此处参数,直接存储后台, 渲染图表时候经过一层引擎转换才能使用各个图表插件渲染; 后台拿到此参数,可对应绑定到DOM上
 *
 * 设计细节:
 * 1. 各个图表类型之间的设置项不同,有交集和并集,此处设置统一存储并集参数
 * 2. 切换图表类型时,亦应保留所具有的设置参数,为切换回上一个图表类型保留设置
 */

const baseComponent = {
  label: {
    fontSize: 12,
    //字体大小 //fontSize为'custom'时,取cusFontSize的值
    color: '#333',
    //颜色
    fontFamily: 'sans-serif',
    //字体
    fontGroup: [],
    //字体, 加粗:选中:'bold',无:'normal'; 斜体: 选中:'italic',无:'normal';方向:选中:'vertical',无:'horizen'
    cusFontSize: 12 //自定义文字大小

  },
  formatter: {
    prefix: '',
    //前缀
    suffix: '',
    //后缀
    ratio: 1,
    //数值比例
    digit: 'auto' //小数位数

  },
  item: {
    color: null,
    borderColor: '#000',
    borderType: 'solid',
    borderWidth: 1
  },
  lineStyle: {
    color: null,
    width: 1,
    type: 'solid'
  }
};
const chartComponent = {
  //标题设置
  title: {
    show: false,
    //是否显示
    text: '默认标题',
    //标题内容
    label: deepCopy(baseComponent.label),
    position: {
      value: 'left-top',
      //custom:自定义 //left-top  为custom的时候,取offsetX, offsetY
      offsetX: 40,
      //自定义的X位置,单位百分比
      offsetY: 50 //自定义的Y位置,单位百分比

    }
  },
  //副标题
  subtitle: {
    show: false,
    //是否显示
    text: '',
    //标题内容
    label: deepCopy(baseComponent.label),
    distance: {
      value: 'auto',
      //'auto': 默认, 'far': 远 // 'normal': 一般 'close':近 custom :取cusGap作为距离
      cusGap: 40 //自定义距离

    }
  },
  // 图表设置
  config: {
    color: 'transparent',
    //默认颜色//'#333'
    fontFamily: 'Sans-serif',
    grid: {
      value: 'normal',
      //''normal':正常 'wide':宽 // 'narrow':窄 // 'slender':瘦长 'flat':扁平
      top: 5,
      left: 10,
      right: 20,
      bottom: 10
    }
  },
  //图例设置
  legend: {
    show: true,
    selectMode: 'multiple',
    //'single':单选 //'多选':multiple //'禁用':'disable'
    selected: [//图例显示选择 //动态数据渲染 //分:初始化图表+后台加载使用数据结构中数据 /编辑时根据系列实时变化
    {
      seriesName: '衣服',
      //
      isShow: true
    }, {
      seriesName: '食材',
      //
      isShow: true
    }, {
      seriesName: '图书',
      //
      isShow: true
    }],
    label: deepCopy(baseComponent.label),
    //图例文字样式
    position: {
      value: 'left-top',
      //custom:自定义 //left-top  为custom的时候,取offsetX, offsetY
      offsetX: 40,
      //自定义的X位置,单位百分比
      offsetY: 50,
      //自定义的Y位置,单位百分比
      direction: 'horizontal' //图例位置水平或者垂直 horizontal(水平)/vertical(垂直)

    },
    width: {
      //图例图标大小
      value: 'auto',
      //'auto':默认/ 'big':大/'medium':中/'small':小/'custom':自定义
      cusSize: 25 //图例自定义宽度 ,单位px

    },
    height: {
      //图例图标大小
      value: 'auto',
      //'auto':默认/ 'big':大/'medium':中/'small':小/'custom':自定义
      cusSize: 14 //图例自定义宽度 ,单位px

    },
    distance: {
      value: 'auto',
      //'auto':默认 /far':远 / 'general':一般 / 'near':近 /'custom':自定义
      cusGap: 10 //自定义距离

    },
    itemGap: 10
  },
  //提示设置
  tooltip: {
    show: true,
    //鼠标提示显示
    label: deepCopy(baseComponent.label),
    //文字样式
    backgroundColor: 'rgba(50,50,50,0.7)',
    // 鼠标提示框背景色
    triggerOn: 'mousemove',
    // 'mousemove':鼠标滑过 click':单击 触发条件
    triggerType: 'item',
    //触发类型 //'axis':坐标轴触发 'item':数据项图形触发
    axisPointer: {
      // 指示器配置
      type: 'line',
      // 'line':默认直线指示器 //'cross': 十字指示器配置 //'shadow': 阴影指示器配置
      style: {
        // 指示器样式
        color: '#555',
        width: 'normal',
        //宽度:'normal':正常 'bold': 粗 'bolder':加粗
        type: 'solid' //'solid': 实线 'dash': 虚线 'dot':点线

      }
    },
    format: [//鼠标提示后缀
    {
      seriesName: '衣服',
      prefix: '',
      //前缀
      suffix: '',
      //后缀 (自定义单位)
      ratio: 1,
      //除以的数 // 1为默认, 0.1 /0.001 /...
      digit: 'auto' //小数位数 'auto' :不处理 // 数值:0 , 1 ,2 ...

    }, {
      seriesName: '食材',
      prefix: '',
      //前缀
      suffix: '',
      //后缀
      ratio: 1,
      digit: 'auto'
    }, {
      seriesName: '图书',
      prefix: '',
      //前缀
      suffix: '',
      //后缀
      ratio: 1,
      digit: 'auto'
    }],
    position: 'auto' // 鼠标提示位置 //'inside':中心位置 //'left'/'top'/'right'/'top'

  },
  // XY轴
  axis: {
    axisType: 'xAxisDown',
    //要显示的坐标轴类型
    xAxisUp: {
      show: false,
      //显示X轴
      title: {
        showTitle: false,
        //显示X轴
        text: '',
        //标题内容
        nameGap: 15,
        //标题与轴线距离
        rotate: 0,
        //标题倾斜角度
        label: deepCopy(baseComponent.label),
        fzPosition: 'end' //标题对齐方式,end: 尾部, middle: 中间

      },
      name: '显示X轴',
      inverse: false,
      //反向坐标轴 (echarts有)
      //刻度线
      tickLine: {
        show: true,
        //显示刻度线
        width: 1,
        //刻度线宽度
        color: 'auto' //刻度线颜色

      },
      //刻度
      tick: {
        show: true,
        //显示刻度
        position: 'outside',
        //刻度位置,默认: outside朝外 / inside: 朝内
        length: 5,
        //刻度长度
        width: 1,
        //刻度宽度
        color: 'auto' //刻度颜色

      },
      //标签
      tickLabel: {
        show: true,
        //显示刻度标签
        label: deepCopy(baseComponent.label),
        rotate: 0,
        //倾斜标签角度
        prefix: '',
        //标签前缀
        suffix: '',
        //标签后缀
        optimize: 0,
        distance: 0,
        //标签与轴线距离
        min: 'auto',
        //最小值
        max: 'auto',
        //最大值
        ratio: 1,
        digit: 'auto'
      },
      //网格线
      netLine: {
        show: false,
        //显示网格线
        width: 1,
        //网格线宽度
        type: 'solid',
        //网格线类型
        color: 'auto',
        //网格线颜色
        interval: {
          //网格分割间隔数
          value: 'auto',
          cusNumber: 0
        }
      },
      //网格区域
      netArea: {
        show: false,
        //显示网格区域
        interval: {
          //网格分割间隔数
          value: 'auto',
          cusNumber: 0
        },
        colorOne: 'auto',
        //网格第一颜色
        colorTwo: 'auto' //网格第二颜色

      },
      axisLine: {
        //第二根X轴必需
        onZero: false
      }
    },
    xAxisDown: {
      show: true,
      //显示X轴
      title: {
        showTitle: false,
        //显示X轴
        text: '',
        //标题内容
        nameGap: 15,
        //标题与轴线距离
        rotate: 0,
        //标题倾斜角度
        label: deepCopy(baseComponent.label),
        fzPosition: 'end' //标题对齐方式,end: 尾部, middle: 中间

      },
      name: '显示X轴',
      inverse: false,
      //反向坐标轴 (echarts有)
      //刻度线
      tickLine: {
        show: true,
        //显示刻度线
        width: 1,
        //刻度线宽度
        color: 'auto' //刻度线颜色

      },
      //刻度
      tick: {
        show: true,
        //显示刻度
        position: 'outside',
        //刻度位置,默认: outside朝外 / inside: 朝内
        length: 5,
        //刻度长度
        width: 1,
        //刻度宽度
        color: 'auto' //刻度颜色

      },
      //标签
      tickLabel: {
        show: true,
        //显示刻度标签
        label: deepCopy(baseComponent.label),
        rotate: 0,
        //倾斜标签角度
        prefix: '',
        //标签前缀
        suffix: '',
        //标签后缀
        optimize: 0,
        //标签间隔个数
        distance: 0,
        //标签与轴线距离
        min: null,
        //最小值
        max: null,
        //最大值
        ratio: 1,
        digit: 'auto'
      },
      //网格线
      netLine: {
        show: false,
        //显示网格线
        width: 1,
        //网格线宽度
        type: 'solid',
        //网格线类型
        color: 'auto',
        //网格线颜色
        interval: {
          //网格分割间隔数
          value: 'auto',
          cusNumber: 0
        }
      },
      //网格区域
      netArea: {
        show: false,
        //显示网格区域
        interval: {
          //网格分割间隔数
          value: 'auto',
          cusNumber: 0
        },
        colorOne: 'auto',
        //网格第一颜色
        colorTwo: 'auto' //网格第二颜色

      }
    },
    yAxisLeft: {
      show: true,
      //显示X轴
      title: {
        showTitle: false,
        //显示X轴
        text: '',
        //标题内容
        nameGap: 15,
        //标题与轴线距离
        rotate: 0,
        //标题倾斜角度
        label: deepCopy(baseComponent.label),
        fzPosition: 'end' //标题对齐方式,end: 尾部, middle: 中间

      },
      name: '显示Y轴',
      inverse: false,
      //反向坐标轴 (echarts有)
      //刻度线
      tickLine: {
        show: true,
        //显示刻度线
        width: 1,
        //刻度线宽度
        color: 'auto' //刻度线颜色

      },
      //刻度
      tick: {
        show: true,
        //显示刻度
        position: 'outside',
        //刻度位置,默认: outside朝外 / inside: 朝内
        length: 5,
        //刻度长度
        width: 1,
        //刻度宽度
        color: 'auto' //刻度颜色

      },
      //标签
      tickLabel: {
        show: true,
        //显示刻度标签
        label: deepCopy(baseComponent.label),
        rotate: 0,
        //倾斜标签角度
        formatter: deepCopy(baseComponent.formatter),
        split: 5,
        //分割段数
        min: null,
        //最小值
        max: null,
        //最大值
        prefix: '',
        //标签前缀
        suffix: '',
        //标签后缀
        ratio: 1,
        digit: 'auto',
        distance: 0 //标签与轴线距离

      },
      //网格线
      netLine: {
        show: false,
        //显示网格线
        width: 1,
        //网格线宽度
        type: 'solid',
        //网格线类型
        color: 'auto',
        //网格线颜色
        interval: {
          //网格分割间隔数
          value: 'auto',
          cusNumber: 0
        }
      },
      //网格区域
      netArea: {
        show: false,
        //显示网格区域
        interval: {
          //网格分割间隔数
          value: 'auto',
          cusNumber: 0
        },
        colorOne: 'auto',
        //网格第一颜色
        colorTwo: 'auto' //网格第二颜色

      }
    },
    yAxisRight: {
      show: false,
      //显示X轴
      title: {
        showTitle: false,
        //显示X轴
        text: '',
        //标题内容
        nameGap: 15,
        //标题与轴线距离
        rotate: 0,
        //标题倾斜角度
        label: deepCopy(baseComponent.label),
        fzPosition: 'end' //标题对齐方式,end: 尾部, middle: 中间

      },
      name: '显示Y轴',
      inverse: false,
      //反向坐标轴 (echarts有)
      //刻度线
      tickLine: {
        show: true,
        //显示刻度线
        width: 1,
        //刻度线宽度
        color: 'auto' //刻度线颜色

      },
      //刻度
      tick: {
        show: true,
        //显示刻度
        position: 'outside',
        //刻度位置,默认: outside朝外 / inside: 朝内
        length: 5,
        //刻度长度
        width: 1,
        //刻度宽度
        color: 'auto' //刻度颜色

      },
      //标签
      tickLabel: {
        show: true,
        //显示刻度标签
        label: deepCopy(baseComponent.label),
        rotate: 0,
        //倾斜标签角度
        formatter: deepCopy(baseComponent.formatter),
        split: 5,
        //分割段数
        min: null,
        //最小值
        max: null,
        //最大值
        prefix: '',
        //标签前缀
        suffix: '',
        //标签后缀
        ratio: 1,
        digit: 'auto',
        distance: 0 //标签与轴线距离

      },
      //网格线
      netLine: {
        show: false,
        //显示网格线
        width: 1,
        //网格线宽度
        type: 'solid',
        //网格线类型
        color: 'auto',
        //网格线颜色
        interval: {
          //网格分割间隔数
          value: 'auto',
          cusNumber: 0
        }
      },
      //网格区域
      netArea: {
        show: false,
        //显示网格区域
        interval: {
          //网格分割间隔数
          value: 'auto',
          cusNumber: 0
        },
        colorOne: 'auto',
        //网格第一颜色
        colorTwo: 'auto' //网格第二颜色

      }
    }
  }
}; //此类数据抽出来作为模板数据,每次使用deepCopy一份即可
//注: 若页面展示的是语义化的参数,则此处也只定义语义化的参数,具体数值在引擎里做转换
//若界面选择的直接是用户期望的数值,则直接采用数值即可

/**
 *  位置信息
 *
 */

const positionOption = [{
  value: 'left-top',
  label: '左上'
}, {
  value: 'left-middle',
  label: '左中'
}, {
  value: 'left-bottom',
  label: '左下'
}, {
  value: 'right-top',
  label: '右上'
}, {
  value: 'right-middle',
  label: '右中'
}, {
  value: 'right-bottom',
  label: '右下'
}, {
  value: 'center-top',
  label: '中上'
}, {
  value: 'center-middle',
  label: '居中'
}, {
  value: 'center-bottom',
  label: '中下'
}, {
  value: 'custom',
  label: '自定义'
}]; //距离

const distanceOption = [{
  value: 'auto',
  label: '默认'
}, {
  value: 'far',
  label: '远'
}, {
  value: 'normal',
  label: '一般'
}, {
  value: 'close',
  label: '近'
}, {
  value: 'custom',
  label: '自定义'
}]; // 字体大小集合

const fontSizeOption = [{
  value: 6,
  label: '6px'
}, {
  value: 8,
  label: '8px'
}, {
  value: 10,
  label: '10px'
}, {
  value: 12,
  label: '12px'
}, {
  value: 14,
  label: '14px'
}, {
  value: 16,
  label: '16px'
}, {
  value: 18,
  label: '18px'
}, {
  value: 20,
  label: '20px'
}, {
  value: 22,
  label: '22px'
}, {
  value: 24,
  label: '24px'
}, {
  value: 30,
  label: '30x'
}, {
  value: 36,
  label: '36px'
}, {
  value: 'custom',
  label: '自定义'
}]; // 线样式

const lineStyleOption = [{
  value: 'solid',
  label: '实线'
}, {
  value: 'dashed',
  label: '虚线'
}, {
  value: 'dotted',
  label: '点线'
}]; // 线宽度

const lineWeightOption = [{
  value: 'normal',
  label: '正常'
}, {
  value: 'bold',
  label: '粗'
}, {
  value: 'bolder',
  label: '加粗'
}]; // 普通位置集合

const posOption = [{
  value: 'auto',
  label: '默认'
}, {
  value: 'inside',
  label: '中心位置'
}, {
  value: 'top',
  label: '上侧'
}, {
  value: 'left',
  label: '左侧'
}, {
  value: 'right',
  label: '右侧'
}, {
  value: 'bottom',
  label: '底侧'
}]; // 数值比例集合

const ratioOption = [{
  value: 100,
  label: '乘以100'
}, {
  value: 10,
  label: '乘以10'
}, {
  value: 1,
  label: '默认'
}, {
  value: 0.1,
  label: '除以10'
}, {
  value: 0.01,
  label: '除以100'
}, {
  value: 0.001,
  label: '除以1000'
}, {
  value: 0.0001,
  label: '除以一万'
}, {
  value: 0.00001,
  label: '除以10万'
}, {
  value: 0.000001,
  label: '除以一百万'
}, {
  value: 0.0000001,
  label: '除以一千万'
}, {
  value: 0.00000001,
  label: '除以一亿'
}, {
  value: 0.000000001,
  label: '除以十亿'
}]; // 数值位数集合

const digitOption = [{
  value: 'auto',
  label: '自动显示'
}, {
  value: 0,
  label: '整数'
}, {
  value: 1,
  label: '1位小数'
}, {
  value: 2,
  label: '2位小数'
}, {
  value: 3,
  label: '3位小数'
}, {
  value: 4,
  label: '4位小数'
}, {
  value: 5,
  label: '5位小数'
}, {
  value: 6,
  label: '6位小数'
}, {
  value: 7,
  label: '7位小数'
}, {
  value: 8,
  label: '8位小数'
}]; // (图例)大小集合

const sizeOption = [{
  value: 'auto',
  label: '默认'
}, {
  value: 'big',
  label: '大'
}, {
  value: 'medium',
  label: '中'
}, {
  value: 'small',
  label: '小'
}, {
  value: 'custom',
  label: '自定义'
}]; // 间隔集合

const intervalOption = [{
  value: 'auto',
  label: '默认'
}, {
  value: 0,
  label: '每个刻度'
}, {
  value: 1,
  label: '间隔1个'
}, {
  value: 2,
  label: '间隔2个'
}, {
  value: 3,
  label: '间隔3个'
}, {
  value: 'custom',
  label: '自定义'
}]; //字体大小

const fontSizeList = [{
  label: '默认',
  value: 'auto'
}, {
  label: '6px',
  value: 6
}, {
  label: '8px',
  value: 8
}, {
  label: '10px',
  value: 10
}, {
  label: '12px',
  value: 12
}, {
  label: '14px',
  value: 14
}, {
  label: '16px',
  value: 16
}, {
  label: '18px',
  value: 18
}, {
  label: '24px',
  value: 24
}, {
  label: '28px',
  value: 28
}, {
  label: '36px',
  value: 36
}, {
  label: '自定义',
  value: 'custom'
}]; //label字体样式 1 // 'bold','italic','vertical'

const fontStyleIBV = {
  bold: {
    des: '加粗',
    text: 'B'
  },
  italic: {
    des: '斜体',
    text: 'I'
  },
  vertical: {
    des: '文字方向',
    text: '垂直'
  }
}; //label字体样式 2 // 'italic','bold'

const fontStyleIB = {
  bold: {
    des: '加粗',
    text: 'B'
  },
  italic: {
    des: '斜体',
    text: 'I'
  }
}; // model data

const chartModelData = [["地区", "衣服", "食材", "图书"], ["上海", 134, 345, 51], ["北京", 345, 421, 234], ["广州", 453, 224, 156], ["杭州", 321, 634, 213], ["南京", 654, 542, 231]]; // base chart option

const chartJson_chartOptions = {
  //图表类型设置集合
  chartAllType: 'echarts|line|default',
  //图表配置
  defaultOption: deepCopy(chartComponent),
  //图表数据
  chartData: deepCopy(chartModelData)
}; //图表设置项


// CONCATENATED MODULE: ./src/utils/util.js

/**
 * 深度克隆数据,包括对象，数组，map
 * @param {*} obj 对象，数组，map
 */

function deepCopy(obj) {
  if (!isObject(obj) && !isMap(obj)) {
    return obj;
  }

  let cloneObj;

  if (isMap(obj)) {
    cloneObj = new Map();

    for (let key of obj.keys()) {
      let value = obj.get(key);

      if (isMap(value) || isObject(value) || Array.isArray(obj)) {
        let copyVal = deepCopy(value);
        cloneObj.set(key, copyVal);
      } else {
        cloneObj.set(key, value);
      }
    }
  } else if (typeof obj === "function") {
    cloneObj = obj;
  } else {
    cloneObj = Array.isArray(obj) ? [] : {};

    if (obj instanceof HTMLElement) {
      cloneObj = obj.cloneNode(true);
    } else {
      for (let key in obj) {
        // if (obj.hasOwnProperty(key)) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          cloneObj[key] = isMap(obj[key]) || isObject(obj[key]) ? deepCopy(obj[key]) : obj[key];
        }
      }
    }
  }

  return cloneObj;
}
/**
 * 判断参数是否是Object类型
 * @param {*} o 
 */


function isObject(o) {
  return !isMap(o) && (typeof o === 'object' || typeof o === 'function') && o !== null;
}
/**
 * 判断参数是否是Map类型
 * @param {*} obj 
 */


function isMap(obj) {
  if (obj instanceof Map) {
    return true;
  } else {
    return false;
  }
}
/**
 * 深拷贝
 * @param {*} obj 拷贝对象(object or array)
 * @param {*} cache 缓存数组
 */


const deepClone = function (obj, cache = []) {
  // typeof [] => 'object'
  // typeof {} => 'object'
  if (obj === null || typeof obj !== 'object') {
    return obj;
  } // 如果传入的对象与缓存的相等, 则递归结束, 这样防止循环

  /**
   * 类似下面这种
   * var a = {b:1}
   * a.c = a
   * 资料: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cyclic_object_value
   */


  const hit = cache.filter(c => c.original === obj)[0];

  if (hit) {
    return hit.copy;
  }

  const copy = Array.isArray(obj) ? [] : {}; // 将copy首先放入cache, 因为我们需要在递归deepCopy的时候引用它

  cache.push({
    original: obj,
    copy
  });
  Object.keys(obj).forEach(key => {
    copy[key] = deepClone(obj[key], cache);
  });
  return copy;
}; //生成随机的图表id


function generateRandomKey(prefix) {
  if (prefix == null) {
    prefix = 'chart';
  }

  var userAgent = window.navigator.userAgent.replace(/[^a-zA-Z0-9]/g, '').split('');
  var mid = '';

  for (var i = 0; i < 12; i++) {
    mid += userAgent[Math.round(Math.random() * (userAgent.length - 1))];
  }

  var time = new Date().getTime();
  return prefix + '_' + mid + '_' + time;
}

function isdatetime(s) {
  if (s == null || s.toString().length < 5) {
    return false;
  } else if (checkDateTime(s)) {
    return true;
  } else {
    return false;
  }

  function checkDateTime(str) {
    var reg1 = /^(\d{4})-(\d{1,2})-(\d{1,2})(\s(\d{1,2}):(\d{1,2})(:(\d{1,2}))?)?$/;
    var reg2 = /^(\d{4})\/(\d{1,2})\/(\d{1,2})(\s(\d{1,2}):(\d{1,2})(:(\d{1,2}))?)?$/;

    if (!reg1.test(str) && !reg2.test(str)) {
      return false;
    }

    var year = RegExp.$1,
        month = RegExp.$2,
        day = RegExp.$3;

    if (year < 1900) {
      return false;
    }

    if (month > 12) {
      return false;
    }

    if (day > 31) {
      return false;
    }

    if (month == 2) {
      if (new Date(year, 1, 29).getDate() == 29 && day > 29) {
        return false;
      } else if (new Date(year, 1, 29).getDate() != 29 && day > 28) {
        return false;
      }
    }

    return true;
  }
}

function isRealNum(val) {
  if (val === "" || val == null) {
    return false;
  }

  if (!isNaN(val)) {
    return true;
  } else {
    return false;
  }
}

function hasChinaword(s) {
  var patrn = /[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/gi;

  if (!patrn.exec(s)) {
    return false;
  } else {
    return true;
  }
}

function isdatatype(s) {
  var type = "string";

  if (isdatetime(s)) {
    type = "date";
  } else if (!isNaN(parseFloat(s)) && !hasChinaword(s)) {
    type = "num";
  }

  return type;
}

function dataTranspose(getdata) {
  var arr = [];

  for (var c = 0; c < getdata[0].length; c++) {
    var a = [];

    for (var r = 0; r < getdata.length; r++) {
      var value = '';

      if (getdata[r] != null && getdata[r][c] != null) {
        value = getdata[r][c];
      }

      a.push(value);
    }

    arr.push(a);
  }

  return arr;
}

function dataChangeOrder(data, order) {
  if (data.length == 0 || data.length != order.length) {
    return data;
  }

  var ret = [];

  for (var i = 0; i < data.length; i++) {
    ret[order[i]] = data[i];
  }

  return ret;
}

function dataChangeOrderTwo(data, order) {
  var ret = [];

  for (var r = 0; r < data.length; r++) {
    var d = data[r];
    ret.push(dataChangeOrder(d, order));
  }

  return ret;
}

function getObjType(obj) {
  var toString = Object.prototype.toString;
  var map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  }; // if(obj instanceof Element){
  //     return 'element';
  // }

  return map[toString.call(obj)];
}

function getRowColCheck(data) {
  //从右下角开始，按照斜角网上遍历，如果非数字格式则取得上一个斜角的行列值。然后分别按行和按列往左遍历，遇到非数字则记0-i为列头或行头
  var r = data.length - 1,
      c = data[0].length - 1;
  var r_cal, c_cal;

  while (r >= 0 && c >= 0) {
    var cell = data[r][c]; //cell的可能值,都判断为同数字一样略过，不作为标题
    //1.cell = 3;
    //2.cell = {v:3}
    //3.cell = {}
    //4.cell = ""
    //5.cell.v = ""

    if (cell === null || isRealNum(cell) || getObjType(cell) == 'object' && isRealNum(cell.v) || getObjType(cell) == 'object' && getObjType(cell.v) == 'undefined' || cell === '' || cell.v === '') {
      if (cell && cell.ct && cell.ct.fa == 'yyyy-MM-dd') {
        r_cal = r + 1;
        c_cal = c + 1;
        break;
      } else {
        r_cal = r--;
        c_cal = c--;
      }
    } else {
      if (r == data.length - 1 && c == data[0].length - 1) {
        r_cal = r;
        c_cal = c;
      } else {
        r_cal = r + 1;
        c_cal = c + 1;
      }

      break;
    }
  }

  var rowcheck = {
    exits: false,
    range: [0, 0]
  }; //默认取第一行，让设计界面的check可以有值

  if (r_cal > 0) {
    for (var i = r_cal; i >= 0; i--) {
      var cell = data[i][c_cal];

      if (cell === null || isRealNum(cell) || getObjType(cell) == 'object' && isRealNum(cell.v) || getObjType(cell) == 'object' && getObjType(cell.v) == 'undefined' || cell === '' || cell.v === '') {} else {
        rowcheck.exits = true;
        rowcheck.range = [0, i];
        break;
      }
    }
  }

  var colcheck = {
    exits: false,
    range: [0, 0]
  }; //默认取第一列，让设计界面的check可以有值

  if (c_cal > 0) {
    for (var i = c_cal; i >= 0; i--) {
      var cell = data[r_cal][i];

      if (cell === null || isRealNum(cell) || getObjType(cell) == 'object' && isRealNum(cell.v) || getObjType(cell) == 'object' && getObjType(cell.v) == 'undefined' || cell === '' || cell.v === '') {
        if (cell && cell.ct && cell.ct.fa == 'yyyy-MM-dd') {
          colcheck.exits = true;
          colcheck.range = [0, i];
          break;
        }
      } else {
        colcheck.exits = true;
        colcheck.range = [0, i];
        break;
      }
    }
  } //处理行标题和列标签为整个数据的时候，把标题去除，只用作内容


  if (rowcheck.range[1] + 1 == data.length) {
    rowcheck = {
      exits: false,
      range: [0, 0]
    };
  }

  if (colcheck.range[1] + 1 == data[0].length) {
    colcheck = {
      exits: false,
      range: [0, 0]
    };
  } // console.dir([rowcheck, colcheck])


  return [rowcheck, colcheck];
}

function getRangeSplitArray(chartData, rangeArray, rangeColCheck, rangeRowCheck) {
  var rangeSplitArray = {}; //生成类似excel的图表选区

  if (rangeArray.length > 1) {
    //上左、上右、下左、下右
    rangeSplitArray = {
      title: {
        row: [0, 0],
        column: [0, 0]
      },
      rowtitle: {
        row: [0, 0],
        column: [1, chartData[0].length - 1]
      },
      coltitle: {
        row: [1, chartData.length - 1],
        column: [0, 0]
      },
      content: {
        row: [1, chartData.length - 1],
        column: [1, chartData[0].length - 1]
      },
      type: "multi",
      range: rangeArray
    };
  } //转置
  //处理规则：根据不转置的情况，变换取值范围，coltitle和rowtitle交换，内部row和column交换，content的row和column交换，最后在getChartDataCache中转置整个区域数据时候取值时候即可取到正确范围的数据
  // if(rangeConfigCheck){
  // 	//上左、上右、下左、下右
  // 	if (rangeColCheck.exits && rangeRowCheck.exits) {
  // 		rangeSplitArray = {
  // 			"title": { column: rangeRowCheck.range, row: rangeColCheck.range },
  // 			"coltitle": { column: rangeRowCheck.range, row: [rangeColCheck.range[1] + 1, chartData[0].length - 1] },
  // 			"rowtitle": { column: [rangeRowCheck.range[1] + 1, chartData.length - 1], row: rangeColCheck.range },
  // 			"content": { column: [rangeRowCheck.range[1] + 1, chartData.length - 1], row: [rangeColCheck.range[1] + 1, chartData[0].length - 1] }, type: "normal", range: rangeArray[0]
  // 		};
  // 	}
  // 	//左、右，没有行标题
  // 	else if (rangeColCheck.exits) {
  // 		rangeSplitArray = {
  // 			"title": null,
  // 			"coltitle": null,
  // 			"rowtitle": { row: [0, chartData.length - 1], column: rangeColCheck.range },
  // 			"content": { row: [0, chartData.length - 1], column: [rangeColCheck.range[1] + 1, chartData[0].length - 1] }, type: "leftright", range: rangeArray[0] };
  // 	}
  // 	//上、下，没有列标题
  // 	else if (rangeRowCheck.exits) {
  // 		rangeSplitArray = {
  // 			"title": null,
  // 			"coltitle": { row: rangeRowCheck.range, column: [0, chartData[0].length - 1] },
  // 			"rowtitle": null,
  // 			"content": { row: [rangeRowCheck.range[1] + 1, chartData.length - 1], column: [0, chartData[0].length - 1] }, type: "topbottom", range: rangeArray[0] };
  // 	}
  // 	//无标题，纯数据没有标题
  // 	else {
  // 		rangeSplitArray = {
  // 			"title": null,
  // 			"coltitle": null,
  // 			"rowtitle": null,
  // 			"content": { row: [0, chartData.length - 1], column: [0, chartData[0].length - 1] }, type: "contentonly", range: rangeArray[0] };
  // 	}
  // }else{ //不转置
  //上左、上右、下左、下右


  if (rangeColCheck.exits && rangeRowCheck.exits) {
    rangeSplitArray = {
      title: {
        row: rangeRowCheck.range,
        column: rangeColCheck.range
      },
      rowtitle: {
        row: rangeRowCheck.range,
        column: [rangeColCheck.range[1] + 1, chartData[0].length - 1]
      },
      coltitle: {
        row: [rangeRowCheck.range[1] + 1, chartData.length - 1],
        column: rangeColCheck.range
      },
      content: {
        row: [rangeRowCheck.range[1] + 1, chartData.length - 1],
        column: [rangeColCheck.range[1] + 1, chartData[0].length - 1]
      },
      type: "normal",
      range: rangeArray[0]
    };
  } //左、右，没有行标题
  else if (rangeColCheck.exits) {
    //处理"content"：如果列标题的列数等于整个数据的列数，则没有内容
    rangeSplitArray = {
      title: null,
      rowtitle: null,
      coltitle: {
        row: [0, chartData.length - 1],
        column: rangeColCheck.range
      },
      content: {
        row: [0, chartData.length - 1],
        column: [rangeColCheck.range[1] + 1, chartData[0].length - 1]
      },
      type: "leftright",
      range: rangeArray[0]
    };
  } //上、下，没有列标题
  else if (rangeRowCheck.exits) {
    //处理"content"：如果行标题的行数等于整个数据的行数，则没有内容
    rangeSplitArray = {
      title: null,
      rowtitle: {
        row: rangeRowCheck.range,
        column: [0, chartData[0].length - 1]
      },
      coltitle: null,
      content: {
        row: [rangeRowCheck.range[1] + 1, chartData.length - 1],
        column: [0, chartData[0].length - 1]
      },
      type: "topbottom",
      range: rangeArray[0]
    };
  } //无标题，纯数据没有标题
  else {
    rangeSplitArray = {
      title: null,
      rowtitle: null,
      coltitle: null,
      content: {
        row: [0, chartData.length - 1],
        column: [0, chartData[0].length - 1]
      },
      type: "contentonly",
      range: rangeArray[0]
    };
  } // }
  // console.dir(rangeSplitArray)


  return rangeSplitArray;
} //处理qk格式的数据返回原始值，###########需要完善日期获取############。


function getChartCellData(r, c, d) {
  var value = null; // if (luckysheet != null && luckysheet.getcellvalue != null) {
  //   value = luckysheet.getcellvalue(r, c, d)
  // } else {

  var cell = d[r][c];

  if (cell != null) {
    if (cell.v != null) {
      value = cell.v;
    } else {
      value = cell;
    }
  } // }
  //处理undefined


  if (value == undefined) {
    value = '';
  }

  return value;
}

function getChartDataCache(chartData, rangeSplitArray, product, type, style, rangeConfigCheck) {
  var ret = {};

  if (type == 'line' || type == 'column' || type == 'area' || type == 'scatter' || type == 'bar' || type == 'pie' || type == 'radar' || type == 'funnel' || type == 'gauge' || type == 'map') {
    //转置
    if (rangeConfigCheck) {
      if (rangeSplitArray.type == 'normal') {
        var rangeSA = rangeSplitArray; //取原数据标签及列标题 用作X轴

        var rtitle = rangeSA.rowtitle,
            rtitleData = [];

        if (rtitle != null) {
          ret.title = {
            //标题不变
            text: getChartCellData(rangeSA.title.row[0], rangeSA.title.column[0], chartData)
          };

          for (var c = rtitle.column[0]; c <= rtitle.column[1]; c++) {
            var value = '';

            for (var r = rtitle.row[0]; r <= rtitle.row[1]; r++) {
              value += '\n' + getChartCellData(r, c, chartData); //使用X轴处理方式
            }

            value = value.substr(1, value.length);

            if (product == 'highcharts') {
              value = value.replace(/\n/g, '<br/>');
            }

            rtitleData.push(value);
          }

          ret.xAxis = rtitleData;
        } //取x轴以及行标题 用作数据标签


        var ctitle = rangeSA.coltitle,
            ctitleData = [];

        if (ctitle != null) {
          for (var r = ctitle.row[0]; r <= ctitle.row[1]; r++) {
            var value = '';

            for (var c = ctitle.column[0]; c <= ctitle.column[1]; c++) {
              value += ' ' + getChartCellData(r, c, chartData);
            }

            ctitleData.push(value.substr(1, value.length));
          }

          ret.label = ctitleData;
        } //系列series的数据


        var content = rangeSA.content,
            contentData = [];

        if (content != null) {
          var series_tpye = {};

          for (var c = content.column[0]; c <= content.column[1]; c++) {
            var row = [];
            var i = 0;

            for (var r = content.row[0]; r <= content.row[1]; r++) {
              var value = getChartCellData(r, c, chartData);
              row.push(value); //######需要再细化时间、数字、字符的判断#####

              if (c == content.column[0]) {
                series_tpye[i++] = isdatatype(value);
              }
            }

            contentData.push(row);
          }

          ret.series = contentData; //用于在界面上显示系列的格式符号

          ret.series_tpye = series_tpye;
        }
      } //左、右，行标题用系列1、系列2、系列3 等样式表示
      else if (rangeSplitArray.type == 'leftright') {
        var rangeSA = rangeSplitArray; //取x轴以及行标题 用作数据标签

        var ctitle = rangeSA.coltitle,
            ctitleData = [];

        if (ctitle != null) {
          for (var r = ctitle.row[0]; r <= ctitle.row[1]; r++) {
            var value = '';

            for (var c = ctitle.column[0]; c <= ctitle.column[1]; c++) {
              value += ' ' + getChartCellData(r, c, chartData);
            }

            ctitleData.push(value.substr(1, value.length));
          }

          ret.label = ctitleData;
        } //系列series的数据


        var content = rangeSA.content,
            contentData = [];

        if (content != null) {
          var series_tpye = {};

          for (var c = content.column[0]; c <= content.column[1]; c++) {
            var row = [];
            var i = 0;

            for (var r = content.row[0]; r <= content.row[1]; r++) {
              var value = getChartCellData(r, c, chartData);
              row.push(value); //######需要再细化时间、数字、字符的判断#####

              if (c == content.column[0]) {
                series_tpye[i++] = isdatatype(value);
              }
            }

            contentData.push(row);
          }

          ret.series = contentData; //用于在界面上显示系列的格式符号

          ret.series_tpye = series_tpye;
        } //取原数据标签及列标题 用作X轴


        var rtitle = rangeSA.rowtitle,
            rtitleData = [];

        if (rtitle == null) {
          ret.title = {
            //标题不变
            text: '图表标题' //标题直接使用 "图表标题"

          };

          for (var c = 0; c <= content.column[1] - content.column[0]; c++) {
            rtitleData.push(c + 1); //列标题用1、2、3 表示
          }

          ret.xAxis = rtitleData;
        }
      } //上、下，列标题用1、2、3等样式表示
      else if (rangeSplitArray.type == 'topbottom') {
        var rangeSA = rangeSplitArray; //取原数据标签及列标题 用作X轴

        var rtitle = rangeSA.rowtitle,
            rtitleData = [];

        if (rtitle != null) {
          ret.title = {
            //标题不变
            text: '图表标题' //标题直接使用 "图表标题"

          };

          for (var c = rtitle.column[0]; c <= rtitle.column[1]; c++) {
            var value = '';

            for (var r = rtitle.row[0]; r <= rtitle.row[1]; r++) {
              value += '\n' + getChartCellData(r, c, chartData); //使用X轴处理方式
            }

            value = value.substr(1, value.length);

            if (product == 'highcharts') {
              value = value.replace(/\n/g, '<br/>');
            }

            rtitleData.push(value);
          }

          ret.xAxis = rtitleData;
        } //系列series的数据


        var content = rangeSA.content,
            contentData = [];

        if (content != null) {
          var series_tpye = {};

          for (var c = content.column[0]; c <= content.column[1]; c++) {
            var row = [];
            var i = 0;

            for (var r = content.row[0]; r <= content.row[1]; r++) {
              var value = getChartCellData(r, c, chartData);
              row.push(value); //######需要再细化时间、数字、字符的判断#####

              if (c == content.column[0]) {
                series_tpye[i++] = isdatatype(value);
              }
            }

            contentData.push(row);
          }

          ret.series = contentData; //用于在界面上显示系列的格式符号

          ret.series_tpye = series_tpye;
        } //取x轴以及行标题 用作数据标签


        var ctitle = rangeSA.coltitle,
            ctitleData = [];

        if (ctitle == null) {
          for (var r = 0; r <= content.row[1] - content.row[0]; r++) {
            ctitleData.push('系列' + (r + 1)); //用系列1、系列2、系列3 样式表示
          }

          ret.label = ctitleData;
        }
      } //无标题，行标题用系列1、系列2、系列3样式表示，列标题用1、2、3 样式表示
      else if (rangeSplitArray.type == 'contentonly') {
        var rangeSA = rangeSplitArray; //系列series的数据

        var content = rangeSA.content,
            contentData = [];

        if (content != null) {
          var series_tpye = {};

          for (var c = content.column[0]; c <= content.column[1]; c++) {
            var row = [];
            var i = 0;

            for (var r = content.row[0]; r <= content.row[1]; r++) {
              var value = getChartCellData(r, c, chartData);
              row.push(value); //######需要再细化时间、数字、字符的判断#####

              if (c == content.column[0]) {
                series_tpye[i++] = isdatatype(value);
              }
            }

            contentData.push(row);
          }

          ret.series = contentData; //用于在界面上显示系列的格式符号

          ret.series_tpye = series_tpye;
        } //取原数据标签及列标题 用作X轴


        var rtitle = rangeSA.rowtitle,
            rtitleData = [];

        if (rtitle == null) {
          ret.title = {
            //标题不变
            text: '图表标题' //标题直接使用 "图表标题"

          };

          for (var c = 0; c <= content.column[1] - content.column[0]; c++) {
            rtitleData.push(c + 1); //列标题用1、2、3 表示
          }

          ret.xAxis = rtitleData;
        } //取x轴以及行标题 用作数据标签


        var ctitle = rangeSA.coltitle,
            ctitleData = [];

        if (ctitle == null) {
          for (var r = 0; r <= content.row[1] - content.row[0]; r++) {
            ctitleData.push('系列' + (r + 1)); //用系列1、系列2、系列3 样式表示
          }

          ret.label = ctitleData;
        }
      }
    } else {
      //不转置
      if (rangeSplitArray.type == 'normal') {
        var rangeSA = rangeSplitArray; //数据标签及列标题

        var rtitle = rangeSA.rowtitle,
            rtitleData = [];

        if (rtitle != null) {
          for (var c = rtitle.column[0]; c <= rtitle.column[1]; c++) {
            var value = '';

            for (var r = rtitle.row[0]; r <= rtitle.row[1]; r++) {
              value += ' ' + getChartCellData(r, c, chartData);
            }

            rtitleData.push(value.substr(1, value.length));
          }

          ret.label = rtitleData;
        } //x轴以及行标题


        var ctitle = rangeSA.coltitle,
            ctitleData = [];

        if (ctitle != null) {
          for (var r = ctitle.row[0]; r <= ctitle.row[1]; r++) {
            var value = '';

            for (var c = ctitle.column[0]; c <= ctitle.column[1]; c++) {
              value += '\n' + getChartCellData(r, c, chartData);
            }

            value = value.substr(1, value.length);

            if (product == 'highcharts') {
              value = value.replace(/\n/g, '<br/>');
            }

            ctitleData.push(value);
          } // 饼图x轴数据,散点图X轴数据不一样
          // if (type != 'pie') {


          ret.xAxis = ctitleData; // } else if (type == 'pie') {
          //   ret.pieName = ctitleData
          // }
        } //系列series的数据


        var content = rangeSA.content,
            contentData = [];

        if (content != null) {
          var series_tpye = {};

          for (var r = content.row[0]; r <= content.row[1]; r++) {
            var row = [];
            var i = 0;

            for (var c = content.column[0]; c <= content.column[1]; c++) {
              var value = getChartCellData(r, c, chartData);
              row.push(value); //######需要再细化时间、数字、字符的判断#####

              if (r == content.row[0]) {
                series_tpye[i++] = isdatatype(value);
              }
            }

            contentData.push(row);
          }

          ret.series = contentData; //用于在界面上显示系列的格式符号

          ret.series_tpye = series_tpye;
        }
      } //左、右，行标题用系列1、系列2、系列3 等样式表示
      else if (rangeSplitArray.type == 'leftright') {
        var rangeSA = rangeSplitArray; //x轴以及行标题

        var ctitle = rangeSA.coltitle,
            ctitleData = [];

        if (ctitle != null) {
          for (var r = ctitle.row[0]; r <= ctitle.row[1]; r++) {
            var value = '';

            for (var c = ctitle.column[0]; c <= ctitle.column[1]; c++) {
              value += '\n' + getChartCellData(r, c, chartData);
            }

            value = value.substr(1, value.length);

            if (product == 'highcharts') {
              value = value.replace(/\n/g, '<br/>');
            }

            ctitleData.push(value);
          }

          ret.xAxis = ctitleData;
        } //系列series的数据


        var content = rangeSA.content,
            contentData = [];

        if (content != null) {
          var series_tpye = {};

          for (var r = content.row[0]; r <= content.row[1]; r++) {
            var row = [];
            var i = 0;

            for (var c = content.column[0]; c <= content.column[1]; c++) {
              var value = getChartCellData(r, c, chartData);
              row.push(value); //######需要再细化时间、数字、字符的判断#####

              if (r == content.row[0]) {
                series_tpye[i++] = isdatatype(value);
              }
            }

            contentData.push(row);
          }

          ret.series = contentData; //用于在界面上显示系列的格式符号

          ret.series_tpye = series_tpye;
        } //数据标签及列标题


        var rtitle = rangeSA.rowtitle,
            rtitleData = [];

        if (rtitle == null) {
          ret.title = {
            text: '图表标题' //标题直接使用 "图表标题"

          };

          for (var c = 0; c <= content.column[1] - content.column[0]; c++) {
            rtitleData.push('系列' + (c + 1)); //行标题用系列1、系列2、系列3 样式表示
          }

          ret.label = rtitleData;
        }
      } //上、下，列标题用1、2、3等样式表示
      else if (rangeSplitArray.type == 'topbottom') {
        var rangeSA = rangeSplitArray; //数据标签及列标题

        var rtitle = rangeSA.rowtitle,
            rtitleData = [];

        if (rtitle != null) {
          ret.title = {
            text: '图表标题' //标题直接使用 "图表标题"

          };

          for (var c = rtitle.column[0]; c <= rtitle.column[1]; c++) {
            var value = '';

            for (var r = rtitle.row[0]; r <= rtitle.row[1]; r++) {
              value += ' ' + getChartCellData(r, c, chartData);
            }

            rtitleData.push(value.substr(1, value.length));
          }

          ret.label = rtitleData;
        } //系列series的数据


        var content = rangeSA.content,
            contentData = [];

        if (content != null) {
          var series_tpye = {};

          for (var r = content.row[0]; r <= content.row[1]; r++) {
            var row = [];
            var i = 0;

            for (var c = content.column[0]; c <= content.column[1]; c++) {
              var value = getChartCellData(r, c, chartData);
              row.push(value); //######需要再细化时间、数字、字符的判断#####

              if (r == content.row[0]) {
                series_tpye[i++] = isdatatype(value);
              }
            }

            contentData.push(row);
          }

          ret.series = contentData; //用于在界面上显示系列的格式符号

          ret.series_tpye = series_tpye;
        } //x轴以及行标题


        var ctitle = rangeSA.coltitle,
            ctitleData = [];

        if (ctitle == null) {
          for (var r = 0; r <= content.row[1] - content.row[0]; r++) {
            ctitleData.push(r + 1); //列标题用1、2、3 表示
          }

          ret.xAxis = ctitleData;
        }
      } //无标题，行标题用系列1、系列2、系列3样式表示，列标题用1、2、3 样式表示
      else if (rangeSplitArray.type == 'contentonly') {
        var rangeSA = rangeSplitArray; //系列series的数据

        var content = rangeSA.content,
            contentData = [];

        if (content != null) {
          var series_tpye = {};

          for (var r = content.row[0]; r <= content.row[1]; r++) {
            var row = [];
            var i = 0;

            for (var c = content.column[0]; c <= content.column[1]; c++) {
              var value = getChartCellData(r, c, chartData);
              row.push(value); //######需要再细化时间、数字、字符的判断#####

              if (r == content.row[0]) {
                series_tpye[i++] = isdatatype(value);
              }
            }

            contentData.push(row);
          }

          ret.series = contentData; //用于在界面上显示系列的格式符号

          ret.series_tpye = series_tpye;
        } //数据标签及列标题


        var rtitle = rangeSA.rowtitle,
            rtitleData = [];

        if (rtitle == null) {
          ret.title = {
            text: '图表标题' //标题直接使用 "图表标题"

          };

          for (var c = 0; c <= content.column[1] - content.column[0]; c++) {
            rtitleData.push('系列' + (c + 1)); //用系列1、系列2、系列3 样式表示
          }

          ret.label = rtitleData;
        } //x轴以及行标题


        var ctitle = rangeSA.coltitle,
            ctitleData = [];

        if (ctitle == null) {
          for (var r = 0; r <= content.row[1] - content.row[0]; r++) {
            ctitleData.push(r + 1); //列标题用1、2、3 表示
          }

          ret.xAxis = ctitleData;
        }
      }
    }
  }

  return ret;
}

function getChartDataSeriesOrder(len) {
  var ret = {};
  ret.length = len;

  for (var i = 0; i < len; i++) {
    ret[i] = i;
  }

  return ret;
}

function addDataToOption(defaultOptionIni, chartDataCache, chartDataSeriesOrder, chartPro, chartType, chartStyle, chartData) {
  if (!!chartDataCache.xAxis && chartType != 'bar') {
    //由于配置可能来自已经让用户配置过的项，所以为了不丢失选项，更新数据的时候需要进行判断。如果是象限数据为空、象限数据与需要更新的数据大小不一致，则全量更新。否则深入到每一项进行更新。以下同
    if (defaultOptionIni.axis.xAxisDown.data == null || defaultOptionIni.axis.xAxisDown.data.length == 0 || defaultOptionIni.axis.xAxisDown.data.length != chartDataCache.xAxis.length) {
      defaultOptionIni.axis.xAxisDown.data = chartDataCache.xAxis;
    } else {
      for (var i = 0; i < defaultOptionIni.axis.xAxisDown.data.length; i++) {
        var cell = defaultOptionIni.axis.xAxisDown.data[i];

        if (cell instanceof Object) {
          cell.value = chartDataCache.xAxis[i];
        } else {
          defaultOptionIni.axis.xAxisDown.data[i] = chartDataCache.xAxis[i];
        }
      }
    }

    defaultOptionIni.axis.xAxisDown.type = 'category';
    defaultOptionIni.axis.yAxisLeft.type = 'value';
  }

  if (chartPro == 'echarts' && chartType == 'bar') {
    if (defaultOptionIni.axis.yAxisLeft.data == null || defaultOptionIni.axis.yAxisLeft.data.length == 0 || defaultOptionIni.axis.yAxisLeft.data.length != chartDataCache.xAxis.length) {
      defaultOptionIni.axis.yAxisLeft.data = chartDataCache.xAxis;
    } else {
      for (var i = 0; i < defaultOptionIni.axis.yAxisLeft.data.length; i++) {
        var cell = defaultOptionIni.axis.yAxisLeft.data[i];

        if (cell instanceof Object) {
          cell.value = chartDataCache.xAxis[i];
        } else {
          defaultOptionIni.axis.yAxisLeft.data[i] = chartDataCache.xAxis[i];
        }
      }
    }

    defaultOptionIni.axis.yAxisLeft.type = 'category';
    defaultOptionIni.axis.xAxisDown.type = 'value';
  }

  if (!!chartDataCache.series) {
    // console.dir(chartDataCache)
    var seriesData = dataTranspose(dataChangeOrderTwo(chartDataCache.series, chartDataSeriesOrder));
    var legendData = dataChangeOrder(chartDataCache.label, chartDataSeriesOrder);
    defaultOptionIni.legend.data = legendData;
    defaultOptionIni.seriesData = seriesData; // echarts默认所需初始数据格式

    if (chartType == 'pie') {
      transformPie(defaultOptionIni, chartDataCache, seriesData, legendData, chartPro, chartType, chartStyle); // console.dir(defaultOptionIni)
    } else if (chartType == 'line' || chartType == 'area' || chartType == 'bar' || chartType == 'column') {
      transformCommon(defaultOptionIni, seriesData, legendData, chartPro, chartType, chartStyle);
    }
  }

  return defaultOptionIni;
} // transform common chart


function transformCommon(defaultOptionIni, seriesData, legendData, chartPro, chartType, chartStyle) {
  if (defaultOptionIni.series.length != seriesData.length) {
    defaultOptionIni.series = [];
  }

  for (var i = 0; i < seriesData.length; i++) {
    if (defaultOptionIni.series[i] == null) {
      defaultOptionIni.series[i] = initCommon(defaultOptionIni.series[i], seriesData[i], legendData[i], chartPro, chartType, chartStyle);
    } else {
      defaultOptionIni.series[i] = editCommon(defaultOptionIni.series[i], seriesData[i], legendData[i], chartPro, chartType, chartStyle);
    }
  }
} // 初始化图表


function initCommon(series, data, legendData, product, type, style) {
  series = {
    itemStyle: deepCopy(baseComponent.item),
    lineStyle: deepCopy(baseComponent.lineStyle),
    data,
    type,
    name: legendData,
    markPoint: {
      data: []
    },
    markLine: {
      data: []
    },
    markArea: {
      data: []
    }
  };
  let actions = new Map([['line', initLine], ['area', initArea], ['bar', initBar], ['column', initColumn]]);
  return actions.get(type)(series, data, legendData, product, type, style);
} // 初始化折现图series


function initLine(series, data, legendData, product, type, style) {
  if (style == 'smooth') {
    series.smooth = true;
  }

  if (style == 'label') {
    series.label = {
      show: true,
      formatter: '{c}',
      fontSize: 10,
      distance: 1
    };
  }

  return series;
} // 初始化面积图


function initArea(series, data, legendData, product, type, style) {
  series.type = 'line';
  series.areaStyle = {
    normal: {}
  };

  if (style == 'stack') {
    series.stack = '示例';
  }

  return series;
} // 初始化柱状图


function initColumn(series, data, legendData, product, type, style) {
  series.type = 'bar';

  if (style == 'stack') {
    series.stack = '示例';
  }

  return series;
} // 初始化条形图


function initBar(series, data, legendData, product, type, style) {
  if (style == 'stack') {
    series.stack = '示例';
  }

  return series;
} // 编辑图表


function editCommon(series, data, legendData, product, type, style) {
  if (series.data == null || series.data.length == 0 || series.data.length != data.length) {
    series.data = data;
    series.name = legendData;
    series.type = type;
  } else {
    for (var a = 0; a < series.data.length; a++) {
      var cell = series.data[a];

      if (cell instanceof Object) {
        cell.value = data[a];
      } else {
        series.data[a] = data[a];
      }
    }

    series.name = legendData;
    series.type = type;
  }

  let actions = new Map([['line', editLine], ['area', editArea], ['bar', editBar], ['column', editColumn]]);
  return actions.get(type)(series, data, legendData, product, type, style);
} // 编辑折线图


function editLine(series, data, legendData, product, type, style) {
  return series;
}

function editArea(series, data, legendData, product, type, style) {
  series.type = 'line';
  return series;
}

function editBar(series, data, legendData, product, type, style) {
  return series;
}

function editColumn(series, data, legendData, product, type, style) {
  series.type = 'bar';
  return series;
} // 饼图series


function transformPie(defaultOptionIni, chartDataCache, seriesData, legendData, chartPro, chartType, chartStyle) {
  defaultOptionIni.legend.data = []; // 图例data结构改动,变为对象形式

  for (var i = 0; i < chartDataCache.xAxis.length; i++) {
    defaultOptionIni.legend.data.push({
      name: chartDataCache.xAxis[i],
      textStyle: {
        color: null
      },
      value: seriesData[0][i]
    });
  }

  for (var i = 0; i < seriesData.length; i++) {
    if (i > 0) {
      return;
    }

    if (defaultOptionIni.series[i] == null) {
      defaultOptionIni.series[i] = initPie(defaultOptionIni.series[i], chartDataCache, seriesData[i], legendData[i], chartPro, chartType, chartStyle);
    } else {
      defaultOptionIni.series[i] = editPie(defaultOptionIni.series[i], chartDataCache, seriesData[i], legendData[i], chartPro, chartType, chartStyle);
    }
  }
} // 初始化饼图


function initPie(series, chartDataCache, seriesData, legendData, product, type, style) {
  let seriesObj = {
    name: legendData,
    type: 'pie',
    radius: ['0%', '75%'],
    data: [],
    dataLabels: {},
    seLabel: {},
    seLine: {}
  };

  for (let j = 0; j < seriesData.length; j++) {
    let value;
    let name;

    if (seriesData[j] > 0) {
      value = seriesData[j];
      name = chartDataCache.xAxis[j];
    } else if (seriesData[j] <= 0) {
      value = '';
      name = '';
    }

    seriesObj.data.push({
      value: value,
      name: name,
      label: {},
      labelLine: {
        lineStyle: {}
      },
      itemStyle: {}
    });
  }

  series = seriesObj;
  series.roseType = false; // 分离型饼图

  if (style == 'split') {
    for (var j = 0; j < series.data.length; j++) {
      series.data[j].selected = 'true';
      series.data[j].selectedOffset = 5;
    }
  } // 圆环饼图


  if (style == 'ring') {
    series.radius = ['50%', '85%'];
    series.avoidLabelOverlap = false;
    series.label = {
      normal: {
        show: true,
        position: 'outside'
      },
      emphasis: {
        show: true,
        textStyle: {
          fontSize: '16',
          fontWeight: 'bold'
        }
      }
    };
  }

  return series;
} // 编辑饼图


function editPie(series, chartDataCache, seriesData, legendData, chartPro, chartType, chartStyle) {
  series.name = legendData;

  for (let j = 0; j < seriesData.length; j++) {
    let value;
    let name;

    if (seriesData[j] > 0) {
      value = +seriesData[j];
      name = chartDataCache.xAxis[j];
    } else if (seriesData[j] <= 0) {
      value = '';
      name = '';
    }

    series.data[j].name = name;
    series.data[j].value = value;
    series.data[j].y = value; // 如果原来的数据长度小于所选的数据长度

    if (series.data.length < seriesData.length) {
      for (let k = series.data.length; k < seriesData.length; k++) {
        series.data.push({
          value,
          name,
          y: value
        });
      }
    } // 如果原来的数据长度大于所选的数据长度,多余的部分数据为0,name为空


    if (series.data.length > seriesData.length) {
      for (let i = seriesData.length; i < series.data.length; i++) {
        series.data[i].value = '';
        series.data[i].y = '';
        series.data[i].name = '';
      }
    }
  }

  return series;
}


// CONCATENATED MODULE: ./src/utils/echartsEngine/transformTitle.js

/**
 * echarts title transform
 * 
 */

const transformTitle = function (chartAllTypeArray, title, subtitle) {
  const chartPro = chartAllTypeArray[0];
  const chartType = chartAllTypeArray[1];
  const chartStyle = chartAllTypeArray[2]; // init object

  let resultTitle = {
    show: true,
    text: '',
    left: 'auto',
    top: 'auto',
    textStyle: {
      fontSize: 12,
      color: '#333',
      fontFamily: 'sans-serif',
      fontStyle: 'normal',
      fontWeight: 'normal'
    },
    subtextStyle: {
      fontSize: 12,
      color: '#aaa',
      fontFamily: 'sans-serif',
      fontStyle: 'normal',
      fontWeight: 'normal'
    },
    subtext: '',
    itemGap: 10
  }; // title.show

  resultTitle.show = title.show; // title.text

  resultTitle.text = title.text;
  resultTitle.subtext = subtitle.text; // textstyle

  transTextStyle(title, resultTitle, 'textStyle', 'text');
  transTextStyle(subtitle, resultTitle, 'subtextStyle', 'subtext'); // title.position

  if (title.position.value === 'custom') {
    resultTitle.left = title.position.offsetX + '%';
    resultTitle.top = title.position.offsetY + '%';
  } else {
    resultTitle.left = title.position.value.split('-')[0];
    resultTitle.top = title.position.value.split('-')[1];
  } // title.itemgap


  let actions = new Map([['auto', 10], ['far', 30], ['close', 5], ['normal', 20], ['custom', subtitle.distance.cusGap]]);
  resultTitle.itemGap = actions.get(subtitle.distance.value);
  return resultTitle;
};

/* harmony default export */ var echartsEngine_transformTitle = (transformTitle);
// CONCATENATED MODULE: ./src/utils/echartsEngine/transformLegend.js
/**
 * legend转换
 */


const transformLegend = function (chartAllTypeArray, legend) {
  let resLegend = {
    show: true,
    textStyle: {
      color: '#333',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 12
    },
    left: 'auto',
    top: 'auto',
    orient: 'horizontal',
    itemWidth: 25,
    itemGap: 10
  }; // legend.show

  resLegend.show = legend.show; // legend.textStyle

  transTextStyle(legend, resLegend, 'textStyle'); // legend.position

  if (legend.position.value === 'custom') {
    resLegend.left = legend.position.offsetX;
    resLegend.top = legend.position.offsetY;
  } else {
    resLegend.left = legend.position.value.split('-')[0];
    resLegend.top = legend.position.value.split('-')[1];
  } // legend.orient


  resLegend.orient = legend.position.direction; // legend.itemWidth

  let width = new Map([['auto', 25], ['big', 45], ['medium', 18], ['small', 10], ['custom', legend.width.cusSize]]);
  let height = new Map([['auto', 14], ['big', 30], ['medium', 20], ['small', 10], ['custom', legend.height.cusSize]]);
  resLegend.itemWidth = width.get(legend.width.value);
  resLegend.itemHeight = height.get(legend.height.value); // legend.itemGap

  let distance = new Map([['auto', 10], ['far', 20], ['near', 5], ['general', 15], ['custom', legend.distance.cusGap]]);
  resLegend.itemGap = distance.get(legend.distance.value);
  return resLegend;
};

/* harmony default export */ var echartsEngine_transformLegend = (transformLegend);
// CONCATENATED MODULE: ./src/utils/echartsEngine/transformTooltip.js
/**
 * 鼠标提示转换
 */


const transformTooltip = function (chartAllTypeArray, tooltip) {
  const resTooltip = {
    show: true,
    trigger: 'item',
    textStyle: {
      color: '#fff',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 14
    },
    backgroundColor: 'rgba(50,50,50,0.7)',
    triggerOn: 'mousemove|click',
    axisPointer: {
      type: 'line',
      lineStyle: {
        type: 'solid',
        width: 1,
        color: '#555'
      }
    },
    position: 'right'
  }; // tooltip.show

  resTooltip.show = tooltip.show; // 触发类型

  resTooltip.trigger = tooltip.triggerType; // 触发条件

  resTooltip.triggerOn = tooltip.triggerOn; // 文字样式

  transTextStyle(tooltip, resTooltip, 'textStyle'); // 背景色

  resTooltip.backgroundColor = tooltip.backgroundColor; // 指示器配置

  resTooltip.axisPointer.lineStyle = tooltip.axisPointer.style;
  resTooltip.axisPointer.type = tooltip.axisPointer.type; // 提示框位置

  resTooltip.position = tooltip.position == 'auto' ? null : tooltip.position; // 提示formatter

  let format = tooltip.format;

  let formatter1 = function (params) {
    console.dir(params);
    let str = params[0].name + "<br>";

    for (var i = 0; i < params.length; i++) {
      if (format[params[i].seriesIndex].digit == 'auto') {
        params[i].value = floatTool.multiply(+params[i].value, format[params[i].seriesIndex].ratio) + format[params[i].seriesIndex].suffix;
      } else {
        params[i].value = floatTool.multiply(+params[i].value, format[params[i].seriesIndex].ratio).toFixed(format[params[i].seriesIndex].digit) + format[params[i].seriesIndex].suffix;
      }

      str += "<div style='border-radius: 50%;display: inline-block;width: 10px; height: 10px; background-color:" + params[i].color + "'></div>&nbsp;" + params[i].seriesName + ":&nbsp;&nbsp;" + params[i].value + "<br>";
    }

    return str;
  }; // let formatter2 = function (params) {
  //     if(format[params.seriesIndex].digit == 'auto'){
  //         params.value = floatTool.multiply(+params.value, format[params.seriesIndex].ratio) + format[params.seriesIndex].suffix
  //     }else{
  //         params.value = floatTool.multiply(+params.value, format[params.seriesIndex].ratio).toFixed(format[params.seriesIndex].digit) + format[params.seriesIndex].suffix
  //     }
  //     let str = params.seriesName + "<br>&nbsp;&nbsp;&nbsp;&nbsp;" + params.name + ":&nbsp;&nbsp;" + params.value;
  //     return str
  // }
  // let actions = new Map([
  //     ['item' , formatter2],
  //     ['axis' , formatter1]
  // ]) 
  // resTooltip.formatter = actions.get(resTooltip.trigger)


  return resTooltip;
};

/* harmony default export */ var echartsEngine_transformTooltip = (transformTooltip);
// CONCATENATED MODULE: ./src/utils/echartsEngine/transformAxis.js
/**
 * 坐标轴转换
 */




const transformAxis = function (chartAllTypeArray, axis) {
  let chartType = chartAllTypeArray[1];
  let option = {
    show: true,
    name: '',
    nameTextStyle: {
      color: '#333',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 12
    },
    nameLocation: 'end',
    inverse: false,
    interval: null,
    nameGap: 15,
    nameRotate: null,
    axisLine: {
      show: true,
      lineStyle: {
        color: '#333',
        width: 1
      }
    },
    axisTick: {
      show: true,
      inside: false,
      length: 5,
      lineStyle: {
        width: 1,
        type: 'solid',
        color: null
      }
    },
    axisLabel: {
      show: true,
      rotate: 0,
      formatter: null
    },
    min: null,
    max: null,
    splitLine: {
      show: true,
      lineStyle: {
        color: '#ccc',
        width: 1,
        type: 'solid'
      },
      interval: 'auto'
    },
    splitArea: {
      show: false,
      areaStyle: {
        color: ['rgba(250,250,250,0.3)', 'rgba(200,200,200,0.3)']
      }
    }
  };

  let transAxis = function (res, ori) {
    let origin = deepCopy(axis[ori]);
    res = jquery_default.a.extend(res, origin); // axis.show

    res.show = origin.show; // axis.name

    res.name = origin.title.text; // axis.label

    transTextStyle(origin.title, res, 'nameTextStyle');
    res.nameLocation = origin.title.fzPosition; // 反向坐标轴

    res.inverse = origin.inverse; // 坐标轴间隔个数

    if (res.type != 'value') {
      res.interval = origin.tickLabel.optimize;
    } // 标题与轴线距离


    res.nameGap = origin.title.rotate; // 刻度线设置

    res.axisLine.show = origin.tickLine.show;
    res.axisLine.lineStyle = transLineStyle(origin.tickLine.width, origin.tickLine.color); // 刻度设置

    res.axisTick.show = origin.tick.show;
    res.axisTick.lineStyle = transLineStyle(origin.tick.width, origin.tick.color);
    res.axisTick.inside = origin.tick.position == 'inside' ? true : false;
    res.axisTick.length = origin.tick.length; // 刻度标签

    res.axisLabel.show = origin.tickLabel.show;
    res.axisLabel.rotate = origin.tickLabel.rotate; // 标签formatter

    if (chartType == 'bar' && ori.slice(0, 1) == 'x' || chartType != 'bar' && ori.slice(0, 1) == 'y') {
      res.min = origin.tickLabel.min;
      res.max = origin.tickLabel.max;

      res.axisLabel.formatter = function (params) {
        if (origin.tickLabel.digit == 'auto') {
          return origin.tickLabel.prefix + floatTool.multiply(+params, origin.tickLabel.ratio) + origin.tickLabel.suffix;
        } else {
          return origin.tickLabel.prefix + floatTool.multiply(+params, origin.tickLabel.ratio).toFixed(origin.tickLabel.digit) + origin.tickLabel.suffix;
        }
      };
    } else {
      res.axisLabel.formatter = function (params) {
        return origin.tickLabel.prefix + params + origin.tickLabel.suffix;
      };
    } // 网格线


    res.splitLine.show = origin.netLine.show;
    res.splitLine.lineStyle = transLineStyle(origin.netLine.width, origin.netLine.color, origin.netLine.type);
    res.splitLine.interval = transCustom(origin.netLine.interval.value, origin.netLine.interval.cusNumber); // 网格区域

    res.splitArea.show = origin.netArea.show;
    res.splitArea.interval = transCustom(origin.netArea.interval.value, origin.netArea.interval.cusNumber);
    res.splitArea.areaStyle.color = [origin.netArea.colorOne == 'auto' ? 'rgba(250,250,250,0.3)' : origin.netArea.colorOne, origin.netArea.colorTwo == 'auto' ? 'rgba(200,200,200,0.3)' : origin.netArea.colorTwo];
    return res;
  };

  return {
    xAxisUp: transAxis(deepCopy(option), 'xAxisUp'),
    xAxisDown: transAxis(deepCopy(option), 'xAxisDown'),
    yAxisLeft: transAxis(deepCopy(option), 'yAxisLeft'),
    yAxisRight: transAxis(deepCopy(option), 'yAxisRight')
  };
};

/* harmony default export */ var echartsEngine_transformAxis = (transformAxis);
// CONCATENATED MODULE: ./src/utils/echartsEngine/index.js
/**
    * echarts转换引擎
    */





const echartsEngine = function (chartOptions) {
  //TODO: chartOptions 转换后导出
  const chartAllTypeArray = chartOptions.chartAllType.split('|');
  const chartPro = chartAllTypeArray[0];
  const chartType = chartAllTypeArray[1];
  const chartStyle = chartAllTypeArray[2];
  const titleOption = echartsEngine_transformTitle(chartAllTypeArray, chartOptions.defaultOption.title, chartOptions.defaultOption.subtitle); // const configOption = transformConfig(chartOptions.defaultOption.config);

  const legendOption = echartsEngine_transformLegend(chartAllTypeArray, chartOptions.defaultOption.legend);
  const tooltipOption = echartsEngine_transformTooltip(chartAllTypeArray, chartOptions.defaultOption.tooltip);
  const axisOption = echartsEngine_transformAxis(chartAllTypeArray, chartOptions.defaultOption.axis);
  axisOption.xAxisDown.data = chartOptions.defaultOption.axis.xAxisDown.data;
  const option = {
    title: { ...titleOption
    },
    tooltip: { ...tooltipOption
    },
    legend: { ...legendOption
    },
    xAxis: [{ ...axisOption.xAxisDown
    }, { ...axisOption.xAxisUp
    }],
    yAxis: [axisOption.yAxisLeft, axisOption.yAxisRight],
    series: chartOptions.defaultOption.series ? chartOptions.defaultOption.series : [{
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }]
  }; // 饼图去掉XY轴

  if (chartType == 'pie') {
    delete option.xAxis;
    delete option.yAxis;
  }

  console.info("option", option); //console.dir(JSON.stringify(option))

  return option;
};

/* harmony default export */ var utils_echartsEngine = (echartsEngine);
// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__("8bbf");
var external_Vue_default = /*#__PURE__*/__webpack_require__.n(external_Vue_);

// CONCATENATED MODULE: ./src/store/modules/rect/mutation-types.js
const ENABLE_ACTIVE = 'ENABLE_ACTIVE';
const DISABLE_ACTIVE = 'DISABLE_ACTIVE';
const ENABLE_DRAGGABLE = 'ENABLE_DRAGGABLE';
const DISABLE_DRAGGABLE = 'DISABLE_DRAGGABLE';
const ENABLE_RESIZABLE = 'ENABLE_RESIZABLE';
const DISABLE_RESIZABLE = 'DISABLE_RESIZABLE';
const ENABLE_PARENT_LIMITATION = 'ENABLE_PARENT_LIMITATION';
const DISABLE_PARENT_LIMITATION = 'DISABLE_PARENT_LIMITATION';
const ENABLE_SNAP_TO_GRID = 'ENABLE_SNAP_TO_GRID';
const DISABLE_SNAP_TO_GRID = 'DISABLE_SNAP_TO_GRID';
const ENABLE_ASPECT = 'ENABLE_ASPECT';
const DISABLE_ASPECT = 'DISABLE_ASPECT';
const ENABLE_X_AXIS = 'ENABLE_X_AXIS';
const ENABLE_Y_AXIS = 'ENABLE_Y_AXIS';
const ENABLE_BOTH_AXIS = 'ENABLE_BOTH_AXIS';
const ENABLE_NONE_AXIS = 'ENABLE_NONE_AXIS';
const CHANGE_ZINDEX = 'CHANGE_ZINDEX';
const CHANGE_MINW = 'CHANGE_MINW';
const CHANGE_MINH = 'CHANGE_MINH';
const CHANGE_WIDTH = 'CHANGE_WIDTH';
const CHANGE_HEIGHT = 'CHANGE_HEIGHT';
const CHANGE_TOP = 'CHANGE_TOP';
const CHANGE_LEFT = 'CHANGE_LEFT';
/* harmony default export */ var mutation_types = ({
  ENABLE_ACTIVE,
  DISABLE_ACTIVE,
  ENABLE_DRAGGABLE,
  DISABLE_DRAGGABLE,
  ENABLE_RESIZABLE,
  DISABLE_RESIZABLE,
  ENABLE_PARENT_LIMITATION,
  DISABLE_PARENT_LIMITATION,
  ENABLE_SNAP_TO_GRID,
  DISABLE_SNAP_TO_GRID,
  ENABLE_ASPECT,
  DISABLE_ASPECT,
  ENABLE_X_AXIS,
  ENABLE_Y_AXIS,
  ENABLE_NONE_AXIS,
  ENABLE_BOTH_AXIS,
  CHANGE_ZINDEX,
  CHANGE_MINW,
  CHANGE_MINH,
  CHANGE_WIDTH,
  CHANGE_HEIGHT,
  CHANGE_TOP,
  CHANGE_LEFT
});
// CONCATENATED MODULE: ./src/store/modules/rect/actions.js

/* harmony default export */ var rect_actions = ({
  setActive({
    commit,
    state
  }, {
    id
  }) {
    for (let i = 0, l = state.rects.length; i < l; i++) {
      if (i === id) {
        commit(mutation_types.ENABLE_ACTIVE, i);
        continue;
      }

      commit(mutation_types.DISABLE_ACTIVE, i);
    }
  },

  unsetActive({
    commit
  }, {
    id
  }) {
    commit(mutation_types.DISABLE_ACTIVE, id);
  },

  toggleDraggable({
    commit,
    state
  }, {
    id
  }) {
    if (!state.rects[id].draggable) {
      commit(mutation_types.ENABLE_DRAGGABLE, id);
    } else {
      commit(mutation_types.DISABLE_DRAGGABLE, id);
    }
  },

  toggleResizable({
    commit,
    state
  }, {
    id
  }) {
    if (!state.rects[id].resizable) {
      commit(mutation_types.ENABLE_RESIZABLE, id);
    } else {
      commit(mutation_types.DISABLE_RESIZABLE, id);
    }
  },

  toggleParentLimitation({
    commit,
    state
  }, {
    id
  }) {
    if (!state.rects[id].parentLim) {
      commit(mutation_types.ENABLE_PARENT_LIMITATION, id);
    } else {
      commit(mutation_types.DISABLE_PARENT_LIMITATION, id);
    }
  },

  toggleSnapToGrid({
    commit,
    state
  }, {
    id
  }) {
    if (!state.rects[id].snapToGrid) {
      commit(mutation_types.ENABLE_SNAP_TO_GRID, id);
    } else {
      commit(mutation_types.DISABLE_SNAP_TO_GRID, id);
    }
  },

  setAspect({
    commit
  }, {
    id
  }) {
    commit(mutation_types.ENABLE_ASPECT, id);
  },

  unsetAspect({
    commit
  }, {
    id
  }) {
    commit(mutation_types.DISABLE_ASPECT, id);
  },

  setWidth({
    commit
  }, {
    id,
    width
  }) {
    commit(mutation_types.CHANGE_WIDTH, {
      id,
      width
    });
  },

  setHeight({
    commit
  }, {
    id,
    height
  }) {
    commit(mutation_types.CHANGE_HEIGHT, {
      id,
      height
    });
  },

  setTop({
    commit
  }, {
    id,
    top
  }) {
    commit(mutation_types.CHANGE_TOP, {
      id,
      top
    });
  },

  setLeft({
    commit
  }, {
    id,
    left
  }) {
    commit(mutation_types.CHANGE_LEFT, {
      id,
      left
    });
  },

  changeXLock({
    commit,
    state
  }, {
    id
  }) {
    switch (state.rects[id].axis) {
      case 'both':
        commit(mutation_types.ENABLE_Y_AXIS, id);
        break;

      case 'x':
        commit(mutation_types.ENABLE_NONE_AXIS, id);
        break;

      case 'y':
        commit(mutation_types.ENABLE_BOTH_AXIS, id);
        break;

      case 'none':
        commit(mutation_types.ENABLE_X_AXIS, id);
        break;
    }
  },

  changeYLock({
    commit,
    state
  }, {
    id
  }) {
    switch (state.rects[id].axis) {
      case 'both':
        commit(mutation_types.ENABLE_X_AXIS, id);
        break;

      case 'x':
        commit(mutation_types.ENABLE_BOTH_AXIS, id);
        break;

      case 'y':
        commit(mutation_types.ENABLE_NONE_AXIS, id);
        break;

      case 'none':
        commit(mutation_types.ENABLE_Y_AXIS, id);
        break;
    }
  },

  changeZToBottom({
    commit,
    state
  }, {
    id
  }) {
    if (state.rects[id].zIndex === 1) {
      return;
    }

    commit(mutation_types.CHANGE_ZINDEX, {
      id,
      zIndex: 1
    });

    for (let i = 0, l = state.rects.length; i < l; i++) {
      if (i !== id) {
        if (state.rects[i].zIndex === state.rects.length) {
          continue;
        }

        commit(mutation_types.CHANGE_ZINDEX, {
          id: i,
          zIndex: state.rects[i].zIndex + 1
        });
      }
    }
  },

  changeZToTop({
    commit,
    state
  }, {
    id
  }) {
    if (state.rects[id].zIndex === state.rects.length) {
      return;
    }

    commit(mutation_types.CHANGE_ZINDEX, {
      id,
      zIndex: state.rects.length
    });

    for (let i = 0, l = state.rects.length; i < l; i++) {
      if (i !== id) {
        if (state.rects[i].zIndex === 1) {
          continue;
        }

        commit(mutation_types.CHANGE_ZINDEX, {
          id: i,
          zIndex: state.rects[i].zIndex - 1
        });
      }
    }
  },

  setMinWidth({
    commit
  }, {
    id,
    width
  }) {
    commit(mutation_types.CHANGE_MINW, {
      id,
      minw: width
    });
  },

  setMinHeight({
    commit
  }, {
    id,
    height
  }) {
    commit(mutation_types.CHANGE_MINH, {
      id,
      minh: height
    });
  }

});
// CONCATENATED MODULE: ./src/store/modules/rect/getters.js
/* harmony default export */ var getters = ({
  getActive: state => {
    for (let i = 0, l = state.rects.length; i < l; i++) {
      let rect = state.rects[i];

      if (rect.active) {
        return i;
      }
    }

    return null;
  }
});
// CONCATENATED MODULE: ./src/store/modules/rect/mutations.js

/* harmony default export */ var mutations = ({
  [ENABLE_ACTIVE](state, id) {
    state.rects[id].active = true;
  },

  [DISABLE_ACTIVE](state, id) {
    state.rects[id].active = false;
  },

  [ENABLE_ASPECT](state, id) {
    state.rects[id].aspectRatio = true;
  },

  [DISABLE_ASPECT](state, id) {
    state.rects[id].aspectRatio = false;
  },

  [ENABLE_DRAGGABLE](state, id) {
    state.rects[id].draggable = true;
  },

  [DISABLE_DRAGGABLE](state, id) {
    state.rects[id].draggable = false;
  },

  [ENABLE_RESIZABLE](state, id) {
    state.rects[id].resizable = true;
  },

  [DISABLE_RESIZABLE](state, id) {
    state.rects[id].resizable = false;
  },

  [ENABLE_SNAP_TO_GRID](state, id) {
    state.rects[id].snapToGrid = true;
  },

  [DISABLE_SNAP_TO_GRID](state, id) {
    state.rects[id].snapToGrid = false;
  },

  [ENABLE_BOTH_AXIS](state, id) {
    state.rects[id].axis = 'both';
  },

  [ENABLE_NONE_AXIS](state, id) {
    state.rects[id].axis = 'none';
  },

  [ENABLE_X_AXIS](state, id) {
    state.rects[id].axis = 'x';
  },

  [ENABLE_Y_AXIS](state, id) {
    state.rects[id].axis = 'y';
  },

  [ENABLE_PARENT_LIMITATION](state, id) {
    state.rects[id].parentLim = true;
  },

  [DISABLE_PARENT_LIMITATION](state, id) {
    state.rects[id].parentLim = false;
  },

  [CHANGE_ZINDEX](state, payload) {
    state.rects[payload.id].zIndex = payload.zIndex;
  },

  [CHANGE_HEIGHT](state, payload) {
    state.rects[payload.id].height = payload.height;
  },

  [CHANGE_WIDTH](state, payload) {
    state.rects[payload.id].width = payload.width;
  },

  [CHANGE_TOP](state, payload) {
    state.rects[payload.id].top = payload.top;
  },

  [CHANGE_LEFT](state, payload) {
    state.rects[payload.id].left = payload.left;
  },

  [CHANGE_MINH](state, payload) {
    state.rects[payload.id].minh = payload.minh;
  },

  [CHANGE_MINW](state, payload) {
    state.rects[payload.id].minw = payload.minw;
  }

});
// CONCATENATED MODULE: ./src/store/modules/rect/state.js
/* harmony default export */ var rect_state = ({
  'rects': [{
    'width': 400,
    'height': 250,
    'top': 10,
    'left': 10,
    'draggable': true,
    'resizable': true,
    'minw': 10,
    'minh': 10,
    'axis': 'both',
    'parentLim': true,
    'snapToGrid': false,
    'aspectRatio': false,
    'zIndex': 1,
    'color': '#EF9A9A',
    'active': false,
    'chart_id': 'chart_5erpeWc1eWal_1596092336315'
  }, {
    'width': 400,
    'height': 250,
    'top': 10,
    'left': 220,
    'draggable': true,
    'resizable': true,
    'minw': 10,
    'minh': 10,
    'axis': 'both',
    'parentLim': true,
    'snapToGrid': false,
    'aspectRatio': false,
    'zIndex': 2,
    'color': '#AED581',
    'active': false,
    'chart_id': 'chart_5erpeWc1eWal_15960973336319'
  }, {
    'width': 400,
    'height': 250,
    'top': 170,
    'left': 10,
    'draggable': true,
    'resizable': true,
    'minw': 10,
    'minh': 10,
    'axis': 'both',
    'parentLim': true,
    'snapToGrid': false,
    'aspectRatio': false,
    'zIndex': 3,
    'color': '#81D4FA',
    'active': false,
    'chart_id': 'chart_5erpeWc1eWal_1596093236310'
  }]
});
// CONCATENATED MODULE: ./src/store/modules/rect/index.js




/* harmony default export */ var rect = ({
  namespaced: true,
  actions: rect_actions,
  getters: getters,
  mutations: mutations,
  state: rect_state
});
// CONCATENATED MODULE: ./src/store/modules/chartRender.js
// use vuex modules
//chart display box
const chartRender = {
  state: () => ({
    //show or hide
    isShow: true
  }),
  getters: {},
  mutations: {},
  actions: {}
};
/* harmony default export */ var modules_chartRender = (chartRender);
// CONCATENATED MODULE: ./src/store/modules/chartSetting/mutation-types.js
const mutation_types_ENABLE_ACTIVE = 'ENABLE_ACTIVE';
const mutation_types_DISABLE_ACTIVE = 'DISABLE_ACTIVE';
const UPDATE_CHART_ITEM = 'UPDATE_CHART_ITEM';
const UPDATE_CHART_ITEM_CHARTLIST = 'UPDATE_CHART_ITEM_CHARTLIST';
const UPDATE_CHART_ITEM_ONE = 'UPDATE_CHART_ITEM_ONE';
const UPDATE_CHART_ITEM_CHARTLIST_ONE = 'UPDATE_CHART_ITEM_CHARTLIST_ONE';
/* harmony default export */ var chartSetting_mutation_types = ({
  ENABLE_ACTIVE: mutation_types_ENABLE_ACTIVE,
  DISABLE_ACTIVE: mutation_types_DISABLE_ACTIVE,
  UPDATE_CHART_ITEM,
  UPDATE_CHART_ITEM_CHARTLIST,
  UPDATE_CHART_ITEM_ONE,
  UPDATE_CHART_ITEM_CHARTLIST_ONE
});
// CONCATENATED MODULE: ./src/store/modules/chartSetting/actions.js

/* harmony default export */ var chartSetting_actions = ({
  setActive({
    commit,
    state
  }, {
    id
  }) {
    for (let i = 0, l = state.chartLists.length; i < l; i++) {
      if (i === id) {
        commit(chartSetting_mutation_types.ENABLE_ACTIVE, i);
        continue;
      }

      commit(chartSetting_mutation_types.DISABLE_ACTIVE, i);
    }
  },

  unsetActive({
    commit
  }, {
    id
  }) {
    commit(chartSetting_mutation_types.DISABLE_ACTIVE, id);
  },

  updateChartItem({
    commit
  }, updateObj) {
    commit(chartSetting_mutation_types.UPDATE_CHART_ITEM, updateObj);
  },

  updateChartItemChartlist({
    commit
  }, params) {
    commit(chartSetting_mutation_types.UPDATE_CHART_ITEM_CHARTLIST, params);
  },

  updateChartItemOne({
    commit
  }, item) {
    commit(chartSetting_mutation_types.UPDATE_CHART_ITEM_ONE, item);
  },

  updateChartItemChartlistOne({
    commit
  }, params) {
    commit(chartSetting_mutation_types.UPDATE_CHART_ITEM_CHARTLIST_ONE, params);
  }

});
// CONCATENATED MODULE: ./src/store/modules/chartSetting/getters.js
/* harmony default export */ var chartSetting_getters = ({
  getActive: state => {
    for (let i = 0, l = state.chartLists.length; i < l; i++) {
      let chartList = state.chartLists[i];

      if (chartList.active) {
        return i;
      }
    }

    return null;
  }
});
// CONCATENATED MODULE: ./src/store/modules/chartSetting/mutations.js



/* harmony default export */ var chartSetting_mutations = ({
  [mutation_types_ENABLE_ACTIVE](state, id) {
    // 1. set active
    state.chartLists[id].active = true; // 2. set current chart index

    state.currentChartIndex = id;
  },

  [mutation_types_DISABLE_ACTIVE](state, id) {
    state.chartLists[id].active = false;
  },

  /**
     *根据对象属性的路径, 更新图表子属性的方法
    //自定义一种类型'router',updateObj内部也是采用颗粒更新的模式,防止全部替换chartOptions造成的chartsetting内部组件全局重刷
    params:{
        updateSubObj:{label:{},show:true,...} //子属性新的值
        router:'title/label' //属性路径
    }
    */
  [UPDATE_CHART_ITEM](state, params) {
    //子组件设置更新到chartOptions上后再更新到fabric组件上
    console.info('updateObj', params);
    const {
      router,
      updateObj
    } = params;
    const currentChartOptions = state.chartLists[state.currentChartIndex].chartOptions;
    setChartOptionsByRouter(currentChartOptions, router, updateObj); //更新到子对象
  },

  /**
   * 修改state中chartlist
   */
  [UPDATE_CHART_ITEM_CHARTLIST](state, params) {
    let index = state.chartLists.findIndex(item => item.chart_id == params.chart_id);
    state.chartLists[index].chartOptions = jquery_default.a.extend(state.chartLists[index].chartOptions, params);
  },

  /**
   * 
   * 修改state中chartlist中chartoptions的某一项
   */
  [UPDATE_CHART_ITEM_CHARTLIST_ONE](state, params) {
    let index = state.chartLists.findIndex(item => item.chart_id == params.chart_id);
    state.chartLists[index].chartOptions[params.key] = params.value;
  },

  /**
   * 修改state中其他
   */
  [UPDATE_CHART_ITEM_ONE](state, item) {
    state[item.key] = item.value;
  }

});
// EXTERNAL MODULE: ./node_modules/lodash/merge.js
var merge = __webpack_require__("42454");

// EXTERNAL MODULE: ./node_modules/lodash/cloneDeep.js
var cloneDeep = __webpack_require__("0644");

// CONCATENATED MODULE: ./src/store/modules/chartSetting/state.js
// import { merge, cloneDeep } from 'lodash';



const state_option = {
  "chart_id": "chart_5erpeWc1eWal_1596092336315",
  "active": true,
  "chartOptions": {
    "chart_id": "chart_5erpeWc1eWal_1596092336315",
    "chartAllType": "echarts|line|default",
    "chartPro": "echarts",
    "chartType": "line",
    "chartStyle": "default",
    "chartData": [[{
      "v": "德国人的",
      "ct": {
        "fa": "General",
        "t": "g"
      },
      "m": "德国人的",
      "bg": "rgba(255,255,255)",
      "bl": 0,
      "it": 0,
      "ff": 1,
      "fs": 11,
      "fc": "rgb(0, 0, 0)",
      "ht": 1,
      "vt": 0
    }, {
      "v": "尔尔",
      "ct": {
        "fa": "General",
        "t": "g"
      },
      "m": "尔尔",
      "bg": "rgba(255,255,255)",
      "bl": 0,
      "it": 0,
      "ff": 1,
      "fs": 11,
      "fc": "rgb(0, 0, 0)",
      "ht": 1,
      "vt": 0
    }, {
      "v": "地方当然",
      "ct": {
        "fa": "General",
        "t": "g"
      },
      "m": "地方当然",
      "bg": "rgba(255,255,255)",
      "bl": 0,
      "it": 0,
      "ff": 1,
      "fs": 11,
      "fc": "rgb(0, 0, 0)",
      "ht": 1,
      "vt": 0
    }], [{
      "v": "尔尔",
      "ct": {
        "fa": "General",
        "t": "g"
      },
      "m": "尔尔",
      "bg": "rgba(255,255,255)",
      "bl": 0,
      "it": 0,
      "ff": 1,
      "fs": 11,
      "fc": "rgb(0, 0, 0)",
      "ht": 1,
      "vt": 0
    }, {
      "v": 1,
      "ct": {
        "fa": "General",
        "t": "n"
      },
      "m": "1",
      "bg": "rgba(255,255,255)",
      "bl": 0,
      "it": 0,
      "ff": 1,
      "fs": 11,
      "fc": "rgb(0, 0, 0)",
      "ht": 1,
      "vt": 0
    }, {
      "v": 2,
      "ct": {
        "fa": "General",
        "t": "n"
      },
      "m": "2",
      "bg": "rgba(255,255,255)",
      "bl": 0,
      "it": 0,
      "ff": 1,
      "fs": 11,
      "fc": "rgb(0, 0, 0)",
      "ht": 1,
      "vt": 0
    }], [{
      "v": "树人",
      "ct": {
        "fa": "General",
        "t": "g"
      },
      "m": "树人",
      "bg": "rgba(255,255,255)",
      "bl": 0,
      "it": 0,
      "ff": 1,
      "fs": 11,
      "fc": "rgb(0, 0, 0)",
      "ht": 1,
      "vt": 0
    }, {
      "v": 3,
      "ct": {
        "fa": "General",
        "t": "n"
      },
      "m": "3",
      "bg": "rgba(255,255,255)",
      "bl": 0,
      "it": 0,
      "ff": 1,
      "fs": 11,
      "fc": "rgb(0, 0, 0)",
      "ht": 1,
      "vt": 0
    }, {
      "v": 4,
      "ct": {
        "fa": "General",
        "t": "n"
      },
      "m": "4",
      "bg": "rgba(255,255,255)",
      "bl": 0,
      "it": 0,
      "ff": 1,
      "fs": 11,
      "fc": "rgb(0, 0, 0)",
      "ht": 1,
      "vt": 0
    }], [{
      "v": "多个",
      "ct": {
        "fa": "General",
        "t": "g"
      },
      "m": "多个",
      "bg": "rgba(255,255,255)",
      "bl": 0,
      "it": 0,
      "ff": 1,
      "fs": 11,
      "fc": "rgb(0, 0, 0)",
      "ht": 1,
      "vt": 0
    }, {
      "v": 5,
      "ct": {
        "fa": "General",
        "t": "n"
      },
      "m": "5",
      "bg": "rgba(255,255,255)",
      "bl": 0,
      "it": 0,
      "ff": 1,
      "fs": 11,
      "fc": "rgb(0, 0, 0)",
      "ht": 1,
      "vt": 0
    }, {
      "v": 6,
      "ct": {
        "fa": "General",
        "t": "n"
      },
      "m": "6",
      "bg": "rgba(255,255,255)",
      "bl": 0,
      "it": 0,
      "ff": 1,
      "fs": 11,
      "fc": "rgb(0, 0, 0)",
      "ht": 1,
      "vt": 0
    }]],
    "rangeArray": [{
      "row": [17, 20],
      "column": [9, 11],
      "row_focus": 17,
      "column_focus": 9,
      "left": 1077,
      "width": 140,
      "top": 357,
      "height": 31,
      "left_move": 1077,
      "width_move": 359,
      "top_move": 357,
      "height_move": 94
    }],
    "rangeTxt": "J18:L21",
    "rangeColCheck": {
      "exits": true,
      "range": [0, 0]
    },
    "rangeRowCheck": {
      "exits": true,
      "range": [0, 0]
    },
    "rangeConfigCheck": false,
    "rangeSplitArray": {
      "title": {
        "row": [0, 0],
        "column": [0, 0]
      },
      "rowtitle": {
        "row": [0, 0],
        "column": [1, 2]
      },
      "coltitle": {
        "row": [1, 3],
        "column": [0, 0]
      },
      "content": {
        "row": [1, 3],
        "column": [1, 2]
      },
      "type": "normal",
      "range": {
        "row": [17, 20],
        "column": [9, 11],
        "row_focus": 17,
        "column_focus": 9,
        "left": 1077,
        "width": 140,
        "top": 357,
        "height": 31,
        "left_move": 1077,
        "width_move": 359,
        "top_move": 357,
        "height_move": 94
      }
    },
    "chartDataCache": {
      "label": ["尔尔", "地方当然"],
      "xAxis": ["尔尔", "树人", "多个"],
      "series": [[1, 2], [3, 4], [5, 6]],
      "series_tpye": {
        "0": "num",
        "1": "num"
      }
    },
    "chartDataSeriesOrder": {
      "0": 0,
      "1": 1,
      "length": 2
    },
    "defaultOption": {
      "title": {
        "show": false,
        "text": "默认标题",
        "label": {
          "fontSize": 12,
          "color": "#333",
          "fontFamily": "sans-serif",
          "fontGroup": [],
          "cusFontSize": 12
        },
        "position": {
          "value": "left-top",
          "offsetX": 40,
          "offsetY": 50
        }
      },
      "subtitle": {
        "show": false,
        "text": "",
        "label": {
          "fontSize": 12,
          "color": "#333",
          "fontFamily": "sans-serif",
          "fontGroup": [],
          "cusFontSize": 12
        },
        "distance": {
          "value": "auto",
          "cusGap": 40
        }
      },
      "config": {
        "color": "transparent",
        "fontFamily": "Sans-serif",
        "grid": {
          "value": "normal",
          "top": 5,
          "left": 10,
          "right": 20,
          "bottom": 10
        }
      },
      "legend": {
        "show": true,
        "selectMode": "multiple",
        "selected": [{
          "seriesName": "衣服",
          "isShow": true
        }, {
          "seriesName": "食材",
          "isShow": true
        }, {
          "seriesName": "图书",
          "isShow": true
        }],
        "label": {
          "fontSize": 12,
          "color": "#333",
          "fontFamily": "sans-serif",
          "fontGroup": [],
          "cusFontSize": 12
        },
        "position": {
          "value": "left-top",
          "offsetX": 40,
          "offsetY": 50,
          "direction": "horizontal"
        },
        "width": {
          "value": "auto",
          "cusSize": 25
        },
        "height": {
          "value": "auto",
          "cusSize": 14
        },
        "distance": {
          "value": "auto",
          "cusGap": 10
        },
        "itemGap": 10,
        "data": ["尔尔", "地方当然"]
      },
      "tooltip": {
        "show": true,
        "label": {
          "fontSize": 12,
          "color": "#333",
          "fontFamily": "sans-serif",
          "fontGroup": [],
          "cusFontSize": 12
        },
        "backgroundColor": "rgba(50,50,50,0.7)",
        "triggerOn": "mousemove",
        "triggerType": "item",
        "axisPointer": {
          "type": "line",
          "style": {
            "color": "#555",
            "width": "normal",
            "type": "solid"
          }
        },
        "format": [{
          "seriesName": "衣服",
          "prefix": "",
          "suffix": "",
          "ratio": 1,
          "digit": "auto"
        }, {
          "seriesName": "食材",
          "prefix": "",
          "suffix": "",
          "ratio": 1,
          "digit": "auto"
        }, {
          "seriesName": "图书",
          "prefix": "",
          "suffix": "",
          "ratio": 1,
          "digit": "auto"
        }],
        "position": "auto"
      },
      "axis": {
        "axisType": "xAxisDown",
        "xAxisUp": {
          "show": false,
          "title": {
            "showTitle": false,
            "text": "",
            "nameGap": 15,
            "rotate": 0,
            "label": {
              "fontSize": 12,
              "color": "#333",
              "fontFamily": "sans-serif",
              "fontGroup": [],
              "cusFontSize": 12
            },
            "fzPosition": "end"
          },
          "name": "显示X轴",
          "inverse": false,
          "tickLine": {
            "show": true,
            "width": 1,
            "color": "auto"
          },
          "tick": {
            "show": true,
            "position": "outside",
            "length": 5,
            "width": 1,
            "color": "auto"
          },
          "tickLabel": {
            "show": true,
            "label": {
              "fontSize": 12,
              "color": "#333",
              "fontFamily": "sans-serif",
              "fontGroup": [],
              "cusFontSize": 12
            },
            "rotate": 0,
            "prefix": "",
            "suffix": "",
            "optimize": 0,
            "distance": 0,
            "min": "auto",
            "max": "auto",
            "ratio": 1,
            "digit": "auto"
          },
          "netLine": {
            "show": false,
            "width": 1,
            "type": "solid",
            "color": "auto",
            "interval": {
              "value": "auto",
              "cusNumber": 0
            }
          },
          "netArea": {
            "show": false,
            "interval": {
              "value": "auto",
              "cusNumber": 0
            },
            "colorOne": "auto",
            "colorTwo": "auto"
          },
          "axisLine": {
            "onZero": false
          }
        },
        "xAxisDown": {
          "show": true,
          "title": {
            "showTitle": false,
            "text": "",
            "nameGap": 15,
            "rotate": 0,
            "label": {
              "fontSize": 12,
              "color": "#333",
              "fontFamily": "sans-serif",
              "fontGroup": [],
              "cusFontSize": 12
            },
            "fzPosition": "end"
          },
          "name": "显示X轴",
          "inverse": false,
          "tickLine": {
            "show": true,
            "width": 1,
            "color": "auto"
          },
          "tick": {
            "show": true,
            "position": "outside",
            "length": 5,
            "width": 1,
            "color": "auto"
          },
          "tickLabel": {
            "show": true,
            "label": {
              "fontSize": 12,
              "color": "#333",
              "fontFamily": "sans-serif",
              "fontGroup": [],
              "cusFontSize": 12
            },
            "rotate": 0,
            "prefix": "",
            "suffix": "",
            "optimize": 0,
            "distance": 0,
            "min": null,
            "max": null,
            "ratio": 1,
            "digit": "auto"
          },
          "netLine": {
            "show": false,
            "width": 1,
            "type": "solid",
            "color": "auto",
            "interval": {
              "value": "auto",
              "cusNumber": 0
            }
          },
          "netArea": {
            "show": false,
            "interval": {
              "value": "auto",
              "cusNumber": 0
            },
            "colorOne": "auto",
            "colorTwo": "auto"
          },
          "data": ["尔尔", "树人", "多个"],
          "type": "category"
        },
        "yAxisLeft": {
          "show": true,
          "title": {
            "showTitle": false,
            "text": "",
            "nameGap": 15,
            "rotate": 0,
            "label": {
              "fontSize": 12,
              "color": "#333",
              "fontFamily": "sans-serif",
              "fontGroup": [],
              "cusFontSize": 12
            },
            "fzPosition": "end"
          },
          "name": "显示Y轴",
          "inverse": false,
          "tickLine": {
            "show": true,
            "width": 1,
            "color": "auto"
          },
          "tick": {
            "show": true,
            "position": "outside",
            "length": 5,
            "width": 1,
            "color": "auto"
          },
          "tickLabel": {
            "show": true,
            "label": {
              "fontSize": 12,
              "color": "#333",
              "fontFamily": "sans-serif",
              "fontGroup": [],
              "cusFontSize": 12
            },
            "rotate": 0,
            "formatter": {
              "prefix": "",
              "suffix": "",
              "ratio": 1,
              "digit": "auto"
            },
            "split": 5,
            "min": null,
            "max": null,
            "prefix": "",
            "suffix": "",
            "ratio": 1,
            "digit": "auto",
            "distance": 0
          },
          "netLine": {
            "show": false,
            "width": 1,
            "type": "solid",
            "color": "auto",
            "interval": {
              "value": "auto",
              "cusNumber": 0
            }
          },
          "netArea": {
            "show": false,
            "interval": {
              "value": "auto",
              "cusNumber": 0
            },
            "colorOne": "auto",
            "colorTwo": "auto"
          },
          "type": "value"
        },
        "yAxisRight": {
          "show": false,
          "title": {
            "showTitle": false,
            "text": "",
            "nameGap": 15,
            "rotate": 0,
            "label": {
              "fontSize": 12,
              "color": "#333",
              "fontFamily": "sans-serif",
              "fontGroup": [],
              "cusFontSize": 12
            },
            "fzPosition": "end"
          },
          "name": "显示Y轴",
          "inverse": false,
          "tickLine": {
            "show": true,
            "width": 1,
            "color": "auto"
          },
          "tick": {
            "show": true,
            "position": "outside",
            "length": 5,
            "width": 1,
            "color": "auto"
          },
          "tickLabel": {
            "show": true,
            "label": {
              "fontSize": 12,
              "color": "#333",
              "fontFamily": "sans-serif",
              "fontGroup": [],
              "cusFontSize": 12
            },
            "rotate": 0,
            "formatter": {
              "prefix": "",
              "suffix": "",
              "ratio": 1,
              "digit": "auto"
            },
            "split": 5,
            "min": null,
            "max": null,
            "prefix": "",
            "suffix": "",
            "ratio": 1,
            "digit": "auto",
            "distance": 0
          },
          "netLine": {
            "show": false,
            "width": 1,
            "type": "solid",
            "color": "auto",
            "interval": {
              "value": "auto",
              "cusNumber": 0
            }
          },
          "netArea": {
            "show": false,
            "interval": {
              "value": "auto",
              "cusNumber": 0
            },
            "colorOne": "auto",
            "colorTwo": "auto"
          }
        }
      },
      "series": [{
        "itemStyle": {
          "color": null,
          "borderColor": "#000",
          "borderType": "solid",
          "borderWidth": 1
        },
        "lineStyle": {
          "color": null,
          "width": 1,
          "type": "solid"
        },
        "data": [1, 3, 5],
        "type": "line",
        "name": "尔尔",
        "markPoint": {
          "data": []
        },
        "markLine": {
          "data": []
        },
        "markArea": {
          "data": []
        }
      }, {
        "itemStyle": {
          "color": null,
          "borderColor": "#000",
          "borderType": "solid",
          "borderWidth": 1
        },
        "lineStyle": {
          "color": null,
          "width": 1,
          "type": "solid"
        },
        "data": [2, 4, 6],
        "type": "line",
        "name": "地方当然",
        "markPoint": {
          "data": []
        },
        "markLine": {
          "data": []
        },
        "markArea": {
          "data": []
        }
      }],
      "seriesData": [[1, 3, 5], [2, 4, 6]]
    }
  }
};
/* harmony default export */ var chartSetting_state = ({
  // store all chart objects
  chartLists: [{
    "chart_id": "chart_5erpeWc1eWal_1596092336315",
    "active": true,
    "chartOptions": {
      "chart_id": "chart_5erpeWc1eWal_1596092336315",
      "chartAllType": "echarts|line|default",
      "chartPro": "echarts",
      "chartType": "line",
      "chartStyle": "default",
      "chartData": [[{
        "v": "德国人的",
        "ct": {
          "fa": "General",
          "t": "g"
        },
        "m": "德国人的",
        "bg": "rgba(255,255,255)",
        "bl": 0,
        "it": 0,
        "ff": 1,
        "fs": 11,
        "fc": "rgb(0, 0, 0)",
        "ht": 1,
        "vt": 0
      }, {
        "v": "尔尔",
        "ct": {
          "fa": "General",
          "t": "g"
        },
        "m": "尔尔",
        "bg": "rgba(255,255,255)",
        "bl": 0,
        "it": 0,
        "ff": 1,
        "fs": 11,
        "fc": "rgb(0, 0, 0)",
        "ht": 1,
        "vt": 0
      }, {
        "v": "地方当然",
        "ct": {
          "fa": "General",
          "t": "g"
        },
        "m": "地方当然",
        "bg": "rgba(255,255,255)",
        "bl": 0,
        "it": 0,
        "ff": 1,
        "fs": 11,
        "fc": "rgb(0, 0, 0)",
        "ht": 1,
        "vt": 0
      }], [{
        "v": "尔尔",
        "ct": {
          "fa": "General",
          "t": "g"
        },
        "m": "尔尔",
        "bg": "rgba(255,255,255)",
        "bl": 0,
        "it": 0,
        "ff": 1,
        "fs": 11,
        "fc": "rgb(0, 0, 0)",
        "ht": 1,
        "vt": 0
      }, {
        "v": 1,
        "ct": {
          "fa": "General",
          "t": "n"
        },
        "m": "1",
        "bg": "rgba(255,255,255)",
        "bl": 0,
        "it": 0,
        "ff": 1,
        "fs": 11,
        "fc": "rgb(0, 0, 0)",
        "ht": 1,
        "vt": 0
      }, {
        "v": 2,
        "ct": {
          "fa": "General",
          "t": "n"
        },
        "m": "2",
        "bg": "rgba(255,255,255)",
        "bl": 0,
        "it": 0,
        "ff": 1,
        "fs": 11,
        "fc": "rgb(0, 0, 0)",
        "ht": 1,
        "vt": 0
      }], [{
        "v": "树人",
        "ct": {
          "fa": "General",
          "t": "g"
        },
        "m": "树人",
        "bg": "rgba(255,255,255)",
        "bl": 0,
        "it": 0,
        "ff": 1,
        "fs": 11,
        "fc": "rgb(0, 0, 0)",
        "ht": 1,
        "vt": 0
      }, {
        "v": 3,
        "ct": {
          "fa": "General",
          "t": "n"
        },
        "m": "3",
        "bg": "rgba(255,255,255)",
        "bl": 0,
        "it": 0,
        "ff": 1,
        "fs": 11,
        "fc": "rgb(0, 0, 0)",
        "ht": 1,
        "vt": 0
      }, {
        "v": 4,
        "ct": {
          "fa": "General",
          "t": "n"
        },
        "m": "4",
        "bg": "rgba(255,255,255)",
        "bl": 0,
        "it": 0,
        "ff": 1,
        "fs": 11,
        "fc": "rgb(0, 0, 0)",
        "ht": 1,
        "vt": 0
      }], [{
        "v": "多个",
        "ct": {
          "fa": "General",
          "t": "g"
        },
        "m": "多个",
        "bg": "rgba(255,255,255)",
        "bl": 0,
        "it": 0,
        "ff": 1,
        "fs": 11,
        "fc": "rgb(0, 0, 0)",
        "ht": 1,
        "vt": 0
      }, {
        "v": 5,
        "ct": {
          "fa": "General",
          "t": "n"
        },
        "m": "5",
        "bg": "rgba(255,255,255)",
        "bl": 0,
        "it": 0,
        "ff": 1,
        "fs": 11,
        "fc": "rgb(0, 0, 0)",
        "ht": 1,
        "vt": 0
      }, {
        "v": 6,
        "ct": {
          "fa": "General",
          "t": "n"
        },
        "m": "6",
        "bg": "rgba(255,255,255)",
        "bl": 0,
        "it": 0,
        "ff": 1,
        "fs": 11,
        "fc": "rgb(0, 0, 0)",
        "ht": 1,
        "vt": 0
      }]],
      "rangeArray": [{
        "row": [17, 20],
        "column": [9, 11],
        "row_focus": 17,
        "column_focus": 9,
        "left": 1077,
        "width": 140,
        "top": 357,
        "height": 31,
        "left_move": 1077,
        "width_move": 359,
        "top_move": 357,
        "height_move": 94
      }],
      "rangeTxt": "J18:L21",
      "rangeColCheck": {
        "exits": true,
        "range": [0, 0]
      },
      "rangeRowCheck": {
        "exits": true,
        "range": [0, 0]
      },
      "rangeConfigCheck": false,
      "rangeSplitArray": {
        "title": {
          "row": [0, 0],
          "column": [0, 0]
        },
        "rowtitle": {
          "row": [0, 0],
          "column": [1, 2]
        },
        "coltitle": {
          "row": [1, 3],
          "column": [0, 0]
        },
        "content": {
          "row": [1, 3],
          "column": [1, 2]
        },
        "type": "normal",
        "range": {
          "row": [17, 20],
          "column": [9, 11],
          "row_focus": 17,
          "column_focus": 9,
          "left": 1077,
          "width": 140,
          "top": 357,
          "height": 31,
          "left_move": 1077,
          "width_move": 359,
          "top_move": 357,
          "height_move": 94
        }
      },
      "chartDataCache": {
        "label": ["尔尔", "地方当然"],
        "xAxis": ["尔尔", "树人", "多个"],
        "series": [[1, 2], [3, 4], [5, 6]],
        "series_tpye": {
          "0": "num",
          "1": "num"
        }
      },
      "chartDataSeriesOrder": {
        "0": 0,
        "1": 1,
        "length": 2
      },
      "defaultOption": {
        "title": {
          "show": false,
          "text": "默认标题",
          "label": {
            "fontSize": 12,
            "color": "#333",
            "fontFamily": "sans-serif",
            "fontGroup": [],
            "cusFontSize": 12
          },
          "position": {
            "value": "left-top",
            "offsetX": 40,
            "offsetY": 50
          }
        },
        "subtitle": {
          "show": false,
          "text": "",
          "label": {
            "fontSize": 12,
            "color": "#333",
            "fontFamily": "sans-serif",
            "fontGroup": [],
            "cusFontSize": 12
          },
          "distance": {
            "value": "auto",
            "cusGap": 40
          }
        },
        "config": {
          "color": "transparent",
          "fontFamily": "Sans-serif",
          "grid": {
            "value": "normal",
            "top": 5,
            "left": 10,
            "right": 20,
            "bottom": 10
          }
        },
        "legend": {
          "show": true,
          "selectMode": "multiple",
          "selected": [{
            "seriesName": "衣服",
            "isShow": true
          }, {
            "seriesName": "食材",
            "isShow": true
          }, {
            "seriesName": "图书",
            "isShow": true
          }],
          "label": {
            "fontSize": 12,
            "color": "#333",
            "fontFamily": "sans-serif",
            "fontGroup": [],
            "cusFontSize": 12
          },
          "position": {
            "value": "left-top",
            "offsetX": 40,
            "offsetY": 50,
            "direction": "horizontal"
          },
          "width": {
            "value": "auto",
            "cusSize": 25
          },
          "height": {
            "value": "auto",
            "cusSize": 14
          },
          "distance": {
            "value": "auto",
            "cusGap": 10
          },
          "itemGap": 10,
          "data": ["尔尔", "地方当然"]
        },
        "tooltip": {
          "show": true,
          "label": {
            "fontSize": 12,
            "color": "#333",
            "fontFamily": "sans-serif",
            "fontGroup": [],
            "cusFontSize": 12
          },
          "backgroundColor": "rgba(50,50,50,0.7)",
          "triggerOn": "mousemove",
          "triggerType": "item",
          "axisPointer": {
            "type": "line",
            "style": {
              "color": "#555",
              "width": "normal",
              "type": "solid"
            }
          },
          "format": [{
            "seriesName": "衣服",
            "prefix": "",
            "suffix": "",
            "ratio": 1,
            "digit": "auto"
          }, {
            "seriesName": "食材",
            "prefix": "",
            "suffix": "",
            "ratio": 1,
            "digit": "auto"
          }, {
            "seriesName": "图书",
            "prefix": "",
            "suffix": "",
            "ratio": 1,
            "digit": "auto"
          }],
          "position": "auto"
        },
        "axis": {
          "axisType": "xAxisDown",
          "xAxisUp": {
            "show": false,
            "title": {
              "showTitle": false,
              "text": "",
              "nameGap": 15,
              "rotate": 0,
              "label": {
                "fontSize": 12,
                "color": "#333",
                "fontFamily": "sans-serif",
                "fontGroup": [],
                "cusFontSize": 12
              },
              "fzPosition": "end"
            },
            "name": "显示X轴",
            "inverse": false,
            "tickLine": {
              "show": true,
              "width": 1,
              "color": "auto"
            },
            "tick": {
              "show": true,
              "position": "outside",
              "length": 5,
              "width": 1,
              "color": "auto"
            },
            "tickLabel": {
              "show": true,
              "label": {
                "fontSize": 12,
                "color": "#333",
                "fontFamily": "sans-serif",
                "fontGroup": [],
                "cusFontSize": 12
              },
              "rotate": 0,
              "prefix": "",
              "suffix": "",
              "optimize": 0,
              "distance": 0,
              "min": "auto",
              "max": "auto",
              "ratio": 1,
              "digit": "auto"
            },
            "netLine": {
              "show": false,
              "width": 1,
              "type": "solid",
              "color": "auto",
              "interval": {
                "value": "auto",
                "cusNumber": 0
              }
            },
            "netArea": {
              "show": false,
              "interval": {
                "value": "auto",
                "cusNumber": 0
              },
              "colorOne": "auto",
              "colorTwo": "auto"
            },
            "axisLine": {
              "onZero": false
            }
          },
          "xAxisDown": {
            "show": true,
            "title": {
              "showTitle": false,
              "text": "",
              "nameGap": 15,
              "rotate": 0,
              "label": {
                "fontSize": 12,
                "color": "#333",
                "fontFamily": "sans-serif",
                "fontGroup": [],
                "cusFontSize": 12
              },
              "fzPosition": "end"
            },
            "name": "显示X轴",
            "inverse": false,
            "tickLine": {
              "show": true,
              "width": 1,
              "color": "auto"
            },
            "tick": {
              "show": true,
              "position": "outside",
              "length": 5,
              "width": 1,
              "color": "auto"
            },
            "tickLabel": {
              "show": true,
              "label": {
                "fontSize": 12,
                "color": "#333",
                "fontFamily": "sans-serif",
                "fontGroup": [],
                "cusFontSize": 12
              },
              "rotate": 0,
              "prefix": "",
              "suffix": "",
              "optimize": 0,
              "distance": 0,
              "min": null,
              "max": null,
              "ratio": 1,
              "digit": "auto"
            },
            "netLine": {
              "show": false,
              "width": 1,
              "type": "solid",
              "color": "auto",
              "interval": {
                "value": "auto",
                "cusNumber": 0
              }
            },
            "netArea": {
              "show": false,
              "interval": {
                "value": "auto",
                "cusNumber": 0
              },
              "colorOne": "auto",
              "colorTwo": "auto"
            },
            "data": ["尔尔", "树人", "多个"],
            "type": "category"
          },
          "yAxisLeft": {
            "show": true,
            "title": {
              "showTitle": false,
              "text": "",
              "nameGap": 15,
              "rotate": 0,
              "label": {
                "fontSize": 12,
                "color": "#333",
                "fontFamily": "sans-serif",
                "fontGroup": [],
                "cusFontSize": 12
              },
              "fzPosition": "end"
            },
            "name": "显示Y轴",
            "inverse": false,
            "tickLine": {
              "show": true,
              "width": 1,
              "color": "auto"
            },
            "tick": {
              "show": true,
              "position": "outside",
              "length": 5,
              "width": 1,
              "color": "auto"
            },
            "tickLabel": {
              "show": true,
              "label": {
                "fontSize": 12,
                "color": "#333",
                "fontFamily": "sans-serif",
                "fontGroup": [],
                "cusFontSize": 12
              },
              "rotate": 0,
              "formatter": {
                "prefix": "",
                "suffix": "",
                "ratio": 1,
                "digit": "auto"
              },
              "split": 5,
              "min": null,
              "max": null,
              "prefix": "",
              "suffix": "",
              "ratio": 1,
              "digit": "auto",
              "distance": 0
            },
            "netLine": {
              "show": false,
              "width": 1,
              "type": "solid",
              "color": "auto",
              "interval": {
                "value": "auto",
                "cusNumber": 0
              }
            },
            "netArea": {
              "show": false,
              "interval": {
                "value": "auto",
                "cusNumber": 0
              },
              "colorOne": "auto",
              "colorTwo": "auto"
            },
            "type": "value"
          },
          "yAxisRight": {
            "show": false,
            "title": {
              "showTitle": false,
              "text": "",
              "nameGap": 15,
              "rotate": 0,
              "label": {
                "fontSize": 12,
                "color": "#333",
                "fontFamily": "sans-serif",
                "fontGroup": [],
                "cusFontSize": 12
              },
              "fzPosition": "end"
            },
            "name": "显示Y轴",
            "inverse": false,
            "tickLine": {
              "show": true,
              "width": 1,
              "color": "auto"
            },
            "tick": {
              "show": true,
              "position": "outside",
              "length": 5,
              "width": 1,
              "color": "auto"
            },
            "tickLabel": {
              "show": true,
              "label": {
                "fontSize": 12,
                "color": "#333",
                "fontFamily": "sans-serif",
                "fontGroup": [],
                "cusFontSize": 12
              },
              "rotate": 0,
              "formatter": {
                "prefix": "",
                "suffix": "",
                "ratio": 1,
                "digit": "auto"
              },
              "split": 5,
              "min": null,
              "max": null,
              "prefix": "",
              "suffix": "",
              "ratio": 1,
              "digit": "auto",
              "distance": 0
            },
            "netLine": {
              "show": false,
              "width": 1,
              "type": "solid",
              "color": "auto",
              "interval": {
                "value": "auto",
                "cusNumber": 0
              }
            },
            "netArea": {
              "show": false,
              "interval": {
                "value": "auto",
                "cusNumber": 0
              },
              "colorOne": "auto",
              "colorTwo": "auto"
            }
          }
        },
        "series": [{
          "itemStyle": {
            "color": null,
            "borderColor": "#000",
            "borderType": "solid",
            "borderWidth": 1
          },
          "lineStyle": {
            "color": null,
            "width": 1,
            "type": "solid"
          },
          "data": [1, 3, 5],
          "type": "line",
          "name": "尔尔",
          "markPoint": {
            "data": []
          },
          "markLine": {
            "data": []
          },
          "markArea": {
            "data": []
          }
        }, {
          "itemStyle": {
            "color": null,
            "borderColor": "#000",
            "borderType": "solid",
            "borderWidth": 1
          },
          "lineStyle": {
            "color": null,
            "width": 1,
            "type": "solid"
          },
          "data": [2, 4, 6],
          "type": "line",
          "name": "地方当然",
          "markPoint": {
            "data": []
          },
          "markLine": {
            "data": []
          },
          "markArea": {
            "data": []
          }
        }],
        "seriesData": [[1, 3, 5], [2, 4, 6]]
      }
    }
  }, {
    "chart_id": "chart_5erpeWc1eWal_1596093236310",
    "active": true,
    "chartOptions": {
      "chart_id": "chart_5erpeWc1eWal_1596093236310",
      "chartAllType": "echarts|line|default",
      "chartPro": "echarts",
      "chartType": "line",
      "chartStyle": "default",
      "chartData": [[{
        "v": "德国人的",
        "ct": {
          "fa": "General",
          "t": "g"
        },
        "m": "德国人的",
        "bg": "rgba(255,255,255)",
        "bl": 0,
        "it": 0,
        "ff": 1,
        "fs": 11,
        "fc": "rgb(0, 0, 0)",
        "ht": 1,
        "vt": 0
      }, {
        "v": "尔尔",
        "ct": {
          "fa": "General",
          "t": "g"
        },
        "m": "尔尔",
        "bg": "rgba(255,255,255)",
        "bl": 0,
        "it": 0,
        "ff": 1,
        "fs": 11,
        "fc": "rgb(0, 0, 0)",
        "ht": 1,
        "vt": 0
      }, {
        "v": "地方当然",
        "ct": {
          "fa": "General",
          "t": "g"
        },
        "m": "地方当然",
        "bg": "rgba(255,255,255)",
        "bl": 0,
        "it": 0,
        "ff": 1,
        "fs": 11,
        "fc": "rgb(0, 0, 0)",
        "ht": 1,
        "vt": 0
      }], [{
        "v": "尔尔",
        "ct": {
          "fa": "General",
          "t": "g"
        },
        "m": "尔尔",
        "bg": "rgba(255,255,255)",
        "bl": 0,
        "it": 0,
        "ff": 1,
        "fs": 11,
        "fc": "rgb(0, 0, 0)",
        "ht": 1,
        "vt": 0
      }, {
        "v": 1,
        "ct": {
          "fa": "General",
          "t": "n"
        },
        "m": "1",
        "bg": "rgba(255,255,255)",
        "bl": 0,
        "it": 0,
        "ff": 1,
        "fs": 11,
        "fc": "rgb(0, 0, 0)",
        "ht": 1,
        "vt": 0
      }, {
        "v": 2,
        "ct": {
          "fa": "General",
          "t": "n"
        },
        "m": "2",
        "bg": "rgba(255,255,255)",
        "bl": 0,
        "it": 0,
        "ff": 1,
        "fs": 11,
        "fc": "rgb(0, 0, 0)",
        "ht": 1,
        "vt": 0
      }], [{
        "v": "树人",
        "ct": {
          "fa": "General",
          "t": "g"
        },
        "m": "树人",
        "bg": "rgba(255,255,255)",
        "bl": 0,
        "it": 0,
        "ff": 1,
        "fs": 11,
        "fc": "rgb(0, 0, 0)",
        "ht": 1,
        "vt": 0
      }, {
        "v": 3,
        "ct": {
          "fa": "General",
          "t": "n"
        },
        "m": "3",
        "bg": "rgba(255,255,255)",
        "bl": 0,
        "it": 0,
        "ff": 1,
        "fs": 11,
        "fc": "rgb(0, 0, 0)",
        "ht": 1,
        "vt": 0
      }, {
        "v": 4,
        "ct": {
          "fa": "General",
          "t": "n"
        },
        "m": "4",
        "bg": "rgba(255,255,255)",
        "bl": 0,
        "it": 0,
        "ff": 1,
        "fs": 11,
        "fc": "rgb(0, 0, 0)",
        "ht": 1,
        "vt": 0
      }], [{
        "v": "多个",
        "ct": {
          "fa": "General",
          "t": "g"
        },
        "m": "多个",
        "bg": "rgba(255,255,255)",
        "bl": 0,
        "it": 0,
        "ff": 1,
        "fs": 11,
        "fc": "rgb(0, 0, 0)",
        "ht": 1,
        "vt": 0
      }, {
        "v": 5,
        "ct": {
          "fa": "General",
          "t": "n"
        },
        "m": "5",
        "bg": "rgba(255,255,255)",
        "bl": 0,
        "it": 0,
        "ff": 1,
        "fs": 11,
        "fc": "rgb(0, 0, 0)",
        "ht": 1,
        "vt": 0
      }, {
        "v": 6,
        "ct": {
          "fa": "General",
          "t": "n"
        },
        "m": "6",
        "bg": "rgba(255,255,255)",
        "bl": 0,
        "it": 0,
        "ff": 1,
        "fs": 11,
        "fc": "rgb(0, 0, 0)",
        "ht": 1,
        "vt": 0
      }]],
      "rangeArray": [{
        "row": [17, 20],
        "column": [9, 11],
        "row_focus": 17,
        "column_focus": 9,
        "left": 1077,
        "width": 140,
        "top": 357,
        "height": 31,
        "left_move": 1077,
        "width_move": 359,
        "top_move": 357,
        "height_move": 94
      }],
      "rangeTxt": "J18:L21",
      "rangeColCheck": {
        "exits": true,
        "range": [0, 0]
      },
      "rangeRowCheck": {
        "exits": true,
        "range": [0, 0]
      },
      "rangeConfigCheck": false,
      "rangeSplitArray": {
        "title": {
          "row": [0, 0],
          "column": [0, 0]
        },
        "rowtitle": {
          "row": [0, 0],
          "column": [1, 2]
        },
        "coltitle": {
          "row": [1, 3],
          "column": [0, 0]
        },
        "content": {
          "row": [1, 3],
          "column": [1, 2]
        },
        "type": "normal",
        "range": {
          "row": [17, 20],
          "column": [9, 11],
          "row_focus": 17,
          "column_focus": 9,
          "left": 1077,
          "width": 140,
          "top": 357,
          "height": 31,
          "left_move": 1077,
          "width_move": 359,
          "top_move": 357,
          "height_move": 94
        }
      },
      "chartDataCache": {
        "label": ["尔尔", "地方当然"],
        "xAxis": ["尔尔", "树人", "多个"],
        "series": [[1, 2], [3, 4], [5, 6]],
        "series_tpye": {
          "0": "num",
          "1": "num"
        }
      },
      "chartDataSeriesOrder": {
        "0": 0,
        "1": 1,
        "length": 2
      },
      "defaultOption": {
        "title": {
          "show": false,
          "text": "默认标题",
          "label": {
            "fontSize": 12,
            "color": "#333",
            "fontFamily": "sans-serif",
            "fontGroup": [],
            "cusFontSize": 12
          },
          "position": {
            "value": "left-top",
            "offsetX": 40,
            "offsetY": 50
          }
        },
        "subtitle": {
          "show": false,
          "text": "",
          "label": {
            "fontSize": 12,
            "color": "#333",
            "fontFamily": "sans-serif",
            "fontGroup": [],
            "cusFontSize": 12
          },
          "distance": {
            "value": "auto",
            "cusGap": 40
          }
        },
        "config": {
          "color": "transparent",
          "fontFamily": "Sans-serif",
          "grid": {
            "value": "normal",
            "top": 5,
            "left": 10,
            "right": 20,
            "bottom": 10
          }
        },
        "legend": {
          "show": true,
          "selectMode": "multiple",
          "selected": [{
            "seriesName": "衣服",
            "isShow": true
          }, {
            "seriesName": "食材",
            "isShow": true
          }, {
            "seriesName": "图书",
            "isShow": true
          }],
          "label": {
            "fontSize": 12,
            "color": "#333",
            "fontFamily": "sans-serif",
            "fontGroup": [],
            "cusFontSize": 12
          },
          "position": {
            "value": "left-top",
            "offsetX": 40,
            "offsetY": 50,
            "direction": "horizontal"
          },
          "width": {
            "value": "auto",
            "cusSize": 25
          },
          "height": {
            "value": "auto",
            "cusSize": 14
          },
          "distance": {
            "value": "auto",
            "cusGap": 10
          },
          "itemGap": 10,
          "data": ["尔尔", "地方当然"]
        },
        "tooltip": {
          "show": true,
          "label": {
            "fontSize": 12,
            "color": "#333",
            "fontFamily": "sans-serif",
            "fontGroup": [],
            "cusFontSize": 12
          },
          "backgroundColor": "rgba(50,50,50,0.7)",
          "triggerOn": "mousemove",
          "triggerType": "item",
          "axisPointer": {
            "type": "line",
            "style": {
              "color": "#555",
              "width": "normal",
              "type": "solid"
            }
          },
          "format": [{
            "seriesName": "衣服",
            "prefix": "",
            "suffix": "",
            "ratio": 1,
            "digit": "auto"
          }, {
            "seriesName": "食材",
            "prefix": "",
            "suffix": "",
            "ratio": 1,
            "digit": "auto"
          }, {
            "seriesName": "图书",
            "prefix": "",
            "suffix": "",
            "ratio": 1,
            "digit": "auto"
          }],
          "position": "auto"
        },
        "axis": {
          "axisType": "xAxisDown",
          "xAxisUp": {
            "show": false,
            "title": {
              "showTitle": false,
              "text": "",
              "nameGap": 15,
              "rotate": 0,
              "label": {
                "fontSize": 12,
                "color": "#333",
                "fontFamily": "sans-serif",
                "fontGroup": [],
                "cusFontSize": 12
              },
              "fzPosition": "end"
            },
            "name": "显示X轴",
            "inverse": false,
            "tickLine": {
              "show": true,
              "width": 1,
              "color": "auto"
            },
            "tick": {
              "show": true,
              "position": "outside",
              "length": 5,
              "width": 1,
              "color": "auto"
            },
            "tickLabel": {
              "show": true,
              "label": {
                "fontSize": 12,
                "color": "#333",
                "fontFamily": "sans-serif",
                "fontGroup": [],
                "cusFontSize": 12
              },
              "rotate": 0,
              "prefix": "",
              "suffix": "",
              "optimize": 0,
              "distance": 0,
              "min": "auto",
              "max": "auto",
              "ratio": 1,
              "digit": "auto"
            },
            "netLine": {
              "show": false,
              "width": 1,
              "type": "solid",
              "color": "auto",
              "interval": {
                "value": "auto",
                "cusNumber": 0
              }
            },
            "netArea": {
              "show": false,
              "interval": {
                "value": "auto",
                "cusNumber": 0
              },
              "colorOne": "auto",
              "colorTwo": "auto"
            },
            "axisLine": {
              "onZero": false
            }
          },
          "xAxisDown": {
            "show": true,
            "title": {
              "showTitle": false,
              "text": "",
              "nameGap": 15,
              "rotate": 0,
              "label": {
                "fontSize": 12,
                "color": "#333",
                "fontFamily": "sans-serif",
                "fontGroup": [],
                "cusFontSize": 12
              },
              "fzPosition": "end"
            },
            "name": "显示X轴",
            "inverse": false,
            "tickLine": {
              "show": true,
              "width": 1,
              "color": "auto"
            },
            "tick": {
              "show": true,
              "position": "outside",
              "length": 5,
              "width": 1,
              "color": "auto"
            },
            "tickLabel": {
              "show": true,
              "label": {
                "fontSize": 12,
                "color": "#333",
                "fontFamily": "sans-serif",
                "fontGroup": [],
                "cusFontSize": 12
              },
              "rotate": 0,
              "prefix": "",
              "suffix": "",
              "optimize": 0,
              "distance": 0,
              "min": null,
              "max": null,
              "ratio": 1,
              "digit": "auto"
            },
            "netLine": {
              "show": false,
              "width": 1,
              "type": "solid",
              "color": "auto",
              "interval": {
                "value": "auto",
                "cusNumber": 0
              }
            },
            "netArea": {
              "show": false,
              "interval": {
                "value": "auto",
                "cusNumber": 0
              },
              "colorOne": "auto",
              "colorTwo": "auto"
            },
            "data": ["尔尔", "树人", "多个"],
            "type": "category"
          },
          "yAxisLeft": {
            "show": true,
            "title": {
              "showTitle": false,
              "text": "",
              "nameGap": 15,
              "rotate": 0,
              "label": {
                "fontSize": 12,
                "color": "#333",
                "fontFamily": "sans-serif",
                "fontGroup": [],
                "cusFontSize": 12
              },
              "fzPosition": "end"
            },
            "name": "显示Y轴",
            "inverse": false,
            "tickLine": {
              "show": true,
              "width": 1,
              "color": "auto"
            },
            "tick": {
              "show": true,
              "position": "outside",
              "length": 5,
              "width": 1,
              "color": "auto"
            },
            "tickLabel": {
              "show": true,
              "label": {
                "fontSize": 12,
                "color": "#333",
                "fontFamily": "sans-serif",
                "fontGroup": [],
                "cusFontSize": 12
              },
              "rotate": 0,
              "formatter": {
                "prefix": "",
                "suffix": "",
                "ratio": 1,
                "digit": "auto"
              },
              "split": 5,
              "min": null,
              "max": null,
              "prefix": "",
              "suffix": "",
              "ratio": 1,
              "digit": "auto",
              "distance": 0
            },
            "netLine": {
              "show": false,
              "width": 1,
              "type": "solid",
              "color": "auto",
              "interval": {
                "value": "auto",
                "cusNumber": 0
              }
            },
            "netArea": {
              "show": false,
              "interval": {
                "value": "auto",
                "cusNumber": 0
              },
              "colorOne": "auto",
              "colorTwo": "auto"
            },
            "type": "value"
          },
          "yAxisRight": {
            "show": false,
            "title": {
              "showTitle": false,
              "text": "",
              "nameGap": 15,
              "rotate": 0,
              "label": {
                "fontSize": 12,
                "color": "#333",
                "fontFamily": "sans-serif",
                "fontGroup": [],
                "cusFontSize": 12
              },
              "fzPosition": "end"
            },
            "name": "显示Y轴",
            "inverse": false,
            "tickLine": {
              "show": true,
              "width": 1,
              "color": "auto"
            },
            "tick": {
              "show": true,
              "position": "outside",
              "length": 5,
              "width": 1,
              "color": "auto"
            },
            "tickLabel": {
              "show": true,
              "label": {
                "fontSize": 12,
                "color": "#333",
                "fontFamily": "sans-serif",
                "fontGroup": [],
                "cusFontSize": 12
              },
              "rotate": 0,
              "formatter": {
                "prefix": "",
                "suffix": "",
                "ratio": 1,
                "digit": "auto"
              },
              "split": 5,
              "min": null,
              "max": null,
              "prefix": "",
              "suffix": "",
              "ratio": 1,
              "digit": "auto",
              "distance": 0
            },
            "netLine": {
              "show": false,
              "width": 1,
              "type": "solid",
              "color": "auto",
              "interval": {
                "value": "auto",
                "cusNumber": 0
              }
            },
            "netArea": {
              "show": false,
              "interval": {
                "value": "auto",
                "cusNumber": 0
              },
              "colorOne": "auto",
              "colorTwo": "auto"
            }
          }
        },
        "series": [{
          "itemStyle": {
            "color": null,
            "borderColor": "#000",
            "borderType": "solid",
            "borderWidth": 1
          },
          "lineStyle": {
            "color": null,
            "width": 1,
            "type": "solid"
          },
          "data": [1, 3, 5],
          "type": "line",
          "name": "尔尔",
          "markPoint": {
            "data": []
          },
          "markLine": {
            "data": []
          },
          "markArea": {
            "data": []
          }
        }, {
          "itemStyle": {
            "color": null,
            "borderColor": "#000",
            "borderType": "solid",
            "borderWidth": 1
          },
          "lineStyle": {
            "color": null,
            "width": 1,
            "type": "solid"
          },
          "data": [2, 4, 6],
          "type": "line",
          "name": "地方当然",
          "markPoint": {
            "data": []
          },
          "markLine": {
            "data": []
          },
          "markArea": {
            "data": []
          }
        }],
        "seriesData": [[1, 3, 5], [2, 4, 6]]
      }
    }
  }, {
    "chart_id": "chart_5erpeWc1eWal_15960973336319",
    "active": true,
    "chartOptions": {
      "chart_id": "chart_5erpeWc1eWal_15960973336319",
      "chartAllType": "echarts|line|default",
      "chartPro": "echarts",
      "chartType": "line",
      "chartStyle": "default",
      "chartData": [[{
        "v": "德国人的",
        "ct": {
          "fa": "General",
          "t": "g"
        },
        "m": "德国人的",
        "bg": "rgba(255,255,255)",
        "bl": 0,
        "it": 0,
        "ff": 1,
        "fs": 11,
        "fc": "rgb(0, 0, 0)",
        "ht": 1,
        "vt": 0
      }, {
        "v": "尔尔",
        "ct": {
          "fa": "General",
          "t": "g"
        },
        "m": "尔尔",
        "bg": "rgba(255,255,255)",
        "bl": 0,
        "it": 0,
        "ff": 1,
        "fs": 11,
        "fc": "rgb(0, 0, 0)",
        "ht": 1,
        "vt": 0
      }, {
        "v": "地方当然",
        "ct": {
          "fa": "General",
          "t": "g"
        },
        "m": "地方当然",
        "bg": "rgba(255,255,255)",
        "bl": 0,
        "it": 0,
        "ff": 1,
        "fs": 11,
        "fc": "rgb(0, 0, 0)",
        "ht": 1,
        "vt": 0
      }], [{
        "v": "尔尔",
        "ct": {
          "fa": "General",
          "t": "g"
        },
        "m": "尔尔",
        "bg": "rgba(255,255,255)",
        "bl": 0,
        "it": 0,
        "ff": 1,
        "fs": 11,
        "fc": "rgb(0, 0, 0)",
        "ht": 1,
        "vt": 0
      }, {
        "v": 1,
        "ct": {
          "fa": "General",
          "t": "n"
        },
        "m": "1",
        "bg": "rgba(255,255,255)",
        "bl": 0,
        "it": 0,
        "ff": 1,
        "fs": 11,
        "fc": "rgb(0, 0, 0)",
        "ht": 1,
        "vt": 0
      }, {
        "v": 2,
        "ct": {
          "fa": "General",
          "t": "n"
        },
        "m": "2",
        "bg": "rgba(255,255,255)",
        "bl": 0,
        "it": 0,
        "ff": 1,
        "fs": 11,
        "fc": "rgb(0, 0, 0)",
        "ht": 1,
        "vt": 0
      }], [{
        "v": "树人",
        "ct": {
          "fa": "General",
          "t": "g"
        },
        "m": "树人",
        "bg": "rgba(255,255,255)",
        "bl": 0,
        "it": 0,
        "ff": 1,
        "fs": 11,
        "fc": "rgb(0, 0, 0)",
        "ht": 1,
        "vt": 0
      }, {
        "v": 3,
        "ct": {
          "fa": "General",
          "t": "n"
        },
        "m": "3",
        "bg": "rgba(255,255,255)",
        "bl": 0,
        "it": 0,
        "ff": 1,
        "fs": 11,
        "fc": "rgb(0, 0, 0)",
        "ht": 1,
        "vt": 0
      }, {
        "v": 4,
        "ct": {
          "fa": "General",
          "t": "n"
        },
        "m": "4",
        "bg": "rgba(255,255,255)",
        "bl": 0,
        "it": 0,
        "ff": 1,
        "fs": 11,
        "fc": "rgb(0, 0, 0)",
        "ht": 1,
        "vt": 0
      }], [{
        "v": "多个",
        "ct": {
          "fa": "General",
          "t": "g"
        },
        "m": "多个",
        "bg": "rgba(255,255,255)",
        "bl": 0,
        "it": 0,
        "ff": 1,
        "fs": 11,
        "fc": "rgb(0, 0, 0)",
        "ht": 1,
        "vt": 0
      }, {
        "v": 5,
        "ct": {
          "fa": "General",
          "t": "n"
        },
        "m": "5",
        "bg": "rgba(255,255,255)",
        "bl": 0,
        "it": 0,
        "ff": 1,
        "fs": 11,
        "fc": "rgb(0, 0, 0)",
        "ht": 1,
        "vt": 0
      }, {
        "v": 6,
        "ct": {
          "fa": "General",
          "t": "n"
        },
        "m": "6",
        "bg": "rgba(255,255,255)",
        "bl": 0,
        "it": 0,
        "ff": 1,
        "fs": 11,
        "fc": "rgb(0, 0, 0)",
        "ht": 1,
        "vt": 0
      }]],
      "rangeArray": [{
        "row": [17, 20],
        "column": [9, 11],
        "row_focus": 17,
        "column_focus": 9,
        "left": 1077,
        "width": 140,
        "top": 357,
        "height": 31,
        "left_move": 1077,
        "width_move": 359,
        "top_move": 357,
        "height_move": 94
      }],
      "rangeTxt": "J18:L21",
      "rangeColCheck": {
        "exits": true,
        "range": [0, 0]
      },
      "rangeRowCheck": {
        "exits": true,
        "range": [0, 0]
      },
      "rangeConfigCheck": false,
      "rangeSplitArray": {
        "title": {
          "row": [0, 0],
          "column": [0, 0]
        },
        "rowtitle": {
          "row": [0, 0],
          "column": [1, 2]
        },
        "coltitle": {
          "row": [1, 3],
          "column": [0, 0]
        },
        "content": {
          "row": [1, 3],
          "column": [1, 2]
        },
        "type": "normal",
        "range": {
          "row": [17, 20],
          "column": [9, 11],
          "row_focus": 17,
          "column_focus": 9,
          "left": 1077,
          "width": 140,
          "top": 357,
          "height": 31,
          "left_move": 1077,
          "width_move": 359,
          "top_move": 357,
          "height_move": 94
        }
      },
      "chartDataCache": {
        "label": ["尔尔", "地方当然"],
        "xAxis": ["尔尔", "树人", "多个"],
        "series": [[1, 2], [3, 4], [5, 6]],
        "series_tpye": {
          "0": "num",
          "1": "num"
        }
      },
      "chartDataSeriesOrder": {
        "0": 0,
        "1": 1,
        "length": 2
      },
      "defaultOption": {
        "title": {
          "show": false,
          "text": "默认标题",
          "label": {
            "fontSize": 12,
            "color": "#333",
            "fontFamily": "sans-serif",
            "fontGroup": [],
            "cusFontSize": 12
          },
          "position": {
            "value": "left-top",
            "offsetX": 40,
            "offsetY": 50
          }
        },
        "subtitle": {
          "show": false,
          "text": "",
          "label": {
            "fontSize": 12,
            "color": "#333",
            "fontFamily": "sans-serif",
            "fontGroup": [],
            "cusFontSize": 12
          },
          "distance": {
            "value": "auto",
            "cusGap": 40
          }
        },
        "config": {
          "color": "transparent",
          "fontFamily": "Sans-serif",
          "grid": {
            "value": "normal",
            "top": 5,
            "left": 10,
            "right": 20,
            "bottom": 10
          }
        },
        "legend": {
          "show": true,
          "selectMode": "multiple",
          "selected": [{
            "seriesName": "衣服",
            "isShow": true
          }, {
            "seriesName": "食材",
            "isShow": true
          }, {
            "seriesName": "图书",
            "isShow": true
          }],
          "label": {
            "fontSize": 12,
            "color": "#333",
            "fontFamily": "sans-serif",
            "fontGroup": [],
            "cusFontSize": 12
          },
          "position": {
            "value": "left-top",
            "offsetX": 40,
            "offsetY": 50,
            "direction": "horizontal"
          },
          "width": {
            "value": "auto",
            "cusSize": 25
          },
          "height": {
            "value": "auto",
            "cusSize": 14
          },
          "distance": {
            "value": "auto",
            "cusGap": 10
          },
          "itemGap": 10,
          "data": ["尔尔", "地方当然"]
        },
        "tooltip": {
          "show": true,
          "label": {
            "fontSize": 12,
            "color": "#333",
            "fontFamily": "sans-serif",
            "fontGroup": [],
            "cusFontSize": 12
          },
          "backgroundColor": "rgba(50,50,50,0.7)",
          "triggerOn": "mousemove",
          "triggerType": "item",
          "axisPointer": {
            "type": "line",
            "style": {
              "color": "#555",
              "width": "normal",
              "type": "solid"
            }
          },
          "format": [{
            "seriesName": "衣服",
            "prefix": "",
            "suffix": "",
            "ratio": 1,
            "digit": "auto"
          }, {
            "seriesName": "食材",
            "prefix": "",
            "suffix": "",
            "ratio": 1,
            "digit": "auto"
          }, {
            "seriesName": "图书",
            "prefix": "",
            "suffix": "",
            "ratio": 1,
            "digit": "auto"
          }],
          "position": "auto"
        },
        "axis": {
          "axisType": "xAxisDown",
          "xAxisUp": {
            "show": false,
            "title": {
              "showTitle": false,
              "text": "",
              "nameGap": 15,
              "rotate": 0,
              "label": {
                "fontSize": 12,
                "color": "#333",
                "fontFamily": "sans-serif",
                "fontGroup": [],
                "cusFontSize": 12
              },
              "fzPosition": "end"
            },
            "name": "显示X轴",
            "inverse": false,
            "tickLine": {
              "show": true,
              "width": 1,
              "color": "auto"
            },
            "tick": {
              "show": true,
              "position": "outside",
              "length": 5,
              "width": 1,
              "color": "auto"
            },
            "tickLabel": {
              "show": true,
              "label": {
                "fontSize": 12,
                "color": "#333",
                "fontFamily": "sans-serif",
                "fontGroup": [],
                "cusFontSize": 12
              },
              "rotate": 0,
              "prefix": "",
              "suffix": "",
              "optimize": 0,
              "distance": 0,
              "min": "auto",
              "max": "auto",
              "ratio": 1,
              "digit": "auto"
            },
            "netLine": {
              "show": false,
              "width": 1,
              "type": "solid",
              "color": "auto",
              "interval": {
                "value": "auto",
                "cusNumber": 0
              }
            },
            "netArea": {
              "show": false,
              "interval": {
                "value": "auto",
                "cusNumber": 0
              },
              "colorOne": "auto",
              "colorTwo": "auto"
            },
            "axisLine": {
              "onZero": false
            }
          },
          "xAxisDown": {
            "show": true,
            "title": {
              "showTitle": false,
              "text": "",
              "nameGap": 15,
              "rotate": 0,
              "label": {
                "fontSize": 12,
                "color": "#333",
                "fontFamily": "sans-serif",
                "fontGroup": [],
                "cusFontSize": 12
              },
              "fzPosition": "end"
            },
            "name": "显示X轴",
            "inverse": false,
            "tickLine": {
              "show": true,
              "width": 1,
              "color": "auto"
            },
            "tick": {
              "show": true,
              "position": "outside",
              "length": 5,
              "width": 1,
              "color": "auto"
            },
            "tickLabel": {
              "show": true,
              "label": {
                "fontSize": 12,
                "color": "#333",
                "fontFamily": "sans-serif",
                "fontGroup": [],
                "cusFontSize": 12
              },
              "rotate": 0,
              "prefix": "",
              "suffix": "",
              "optimize": 0,
              "distance": 0,
              "min": null,
              "max": null,
              "ratio": 1,
              "digit": "auto"
            },
            "netLine": {
              "show": false,
              "width": 1,
              "type": "solid",
              "color": "auto",
              "interval": {
                "value": "auto",
                "cusNumber": 0
              }
            },
            "netArea": {
              "show": false,
              "interval": {
                "value": "auto",
                "cusNumber": 0
              },
              "colorOne": "auto",
              "colorTwo": "auto"
            },
            "data": ["尔尔", "树人", "多个"],
            "type": "category"
          },
          "yAxisLeft": {
            "show": true,
            "title": {
              "showTitle": false,
              "text": "",
              "nameGap": 15,
              "rotate": 0,
              "label": {
                "fontSize": 12,
                "color": "#333",
                "fontFamily": "sans-serif",
                "fontGroup": [],
                "cusFontSize": 12
              },
              "fzPosition": "end"
            },
            "name": "显示Y轴",
            "inverse": false,
            "tickLine": {
              "show": true,
              "width": 1,
              "color": "auto"
            },
            "tick": {
              "show": true,
              "position": "outside",
              "length": 5,
              "width": 1,
              "color": "auto"
            },
            "tickLabel": {
              "show": true,
              "label": {
                "fontSize": 12,
                "color": "#333",
                "fontFamily": "sans-serif",
                "fontGroup": [],
                "cusFontSize": 12
              },
              "rotate": 0,
              "formatter": {
                "prefix": "",
                "suffix": "",
                "ratio": 1,
                "digit": "auto"
              },
              "split": 5,
              "min": null,
              "max": null,
              "prefix": "",
              "suffix": "",
              "ratio": 1,
              "digit": "auto",
              "distance": 0
            },
            "netLine": {
              "show": false,
              "width": 1,
              "type": "solid",
              "color": "auto",
              "interval": {
                "value": "auto",
                "cusNumber": 0
              }
            },
            "netArea": {
              "show": false,
              "interval": {
                "value": "auto",
                "cusNumber": 0
              },
              "colorOne": "auto",
              "colorTwo": "auto"
            },
            "type": "value"
          },
          "yAxisRight": {
            "show": false,
            "title": {
              "showTitle": false,
              "text": "",
              "nameGap": 15,
              "rotate": 0,
              "label": {
                "fontSize": 12,
                "color": "#333",
                "fontFamily": "sans-serif",
                "fontGroup": [],
                "cusFontSize": 12
              },
              "fzPosition": "end"
            },
            "name": "显示Y轴",
            "inverse": false,
            "tickLine": {
              "show": true,
              "width": 1,
              "color": "auto"
            },
            "tick": {
              "show": true,
              "position": "outside",
              "length": 5,
              "width": 1,
              "color": "auto"
            },
            "tickLabel": {
              "show": true,
              "label": {
                "fontSize": 12,
                "color": "#333",
                "fontFamily": "sans-serif",
                "fontGroup": [],
                "cusFontSize": 12
              },
              "rotate": 0,
              "formatter": {
                "prefix": "",
                "suffix": "",
                "ratio": 1,
                "digit": "auto"
              },
              "split": 5,
              "min": null,
              "max": null,
              "prefix": "",
              "suffix": "",
              "ratio": 1,
              "digit": "auto",
              "distance": 0
            },
            "netLine": {
              "show": false,
              "width": 1,
              "type": "solid",
              "color": "auto",
              "interval": {
                "value": "auto",
                "cusNumber": 0
              }
            },
            "netArea": {
              "show": false,
              "interval": {
                "value": "auto",
                "cusNumber": 0
              },
              "colorOne": "auto",
              "colorTwo": "auto"
            }
          }
        },
        "series": [{
          "itemStyle": {
            "color": null,
            "borderColor": "#000",
            "borderType": "solid",
            "borderWidth": 1
          },
          "lineStyle": {
            "color": null,
            "width": 1,
            "type": "solid"
          },
          "data": [1, 3, 5],
          "type": "line",
          "name": "尔尔",
          "markPoint": {
            "data": []
          },
          "markLine": {
            "data": []
          },
          "markArea": {
            "data": []
          }
        }, {
          "itemStyle": {
            "color": null,
            "borderColor": "#000",
            "borderType": "solid",
            "borderWidth": 1
          },
          "lineStyle": {
            "color": null,
            "width": 1,
            "type": "solid"
          },
          "data": [2, 4, 6],
          "type": "line",
          "name": "地方当然",
          "markPoint": {
            "data": []
          },
          "markLine": {
            "data": []
          },
          "markArea": {
            "data": []
          }
        }],
        "seriesData": [[1, 3, 5], [2, 4, 6]]
      }
    }
  }],
  // store current chart index
  currentChartIndex: null // current chart objects, bind to chartSetting component
  // currentChart: {},

});
// CONCATENATED MODULE: ./src/store/modules/chartSetting/index.js




/* harmony default export */ var chartSetting = ({
  namespaced: true,
  actions: chartSetting_actions,
  getters: chartSetting_getters,
  mutations: chartSetting_mutations,
  state: chartSetting_state
});
// CONCATENATED MODULE: ./src/store/index.js





external_Vue_default.a.use(external_Vuex_default.a);
const store = new external_Vuex_default.a.Store();

const debug = "production" !== 'production';
/* harmony default export */ var src_store = (new external_Vuex_default.a.Store({
  /**
   * Assign the modules to the store
   */
  modules: {
    'rect': rect,
    'chartRender': modules_chartRender,
    'chartSetting': chartSetting
  },

  /**
   * If strict mode should be enabled
   */
  strict: debug
}));
// EXTERNAL MODULE: ./node_modules/echarts-stat/index.js
var echarts_stat = __webpack_require__("86d5");

// CONCATENATED MODULE: ./src/utils/chartUtil.js


 // import highchartsEngine from './highchartsEngine'

const echarts = __webpack_require__("164e");


/**
 * update main object's subject attribute by router
 * @param {Object} chartOptions main object
 * @param {String} router router
 * @param {Object} updateObj subject attribute
 */

const setChartOptionsByRouter = function (chartOptions, router, updateObj) {
  if (chartOptions == undefined || router == undefined) {
    return chartOptions;
  }

  let routerArray = router.split('/');
  const defaultOption = chartOptions.defaultOption; //递归获取内部属性

  function deepFind(curObj) {
    if (routerArray.length != 0) {
      return deepFind(curObj[routerArray.shift()]);
    } else {
      Object.assign(curObj, updateObj);
      return curObj;
    }
  }

  deepFind(defaultOption);
  renderChart({
    chartOptions: chartOptions
  });
  return chartOptions;
};
/**
 * 渲染图表的方法,拿到store的配置json(对应于chartJson中的数据格式,可能是初始化图表的数据,也可能是后台传输来的特定配置的数据),执行转换引擎后,渲染到图表插件中,独立于vue组件.可用于编辑器和预览端
 * 
 */


const renderChart = function (renderChartObj, ele) {
  let chartOptions = renderChartObj.chartOptions;
  let chart_id = chartOptions.chart_id; // const { chart_id, chartOptions } = renderChartObj;

  const chartAllTypeArray = chartOptions.chartAllType.split('|');
  const chartPro = chartAllTypeArray[0];
  const chartType = chartAllTypeArray[1]; // const container = ele || document.getElementById(chart_id);

  const container = document.getElementById(chart_id);
  if (container == null) return;

  if (chartPro === 'echarts') {
    const options = utils_echartsEngine(chartOptions);
    let chart = echarts.getInstanceByDom(container);

    if (chart == null) {
      chart = echarts.init(container);
    }

    if (chartType == 'regression') {
      var data = [];

      if (chartOptions.chartData.length && chartOptions.chartData.length == 2) {
        for (let index = 0; index < chartOptions.chartData[0].length; index++) {
          const element = chartOptions.chartData[0][index]; //自变量

          const element2 = chartOptions.chartData[1][index]; //因变量的值

          data.push([parseFloat(element.v), parseFloat(element2.v)]);
        }
      } else {
        console.log("数据非回归数据");
      }

      console.info("回归数据", data); //回归图表
      // var data = [
      //     [0.067732, 3.176513],
      //     [0.42781, 3.816464],
      //     [0.070095, 3.213817],
      //     [0.52707, 3.952681],
      //     [0.116163, 3.129283]
      // ]

      var myRegression = echarts_stat["regression"]('linear', data);
      chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        xAxis: {
          type: 'value',
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
          }
        },
        yAxis: {
          type: 'value',
          min: 1.5,
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
          }
        },
        series: [{
          name: 'scatter',
          type: 'scatter',
          label: {
            emphasis: {
              show: true
            }
          },
          data: data
        }, {
          name: 'line',
          type: 'line',
          showSymbol: false,
          data: myRegression.points,
          markPoint: {
            itemStyle: {
              normal: {
                color: 'transparent'
              }
            },
            label: {
              normal: {
                show: true,
                formatter: myRegression.expression,
                textStyle: {
                  color: '#333',
                  fontSize: 14
                }
              }
            },
            data: [{
              coord: myRegression.points[myRegression.points.length - 1]
            }]
          }
        }]
      }, true);
    } else {
      //一般图表
      chart.setOption(options, true);
    }

    setTimeout(() => {
      echarts.getInstanceById(container.getAttribute('_echarts_instance_')).resize();
    }, 0);
  }
};
/**
 * textStyle转化
 */


const transTextStyle = function (origin, result, attr, attr1) {
  // fontGroup
  let fontGroupList = ['bold', 'vertical', 'italic'];
  origin.label.fontGroup.forEach(element => {
    if (fontGroupList.includes(element)) {
      switch (element) {
        case 'bold':
          result[attr].fontWeight = element;
          break;

        case 'vertical':
          // TODO: '标题01'
          result[attr1] = origin.text.replace(/\B/g, '\n');
          break;

        case 'italic':
          result[attr].fontStyle = element;
          break;
      }
    }
  }); // fontColor

  result[attr].color = origin.label.color; // fontSize

  result[attr].fontSize = transCustom(origin.label.fontSize, origin.label.cusFontSize);
}; // 解决精度


const floatTool = function () {
  /*
   * 判断obj是否为一个整数
   */
  function isInteger(obj) {
    return Math.floor(obj) === obj;
  }
  /*
   * 将一个浮点数转成整数，返回整数和倍数。如 3.14 >> 314，倍数是 100
   * @param floatNum {number} 小数
   * @return {object}
   *   {times:100, num: 314}
   */


  function toInteger(floatNum) {
    var ret = {
      times: 1,
      num: 0
    };

    if (isInteger(floatNum)) {
      ret.num = floatNum;
      return ret;
    }

    var strfi = floatNum + '';
    var dotPos = strfi.indexOf('.');
    var len = strfi.substr(dotPos + 1).length;
    var times = Math.pow(10, len);
    var intNum = parseInt(floatNum * times + 0.5, 10);
    ret.times = times;
    ret.num = intNum;
    return ret;
  }
  /*
   * 核心方法，实现加减乘除运算，确保不丢失精度
   * 思路：把小数放大为整数（乘），进行算术运算，再缩小为小数（除）
   *
   * @param a {number} 运算数1
   * @param b {number} 运算数2
   * @param digits {number} 精度，保留的小数点数，比如 2, 即保留为两位小数
   * @param op {string} 运算类型，有加减乘除（add/subtract/multiply/divide）
   *
   */


  function operation(a, b, op) {
    var o1 = toInteger(a);
    var o2 = toInteger(b);
    var n1 = o1.num;
    var n2 = o2.num;
    var t1 = o1.times;
    var t2 = o2.times;
    var max = t1 > t2 ? t1 : t2;
    var result = null;

    switch (op) {
      case 'add':
        if (t1 === t2) {
          // 两个小数位数相同
          result = n1 + n2;
        } else if (t1 > t2) {
          // o1 小数位 大于 o2
          result = n1 + n2 * (t1 / t2);
        } else {
          // o1 小数位 小于 o2
          result = n1 * (t2 / t1) + n2;
        }

        return result / max;

      case 'subtract':
        if (t1 === t2) {
          result = n1 - n2;
        } else if (t1 > t2) {
          result = n1 - n2 * (t1 / t2);
        } else {
          result = n1 * (t2 / t1) - n2;
        }

        return result / max;

      case 'multiply':
        result = n1 * n2 / (t1 * t2);
        return result;

      case 'divide':
        return result = function () {
          var r1 = n1 / n2;
          var r2 = t2 / t1;
          return operation(r1, r2, 'multiply');
        }();
    }
  } // 加减乘除的四个接口


  function add(a, b) {
    return operation(a, b, 'add');
  }

  function subtract(a, b) {
    return operation(a, b, 'subtract');
  }

  function multiply(a, b) {
    return operation(a, b, 'multiply');
  }

  function divide(a, b) {
    return operation(a, b, 'divide');
  } // exports


  return {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide
  };
}();
/**
 * lineStyle转化
 */


const transLineStyle = function (width, color, type = 'solid') {
  return {
    width,
    color,
    type
  };
};
/**
 自定义* custom数据
 */


const transCustom = function (a, b) {
  if (a != 'custom') {
    return a;
  } else {
    return b;
  }
}; // changecharttype


const changeChangeAllType = function (chart_json, chartAllType) {
  var chartID = chart_json.chart_id;
  var chart_id = chartID;
  var updateJson = {};
  var chartAllTypeArray = chartAllType.split("|");
  var chartPro = chartAllTypeArray[0],
      chartType = chartAllTypeArray[1],
      chartStyle = chartAllTypeArray[2];
  updateJson.chart_id = chart_id;
  updateJson.chartAllType = chartAllType; //按照图表类型得到图表的默认设置

  var defaultOptionIni = chart_json.defaultOption;
  defaultOptionIni.series = []; //根据数据集、功能按钮状态、图表类型，得到图表可操作的数据格式，例如：{ "x":[], "y":[], series:[] }，可以按照次格式渲染数据页中的系列和轴控件。

  var chartDataCache = getChartDataCache(chart_json.chartData, chart_json.rangeSplitArray, chartPro, chartType, chartStyle); // console.dir(chartDataCache)

  updateJson.chartDataCache = chartDataCache; //生成默认的系列顺序，默认根据series数组的位置，用户可以在界面上操作更改这个位置。

  var chartDataSeriesOrder = getChartDataSeriesOrder(chartDataCache.series[0].length);
  updateJson.chartDataSeriesOrder = chartDataSeriesOrder; //根据图表的默认设置、图表数据、图表系列顺序，等到一个完整的图表配置串。

  var defaultOption = addDataToOption(defaultOptionIni, chartDataCache, chartDataSeriesOrder, chartPro, chartType, chartStyle, chart_json.chartData);
  updateJson.defaultOption = defaultOption;
  src_store.dispatch('chartSetting/updateChartItemChartlist', updateJson);
  renderChart({
    chartOptions: updateJson,
    chart_id: chart_id
  });
}; // 行/列标题操作以及转置操作


const checkCurrentBoxChange = function (chart_id, rangeRowCheck, rangeColCheck, rangeConfigCheck) {
  var state = src_store.state;
  var updateJson = deepCopy(state.chartSetting.chartLists[state.chartSetting.currentChartIndex].chartOptions); //原来的json

  updateJson.chart_id = chart_id;
  updateJson.rangeRowCheck = rangeRowCheck;
  updateJson.rangeColCheck = rangeColCheck;
  updateJson.rangeConfigCheck = rangeConfigCheck;
  updateJson.chartData = updateJson.chartData || [];
  updateJson.rangeSplitArray = getRangeSplitArray(updateJson.chartData, updateJson.rangeArray, rangeColCheck, rangeRowCheck);
  var chartAllTypeArray = updateJson.chartAllType.split("|");
  var chartPro = chartAllTypeArray[0],
      chartType = chartAllTypeArray[1],
      chartStyle = chartAllTypeArray[2];
  updateJson.chartDataCache = getChartDataCache(updateJson.chartData, updateJson.rangeSplitArray, chartPro, chartType, chartStyle, rangeConfigCheck); //处理转置

  updateJson.chartDataSeriesOrder = getChartDataSeriesOrder(updateJson.chartDataCache.series[0].length);
  updateJson.defaultOption = addDataToOption(updateJson.defaultOption, updateJson.chartDataCache, updateJson.chartDataSeriesOrder, chartPro, chartType, chartStyle);
  src_store.dispatch('chartSetting/updateChartItemChartlist', updateJson);
  renderChart({
    chartOptions: updateJson,
    chart_id: chart_id
  });
}; //系列数据顺序变化


const changeSeriesOrder = function (chart_json, chartDataSeriesOrder) {
  if (chart_json == null) {
    return;
  }

  var chart_id = chart_json.chart_id;
  var chartAllTypeArray = chart_json.chartAllType.split("|");
  var chartPro = chartAllTypeArray[0],
      chartType = chartAllTypeArray[1],
      chartStyle = chartAllTypeArray[2];
  chart_json.defaultOption = addDataToOption(chart_json.defaultOption, chart_json.chartDataCache, chartDataSeriesOrder, chartPro, chartType, chartStyle);
  src_store.dispatch('chartSetting/updateChartItemChartlist', chart_json);
  renderChart({
    chartOptions: chart_json,
    chart_id: chart_id
  });
};

function changeChartRange(chart_id, chartData, rangeArray, rangeTxt) {
  let index = src_store.state.chartSetting.chartLists.findIndex(item => item.chart_id == chart_id);
  src_store.state.chartSetting.currentChartIndex = index;
  var chart_json = src_store.state.chartSetting.chartLists[index].chartOptions;
  var chartAllType = chart_json.chartAllType;
  var chartAllTypeArray = chartAllType.split("|");
  var chartPro = chartAllTypeArray[0],
      chartType = chartAllTypeArray[1],
      chartStyle = chartAllTypeArray[2]; //数据的sheet索引

  chart_json.rangeArray = rangeArray;
  chart_json.chartData = chartData;
  chart_json.rangeTxt = rangeTxt; //根据数据集得到按钮状态，rangeColCheck表示首列是否标题，rangeRowCheck表示首行是否标题，rangeConfigCheck表示是否转置。

  var rowColCheck = getRowColCheck(chartData);
  var rangeRowCheck = rowColCheck[0],
      rangeColCheck = rowColCheck[1],
      rangeConfigCheck = false; // 如果列转置标识,再转为列转置
  // rangeColCheck.exits = colExits

  chart_json.rangeColCheck = rangeColCheck;
  chart_json.rangeRowCheck = rangeRowCheck;
  chart_json.rangeConfigCheck = rangeConfigCheck; //按照数据范围文字得到具体数据范围

  var rangeSplitArray = getRangeSplitArray(chartData, rangeArray, rangeColCheck, rangeRowCheck);
  chart_json.rangeSplitArray = rangeSplitArray; //根据数据集、功能按钮状态、图表类型，得到图表可操作的数据格式，例如：{ "x":[], "y":[], series:[] }，可以按照次格式渲染数据页中的系列和轴控件。

  var chartDataCache = getChartDataCache(chartData, rangeSplitArray, chartPro, chartType, chartStyle);
  chart_json.chartDataCache = chartDataCache; //生成默认的系列顺序，默认根据series数组的位置，用户可以在界面上操作更改这个位置。

  var chartDataSeriesOrder = getChartDataSeriesOrder(chartDataCache.series[0].length);
  chart_json.chartDataSeriesOrder = chartDataSeriesOrder;
  var defaultOptionIni = chart_json.defaultOption; //根据图表的默认设置、图表数据、图表系列顺序，等到一个完整的图表配置串。

  var defaultOption = addDataToOption(defaultOptionIni, chartDataCache, chartDataSeriesOrder, chartPro, chartType, chartStyle, true, chartData);
  chart_json.defaultOption = defaultOption;
  src_store.dispatch('chartSetting/updateChartItemChartlist', chart_json);
  renderChart({
    chartOptions: chart_json,
    chart_id: chart_id
  });
}

function changeChartCellData(chart_id, chartData) {
  let index = src_store.state.chartSetting.chartLists.findIndex(item => item.chart_id == chart_id);
  src_store.state.chartSetting.currentChartIndex = index;
  var chart_json = src_store.state.chartSetting.chartLists[index].chartOptions;
  var chartAllType = chart_json.chartAllType;
  var chartAllTypeArray = chartAllType.split("|");
  var chartPro = chartAllTypeArray[0],
      chartType = chartAllTypeArray[1],
      chartStyle = chartAllTypeArray[2]; //数据的sheet索引

  chart_json.chartData = chartData;
  var rangeRowCheck = chart_json.rangeRowCheck;
  var rangeColCheck = chart_json.rangeColCheck; //按照数据范围文字得到具体数据范围

  var rangeSplitArray = getRangeSplitArray(chartData, chart_json.rangeArray, rangeColCheck, rangeRowCheck);
  chart_json.rangeSplitArray = rangeSplitArray; //根据数据集、功能按钮状态、图表类型，得到图表可操作的数据格式，例如：{ "x":[], "y":[], series:[] }，可以按照次格式渲染数据页中的系列和轴控件。

  var chartDataCache = getChartDataCache(chartData, rangeSplitArray, chartPro, chartType, chartStyle);
  chart_json.chartDataCache = chartDataCache; //��成默认的系列顺序，默认根据series数组的位置，用户可以在界面上操作更改这个位置。

  var chartDataSeriesOrder = getChartDataSeriesOrder(chartDataCache.series[0].length);
  chart_json.chartDataSeriesOrder = chartDataSeriesOrder;
  var defaultOptionIni = chart_json.defaultOption; //根据图表的默认设置、图表数据、图表系列顺序，等到一个完整的图表配置串。

  var defaultOption = addDataToOption(defaultOptionIni, chartDataCache, chartDataSeriesOrder, chartPro, chartType, chartStyle, true, chartData);
  chart_json.defaultOption = defaultOption;
  src_store.dispatch('chartSetting/updateChartItemChartlist', chart_json);
  renderChart({
    chartOptions: chart_json,
    chart_id: chart_id
  });
}


// EXTERNAL MODULE: ./node_modules/color-name/index.js
var color_name = __webpack_require__("4f4d");

// CONCATENATED MODULE: ./src/data/cn.js
let obj = {
  'chartSetting': {
    data: '数据',
    chartType: '图表类型',
    transpose: '转置(切换行/列)',
    row1: '设选中项第',
    row2: '行为标题',
    column: '设选中项第',
    column: '列为标题',
    style: '样式',
    echarts: {
      line: {
        default: '默认折线图',
        smooth: '平滑折线图',
        label: '带标签的折线图'
      },
      area: {
        default: '默认面积图',
        stack: '堆叠面积图'
      },
      column: {
        default: '默认柱状图',
        stack: '堆叠柱状图'
      },
      bar: {
        default: '默认条形图',
        stack: '堆叠条形图'
      },
      pie: {
        default: '默认饼图',
        split: '分离型饼图',
        ring: '环形饼图'
      }
    }
  },
  'chartTitle': {
    modalName: '标题设置',
    show: '显示主标题',
    text: '标题内容',
    placeholder: '请输入标题内容',
    label: '文本样式',
    position: '标题位置',
    offsetL: '滑动修改左边距偏移量',
    offsetT: '滑动修改上边距偏移量'
  },
  'chartSubTitle': {
    modalName: '副标题设置',
    placeholder: '请输入标题内容',
    text: '副标题内容',
    label: '文本样式',
    gap: '主副标题间距',
    content: '滑动修改间距'
  },
  'chartAxis': {
    modalName: 'XY轴设置',
    select: '选择坐标轴',
    text: '标题内容',
    placeholder: '请输入标题内容',
    label: '文本样式',
    align: '文本对齐方式',
    reverse: '反向坐标轴',
    content: '滑动修改坐标轴间隔个数',
    intenval: '坐标轴间隔个数',
    content1: '滑动修改标题与轴线距离',
    gap: '标题与轴线距离',
    content2: '滑动修改倾斜角度',
    title: '倾斜轴标题',
    showLine: '显示刻度线',
    content3: '滑动修改刻度线宽度',
    lineWidth: '刻度线宽度',
    lineColor: '刻度线颜色',
    showTick: '显示刻度',
    position: '刻度位置',
    content4: '滑动修改刻度长度',
    tickLength: '刻度长度',
    content5: '滑动修改刻度宽度',
    tickWidth: '刻度宽度',
    tickColor: '刻度颜色',
    showLabel: '显示刻度标签',
    content6: '滑动修改标签倾斜角度',
    rotate: '倾斜标签',
    content7: '请输入刻度最小值',
    min: '刻度最小值',
    content8: '请输入刻度最大值且最大值不能小于最小值',
    max: '刻度最大值',
    ratio: '数值缩放比例',
    digit: '小数位数',
    content9: '请输入标签前缀',
    prefix: '标签前缀',
    content10: '请输入标签后缀',
    suffix: '标签后缀',
    showNet: '显示网格线',
    content11: '滑动修改网格线宽度',
    netWidth: '网格线宽度',
    netType: '网格线类型',
    netColor: '网格线颜色',
    netInterval: '网格线分割间隔数',
    content12: '滑动修改间隔数',
    showArea: '显示网格区域',
    areaInterval: '网格区域分割间隔数',
    area1: '网格区域第一颜色',
    area2: '网格区域第二颜色'
  },
  'chartLegend': {
    modalName: '图例设置',
    show: '显示图例',
    label: '图例样式',
    position: '图例位置',
    contentH: '滑动修改水平偏移量',
    contentV: '滑动修改垂直偏移量',
    direction: '图例朝向',
    width: '图例宽度',
    height: '图例高度',
    contentWidth: '滑动修改图例宽度',
    contentHeight: '滑动修改图例高度',
    gap: '图例间距',
    contentGap: '滑动修改图例间距'
  },
  'chartCursor': {
    modalName: '鼠标提示',
    show: '显示提示框',
    label: '鼠标提示样式',
    background: '背景颜色',
    trigger: '提示触发条件',
    type: '提示触发类型',
    lineType: '指示器线类型',
    lineWidth: '指示器线宽',
    color: '线条颜色',
    axisType: '指示器类型',
    position: '提示框浮层位置',
    suffix: '鼠标提示后缀',
    placeholder: '后缀',
    ratio: '数值比例',
    digit: '小数位数'
  }
};
/* harmony default export */ var cn = (obj);
// CONCATENATED MODULE: ./src/data/en.js
let en_obj = {
  'chartSetting': {
    data: 'data',
    chartType: 'chartType',
    transpose: 'transpose(switch row/column)',
    row1: 'set number',
    row2: 'row as title',
    column1: 'set number',
    column2: 'column as title',
    style: 'style',
    echarts: {
      line: {
        default: 'Basic Line',
        smooth: 'Smoothed Line',
        label: 'Line With Label'
      },
      area: {
        default: 'Basic Area',
        stack: 'Stacked Area'
      },
      column: {
        default: 'Basic Column',
        stack: 'Stacked Column'
      },
      bar: {
        default: 'Basic Bar',
        stack: 'Stacked Bar'
      },
      pie: {
        default: 'Basic Pie',
        split: 'Split Pie',
        ring: 'Doughnut Pie'
      }
    }
  },
  'chartTitle': {
    modalName: 'Title Setting',
    show: 'show title',
    text: 'content',
    placeholder: 'enter the title',
    label: 'label style',
    position: 'position',
    offsetL: 'slide to change offsetLeft',
    offsetT: 'slide to change offsetTop'
  },
  'chartSubTitle': {
    modalName: 'SubTitle Setting',
    placeholder: 'enter the title',
    text: 'content',
    label: 'label style',
    gap: 'The gap between the main title and subtitle',
    content: 'silde to change gap'
  },
  'chartAxis': {
    modalName: 'XY-Axis Setting',
    select: 'select axis',
    text: 'title content',
    placeholder: 'enter title content',
    label: 'label style',
    align: 'text align',
    reverse: 'invert the axis',
    content: 'slide to change interval',
    intenval: 'interval for axis',
    content1: 'slide to change gap',
    gap: 'Gap between name and line',
    content2: 'slide to change rotate',
    title: 'Rotation of axis name',
    showLine: 'show axisLine',
    content3: 'slide to change lineWidth',
    lineWidth: 'lineWidth',
    lineColor: 'lineColor',
    showTick: 'showTick',
    position: 'tick position',
    content4: 'slide to change tickLength',
    tickLength: 'tickLength',
    content5: 'slide to change tickWidth',
    tickWidth: 'tickWidth',
    tickColor: 'tickColor',
    showLabel: 'show axisLabel',
    content6: 'slide to change rotate',
    rotate: 'Rotation of axisLabel',
    content7: 'enter minValue',
    min: 'minValue',
    content8: 'enter maxValue',
    max: 'maxValue',
    ratio: 'scale value',
    digit: 'decimal digits',
    content9: 'enter prefix',
    prefix: 'prefix',
    content10: 'enter suffix',
    suffix: 'suffix',
    showNet: 'show splitLine',
    content11: 'slide to change lineWidth',
    netWidth: 'splitLine line width',
    netType: 'splitLine type',
    netColor: 'splitLine color',
    netInterval: 'Interval of Axis splitLine',
    content12: 'slide to change interval',
    showArea: 'show splitArea',
    areaInterval: 'Interval of Axis splitArea',
    area1: 'areaOne',
    area2: 'areaTwo'
  },
  'chartLegend': {
    modalName: 'Legend Setting',
    show: 'show legend',
    label: 'label style',
    position: 'position',
    contentH: 'slide to change ox',
    contentV: 'slide to change oy',
    direction: 'direction',
    width: 'itenWidth',
    height: 'itemHeight',
    contentWidth: 'slide to change height',
    contentHeight: 'slide to change width',
    gap: 'The distance between each legend',
    contentGap: 'slide to change thes gap'
  },
  'chartCursor': {
    modalName: 'Tooltip Setting',
    show: 'show tooltip',
    label: 'label style',
    background: 'backgroundColor',
    trigger: 'Conditions to trigger',
    type: 'Type of triggering',
    lineType: 'line type',
    lineWidth: 'line width',
    color: 'line color',
    axisType: 'Indicator type',
    position: 'position',
    suffix: 'suffix of tooltip',
    placeholder: 'suffix',
    ratio: 'scale value',
    digit: 'decimal digits'
  }
};
/* harmony default export */ var en = (en_obj);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/ChartMix/ChartList.vue?vue&type=script&lang=js&






 //图表选择组件

/* harmony default export */ var ChartListvue_type_script_lang_js_ = ({
  name: "ChartList",
  props: {
    showList: {
      type: Boolean,
      default: false
    },
    zindex: {
      type: Number,
      default: 10
    },
    currentChartType: {
      type: String,
      default: "echarts|line|default"
    },
    lang: {
      type: String,
      default: "cn"
    }
  },
  data: function () {
    return {
      config: [{
        type: "echarts",
        name: "echarts",
        data: []
      }],
      currentConfig: [],
      currentPro: null,
      chartAllType: "",
      list_scroll_direction: -1000,
      // echarts中文
      echartsCN: [{
        type: "line",
        name: "折线图",
        icon: "icon-tubiaozhexiantu",
        data: [{
          type: "echarts|line|default",
          name: "折线图",
          img: "data:image/png;base64,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"
        }, {
          type: "echarts|line|smooth",
          name: "平滑折线图",
          img: "data:image/png;base64,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"
        }, {
          type: "echarts|line|label",
          name: "带标签的折线图",
          img: "data:image/png;base64,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"
        }]
      }, {
        type: "area",
        name: "面积图",
        icon: "icon-fsux_tubiao_duijimianjitu",
        data: [{
          type: "echarts|area|default",
          name: "面积图",
          img: "data:image/png;base64,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"
        }, {
          type: "echarts|area|stack",
          name: "堆叠面积图",
          img: "data:image/png;base64,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"
        }]
      }, {
        type: "column",
        name: "柱状图",
        icon: "icon-chart",
        data: [{
          type: "echarts|column|default",
          name: "柱状图",
          img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABQCAYAAADvCdDvAAADHklEQVR4Xu2cvW4TQRSF71b8NSkjpSBSqCiCIuyWBvECKA+ABAiESEUDBVRByRtQ8AhgoMcNtFmECEqLSFoo6IhA8iJhOdjLembueMae3f1cX1/PnnPPzJ2zM86ET1IIZEmNhsEIhCRWBBACIYkhkNhwUAiEJIZAYsNBIXUgJM/zIrFxLnQ4xzvbMjg6NI7h7LPnzmPsdDpThYBCHGB8393IReSyKfTK3scgWAZJ4vBMtQ6BkMTogxAISQyBiMNZv3p905S+yLIfn/u9/ngMColIyKVrm8YOshD5sP/2ZQdCIpIwnhpC5gS0689AiCtSc4qDkDkB7foztSQktnXy63VPiu/fjBieun3XFWNV3M1Hu8b48yvL8uT+jYmYxlsn77obe5nIRCdTRimUFVHOW0uFqErOIxhCpoO2EC8LQiDkBAGmrIpiQCEoBIWY1noUgkJQCArx2A+ILOYoKVOWcsqKbZ0c7z6VweFXYwlpTnFoahHrhLZXUy9MWWW0WvnGkDVEuYaoNOYRDCEQwj5k1n3I1tLaC6P4iuLLp37voVagmIueXdbW0pqFjyLf7/e6EKJFAEJUiCX7ggqFqHicLdily4KQ2TBWfRtClG1vCl6WTSGrK8vyuHRc5+fOthSWm062vL7HgDR5k7tBFUshQfJ6Hra2EVJlyVTppFGLOoSoVo5/wUGAK/7fhwTJi0KqWbVOARDiKYc5bgxRiCdHQYBDIZ7oo5C/CNBlTakf69rEos6iPo4A+5BSPfi+U/dRnvPGcGSd/H7zSga2m0637qgXF5djQLYHrLJOQuRN2jqJdWGeLktpLo7CIWSIhAsONkUH6bJcBuJzFxCFoJATBHwq2aUwffI6L+pMWfr/OoGQNlonLlJlDRnOJygEhVR3BigEhQzd0zYpZGSduPzpysG9B0br5NyZ03LxwupETAiLA+vE186OVcmx8qZsv7t0WdbuIhZwsfJCCO9DnN+HoJAamotMWYm1vRACIe3bh2jcXhSCQlCIaSuOQlBI+xQS+waV+txQw76Q3A2qhuEb9HEWcnIx6BM0LBmEJEboHyG8cJwchLkkAAAAAElFTkSuQmCC"
        }, {
          type: "echarts|column|stack",
          name: "堆叠柱状图",
          img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABQCAYAAADvCdDvAAADWUlEQVR4Xu1dPW8TQRCdCwXhHwQFxemoCIqwW9LEvyBpkSgQNPwAEB8FBIUfkAJBE4kW/4K4Ca0vikg6qhgB4h8QCZFFIpzkwxvr+Xafszm/tJ4b7b03b2Zn5+6SWY3+ltrreWZ2K+SWnHP5QbfTGvTB8utbZxay+NSuZQHH8itCgAiSQgCQUBNWJLP8SiEAs1IIABJqwopkll8pBGBWCgFAQk1YkczyCyskz3OHgpCS3Yutbet/+xG0pMX5OXv28G7JR2y/zWbzzHZDfch/9CllBcVz+WJWamH5hVNWRIwm6ooFHMtvMoTcbK+/MWfXw9hynz91Ow8mceZUe0KWVtd6WZY1QwhxZnsHOx9KPljAsfwmoxARcnYonssuS4SIEDg7TuW2VwqRQqSQUQhIIVKIFCKFlBHwbRbUhwA60S4LAMlnok69InC+y1TUxyzq7AHVy61tOwocJDXm5+w5eZBUwHa8uWEnX/pBIZktNOzK46d/fSQ3oLpoCvnYWs4t9IlIs3ylt196IlJFHYhxX1EXIQhwEzx+FyEiBEAgoolqyJi7rIjYe12JEBECx1jSRf3G6tr9zLKr8N14DJ2574fdzrvBn6SQigphDfdFiAiBRZ50ypJCTnlMpg8RISIETy3T2KlLIVKIFDIKASkkEYUUA6rYbw4V5P/c3DAXOPCZWWjY7L+BT+GXtd4YA6qZxqLNPnoSNqBiKWS3tdzLzIKefjezvdu9/Yk8/V77ba8ISaxTFyEiBN+9eb4GpJSFwacaguFUtvId1illKWXBsTSVp70shdxbab//ZZeuweh7DC/b769vd3fuDP6kGoIhOlRDWESLEBHiR+CidepSCBDJk9xliRARAiBwauJiPGytlJXI8XtBuwgRIXAK8B2/17aGFAOqGIOZwTeHCrSPX7+yk/7ROOAP2foGVDS/Ed6gijKgYjVErEhm+WXh4IvIkV8DYi2EBRzLLwsHEYIlyaEjGRFSETgpBADO1xCxgGP5lUIAoqdq21vgwYoMViSz/LJwUFGvqDwRUhE4KQQATkU94mkvS6qsSGb5ZeGgGgIo2rd7EyEVgZNCAOBUQ1RDor/moJQFKG+qOnX2J/4wvOtrldwn/uoLdfidncu/qwhfdn09iJDEuP0DnXmvq+qIgDYAAAAASUVORK5CYII="
        }]
      }, {
        type: "bar",
        name: "条形图",
        icon: "icon-fsux_tubiao_duijizhuzhuangtu1",
        data: [{
          type: "echarts|bar|default",
          name: "条形图",
          img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABQCAYAAADvCdDvAAADzUlEQVR4Xu2cz2sTQRTHN4darX+CIIIXFawICSIeYqgiotFLUfCkKDaI9CAIEZRUKlgoViiCRRspqEWa6sHgSUv8gYgSEJF4UvGgF715EFrFkW0FUXd3Om/ey+4s3153vjOz38+bydt5TDMe/hLlQCZRs8FkPABJWBAACIAkzIGETQcrBEAS5kDCpoMV4gKQZrOpstmsMSyqzvckDm0cY+reNdD0F5M31ezIcME0eDpPnGxQdP44cWjjGNN/12Vj442wgA8E8ji3UZnCQPvFO9B1+aoHIIv3S7wlgIhbbDYAgJj5Jd4aQMQtNhsAQMz8Em9tDOTUoZL69O7DI9OZrVi9Kk/R+ePYaEuFXP77vfpZ0/l27CpWKDp/HBvt8rHxilGWtWF7r1Npb/V8OTSNjILkzIchgOjXmhTMwA9DAAEQvQMRLbBlWdnHLwYQfk+tekw9kBtTd9TQlUnj097y0QMNis6nYaOdGCqHnp6mIsuiZhBUna5GoFs+1HGpOsn5BmZZ1IlSdZIvmIoV4lqBKqrgkwogrhWoos6GAES34Qs8BxABU226BBAb9wS0ACJgqk2XAGLjnoA29UBcK1Ct3Lkjf3fmqXGBak/PlgpF58dUlFZlvNbr+9O1sNiL+l5LxfG7wKKz61KpqVcPbu8HEDsb+dQAwuclS08AwmIjXycAwuclS08AwmIjXyfcQFwrUFGLW1SdTy5Kq1Tmc2um9oYty6LWNag61EP+oEOBinBTTDKAcIOKcFPMB7J0+GIjVygYX/vTwcQNKuJPeeeRPm9TXwlAiP6xywCE3VK7DgHEzj92NYCwW2rXIYDY+ceubisQ1wpUUbevNs99ba378e1LEBGbW1BdlcFKrlhsT5bl2v2QqPD/6Xn7wqp3STxZSH3FEEDYd2u7DgHEzj92NYCwW2rXIYDY+ceuTgWQNBWoOmYzrZdPaoFprzNZFnWiVJ3uSFq3bKjjUnWS80WByoUC1fNrVTV3abSoi8x/ny853l+n6BYKPhfquZ5t7F++Ue/gzAqJ4waV1NkQgJguq9/tAWTBiMSUcAEEQGL5X8G6DA0rxIUsCz/q+h9CqQwtcIWcPnxMfXz7/qF+Wn+3yHWv3dr9rDFgqptPeyuDAxIFn1RkWdQCVXb9Gq86cq6t3xK6PRlAAES7QbTtjiFWiJbFfAMACfFJ6odZhwVAAEQXI/8/jyNa4xiTtGVVr99SoxPTxqe9Z/oP1nv37kaWpYlH4y2LGjlUnS5qdOuNOi5VJzlfUjTrDMJzugMAQvdORAkgIrbSOwUQunciyl+nJgacKCJJ0AAAAABJRU5ErkJggg=="
        }, {
          type: "echarts|bar|stack",
          name: "堆叠条形图",
          img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABQCAYAAADvCdDvAAACiElEQVR4Xu2cP0oDURCHExBscwe9gBAP4AG8gAcQLGwEJZV/OkGwECtBO1OlECwNJNgpKVQ8QHIMJbAi24S4vsy44+wsfKln5738vpl5uzObNBt8QinQDLUbNtMASLAgAAhAgikQbDtkCECCKRBsO2RIHYCMRqOs3W6bw8JvTj+lQ6Hoz93b7OP8bMM6eJb39gd18js5OBycXnXNdehsb/3qtxDI4/paZg2jjv52Wyvu2wZIQnKAuMdjekGAAKS4l8UZkkcGGUKGkCGpGCBDyBAyhAwJlgUAAUhSAZ7UeVKvT4qEucui25sHTZhuL3OLxXOLMnmunocAJBiQCCVrp7UqDsLUwEfspMCwCr9h77KqOFDLwLO6FiBWShr5AYiRkFZuAGKlpJEfgBgJaeUGIFZKGvkBiJGQVm4AYqWkkR+AGAlp5QYgVkoa+QGIkZBWbgBipaSRH4AYCWnlJuzPEej2ziBmHhJsHgKQYEAiDKg0NbmK2bdkf0vT6fhleDeet1WPcOv29nvUYVaWNU7e+r1jgEjC18EGIA4ia5YAiEYtB1uAOIisWQIgGrUcbAHiILJmCYBo1HKwBYiDyJolAKJRy8EWIA4ia5YAiEYtB1uAOIisWcIMCN3eXPayP0cw6/YyDwk2DwFIMCBPN9fZ5+XFpqZeSmwnnaN777/Mm9/Xe783lOz126aKwHR96yTCIOn1oSf+c0+ASEO3hB1AZsQjQxafTZSsRLZRskqUIumllCxK1o9YCfMaEGcIZ8iP6KRkUbIoWakDngwhQ8gQMkT4EMBd1h/vsuj2LhZOGIOFZurnkCpaBv/1BevmV9yKLvPFuFauAEDkWrlYAsRFZvkiAJFr5WL5BeJU77Wa075tAAAAAElFTkSuQmCC"
        }]
      }, {
        type: "pie",
        name: "饼 图",
        icon: "icon-fsux_tubiao_nandingmeiguitu",
        data: [{
          type: "echarts|pie|default",
          name: "饼 图",
          img: "data:image/png;base64,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"
        }, {
          type: "echarts|pie|split",
          name: "分离型饼图",
          img: "data:image/png;base64,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"
        }, {
          type: "echarts|pie|ring",
          name: "环形饼图",
          img: "data:image/png;base64,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"
        }]
      }],
      // echarts英文
      echartsEN: [{
        type: "line",
        name: "Line Chart",
        icon: "icon-tubiaozhexiantu",
        data: [{
          type: "echarts|line|default",
          name: "Basic Line Chart",
          img: "data:image/png;base64,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"
        }, {
          type: "echarts|line|smooth",
          name: "Smoothed Line Chart",
          img: "data:image/png;base64,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"
        }, {
          type: "echarts|line|label",
          name: "Line with labels",
          img: "data:image/png;base64,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"
        }]
      }, {
        type: "area",
        name: "Area Chart",
        icon: "icon-fsux_tubiao_duijimianjitu",
        data: [{
          type: "echarts|area|default",
          name: "Basic Area Chart",
          img: "data:image/png;base64,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"
        }, {
          type: "echarts|area|stack",
          name: "Stacked Area Chart",
          img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABQCAYAAADvCdDvAAAVyklEQVR4Xu1dB3BV55X+zm2vFz0VVJ6EwEiIXkw1zThZx3GLg20wdhwLYq+TiRMn2d3EycZrEscZZxOXJJtkh00Mdsa9YnvtGFNFMDJgsBBNBVEECElP/RW9ds/O/4QwRSA9eJKeN/wzmpHm/vec8//fPeWec/4rwuWRVDtASSXNZWFwGZAkewguA3IZkCTbgSQTJyk0pHjFSzMATCaWXl2xdGFjku3RgIoz6ID88PV3lgF4cO6I4dra/dV+TzAw969fv2PfgO5CEjEbdECWrHxJf+aeRTE5th46gme3bP/fP955641JtEcDKkqPgGzfvp0HQoryplaU1HnwzD2LYuwEIM9v2Y7rcjORYTIMhAiDwmPKlCnnVYRB0ZDiFS/8E0F6GoTRZk2FWdOis0YMow2VB7jNH5DFLjGwMippP/rr1xc0DMquDRLTAQWkeMXzBUTykwC6TBLzCSJ5D4MNYHYwoY6AFACjAFihsxeS9KgabH1q+f33hwdpjwaU7YAA8s+vvOII+6OPgPEAiFQd7JUglQPc1ONqGRIIwxg8gkAqgGod/C/PFi9+e0B3ZxCY9Ssgy5Ytkw7nF90P8M8BSgMjBEIlgw4TuFc/xUwGAhcxOJeIhBlbC9YfWLnkzv2DsFcDwrLfAFny3CvzWI/+gUBjGGBiHAZQAULcpocAO8DjGCTMWYQZf9As0iPLFy5sG5BdGkAmCQdk6TPPD2dJegqgm7vWwU0MKifAm4B15TBQRICJWW8C6Kf5hyuWL1u2TE8A7aQgkTBAlv5llY3lwCMMfIcADWAfQOIF70SCVyqisBEMHk4gmcF7GNL9zxYv2pxgPoNC7pIBifmJYUX3QcejIKQLkyKcMIhqwNxvTy5BMumIjiZQ1klNfC2kaN9//mu3Hh2UnUwQ00sC5Aw/wQwiHGWW9hFxMEHy9YEMpTJ4LAE25hjf/9RC1seX33+Tvw83J92UiwJE+Aldkp8g4JYuN4E2JuwiYFCcLDMTEQ1lcCGBhLk8Ckg/XFG86MWk2/FeBIordRLWGVvrm7CruQ06M2TxFmcwwKIqSVHpEvaxpTOIjrCwmsAQkwHz3UOQatCSCpdLTp0IP3Fo6MhvgPALAmUAiIJwEIyq2O9JNhiwEngcQKnCjzHRiqCmP/TinXd6kkzUc8Tp1WSd7idO3n2CIO1h6IFkXxyATIBHAWRh1juY5J8dHprx2w3z53epUBKOcwBZ8uyLtwk5KarvYEn6DUBfFX/3mu5IwsXFRCKSmEWIjBEAFAYqwfR9xRD9JByi25jkbc/ds3Brsoh/BiDfe/mtXXkup0hTWGoam1RvMAQGhwhUCeBQsgh9cXKQAdCFtrjF/U6TKXxNUUG0pKomKBOeePzWGx+9OLqJvesUIEIzJrpzVn73mjkWweI3qzdgT92JBmJpJ4jjTnckVsxEUiOnSVVmLJ01TblyqDsWnNz33Cv6M8V3xNL+gz3OC8gTH26I7D5WX0aEuv4UUtcZ9XsrcqM+n93mzj7uyMlq6U9+grZJU2csvWpaWjcg9z73Cq8ovkPqb759od+DyUrJFS9ZBz3Nvo5gsKQvRC5lTsuOXRPdDlvmLdfOV5a/+EY4lJmxPSXP3XNa/lIYnXaviMJSzKZZVxdeoWyqqqFQNLr3d3d8dUyCyF8SmR6dOuv0UH9rhpA61OHTmrfvnPveyt8bxd87yvfhB48+GTTlZlWm5OfWG+32zkta3QVuZmYDE7klRiEIsg6a92zxon5/AHtbT49h75KVL73T242Jul720ps3lLy+gixmE15c9T5+/8wL8Ae6cFDNJq9tSHq9Iye7we7ObpZlqdcaSrxyMfMIIioCY++K4kVjQZRwHvHINKiAHCrdXuQ/WjciGo3y7GmTQ0JDWtrbDxOQCoaLJDolH8lSxJLqarRlZTa4hubWG2yWUDwLPe/crrB4fldKn7+1csni/04I3Ysk0iMgP3v9nX5/SqrK9qB8y3aIPR/mzopFO3ZrLMCLjagehdcXQLvXhzavH9HomQkBR5oLmXnu2I9rSBpERfFihy8cQWNnEJosoXjkMKjSxdPqiwxxp07622TV7d6XV1e2ZzzH3jfxMQF9cOLsYJG2IWSA2Smyid2LlxQlZElzNdpzshpShuY1aCZD3GE6g2YSOBXgp1YUL/5BXza2P+YMuMlqrKjOPrJt52Rhq4l5O0D1F7EwjYF0AjIYyCCCaIToHmx02FutQzIaUtzZDbasjL5loJlsDH0eiKKyLBX95e6F1Rch1yXfMqCAeKpqMo9s3XFlLF0O7ATo2CWvACLRTE5AF0nPDBA5TqcpaWrQlp7aYM/JbkjJczcqBu1UHsvX3GK2uFJO1U2YMZ4Iecx4b+WSO25IgGxxkxgwQJoPHU07tLl0usguAShHV9NDwgeDjdRVucwAUzoIyikmRLrJ4WixDklvpPaO7LQUh3zocK028po5pWS3tTGgEXBNLOfF+rUrl9z5YcIF7IXggADSduyEs2bj5pnMLLOOCqJY2n4Ahk7MkiumPURDiMgqmKqKgq/degMe/MbXsGt/Jb75k8dCRV+5frW4xozhRBgtytBes1T06sKFA1pe6HdAOuobbdXrNs1iXVcYfJCY9gwAEj2yYLBJaI7L6Sz8n1//h2FEfl5s3u3f+tcwFRaUWF3OALqa9OYBsAD84Irixb8bSHn7FRCvp9lata7kKg5HNAbXElPZQC7uArzcV02ZMP57990tvb16A95dsxGdRC3D51213WizBpkxhAhTwegIatGhL9x1V7/n17pl7TdAAq3t5orV62bp4YgB4Dow7ejqoU6a4Xa5HDlerz8YIc7QQxFNVtVQ/qxp20SCszsMZsYfVy6549sDJXW/ANLZ0WGs/GD9rEgwJExEoyjFS8kFxhn7S6qsGW32OYGWFiEvZ4waud89aXwDE88VtTnSpfErli7cmwhQSqZMihUA527f+VpP9BIOSCgQVCve/3B2ONBpYbBQ9S3E1G/9WYnYJEHD5EqxmFNTpjZVH7SKZ8eSllpf+MV5nSRLQxkoWVl8h/ArlzS2XPfFXdaRRbkky2rH3j01M/+2ZvzZBBMKiACj8oO1M0M+vx1AOzM+oq7Guc/FSCsclml0OIcfL9vt1MNhyWC3BkbdcK0qSZKig79yKd33QjNS5859bvQTTwstxO7vfae1ZfPm+87WlITlsqLhCDau+htaPU0wqCpG5LuhyElRhIvrYaDsLEQlGTWf7ISvpQ0ZRQVwXzkBVlXB3YVDY7m3uIfPh84/L4fD5cLYp7uCtrgAiTeXFQ1HpYrV66Z3traJLG2AwZsJ1G+1jLg3JI4bZINByZ81dawsK2pDZbW1tfaYZcxNX4LBZkU0En3ouXvv+lUc5FAyZcL3ddAjEpFDcThhLSrSJc0Q6Ni7u39Mls5MVavXT/V5mjMYHCTQZjA+l22c3RttTnPZ3JPHFxEIHQ2Nho5Gj7Ng/mzokUi0/pO9k//2p1/u6g2UkqmTvsDgPxGoQMxl4ARB3wuQA0yP94tT16M6HVj/90kd9Q3ZYIQZMZ/R0Zuwp183QpfujrSOyTAZLVs6QkfXGZ1J0SydXlSQ48pzZwtZg36/rBgNqfbMDPIcOBQ8VPrJl8o/fHVjT+vcNHXccB3K0wTc1HWdOwDaffppsbnbPj157VwKl+TUq9f9fWJ73Qk3mCMMKiWgNR4wxNxH5I5ZE2+8PiXjyzfgwG+f1FfurNyVLKAMnTlllNFmi6VbWCLF4nKmio7yfe+t4UBL68O71rz+WPd6y8aPt7Rp0n+A6IddOHAIoP0gPnL2nvQLIAdLSse21B7Nj7WSMpWiK8SNa+REg+afZppmz3zh5VjzrbeqCqXffcD/h05t20HFGJemxcW4j5MVo0EdNmvaOElWYtGJZrXYVLPR7PM0oeKD9cIMve9lWvxsW+UCHfT4yTZbAUYNEYujez1GmAkHpHbbzsLGygOF4NgZhK1gxP05jFmh9swbOpvH2DXFNP5Py2EfOw4Hnn4Cda++Ag6HUS8prZ9o9tqNmv2Yn+RBC51tWRnOrHGjC4Q/gSSR2eVII0mSajaVhluPHFVtejT0gO+4lh2NVZRPoMtPXNCHJhSQ47t2558o3z+WBRigHYT4+rbyo53WRf7GcW49lCpWIJnMfrCuGbOzQ+GW5mCopcVDTDkgmMX1CFG0SjLWbTHYj36qWj2DkXvJHDsyz5GdPUTIo5iMJoPNYld83mjzm2/L1aRBpLBv7WyqmhNsq+iL8iUMkPq9Fe5jO8snnnRWZWCq7YsAYo6NdfU2f2PhxIg3XxI1ERYtqqhi0aIq/mLdRCR91sDNsZpGbqxhmijWxNYG2f+pZqndpDlr62V1wMJqoRFDZ04dZTEZLJP2lVmOTZhsaXOlYmxpCX+0/3CoWu367MS4kO/IPYETuw29nBxLCCCi2nd4644rRXkO4D1gOtgXMGSArg00D50fbi00MWtCs4hwGDpVQOpDi6pOKhPy0HU0usvBMvNhxejZqllrSzXHiTD6PzUzhwK51wVbx9oDfvl4Th4+uGUxOBLl9jdXeTr8nWqjrDiYJErVw+3f9NVty4yGzns64JIB8Rw8nHHko21Tu6p9XAWmPqnm2LDXdXtn0ziXHrGd1KrmWLUwztD4FPAMF4hymZFNhJijDRCF9qjmY5s0R22NbGrvy0MSz5xh0U7bQn/j2G4TeyjTrX88fkrE685TJJNJCtYc7PRv2twWAcknJNUZliRF0/XIXYGG7ZPD3h7Po8QNyOltQJ7j9dj07mqwrsPlsCM3S5SuLzwsoU7MOLQPw5q7PlPCqgo5KxvkOKPc3RuZ81+PRsGtrdCbm4DOzyyXx2xDZYYb1enZCMmfVW4vhpEhHMaUo5UYWX8Uwl42Kxo224fgxKjRkIZkArIMKT1NHHdAeO36LnkYOBbW0SZ+YcaXHSpudBjOOV0265lnz5t/ueB7SHt9g6Nm3aardJ1lwYtYNCacfxigS7cEPCNmhL1XKKJcyxwh4ADED6FfMr4MdhAoF12BQKz7JMzQq1VTXalmr90ZZyCgsE7XBVvzrw62FhrAagCkl2o236ea1c9dkRbMM6bbZYtJIptNkW02OdrUFG5/932h/bHRRrK5RVKs4uRjbqTTc7+v/hOHCB1Pjrg1ROSyRLWv+sOSWboeUcGiVUe07Jy/wHR1qD37S4HmUVZEY9lMBgsA94EwIM6XAZl0ZEMSgQC5uhffTnKgTDXXbjA4ahskwwVPfU0Ie1MXdHrGufSoVWdwmcHi36zYfCFJPI+fDclqlc3TplhJUUgekqGRJJFvc2lbqLr61FqDRGqDpDkiRLJF1zuX+uu2FUYCsZakuAAZ/4UFt2WOG/2IeM/Qw2GNWTSx0ceEns+cjwgH7As7PWOz9FD3JrSDuRyEuF8UL8a09HQPMSyxQICRCxKncmOBAGplg2ebZqvdYrDXWXVdnR5qzzyoGNraJSV0u79x9BXRYKaYWyMbgxsNjo4WSTlvg4Oak6MZR480w2SSlZQURQ8E9PY3Vnk4EjkFXhSQ6hXNEYQkuln06wJNe22sB182pj6+a+0bvReovrDw3l1FI/JzQZJj9/4qamlrbwVjCxGdI5hDj2i3BzwjJ0R8Q08uOEgE8VGYPofCiQLgQnQYlE0QURrSuueFiSKmtAzKXLCA6t9exbq3Q452dKCZlMh6g6PjsGLsU9+wccJ4i5qRpkrp6ZqkqhQoL/d17ig74xMi4kEQ5qtVUiwpDjvGjMjXFc0Q2FNRXbP2lT+fv0AlNOPqq6at/O3PfxRrsL3/R4/yxzvKygA6J9l3c2fT8LnBtgJhY7sWyQfAXAXqOVUwEBvfKw+dzJDgZiBPsVqNhQ8vQ9r8a2LByuYZU3idZvfu1GzxZakVhczTp9kUp02R09JV1nVuf/0tj+73n+Mvm0mxjJs51fpfv/hJTNQH/v2x1k0f77jvbE055dTPBuRbP/5F+KPtZeJjAKdOUF0Z6ki/Odg0RtjYk36iHsx7icjX64Yk0QTFap9T8PAjjm5A/j5jCj9pzbmoL9dJNpvwJzbZlaJKZrMUOnKk07e+5Jz2VS9JhqIZMxy/f+zHsT1/4Ke/bN1U+sn5ARGTYiarYFgugWzlldW+1pb22AGWHD1ovt3vGXNFtDOWPtCZfUTiCz+c9Oe+e3wOGFYtI2NW1q23S/Vvv6n7/cFDbwcoUqMaTwUD8Tw/al6ewTBqpFnJEA6e0PH+B82RhsZzGr69rjRXwYjhsqppvZusbgGEpoCkh4RmmDkq3xJoKpgeah8udZ2jCMe6DpkPDvbBlng2rKe5zDAAlEngNlBX2eCIZLCsNTqHtUhqLFKMZ5gmTbCqw/KNIgyOtLREOt55r6mnb7QJTWkg5RzN6OZ1xntIyaRJo9U05+8Oszyhwh/2TI/48s0cNcZCFNARMPb3Kd0Rz0qSbK4w/jsUa/o2zZYTkOTTu+ovKKkIgS2zZ9qVXLeBJJn8W0rbg5XVPYbZb61/NxbN9TROAVI6duwQynfvG/6DfxNfbcOBX/8KIU+jwKKJCLsvOt2RZBveV3GCRNJGzZmzTzEPifbxNJCc4lQsc2bb5RSnyp1Bve31N88Ig7t59wmQjVMmfnvYt7/769ziJTF1Pfzn5Tjy6suQ3SLh+o872iKMj3wRHAz1reea3G4okyaANA3RikpEd5/byvz8Oy/3njopmTJhmjHHvXrKG2/HEk7bF9wU7jx2/ONu+/qPC0nXyqskk32DwZnfIcu9fuHZPGe23TA838TRKNreesfDXu8ZaPZJQwTTrQtufjhYW7tMOAw1xVkRbmkZlFNEyQp+hCXaarAN2aFZs0Og8zadkUGT7Dde7xIplvDRo0Hv2g1n9Br0GZDujSiZOnHAjkUn6+ZfSC4fJGW9wemuVEzpItvb09CysjTzF+enkCShY/WalkjdiVNv/5cB6SfUT5BmWmNIyW9Q1NiL8tnDPH+e05CXa4i2tUXaV717Kgy+DEg/AdJNtlyxuj7SbLk+ST7j03UiFLYvvC1dUhUKbN3W3rmvIhYGXwaknwER5MNM0maDPatMtWRGhZ06ObSCApPlqul2DoX0ttfe9HA4zJcBGQBAulk0k6xtMDhzDymmU2kY+1dudMlOpxqsqPD7S7d1XAZkAAHpZnVINlrXGxz5Ig0jO1MU283Xx9qevKve8bz21guio6bH0WOIcDnKSgyCsTSMZkv/WLW55dmzXYYRw03Rlpaw7HLeueKexb0XqC6HvYkB4mwqAUjyBmfWUO/Se0fluZykyrLvUFNzzdOLbunbCarLGpJ4YPaPmZzlX/z1SQ9eOy/m8J9as7G1/HjdfWdrSo8ma6D+B1Xil528FKvbvGiEhAeumRMT8qk1Ja3lx4/3DZDkXdbnW7Kur76m5MoSqQc9cZisz/eyk1v67u8ix+XUk3tJ/7+l+z+3oDzYi9TqlAAAAABJRU5ErkJggg=="
        }]
      }, {
        type: "column",
        name: "Column Chart",
        icon: "icon-chart",
        data: [{
          type: "echarts|column|default",
          name: "Basic Column Chart",
          img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABQCAYAAADvCdDvAAADHklEQVR4Xu2cvW4TQRSF71b8NSkjpSBSqCiCIuyWBvECKA+ABAiESEUDBVRByRtQ8AhgoMcNtFmECEqLSFoo6IhA8iJhOdjLembueMae3f1cX1/PnnPPzJ2zM86ET1IIZEmNhsEIhCRWBBACIYkhkNhwUAiEJIZAYsNBIXUgJM/zIrFxLnQ4xzvbMjg6NI7h7LPnzmPsdDpThYBCHGB8393IReSyKfTK3scgWAZJ4vBMtQ6BkMTogxAISQyBiMNZv3p905S+yLIfn/u9/ngMColIyKVrm8YOshD5sP/2ZQdCIpIwnhpC5gS0689AiCtSc4qDkDkB7foztSQktnXy63VPiu/fjBieun3XFWNV3M1Hu8b48yvL8uT+jYmYxlsn77obe5nIRCdTRimUFVHOW0uFqErOIxhCpoO2EC8LQiDkBAGmrIpiQCEoBIWY1noUgkJQCArx2A+ILOYoKVOWcsqKbZ0c7z6VweFXYwlpTnFoahHrhLZXUy9MWWW0WvnGkDVEuYaoNOYRDCEQwj5k1n3I1tLaC6P4iuLLp37voVagmIueXdbW0pqFjyLf7/e6EKJFAEJUiCX7ggqFqHicLdily4KQ2TBWfRtClG1vCl6WTSGrK8vyuHRc5+fOthSWm062vL7HgDR5k7tBFUshQfJ6Hra2EVJlyVTppFGLOoSoVo5/wUGAK/7fhwTJi0KqWbVOARDiKYc5bgxRiCdHQYBDIZ7oo5C/CNBlTakf69rEos6iPo4A+5BSPfi+U/dRnvPGcGSd/H7zSga2m0637qgXF5djQLYHrLJOQuRN2jqJdWGeLktpLo7CIWSIhAsONkUH6bJcBuJzFxCFoJATBHwq2aUwffI6L+pMWfr/OoGQNlonLlJlDRnOJygEhVR3BigEhQzd0zYpZGSduPzpysG9B0br5NyZ03LxwupETAiLA+vE186OVcmx8qZsv7t0WdbuIhZwsfJCCO9DnN+HoJAamotMWYm1vRACIe3bh2jcXhSCQlCIaSuOQlBI+xQS+waV+txQw76Q3A2qhuEb9HEWcnIx6BM0LBmEJEboHyG8cJwchLkkAAAAAElFTkSuQmCC"
        }, {
          type: "echarts|column|stack",
          name: "Stacked Column Chart",
          img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABQCAYAAADvCdDvAAADWUlEQVR4Xu1dPW8TQRCdCwXhHwQFxemoCIqwW9LEvyBpkSgQNPwAEB8FBIUfkAJBE4kW/4K4Ca0vikg6qhgB4h8QCZFFIpzkwxvr+Xafszm/tJ4b7b03b2Zn5+6SWY3+ltrreWZ2K+SWnHP5QbfTGvTB8utbZxay+NSuZQHH8itCgAiSQgCQUBNWJLP8SiEAs1IIABJqwopkll8pBGBWCgFAQk1YkczyCyskz3OHgpCS3Yutbet/+xG0pMX5OXv28G7JR2y/zWbzzHZDfch/9CllBcVz+WJWamH5hVNWRIwm6ooFHMtvMoTcbK+/MWfXw9hynz91Ow8mceZUe0KWVtd6WZY1QwhxZnsHOx9KPljAsfwmoxARcnYonssuS4SIEDg7TuW2VwqRQqSQUQhIIVKIFCKFlBHwbRbUhwA60S4LAMlnok69InC+y1TUxyzq7AHVy61tOwocJDXm5+w5eZBUwHa8uWEnX/pBIZktNOzK46d/fSQ3oLpoCvnYWs4t9IlIs3ylt196IlJFHYhxX1EXIQhwEzx+FyEiBEAgoolqyJi7rIjYe12JEBECx1jSRf3G6tr9zLKr8N14DJ2574fdzrvBn6SQigphDfdFiAiBRZ50ypJCTnlMpg8RISIETy3T2KlLIVKIFDIKASkkEYUUA6rYbw4V5P/c3DAXOPCZWWjY7L+BT+GXtd4YA6qZxqLNPnoSNqBiKWS3tdzLzIKefjezvdu9/Yk8/V77ba8ISaxTFyEiBN+9eb4GpJSFwacaguFUtvId1illKWXBsTSVp70shdxbab//ZZeuweh7DC/b769vd3fuDP6kGoIhOlRDWESLEBHiR+CidepSCBDJk9xliRARAiBwauJiPGytlJXI8XtBuwgRIXAK8B2/17aGFAOqGIOZwTeHCrSPX7+yk/7ROOAP2foGVDS/Ed6gijKgYjVErEhm+WXh4IvIkV8DYi2EBRzLLwsHEYIlyaEjGRFSETgpBADO1xCxgGP5lUIAoqdq21vgwYoMViSz/LJwUFGvqDwRUhE4KQQATkU94mkvS6qsSGb5ZeGgGgIo2rd7EyEVgZNCAOBUQ1RDor/moJQFKG+qOnX2J/4wvOtrldwn/uoLdfidncu/qwhfdn09iJDEuP0DnXmvq+qIgDYAAAAASUVORK5CYII="
        }]
      }, {
        type: "bar",
        name: "Bar Chart",
        icon: "icon-fsux_tubiao_duijizhuzhuangtu1",
        data: [{
          type: "echarts|bar|default",
          name: "Basic Bar Chart",
          img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABQCAYAAADvCdDvAAADzUlEQVR4Xu2cz2sTQRTHN4darX+CIIIXFawICSIeYqgiotFLUfCkKDaI9CAIEZRUKlgoViiCRRspqEWa6sHgSUv8gYgSEJF4UvGgF715EFrFkW0FUXd3Om/ey+4s3153vjOz38+bydt5TDMe/hLlQCZRs8FkPABJWBAACIAkzIGETQcrBEAS5kDCpoMV4gKQZrOpstmsMSyqzvckDm0cY+reNdD0F5M31ezIcME0eDpPnGxQdP44cWjjGNN/12Vj442wgA8E8ji3UZnCQPvFO9B1+aoHIIv3S7wlgIhbbDYAgJj5Jd4aQMQtNhsAQMz8Em9tDOTUoZL69O7DI9OZrVi9Kk/R+ePYaEuFXP77vfpZ0/l27CpWKDp/HBvt8rHxilGWtWF7r1Npb/V8OTSNjILkzIchgOjXmhTMwA9DAAEQvQMRLbBlWdnHLwYQfk+tekw9kBtTd9TQlUnj097y0QMNis6nYaOdGCqHnp6mIsuiZhBUna5GoFs+1HGpOsn5BmZZ1IlSdZIvmIoV4lqBKqrgkwogrhWoos6GAES34Qs8BxABU226BBAb9wS0ACJgqk2XAGLjnoA29UBcK1Ct3Lkjf3fmqXGBak/PlgpF58dUlFZlvNbr+9O1sNiL+l5LxfG7wKKz61KpqVcPbu8HEDsb+dQAwuclS08AwmIjXycAwuclS08AwmIjXyfcQFwrUFGLW1SdTy5Kq1Tmc2um9oYty6LWNag61EP+oEOBinBTTDKAcIOKcFPMB7J0+GIjVygYX/vTwcQNKuJPeeeRPm9TXwlAiP6xywCE3VK7DgHEzj92NYCwW2rXIYDY+ceubisQ1wpUUbevNs99ba378e1LEBGbW1BdlcFKrlhsT5bl2v2QqPD/6Xn7wqp3STxZSH3FEEDYd2u7DgHEzj92NYCwW2rXIYDY+ceuTgWQNBWoOmYzrZdPaoFprzNZFnWiVJ3uSFq3bKjjUnWS80WByoUC1fNrVTV3abSoi8x/ny853l+n6BYKPhfquZ5t7F++Ue/gzAqJ4waV1NkQgJguq9/tAWTBiMSUcAEEQGL5X8G6DA0rxIUsCz/q+h9CqQwtcIWcPnxMfXz7/qF+Wn+3yHWv3dr9rDFgqptPeyuDAxIFn1RkWdQCVXb9Gq86cq6t3xK6PRlAAES7QbTtjiFWiJbFfAMACfFJ6odZhwVAAEQXI/8/jyNa4xiTtGVVr99SoxPTxqe9Z/oP1nv37kaWpYlH4y2LGjlUnS5qdOuNOi5VJzlfUjTrDMJzugMAQvdORAkgIrbSOwUQunciyl+nJgacKCJJ0AAAAABJRU5ErkJggg=="
        }, {
          type: "echarts|bar|stack",
          name: "Stacked Bar Chart",
          img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABQCAYAAADvCdDvAAACiElEQVR4Xu2cP0oDURCHExBscwe9gBAP4AG8gAcQLGwEJZV/OkGwECtBO1OlECwNJNgpKVQ8QHIMJbAi24S4vsy44+wsfKln5738vpl5uzObNBt8QinQDLUbNtMASLAgAAhAgikQbDtkCECCKRBsO2RIHYCMRqOs3W6bw8JvTj+lQ6Hoz93b7OP8bMM6eJb39gd18js5OBycXnXNdehsb/3qtxDI4/paZg2jjv52Wyvu2wZIQnKAuMdjekGAAKS4l8UZkkcGGUKGkCGpGCBDyBAyhAwJlgUAAUhSAZ7UeVKvT4qEucui25sHTZhuL3OLxXOLMnmunocAJBiQCCVrp7UqDsLUwEfspMCwCr9h77KqOFDLwLO6FiBWShr5AYiRkFZuAGKlpJEfgBgJaeUGIFZKGvkBiJGQVm4AYqWkkR+AGAlp5QYgVkoa+QGIkZBWbgBipaSRH4AYCWnlJuzPEej2ziBmHhJsHgKQYEAiDKg0NbmK2bdkf0vT6fhleDeet1WPcOv29nvUYVaWNU7e+r1jgEjC18EGIA4ia5YAiEYtB1uAOIisWQIgGrUcbAHiILJmCYBo1HKwBYiDyJolAKJRy8EWIA4ia5YAiEYtB1uAOIisWcIMCN3eXPayP0cw6/YyDwk2DwFIMCBPN9fZ5+XFpqZeSmwnnaN777/Mm9/Xe783lOz126aKwHR96yTCIOn1oSf+c0+ASEO3hB1AZsQjQxafTZSsRLZRskqUIumllCxK1o9YCfMaEGcIZ8iP6KRkUbIoWakDngwhQ8gQMkT4EMBd1h/vsuj2LhZOGIOFZurnkCpaBv/1BevmV9yKLvPFuFauAEDkWrlYAsRFZvkiAJFr5WL5BeJU77Wa075tAAAAAElFTkSuQmCC"
        }]
      }, {
        type: "pie",
        name: "Pie Chart",
        icon: "icon-fsux_tubiao_nandingmeiguitu",
        data: [{
          type: "echarts|pie|default",
          name: "Basic Pie Chart",
          img: "data:image/png;base64,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"
        }, {
          type: "echarts|pie|split",
          name: "Split Pie Chart",
          img: "data:image/png;base64,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"
        }, {
          type: "echarts|pie|ring",
          name: "Doughnut Chart",
          img: "data:image/png;base64,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"
        }]
      }]
    };
  },

  mounted() {
    if (this.lang == "ch") {
      this.config[0].data = this.echartsCN;
      this.close = "关闭图表选择菜单";
      this.chooseConfig();
      return;
    }

    this.config[0].data = this.echartsEN;
    this.close = "close chart-select menu";
    this.chooseConfig();
  },

  computed: { ...Object(external_Vuex_["mapState"])("chartSetting", ["chartLists", "currentChartIndex"]),

    chartPro() {
      return this.chartAllType.split("|")[0];
    },

    chartType() {
      return this.chartAllType.split("|")[1];
    },

    chartStyle() {
      return this.chartAllType.split("|")[2];
    }

  },
  watch: {
    currentChartType(val) {
      this.chartAllType = val;
    },

    lang(val) {
      if (this.lang == "ch") {
        this.config[0].data = this.echartsCN;
        this.close = "关闭图表选择菜单";
        this.chooseConfig();
        return;
      }

      this.config[0].data = this.echartsEN;
      this.close = "close chart-select menu";
      this.chooseConfig();
    }

  },
  methods: {
    chooseConfig() {
      for (var i = 0; i < this.config.length; i++) {
        if (this.config[i].type == this.chartPro) {
          this.currentConfig = this.config[i];
          return;
        }
      }

      this.currentConfig = this.config[0];
    },

    changeChartType: function (value) {
      // 相同类型或者currentChartIndex为null不执行
      if (this.currentChartIndex == null) {
        return null;
      }

      if (this.chartLists[this.currentChartIndex].chartOptions, color_name["chartreuse"] == value) {
        return null;
      }

      changeChangeAllType(deepCopy(this.chartLists[this.currentChartIndex].chartOptions), value);
      this.$emit('closeChartShowList');
      this.currentChartType = value;
    },
    quickListScroll: function (e) {
      var scrollTop = jquery_default()(e.currentTarget).scrollTop();

      var _this = this;

      jquery_default()(e.currentTarget).find("div.luckysheet-datavisual-quick-list-title").each(function () {
        var $t = jquery_default()(this),
            position = $t.position(); //console.log($t.find("a").data("type"),position.top, scrollTop);

        if (scrollTop >= _this.list_scroll_direction) {
          if (position.top + 55 > 0) {
            jquery_default()("#luckysheet-datavisual-quick-menu div").removeClass("luckysheet-datavisual-quick-menu-active");
            jquery_default()("#luckysheet-datavisual-chart-menu-" + $t.find("a").data("type")).addClass("luckysheet-datavisual-quick-menu-active");
            return false;
          }
        } else {
          if (position.top - 55 >= 0) {
            jquery_default()("#luckysheet-datavisual-quick-menu div").removeClass("luckysheet-datavisual-quick-menu-active");
            var $obj = $t.prev().prev();

            if ($obj.length == 0) {
              $obj = $t;
            }

            jquery_default()("#luckysheet-datavisual-chart-menu-" + $obj.find("a").data("type")).addClass("luckysheet-datavisual-quick-menu-active");
            return false;
          }
        }

        setTimeout(function () {
          _this.list_scroll_direction = scrollTop;
        }, 0);
      });
    },
    quickMenu: function (e) {
      var $t = jquery_default()(e.currentTarget);
      jquery_default()("#luckysheet-datavisual-quick-menu div").removeClass("luckysheet-datavisual-quick-menu-active");
      $t.addClass("luckysheet-datavisual-quick-menu-active");
      var $scroll = jquery_default()("#luckysheet-datavisual-chart-listtitle-" + $t.data("type")).parent(),
          p = $scroll.position().top;
      jquery_default()("#luckysheet-datavisual-quick-list").scrollTop(p + 5 + jquery_default()("#luckysheet-datavisual-quick-list").scrollTop());
    }
  }
});
// CONCATENATED MODULE: ./src/packages/ChartMix/ChartList.vue?vue&type=script&lang=js&
 /* harmony default export */ var ChartMix_ChartListvue_type_script_lang_js_ = (ChartListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/packages/ChartMix/ChartList.vue?vue&type=style&index=0&id=d01548cc&prod&lang=css&
var ChartListvue_type_style_index_0_id_d01548cc_prod_lang_css_ = __webpack_require__("d81a");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/packages/ChartMix/ChartList.vue






/* normalize component */

var component = normalizeComponent(
  ChartMix_ChartListvue_type_script_lang_js_,
  ChartListvue_type_template_id_d01548cc_render,
  ChartListvue_type_template_id_d01548cc_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ChartList = (component.exports);
// EXTERNAL MODULE: ./node_modules/lodash/isEqual.js
var isEqual = __webpack_require__("63ea");
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"23c09074-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/ChartMix/chartChips/chart/ChartTitle.vue?vue&type=template&id=0fa20870&
var ChartTitlevue_type_template_id_0fa20870_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('el-collapse-item', {
    attrs: {
      "name": "1"
    }
  }, [_c('template', {
    slot: "title"
  }, [_vm._v(" " + _vm._s(_vm.setItem.modalName) + " "), _c('i', {
    staticClass: "iconfont icon-biaoti"
  })]), _c('chart-base-switch', {
    attrs: {
      "switchValue": _vm.title.show
    },
    on: {
      "update:switchValue": function ($event) {
        return _vm.$set(_vm.title, "show", $event);
      },
      "update:switch-value": function ($event) {
        return _vm.$set(_vm.title, "show", $event);
      }
    }
  }, [_c('div', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v(_vm._s(_vm.setItem.show))])]), _c('chart-base-input', {
    attrs: {
      "inputValue": _vm.title.text,
      "placeholder": _vm.setItem.placeholder
    },
    on: {
      "update:inputValue": function ($event) {
        return _vm.$set(_vm.title, "text", $event);
      },
      "update:input-value": function ($event) {
        return _vm.$set(_vm.title, "text", $event);
      }
    }
  }, [_c('div', {
    attrs: {
      "slot": "input"
    },
    slot: "input"
  }, [_vm._v(_vm._s(_vm.setItem.text))])]), _c('chart-base-label', {
    attrs: {
      "router": _vm.router + '/label',
      "baseLabelOption": _vm.title.label
    },
    on: {
      "update:baseLabelOption": function ($event) {
        return _vm.$set(_vm.title, "label", $event);
      },
      "update:base-label-option": function ($event) {
        return _vm.$set(_vm.title, "label", $event);
      }
    }
  }, [_c('div', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v(_vm._s(_vm.setItem.label))])]), _c('chart-base-select', {
    attrs: {
      "selectOption": _vm.positionData,
      "selectValue": _vm.title.position.value
    },
    on: {
      "update:selectValue": function ($event) {
        return _vm.$set(_vm.title.position, "value", $event);
      },
      "update:select-value": function ($event) {
        return _vm.$set(_vm.title.position, "value", $event);
      }
    }
  }, [_c('div', {
    attrs: {
      "slot": "select"
    },
    slot: "select"
  }, [_vm._v(_vm._s(_vm.setItem.position))])]), _vm.title.position.value === 'custom' ? _c('el-row', [_c('chart-base-slider', {
    attrs: {
      "baseSliderOption": _vm.title.position.offsetX,
      "unit": '%',
      "content": _vm.setItem.offsetL
    },
    on: {
      "update:baseSliderOption": function ($event) {
        return _vm.$set(_vm.title.position, "offsetX", $event);
      },
      "update:base-slider-option": function ($event) {
        return _vm.$set(_vm.title.position, "offsetX", $event);
      }
    }
  }), _c('chart-base-slider', {
    attrs: {
      "baseSliderOption": _vm.title.position.offsetY,
      "unit": '%',
      "content": _vm.setItem.offsetT
    },
    on: {
      "update:baseSliderOption": function ($event) {
        return _vm.$set(_vm.title.position, "offsetY", $event);
      },
      "update:base-slider-option": function ($event) {
        return _vm.$set(_vm.title.position, "offsetY", $event);
      }
    }
  })], 1) : _vm._e()], 2);
};

var ChartTitlevue_type_template_id_0fa20870_staticRenderFns = [];

// CONCATENATED MODULE: ./src/packages/ChartMix/chartChips/chart/ChartTitle.vue?vue&type=template&id=0fa20870&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"23c09074-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/ChartMix/chartChips/base/ChartBaseLabel.vue?vue&type=template&id=0c8b0a05&
var ChartBaseLabelvue_type_template_id_0c8b0a05_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', [_c('el-row', {
    staticStyle: {
      "margin-top": "15px"
    }
  }, [_c('el-col', {
    staticClass: "title",
    attrs: {
      "span": 8
    }
  }, [_vm._t("title")], 2), _c('el-col', {
    attrs: {
      "span": 16
    }
  }, [_c('chart-base-box', {
    attrs: {
      "boxData": _vm.baseLabelOptionData.fontGroup,
      "checkboxOption": _vm.fontStyleObj
    },
    on: {
      "update:boxData": function ($event) {
        return _vm.$set(_vm.baseLabelOptionData, "fontGroup", $event);
      },
      "update:box-data": function ($event) {
        return _vm.$set(_vm.baseLabelOptionData, "fontGroup", $event);
      }
    }
  }), _c('el-row', {
    staticStyle: {
      "margin-top": "5px"
    }
  }, [_c('el-col', {
    attrs: {
      "span": 12
    }
  }, [_c('chart-base-select', {
    attrs: {
      "hideCol": true,
      "tooltip": '选择字体大小',
      "selectOption": _vm.fontSizeList,
      "selectValue": _vm.baseLabelOptionData.fontSize
    },
    on: {
      "update:selectValue": function ($event) {
        return _vm.$set(_vm.baseLabelOptionData, "fontSize", $event);
      },
      "update:select-value": function ($event) {
        return _vm.$set(_vm.baseLabelOptionData, "fontSize", $event);
      }
    }
  })], 1), _c('el-col', {
    attrs: {
      "span": 8,
      "offset": 2
    }
  }, [_c('el-color-picker', {
    attrs: {
      "size": "mini"
    },
    on: {
      "change": _vm.changeStyle
    },
    model: {
      value: _vm.baseLabelOptionData.color,
      callback: function ($$v) {
        _vm.$set(_vm.baseLabelOptionData, "color", $$v);
      },
      expression: "baseLabelOptionData.color"
    }
  })], 1)], 1)], 1)], 1), _vm.baseLabelOptionData.fontSize === 'custom' ? _c('chart-base-slider', {
    attrs: {
      "baseSliderOption": _vm.baseLabelOptionData.cusFontSize,
      "unit": 'px',
      "content": '滑动修改字体大小'
    },
    on: {
      "update:baseSliderOption": function ($event) {
        return _vm.$set(_vm.baseLabelOptionData, "cusFontSize", $event);
      },
      "update:base-slider-option": function ($event) {
        return _vm.$set(_vm.baseLabelOptionData, "cusFontSize", $event);
      }
    }
  }) : _vm._e()], 1);
};

var ChartBaseLabelvue_type_template_id_0c8b0a05_staticRenderFns = [];

// CONCATENATED MODULE: ./src/packages/ChartMix/chartChips/base/ChartBaseLabel.vue?vue&type=template&id=0c8b0a05&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/ChartMix/chartChips/base/ChartBaseLabel.vue?vue&type=script&lang=js&


/* harmony default export */ var ChartBaseLabelvue_type_script_lang_js_ = ({
  name: 'chart-base-label',
  props: {
    router: String,
    baseLabelOption: Object
  },
  components: {
    'chart-base-slider': ChartBaseSlider,
    'chart-base-select': ChartBaseSelect,
    'chart-base-box': ChartBaseBox
  },
  data: function () {
    return {
      baseLabelOptionData: {},
      //整个label设置
      fontSizeList: deepCopy(fontSizeList),
      //位置选择数组
      fontStyleObj: {} //字体样式:数据=>DOM转换

    };
  },
  watch: {
    baseLabelOption: {
      handler: function (newVal) {
        if (isEqual_default.a(this.baseLabelOptionData, newVal)) {
          return;
        }

        this.baseLabelOptionData = deepCopy(newVal); //传过来的值需要深拷贝防止数据流向父组件传递
        //根据在不同的组件内渲染不同的结构

        if (this.router.includes('title')) {
          //在主标题/副标题组件内
          this.fontStyleObj = deepCopy(fontStyleIBV);
        } else {
          //鼠标提示组件内
          this.fontStyleObj = deepCopy(fontStyleIB);
        }
      },
      immediate: true,
      deep: true
    },
    baseLabelOptionData: {
      handler: function (newVal, oldVal) {
        if (oldVal) {
          this.changeStyle();
        }
      },
      immediate: true,
      deep: true
    }
  },
  methods: { ...external_Vuex_["mapActions"]('chartSetting', ['updateChartItem']),

    changeStyle() {
      const updateObj = {
        updateObj: deepCopy(this.baseLabelOptionData),
        router: this.router
      };
      this.updateChartItem(updateObj);
    }

  }
});
// CONCATENATED MODULE: ./src/packages/ChartMix/chartChips/base/ChartBaseLabel.vue?vue&type=script&lang=js&
 /* harmony default export */ var base_ChartBaseLabelvue_type_script_lang_js_ = (ChartBaseLabelvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/packages/ChartMix/chartChips/base/ChartBaseLabel.vue





/* normalize component */

var ChartBaseLabel_component = normalizeComponent(
  base_ChartBaseLabelvue_type_script_lang_js_,
  ChartBaseLabelvue_type_template_id_0c8b0a05_render,
  ChartBaseLabelvue_type_template_id_0c8b0a05_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ChartBaseLabel = (ChartBaseLabel_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"23c09074-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/ChartMix/chartChips/base/ChartBaseSwitch.vue?vue&type=template&id=a5ec903c&
var ChartBaseSwitchvue_type_template_id_a5ec903c_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('el-row', {
    staticStyle: {
      "margin-top": "15px"
    }
  }, [_c('el-col', {
    staticClass: "title",
    attrs: {
      "span": 8
    }
  }, [_vm._t("title")], 2), _c('el-col', {
    attrs: {
      "span": 16
    }
  }, [_c('el-switch', {
    attrs: {
      "active-color": "#13ce66",
      "inactive-color": "#d8d8d8"
    },
    on: {
      "change": _vm.changeSwitch
    },
    model: {
      value: _vm.switchData,
      callback: function ($$v) {
        _vm.switchData = $$v;
      },
      expression: "switchData"
    }
  })], 1)], 1);
};

var ChartBaseSwitchvue_type_template_id_a5ec903c_staticRenderFns = [];

// CONCATENATED MODULE: ./src/packages/ChartMix/chartChips/base/ChartBaseSwitch.vue?vue&type=template&id=a5ec903c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/ChartMix/chartChips/base/ChartBaseSwitch.vue?vue&type=script&lang=js&
/* harmony default export */ var ChartBaseSwitchvue_type_script_lang_js_ = ({
  name: "chart-base-switch",
  props: {
    switchValue: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      switchData: false
    };
  },

  watch: {
    switchValue(val) {
      this.switchData = val;
    }

  },

  mounted() {
    this.switchData = this.switchValue ? this.switchValue : false;
  },

  methods: {
    changeSwitch(val) {
      this.$emit('update:switchValue', val);
    }

  }
});
// CONCATENATED MODULE: ./src/packages/ChartMix/chartChips/base/ChartBaseSwitch.vue?vue&type=script&lang=js&
 /* harmony default export */ var base_ChartBaseSwitchvue_type_script_lang_js_ = (ChartBaseSwitchvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/packages/ChartMix/chartChips/base/ChartBaseSwitch.vue





/* normalize component */

var ChartBaseSwitch_component = normalizeComponent(
  base_ChartBaseSwitchvue_type_script_lang_js_,
  ChartBaseSwitchvue_type_template_id_a5ec903c_render,
  ChartBaseSwitchvue_type_template_id_a5ec903c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ChartBaseSwitch = (ChartBaseSwitch_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"23c09074-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/ChartMix/chartChips/base/ChartBaseInput.vue?vue&type=template&id=260eed3e&
var ChartBaseInputvue_type_template_id_260eed3e_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', [!_vm.hideCol ? _c('el-row', {
    staticStyle: {
      "margin-top": "15px"
    }
  }, [_c('el-col', {
    staticClass: "title",
    attrs: {
      "span": 8
    }
  }, [_vm._t("input")], 2), _c('el-col', {
    attrs: {
      "span": 16
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": _vm.placeholder,
      "size": "mini",
      "suffix-icon": "el-icon-edit",
      "type": _vm.type ? _vm.type : 'text'
    },
    on: {
      "change": _vm.changeInput
    },
    model: {
      value: _vm.input,
      callback: function ($$v) {
        _vm.input = $$v;
      },
      expression: "input"
    }
  })], 1)], 1) : _c('el-input', {
    attrs: {
      "type": _vm.type ? _vm.type : 'text',
      "placeholder": _vm.placeholder,
      "size": "mini"
    },
    on: {
      "change": _vm.changeInput
    },
    model: {
      value: _vm.input,
      callback: function ($$v) {
        _vm.input = $$v;
      },
      expression: "input"
    }
  })], 1);
};

var ChartBaseInputvue_type_template_id_260eed3e_staticRenderFns = [];

// CONCATENATED MODULE: ./src/packages/ChartMix/chartChips/base/ChartBaseInput.vue?vue&type=template&id=260eed3e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/ChartMix/chartChips/base/ChartBaseInput.vue?vue&type=script&lang=js&
/* harmony default export */ var ChartBaseInputvue_type_script_lang_js_ = ({
  name: 'chart-base-input',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    inputValue: '',
    hideCol: Boolean,
    type: String
  },

  data() {
    return {
      input: ''
    };
  },

  watch: {
    inputValue(val) {
      this.input = val;
    }

  },

  mounted() {
    this.input = this.inputValue ? this.inputValue : '';
  },

  methods: {
    changeInput(val) {
      this.$emit('update:inputValue', val);
    }

  }
});
// CONCATENATED MODULE: ./src/packages/ChartMix/chartChips/base/ChartBaseInput.vue?vue&type=script&lang=js&
 /* harmony default export */ var base_ChartBaseInputvue_type_script_lang_js_ = (ChartBaseInputvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/packages/ChartMix/chartChips/base/ChartBaseInput.vue





/* normalize component */

var ChartBaseInput_component = normalizeComponent(
  base_ChartBaseInputvue_type_script_lang_js_,
  ChartBaseInputvue_type_template_id_260eed3e_render,
  ChartBaseInputvue_type_template_id_260eed3e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ChartBaseInput = (ChartBaseInput_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"23c09074-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/ChartMix/chartChips/base/ChartBaseSelect.vue?vue&type=template&id=2d1fdc6e&
var ChartBaseSelectvue_type_template_id_2d1fdc6e_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return !_vm.hideCol ? _c('el-row', {
    staticStyle: {
      "margin-top": "15px"
    }
  }, [_c('el-col', {
    staticClass: "title",
    attrs: {
      "span": 8
    }
  }, [_vm._t("select")], 2), _c('el-col', {
    attrs: {
      "span": 16
    }
  }, [_c('el-tooltip', {
    attrs: {
      "disabled": !_vm.tooltip,
      "open-delay": 500,
      "content": _vm.tooltip,
      "effect": "dark",
      "placement": "bottom"
    }
  }, [_c('el-select', {
    attrs: {
      "size": "mini"
    },
    on: {
      "change": _vm.changeSelect
    },
    model: {
      value: _vm.select,
      callback: function ($$v) {
        _vm.select = $$v;
      },
      expression: "select"
    }
  }, _vm._l(_vm.selectOption, function (item, i) {
    return _c('el-option', {
      key: i,
      attrs: {
        "label": item.label,
        "value": item.value
      }
    });
  }), 1)], 1)], 1)], 1) : _c('el-tooltip', {
    attrs: {
      "disabled": !_vm.tooltip,
      "open-delay": 500,
      "content": _vm.tooltip,
      "effect": "dark",
      "placement": "bottom"
    }
  }, [_c('el-select', {
    attrs: {
      "size": "mini"
    },
    on: {
      "change": _vm.changeSelect
    },
    model: {
      value: _vm.select,
      callback: function ($$v) {
        _vm.select = $$v;
      },
      expression: "select"
    }
  }, _vm._l(_vm.selectOption, function (item, i) {
    return _c('el-option', {
      key: i,
      attrs: {
        "label": item.label,
        "value": item.value
      }
    });
  }), 1)], 1);
};

var ChartBaseSelectvue_type_template_id_2d1fdc6e_staticRenderFns = [];

// CONCATENATED MODULE: ./src/packages/ChartMix/chartChips/base/ChartBaseSelect.vue?vue&type=template&id=2d1fdc6e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/ChartMix/chartChips/base/ChartBaseSelect.vue?vue&type=script&lang=js&
/* harmony default export */ var ChartBaseSelectvue_type_script_lang_js_ = ({
  props: {
    selectOption: Array,
    tooltip: String,
    selectValue: [String, Number, Array],
    hideCol: Boolean
  },

  data() {
    return {
      select: ''
    };
  },

  watch: {
    selectValue(val) {
      this.select = val;
    }

  },

  mounted() {
    this.select = this.selectValue;
  },

  methods: {
    changeSelect(val) {
      this.$emit('update:selectValue', val);
    }

  }
});
// CONCATENATED MODULE: ./src/packages/ChartMix/chartChips/base/ChartBaseSelect.vue?vue&type=script&lang=js&
 /* harmony default export */ var base_ChartBaseSelectvue_type_script_lang_js_ = (ChartBaseSelectvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/packages/ChartMix/chartChips/base/ChartBaseSelect.vue





/* normalize component */

var ChartBaseSelect_component = normalizeComponent(
  base_ChartBaseSelectvue_type_script_lang_js_,
  ChartBaseSelectvue_type_template_id_2d1fdc6e_render,
  ChartBaseSelectvue_type_template_id_2d1fdc6e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ChartBaseSelect = (ChartBaseSelect_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"23c09074-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/ChartMix/chartChips/base/ChartBaseSlider.vue?vue&type=template&id=d0824222&
var ChartBaseSlidervue_type_template_id_d0824222_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', [!_vm.hideCol ? _c('el-row', {
    staticClass: "chart-base-slider",
    staticStyle: {
      "margin-top": "15px"
    }
  }, [_c('el-col', {
    attrs: {
      "span": 22
    }
  }, [_c('el-tooltip', {
    attrs: {
      "open-delay": 500,
      "content": _vm.content,
      "placement": "top"
    }
  }, [_c('el-slider', {
    staticStyle: {
      "padding-left": "12px"
    },
    attrs: {
      "show-input-controls": false,
      "min": _vm.min,
      "max": _vm.max,
      "input-size": "mini",
      "show-input": "",
      "format-tooltip": _vm.format ? _vm.formatter : null
    },
    on: {
      "change": _vm.handlerChange
    },
    model: {
      value: _vm.baseSliderData,
      callback: function ($$v) {
        _vm.baseSliderData = $$v;
      },
      expression: "baseSliderData"
    }
  })], 1)], 1), _c('el-col', {
    staticClass: "input_content",
    attrs: {
      "span": 1
    }
  }, [_vm._v(_vm._s(_vm.unit))])], 1) : _c('el-row', {
    staticClass: "chart-base-slider",
    staticStyle: {
      "margin-top": "15px"
    }
  }, [_c('el-col', {
    attrs: {
      "span": 6
    }
  }, [_vm._t("title")], 2), _c('el-col', {
    attrs: {
      "span": 17
    }
  }, [_c('el-tooltip', {
    attrs: {
      "open-delay": 500,
      "content": _vm.content,
      "placement": "top"
    }
  }, [_c('el-slider', {
    staticStyle: {
      "padding-left": "12px"
    },
    attrs: {
      "show-input-controls": false,
      "min": _vm.min,
      "max": _vm.max,
      "input-size": "mini",
      "show-input": "",
      "format-tooltip": _vm.format ? _vm.formatter : null
    },
    on: {
      "change": _vm.handlerChange
    },
    model: {
      value: _vm.baseSliderData,
      callback: function ($$v) {
        _vm.baseSliderData = $$v;
      },
      expression: "baseSliderData"
    }
  })], 1)], 1), _c('el-col', {
    staticClass: "input_content",
    attrs: {
      "span": 1
    }
  }, [_vm._v(_vm._s(_vm.unit))])], 1)], 1);
};

var ChartBaseSlidervue_type_template_id_d0824222_staticRenderFns = [];

// CONCATENATED MODULE: ./src/packages/ChartMix/chartChips/base/ChartBaseSlider.vue?vue&type=template&id=d0824222&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/ChartMix/chartChips/base/ChartBaseSlider.vue?vue&type=script&lang=js&
/* harmony default export */ var ChartBaseSlidervue_type_script_lang_js_ = ({
  name: "chart-base-slider",
  props: {
    baseSliderOption: Number,
    unit: String,
    // % or px
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    content: {
      type: String,
      default: "滑动修改值大小"
    },
    hideCol: false,
    format: [Function, String]
  },

  data() {
    return {
      baseSliderData: 12
    };
  },

  watch: {
    baseSliderOption(val) {
      this.baseSliderData = val;
    }

  },

  mounted() {
    this.baseSliderData = this.baseSliderOption;
  },

  methods: {
    handlerChange(value) {
      this.$emit("update:baseSliderOption", value);
    },

    formatter(val) {
      // eval(this.format)
      return null;
    }

  }
});
// CONCATENATED MODULE: ./src/packages/ChartMix/chartChips/base/ChartBaseSlider.vue?vue&type=script&lang=js&
 /* harmony default export */ var base_ChartBaseSlidervue_type_script_lang_js_ = (ChartBaseSlidervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/packages/ChartMix/chartChips/base/ChartBaseSlider.vue?vue&type=style&index=0&id=d0824222&prod&lang=css&
var ChartBaseSlidervue_type_style_index_0_id_d0824222_prod_lang_css_ = __webpack_require__("8ce1");

// CONCATENATED MODULE: ./src/packages/ChartMix/chartChips/base/ChartBaseSlider.vue






/* normalize component */

var ChartBaseSlider_component = normalizeComponent(
  base_ChartBaseSlidervue_type_script_lang_js_,
  ChartBaseSlidervue_type_template_id_d0824222_render,
  ChartBaseSlidervue_type_template_id_d0824222_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ChartBaseSlider = (ChartBaseSlider_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"23c09074-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/ChartMix/chartChips/base/ChartBaseBox.vue?vue&type=template&id=db8b1a32&
var ChartBaseBoxvue_type_template_id_db8b1a32_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('el-row', [_c('el-checkbox-group', {
    attrs: {
      "size": "mini"
    },
    on: {
      "change": _vm.changeStyle
    },
    model: {
      value: _vm.boxValue,
      callback: function ($$v) {
        _vm.boxValue = $$v;
      },
      expression: "boxValue"
    }
  }, _vm._l(_vm.checkboxOption, function (value, name) {
    return _c('el-tooltip', {
      key: name,
      attrs: {
        "open-delay": 500,
        "content": value.des,
        "effect": "dark",
        "placement": "bottom"
      }
    }, [_c('el-checkbox-button', {
      attrs: {
        "label": name
      }
    }, [_vm._v(" " + _vm._s(value.text) + " ")])], 1);
  }), 1)], 1);
};

var ChartBaseBoxvue_type_template_id_db8b1a32_staticRenderFns = [];

// CONCATENATED MODULE: ./src/packages/ChartMix/chartChips/base/ChartBaseBox.vue?vue&type=template&id=db8b1a32&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/ChartMix/chartChips/base/ChartBaseBox.vue?vue&type=script&lang=js&

/* harmony default export */ var ChartBaseBoxvue_type_script_lang_js_ = ({
  props: {
    checkboxOption: [Object, Array],
    boxData: {
      type: Array,
      default: []
    }
  },

  data() {
    return {
      boxValue: ''
    };
  },

  watch: {
    boxData(val) {
      this.boxValue = val;
    }

  },

  mounted() {
    this.boxValue = this.boxData ? deepCopy(this.boxData) : [];
  },

  methods: {
    changeStyle(val) {
      this.$emit('update:boxData', val);
    }

  }
});
// CONCATENATED MODULE: ./src/packages/ChartMix/chartChips/base/ChartBaseBox.vue?vue&type=script&lang=js&
 /* harmony default export */ var base_ChartBaseBoxvue_type_script_lang_js_ = (ChartBaseBoxvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/packages/ChartMix/chartChips/base/ChartBaseBox.vue





/* normalize component */

var ChartBaseBox_component = normalizeComponent(
  base_ChartBaseBoxvue_type_script_lang_js_,
  ChartBaseBoxvue_type_template_id_db8b1a32_render,
  ChartBaseBoxvue_type_template_id_db8b1a32_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ChartBaseBox = (ChartBaseBox_component.exports);
// CONCATENATED MODULE: ./src/utils/importUtil.js
// 复用的组件和方法
// const ChartBaseLabel = () => import('@/packages/ChartMix/chartChips/base/ChartBaseLabel')
// const ChartBaseSwitch = () => import('@/packages/ChartMix/chartChips/base/ChartBaseSwitch')
// const ChartBaseInput = () => import('@/packages/ChartMix/chartChips/base/ChartBaseInput')
// const ChartBaseSelect = () => import('@/packages/ChartMix/chartChips/base/ChartBaseSelect')
// const ChartBaseSlider = () => import('@/packages/ChartMix/chartChips/base/ChartBaseSlider')
// const ChartBaseBox = () => import('@/packages/ChartMix/chartChips/base/ChartBaseBox')


 // import { isEqual } from 'lodash'






 // 重复引入的组件

const importComp = function (t) {
  return {
    'chart-base-label': t.ChartBaseLabel,
    'chart-base-input': t.ChartBaseInput,
    'chart-base-switch': t.ChartBaseSwitch,
    'chart-base-slider': t.ChartBaseSlider,
    'chart-base-select': t.ChartBaseSelect
  };
};


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/ChartMix/chartChips/chart/ChartTitle.vue?vue&type=script&lang=js&




/* harmony default export */ var ChartTitlevue_type_script_lang_js_ = ({
  name: "ChartTitle",
  props: {
    router: String,
    chartAllType: String,
    titleOption: Object,
    lang: {
      type: String,
      default: "cn"
    }
  },
  components: { ...importComp(importUtil_namespaceObject)
  },

  mounted() {
    if (this.lang == "ch") {
      this.setItem = cn["chartTitle"];
      return;
    }

    this.setItem = en["chartTitle"];
  },

  data: function () {
    return {
      title: "",
      //整个title设置,
      positionData: positionOption,
      isChange: false,
      setItem: {}
    };
  },
  watch: {
    titleOption: {
      handler: function (newVal, oldVal) {
        if (isEqual_default.a(this.title, newVal)) {
          return;
        }

        if (oldVal) {
          this.isChange = true;
        }

        this.title = deepCopy(newVal);
      },
      deep: true,
      immediate: true
    },
    title: {
      handler: function (newVal, oldVal) {
        if (this.isChange) {
          this.isChange = !this.isChange;
          return;
        } // 改变值就重新渲染


        if (oldVal) {
          this.changeTitle();
        }
      },
      deep: true,
      immediate: true
    },

    lang(val) {
      if (val == "ch") {
        this.setItem = cn["chartTitle"];
        return;
      }

      this.setItem = en["chartTitle"];
    }

  },
  methods: { ...external_Vuex_["mapActions"]("chartSetting", ["updateChartItem"]),

    changeTitle() {
      const updateObj = {
        updateObj: deepCopy(this.title),
        router: this.router
      };
      this.updateChartItem(updateObj);
    }

  }
});
// CONCATENATED MODULE: ./src/packages/ChartMix/chartChips/chart/ChartTitle.vue?vue&type=script&lang=js&
 /* harmony default export */ var chart_ChartTitlevue_type_script_lang_js_ = (ChartTitlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/packages/ChartMix/chartChips/chart/ChartTitle.vue





/* normalize component */

var ChartTitle_component = normalizeComponent(
  chart_ChartTitlevue_type_script_lang_js_,
  ChartTitlevue_type_template_id_0fa20870_render,
  ChartTitlevue_type_template_id_0fa20870_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ChartTitle = (ChartTitle_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"23c09074-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/ChartMix/chartChips/chart/ChartSubTitle.vue?vue&type=template&id=18f1cac1&
var ChartSubTitlevue_type_template_id_18f1cac1_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('el-collapse-item', {
    attrs: {
      "name": "2"
    }
  }, [_c('template', {
    slot: "title"
  }, [_vm._v(" " + _vm._s(_vm.setItem.modalName) + "     "), _c('i', {
    staticClass: "iconfont icon-biaoti"
  })]), _c('chart-base-input', {
    attrs: {
      "inputValue": _vm.subTitle.text,
      "placeholder": _vm.setItem.placeholder
    },
    on: {
      "update:inputValue": function ($event) {
        return _vm.$set(_vm.subTitle, "text", $event);
      },
      "update:input-value": function ($event) {
        return _vm.$set(_vm.subTitle, "text", $event);
      }
    }
  }, [_c('div', {
    attrs: {
      "slot": "input"
    },
    slot: "input"
  }, [_vm._v(_vm._s(_vm.setItem.text))])]), _c('chart-base-label', {
    attrs: {
      "router": _vm.router + '/label',
      "baseLabelOption": _vm.subTitle.label
    }
  }, [_c('div', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v(_vm._s(_vm.setItem.label))])]), _c('chart-base-select', {
    attrs: {
      "selectOption": _vm.distanceOption,
      "selectValue": _vm.subTitle.distance.value
    },
    on: {
      "update:selectValue": function ($event) {
        return _vm.$set(_vm.subTitle.distance, "value", $event);
      },
      "update:select-value": function ($event) {
        return _vm.$set(_vm.subTitle.distance, "value", $event);
      }
    }
  }, [_c('div', {
    attrs: {
      "slot": "select"
    },
    slot: "select"
  }, [_vm._v(_vm._s(_vm.setItem.gap))])]), _vm.subTitle.distance.value === 'custom' ? _c('chart-base-slider', {
    attrs: {
      "baseSliderOption": _vm.subTitle.distance.cusGap,
      "unit": 'px',
      "content": _vm.setItem.content
    },
    on: {
      "update:baseSliderOption": function ($event) {
        return _vm.$set(_vm.subTitle.distance, "cusGap", $event);
      },
      "update:base-slider-option": function ($event) {
        return _vm.$set(_vm.subTitle.distance, "cusGap", $event);
      }
    }
  }) : _vm._e()], 2);
};

var ChartSubTitlevue_type_template_id_18f1cac1_staticRenderFns = [];

// CONCATENATED MODULE: ./src/packages/ChartMix/chartChips/chart/ChartSubTitle.vue?vue&type=template&id=18f1cac1&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/ChartMix/chartChips/chart/ChartSubTitle.vue?vue&type=script&lang=js&




/* harmony default export */ var ChartSubTitlevue_type_script_lang_js_ = ({
  name: "ChartSubTitle",
  props: {
    router: String,
    chartAllType: String,
    subTitleOption: Object,
    lang: {
      type: String,
      default: "cn"
    }
  },
  components: { ...importComp(importUtil_namespaceObject)
  },
  data: function () {
    return {
      subTitle: {},
      //整个title设置
      distanceOption: deepCopy(distanceOption),
      //位置选择数组
      setItem: {}
    };
  },

  mounted() {
    if (this.lang == "ch") {
      this.setItem = cn["chartSubTitle"];
      return;
    }

    this.setItem = en["chartSubTitle"];
  },

  watch: {
    subTitleOption: {
      handler: function (newVal) {
        if (isEqual_default.a(this.subTitle, newVal)) {
          return;
        }

        this.subTitle = deepCopy(newVal); //传过来的值需要深拷贝防止数据流向父组件传递
      },
      immediate: true,
      deep: true
    },
    subTitle: {
      handler: function (newVal, oldVal) {
        // 改变值就重新渲染
        if (oldVal) {
          this.changeTitle();
        }
      },
      deep: true,
      immediate: true
    },

    lang(val) {
      if (val == "ch") {
        this.setItem = cn["chartSubTitle"];
        return;
      }

      this.setItem = en["chartSubTitle"];
    }

  },
  methods: { ...external_Vuex_["mapActions"]("chartSetting", ["updateChartItem"]),

    changeTitle() {
      const updateObj = {
        updateObj: deepCopy(this.subTitle),
        router: this.router
      };
      this.updateChartItem(updateObj);
    }

  }
});
// CONCATENATED MODULE: ./src/packages/ChartMix/chartChips/chart/ChartSubTitle.vue?vue&type=script&lang=js&
 /* harmony default export */ var chart_ChartSubTitlevue_type_script_lang_js_ = (ChartSubTitlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/packages/ChartMix/chartChips/chart/ChartSubTitle.vue





/* normalize component */

var ChartSubTitle_component = normalizeComponent(
  chart_ChartSubTitlevue_type_script_lang_js_,
  ChartSubTitlevue_type_template_id_18f1cac1_render,
  ChartSubTitlevue_type_template_id_18f1cac1_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ChartSubTitle = (ChartSubTitle_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"23c09074-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/ChartMix/chartChips/chart/ChartCursor.vue?vue&type=template&id=754b950d&
var ChartCursorvue_type_template_id_754b950d_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('el-collapse-item', {
    attrs: {
      "name": "4"
    }
  }, [_c('template', {
    slot: "title"
  }, [_vm._v(" " + _vm._s(_vm.setItem.modalName) + " "), _c('i', {
    staticClass: "iconfont icon-biaoti"
  })]), _c('chart-base-switch', {
    attrs: {
      "switchValue": _vm.cursor.show
    },
    on: {
      "update:switchValue": function ($event) {
        return _vm.$set(_vm.cursor, "show", $event);
      },
      "update:switch-value": function ($event) {
        return _vm.$set(_vm.cursor, "show", $event);
      }
    }
  }, [_c('div', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v(_vm._s(_vm.setItem.show))])]), _c('chart-base-label', {
    attrs: {
      "router": _vm.router + '/label',
      "baseLabelOption": _vm.cursor.label
    }
  }, [_c('div', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v(_vm._s(_vm.setItem.label))])]), _c('el-row', {
    staticStyle: {
      "margin-top": "10px"
    }
  }, [_c('el-col', {
    attrs: {
      "span": 6
    }
  }, [_vm._v(_vm._s(_vm.setItem.background))]), _c('el-col', {
    attrs: {
      "span": 3
    }
  }, [_c('el-color-picker', {
    attrs: {
      "size": "mini"
    },
    model: {
      value: _vm.cursor.backgroundColor,
      callback: function ($$v) {
        _vm.$set(_vm.cursor, "backgroundColor", $$v);
      },
      expression: "cursor.backgroundColor"
    }
  })], 1)], 1), _c('chart-base-select', {
    attrs: {
      "selectOption": _vm.triggerMethodArr,
      "selectValue": _vm.cursor.triggerOn
    },
    on: {
      "update:selectValue": function ($event) {
        return _vm.$set(_vm.cursor, "triggerOn", $event);
      },
      "update:select-value": function ($event) {
        return _vm.$set(_vm.cursor, "triggerOn", $event);
      }
    }
  }, [_c('div', {
    attrs: {
      "slot": "select"
    },
    slot: "select"
  }, [_vm._v(_vm._s(_vm.setItem.trigger))])]), _c('chart-base-select', {
    attrs: {
      "selectOption": _vm.triggerTypeArr,
      "selectValue": _vm.cursor.triggerType
    },
    on: {
      "update:selectValue": function ($event) {
        return _vm.$set(_vm.cursor, "triggerType", $event);
      },
      "update:select-value": function ($event) {
        return _vm.$set(_vm.cursor, "triggerType", $event);
      }
    }
  }, [_c('div', {
    attrs: {
      "slot": "select"
    },
    slot: "select"
  }, [_vm._v(_vm._s(_vm.setItem.type))])]), _vm.cursor.triggerType != 'item' ? _c('div', [_c('chart-base-select', {
    attrs: {
      "selectOption": _vm.lineStyleOption,
      "selectValue": _vm.cursor.axisPointer.style.type
    },
    on: {
      "update:selectValue": function ($event) {
        return _vm.$set(_vm.cursor.axisPointer.style, "type", $event);
      },
      "update:select-value": function ($event) {
        return _vm.$set(_vm.cursor.axisPointer.style, "type", $event);
      }
    }
  }, [_c('div', {
    attrs: {
      "slot": "select"
    },
    slot: "select"
  }, [_vm._v(_vm._s(_vm.setItem.lineType))])]), _c('chart-base-select', {
    attrs: {
      "selectOption": _vm.lineWeightOption,
      "selectValue": _vm.cursor.axisPointer.style.width
    },
    on: {
      "update:selectValue": function ($event) {
        return _vm.$set(_vm.cursor.axisPointer.style, "width", $event);
      },
      "update:select-value": function ($event) {
        return _vm.$set(_vm.cursor.axisPointer.style, "width", $event);
      }
    }
  }, [_c('div', {
    attrs: {
      "slot": "select"
    },
    slot: "select"
  }, [_vm._v(_vm._s(_vm.setItem.lineWidth))])]), _c('el-row', {
    staticStyle: {
      "margin-top": "15px"
    }
  }, [_c('el-col', {
    attrs: {
      "span": 6
    }
  }, [_vm._v(_vm._s(_vm.setItem.color))]), _c('el-col', {
    attrs: {
      "span": 3
    }
  }, [_c('el-color-picker', {
    attrs: {
      "size": "mini"
    },
    model: {
      value: _vm.cursor.axisPointer.style.color,
      callback: function ($$v) {
        _vm.$set(_vm.cursor.axisPointer.style, "color", $$v);
      },
      expression: "cursor.axisPointer.style.color"
    }
  })], 1)], 1), _c('chart-base-select', {
    attrs: {
      "selectOption": _vm.axisPointerArr,
      "selectValue": _vm.cursor.axisPointer.type
    },
    on: {
      "update:selectValue": function ($event) {
        return _vm.$set(_vm.cursor.axisPointer, "type", $event);
      },
      "update:select-value": function ($event) {
        return _vm.$set(_vm.cursor.axisPointer, "type", $event);
      }
    }
  }, [_c('div', {
    attrs: {
      "slot": "select"
    },
    slot: "select"
  }, [_vm._v(_vm._s(_vm.setItem.axisType))])])], 1) : _vm._e(), _vm.cursor.triggerType == 'item' ? _c('chart-base-select', {
    attrs: {
      "selectOption": _vm.posOption,
      "selectValue": _vm.cursor.position
    },
    on: {
      "update:selectValue": function ($event) {
        return _vm.$set(_vm.cursor, "position", $event);
      },
      "update:select-value": function ($event) {
        return _vm.$set(_vm.cursor, "position", $event);
      }
    }
  }, [_c('div', {
    attrs: {
      "slot": "select"
    },
    slot: "select"
  }, [_vm._v(_vm._s(_vm.setItem.position))])]) : _vm._e(), _c('el-row', {
    staticStyle: {
      "margin-top": "15px"
    }
  }, [_c('el-col', {
    attrs: {
      "span": 2
    }
  }, [_c('i', {
    staticClass: "el-icon-menu"
  })]), _c('el-col', {
    attrs: {
      "span": 8
    }
  }, [_vm._v(_vm._s(_vm.setItem.suffix))])], 1), _vm._l(_vm.seriesOption, function (item, i) {
    return _c('el-row', {
      key: i,
      staticStyle: {
        "margin-top": "15px"
      }
    }, [_c('el-col', {
      attrs: {
        "span": 6
      }
    }, [_vm._v(_vm._s(item))]), _c('el-col', {
      attrs: {
        "span": 4
      }
    }, [_c('chart-base-input', {
      attrs: {
        "hideCol": true,
        "placeholder": _vm.setItem.placeholder
      }
    })], 1), _c('el-col', {
      attrs: {
        "span": 6
      }
    }, [_c('chart-base-select', {
      attrs: {
        "tooltip": _vm.setItem.ratio,
        "selectOption": _vm.ratioOption,
        "selectValue": _vm.cursor.format[i].ratio,
        "hideCol": true
      },
      on: {
        "update:selectValue": function ($event) {
          return _vm.$set(_vm.cursor.format[i], "ratio", $event);
        },
        "update:select-value": function ($event) {
          return _vm.$set(_vm.cursor.format[i], "ratio", $event);
        }
      }
    })], 1), _c('el-col', {
      attrs: {
        "span": 6
      }
    }, [_c('chart-base-select', {
      attrs: {
        "tooltip": _vm.setItem.digit,
        "selectOption": _vm.digitOption,
        "selectValue": _vm.cursor.format[i].digit,
        "hideCol": true
      },
      on: {
        "update:selectValue": function ($event) {
          return _vm.$set(_vm.cursor.format[i], "digit", $event);
        },
        "update:select-value": function ($event) {
          return _vm.$set(_vm.cursor.format[i], "digit", $event);
        }
      }
    })], 1)], 1);
  })], 2);
};

var ChartCursorvue_type_template_id_754b950d_staticRenderFns = [];

// CONCATENATED MODULE: ./src/packages/ChartMix/chartChips/chart/ChartCursor.vue?vue&type=template&id=754b950d&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/ChartMix/chartChips/chart/ChartCursor.vue?vue&type=script&lang=js&




/* harmony default export */ var ChartCursorvue_type_script_lang_js_ = ({
  components: { ...importComp(importUtil_namespaceObject)
  },
  props: {
    router: String,
    chartAllType: String,
    cursorOption: Object,
    lang: {
      type: String,
      default: "cn"
    }
  },

  data() {
    return {
      cursor: {},
      //鼠标提示设置
      fontSizeOption: deepCopy(fontSizeOption),
      lineStyleOption: deepCopy(lineStyleOption),
      lineWeightOption: deepCopy(lineWeightOption),
      posOption: deepCopy(posOption),
      ratioOption: deepCopy(ratioOption),
      digitOption: deepCopy(digitOption),
      triggerTypeArr: [{
        value: "item",
        label: "数据项图形触发"
      }, {
        value: "axis",
        label: "坐标轴触发"
      }],
      axisPointerArr: [{
        value: "line",
        label: "直线指示器"
      }, {
        value: "shadow",
        label: "阴影指示器"
      }, {
        value: "cross",
        label: "十字准星指示器"
      }],
      triggerMethodArr: [{
        value: "mousemove",
        label: "鼠标移动"
      }, {
        value: "click",
        label: "单击左键/鼠标划过"
      }, {
        value: "mousemove|click",
        label: "同时触发"
      }],
      setItem: {}
    };
  },

  mounted() {
    if (this.lang == "ch") {
      this.setItem = cn["chartCursor"];
      return;
    }

    this.setItem = en["chartCursor"];
  },

  watch: {
    cursorOption: {
      handler(newVal) {
        if (isEqual_default.a(this.cursor, newVal)) {
          return;
        }

        this.cursor = deepCopy(newVal);
      },

      immediate: true,
      deep: true
    },
    cursor: {
      handler: function (newVal, oldVal) {
        // 改变值就重新渲染
        if (oldVal) {
          this.changeCursor();
        }
      },
      deep: true,
      immediate: true
    },

    lang(val) {
      if (val == "ch") {
        this.setItem = cn["chartCursor"];
        return;
      }

      this.setItem = en["chartCursor"];
    }

  },
  computed: {
    seriesOption() {
      var arr = [];

      for (var i = 0; i < this.cursor.format.length; i++) {
        arr.push(this.cursor.format[i].seriesName);
      }

      return arr;
    }

  },
  methods: { ...external_Vuex_["mapActions"]("chartSetting", ["updateChartItem"]),

    changeCursor() {
      const updateObj = {
        updateObj: deepCopy(this.cursor),
        router: this.router
      };
      this.updateChartItem(updateObj);
    }

  }
});
// CONCATENATED MODULE: ./src/packages/ChartMix/chartChips/chart/ChartCursor.vue?vue&type=script&lang=js&
 /* harmony default export */ var chart_ChartCursorvue_type_script_lang_js_ = (ChartCursorvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/packages/ChartMix/chartChips/chart/ChartCursor.vue





/* normalize component */

var ChartCursor_component = normalizeComponent(
  chart_ChartCursorvue_type_script_lang_js_,
  ChartCursorvue_type_template_id_754b950d_render,
  ChartCursorvue_type_template_id_754b950d_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ChartCursor = (ChartCursor_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"23c09074-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/ChartMix/chartChips/chart/ChartLegend.vue?vue&type=template&id=57cb40f1&
var ChartLegendvue_type_template_id_57cb40f1_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('el-collapse-item', {
    attrs: {
      "name": "3"
    }
  }, [_c('template', {
    slot: "title"
  }, [_vm._v(" " + _vm._s(_vm.setItem.modalName) + " "), _c('i', {
    staticClass: "iconfont icon-biaoti"
  })]), _c('chart-base-switch', {
    attrs: {
      "switchValue": _vm.legend.show
    },
    on: {
      "update:switchValue": function ($event) {
        return _vm.$set(_vm.legend, "show", $event);
      },
      "update:switch-value": function ($event) {
        return _vm.$set(_vm.legend, "show", $event);
      }
    }
  }, [_c('div', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("显示图例")])]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.legend.show,
      expression: "legend.show"
    }]
  }, [_c('chart-base-label', {
    attrs: {
      "router": _vm.router + '/label',
      "baseLabelOption": _vm.legend.label
    },
    on: {
      "update:baseLabelOption": function ($event) {
        return _vm.$set(_vm.legend, "label", $event);
      },
      "update:base-label-option": function ($event) {
        return _vm.$set(_vm.legend, "label", $event);
      }
    }
  }, [_c('div', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("图例样式")])]), _c('chart-base-select', {
    attrs: {
      "selectOption": _vm.positionOption,
      "selectValue": _vm.legend.position.value
    },
    on: {
      "update:selectValue": function ($event) {
        return _vm.$set(_vm.legend.position, "value", $event);
      },
      "update:select-value": function ($event) {
        return _vm.$set(_vm.legend.position, "value", $event);
      }
    }
  }, [_c('div', {
    attrs: {
      "slot": "select"
    },
    slot: "select"
  }, [_vm._v("图例位置")])]), _vm.legend.position.value === 'custom' ? _c('el-row', [_c('chart-base-slider', {
    attrs: {
      "baseSliderOption": _vm.legend.position.offsetX,
      "unit": '%',
      "content": '滑动修改水平偏移量'
    },
    on: {
      "update:baseSliderOption": function ($event) {
        return _vm.$set(_vm.legend.position, "offsetX", $event);
      },
      "update:base-slider-option": function ($event) {
        return _vm.$set(_vm.legend.position, "offsetX", $event);
      }
    }
  }), _c('chart-base-slider', {
    attrs: {
      "baseSliderOption": _vm.legend.position.offsetY,
      "unit": '%',
      "content": '滑动修改垂直偏移量'
    },
    on: {
      "update:baseSliderOption": function ($event) {
        return _vm.$set(_vm.legend.position, "offsetY", $event);
      },
      "update:base-slider-option": function ($event) {
        return _vm.$set(_vm.legend.position, "offsetY", $event);
      }
    }
  })], 1) : _vm._e(), _c('chart-base-select', {
    attrs: {
      "selectOption": _vm.dirOptions,
      "selectValue": _vm.legend.position.direction
    },
    on: {
      "update:selectValue": function ($event) {
        return _vm.$set(_vm.legend.position, "direction", $event);
      },
      "update:select-value": function ($event) {
        return _vm.$set(_vm.legend.position, "direction", $event);
      }
    }
  }, [_c('div', {
    attrs: {
      "slot": "select"
    },
    slot: "select"
  }, [_vm._v("图例朝向")])]), _c('chart-base-select', {
    attrs: {
      "selectOption": _vm.sizeOption,
      "selectValue": _vm.legend.width.value
    },
    on: {
      "update:selectValue": function ($event) {
        return _vm.$set(_vm.legend.width, "value", $event);
      },
      "update:select-value": function ($event) {
        return _vm.$set(_vm.legend.width, "value", $event);
      }
    }
  }, [_c('div', {
    attrs: {
      "slot": "select"
    },
    slot: "select"
  }, [_vm._v("图例宽度")])]), _c('chart-base-select', {
    attrs: {
      "selectOption": _vm.sizeOption,
      "selectValue": _vm.legend.height.value
    },
    on: {
      "update:selectValue": function ($event) {
        return _vm.$set(_vm.legend.height, "value", $event);
      },
      "update:select-value": function ($event) {
        return _vm.$set(_vm.legend.height, "value", $event);
      }
    }
  }, [_c('div', {
    attrs: {
      "slot": "select"
    },
    slot: "select"
  }, [_vm._v("图例高度")])]), _vm.legend.width.value == 'custom' ? _c('chart-base-slider', {
    attrs: {
      "baseSliderOption": _vm.legend.width.cusSize,
      "unit": 'px',
      "content": '滑动修改图例宽度'
    },
    on: {
      "update:baseSliderOption": function ($event) {
        return _vm.$set(_vm.legend.width, "cusSize", $event);
      },
      "update:base-slider-option": function ($event) {
        return _vm.$set(_vm.legend.width, "cusSize", $event);
      }
    }
  }) : _vm._e(), _vm.legend.height.value == 'custom' ? _c('chart-base-slider', {
    attrs: {
      "baseSliderOption": _vm.legend.height.cusSize,
      "unit": 'px',
      "content": '滑动修改图例高度'
    },
    on: {
      "update:baseSliderOption": function ($event) {
        return _vm.$set(_vm.legend.height, "cusSize", $event);
      },
      "update:base-slider-option": function ($event) {
        return _vm.$set(_vm.legend.height, "cusSize", $event);
      }
    }
  }) : _vm._e(), _c('chart-base-select', {
    attrs: {
      "selectOption": _vm.distanceOption,
      "selectValue": _vm.legend.distance.value
    },
    on: {
      "update:selectValue": function ($event) {
        return _vm.$set(_vm.legend.distance, "value", $event);
      },
      "update:select-value": function ($event) {
        return _vm.$set(_vm.legend.distance, "value", $event);
      }
    }
  }, [_c('div', {
    attrs: {
      "slot": "select"
    },
    slot: "select"
  }, [_vm._v("图例间距")])]), _vm.legend.distance.value == 'custom' ? _c('chart-base-slider', {
    attrs: {
      "baseSliderOption": _vm.legend.distance.cusGap,
      "unit": 'px',
      "content": '滑动修改图例间距'
    },
    on: {
      "update:baseSliderOption": function ($event) {
        return _vm.$set(_vm.legend.distance, "cusGap", $event);
      },
      "update:base-slider-option": function ($event) {
        return _vm.$set(_vm.legend.distance, "cusGap", $event);
      }
    }
  }, [_c('div', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v("图例间距")])]) : _vm._e()], 1)], 2);
};

var ChartLegendvue_type_template_id_57cb40f1_staticRenderFns = [];

// CONCATENATED MODULE: ./src/packages/ChartMix/chartChips/chart/ChartLegend.vue?vue&type=template&id=57cb40f1&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/ChartMix/chartChips/chart/ChartLegend.vue?vue&type=script&lang=js&




/* harmony default export */ var ChartLegendvue_type_script_lang_js_ = ({
  props: {
    legendOption: Object,
    chartAllType: String,
    router: String,
    lang: {
      type: String,
      default: "cn"
    }
  },

  data() {
    return {
      legend: {},
      //图例设置
      positionOption: deepCopy(positionOption),
      sizeOption: deepCopy(sizeOption),
      distanceOption: deepCopy(distanceOption),
      dirOptions: [{
        value: "horizontal",
        label: "水平"
      }, {
        value: "vertical",
        label: "垂直"
      }],
      setItem: {}
    };
  },

  components: { ...importComp(importUtil_namespaceObject)
  },

  mounted() {
    if (this.lang == "ch") {
      this.setItem = cn["chartLegend"];
      return;
    }

    this.setItem = en["chartLegend"];
  },

  watch: {
    legendOption: {
      handler(newVal) {
        if (isEqual_default.a(this.legend, newVal)) {
          return;
        }

        this.legend = deepCopy(newVal);
      },

      immediate: true,
      deep: true
    },
    legend: {
      handler: function (newVal, oldVal) {
        // 改变值就重新渲染
        if (oldVal) {
          this.changeLegend();
        }
      },
      deep: true,
      immediate: true
    },

    lang(val) {
      if (val == "ch") {
        this.setItem = cn["chartLegend"];
        return;
      }

      this.setItem = en["chartLegend"];
    }

  },
  methods: { ...external_Vuex_["mapActions"]("chartSetting", ["updateChartItem"]),

    changeLegend() {
      const updateObj = {
        updateObj: deepCopy(this.legend),
        router: this.router
      };
      this.updateChartItem(updateObj);
    }

  }
});
// CONCATENATED MODULE: ./src/packages/ChartMix/chartChips/chart/ChartLegend.vue?vue&type=script&lang=js&
 /* harmony default export */ var chart_ChartLegendvue_type_script_lang_js_ = (ChartLegendvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/packages/ChartMix/chartChips/chart/ChartLegend.vue





/* normalize component */

var ChartLegend_component = normalizeComponent(
  chart_ChartLegendvue_type_script_lang_js_,
  ChartLegendvue_type_template_id_57cb40f1_render,
  ChartLegendvue_type_template_id_57cb40f1_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ChartLegend = (ChartLegend_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"23c09074-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/ChartMix/chartChips/chart/ChartAxis.vue?vue&type=template&id=73317029&
var ChartAxisvue_type_template_id_73317029_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('el-collapse-item', {
    attrs: {
      "name": "6"
    }
  }, [_c('template', {
    slot: "title"
  }, [_vm._v(" " + _vm._s(_vm.setItem.modalName) + " "), _c('i', {
    staticClass: "iconfont icon-biaoti"
  })]), _c('chart-base-select', {
    attrs: {
      "selectOption": _vm.axisGroup,
      "selectValue": _vm.axis.axisType
    },
    on: {
      "update:selectValue": function ($event) {
        return _vm.$set(_vm.axis, "axisType", $event);
      },
      "update:select-value": function ($event) {
        return _vm.$set(_vm.axis, "axisType", $event);
      }
    }
  }, [_c('div', {
    attrs: {
      "slot": "select"
    },
    slot: "select"
  }, [_vm._v(_vm._s(_vm.setItem.select))])]), _c('chart-base-switch', {
    attrs: {
      "switchValue": _vm.series.show
    },
    on: {
      "update:switchValue": function ($event) {
        return _vm.$set(_vm.series, "show", $event);
      },
      "update:switch-value": function ($event) {
        return _vm.$set(_vm.series, "show", $event);
      }
    }
  }, [_c('div', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v(_vm._s(_vm.series.name))])]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.series.show,
      expression: "series.show"
    }]
  }, [_c('chart-base-input', {
    attrs: {
      "inputValue": _vm.series.title.text,
      "placeholder": _vm.setItem.placeholder
    },
    on: {
      "update:inputValue": function ($event) {
        return _vm.$set(_vm.series.title, "text", $event);
      },
      "update:input-value": function ($event) {
        return _vm.$set(_vm.series.title, "text", $event);
      }
    }
  }, [_c('div', {
    attrs: {
      "slot": "input"
    },
    slot: "input"
  }, [_vm._v(_vm._s(_vm.setItem.text))])]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.series.title.text,
      expression: "series.title.text"
    }],
    staticStyle: {
      "margin-top": "15px"
    }
  }, [_c('chart-base-label', {
    attrs: {
      "router": _vm.router + '/label',
      "baseLabelOption": _vm.series.title.label
    },
    on: {
      "update:baseLabelOption": function ($event) {
        return _vm.$set(_vm.series.title, "label", $event);
      },
      "update:base-label-option": function ($event) {
        return _vm.$set(_vm.series.title, "label", $event);
      }
    }
  }, [_c('div', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v(_vm._s(_vm.setItem.label))])]), _c('chart-base-select', {
    attrs: {
      "selectOption": _vm.fzPosOption,
      "selectValue": _vm.series.title.fzPosition
    },
    on: {
      "update:selectValue": function ($event) {
        return _vm.$set(_vm.series.title, "fzPosition", $event);
      },
      "update:select-value": function ($event) {
        return _vm.$set(_vm.series.title, "fzPosition", $event);
      }
    }
  }, [_c('div', {
    attrs: {
      "slot": "select"
    },
    slot: "select"
  }, [_vm._v(_vm._s(_vm.setItem.align))])])], 1), _c('chart-base-switch', {
    attrs: {
      "switchValue": _vm.series.inverse
    },
    on: {
      "update:switchValue": function ($event) {
        return _vm.$set(_vm.series, "inverse", $event);
      },
      "update:switch-value": function ($event) {
        return _vm.$set(_vm.series, "inverse", $event);
      }
    }
  }, [_c('div', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v(_vm._s(_vm.setItem.reverse))])]), _c('chart-base-slider', {
    attrs: {
      "hideCol": true,
      "max": 10,
      "baseSliderOption": _vm.series.tickLabel.optimize,
      "unit": '个',
      "content": _vm.setItem.content
    },
    on: {
      "update:baseSliderOption": function ($event) {
        return _vm.$set(_vm.series.tickLabel, "optimize", $event);
      },
      "update:base-slider-option": function ($event) {
        return _vm.$set(_vm.series.tickLabel, "optimize", $event);
      }
    }
  }, [_c('div', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v(_vm._s(_vm.setItem.intenval))])]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.series.title.text,
      expression: "series.title.text"
    }]
  }, [_c('chart-base-slider', {
    attrs: {
      "hideCol": true,
      "baseSliderOption": _vm.series.title.nameGap,
      "unit": 'px',
      "content": _vm.setItem.content1
    },
    on: {
      "update:baseSliderOption": function ($event) {
        return _vm.$set(_vm.series.title, "nameGap", $event);
      },
      "update:base-slider-option": function ($event) {
        return _vm.$set(_vm.series.title, "nameGap", $event);
      }
    }
  }, [_c('div', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v(_vm._s(_vm.setItem.gap))])]), _c('chart-base-slider', {
    attrs: {
      "hideCol": true,
      "format": _vm.formatRotation + '',
      "max": 180,
      "min": -180,
      "baseSliderOption": _vm.series.title.rotate,
      "unit": '°',
      "content": _vm.setItem.content2
    },
    on: {
      "update:baseSliderOption": function ($event) {
        return _vm.$set(_vm.series.title, "rotate", $event);
      },
      "update:base-slider-option": function ($event) {
        return _vm.$set(_vm.series.title, "rotate", $event);
      }
    }
  }, [_c('div', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v(_vm._s(_vm.setItem.title))])])], 1), _c('chart-base-switch', {
    attrs: {
      "switchValue": _vm.series.tickLine.show
    },
    on: {
      "update:switchValue": function ($event) {
        return _vm.$set(_vm.series.tickLine, "show", $event);
      },
      "update:switch-value": function ($event) {
        return _vm.$set(_vm.series.tickLine, "show", $event);
      }
    }
  }, [_c('div', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v(_vm._s(_vm.setItem.showLine))])]), _c('chart-base-slider', {
    attrs: {
      "hideCol": true,
      "min": 1,
      "baseSliderOption": _vm.series.tickLine.width,
      "unit": 'px',
      "content": _vm.setItem.content3
    },
    on: {
      "update:baseSliderOption": function ($event) {
        return _vm.$set(_vm.series.tickLine, "width", $event);
      },
      "update:base-slider-option": function ($event) {
        return _vm.$set(_vm.series.tickLine, "width", $event);
      }
    }
  }, [_c('div', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v(_vm._s(_vm.setItem.lineWidth))])]), _c('el-row', {
    staticStyle: {
      "margin-top": "15px"
    }
  }, [_c('el-col', {
    staticClass: "title",
    attrs: {
      "span": 7
    }
  }, [_vm._v(_vm._s(_vm.setItem.lineColor))]), _c('el-col', {
    attrs: {
      "push": 14,
      "span": 3
    }
  }, [_c('el-tooltip', {
    attrs: {
      "open-delay": 500,
      "content": _vm.setItem.lineColor,
      "effect": "dark",
      "placement": "bottom"
    }
  }, [_c('el-color-picker', {
    attrs: {
      "size": "mini"
    },
    model: {
      value: _vm.series.tickLine.color,
      callback: function ($$v) {
        _vm.$set(_vm.series.tickLine, "color", $$v);
      },
      expression: "series.tickLine.color"
    }
  })], 1)], 1)], 1), _c('chart-base-switch', {
    attrs: {
      "switchValue": _vm.series.tick.show
    },
    on: {
      "update:switchValue": function ($event) {
        return _vm.$set(_vm.series.tick, "show", $event);
      },
      "update:switch-value": function ($event) {
        return _vm.$set(_vm.series.tick, "show", $event);
      }
    }
  }, [_c('div', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v(_vm._s(_vm.setItem.showTick))])]), _c('chart-base-select', {
    attrs: {
      "selectOption": _vm.orient,
      "selectValue": _vm.series.tick.position
    },
    on: {
      "update:selectValue": function ($event) {
        return _vm.$set(_vm.series.tick, "position", $event);
      },
      "update:select-value": function ($event) {
        return _vm.$set(_vm.series.tick, "position", $event);
      }
    }
  }, [_c('div', {
    attrs: {
      "slot": "select"
    },
    slot: "select"
  }, [_vm._v(_vm._s(_vm.setItem.position))])]), _c('chart-base-slider', {
    attrs: {
      "hideCol": true,
      "min": 1,
      "baseSliderOption": _vm.series.tick.length,
      "unit": 'px',
      "content": _vm.setItem.content4
    },
    on: {
      "update:baseSliderOption": function ($event) {
        return _vm.$set(_vm.series.tick, "length", $event);
      },
      "update:base-slider-option": function ($event) {
        return _vm.$set(_vm.series.tick, "length", $event);
      }
    }
  }, [_c('div', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v(_vm._s(_vm.setItem.tickLength))])]), _c('chart-base-slider', {
    attrs: {
      "hideCol": true,
      "max": 20,
      "min": 1,
      "baseSliderOption": _vm.series.tick.width,
      "unit": 'px',
      "content": _vm.setItem.content5
    },
    on: {
      "update:baseSliderOption": function ($event) {
        return _vm.$set(_vm.series.tick, "width", $event);
      },
      "update:base-slider-option": function ($event) {
        return _vm.$set(_vm.series.tick, "width", $event);
      }
    }
  }, [_c('div', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v(_vm._s(_vm.setItem.tickWidth))])]), _c('el-row', {
    staticStyle: {
      "margin-top": "15px"
    }
  }, [_c('el-col', {
    staticClass: "title",
    attrs: {
      "span": 6
    }
  }, [_vm._v(_vm._s(_vm.setItem.tickColor))]), _c('el-col', {
    attrs: {
      "push": 14,
      "span": 4
    }
  }, [_c('el-tooltip', {
    attrs: {
      "open-delay": 500,
      "content": _vm.setItem.tickColor,
      "effect": "dark",
      "placement": "bottom"
    }
  }, [_c('el-color-picker', {
    attrs: {
      "size": "mini"
    },
    model: {
      value: _vm.series.tick.color,
      callback: function ($$v) {
        _vm.$set(_vm.series.tick, "color", $$v);
      },
      expression: "series.tick.color"
    }
  })], 1)], 1)], 1), _c('chart-base-switch', {
    attrs: {
      "switchValue": _vm.series.tickLabel.show
    },
    on: {
      "update:switchValue": function ($event) {
        return _vm.$set(_vm.series.tickLabel, "show", $event);
      },
      "update:switch-value": function ($event) {
        return _vm.$set(_vm.series.tickLabel, "show", $event);
      }
    }
  }, [_c('div', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v(_vm._s(_vm.setItem.showLabel))])]), _c('chart-base-slider', {
    attrs: {
      "hideCol": true,
      "format": _vm.formatRotation,
      "max": 180,
      "min": -180,
      "baseSliderOption": _vm.series.tickLabel.rotate,
      "unit": '°',
      "content": _vm.setItem.content6
    },
    on: {
      "update:baseSliderOption": function ($event) {
        return _vm.$set(_vm.series.tickLabel, "rotate", $event);
      },
      "update:base-slider-option": function ($event) {
        return _vm.$set(_vm.series.tickLabel, "rotate", $event);
      }
    }
  }, [_c('div', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v(_vm._s(_vm.setItem.rotate))])]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.showLabel,
      expression: "showLabel"
    }]
  }, [_c('chart-base-input', {
    attrs: {
      "type": 'text',
      "inputValue": _vm.series.tickLabel.min,
      "placeholder": _vm.setItem.content7
    },
    on: {
      "update:inputValue": function ($event) {
        return _vm.$set(_vm.series.tickLabel, "min", $event);
      },
      "update:input-value": function ($event) {
        return _vm.$set(_vm.series.tickLabel, "min", $event);
      }
    }
  }, [_c('div', {
    attrs: {
      "slot": "input"
    },
    slot: "input"
  }, [_vm._v(_vm._s(_vm.setItem.min))])]), _c('chart-base-input', {
    attrs: {
      "type": 'text',
      "inputValue": _vm.series.tickLabel.max,
      "placeholder": _vm.setItem.content8
    },
    on: {
      "update:inputValue": function ($event) {
        return _vm.$set(_vm.series.tickLabel, "max", $event);
      },
      "update:input-value": function ($event) {
        return _vm.$set(_vm.series.tickLabel, "max", $event);
      }
    }
  }, [_c('div', {
    attrs: {
      "slot": "input"
    },
    slot: "input"
  }, [_vm._v(_vm._s(_vm.setItem.max))])]), _c('chart-base-select', {
    attrs: {
      "selectOption": _vm.ratioOption,
      "selectValue": _vm.series.tickLabel.ratio
    },
    on: {
      "update:selectValue": function ($event) {
        return _vm.$set(_vm.series.tickLabel, "ratio", $event);
      },
      "update:select-value": function ($event) {
        return _vm.$set(_vm.series.tickLabel, "ratio", $event);
      }
    }
  }, [_c('div', {
    attrs: {
      "slot": "select"
    },
    slot: "select"
  }, [_vm._v(_vm._s(_vm.setItem.ratio))])]), _c('chart-base-select', {
    attrs: {
      "selectOption": _vm.digitOption,
      "selectValue": _vm.series.tickLabel.digit
    },
    on: {
      "update:selectValue": function ($event) {
        return _vm.$set(_vm.series.tickLabel, "digit", $event);
      },
      "update:select-value": function ($event) {
        return _vm.$set(_vm.series.tickLabel, "digit", $event);
      }
    }
  }, [_c('div', {
    attrs: {
      "slot": "select"
    },
    slot: "select"
  }, [_vm._v(_vm._s(_vm.setItem.digit))])])], 1), _c('chart-base-input', {
    attrs: {
      "inputValue": _vm.series.tickLabel.prefix,
      "placeholder": _vm.setItem.content9
    },
    on: {
      "update:inputValue": function ($event) {
        return _vm.$set(_vm.series.tickLabel, "prefix", $event);
      },
      "update:input-value": function ($event) {
        return _vm.$set(_vm.series.tickLabel, "prefix", $event);
      }
    }
  }, [_c('div', {
    attrs: {
      "slot": "input"
    },
    slot: "input"
  }, [_vm._v(_vm._s(_vm.setItem.prefix))])]), _c('chart-base-input', {
    attrs: {
      "inputValue": _vm.series.tickLabel.suffix,
      "placeholder": _vm.setItem.content10
    },
    on: {
      "update:inputValue": function ($event) {
        return _vm.$set(_vm.series.tickLabel, "suffix", $event);
      },
      "update:input-value": function ($event) {
        return _vm.$set(_vm.series.tickLabel, "suffix", $event);
      }
    }
  }, [_c('div', {
    attrs: {
      "slot": "input"
    },
    slot: "input"
  }, [_vm._v(_vm._s(_vm.setItem.suffix))])]), _c('chart-base-switch', {
    attrs: {
      "switchValue": _vm.series.netLine.show
    },
    on: {
      "update:switchValue": function ($event) {
        return _vm.$set(_vm.series.netLine, "show", $event);
      },
      "update:switch-value": function ($event) {
        return _vm.$set(_vm.series.netLine, "show", $event);
      }
    }
  }, [_c('div', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v(_vm._s(_vm.setItem.showNet))])]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.series.netLine.show,
      expression: "series.netLine.show"
    }]
  }, [_c('chart-base-slider', {
    attrs: {
      "hideCol": true,
      "max": 20,
      "min": 1,
      "baseSliderOption": _vm.series.netLine.width,
      "unit": 'px',
      "content": _vm.setItem.content11
    },
    on: {
      "update:baseSliderOption": function ($event) {
        return _vm.$set(_vm.series.netLine, "width", $event);
      },
      "update:base-slider-option": function ($event) {
        return _vm.$set(_vm.series.netLine, "width", $event);
      }
    }
  }, [_c('div', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v(_vm._s(_vm.setItem.netWidth))])]), _c('chart-base-select', {
    attrs: {
      "selectOption": _vm.lineStyleOption,
      "selectValue": _vm.series.netLine.type
    },
    on: {
      "update:selectValue": function ($event) {
        return _vm.$set(_vm.series.netLine, "type", $event);
      },
      "update:select-value": function ($event) {
        return _vm.$set(_vm.series.netLine, "type", $event);
      }
    }
  }, [_c('div', {
    attrs: {
      "slot": "select"
    },
    slot: "select"
  }, [_vm._v(_vm._s(_vm.setItem.netType))])]), _c('el-row', {
    staticStyle: {
      "margin-top": "15px"
    }
  }, [_c('el-col', {
    staticClass: "title",
    attrs: {
      "span": 8
    }
  }, [_vm._v(_vm._s(_vm.setItem.netColor))]), _c('el-col', {
    attrs: {
      "push": 13,
      "span": 3
    }
  }, [_c('el-tooltip', {
    attrs: {
      "open-delay": 500,
      "content": _vm.setItem.netColor,
      "effect": "dark",
      "placement": "bottom"
    }
  }, [_c('el-color-picker', {
    attrs: {
      "label": true,
      "size": "mini"
    },
    model: {
      value: _vm.series.netLine.color,
      callback: function ($$v) {
        _vm.$set(_vm.series.netLine, "color", $$v);
      },
      expression: "series.netLine.color"
    }
  })], 1)], 1)], 1), _c('chart-base-select', {
    attrs: {
      "selectOption": _vm.intervalOption,
      "selectValue": _vm.series.netLine.interval.value
    },
    on: {
      "update:selectValue": function ($event) {
        return _vm.$set(_vm.series.netLine.interval, "value", $event);
      },
      "update:select-value": function ($event) {
        return _vm.$set(_vm.series.netLine.interval, "value", $event);
      }
    }
  }, [_c('div', {
    attrs: {
      "slot": "select"
    },
    slot: "select"
  }, [_vm._v(_vm._s(_vm.setItem.netInterval))])]), _vm.series.netLine.interval.value == 'custom' ? _c('chart-base-slider', {
    attrs: {
      "baseSliderOption": _vm.series.netLine.interval.cusNumber,
      "unit": '个',
      "content": _vm.setItem.content12
    },
    on: {
      "update:baseSliderOption": function ($event) {
        return _vm.$set(_vm.series.netLine.interval, "cusNumber", $event);
      },
      "update:base-slider-option": function ($event) {
        return _vm.$set(_vm.series.netLine.interval, "cusNumber", $event);
      }
    }
  }) : _vm._e()], 1), _c('chart-base-switch', {
    attrs: {
      "switchValue": _vm.series.netArea.show
    },
    on: {
      "update:switchValue": function ($event) {
        return _vm.$set(_vm.series.netArea, "show", $event);
      },
      "update:switch-value": function ($event) {
        return _vm.$set(_vm.series.netArea, "show", $event);
      }
    }
  }, [_c('div', {
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v(_vm._s(_vm.setItem.showArea))])]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.series.netArea.show,
      expression: "series.netArea.show"
    }]
  }, [_c('chart-base-select', {
    attrs: {
      "selectOption": _vm.intervalOption,
      "selectValue": _vm.series.netArea.interval.value
    },
    on: {
      "update:selectValue": function ($event) {
        return _vm.$set(_vm.series.netArea.interval, "value", $event);
      },
      "update:select-value": function ($event) {
        return _vm.$set(_vm.series.netArea.interval, "value", $event);
      }
    }
  }, [_c('div', {
    attrs: {
      "slot": "select"
    },
    slot: "select"
  }, [_vm._v(_vm._s(_vm.setItem.areaInterval))])]), _vm.series.netArea.interval.value == 'custom' ? _c('chart-base-slider', {
    attrs: {
      "baseSliderOption": _vm.series.netArea.interval.cusNumber,
      "unit": '个',
      "content": _vm.setItem.content12
    },
    on: {
      "update:baseSliderOption": function ($event) {
        return _vm.$set(_vm.series.netArea.interval, "cusNumber", $event);
      },
      "update:base-slider-option": function ($event) {
        return _vm.$set(_vm.series.netArea.interval, "cusNumber", $event);
      }
    }
  }) : _vm._e(), _c('el-row', {
    staticStyle: {
      "margin-top": "15px"
    }
  }, [_c('el-col', {
    attrs: {
      "span": 6
    }
  }, [_vm._v(_vm._s(_vm.setItem.area1))]), _c('el-col', {
    attrs: {
      "span": 3
    }
  }, [_c('el-color-picker', {
    attrs: {
      "size": "mini"
    },
    model: {
      value: _vm.series.netArea.colorOne,
      callback: function ($$v) {
        _vm.$set(_vm.series.netArea, "colorOne", $$v);
      },
      expression: "series.netArea.colorOne"
    }
  })], 1), _c('el-col', {
    attrs: {
      "span": 6
    }
  }, [_vm._v(_vm._s(_vm.setItem.area2))]), _c('el-col', {
    attrs: {
      "span": 3
    }
  }, [_c('el-color-picker', {
    attrs: {
      "size": "mini"
    },
    model: {
      value: _vm.series.netArea.colorTwo,
      callback: function ($$v) {
        _vm.$set(_vm.series.netArea, "colorTwo", $$v);
      },
      expression: "series.netArea.colorTwo"
    }
  })], 1)], 1)], 1)], 1)], 2);
};

var ChartAxisvue_type_template_id_73317029_staticRenderFns = [];

// CONCATENATED MODULE: ./src/packages/ChartMix/chartChips/chart/ChartAxis.vue?vue&type=template&id=73317029&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/ChartMix/chartChips/chart/ChartAxis.vue?vue&type=script&lang=js&




/* harmony default export */ var ChartAxisvue_type_script_lang_js_ = ({
  name: "ChartXaxis",
  props: {
    chartAllType: String,
    axisOption: Object,
    router: String,
    lang: {
      type: String,
      default: "cn"
    }
  },
  components: { ...importComp(importUtil_namespaceObject)
  },

  data() {
    return {
      axis: {},
      series: {},
      //具体坐标轴配置
      fontSizeOption: "",
      lineStyleOption: "",
      ratioOption: "",
      digitOption: "",
      fzPosOption: [{
        value: "middle",
        label: "居中"
      }, {
        value: "start",
        label: "头部"
      }, {
        value: "end",
        label: "尾部"
      }, {
        value: "hidden",
        label: "隐藏"
      }],
      orient: [{
        label: "朝内",
        value: "inside"
      }, {
        label: "朝外",
        value: "outside"
      }],
      formatRotation: function (val) {
        return val + " °";
      },
      setItem: {}
    };
  },

  mounted() {
    if (this.lang == "ch") {
      this.setItem = cn["chartAxis"];
      return;
    }

    this.setItem = en["chartAxis"];
  },

  watch: {
    axisOption: {
      handler(newVal) {
        if (isEqual_default.a(this.axis, this.axisOption)) {
          return;
        }

        this.axis = deepCopy(this.axisOption);
        this.series = this.axis[newVal.axisType];
        this.fontSizeOption = deepCopy(fontSizeOption);
        this.lineStyleOption = deepCopy(lineStyleOption);
        this.intervalOption = deepCopy(intervalOption);
        this.ratioOption = deepCopy(ratioOption);
        this.digitOption = deepCopy(digitOption);
      },

      immediate: true,
      deep: true
    },
    series: {
      handler: function (newVal, oldVal) {
        // 改变值就重新渲染
        if (oldVal) {
          this.changeAxis();
        }
      },
      deep: true,
      immediate: true
    },

    lang(val) {
      if (val == "ch") {
        this.setItem = cn["chartAxis"];
        return;
      }

      this.setItem = en["chartAxis"];
    }

  },
  computed: {
    chartType() {
      return this.chartAllType.split("|")[1];
    },

    chartStyle() {
      return this.chartAllType.split("|")[2];
    },

    axisGroup() {
      if (this.chartType == "bar" && this.chartStyle != "compare") {
        return [{
          value: "xAxisDown",
          label: "Y轴(左侧垂直)"
        }, {
          value: "xAxisUp",
          label: "Y轴(左侧垂直)"
        }, {
          value: "yAxisLeft",
          label: "X轴(下方水平)"
        }, {
          value: "yAxisRight",
          label: "X轴(上方水平)"
        }];
      } else if (this.chartStyle == "compare") {
        return [{
          value: "xAxisDown",
          label: "Y轴(右侧坐标轴)"
        }, {
          value: "xAxisUp",
          label: "Y轴(左侧坐标轴)"
        }, {
          value: "yAxisLeft",
          label: "X轴(右侧坐标轴)"
        }, {
          value: "yAxisRight",
          label: "X轴(左侧坐标轴)"
        }];
      } else {
        return [{
          value: "xAxisDown",
          label: "X轴(下方水平)"
        }, {
          value: "xAxisUp",
          label: "X轴(上方水平)"
        }, {
          value: "yAxisLeft",
          label: "Y轴(左侧垂直)"
        }, {
          value: "yAxisRight",
          label: "Y轴(右侧垂直)"
        }];
      }
    },

    showLabel() {
      if (this.chartType == "bar" && this.axis.axisType.slice(0, 1) == "x" || this.chartType != "bar" && this.axis.axisType.slice(0, 1) == "y") {
        return true;
      }
    }

  },
  methods: { ...external_Vuex_["mapActions"]("chartSetting", ["updateChartItem"]),

    changeAxis() {
      const updateObj = {
        updateObj: deepCopy(this.series),
        router: this.router + "/" + this.axis.axisType
      };
      this.updateChartItem(updateObj);
    }

  }
});
// CONCATENATED MODULE: ./src/packages/ChartMix/chartChips/chart/ChartAxis.vue?vue&type=script&lang=js&
 /* harmony default export */ var chart_ChartAxisvue_type_script_lang_js_ = (ChartAxisvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/packages/ChartMix/chartChips/chart/ChartAxis.vue





/* normalize component */

var ChartAxis_component = normalizeComponent(
  chart_ChartAxisvue_type_script_lang_js_,
  ChartAxisvue_type_template_id_73317029_render,
  ChartAxisvue_type_template_id_73317029_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ChartAxis = (ChartAxis_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/ChartMix/ChartSetting.vue?vue&type=script&lang=js&
 // const ChartTitle = () => import("./chartChips/chart/ChartTitle");
// const ChartSubTitle = () => import("./chartChips/chart/ChartSubTitle");
// const ChartCursor = () => import("./chartChips/chart/ChartCursor");
// const ChartLegend = () => import("./chartChips/chart/ChartLegend");
// const ChartAxis = () => import("./chartChips/chart/ChartAxis");


 // import { isEqual } from "lodash";











/* harmony default export */ var ChartSettingvue_type_script_lang_js_ = ({
  name: "ChartSetting",
  components: {
    "chart-list": ChartList,
    "chart-title": ChartTitle,
    "chart-sub-title": ChartSubTitle,
    "chart-cursor": ChartCursor,
    "chart-legend": ChartLegend,
    "chart-axis": ChartAxis
  },
  props: {
    chartOptions: {
      type: Object,
      default: null
    },
    lang: {
      type: String,
      default: "cn"
    }
  },

  data() {
    return {
      currentChartType: "echarts|line|default",
      //图表类型
      chart_id: '',
      titleOption: deepCopy(chartComponent.title),
      //标题设置
      subTitleOption: deepCopy(chartComponent.subtitle),
      //标题设置
      cursorOption: deepCopy(chartComponent.tooltip),
      //鼠标提示设置
      legendOption: deepCopy(chartComponent.legend),
      //图例设置
      axisOption: deepCopy(chartComponent.axis),
      //坐标轴设置
      showList: false,
      setItem: {
        echarts: {
          line: {
            default: '默认折线图'
          }
        }
      },
      activeName: 'data'
    };
  },

  mounted() {
    if (this.lang == "ch") {
      this.setItem = cn["chartSetting"];
      return;
    }

    this.setItem = en["chartSetting"];
    console.dir(this.setItem);
  },

  watch: {
    chartOptions: {
      handler: function (chartOption, oldV) {
        //此处必须使用function,不能用箭头函数
        if (chartOption == undefined || !chartOption.hasOwnProperty("chartAllType")) {
          return;
        }

        this.currentChartType = chartOption.chartAllType;
        this.chart_id = chartOption.chart_id;
        this.titleOption = chartOption.defaultOption.title;
        this.subTitleOption = chartOption.defaultOption.subtitle;
        this.cursorOption = chartOption.defaultOption.tooltip;
        this.legendOption = chartOption.defaultOption.legend;
        this.axisOption = chartOption.defaultOption.axis;
      }
    },

    lang(val) {
      if (val == "ch") {
        this.setItem = cn["chartSetting"];
        return;
      }

      this.setItem = en["chartSetting"];
    }

  },
  computed: { ...Object(external_Vuex_["mapState"])("chartSetting", ["chartLists", "currentChartIndex"]),
    currentRangeColCheck: {
      get() {
        if (this.currentChartIndex == null) {
          return {
            exits: false,
            range: [0, 0]
          };
        }

        return this.chartLists[this.currentChartIndex].chartOptions.rangeColCheck;
      },

      set(val) {
        this.updateChartItemChartlistOne({
          key: "rangeColCheck",
          value: val,
          chart_id: this.chart_id
        });
      }

    },
    currentRangeRowCheck: {
      get() {
        if (this.currentChartIndex == null) {
          return {
            exits: false,
            range: [0, 0]
          };
        }

        return this.chartLists[this.currentChartIndex].chartOptions.rangeRowCheck;
      },

      set(val) {
        this.updateChartItemChartlistOne({
          key: "rangeRowCheck",
          value: val,
          chart_id: this.chart_id
        });
      }

    },

    checkRowDisabled() {
      if (this.currentChartIndex == null || !this.chartLists[this.currentChartIndex].chartOptions.chartData || this.chartLists[this.currentChartIndex].chartOptions.chartData.length == 1) {
        return true;
      }

      return false;
    },

    checkColDisabled() {
      if (this.currentChartIndex == null || !this.chartLists[this.currentChartIndex].chartOptions.chartData || this.chartLists[this.currentChartIndex].chartOptions.chartData.length == 1) {
        return true;
      }

      return false;
    },

    currentRangeConfigCheck: {
      get() {
        if (this.currentChartIndex == null) {
          return false;
        }

        return this.chartLists[this.currentChartIndex].chartOptions.rangeConfigCheck;
      },

      set(val) {
        this.updateChartItemChartlistOne({
          key: "rangeConfigCheck",
          value: val,
          chart_id: this.chart_id
        });
      }

    },

    chart_pro() {
      return this.currentChartType.split("|")[0];
    },

    chart_type() {
      return this.currentChartType.split("|")[1];
    },

    chart_style() {
      return this.currentChartType.split("|")[2];
    },

    //图表选项的文本
    chartTypeTxt: function () {
      var head, main, icon;

      if (this.chart_pro == "echarts") {
        head = "echarts";
      } else if (this.chart_pro == "highcharts") {
        head = "highcharts";
      }

      if (this.chart_type == "line") {
        if (this.chart_style == "default") {
          main = this.setItem.echarts.line.default;
        }

        if (this.chart_style == "smooth") {
          main = this.setItem.echarts.line.smooth;
        }

        if (this.chart_style == "label") {
          main = this.setItem.echarts.line.label;
        }

        if (this.chart_style == "doublex") {
          main = "双Y轴折线图";
        }

        if (this.chart_style == "linemix") {
          main = "折线柱状混合图";
        }

        icon = "icon-tubiaozhexiantu";
        return [icon, head + " - " + main];
      } else if (this.chart_type == "area") {
        if (this.chart_style == "default") {
          main = this.setItem.echarts.area.default;
        }

        if (this.chart_style == "stack") {
          main = this.setItem.echarts.area.stack;
        }

        if (this.chart_style == "stackRatio") {
          main = "带标签的堆叠面积图";
        }

        icon = "icon-fsux_tubiao_duijimianjitu";
        return [icon, head + " - " + main];
      } else if (this.chart_type == "column") {
        if (this.chart_style == "default") {
          main = this.setItem.echarts.column.default;
        }

        if (this.chart_style == "stack") {
          main = this.setItem.echarts.column.stack;
        }

        if (this.chart_style == "stackRatio") {
          main = "百分比堆叠柱状图";
        }

        if (this.chart_style == "costComposition") {
          main = "费用构成柱状图";
        }

        if (this.chart_style == "polarStack") {
          main = "极坐标系下的堆叠柱状图";
        }

        if (this.chart_style == "bar3DPunchCard") {
          main = "3D柱状图";
        }

        if (this.chart_style == "contain") {
          main = "比例图";
        }

        if (this.chart_style == "special") {
          main = "显示百分比图";
        }

        if (this.chart_style == "doubleX") {
          main = "双X轴";
        }

        icon = "icon-chart";
        return [icon, head + " - " + main];
      } else if (this.chart_type == "bar") {
        if (this.chart_style == "default") {
          main = this.setItem.echarts.bar.default;
        }

        if (this.chart_style == "stack") {
          main = this.setItem.echarts.bar.stack;
        }

        if (this.chart_style == "stackRatio") {
          main = "百分比堆叠条形图";
        }

        if (this.chart_style == "compare") {
          main = "条形比较图";
        }

        if (this.chart_style == "contain") {
          main = "比例图";
        }

        icon = "icon-fsux_tubiao_duijizhuzhuangtu1";
        return [icon, head + " - " + main];
      } else if (this.chart_type == "pie") {
        if (this.chart_style == "default") {
          main = this.setItem.echarts.pie.default;
        }

        if (this.chart_style == "split") {
          main = this.setItem.echarts.pie.split;
        }

        if (this.chart_style == "ring") {
          main = this.setItem.echarts.pie.ring;
        }

        if (this.chart_style == "ringnest") {
          main = "环形嵌套图";
        }

        if (this.chart_style == "3D") {
          main = "3D饼图";
        }

        if (this.chart_style == "rose") {
          if (this.chart_pro == "echarts") {
            main = "南丁格玫瑰图";
          } else if (this.chart_pro == "highcharts") {
            main = "可变宽度的环形图";
          }
        }

        icon = "icon-fsux_tubiao_nandingmeiguitu";
        return [icon, head + " - " + main];
      }

      if (this.chart_type == "scatter") {
        if (this.chart_style == "default") {
          main = "默认散点图";
        }

        if (this.chart_style == "label") {
          main = "带标签的散点图";
        }

        if (this.chart_style == "zoom") {
          main = "自由缩放散点图";
        }

        if (this.chart_style == "matrix") {
          main = "散点图矩阵";
        }

        icon = "icon-fsux_tubiao_qipaotu";
        return [icon, head + " - " + main];
      }

      if (this.chart_type == "radar") {
        if (this.chart_style == "default") {
          main = "默认雷达图";
        }

        icon = "icon-leidatu";
        return [icon, head + " - " + main];
      } else if (this.chart_type == "funnel") {
        if (this.chart_style == "default") {
          main = "默认漏斗图";
        }

        if (this.chart_style == "inverse") {
          main = "逆漏斗图";
        }

        icon = "icon-fsux_tubiao_loudoutu";
        return [icon, head + " - " + main];
      } else if (this.chart_type == "gauge") {
        if (this.chart_style == "default") {
          main = "仪表盘";
        }

        if (this.chart_style == "percent") {
          main = "百分比仪表盘";
        }

        if (this.chart_style == "solid") {
          main = "活动图";
        }

        icon = "icon-fsux_tubiao_yibiaopan";
        return [icon, head + " - " + main];
      } else if (this.chart_type == "map") {
        if (this.chart_style == "china") {
          main = "中国地图";
        } else if (this.chart_style == "province") {
          main = "省份地图";
        } else if (this.chart_style == "cnscatter") {
          main = "中国地图散点图";
        } else if (this.chart_style == "pvscatter") {
          main = "省份地图散点图";
        } else if (this.chart_style == "percent") {
          main = "百分比地图";
        }

        icon = "icon-fsux_tubiao_ditu";
        return [icon, head + " - " + main];
      } else if (this.chart_type == "earth") {
        return [icon, head + " - " + "3D 地球"];
      }
    },

    currentChartDataCache() {
      // get() {
      if (this.currentChartIndex == null) {
        return null;
      }

      return this.chartLists[this.currentChartIndex].chartOptions.chartDataCache; // },
      // set(val) {
      //   this.updateChartItemChartlistOne({ key: "rangeColCheck", val });
      // },
    },

    chartXYSeriesList() {
      if (this.currentChartDataCache == null) {
        return;
      }

      let chartDataSeriesOrder = this.chartLists[this.currentChartIndex].chartOptions.chartDataSeriesOrder;
      var chartAllTypeArray = this.currentChartType.split("|");
      var chartPro = chartAllTypeArray[0],
          chartType = chartAllTypeArray[1],
          chartStyle = chartAllTypeArray[2];
      var valueType = {
        num: "icon-shuzi",
        string: "icon-format_icon",
        date: "icon-date"
      };
      var ret = {
        fix: [],
        change: [],
        option: []
      };

      if (chartType == "line" || chartType == "column" || chartType == "area" || chartType == "scatter") {
        if (this.currentChartDataCache.title != null) {
          ret.fix.push({
            title: "x轴",
            type: valueType["string"],
            field: this.currentChartDataCache.title.text
          });
        }

        if (this.currentChartDataCache.label != null) {
          for (var i = 0; i < this.currentChartDataCache.label.length; i++) {
            var trueIndex = chartDataSeriesOrder[i];
            ret.change[trueIndex] = {
              title: "系列" + (trueIndex + 1),
              index: trueIndex,
              type: valueType[this.currentChartDataCache.series_tpye[i]],
              field: this.currentChartDataCache.label[i],
              id: i
            };
            ret.option.push({
              field: this.currentChartDataCache.label[i],
              id: i,
              index: trueIndex
            });
          }
        }
      }

      return ret;
    },

    currentChartDataSeriesOrder: {
      get() {
        if (this.currentChartIndex == null) {
          return {};
        }

        return this.chartLists[this.currentChartIndex].chartOptions.chartDataSeriesOrder;
      },

      set(val) {
        this.updateChartItemChartlistOne({
          key: "chartDataSeriesOrder",
          value: val,
          chart_id: this.chart_id
        });
      }

    }
  },
  methods: { ...Object(external_Vuex_["mapActions"])("chartSetting", ["updateChartItemChartlistOne"]),

    handleClick(tab) {
      if (tab.index != 0) {
        this.showList = false;
      }
    },

    //列/行头部的标题例如列A、行1
    getColRowCheckTxt: function (isRow) {
      if (!isRow) {
        var txt = "";

        if (this.currentRangeColCheck.range[0] == this.currentRangeColCheck.range[1]) {
          txt = this.currentRangeColCheck.range[0] + 1;
        } else {
          txt = this.currentRangeColCheck.range[0] + 1 + "至" + (this.currentRangeColCheck.range[1] + 1) + "";
        }

        return txt;
      } else {
        var txt = "";

        if (this.currentRangeRowCheck.range[0] == this.currentRangeRowCheck.range[1]) {
          txt = this.currentRangeRowCheck.range[0] + 1;
        } else {
          txt = this.currentRangeRowCheck.range[0] + 1 + "至" + (this.currentRangeRowCheck.range[1] + 1) + "";
        }

        return txt;
      }
    },
    // 转置行列操作
    checkBoxChange: function () {
      var chart_id = this.chartLists[this.currentChartIndex].chartOptions.chart_id;
      var rangeRowCheck = this.currentRangeRowCheck;
      var rangeColCheck = this.currentRangeColCheck;
      var rangeConfigCheck = this.currentRangeConfigCheck;
      checkCurrentBoxChange(chart_id, rangeRowCheck, rangeColCheck, rangeConfigCheck);
    },
    //系列列表的下拉菜单操作
    handleSeriseCommand: function (command) {
      var series = command.series,
          option = command.option;
      var newOrder = deepCopy(this.currentChartDataSeriesOrder);
      var newid = option.id,
          newTrueIndex = series.index;
      var exchangeid = series.id,
          exchangeTrueIndex = newOrder[newid];
      newOrder[newid] = newTrueIndex;
      newOrder[exchangeid] = exchangeTrueIndex;
      this.currentChartDataSeriesOrder = newOrder;
      changeSeriesOrder(this.chartLists[this.currentChartIndex].chartOptions, this.currentChartDataSeriesOrder);
    }
  }
});
// CONCATENATED MODULE: ./src/packages/ChartMix/ChartSetting.vue?vue&type=script&lang=js&
 /* harmony default export */ var ChartMix_ChartSettingvue_type_script_lang_js_ = (ChartSettingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/packages/ChartMix/ChartSetting.vue?vue&type=style&index=0&id=dc2be93c&prod&lang=scss&
var ChartSettingvue_type_style_index_0_id_dc2be93c_prod_lang_scss_ = __webpack_require__("77ad");

// CONCATENATED MODULE: ./src/packages/ChartMix/ChartSetting.vue






/* normalize component */

var ChartSetting_component = normalizeComponent(
  ChartMix_ChartSettingvue_type_script_lang_js_,
  ChartSettingvue_type_template_id_dc2be93c_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ChartSetting = (ChartSetting_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"23c09074-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/ChartMix/ChartRender.vue?vue&type=template&id=4be53480&scoped=true&
var ChartRendervue_type_template_id_4be53480_scoped_true_render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "chartRender"
  });
};

var ChartRendervue_type_template_id_4be53480_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./src/packages/ChartMix/ChartRender.vue?vue&type=template&id=4be53480&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/packages/ChartMix/ChartRender.vue?vue&type=script&lang=js&

/* harmony default export */ var ChartRendervue_type_script_lang_js_ = ({
  name: "ChartRender",
  props: {
    active: {
      type: Boolean,
      default: false
    },
    chart_id: {
      type: String,
      default: ""
    },
    chartOptions: {
      type: Object,
      default: null
    }
  },
  watch: {
    chartOptions: {
      handler: function (chartOptions) {
        //此处必须使用function,不能用箭头函数
        if (!chartOptions) {
          return;
        }

        this.renderCharts(chartOptions);
      },
      immediate: true,
      deep: true
    }
  },

  mounted() {
    //图表渲染, 部分需要修改默认配置的参数
    this.$nextTick(() => {
      let chartOptions = this.chartOptions;
      this.renderCharts(chartOptions);
    });
  },

  methods: {
    // 渲染图表
    renderCharts(chartOptions) {
      const renderChartObj = {
        chart_id: this.chart_id,
        chartOptions: chartOptions
      };
      renderChart(renderChartObj, this.$el);
    }

  }
});
// CONCATENATED MODULE: ./src/packages/ChartMix/ChartRender.vue?vue&type=script&lang=js&
 /* harmony default export */ var ChartMix_ChartRendervue_type_script_lang_js_ = (ChartRendervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/packages/ChartMix/ChartRender.vue





/* normalize component */

var ChartRender_component = normalizeComponent(
  ChartMix_ChartRendervue_type_script_lang_js_,
  ChartRendervue_type_template_id_4be53480_scoped_true_render,
  ChartRendervue_type_template_id_4be53480_scoped_true_staticRenderFns,
  false,
  null,
  "4be53480",
  null
  
)

/* harmony default export */ var ChartRender = (ChartRender_component.exports);
// EXTERNAL MODULE: external "echarts"
var external_echarts_ = __webpack_require__("164e");
var external_echarts_default = /*#__PURE__*/__webpack_require__.n(external_echarts_);

// CONCATENATED MODULE: ./src/utils/exportUtil.js







const exportUtil_ChartSetting = src_store.state.chartSetting; // init chart

function initChart(outDom, lang) {
  let dom = document.createElement('div');
  dom.id = 'chartmix';
  outDom.appendChild(dom);
  new external_Vue_default.a({
    el: '#chartmix',
    store: src_store,

    data() {
      return {
        lang
      };
    },

    computed: {
      chartOptions() {
        if (!exportUtil_ChartSetting.currentChartIndex) {
          return null;
        }

        return exportUtil_ChartSetting.chartLists[exportUtil_ChartSetting.currentChartIndex].chartOptions;
      }

    },
    template: `<ChartSetting :lang="lang" :chartOptions="chartOptions"></ChartSetting>`
  });
}
/**
 * 
 * @param {*} render 插入图表的容器
 * @param {*} chartData 框选的数据
 * @param {*} chart_id 图表ID
 * @param {*} type 图表类型 pie,line,regression
 * @param {*} regressionType 回归算法类型：'linear', 'exponential', 'logarithmic', 'polynomial'
 * 返回容器/id/chart_json图表配置
 */


function createChart(render, chartData, chart_id, rangeArray, rangeTxt, chartType, regressionType) {
  let chart_Id = chart_id ? chart_id : generateRandomKey('chart');
  render.id = chart_Id;
  chartJson_chartOptions.defaultOption.series = [];
  chartJson_chartOptions.regressionType = regressionType; // 随机生成图表 

  if (chartType == 'pie') {
    //饼状图
    chartJson_chartOptions.chartAllType = 'echarts|pie|default';
  } else if (chartType == 'regression') {
    //线性回归
    chartJson_chartOptions.chartAllType = 'echarts|regression|default';
  } else {
    //默认type == 'line' 折线图
    chartJson_chartOptions.chartAllType = 'echarts|line|default';
  } // 生成图表数据结构


  let chartOption = insertNewChart(chartJson_chartOptions, chart_Id, chartJson_chartOptions.chartAllType, chartData, rangeArray, rangeTxt);
  let renderDom = document.createElement('div');
  renderDom.id = 'render' + chart_Id;
  render.appendChild(renderDom);
  let chart_json = {
    'chart_id': chart_Id,
    'active': true,
    'chartOptions': deepCopy(chartOption)
  };
  exportUtil_ChartSetting.currentChartIndex = exportUtil_ChartSetting.chartLists.length;
  exportUtil_ChartSetting.chartLists.push(chart_json);
  console.dir(chart_json);
  new external_Vue_default.a({
    el: '#render' + chart_Id,
    store: src_store,

    data() {
      return {
        chart_Id
      };
    },

    computed: {
      options() {
        let chartJson = exportUtil_ChartSetting.chartLists.find(item => item.chart_id == this.chart_Id);

        if (chartJson) {
          return chartJson.chartOptions;
        } else {
          return null;
        }
      },

      active() {
        let chartJson = exportUtil_ChartSetting.chartLists.find(item => item.chart_id == this.chart_Id);

        if (chartJson) {
          return chartJson.active;
        } else {
          return null;
        }
      }

    },
    template: `<ChartRender :chartOptions="options" :chart_id="chart_Id" :active="active"></ChartRneder>`
  });
  return {
    render,
    chart_Id,
    chart_json
  };
} // insert chart


function insertNewChart(chartOptions, chart_id, chartAllType, chartData, rangeArray, rangeTxt, chartTheme, height, width, left, top) {
  var chart_json = {};
  var chartAllTypeArray = chartAllType.split('|');
  var chartPro = chartAllTypeArray[0],
      chartType = chartAllTypeArray[1],
      chartStyle = chartAllTypeArray[2];
  chart_json.chart_id = chart_id;
  chart_json.chartAllType = chartAllType;
  chart_json.chartPro = chartPro;
  chart_json.chartType = chartType;
  chart_json.chartStyle = chartStyle;
  chart_json.height = height;
  chart_json.width = width;
  chart_json.left = left;
  chart_json.top = top; //按照图表类型得到图表的默认设置

  var defaultOptionIni = chartOptions.defaultOption; //数据的sheet索引

  chart_json.chartData = chartData;
  chart_json.rangeArray = rangeArray;
  chart_json.rangeTxt = rangeTxt; //获取回归算法类型

  chart_json.regressionType = chartOptions.regressionType; //根据数据集得到按钮状态，rangeColCheck表示首列是否标题，rangeRowCheck表示首行是否标题，rangeConfigCheck表示是否转置。

  var rowColCheck = getRowColCheck(chartData);
  var rangeRowCheck = rowColCheck[0],
      rangeColCheck = rowColCheck[1],
      rangeConfigCheck = false;
  chart_json.rangeColCheck = rangeColCheck;
  chart_json.rangeRowCheck = rangeRowCheck;
  chart_json.rangeConfigCheck = rangeConfigCheck; //按照数据范围文字得到具体数据范围

  var rangeSplitArray = getRangeSplitArray(chartData, rangeArray, rangeColCheck, rangeRowCheck);
  chart_json.rangeSplitArray = rangeSplitArray; //根据数据集、功能按钮状态、图表类型，得到图表可操作的数据格式，例如：{ "x":[], "y":[], series:[] }，可以按照次格式渲染数据页中的系列和轴控件。
  //数据为一行且为汉字的时候，chartDataCache的series为空数组

  var chartDataCache = getChartDataCache(chartData, rangeSplitArray, chartPro, chartType, chartStyle);
  chart_json.chartDataCache = chartDataCache; //生成默认的系列顺序，默认根据series数组的位置，用户可以在界面上操作更改这个位置。

  var chartDataSeriesOrder = chartDataCache.series != undefined ? getChartDataSeriesOrder(chartDataCache.series[0].length) : [];
  chart_json.chartDataSeriesOrder = chartDataSeriesOrder; //设置图表皮肤

  chart_json.chartTheme = chartTheme; //根据图表的默认设置、图表数据、图表系列顺序，等到一个完整的图表配置串。

  var defaultOption = addDataToOption(defaultOptionIni, chartDataCache, chartDataSeriesOrder, chartPro, chartType, chartStyle); //根据图表厂商选择渲染引擎，并根据设置渲染出图表

  chart_json.defaultOption = defaultOption;
  return chart_json;
} // highlight current chart


function highlightChart(chart_id) {
  let index = exportUtil_ChartSetting.chartLists.findIndex(item => item.chart_id == chart_id);
  exportUtil_ChartSetting.currentChartIndex = index;
  return exportUtil_ChartSetting.chartLists[exportUtil_ChartSetting.currentChartIndex].chartOptions;
} // resize chart


function resizeChart(chart_id) {
  let index = exportUtil_ChartSetting.chartLists.findIndex(item => item.chart_id == chart_id);
  var chartAllType = exportUtil_ChartSetting.chartLists[index].chartOptions.chartAllType;
  var chartAllTypeArray = chartAllType.split("|");
  var chartPro = chartAllTypeArray[0],
      chartType = chartAllTypeArray[1],
      chartStyle = chartAllTypeArray[2];

  if (chartPro == "echarts") {
    external_echarts_default.a.getInstanceById(jquery_default()("#" + chart_id).attr("_echarts_instance_")).resize();
  }
}

function resizeChartAll() {
  for (let i = 0; i < exportUtil_ChartSetting.chartLists.length; i++) {
    let chartJson = exportUtil_ChartSetting.chartLists[i].chartOptions;

    if (chartJson.chartAllType.split('|')[0] == 'echarts') {
      external_echarts_default.a.getInstanceById(jquery_default()('#' + chartJson.chart_id).attr('_echarts_instance_')).resize();
    }
  }
} // delete chart


function deleteChart(chart_id) {
  let index = exportUtil_ChartSetting.chartLists.findIndex(item => item.chart_id == chart_id);
  exportUtil_ChartSetting.chartLists.splice(index, 1);
  exportUtil_ChartSetting.currentChartIndex--;

  if (exportUtil_ChartSetting.currentChartIndex < 0) {
    if (exportUtil_ChartSetting.chartLists[0]) {
      exportUtil_ChartSetting.currentChartIndex = 0;
      return;
    }

    exportUtil_ChartSetting.currentChartIndex = null;
  }
}

function getChartJson(chart_id) {
  let index = exportUtil_ChartSetting.chartLists.findIndex(item => item.chart_id == chart_id);
  return exportUtil_ChartSetting.chartLists[index].chartOptions;
}

function insertToStore(chart_json) {
  exportUtil_ChartSetting.chartLists.push(chart_json);
}


// CONCATENATED MODULE: ./src/packages/index.js
// import single vue component



 // all components

const components = [ChartSetting, ChartRender];
/**
 * define install function
 *
 * @param {Object} Vue 
 * @param {Object} [options={}] 
 */

const install = function (Vue, options = {}) {
  if (!install.componentInstalled) {
    // map and register all global components
    components.map(component => {
      Vue.component(component.name, component);
    });
    install.componentInstalled = true;
  }

  if (!install.storeRegistered) {
    // register store
    if (!options.store) {
      console.log('Please provide a store!!');
    } else {
      options.store.registerModule('chartSetting', chartSetting);
      install.storeRegistered = true;
    }
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

/* harmony default export */ var src_packages = ({
  // must use install function
  install,
  // components list
  ...components,
  initChart: initChart,
  createChart: createChart,
  highlightChart: highlightChart,
  deleteChart: deleteChart,
  resizeChart: resizeChart,
  changeChartRange: changeChartRange,
  changeChartCellData: changeChartCellData,
  renderChart: renderChart,
  getChartJson: getChartJson,
  insertToStore: insertToStore // ChartSetting,
  // ChartRender

});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_packages);



/***/ }),

/***/ "fba5":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("cb5a");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ })

/******/ });
});
//# sourceMappingURL=chartmix.umd.js.map