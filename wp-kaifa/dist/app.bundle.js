!function(e){var n={};function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s="./src/index.js")}({"./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */function(e,n,r){"use strict";r.r(n);var t,o=r(/*! ./math.js */"./src/math.js");console.log("Looks like we are in production mode!"),document.body.appendChild(((t=document.createElement("div")).innerHTML=["Hello webpack!","5 cubed is equal to "+Object(o.cube)(5)+"~我是生产环境哟...."].join("\n\n"),t))},"./src/math.js":
/*!*********************!*\
  !*** ./src/math.js ***!
  \*********************/
/*! exports provided: square, cube */function(e,n,r){"use strict";function t(e){return e*e}function o(e){return e*e*e}r.r(n),r.d(n,"square",function(){return t}),r.d(n,"cube",function(){return o})}});
//# sourceMappingURL=app.bundle.js.map