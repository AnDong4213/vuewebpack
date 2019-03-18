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

/***/ "./src/00.png":
/*!********************!*\
  !*** ./src/00.png ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/src/00.png\";\n\n//# sourceURL=webpack:///./src/00.png?");

/***/ }),

/***/ "./src/2.png":
/*!*******************!*\
  !*** ./src/2.png ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/src/2.png\";\n\n//# sourceURL=webpack:///./src/2.png?");

/***/ }),

/***/ "./src/6.png":
/*!*******************!*\
  !*** ./src/6.png ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"images/src/6.png\";\n\n//# sourceURL=webpack:///./src/6.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _show__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show */ \"./src/show.js\");\n/* harmony import */ var _2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./2.png */ \"./src/2.png\");\n/* harmony import */ var _2_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_2_png__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _6_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./6.png */ \"./src/6.png\");\n/* harmony import */ var _6_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_6_png__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _00_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./00.png */ \"./src/00.png\");\n/* harmony import */ var _00_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_00_png__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\r\n\r\nlet root = document.createElement('div');\r\nroot.id = 'root';\r\nlet img2 = document.createElement('img');\r\nlet img3 = document.createElement('img');\r\nlet img = new Image();\r\n\r\nimg.onload = function() {\r\n  console.log('img is loaded')\r\n}\r\nimg.onerror = function() {\r\n  console.log('error!!')\r\n}\r\n\r\nimg.src = _2_png__WEBPACK_IMPORTED_MODULE_1___default.a;\r\nimg2.src = _6_png__WEBPACK_IMPORTED_MODULE_2___default.a;\r\nimg3.src = _00_png__WEBPACK_IMPORTED_MODULE_3___default.a;\r\ndocument.body.append(root)\r\nroot.append(img)\r\nroot.append(img2)\r\nroot.append(img3)\r\n\r\n// console.log(imgName)\r\n\r\nconsole.log(Object(_show__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/show.js":
/*!*********************!*\
  !*** ./src/show.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction addZero(m){\r\n  return m < 10 ? '0' + m : m;\r\n}\r\n\r\nfunction haDate() {\r\n  let time = new Date();\r\n  let y = time.getFullYear(), m = time.getMonth()+1, d = time.getDate();\r\n  let h = time.getHours(), mm = time.getMinutes(), s = time.getSeconds();\r\n  return y+'-'+addZero(m)+'-'+addZero(d)+' '+addZero(h)+'/'+addZero(mm)+'/'+addZero(s);\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (haDate);\r\n\n\n//# sourceURL=webpack:///./src/show.js?");

/***/ })

/******/ });