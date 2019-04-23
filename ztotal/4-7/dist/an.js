(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["an"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"./node_modules/_jquery@3.4.0@jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _test__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test */ \"./src/test.js\");\n// import './index.css';\nlet root = document.getElementById('root'); // 同步代码...\n\n/* import _ from 'lodash';\r\nlet div = document.createElement('div');\r\ndiv.innerHTML = _.join(['a', 'b', 'c'], '***');\r\ndiv.classList.add('iconfont')\r\nroot.appendChild(div); */\n// 异步代码  能够实现懒加载的行为  \n// (模块懒加载)： 通过import()来异步的加载一个模块，什么时候来加载这个模块，不一定，看什么时候触发它\n\n/* function getComponent() {\r\n  return import(\r\n    'lodash'\r\n  ).then(_ => {\r\n    let element = document.createElement('div');\r\n    element.innerHTML = _.join(['hello', 'world'], '--');\r\n    element.classList.add('iconfont');\r\n    return element;\r\n  })\r\n} */\n\n\n\nconsole.log(jquery__WEBPACK_IMPORTED_MODULE_0___default()('#root').text());\nconsole.log(Object(_test__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"])('zhaoandong'));\n\nasync function getComponent() {\n  const _ = await __webpack_require__.e(/*! import() | lodash */ \"vendors_lodash\").then(__webpack_require__.t.bind(null, /*! lodash */ \"./node_modules/_lodash@4.17.11@lodash/lodash.js\", 7));\n\n  let element = document.createElement('div');\n  element.innerHTML = _.join(['hello', 'world'], '**');\n  return element;\n}\n\ndocument.addEventListener('click', () => {\n  getComponent().then(element => {\n    root.appendChild(element);\n  });\n}); // 在webpack打包的过程中，生成了几个js文件，每一个js文件都叫做一个chunk//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgJy4vaW5kZXguY3NzJztcclxubGV0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xyXG5cclxuLy8g5ZCM5q2l5Luj56CBLi4uXHJcbi8qIGltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuZGl2LmlubmVySFRNTCA9IF8uam9pbihbJ2EnLCAnYicsICdjJ10sICcqKionKTtcclxuZGl2LmNsYXNzTGlzdC5hZGQoJ2ljb25mb250Jylcclxucm9vdC5hcHBlbmRDaGlsZChkaXYpOyAqL1xyXG5cclxuXHJcbi8vIOW8guatpeS7o+eggSAg6IO95aSf5a6e546w5oeS5Yqg6L2955qE6KGM5Li6ICBcclxuLy8gKOaooeWdl+aHkuWKoOi9vSnvvJog6YCa6L+HaW1wb3J0KCnmnaXlvILmraXnmoTliqDovb3kuIDkuKrmqKHlnZfvvIzku4DkuYjml7blgJnmnaXliqDovb3ov5nkuKrmqKHlnZfvvIzkuI3kuIDlrprvvIznnIvku4DkuYjml7blgJnop6blj5HlroNcclxuLyogZnVuY3Rpb24gZ2V0Q29tcG9uZW50KCkge1xyXG4gIHJldHVybiBpbXBvcnQoXHJcbiAgICAnbG9kYXNoJ1xyXG4gICkudGhlbihfID0+IHtcclxuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IF8uam9pbihbJ2hlbGxvJywgJ3dvcmxkJ10sICctLScpO1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpY29uZm9udCcpO1xyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgfSlcclxufSAqL1xyXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXHJcbmltcG9ydCB0ZXN0IGZyb20gJy4vdGVzdCdcclxuXHJcbmNvbnNvbGUubG9nKCQoJyNyb290JykudGV4dCgpKVxyXG5jb25zb2xlLmxvZyh0ZXN0KCd6aGFvYW5kb25nJykpXHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRDb21wb25lbnQoKSB7XHJcbiAgY29uc3QgXyA9IGF3YWl0IGltcG9ydCgvKiB3ZWJwYWNrTW9kZTogXCJsYXp5XCIsIHdlYnBhY2tDaHVua05hbWU6IFwibG9kYXNoXCIgKi8gJ2xvZGFzaCcpO1xyXG4gIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZWxlbWVudC5pbm5lckhUTUwgPSBfLmpvaW4oWydoZWxsbycsICd3b3JsZCddLCAnKionKTtcclxuICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgZ2V0Q29tcG9uZW50KCkudGhlbihlbGVtZW50ID0+IHtcclxuICAgIHJvb3QuYXBwZW5kQ2hpbGQoZWxlbWVudClcclxuICB9KVxyXG59KVxyXG5cclxuLy8g5Zyod2VicGFja+aJk+WMheeahOi/h+eoi+S4re+8jOeUn+aIkOS6huWHoOS4qmpz5paH5Lu277yM5q+P5LiA5LiqanPmlofku7bpg73lj6vlgZrkuIDkuKpjaHVua1xyXG5cclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQU9BO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZMQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/test.js":
/*!*********************!*\
  !*** ./src/test.js ***!
  \*********************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = (str => {\n  return str.match(/[\\w']+/g).map(item => {\n    return item.split('').reverse().join('');\n  }).join(' ');\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGVzdC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy90ZXN0LmpzPzg0YjgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKHN0cikgPT4ge1xyXG4gIHJldHVybiBzdHIubWF0Y2goL1tcXHcnXSsvZykubWFwKGl0ZW0gPT4ge1xyXG4gICAgcmV0dXJuIGl0ZW0uc3BsaXQoJycpLnJldmVyc2UoKS5qb2luKCcnKVxyXG4gIH0pLmpvaW4oJyAnKVxyXG59XHJcblxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/test.js\n");

/***/ })

}]);