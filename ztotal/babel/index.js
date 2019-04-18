// import '@babel/polyfill';

// When setting `useBuiltIns: 'usage'`, polyfills are automatically imported when needed.
// Please remove the `import '@babel/polyfill'` call or use `useBuiltIns: 'entry'` instead.

// npx babel ./index.js --out-dir ./lib  输出到lib目录下的index.js文件下
// npx babel ./index.js -o ./lib.js   输出到lib.js文件下
/* -o, --out-file [out]          
-d, --out-dir [out]    */ 

const arr = [
  new Promise(() => {}),
  new Promise(() => {})
]
arr.map(item => {
  console.log(item)
})
