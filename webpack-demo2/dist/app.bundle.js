(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./src/data.xml":
/*!**********************!*\
  !*** ./src/data.xml ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"note\":{\"to\":[\"Mary\"],\"from\":[\"John\"],\"heading\":[\"Reminder\"],\"body\":[\"Call Cindy on Tuesday\"]}}\n\n//# sourceURL=webpack:///./src/data.xml?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/*! exports provided: hasClass, addClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hasClass\", function() { return hasClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addClass\", function() { return addClass; });\nfunction hasClass(el, className) {\n  let reg = new RegExp('(^|\\\\s)' + className + '(\\\\s|$)');\n  return reg.test(el.className);\n}\n\nfunction addClass(el, className) {\n  if (hasClass(el, className)) {\n    return;\n  }\n\n  let newClass = el.className.split(' ');\n  newClass.push(className);\n  el.className = newClass.join(' ');\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"./node_modules/._lodash@4.17.10@lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.less */ \"./src/styles.less\");\n/* harmony import */ var _styles_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_less__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_styl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.styl */ \"./src/styles.styl\");\n/* harmony import */ var _styles_styl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_styl__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.scss */ \"./src/styles.scss\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logo.png */ \"./src/logo.png\");\n/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_logo_png__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _data_xml__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data.xml */ \"./src/data.xml\");\n/* harmony import */ var _data_xml__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_data_xml__WEBPACK_IMPORTED_MODULE_7__);\n\r\n\r\n\r\n\r\n// import './style.css'\r\n\r\n// 如果把css当作模块\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction component() {\r\n\tvar element = document.createElement('div');\r\n\tvar pp = document.createElement('p');\r\n\tvar ii = document.createElement('i');\r\n\tvar em = document.createElement('em');\r\n\telement.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.join(['Hello', 'webpack', 'HH'], '~');\r\n\t\r\n\t// element.classList.add('hello');\r\n\t// addClass(element,'hello');\r\n\t\r\n\telement.className = _style_css__WEBPACK_IMPORTED_MODULE_2___default.a.hello;\r\n\t\r\n\tvar myIcon = new Image()\r\n\tmyIcon.src = _logo_png__WEBPACK_IMPORTED_MODULE_6___default.a\r\n\telement.appendChild(myIcon)\r\n\t\r\n\tpp.innerHTML = '我是p标签ee...'\r\n\tpp.classList.add('hello_less');\r\n\telement.appendChild(pp)\r\n\t\r\n\tii.innerHTML = '我是i标签...'\r\n\tii.classList.add('hello_stylus');\r\n\telement.appendChild(ii)\r\n\t\r\n\tem.innerHTML = '我是em标签...'\r\n\tem.classList.add('hello_scss');\r\n\telement.appendChild(em)\r\n\t\r\n\tconsole.log(_data_xml__WEBPACK_IMPORTED_MODULE_7___default.a)\r\n\t\r\n    return element;\r\n}\r\ndocument.body.appendChild(component())\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/logo.png":
/*!**********************!*\
  !*** ./src/logo.png ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/logo_0f49f74.png\";\n\n//# sourceURL=webpack:///./src/logo.png?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\nmodule.exports = {\"hello\":\"style-hello_3lVs3M\"};\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ }),

/***/ "./src/styles.less":
/*!*************************!*\
  !*** ./src/styles.less ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/styles.less?");

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/styles.scss?");

/***/ }),

/***/ "./src/styles.styl":
/*!*************************!*\
  !*** ./src/styles.styl ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/styles.styl?");

/***/ })

},[["./src/index.js","page/manifest","public/vendor"]]]);