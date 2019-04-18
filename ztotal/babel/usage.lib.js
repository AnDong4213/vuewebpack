"use strict";

require("core-js/modules/es6.promise");

require("core-js/modules/es6.object.to-string");

// import '@babel/polyfill';
// When setting `useBuiltIns: 'usage'`, polyfills are automatically imported when needed.
// Please remove the `import '@babel/polyfill'` call or use `useBuiltIns: 'entry'` instead.
// npx babel ./index.js --out-dir ./lib  输出到lib目录下的index.js文件下
// npx babel ./index.js -o ./lib.js   输出到lib.js文件下
var arr = [new Promise(function () {}), new Promise(function () {})];
arr.map(function (item) {
  console.log(item);
});
