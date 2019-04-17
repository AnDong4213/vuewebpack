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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js?!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js!./node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js!./src/index.scss":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js??ref--5-1!./node_modules/_postcss-loader@3.0.0@postcss-loader/src!./node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js!./src/index.scss ***!
  \**************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/_css-loader@2.1.1@css-loader/dist/runtime/api.js */ "./node_modules/_css-loader@2.1.1@css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../node_modules/_css-loader@2.1.1@css-loader/dist/runtime/url-escape.js */ "./node_modules/_css-loader@2.1.1@css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ./font/iconfont.eot?t=1553081982258 */ "./src/font/iconfont.eot?t=1553081982258"));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ./font/iconfont.eot?t=1553081982258 */ "./src/font/iconfont.eot?t=1553081982258") + "#iefix");
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(/*! ./font/iconfont.woff?t=1553081982258 */ "./src/font/iconfont.woff?t=1553081982258"));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(/*! ./font/iconfont.ttf?t=1553081982258 */ "./src/font/iconfont.ttf?t=1553081982258"));
var ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(/*! ./font/iconfont.svg?t=1553081982258 */ "./src/font/iconfont.svg?t=1553081982258") + "#iconfont");

// Module
exports.push([module.i, ".imgSize0 {\n  border: 3px solid aquamarine; }\n\nbody .imgSize {\n  border: 3px dashed green;\n  -webkit-transform: translate(100px, 100px) rotate(45deg);\n          transform: translate(100px, 100px) rotate(45deg);\n  -webkit-transform-origin: 50% 50%;\n          transform-origin: 50% 50%;\n  width: 50px;\n  height: 50px; }\n\nbody .imgSize2 {\n  width: 70px;\n  height: 70px;\n  border: 3px solid salmon; }\n\n@font-face {\n  font-family: \"iconfont\";\n  src: url(" + ___CSS_LOADER_URL___0___ + ");\n  src: url(" + ___CSS_LOADER_URL___1___ + ") format(\"embedded-opentype\"), url(\"data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAPgAAsAAAAACJwAAAORAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDBgqEfIQfATYCJAMMCwgABCAFhG0HPRtsB8gOJQUGzgQAAABAENEaOnt3/xwC8AVWASSXViWpYlSmDkgReiC8WtO7lFHeVIdlkVXIAe0T3G+AZNkGbGF8ha0wJExaocjh/3+vasYEjM2bbXFZ4/2ftTZ9yglgOEABWrtraclaoAJxVcCzmfRZOf0yBPDJxA1dv3scIf0Ywn0CyKwspkl/x4VZ6BZcBHviqkEOYuGqXeoacKD4fXlNrbigsDTh0cbxnRxZf3bq2Rm98n+F3oyE7nABwLgFGiiHYED6J0OddFWlcrrwPdS93GxjENShsv//Q6H1cftC//EUiE2IQtCLLepB6RIFBJ6d0QDj8d8CG4iGcA/4C3p8v0WQb6zo6DBkR4SmyHjV1qGrY7By1PdVKhXuPi7a58v2E0Fgjpg70CqDtIWuCD240jBP0H38TNBMoBHvH0+UE30PH3Y8eNB+717r/fttpdpRQwWse/2yxKsPcu8ejpQ04xuDrtLjSS3trp3uTAqOdRY3EptbSWUnEpqagyPq/TqHE6lEQsKxlW28u9vH1C7q4VA8Gg8MHHR2OtGJo/pDaj4Pz4fqAftgI5kbVQ3+h+q3qvWXlVtRC+Nr9MW0E91RfrxPvnYb+6+zJdPpW2gmTQ/pgTgPaMMhBxz2B+K0XqcJGoc5rtfV6q64K4EHS+nuSM+3afNHtg56utcfLl0x0VHCgmxqPx9bHJ73V5pWfDnVG5LFsfP2CVrIl2K9tROhptOplMTcSKedXDHWye3P3bYwsPhvosYdVKp7Iglj5HR05yZShDt1tToPoBdcX3+Ev+HxxYYgObb81Q0MAI/ObloqHAYuAu7bFBb42nXkhPENoVsbV5toN1XNDoI31YnvY3zZvQCxvO6OJ9CdILgkNKBwyACNSz7Z0MvBIqAebFxWgU8Ze7cD4uB0IcYDSjkREKK5B0Uk50ATzSPZ0Dtgkcg72ESLBp92mXpgQKFMDW5xSCPkWKbM5KxpCLEXB8vuEIh5Lc3bhoIbA+7IWRaorO5X98AAfogTTkEMIgpM4KbOduV1oGkms7ipQBa9EqK16Ksan/omb9bUySDr4ABpECAHI0MZhkwWEwMhm40MDn4+BCCSRyMNXyD0lGMAHAd5cUYAL36CvIcMivBSVjsUEAmCIIK6S4BjosPYRQDQopIJw5repABkQbxIOxQsFvEp0wQWeU+P6+/vHOATfkmLEi0GexQ0QBjMcFmU0ADHIQQAAAA=\") format(\"woff2\"), url(" + ___CSS_LOADER_URL___2___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___3___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL___4___ + ") format(\"svg\"); }\n\n.iconfont {\n  font-family: \"iconfont\" !important;\n  font-size: 26px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.icondelete:before {\n  content: \"\\e699\"; }\n\n.iconbrightness:before {\n  content: \"\\e69b\"; }\n", ""]);



/***/ }),

/***/ "./node_modules/_css-loader@2.1.1@css-loader/dist/runtime/api.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_css-loader@2.1.1@css-loader/dist/runtime/api.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/_css-loader@2.1.1@css-loader/dist/runtime/url-escape.js":
/*!******************************************************************************!*\
  !*** ./node_modules/_css-loader@2.1.1@css-loader/dist/runtime/url-escape.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),

/***/ "./node_modules/_style-loader@0.23.1@style-loader/lib/addStyles.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_style-loader@0.23.1@style-loader/lib/addStyles.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/_style-loader@0.23.1@style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/_style-loader@0.23.1@style-loader/lib/urls.js":
/*!********************************************************************!*\
  !*** ./node_modules/_style-loader@0.23.1@style-loader/lib/urls.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/font/iconfont.eot?t=1553081982258":
/*!***********************************************!*\
  !*** ./src/font/iconfont.eot?t=1553081982258 ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "file/0f61ec717a5090e861b36115c3478f42.eot";

/***/ }),

/***/ "./src/font/iconfont.svg?t=1553081982258":
/*!***********************************************!*\
  !*** ./src/font/iconfont.svg?t=1553081982258 ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "file/758b608f4c8586f1d0dd05a23b5a3c25.svg";

/***/ }),

/***/ "./src/font/iconfont.ttf?t=1553081982258":
/*!***********************************************!*\
  !*** ./src/font/iconfont.ttf?t=1553081982258 ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "file/943ddae67f7e88727e604f9950b20ce2.ttf";

/***/ }),

/***/ "./src/font/iconfont.woff?t=1553081982258":
/*!************************************************!*\
  !*** ./src/font/iconfont.woff?t=1553081982258 ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "file/ad9d9e137a6402003ce1aecf9b8d64ad.woff";

/***/ }),

/***/ "./src/images/28.png":
/*!***************************!*\
  !*** ./src/images/28.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/28_40e1970.png";

/***/ }),

/***/ "./src/images/9.png":
/*!**************************!*\
  !*** ./src/images/9.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/9_a356977.png";

/***/ }),

/***/ "./src/images/jolin.jpg":
/*!******************************!*\
  !*** ./src/images/jolin.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_28_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/28.png */ "./src/images/28.png");
/* harmony import */ var _images_28_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_28_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_9_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/9.png */ "./src/images/9.png");
/* harmony import */ var _images_9_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_9_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_jolin_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/jolin.jpg */ "./src/images/jolin.jpg");
/* harmony import */ var _images_jolin_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_jolin_jpg__WEBPACK_IMPORTED_MODULE_3__);






let root = document.createElement('div'), root2 = document.getElementById('root2');
root.id = 'root';
let img2 = document.createElement('img'), img3 = document.createElement('img');
let img = new Image();

root2.innerHTML = '<div class="iconfont icondelete"></div>'

img.onload = function() {
  console.log('img is loaded')
}
img.onerror = function() {
  console.log('error!!')
}

img.src = _images_28_png__WEBPACK_IMPORTED_MODULE_1___default.a;
img2.src = _images_9_png__WEBPACK_IMPORTED_MODULE_2___default.a;
img3.src = _images_jolin_jpg__WEBPACK_IMPORTED_MODULE_3___default.a;

img.classList.add('imgSize0')
img2.classList.add('imgSize2')
img3.classList.add('imgSize')
root.classList.add('iconfont', 'iconbrightness')

document.body.append(root)
root.append(img)
root.append(img2)
root.append(img3);



consele.log(_images_28_png__WEBPACK_IMPORTED_MODULE_1___default.a)  // images/28_40e1970.png

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js??ref--5-1!../node_modules/_postcss-loader@3.0.0@postcss-loader/src!../node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js!./index.scss */ "./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js?!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js!./node_modules/_sass-loader@7.1.0@sass-loader/lib/loader.js!./src/index.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/_style-loader@0.23.1@style-loader/lib/addStyles.js */ "./node_modules/_style-loader@0.23.1@style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDIuMS4xQGNzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMi4xLjFAY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvdXJsLWVzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIzLjFAc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMy4xQHN0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9udC9pY29uZm9udC5lb3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvbnQvaWNvbmZvbnQuc3ZnIiwid2VicGFjazovLy8uL3NyYy9mb250L2ljb25mb250LnR0ZiIsIndlYnBhY2s6Ly8vLi9zcmMvZm9udC9pY29uZm9udC53b2ZmIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvMjgucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvOS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9qb2xpbi5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5zY3NzP2UzNmYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdD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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVyxFQUFFO0FBQ3JELHdDQUF3QyxXQUFXLEVBQUU7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esc0NBQXNDO0FBQ3RDLEdBQUc7QUFDSDtBQUNBLDhEQUE4RDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSxpQkFBaUIscUJBQXVCLCtDOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLCtDOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLCtDOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLGdEOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLDJCOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLDBCOzs7Ozs7Ozs7OztBQ0F4QyxrQ0FBa0MsZyt1Qjs7Ozs7Ozs7Ozs7O0FDQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFzQjs7QUFFZ0I7QUFDQTtBQUNJOztBQUUxQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVSxxREFBTztBQUNqQixXQUFXLG9EQUFRO0FBQ25CLFdBQVcsd0RBQVE7O0FBRW5CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUEsWUFBWSxxREFBTywyQjs7Ozs7Ozs7Ozs7O0FDbkNuQixjQUFjLG1CQUFPLENBQUMsc1pBQWtOOztBQUV4Tyw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsNklBQXFFOztBQUUxRjs7QUFFQSxHQUFHLEtBQVUsRUFBRSxFIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDIuMS4xQGNzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBJbXBvcnRzXG52YXIgdXJsRXNjYXBlID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAyLjEuMUBjc3MtbG9hZGVyL2Rpc3QvcnVudGltZS91cmwtZXNjYXBlLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMF9fXyA9IHVybEVzY2FwZShyZXF1aXJlKFwiLi9mb250L2ljb25mb250LmVvdD90PTE1NTMwODE5ODIyNThcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMV9fXyA9IHVybEVzY2FwZShyZXF1aXJlKFwiLi9mb250L2ljb25mb250LmVvdD90PTE1NTMwODE5ODIyNThcIikgKyBcIiNpZWZpeFwiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzJfX18gPSB1cmxFc2NhcGUocmVxdWlyZShcIi4vZm9udC9pY29uZm9udC53b2ZmP3Q9MTU1MzA4MTk4MjI1OFwiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18zX19fID0gdXJsRXNjYXBlKHJlcXVpcmUoXCIuL2ZvbnQvaWNvbmZvbnQudHRmP3Q9MTU1MzA4MTk4MjI1OFwiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX180X19fID0gdXJsRXNjYXBlKHJlcXVpcmUoXCIuL2ZvbnQvaWNvbmZvbnQuc3ZnP3Q9MTU1MzA4MTk4MjI1OFwiKSArIFwiI2ljb25mb250XCIpO1xuXG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5pbWdTaXplMCB7XFxuICBib3JkZXI6IDNweCBzb2xpZCBhcXVhbWFyaW5lOyB9XFxuXFxuYm9keSAuaW1nU2l6ZSB7XFxuICBib3JkZXI6IDNweCBkYXNoZWQgZ3JlZW47XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDEwMHB4LCAxMDBweCkgcm90YXRlKDQ1ZGVnKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwcHgsIDEwMHB4KSByb3RhdGUoNDVkZWcpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7IH1cXG5cXG5ib2R5IC5pbWdTaXplMiB7XFxuICB3aWR0aDogNzBweDtcXG4gIGhlaWdodDogNzBweDtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHNhbG1vbjsgfVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJpY29uZm9udFxcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMF9fXyArIFwiKTtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18xX19fICsgXCIpIGZvcm1hdChcXFwiZW1iZWRkZWQtb3BlbnR5cGVcXFwiKSwgdXJsKFxcXCJkYXRhOmFwcGxpY2F0aW9uL3gtZm9udC13b2ZmMjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxkMDlHTWdBQkFBQUFBQVBnQUFzQUFBQUFDSndBQUFPUkFBRUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBSEVJR1ZnQ0RCZ3FFZklRZkFUWUNKQU1NQ3dnQUJDQUZoRzBIUFJ0c0I4Z09KUVVHemdRQUFBQkFFTkVhT250My94d0M4QVZXQVNTWFZpV3BZbFNtRGtnUmVpQzhXdE83bEZIZVZJZGxrVlhJQWUwVDNHK0FaTmtHYkdGOGhhMHdKRXhhb2NqaC8zK3Zhc1lFak0yYmJYRlo0LzJmdFRaOXlnbGdPRUFCV3J0cmFjbGFvQUp4VmNDem1mUlpPZjB5QlBESnhBMWR2M3NjSWYwWXduMEN5S3dzcGtsL3g0Vlo2QlpjQkh2aXFrRU9ZdUdxWGVvYWNLRDRmWGxOcmJpZ3NEVGgwY2J4blJ4WmYzYnEyUm05OG4rRjNveUU3bkFCd0xnRkdpaUhZRUQ2SjBPZGRGV2xjcnJ3UGRTOTNHeGpFTlNoc3YvL1E2SDFjZnRDLy9FVWlFMklRdENMTGVwQjZSSUZCSjZkMFFEajhkOENHNGlHY0EvNEMzcDh2MFdRYjZ6bzZEQmtSNFNteUhqVjFxR3JZN0J5MVBkVktoWHVQaTdhNTh2MkUwRmdqcGc3MENxRHRJV3VDRDI0MGpCUDBIMzhUTkJNb0JIdkgwK1VFMzBQSDNZOGVOQis3MTdyL2Z0dHBkcFJRd1dzZS8yeXhLc1BjdThlanBRMDR4dURydExqU1MzdHJwM3VUQXFPZFJZM0VwdGJTV1VuRXBxYWd5UHEvVHFIRTZsRVFzS3hsVzI4dTl2SDFDN3E0VkE4R2c4TUhIUjJPdEdKby9wRGFqNFB6NGZxQWZ0Z0k1a2JWUTMraCtxM3F2V1hsVnRSQytOcjlNVzBFOTFSZnJ4UHZuWWIrNit6SmRQcFcyZ21UUS9wZ1RnUGFNTWhCeHoyQitLMFhxY0pHb2M1cnRmVjZxNjRLNEVIUytudVNNKzNhZk5IdGc1NnV0Y2ZMbDB4MFZIQ2dteHFQeDliSEo3M1Y1cFdmRG5WRzVMRnNmUDJDVnJJbDJLOXRST2hwdE9wbE1UY1NLZWRYREhXeWUzUDNiWXdzUGh2b3NZZFZLcDdJZ2xqNUhSMDV5WlNoRHQxdFRvUG9CZGNYMytFditIeHhZWWdPYmI4MVEwTUFJL09ibG9xSEFZdUF1N2JGQmI0Mm5Ya2hQRU5vVnNiVjV0b04xWE5Eb0kzMVludlkzelp2UUN4dk82T0o5Q2RJTGdrTktCd3lBQ05TejdaME12QklxQWViRnhXZ1U4WmU3Y0Q0dUIwSWNZRFNqa1JFS0s1QjBVazUwQVR6U1BaMER0Z2tjZzcyRVNMQnA5Mm1YcGdRS0ZNRFc1eFNDUGtXS2JNNUt4cENMRVhCOHZ1RUloNUxjM2Job0liQSs3SVdSYW9yTzVYOThBQWZvZ1RUa0VNSWdwTTRLYk9kdVYxb0drbXM3aXBRQmE5RXFLMTZLc2FuL29tYjliVXlTRHI0QUJwRUNBSEkwTVpoa3dXRXdNaG00ME1EbjQrQkNDU1J5TU5YeUQwbEdNQUhBZDVjVVlBTDM2Q3ZJY01pdkJTVmpzVUVBbUNJSUs2UzRCam9zUFlSUURRb3BJSnc1cmVwQUJrUWJ4SU94UXNGdkVwMHdRV2VVK1A2Ky92SE9BVGZrbUxFaTBHZXhRMFFCak1jRm1VMEFESElRUUFBQUE9XFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzJfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIiksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fM19fXyArIFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIiksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fNF9fXyArIFwiKSBmb3JtYXQoXFxcInN2Z1xcXCIpOyB9XFxuXFxuLmljb25mb250IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiaWNvbmZvbnRcXFwiICFpbXBvcnRhbnQ7XFxuICBmb250LXNpemU6IDI2cHg7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7IH1cXG5cXG4uaWNvbmRlbGV0ZTpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlNjk5XFxcIjsgfVxcblxcbi5pY29uYnJpZ2h0bmVzczpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlNjliXFxcIjsgfVxcblwiLCBcIlwiXSk7XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiAnQG1lZGlhICcgKyBpdGVtWzJdICsgJ3snICsgY29udGVudCArICd9JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfVxuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSAnKCcgKyBpdGVtWzJdICsgJykgYW5kICgnICsgbWVkaWFRdWVyeSArICcpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJztcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcbiAgcmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlc2NhcGUodXJsLCBuZWVkUXVvdGVzKSB7XG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBuZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuICdcIicgKyB1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSArICdcIic7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmaWxlLzBmNjFlYzcxN2E1MDkwZTg2MWIzNjExNWMzNDc4ZjQyLmVvdFwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImZpbGUvNzU4YjYwOGY0Yzg1ODZmMWQwZGQwNWEyM2I1YTNjMjUuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmlsZS85NDNkZGFlNjdmN2U4ODcyN2U2MDRmOTk1MGIyMGNlMi50dGZcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmaWxlL2FkOWQ5ZTEzN2E2NDAyMDAzY2UxYWVjZjliOGQ2NGFkLndvZmZcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvMjhfNDBlMTk3MC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvOV9hMzU2OTc3LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBZ0FBWkFCa0FBRC83QUFSUkhWamEza0FBUUFFQUFBQU93QUEvKzRBRGtGa2IySmxBR1RBQUFBQUFmL2JBSVFBQndVRkJRVUZCd1VGQndrR0JRWUpDd2dIQndnTERRb0tDd29LRFJBTURBd01EQXdRREE0UEVBOE9EQlFVRlJVVUZCMGNIQndkSUNBZ0lDQWdJQ0FnSUFFSEJ3Y05EQTBaRUJBWkd4WVNGaHNnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZy84QUFFUWdCTEFEdEF3RVJBQUlSQVFNUkFmL0VBTEVBQUFFRkFRRUJBQUFBQUFBQUFBQUFBQU1CQWdRRkJnY0FDQUVBQWdNQkFRRUFBQUFBQUFBQUFBQUFBQU1CQWdRRkJnY1FBQUlCQXdNQ0F3VUZCUVVFQndZSEFBRUNBd0FSQkNFU0JURkJVUk1HWVhHQklqS1JvUlFWQjdIQlFsSWowV0l6SkJiaDhYSkRncEt5VXlVbUYvQ2k0bU5FUmNMU2t6UlVWU2NSQUFJQ0FRUUJBZ1VDQlFRREFRQUFBQUFCRVFJRElURVNCRUVpQlZGaGNUSVRnVUxCSXpNVU5KR3hKQVpTWWhXQy85b0FEQU1CQUFJUkF4RUFQd0FZaHhMbTZMOWxYME0wTWUwR0h0RmtYWHdGUUE1TVRGUC9BQzF2N3FtU0lZOFllTmYvQUExUHdvSjRzZU1TUFRiR0wzMEFGUnNTcDJMREs5TFJBNDZjbHlXSHcrUXNzY3hoeU54ZTNhNFFkVDRWanRucTdRYjZkRy9Ea1VEaVNhS1ZVQmRCbVNzU291UllTbS8yQzlWYm1Ta05OSW8rUzVDYkd4WS93cXBLNWNodk5GN0RyU3NXT1hxYUw1SXFVQjVYSnlDUE1pZ0hnZHAvdHJYK09QSm10ZVhzRUVPUktwZFZpc05UWlA4QWJRN1FDbzJSWlJLRHI1WlBzU3JJWFpEUStXT2hVZjhBUm9hQkJra3p1b25LSHdVV29oRWg0OHJrd2IvakpBZWd0YW8wSWtteDVuTE9MUHlNdzlseFEwU2c0eU9VdHZUa3B5ZTREQWFHcW9sc1NHYmtkYjhqa0lmK0lWY2duTkZuTmhQT3ZKWkRPb0pBM1VsM2d2V3NrR1BINVdhTUdUTXlTVHI5ZHFyYksvZ1hXT28xK0xtZjZzaklZbnJlUTB6a3hZQThPZzFkblkrMW1OV1ZtVkJuaWNjSFVIN1RWcEFkK1dZb0Y3SDdUUkpWalJ4dUxmcHA3U2FycVNIaDRuQ2xZS3RyK0d0THU3anNmSHlEeXVMeDBiYkdnTmpyWVhxY1hKcVdUbWRaMEs5c0tNUHF1dmhUR3hLQ3h6NWVOTUpZWlhqbFRSR1EySStOVmVwWmFGanhYSVpVY00yOHJMc0JZYmdOMXoxK2ExVXV0aHVLelVzdXZ4emZoamsrVW0veXdOdnR0MXFuSFNQbVcvSStVL0lzd2toYTFxMm5QRHJDMnl4ME5BQllvbXVMOSt0QUVsSWdPb3F5QW1jZmhTNW1kQmpZNEFsa2NiV1BRVzFMZkFDcVpOS2w4YWxsajZpelk4SGtIeG16c1hCa2JWUzBIbVRXQitYNXczMWQrbGNKclZuck1IMm9GbDViOGp3ejVoeXNFellyU3ZKT2tYa3pTSThVa1czdnZKM2RMM3JWMTd0MVp6dTVpclhJbWprS0R6VFp4OHBrT253TmF0amxWMkllVEFzVEVCYkNtVmNrTlFQd0o1MWxNTUM3eEpvVko2VkYwdDJDbHZRSG00dVZqU0V5eDJYcmNhaXBwWk5hRmJKcDZrWHpTTmJWY2c5NTlxSUFVWkI2M3Q3cUlBWWNnMytvMFFBYUdkckhYcFVRQklTZHIwTkFYT0JLend5UmRRVnZXYktQd3BzbWVZUUY4QW82VmVpVUZMUFVJa3EySHRxV2lvMlUydUJiV2hJQ0k2RHZyVFFCbUs0OEJRVkJsRnQxb0lCRStXMjVkR0hlb2dzbUVqTE1MOSt0VEVFamhqckk0M2FtbFhjRnFvSE5oQVNXdG9UcFNsY2NxeUNpajhnVG9POXZzcTlkWVpXemlVVGc1L0xqN3d2M0dtd2hYSTF3QlVrVyt5dEpsQ1dOdTlEQUt1bzkxQUQvQUROdmFnQzU5TE52NVpXdGFRUlNtTVh0ZGd0cmZaZWtkcjdEUjFQdk16Nm85UzV5YzVORGhRUlk4VUhsSkpPeTcyTFNNUWRUYitVOTY1ZUhBcm5lN0hiZUZKSUJrY2htNTNGTkZtWkQ1THdaN0pDSHNBcWhaaG9CMDZWMEtVU1doeWMrVjNjc3g2b1lnZ2IrS1g5dExzOUNLVjFTK1k3bTRsV09Kd1FXMjJhcWRhdzN1S0xGQWswa0w3bzJLTURvUlcxcVRHbjh4OCtkbFQ2U3lFM0ZqNGZaVUpRREkvaFFRSWU0cVFHRTJIalFBMEhXZ0E4TGZLMVF3TEhFaVdTQXVHK2RlcW1vYkF1ZU1RRXVXK2tJMS9mV1RzYkd6cHRjbUdMRVIyNzlLZGptRVo3N3NFdTRIclRTb2NpUnU5Um9BRjFrSGNVY2dCRU9QNHRhbVFHUHZ0WXNBYUNyQU1wWnJYNjZYb0xJbFJKSGpmNHIzdU5LWExZQmNmSjNTZk1CWWRMRDl0VXZVdFZ3SkpQNWpFM0JLbTIycU9pU0cxdTJSbGpMNU9TQ0xiVUJxMUhvUmVyYkpRaWI4ckovdmcyK0Jwdmd6OFhKc2hmdldvUUVBRnFBR2hoMHQwb0tqZ3U3NFZNZ1RlTXl6eDJmajVsdDNrdUdJOFY2RWZaUzhpa2JpY01yZlhQRURDeTVjZ0c2NTJkRktwSC9BSFpCc1B2TmMzcktKWHpPdDNiVHgraFg3Vlhpc3RsQTNweWJnZU52NjFhdkxNYjJSbEpuWmlDQmV6Z2tmdHBWa1dxNXNBNXB4TTBUS2RDblNwNjZoRTlxMDJrcGlPdnZyVVpoaDBvQVE5TDBBTlBVKys5QURUOUo5cG9RRGFsZ0VUUlNiMVVDMHg1VUdPangvTEtUc2NlSThhcllDNjRweU40SXVwUTlmR3N2Wk5QVmVvczVaUjRhVTdINEZYM1lFU0VkVFRZRmovUEl1Yis2aUN3RnNvazlhSUFHWjczMXFPSlVHY2dFNjFaQUo1c21yb05PbTd3cXVoQUx6WkpDUzV1ZXhOU2lZQzQ3NUlWL0tRc0dGcmp0VkxOU1NreGNjc3N3M2VPcHFMcWFzdlJ4WkZoREd2bTVVaGJSckFWbHJLYVJ0eVZUbG9zaEN2NWVSYlRRKzNvYXZ5Zkg5U25EMWIvdE5ENWc2VjBwT1lGVWpXZ3F4UHFOZ0tDQjRGaHBVRWlYYTJvTlNsTEluNERQVk9RK2J4UEhYWW1USG1XS2JkMXZjbU5yL3dERFdSWStMWjBMNS95SkFPUDRtZlA0M0xneHdKTW44eWxNYS96Q05KM1lEMmtEU3F6RWdsSmpJTGlXNTY3L0FMcXBmWU1hYVpCNU9WV2NnYUVBYVUzR29Rckk1WldBRFcvZW5GQWNndGMrRlFBSzV2YjQwQUk1MXFRR1hvQTlyYW9BWGQ4cG9BbFl4K1lDaGdhTGpMa2tBMnV0Wjh5bERjTGNqczdlcDI5YkRyVTQ5aUxLSklPNlZnTGRhZUxQTXMxcUFCc2tvNzBCSU1yTHJjMEFHeHVPeWNrL0xvcDcxUzJSSXRXczZGLytUL2hlTWNPUWZONzlUV1pacHZCcnQxWFNuSmxMZzhkSmtUK1diaU85dDNqNFZvdGtTUm1wamJaZTV5UmNaZ05IR0Fya0FBRTZrMWx4dDNzYXN1TlVxWjZNc1R1TnIxcmFNZFNVbThReWtmekEwdEwxRG0vU1dReUgvTERMYzdyZ1crQnEwYUZaMU5aNVJIdHJWQmlITGRSMTFxQ3c0N2dPdHIxSkVENHhjYW05U1FPWlNOUjBva0NzOVFsdnl5SUlQL3E0Zm05cHZZVXJJTnhsMzZLV1JKMW1KdDVQTHRjRHVXV2NmdnJIa1p2dzFsL29VLzZqZW5Ud1hxS1hNaVVMeC9LdCtJZ0kwQ3VmOFNQN2RSNzZwWnVDZnVVbk5zN1hJZnZyMXJYajJNZHR5T0ZOcjIwcTVVaXpOcXdxeUFFRzcrNmhnZWJVM3FBUEtyT2RxaTVOQUpGbmc4Rm5aVHI4bG9pZFNUVkw1YXBGNllyVzJBNTNIUGh6U1JraHRqV29wZmtnYWpRWmlqK29MOVBHcldGbWk0elJnRzBIaUt6NXRqUmkrNE55dWt2eS9ReWl4OW9vdzdGYzI1WGdueHA0b1JudmZXZ3RBTGZ0SXZxTDYxSVFTY2RZeTlyYmoxMTZDbDIyQ0NkQnljTU1vaWpGamV4MDBwZHNjbDFhSG9XR2JMTCtCYVM1QXNTcW52U2NkS3E0L0plN3BxWjdGelovUGpsWnJMMElIaUsxdWlhWmxUYUE1K2JKazVEdTUwQnNCZWlsT0tDMTNiY1NCaTRxYkJVc3NZTWNlWWRTQ0tWUHFHdjdTd0VUZmxSRnZudURiNEdyVG9SR3ByOXAxdFdzeERiV0kzVkJZOHgwSnFHQUpKU0QzSXFrZ0ZFMnV2U3JKaEJHNXlTUDhuVzJ0czJCdnNEVlMyNHloYWVrSnBGR1ZLMmlEazQ3bis4MGtndDlockZuZXAxT3NiLzFid2tmcWIwMWs0aUlIeklrTStJZjRoS2d1QUQyM2ZUUlhWQzIrRnZrZk8vTjhkQ3VWQXVJZG9talR6UE1OclBiNS9zcG1LK2dqTGpocEVMbFB3MEt4WXVPd2tFUzNra1hvV05YeE52Y3BsU1QwS0Z6ZGlmYldoQ2h2alF3RnFBSFJ1MFRCME5tWHBSRTdoRDhHaDR2MVhsNHhFVXdSNFgrVm1BQUk5MUl2MTZzMFllMWFpZ2djck9jcWRudUdJTmdmRVZlbE9LRVdiYmtiakJpTnUyL2g3RFZtUWF6aXVOWmNlU2VYU3lGZ1BEU3NIWXlPRG9kUEZPcktqS2tacFdKTnhZV3JUalVKR1RJNXN5SVpUMHA0b2FaQ08zYWdzTTgzVHBRQWtlUzZFbGRDZEJSQlVzK1A0aWZLSWxadkxHaEh0cE9TOEQ4ZU5zRnpHUk5qenJqYnlVajFCdlU0a3R5dDUyWlYrWmRyalE5ZFBHbWloak5lOUFFaUJ5S2hvbEY1eFlMUTVERzIxQ0wxbXZhTEduSFJ1alpiZ244Q1gybTF3ZmhZMU0ra3QrSy9PUC9BRk5RTnZXd3JlY3dhWFc0QXRlcXlXSGdCbDF0VWxkUnBDcUxXRis5VmFMQ1dRNml4RkJKRDUxVlhodk1BR21aQmY3R3FsdDBOd3JVbGNJMHo0bVRGaS9PN2Nza29Yb05zVFNPMzNEU3NQWVVuVTYwSnM2VnhIS0s1VkF3OW50cE9PN1F6TGlUUnlUOVZmVDBYRjhyTk1pN0lNci9BRE1GdWdEbjUxSHVlOWFNYWgvVXhadlZWUHlqbWIyQ250cHBXeEl4RUlnWFAzMUpJaEYrbEFDN2FBUGZLTmFDRHd0MHFBRHd4M3Y0ME5reVdtSWlCYmJ0cjIzS3c3VzdHcU1FYUhqTWlab1pJcEdKM3huYjdyVml6VjBOM1Z1NWdwcHg4Mmh2YXRtUFpHT3kxWkdLMHdpQWNpZ0Q0VUY0QUVtZ0lDWWhoODRHVWdCVDNxR1ZndFg1NFJTQVJqK2tCYlNsdkhKWlpHaXQ1U2J6NUZtdmRaQmNlK3IxVUZHNUlZdHA3cXNRSjRqeHRRU2lWanFMYStGVmJKTFhDbVlZbVRHdjFTc0FLUzZwMkhWcytMUytKZVhtL0tTdTcrcHRDZmNkS2pob00vTGJsUG1EU05lM1ExcjFPZEFNNkVGdXRFRWg0NUJvTFZNa0JBcGI1Z090K3RCS1FqeE5FRk4wWU9MMlU2cjc2cTJUQkg1bEEzQVNNeEl0bXdDd0dsck4xTlJid093TDFBOFNWNE1PVTQ1MnpEa3BKRWJ3TVllMzNtc2Q5V2JOVW16VThWeWFaRWNYSlk1QWlsYlpNZy81ZVFBTjZlN3VQWldXL3BadXhXNTErWWYxOWlSK292VE1tUnRMWkhGZ3pBcjFNUjBsSHdGbStGTngzTXVYRnhQbjNJakN1eUtkeWcyQnJvVmVoelhvUlRBVDBxU0JCRWI2MEFQRUlOZ0RZblMvVVVFcEF4anl0SVlWVXRJTmJMcWZzOEtIWlFUeEN0eCtYRlpuaVpSN1JVYzZncU1rNGtQbUVEb2FpMWlJTDBjQk9JVm1WVHNQOGZiM1VuODBEYTRiUFlMQmFHYll1Z1ZTcFB3cE45UmxIRnRBRThHK1JGWHF3R2xNcGZRVzFMRHljQmt4UURKbVV4eE1McVQzdFZ2enFVV2VDeFNUaFJjRHByVDB4YUlqQ3BKa2J0Nzk2Q2pHbFJiVFNnQkhjc3FvM1JlbEFDVUZXZVVBdCt5aGtvbVJpeSsrcU1rbTR6QklTLzhBZjdleXF4cVdXeGYrY241U1p1KzRmc05IN1NPVG1UV3Nkdlg3NjF0R2FUekJYOTlVSkJGR1U2YVVFaFZacldKMW9BY3dOdTlSQklMbDRoL3B5UnhmVE5nQjFzUHBidFZiRDhPOGtHSFNLWFMzK2NtKzhHc243emRmN0xQNkVuMFNOdktaM0Z5U0R5ZVNpOHlNWHNGbWhHNVQ3eXR4U2NrTlNUMXBxZEM0VWhVOHFaUTZNREhJaDFCQkZpQ1BBMG1qaG0zTldVemhQcmJoTWJoT2V5Y2ZBWXljWTdGOFNRNmpiZXpKZXcraHZscm80TXF1amxkcnIyeHcydEdaMjFOTWtDRUR3cVNDYmdZaXp1b2NYVW0xbDZuM2UyczJiSzFvaloxOEU2czIrVGg1RExCdy9FcEhnNHliZnhVNnhocFdrWVhXUHpHSGZ2clNxdlFmYWltQys0SGlaT1BNMzVpeXpZOGlsbkJBZFhCNm0ybHZoVXdYaExRdy9xS0hqY1RrM2t3YnJqTTVDazZxUFlEMXFpdTUzS1pNYWFOQkhsZVQ2UWp5cmo1OHZ5dGZBaTRxYlVsbGFaWFNwbXBQOFlsdjRnVGYzMU14VXowKzRrbDF4NUVrSzNaUUxWTkZ5Uk96azBuT1RLUFR2RTViWEp6WTVQazdEYWJVTENreDFzN2RUQVRJR1k2YVhyVW1aQ0U4WUJxNERkb29LZ3lvRkFEQ25VOXFBUENQMjBFUU9TSTMwTkRKSlFVZ0FWU0NTVkFvL0JFblZpNXFyMFpQN1pMbmIvNEFmSGNEOXhxMGFGZk1HeWVObTczdDByUVpoNkp0Rmo5WGpWQ3d4bGMzVzR1T2xCWVh5M1hXNEI5dEdwSXJLeE50d3FKSUdjdXpqMHBrS3JEL0FQZndiajE2bzF2dkZWYjFIWWl0V084VVh6RlMyZk1MK1A4QVRKckduNnpvM1g4cTM2R2JoejNqNVZwZ3pCRWtIZTN5ZzJiN3Fqc1U5TEU5TEp4eUpuWk9Jem9wMTN4Z3Fnc3UxdEdCVWR4N3RheFk3Sm5iN0dOMWYxS3Y5UVBTK0h5ZnAyWEx4d1k4dkZmejBDZ0VFc2ZuQUg5Nm5ZWHcxRVBsbW5FL2hwK2h3dlVuV3VvbktPQmVzT1BnZUNYTmowNm1vc3dwV2JGdHdmbTVITFkrRmlJSk1pWmd1dXFxTzVyRG5wcExPcmdjMmhIUS9VUEt6OE9JOGVQSFJkNnEwckhvMjdTL3Z1TktYVEpJM0xnU01WeTNLY25nVE5Ea1pUK1ZLQ1VZTm95RTlSOGFkU3ZJelpYd2NNbzhqa0k1NDJRa3VKQjg0UDdSVEs0WVlxMlZNOXgzTjVNV0svQnp5YnNLU1Jab2lUOUxxTEFqd3VPdE9lUFdSUE9WQmVRbTdvUnJwcmVzMS90SXF2VVN1VmpBa1hZYjdsR2dxY094T2ZSbDd5OGNyK21QVHlEWGJGTUNQQzdkNmx0SmtxbHJKUVlyTVJZbklEWFBlMU5xNUZ0YWxmTDRVMHFCTEdwS2dtT3V0QURkYjlmaFFCNEUzb0FMR1R1dFFCSlE2YTFVbndTTWNIOE1Hdm9XWWE5cXBhT1JLVGRDKzJEOG1LL3c2SDdqUnkwa2lOVFlKSmM2OU9sYVpNOEJ3UWFKQThGQllrZGFKSmtJWXc1c1Iyb2dKQXZFZHU0ZkdvYUpBOHNuL2xQTGRUWXJuNHVoNkg1WHBkaDJJak5qU0hpaGtkMHpDeC82Y1Z2MzFqcjk1ME10b3h2OUREengyNUNaU0xBc0Q5OU95ZVRGVlE5RHFIcGM1V1ZqSnl6NlErV21HZGI3NUliL0FEa2Y4RmhYSnJScXpaNlJacXZHcStUWCtTbWZneTRzaHVKRnQ4ZW9Qd05Nc3BVQ0szNFdWdmdjUDlmK212OEFUUE1yRWhMUVowZjRtTnRMWEpzNmozTis2dWgxMjRnNWZlNHUvTmVUTE1Tc1pZZDlMMDF1UkdLVnFhZjlNWW96eldUeUU3aUtISFFLSE90bU92YTVySjNMYkk2UFJyTTJMejFibjRQTWM1aDQzSFpJeVl4WlppdDdEYVN4QnY3NnlLYTZtNXZrNEs3MUR3RHp3WkhFN3c0UytaeGNwNmdNUDZrSlA3dmpWOE9aMHNMN09EbFZ5Yzd4NEptZDRpTnJyb1FkTEhwWFhkbytod0lFbmphTjFRL1VCL3VvVGtnMVhCNWY0aFBJYy8xNEJyYzlWSDlsWk0xZEI5WDZpNzJxK1dwY2dMcDFwYWZwMEozdHFXL0xjbml5WU9OeCtPVDV1TXJDUU1MVzNkTFVxdGJONm1xMlJWckNNVG1XRHQ0NjF2cWM5a0NRQzlNUkFFaXBLakNPbmVnQmxqUUE1UWFBQ0tDWEFBMVBTb2tnbCtSS0FBVk92Y1ZFb2tuNER3UjRNa1dTUCtZZmZwU1dtN0RxdUtRVys5ZnlvdGIrbnVHbjkyeHEzSDBsSjlScm9VTEFYdDFyU1o1SkhrLzNyRTFNRUQxaEZ4YzFNRUJGMDY5VFFBclFnZ2dIcUtHVEpFNWxkbnBETjBOdnpERi83RDBtK2cvRXp4aXZ3TDYyMzVVZjN4aXNsUHVOMmY3SU1CbUwvbnB6NEcxL2NhdGsxTTFOemUvcC9taHNYSjRobS94MU9Uamcvd0RleGZVQjcwL1pXTGM2VkdsQnMrUHlMT3BQMGs3VDhkS29qVGxyb1kzOVdjUDh4WERnalhkbFkwVWswUjZYREVCa0h3VTB5bVoxdWtYeGRCWnNGbis1SEw4N0RTSEhoTEhySHZLK3l0MWJTemtYcXFxQy93RDA4NDFPVjRMa29ZNTNneWhPTmpvUUd0dDBCMDZWbDdmM28zZTNyME0wWHBuME55RUhLZml1U2xYSWdGL0tCQTM2ZlNManNLUmUzSTBZOGY0NTh5SjZ1OUtjdEp6R1BIanhSZmhUdEJ5Sk54Sy85RlRhaW5HcmNoZDJ2VmNURmV1ZlNtZjZiaC9NVEVrTVdZMjN5NFdaMFZnRnVkeDdNYjF0NitWVzlKenUxaGoxSXgwdVQrSXkxSjZLa2YyOS93QnRiWWc1cEp3ODFzSFBUSzZiZEpGOFVZYWlsM3BLZ1pWd3pZWmVSWXBMQzExS3FWSThLejByOFMxbjVRR1RsREl4ZGdONUd0WDRpM2FTdW1sOHhpZkdyb2lTR3pVeEJJSWsxSkEyNXZRQWxBRGx2Y1hOQUZ0ZzVHREVpSEpIbU8yaFVEcFNiMWZndlM2VzVOWE54WGxFYXB0aTZBOWFvNnRLUzZ1bXlLNkd6c0FDaGtZaXIwWlc1Yi9OK1JGcmVCL2JWdkJIN2piUWtDbm1hQTRjTDJ2VXlFQ3RJUjBGRWhBaXkzN1VTRUJmTXZxS0pDQVBPai95Wm1NZWg1SEgrNUdwV1JqOFNQU0MzcHpjTkxaVVJILzZOWk1iMVp1enIwL29jOHlpejVjOWhleDE5MTZMdUROUlRvWEhEOG5CeHVYaDVBTnBjZHhLTGVBUHpENHFTS3kxbzIyYjhsNnBKSFRtTWFUQm9EdXg1MUUwVERvWTVCdVczMjB1eWcyVWZLcEU1N0R4ODNNNC9JelhlUEVLUEc1UWZNSFUzVnIrR3Q2VmRKdFdadTZtZTFLWFZOOXpsWDZoOERrOFB5TXp4cVR4MlFTTWVYcUVQUXI3RHBYUjY5cXJSSEU3YzJmSWIrbW1XTVhsWmNRbXlUcUdBdjhBeEwvdnFPN1hhd3oyeTYxcWRibnpNdmoyaHljZElwbzNCVmd6N0hIaHNVL0t4K05ZblpyWTZmQldsRmhITGw1M2x2bFFvanNvTzJOdDYzSGRXc0w2VU96YkVwVm9vazUvK3VuTlkyTndXQnhEQWZpTW1ZeTdSMUN3anFmWnVZVnQ2cW0wL0E1M1pjVjE4bkRJeVNSTVBEVzNzcnBITExWNFIrSkZ3REc0c08vVUJoLzJxWE9rakVwTHlOeitHamhKK2VOQjhwL2w3RVZuVGxrMlJGY2tQVGtoY0RDMWoxb2dnQTJ0V1FEYkR4b0FRMnFRRW9BOFBmUUE5VDk1cXJRRmhpTXFsR2Y2UVJlcTJxU2ljN1JyaXUvUlBNTnZjVFNxdHlNdG9pNTg2TDhuTGFlVHArdzAzaStKWGt1UnNJMUp0MnZUcE00ZmFMMk90U0FoRFcrbW9rQVpKWG9QZ2FKSmdldTVyWEdsU1FPNTVUL29uS1UveGNsQmM5cmJHcFdRZmkyR1Q2ZW1sVy8vQU5XZyt5RVZreGJtN1A4QWF2cC9Fd3hLL2k4d09mcFFsUjQ2aXFaMnl2VlNjbE5ueU1TTEczWFFVN0FrWnN6MU9wL3A1eVk1bjA0dUc3YnMzaEg4b2c5VGpQZG9qN2dicjhLeTlpbXAwT3BsMGcwMmJpelorR0k0VzJaRWJxOFJPb0RMcGJYeEdsWnZFSFJ4M1ZiYTdNc3ArRngrWDR2eStSeGxlV2FJaVdHUURhWEl0OEwxb3I4VG4ydWxlUDJuejFtWVUvcFBuNWR5U1FuRk82QlNDZHd2MHY0V3VMMDF0NUtSNUhYeExEa1ZxNjFhTm5pUzR2cVB5Y3ZGT05rbHdOb3lMc1ZQZ0JmNVQ4SzU5K1ZYRE8xZ3lKMWxHNGp5ZUw5SDhhY25MZE1kQVBseDQyWjdzZTBhSHVmWlYxYURuNWs4dG9SODgvcU42aG45UytwWk11VWJJb1l4RkZGZTRSZnFzZmJyclhWNmRmUkp4dTliMThmZ1VlUFlScVBFSDdUV3RtSXNJSkNRWmVvZzJzZmNGSUovWlNvMGdZbkJLeHNuZkVON1c4dHRDTmR1NDZIL0FJVys0MVRqQmFTUTVWaUdYNlNPOVdURnNDYXNSQUpoUUVDVUJBMGp0VWtDSFRUdlFCNGFHZ0I0dURmd29BbjR5R1NQNVRxTzNlcXRoQkxsaVA1WXpQY0dOOVBqV2VyOVk2MVBTWFd5UC9UQjA3QTMrMnRFNkNZOVJ0RjE2ZGF1a0tDaFNwQi9mVmdIRmlCcFZBR1JmT3dKMXFZSVpJWHBZYVV4SWdaNmdVbjBSbFcvL3NZUCt3YVRsTk9IWWlUU2djQ2taUHpmaWhwNDJoVy83YXc0cmVxRG85bXZvWDBNTk1YR1hsKzVoK3lyNWxKaXdXYUtqTVlsZ1RwMnB0RkF1N2t0L1FQTnR3ZnF6Q2xaclltYXd3c29kakhPUW9KLzRYMm1welZsRnNOb3NkNU1Ia1N0SDdmMlZ5cmFIYlZwUmJZekdTTUUvVVAyaW5ZMW9ZTXExZ3ovQUs1OUs4YnpuRlBQa0tJc25HQmVLWVdVaGoySjhEVTVjY3FWb3pUMGMvRzZyWlRVNHVPQ2t3OGd0RGVPWkd2ZU03VmV4OW5RKzJ1WGt6MjJzZXh4OU9tOWZQZ2xaV08rZHlLdmtGengyTEEyVk03c1N3V0pDMGczSHY4QUxhakRMY0l3WjZQRW03TFE1SGt6SEx5SmNsdnFuZG5Lais4YjIrK3ZVNDZ4Vkk4UGt2eWJaS2cyUkJ4SjFUc1BHMTZsbEFvem96c1F4ZktUYVRhVDh3UHU5bFZhTFNTOGFONFdhUWplb0h6b1JiZEczVDdmMjFSbGtUSXRwQVNNNzExTVpKMUk4RDdSVlNYcU5ZMjkxV1RLZ2liMUlRSlVrSHJYb0tuclZJRE85QURnYUFMRERiYXdid3FseVU0SlhJemlUQ0FVNkYvbStGSngwaGpMWG1wZFdQOEFwVSs0ZnZwOGFDZjNHNWdGMkRFMzE3MDJvc2xOdEZyaTQxcWJBQ0p1UGwwdlN3QngzRGFucDE2VktaRFJKVXJhcnlDUTduaGYwTmw3ZEw1OEd2aDh0S3ltakNVaXNaRUVKUHl4c3NnOTdJby9kWE14UCtiQjJlMHYrUFA2R1N6aVZ6c3dXc0NHdDhMVnF5SEp4SW9wN2ttL1FmdnBpRnNodkswTThVcS84dDBmL3FrR3IyKzBLZmNqNmxrSWxaWnhxc3FxNFA4QXhBSDk5Y2pJdFRzNG42UitSek9Cd1dJY25OZTIvU09OZFhjK0NqOTlYcGtWVnFVcjFyNXI4YUdaay9VdEp4SkFPTTg3SGtCWGFYTzRnK09sdGZaVVB1cmFEclUvNjQxNm5lR1VHZTJMbHNHZ3dKb1kzRnlraFFsU2RTRVlFSFQyMGpMV3QvQjF1dXNsVjZySnNpekppcGhUOGJ0bGZEejRXaXlsa1ZZNWxENkh5bTFCSUIwcFZGK0t5ZFNuWndXejFhdnY0ZzQ5Nm85SjV2cGZORWN4R1J4MlFESmhaOFkvcHpwLytGMS9qUTZpdlJZY3F1and1YnJ2RStMS1lPR2pES0R2dlp2YlRSSTlZN1NLR0JRWHY3eDRWRWdhREJoWE9nQ0JpalJLZGpENnRyNm5yMUhzck8zcU1QRENmSG5rZ2VSTndVT0h2dFVnOUxuK0UwT3haSVNaQ3RyOUNMMzk5VFVMS0FHMDFjcTJlQTFxU3NqOXBvZ3FOdGFwQWF5K0FvQVJWUGVnQ2RCWlJWTEFFeW5INFRiM0QxV3U1TDJOSnZIK2xEMCtrVTN4Slg5eHQ4ZlQ0R3JWWXRoNUNiZ0R3cVdBTXNBZmRWQUI3amNrRHBRQVFNUUJjNkdySUNSekJKOUI1ZGpmL3dBUWh0LzFhWGtINFNqeGxZeHpURS9SNUsvRXIvc3JsNGY4ZzdQYi93QWI5VE81a0c2Yk1uN0ZXK0JyVmxPWmhNOU5HUG5QVzFyVXlyRldSVjVRNmp2MCs2blJvVXE0c2ZTL0NjakRQNlg0cmtuY0NKdVBoZVIvQW9nVnZ2VTF5Yy9wY25ZNjFYYlJHRDVqazh2bk1wc3lhUmNiRVg1SUZKdFpBZTF0U1QxTlk3VzV1V2V5NmZWcmdxa2xObnVDaUN4S0doQmt2MElYcWZqVjZxQnoxM0prYVpNMFprL3JMc0Z5dDdhZDlEVjAyek5kMXF3QW1KdkJOWnd4c1ZjV05VZHZBL2k5MFFjekVpbWlrNHpQai9GWUUzenRBeHR1QTZPaEgwU0wvTUtYVEpiRTlCWFk2ZUxzVTFXdnhPYzh2NlF5c0NKcGNObXk4ZTVMS290SWlEdXdIV3c4SzYzVzl4cms5TnRHZVY3L0FMSGZEWGt2VXY4QVlwaklGeG9vZ2hNa1pKM2k1M0tScUNLM0tOemd3eXo0eWZUeXlRcm9QbEhUY3BHbjJXcWxxbDFiUWtTdHZrM0UyT3hsUHRGdS93QWFQQUliSnVNY2Fhc0lsc0c3V090VXE5Umw5VWdCdjE3ZEthbUtHOTZtQ2c0SDIxSUNFOTZnQnQ2a0JWdlVBVElSb0w5S3E5U1JNclNJRHhjMVdpMUN4bzl3L3dCSTN2cnR2VGYybFoxTjlqMlZUdEF0UWtVWVpqWTN2cm9QaFZ5QWN1d0xld042cUFKQXBObEcyL1gyMEFTQW82ZUZYU0FrOG9vSG9QTXNQL3VFZHZndEt5RDhSUTQ3YmNYTEkrcFdnTnZoWEl3ditjZHJ0ci9qSi9NelhJekx2bWlCK2QxYTliY3U1eWNleFR5UjNSMjY5T251cWxIckJOa1VlVmU1djQxdVJtYk9pK20vVTY1UG9hUGdRNS9HWVU3eE92YzR6a3lvZitzU3RjWDNLYXI2bnF2K3Y0MWU4dndIZ2FDRlJOTVBObnRhS0hzQU81OEt3VWFxdGRUMTE1YmhhRHBjek9PaGJ5MVBhTUJkUDIxRjhseUtZcTdrZnpXdmN1MS9IY2IvQUxhenU5MTVMdkhYNEhua2xheExrMjZFOVI4YXRUSzUxSlZVa1NzaDVKQVZOaEpBTndjSFFqVHA3NmZiVVRTRkFIR2NHZFhKMnlBM0JGMU4vWlVVY2xzbU5jV25xWi9tK0Fqd2M1c2pGVUppNVp1Z3NBc0xOOWFyclhWdzU1ckI0ejNMcEtsblpMUXpzZkd4WXp2TEtmNm9iZkJjMlFnalQ1dW1oMElyYXNzd2NTMk9HTmRIUUJKUG1ZRDVyOTZZVmExRDRYNGVVdmpNL2tlWVFZMkl1bzdzQ0I0MjBxa05GNVRGeTRzQ0tFTERONSt3RUlGK3AzWTZ1MzhpcUJZRHJWcXlWdkJYVTBTSnJRQW10QUh1dlNnQjhTbHBBZzdtb2JBdmNYaTIyS1dOeVNMVzdlK3N1VFBBL0RpbGxkeUs3Q1ZQWjJIMlV6QmFWSlRQV0xRYUhZUDlJWHQvRCsrbmVET2JySGU4ZngrUFdtSmtNa214YXg4UlFBS2NnSjh3NlVTQUtHUkE5KzFDQnNsQmxkN2RqMUZXS2s3bDFBOUI1SUF0L240Lyt6U2NwcHhHWWdVaE13bjZTSVJiM2Y3NjQzWC9BSzdPNzJ2OFQvOEFSa3VVUCtZbkk2N0d0ZnRhdWhrM09MakJ1RUdIQ1Y2dkFqTWZFbTlLbjFESDlwbThzL01lK3RicTdHVm9sK204cjhOeWlJeC9wNUlNTGU4NnI5NHJEN2hpNVk1K0IzUFl1MStQT3F2YXgwT0xNV0NOSTBnVTZYWjJQekUrTmNTdWRKUXR6M05zYmJiblFScjVSM2VWOHg2RlE3L2J0VTFhN2RoZjVxVThnNU1lYUpkekE3Ty95Ti9aV2Q0Mk5yMkt2eUFKcW5IVWNtZzBUU1cyS042MkpzUnU3Vm9yYlZvcTFVRXB0cVJmMkdrODJtWGFiSkdWSXNuR3lLeERLbzNvRHFRVUk2MnJkaHRPeHlQY3FmeXJ5WmJLazJ0SUFvMnVCdlcyaFA4QU5ieHJxWWtlRXlNcUozREVraTV0MUpONjExRU55UkNUcFJCS0VONnVReE5ha29JYi9HZ0JMbndvQThDYUFIb1RmY0JxS2hnYVhpTXpjb2piNi92cm45aW1rbTNxNU5ZS2Zsd1Rtei95cTNUM2luOWQraENPenJkbWgrYi9BRWZidHMvZldveUcreDFGcjZkYjJ0VjRKWkoray9LQVBoUVFSc2tBcVFkUlEwQUNBS05MQ3c5bFFrUXlXdHJnNkQ0VmNxaTA1WWJ2UW1SN2M2UDlncEdiWTFZakt3WDh2SUpHbWx6N2l0Y2pCL1haM2UxL2kvcWpIY3VmOHpLRC9GdUgyMTBiYm5Eb1YwVTd5WXdqWUM4UzdCN2hTclZpd3lyOUpVWklPNDMwclhYWVI1SXQyVWhsK3BUY0VkcmEwV3J5VUY4YmFzbXZCOUIvcGx3dUp5bUV2cUhMUlp3NENZeXRydEtpenNSNDMwcmlkZnJlcHRyeWVtOTE5MGRxMVZIR21wdlRoUkJqc1JValBaUUJyV3Jqcm9qa2ZtY2JpbkFpSXVGQjloQU5TOGNrUHNNenMzSSttbDVEOHZuVlBQM2VXem1QNUExN2JTMXRLenZqTU5IVHJqN0g0K2ErMzZscGtlbHVLeThkb0h4VVVTRDZrQVZoN1F3c2FZK3Vuc1lsN2prcTVuWTVyNnA5TlRlbjhsWTdtWEZrMWdtSStwZkJ2N3k5L3RybmRycnVtcDYvMm4zSmRtc1A3a1p6SWNMRTBSdHZZRWtEcUZIYzFicTQzTWlmZk96Vll1QzNzVjhJaGJJa2dtRjBrVUJTZmRYVVZvUEZlZFNnelkvSm5lSWZTcElIMjFzcTUxRTJVRU9ybFJBYkc5cjFZZ2JlNU9sQlU5YytGcUFFL3NvQVhYd3FKQUxHUG05OVJZQzM0eDBpaytZV0o2SHRXVE5XVVB3T0hKRXpKRE0yUktSYTcySHdxMktzSkVaTFRabWl2LzVOdGZUWisrdFhneWVUY3dNRlFmdHBnRDJsQTcyb0FqenlnZ20rZ0ZBRElwQVIyMW9BTXN0aVBzbzVBWGZJNitoR3YwT2RIZjdxVGxlbjZtakVaSkpkY2lMKzZHSjk1LzhBaHJsWWY4aG5kN1MvNGFmL0FMR0w1TjkyWklPdis2dWhiYzRkU0poeGxsWUUrNjFKeXVHTXgxbEFNckRMRWtDcjB5RVd4d1Ywa0JVMklwOWJDM1UramYwc0xZSHBEaXNUSVh5R2VONUFIRzFpWlpXWk5ENHF3SXJHcmVzMlpNVTBrMnpMOHYzMWFJRW9SZExYSUJQUUh2UWl6T1g4NmcvTzg1dWtvbCtnSFVqcmNkTGZDc0dWZXBuc09qZitUVmVEZWVrdVJia2VJUjVXWjU0R01ValBxU1JxTmUraHJiMXI4cW5tUGRNQ3c1V2xzdzNxWGg0K2I0Zkl3Mkg5WUtaSUc4SkZGeDl2UTAzTlJYcERGZER0dkJsVi9IOERnalFTcWtra3YxeWJ0M2lBT2dyRlJjTkRWMnNqeTNkbXl1a3NwU1FmVVYwdDdxYWpHMFFqQnZrWXlEY1hCMVBqVEs1ZENqb1FKY1VxVDJBNjFvcmVSTHFSbVFBNjAxRlJGUWsxWWdJRVVpL2Z3cXNralNsdTFFa0hsakxkQlJ5SWdsdzRyazZDbFh5RjYwa2xtSmsyaTNRaWtPMGpWV0NETzExa3QvTzJsTnFMdnVhRzUvMGhidGJwOGEwZUJIa0VuNmx6cXUwY1pvUDc1LzhBeTFKRUR2OEExTW1iUnVNUHY4ei9BT0dyY2dnRlArbzgwaTdSeDJ5L2N2OEE3S2dPSTJIOVFwWWdOMkVaRDRCcmZ1cXBNRXBQMUF5U29ZOFkycC9tL3dCbEhrSTBPajR2Sk55MzZiakpNUngyYmtFWFlkVG9CU1hhVS9xYWFxSStoa3VZenp4ZUZQbkpHWmlGaFh5d2RUdWNyKyt1YjEzT2V4MnUzcDBsOVRBNXZPZWJrZWFtTThZYitFbTlqMzdWMXVCd2FzSzNKL2duVVJRTmtLNmhpVjBzVDI3MW50aDVialZrYUFIbnBTYi9BSU5oNDNQYjdLaisyWHhEOHpiMk9vL3B4K24zNTJpZW8vVXVJY2ZpaDgrSmh5a2hzaTNSM0dsb3ZBZnhlNnF0Y1M2dE9pV3BmZXArVWtYMUtSZ3krWGl0RkNOcUFXVXdtNFpSNGp0V0RzWnY1aWc5WDdmMDEvYmVwZW8xUCtyNEJtUVlVYWpLU1VJalpPN1o4NXR1TmlMV0hXdFA1MU1ISGZ0VnVGcnZTUEJCNWpMeGMzbVZhY1NOaFFxSTRKVmJhaU4xYVJXQjFwZVM4czBkVHJ1dUxUN21VK2VSTVRsWThVa2pvTFpXUmNNc2lrMlZyZU5nTDBxOE02UFZtcWl6VVBaZkFzZlRYSlQ4VkpLamYxWUpyT3NJdmN0MCtYMm1tNGNuRFF5KzZkZXVSY2x1am9DNjlkTGpVR3VqRW5sejVmelBXbkdtVEtpOGlhL215S0dzUDV5S3p2cjJuUTF2c0phRlovcVBpZEk1dk9VcU5QbHFmN2V5S0xMVWlQNmt3dCsxRmtJVW14SUFxYTlabEhtUUNYbmNXUmJiSkw5YjZVMVlHaGJ5SmtWK1h4WElzajZleW5Laktja0d4czdIbVlxQVZ0M2JTcGFLdXg3SXpzZkhaZHh1VzFzdXR2ZlVRd2thT1Z3enFWZlgyVkhGa3BqMDVqQlUvUy90MHFybzJXVEpNZnFMajFIMHVEN3FSYnJ1Uml5cEJUNms0OGpSWHVPOXFLNEdpYlpreUUrWEN5bHQ0WHpDV0FQZ2EwVnBBamxKZS9uL0FCZituRHgvbkwrSjJnYmZiZnhxNVNOUzJqUk51cXJmM1ZKVmp6RURZQkFiOVBscUpEVUhMaTdsS3RFRGJxQXV0UXkyb0tMR2hqNlJMOFJyK3lwU0FQSEd0d1JHUHNvWUkzMGJXL1R3RWZLZnpKQi83b05Kdjl2Nm1paGxlU0t0aFNMM0NSRWozdmV1YmcvcnM3bmVYL0RyOVVZWFBYZGtOdTNFanBwb1B1cnFTZWZCWXhDQTlmSG9hcGN0VTZoK212NmZSOGtxZXBlZWovOEFDMWJkaDRyalNjci9BTXgvL2xnOUIvRjdxb21OOHd0emErc1BVOGVIQVlvVytkaHRSRjc5dEFLd2Ryc2VEdSsxKzN1M3FaempnNGM3bU9YekRLU3lZK00rVkw4d1VvRklBMjM4YjFqcGo1YW5vYy9hV0ZLdngwTC9BQVVna08yT0pwdkxVaVVrRmdHWmdxMnQxNjA5SmZ0RWRpN3JQSjdrbmtXYkNkZU55cmlmSGpGa09xZ1MvT0ZKN2tkRFU1RkNVaWVwR1NiMVdqL2dBd3VaVlMySEZDSVJsSVZsV1FuWTdkRllBVzJtMVVWOWRFTnk5Ri9mTXdXa2NvU1ZBN0JXVUNIb1FwRjdFM09vdFYwbVk4bEpxLzhBVTNuSDUrT1hUanBaMGw1Q0dOZk5DWHNkT29KNjZhMTFLWFQwazh0bHcyUzVwYUh6ejZoNG5INDNrK1F4SklsODJMSm1DRWdEVGNTRDdpS1UzYWR4ajR0YkdmOEFKeGtVTjVVWlp1dDF2VHRmaVp0RVJteE1VbldOZHhQaFYxWmtPcUFQQmpDNFdOYWxOL0VyQ0FORkFQOEFsclROU29xUlFnN2hHQWZaVWxXSTBNVjdsQWZmVVNXRjhuSElzWTE4S3JJUU9YSHhTTll4cjNxVlpnR1RDd21HcUF0VkxYY2t3bU8vTHNJQ3hUWHRyVWMyVHhSQ2toaUtsU29zcElGTVJSb25mbEdCK1ZmaXZMK2UzalV5VU5iQTJtdmFwSkQ3N2FyUVFCa2NpNXVSZnJyVU1rQWpHNDFKSHZvUkREb3gwNmo0MUpLTmtzaC85UG83bjZ1WFVmWkhTcjdmcVB4bVh5V1o4VEpmb2RtT0wvOEFTYit5dVYxLzY5ajBmdVZZNmRERzU3U2lWck0zMjExa2t6ekVtdS9UTDBOUDZyelB6RGtONituOE5yU3NTUjU4ZzE4bEQ0ZnpudzA3MHV6blFmVFRjN056M0lRNHVOK0d4YlJSeEtFVlYrVlZWUllBQWRoV1RQZU5qcmREcXV6bG5LT1k1Vld5U0l3Y3JPbEpTQ05kV0xIK1VmdnJsY2VkdmtlcnF1RlBtV2ZvWEltOVByeVA0L0dHYnpQS2tCMVZqNU1HTWdOa1p2NWl4MXRYUnBaVlhHcU9SbjZHVExaWHRhRWpUY2Y2bGw0dkc4aURqTVdOQTVKamhkaXhKMXVTdzcxS3UxcEFyTDdaK1MwdTdaUStvT1MvRzU3NW9oYU1aaTdIRE51VTdRQUNsaGNHc3VhV3pxKzM5WjQ2Y1oySU9OeDNJY2dyUEZHQXNDczBrbThGamJwWmZFVW5IVnRtbkoyS1kzRGU0Ykd6OThTcExxQXdOMnV2emROZmhUSzMwZ3Jrd3k1K0pwZU41UmtkSnBVTWlpYU4xa2pBdmRTRjJqWG9WRlBwYlU0blo2dnBoZkJtRy9VOGpIOWFab1M0L0VRd1pBQjdiNHdQMnJXNXFXZWNUaXFSaXpNN2xJemJVZUE2bldycENtUjVKUkZLYjZzdE5TbEVFU1NiY3hKRnFza0xrWkhsU1FzV1FLU1JiNWxCL2JWb0NUelpVanR1Y0xmMktCUkFFakc1TnNWZzhhUXV3dnBMR0hIMzFSMFRKVjJpUTNxWEtiYURqWVh5QWdXeDFGNzl6clVMQXZpUzhyZmdyNU14cHBHbFpVVXNkUXEySHdGWFZZRnRpcGtDMWhZWDcyb2FMSmhnNWNCRjFzYjM3MVZvSkkwbWl0Yld6RVZhcERMTzUvSkw5djhBYlZpcGVSU0tSMkZBRXBKWWg5V3ZjYVVFQTVuUXJvYUNRVUxKY1h2OWxRaXBKUXBjQzlTU2E3SWRFL1R5QTloekNhK0h5Q2w1TmpUajhHWW1iL3d4cEwyVjVFUnZBZ0JtRmNicTIvbjJQVis1Vlg5blZmQkwvY3FzSDA5UHpPUVpIY1kyRUhzOHArcGdCOHdRZDY2T1hQeDBSeU9qN1ZiSjZuc2RiOVArcE1ERDQ0ZW5jS05NWk1KTFFiZEFZKzVQOSs1MVBlc2k3UDdXYjgzcy9GOHYybUw5VWVwNXBzc2NkZ0E1R2JPZHNjWVB2dXpIK0ZSNDFsZkxKcjRPdGk0WVVxcFRkN0lkeHZIUmNUQWNpVnZ4UExaSzJmSUl0dFU5b3gvQ3ZoVGtsWFJEOGRIWjZ1U2ZoSEsyVFNNVlFXQ3hLbzF2M1kwVmt0bFZKU0kwdWM2UEhucm9wL3BaS2UyLzFWVzEydFJ1UEdtdUlkUitKaWJIdnRMRGRFd1AyV3FkMFI5ajBLeUNXVk1nUnM1aHk0Mi9wektkcFlkQ3JFZXlrMWN2VTA1TWFhbUpUTER5VWwzQmdKTW9hdWQyd3RwMVlkQ1JUSFJHUGsxOUErUEpQRmtRcy84QWdwSXJxcmFSbXhIMWJUcWFLMWNpOHRVNnRlWU05K3ErV2szcnJJQUkydzR1UEdiZENkbS9UL3JWMDZwdEhnNzFhaVRIcklxU2VZM1FLTFZlSlFwYU1oVHY1a2pPZWg2VTZxMEFqbXJGQnBzVGFnQnR2YlFWUGJRZEw2MEFlMlh2WTBBS0loM05BQkZSUWJycUtDVVM4V01NeEowdFM4akwwVXNqVGphMGdIOHhOVFZsYkxVcy93RDdILzdlTlhLRnBEWUJoM05CVmhTVi9zb2tCSGtHM3ByVUVpSzlqMCtGUWlBd1lGZ1FEZXJKa28xV1czLytiNDRKUHpjMHYzUjBySS9UK3BwcDRLekhHTjVTWStVZ2VQekE1VTlORUlCSUhnVFhuSzVPT1IvVStpMTYzUEVwMjRvZGtOc0F4NHp0aGl1RVFBS1V2cm9SMUJxMmU1cHdZVlZSQkN5Y3hjQ0dUTGRyTW9PM3NTMXVsWjhWWGV3ZHZQWEhqZG40MitvLzA1eFpoRW1kbTNmUHlRSmNsejFSRzFTRWVGLzRxNmxtb2hiSTVmVTY5cXJuZjc3bDN1THkrWTRCSFllQXFqTnV5SmZtQ09Ed1pqZjNDcG5RUzAyeWx6UkpGSzIzNW9NalVEcUFlOUl5ektnNkdKcC9VZGhaV3dyRzUybEQ4akh0L3NOUml2TXBobXhUc0c1V0F6cCtMaUJWMC94bEhZL3pDcjVxK1VLNjE0OUxCNGVTWnRpbHRtVkgvaFM5aVBCcWpGa1QrcGJMaWgvSUpOTk5pa3l4aStNVC9XeDIxQ3NlNDlocGw3MnI5QldPbGJhQ1M0bkRjMnYrWlMwMXJLOTdPTzJqOWRQQTAzSGtUMk1uWjZOYmFOYUdjNVgwZG1RWGZqMkdaR292NVpHMllEL2g2TjhLMTQ4ejhubnUxN000Ym96S1NvOGJtT1VGSkZKREt3SUk5NE5iRmFkamhaTWRxYU5BVGJ0cWF0SXZVWnQxMC90b0lqNUNtSTk3ZmJVRVF4b1FBNm5wVWsxVWpsdGNpK25jOWFKQnBvWXhPdjNVRlJFWWpTZ0N6d2tiYUNhVGxINGR5SmtnaVdVbm9UVjZiRk1tNVoyYjhudC9EdHZWaFJZUm41amJTcEtzSWUzeldQZW9BYVFUMEpvQTh1amZOMHFDVVBWelk2bW9aSzNOL3dDcThaY2YwZnhmRFl1TjVXUzJiQlBKQkNYbmEwc1Y5MGtsckZqMTA2QzFKZDBrMHpvVXhOdE5CK0U5UFl1Wnljb3o0My9EWWt6VE0yMGhYampYYjVlNzJzMnZ1cmk0Y1NkbTJlbzdQZHZUSFZVZXNRVVhyTFA0ckh6SG00L1JOUW1NTFdGdkErRlJreHJMYUZzYk1YYXRnd1RsYzI4R080MFpYTmNpTXZMRy9Hd3dHRWEvUzBqSDVFQTlwclpmRFhEV0s3czVmU3ZrNzJmbmZTbERkUnd2RkdJbU81d2Q4NUhlUnVvK0hTbFJCM1hhWElYWUFMa1c3Mm9JbVNQa1BZblcrbFViRzBxQmdtU2RUQkw5SjBCOEc3R29WbE1GMm5WeWl1a1FwSVViVWdrYWZkV08xdU5tYkt2UW1RY2hKR0VSbHVvK1V1ZXR2QSt5blkrenJCbnZnVmdXVENJeUpZdjhGemRmRlcvbHBlU2tQa2h1SzA2TWw0bVVzeWhKckNVRGFXUFJsOEQ3SzBZOGl1b00yVEc2dVVSTW5Ia3hKQzhZL3BFOVBDL1kvdU5MZFhSNkQ4V1JXVU1sNFhJQWdRekM0SDBOZjVnRDRHdEZMaU0zWGpWRHVSd3VKNUpkL0l3ck9pbXk1Q2ZLNDltNWRhYlhKR3h6OC9Vcmswc2lFbm92aEN2bUxpdklsN2hUa01EYnc4S2FzMXZpWlA4QTVtQlBZMVhDZnBYNmQ5Ukl2SThoSytNKzN5aGc0eFJBcXJvQ2ZyTi9iV25CVnRibkc5MHlLdDRWTkY4VFY0UDZWZWdNRTMvSzB5V3RhK1M3eTlQWVR0djhLMHFpVzV4bmtiMkplVjZFOUpTeGlQSDQvR3hOTnY4QVJpUVh2WTY2ZXlsM3JSbWpCMnI0ekxjLyttSEZ1R2t3c0tESVZtQUVTcUlYMm42anZValdzdVNsazVyc2RUQjNjV1JSa3Fqa25ySDBYbWVtbVhKTVVxWU16aU1DV3hLT1J1QzcxK1ZnUjBOT3c1cmJNdzk3cTQ2K3JHOURKZ0xlNE5hemx5VElwblVXVTN0N2FwYXNscTJhQlRsbUYyMEpOU2tSWmxuNWgvSzl0djRiVllwSllJZm5QaHJRRUJqOUk4YUdRSVFLcVRBaElCdjNvQWNsN1hQU2p5Q2NIUlZ6ZVI5TWVsK1B4QTBjMlhtY2hINW1yTnRoeUlWZFZEaitLMzJWbHUvUzM4enNZcmNIWDVyK0pWZW92VjNxQ0JwOFNISVJZRW1hQXFpN2ZsTnhlL1VuU3VJczFyVzR6b2VyeDlERXFLOGFuT2VReVpKY3BtYzdqdHRkdXZTdXYxTVNwU1R6UHUzWXRsejhkdkJ2UFRQRUxqWUdOSUxNdmxpVmJkSGxjYXQ3bEdnckxlYk9XZWw2MVZpd3FpTHN4cW9zQmJ1ZmZSQTVXMUkwMlJGRWRzakFEdGVsNUxwSWRXamV4V1pFOGJOL1NiY3AwdFdlK1JHeWxHdDBRTWlSSVZZdTRqSkJ0YzlTT2xKZXV3eDJTV3BIanpra2ozeGkwZ08zYWZIeHFsOGI4bGZ5RW1KaXlEZHFUMXBEMExvUEhJUjhyRGZHd3M2bnVLMTB2S2hrV3I1OGlTTDViZ3d2ZFJxRDNIc2IyMG5TamxNbFdiV3FDTGxTRmkwajc0eDhwaVBRcWZDdE9QTk8reFIwUzJCekpGRklHeFpOeU1ORVBWQ2UxKzRvdmRWMlpOYldhOVExWGtpWVNJMW1YU3gxVzNoYXN5ek9TM0ZQY2xqTURnQU0ySS9VdEhxakgycjFGYTZkbE16L0FJWWZ4SnVCek1tS3h5WVptam5qR292dDBIOHBwOWV4cEtNL1o2bGJPTExRNmh3R1p5ZkljUkJQTkYvbVpGM003M0MySjB0Zld0dUsxNzFrOFIzTWVPbVZwZmFXYVk3SzI3SWxCUFVoYWVxSmJzeTJ5U3RFUnN2bk9Kd0pCQmtaY1VVemFoWGNCcmU2azN6VnI1RzR1cGt2cWt5Zy9VakVpNWYwQnk2aXpHR0Faa1Q5ZFlHRDNCOXFnMC9GYVRQa282dlUrWUxyZlM5YWpNRVRwY2EwQUxKcW85OUFGbmR2eXo0ZmRRVmduSTVIaDlnb0prTXJrNm0xUXlJSGJ0S3JKSWJDNC9QNUIyL0FZazJXRXR2OHFONUF0L0hhRGFwa25nMlNvK1B5WUp6Rm1ZOHNCakc0eHlSc3BQWUQ1Z0t6OXJMeHBLT3Q3UjB2eTVZYTBScHhqdGtjQndzYVhEU2MrQnRPdTBMQ3BJK0FGWThGdjVUZnpPcDd2VkxzcEpRbFZmN21heTQyekdmTGQ5cVoyVktVWHdNWnY5KzZ1ZGFzU3p0OUxQelhGK0lMZmhQMDVuOVdaOGVhQzJKeFkweXByYXZ0N1JkaXg2RTlCVzNvWHU2eEdoeGZmYVlhWk9TZnErQjJKUFMvQ3BDc0F4L2xSQWdPNXIyVVdGYi9BTUtnNDMvME1xY3lWUEsrbFlJb21mRUlPbjBOMStCclBseHd0RHA5VDNTenRGam5QSU5KRE04TGkyMDZxNDFGY2ZzWkduQjY3ckpXcW1WYzVsa0I4dXlzZkFVaFpKTmJNNFM4c3pCMkxPcEkrWW0rbGJxcEk1M0p0dEVtTVN4V2RPdmNIcFZiUTl4dEpST3g1NUhjRnZsSGdLejNva2FLTms0azlTZENOZTFJVm1NSUQ1UzRraER0dVY5VnRyY0duTEh5UWw1RlZrdUNYemszTDd6L0FHVXQxaHd4cWNxUjdTUVJBaWZSWEJDMk91NzJWZWtSRVNSZHdJamh3UDVoMDlvcFJkTWs0ZUprWjA2NDJJaGxtZm9vL2FmWUtLWTdYY0lUbnoxeHJsYlE2VDZkL1R6RHhQTHplWks1V1FDSFdFZjRTa2E2MytvKyt1NzF2YjFUMVdaNHozSDMyK1J1bE5FYStmTmhnWGFMQUFhQWFWdHRtU1VJNHVQQzdibWU1UG00NEZaM2RVUWRTeEFyRmt5S0hKMCt2MXBjSkhOQm13NVBJZVJsaDl1Vk5hWEtWZDd1cE43Qzl5TkNCN3E1cTlWdFQwOXEycGptdWtGcitwL3EvQjRmMC9MNlh3cFYvTXVRaldHU0pTVDVHTnB1TDJ2WXVCdFVkYmExM092WC9ROFQyclMzOFRobGx2OEFXbHZqL1pXNDU3UWFNTHRQekwvN2ZDZ0J6SmVNbTRJQm9BbC9OK1dXM0MvVHJRUVdJTnpwZjQwRVNGV3g5Z29KSGhoZXlpNTdlK3FBa2ZRM292akU0WDA5aVFwam5FbW1SWjhpTmplUXl1bzNHUTl6K3pwV2RXYTFacGFXeUxIbUkrTnlzTm91VGpTYUpocjVnQnQ3UWUxUm52VnFHTzZ2Tlg5RGNuUHVNazQzakpzbmlXZnovd0FOTStaZ0ZqY29aby9MYlgzRFN1ZGJNbzQrRHMvZ3RhM0p2WHlSZlNIb051Wnc4SE41ZFhoNCtHYWFVUW02dk1IMmJEN0VPMDAvRmhsYW1ic2Q1VWxWM09xd3d3NDhTUXdJc1VNUTJwR2dzb0E3QVZzcStLaEhJczNkemJWc0hQbHh3cmUrdFZ0a2dmVEM3R2Z6ZVVMTVJlL2hXTzk1T2pqd3BHTTlVNHpaY1BuNDJ4Y3RiWForaFh3Tlk4MUZZN0hVN2RzZW5neDh1VCtIYmJNdHlPcFE5L2NheC9pMU8xVHZVZTVucFNqRWs2TVN6WDZlMnR0Tm9NdjVxMmJnQitMVUhhMHJhZS85dFBXQnZ3WjMzcVZjTmtyRzVESEJCU2ZwYSs2Lzc2Vms2N1hnMDRlOWpmN2kwek1tSDhQS3NzcWhXUU5FQVJyN05LeVZ3MjViR3JMMmFLc3ladVROSC9MRnlOTHQrNnVyajYzeFBPWi9kUDhBeEZia2NneGhBNVFXdGRUYTlYWFZyT3dxM3VsM1ZLUW95c2pJSWxadHpkTG4yVm15WXEwY0k2ZURzNU1sVXpTZW1QVG5OZXBjcEZ4aVlzYUpyeTVMWDJpMzhJSDhScGRjWExZZG43MzRsTm1kczREMDFnOEJqMlFiNTJGNUpTUG1ZKzMreXRtTEFxSTh6M2UvZk85ZGlkbFpzaFVwSHBwMXE5cnlvTTJQRHJMS2xqSkkxcEczRTZVaURhcXBHTjliU1NSTkRqRWhJZGhsa2M2WDF0YTU3Q3NuYTViSTdudFNyRHUzc2MxelBWamNkSWZ5Unl1U2cyZmk3MzJqcC9UQi9iV2pwKzN1VmEyaGk5MDk2cHhlT212ek10TE5QTzd5ek0wc3NqYjNrYzdtWmpxU1NkYTdpU1I1RnR5RCtTMnR5MS9oVWxRME55dFFBYVFmMCtuZWdBK241Y2RmNGhyUVZMQU5xYkdnZ0tIUHNvSkpQSHpwQm40czBvM1JSenhPNEhkVmNFMVZvdFhjK29MaDdNT2phajNIV3NiZmcxSXJlZDQ4OHB4MlJoSzVoa2xRaUtaZXFQOEF3dDhEVk0xRmJjYjE4anBhVEMraHYwNno4VE5ibXZVMHpTekxaSU1XOXdkaFA5UjdkajJYN2FyK0d1bnlIWDdsb2FYazZVem9nRnJMYlN3MEFGUGRrWmEwYklHWnljY0NtN2EwbStRMVk4RE0xbThxMHJIYWRQQ3M5N0crbUtDb216bEY3a2VONzBsMkhKRkp5WElCbzJMUFlXOGJhVWkxcEc0Nnl6SlBQRmw1SGxSbmRiV1IrMXJYMHFqVFdyT2oxOEhKNmxUS0xLV1AxRVZwcWFMWWxWYUV6RTRiRnpZV09RR0JGZ0dRN1RlMnRMdjJyNDNvQzl1eDVLNnJjck9jNGxPSHhCUERJMHFTU0JDcldCRndUMStGYituMm5tdkRnNGZ1dnQxT3RUbFdkeW9UTWo2N1dCdDRnMTBIaFBQL0FOMHgzNG1JYTJiN0JSd1pWNTFCSWhsaFp3REU3MzZBbTF6N2dLWGtvMHRXTXg1WnNrbEowSDB6NkM1YmxuaWt5Y1A4RHh0OXhad1E3cWJYMFAzYVZ6c2xIWjZIb09wMkYxNlBtNWI4SGJPSzR2RTRqQ1RHeFkxaGpqR2lycDhhMVVweFJ4ZXhudGt0TFl6TXpGVUd4dWZDcTJzTXhZaks4OXpmSTQwYUhFajJxVFpwN0JnRC9MdHVPdFk4K1cxVm9kam9kWEhkNnN5SElmcWhIeDZLc1VLVDVxLzRxS1NWSkhVQmg5SSsycjRLWk1qMjBGOXorM3d0cXptM3dSenZudlUvTGVvc3Q4amtKYkkxZ3NDWEVhcVBwV3g2Mjl0ZFhIZ1ZQcWVmemQyOWx4V2lLU3dwNWtrVFNwSUUyWHNRT3RRU2tHaEE2SG9hQWdOWWJYWHRlMVFRdzF2OHNZKzErdndvSUpTTjE3NjFKVU1EcFFBV045cnF4Nkt3Sjl3TkRaYXI5UjlTUVNMTEJCSkdieHlSSXlrZUJVR3NOaldoV1pRYnNiVzZDb3N5eVFPWExqakY3Mjl0VmQwTXJoYlpRY256Y2NJSVZ0ZmZTTFhOdUxCQmtzM21ETVNXZlNrMnNiRlZGWkx5Wk9pbTQ3bTlLZG1NOEdiNW4xWmk0UDhBU0RISXlXR2tjZlFYNmJtNmEwN0gxYjIxWmx2MnFKcExWc0R5UWtsaFV5MzNFRGNvT2dOdWxZcVAxTTlYVHIxVkZwcVJPT2pLck00R3JMdEh4MG96VzhEc0dPRVE1VjNTaEFPNEh3cDlkaEdSUzRMM0JYWmpna2ZVUzFZTTFwWnRwb2tWWHJCb3h4SytZZFRNbTM0QTF0OXEvcVNjWC9zYlg5djg1S2owZjZVemZWZkx3OGRpcTZRTmQ1OGdJU3NjYTlmbSttNTdWMzhsNDJQRDRzVGUreDJuL3dCQy9Tc21PaWVkbVJUS1Bta1NRRW4zcXdJcFZYYnlNdncrQmY4QUJmcGY2VTRCNHBvTWM1T1hIY2pKeVR2ZTU5bWlqN0tyYXM3azB6Y2Z0TlE3UTQ2MjBIczkxVWZGQWxhemtxczNrZ3dZUi93aTU3YVVtMlI3RzNGaGpjd2ZQK3Z1RzRvc2dtR2ZuRFFZOEJ1b1A5K1Q2UlZxNHJXTHZzNDZuTlBVUHJUbWZVQUVNcnJpWXFra1FRWEFOLzVtNm5TdE5Pb2x2cVpjdmUvOE5ETU5vYlZxajRiSE90ZHR5eHZzcVlLRFNQalVramJENDBBUFZRUmU0SHN2VUVvS0ZDa1dJb0pIQTNCOGIwRU1OdS95NS80aFFWRHJjRSsrZ3FHRHQ0MEVqaTloY3NEMnNha0lQb3IwUm1uTDlHOFhPejczWEg4dG02NnhrclkvWldESm96ZmpVd041UDFCaTRpbU15aHA3ZlNLeDJ1ZExIMTN1WlBLOVM1TWhKWnRxbm9LUTc2bXRZa2pQNW5NeXl1VHV2MnFqdU5TUlc1ZklSNDBYNGpNazh1TS9TUDRtWTlsSGVyVnhPNHJKbnJRekhKOC9rVHhraThXT1R0aGdCMWNqdklSMVgvZFhVd2RTdGR6alorOWEreG5ESXpNMGpQYVFmUGNqcTErZ3NLMnhwOGpDbTA1VzUwTGoyeU0zallKODZMeTVaRkRGZTVIWnJkdDNXMWVWN1dMaGQ4VDZkN2ZsdGt4VmQxRENQNWNhRUtBdTQzQS9aV2VyYjNOYitSRk9HcTJleE1raC9icFQvd0FvcDQ0MU5mNmE5S1RjNUM4NG5URjQ3SFlSU1RINWlXN3FnSGYzMU9IcXZJM1o2STUzZjkxcmdhclZjck0zV0w2VDlJWWpSb2NLTGtKazZTWm0yWGFiZFZEZktQc3JwNGxqeC9hZVU3UGE3R2RldDZJdlB4R0J4ME5rTWNFQzlJNEZDajdGMHB6ekl5VncyZmdIa2N6QWd2RytvNmp2ZXF2T05wMXZpUXp5T1hNRDg5bEpBVzNjbjNVcDNzeHF4VVJsUFUzNmhjWndlN0VqZjh4NUlYQmlpSTJvZi9tUHFCN2hyVEtZclBjWGJMV3V4eXptdldQTzg1SkpGa3orVGlmL0FNYUM2SnIvQURINm0rSnJaVEZWSXlaYzlyR2RjQUVnQ3dyUlhReU50Zzl0NmtFTUtqN2FBQnNnN1VBTkMyMUZFZ05DMjZtZ0FpTkd0Z3d2N1JRRWhnWTIxQzlmdXFHVEl5NTE5NXFKSmdOdVA0Vy9iZDFxeFdBNXZRVVBLeDZVQUszVzkvaFVreWI3ME42My9MT05sNEROazh1QjJaOFdVOUZML1VySHNMNmlzUFp4dmRIUzZXYWt3eUpsZW9VYkprTTdYTWJFWDZnMjl0Y25oYWRqdExKVnJSa2FYbUJscVJHUUZBMVltMXZqVVdwYWRpZnkxK0pGeU12OEhqUVpWaE1NcHBVaE4va0RRN1ErNzNiaFQrdjAzZHl6SjJlOHFLRVpyTGZKeVoyek01MmRMN1V2cGUzOENlQThhN0ZNU29vUnhMNWJYY3NoWk1qU0tKUDkxaDBBcThGQ3g5SzhWRHl2SWxzblhFdzFFMGlmem05a1QzRTlheTkzTndySHhPdjdQMFZueTY3Vk50eVdaSGp4U1pVeHRGRWhadmgySHY2Q3ZQOEFHMlRJa2U3eVpxNGNiczlrWlhEOVRETHpJb3BjYjU1WENqK29Bb3VlOS9DdWprOXRkYU5vNFBWLzdBc21UakQxZWhNOVJjK21FbjRYRE44MWxzVy83cFQzL3dDSTl2Q2s5RHBPem0ydzczajNkWWF1bFg2MlhINlpmcUJId3ZINVBBNTRNbUk3bVdOVUY1U1pEODVVK0lycWRtdkJhTFE4dDFyL0FKSDZuNnZpZE5mbnVKZmgwenNPSmNhQ3hzWlVFc2pNRFkzRjcvZlhPL0xXTk5EZXNOcDFjbFJ5bnJyak9ONHdaaGpXOXdzWG1vc1R6T05UdGkrWmxRZUpxMWZYc2lsNHB1ek01bjZpOGI1TXViaExQazVEdDhzVW84dU5HYlg1bXZjMjlsYWE5VnpETTkrM1dOREs1L3I3MU5ueE5qL2kvd0FOalBmNU1aZkwwUFVidFcrK3RWZXJWR0szYXN5b1J0ZmZyZnFkYWJXQkRiRHlxaXh4eUtBR1lmTWZHbDFlbyt5OUpEYzZrMCtwbEJsclZJQ0Z0Tk5mZFFBTW0raDY5cUFCc3dHaG9BWVdGQUMzMTdVQU9ERWFDZ2xNTEVRRUpPdHpVTkVodFBJUGh1R25hcEk4aHlSMEZCU0JOd0h2b0NCcGVnSUh4a1d0YTlCSVh6Q1ZLSFZUMlBTcU9pTHE5bDVMTG1oR25vZmhDaUtramNsbkIyQUFMQlZoMjNQVWdYb1ZGSmZuYU53c214dlMzRlBOWllseTg2Lzh4Rm90Qjl0VXJVdGtXaG04L0tHWEtYMkNLSk5JbzFPaXIrOCtKNzB4S0JSSGRkeWJVdDFxUUhjZG41SEdaWG53U0JEYTBnYlZXSGdSM3BYWndMSldHYnVoM0xZTDhrU2ViOVNQeXNFV01GOG1KRGVVQS9XMzhKOWdIaFdicDlDdUt6WnQ5ejk1ZllxcUxTdmtvVE90KzRJOEs2TVRvemhxelRUWGdWcGd6Rm1KTEhVa201SnFGUkpRaVhkdjd0V044OTQzV1NJbEpFTnd3NmcrSXFXcDBaRmJRNVJwZU8vVVAxQngvSE54c0JnZUVtNGFXUGV5dDRpNXQ3YXh2b1ViazIvMzE0Z3BKTXZJekoyeU1xUjVwM04yZHpjbXROTWRhcUVqSmU3czViTFBHYmR4cytPZEdMcElwOTJocXR0NUpydEJISjJtMVdLRTFDSFZYWCt5cXBGbVRjaEEzSFlzd3Rvenh0NDM2NjB0TDFGbk1GY3d2ME5QUW9Fd29BYVExcmRxQUdFRy90b0FHVlB2TlNBeXpkeFFBb0Z6UUFRQTJKb0FmSDlIdk5RU21Idi9BRVNPOXhRUUc2MEVEU0RiclFCNFdIWFdnRHdPdWxBQlVJL3RvQXVPZkEvMFR3YkFhamtNMGFkUHBoKytvVEdlQnZJRXY2TTRwV0FFWXpjNjF2cTZSVlNwZTcwTWxJNUxXUFFXQTkxTUZTR2pZM0lIaUtoa29oNUgrSTF0S3NpSEJEazZkZmZVb2dIZnQ3UDMxSURsdllYTjZBZ1J6MUpOQUhrNytQOEFzb0FreGRLQUxUSFlpTnRlM2gycFZpYXNZMjR2cjdyMUsySjhrbkd1STdlQnFBSlpkemorUmY1ZDI4RDIxVGpxVzU2RVp6dDZtbWl3ZThIcFFCNno5S0FHTUd0YnZRQUZ3d0Z6UUF3c3hHcHFRRzNJTkFCRkpxQUNvMWwwMDhLQUNiMzhrblMrNGRxQURhNi91b0lQYTI3MEFlUFNnQkIwb0FKQjM4TzFBRnh6bTcvUmZCN3I3ZnpIUDY5TFdodmFxK1MvZ0p5RzMvUlBFYmJXL0haKzYzWHBGYXFVM0w1TmpHdHRzYjliNmVOTkZCSXI3dGV0NmhrMUkyVDliVmVvTWlTZTI5dTlTUUQ3KzIzNzZDVUt2UWY3YUFaNXZwUDMwRUhvK2g2ZkNnQ1ZEMG9Bc3NmL0FBMjhiYVd2KzZsV0NvdzM4M1c5cjFLTG9sd2ZUcDQwRU1rYTJvUlFqei9WN0tra1ltM3ZiNDBFQ25kZjViZXkxQklJM3YzdlFBS1MvZTlxQUI2L0NnQkQxRkFEeDkxU0FSZnBQaGZTb0FML0FNbjQwQWYvMlE9PVwiIiwiaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xyXG5cclxuaW1wb3J0IGltZ05hbWUgZnJvbSAgJy4vaW1hZ2VzLzI4LnBuZydcclxuaW1wb3J0IGltZ05hbWUyIGZyb20gICcuL2ltYWdlcy85LnBuZydcclxuaW1wb3J0IGltZ05hbWUzIGZyb20gICcuL2ltYWdlcy9qb2xpbi5qcGcnXHJcblxyXG5sZXQgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLCByb290MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290MicpO1xyXG5yb290LmlkID0gJ3Jvb3QnO1xyXG5sZXQgaW1nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpLCBpbWczID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbmxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuXHJcbnJvb3QyLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwiaWNvbmZvbnQgaWNvbmRlbGV0ZVwiPjwvZGl2PidcclxuXHJcbmltZy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICBjb25zb2xlLmxvZygnaW1nIGlzIGxvYWRlZCcpXHJcbn1cclxuaW1nLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcclxuICBjb25zb2xlLmxvZygnZXJyb3IhIScpXHJcbn1cclxuXHJcbmltZy5zcmMgPSBpbWdOYW1lO1xyXG5pbWcyLnNyYyA9IGltZ05hbWUyO1xyXG5pbWczLnNyYyA9IGltZ05hbWUzO1xyXG5cclxuaW1nLmNsYXNzTGlzdC5hZGQoJ2ltZ1NpemUwJylcclxuaW1nMi5jbGFzc0xpc3QuYWRkKCdpbWdTaXplMicpXHJcbmltZzMuY2xhc3NMaXN0LmFkZCgnaW1nU2l6ZScpXHJcbnJvb3QuY2xhc3NMaXN0LmFkZCgnaWNvbmZvbnQnLCAnaWNvbmJyaWdodG5lc3MnKVxyXG5cclxuZG9jdW1lbnQuYm9keS5hcHBlbmQocm9vdClcclxucm9vdC5hcHBlbmQoaW1nKVxyXG5yb290LmFwcGVuZChpbWcyKVxyXG5yb290LmFwcGVuZChpbWczKTtcclxuXHJcblxyXG5cclxuY29uc2VsZS5sb2coaW1nTmFtZSkgIC8vIGltYWdlcy8yOF80MGUxOTcwLnBuZyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMi4xLjFAY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTEhLi4vbm9kZV9tb2R1bGVzL19wb3N0Y3NzLWxvYWRlckAzLjAuMEBwb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL19zYXNzLWxvYWRlckA3LjEuMEBzYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vaW5kZXguc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMy4xQHN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDIuMS4xQGNzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0xIS4uL25vZGVfbW9kdWxlcy9fcG9zdGNzcy1sb2FkZXJAMy4wLjBAcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9fc2Fzcy1sb2FkZXJANy4xLjBAc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2luZGV4LnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMi4xLjFAY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTEhLi4vbm9kZV9tb2R1bGVzL19wb3N0Y3NzLWxvYWRlckAzLjAuMEBwb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL19zYXNzLWxvYWRlckA3LjEuMEBzYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vaW5kZXguc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=