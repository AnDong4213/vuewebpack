// import '@babel/polyfill';

// When setting `useBuiltIns: 'usage'`, polyfills are automatically imported when needed.
// Please remove the `import '@babel/polyfill'` call or use `useBuiltIns: 'entry'` instead.

const arr = [
  new Promise(() => {}),
  new Promise(() => {})
]
arr.map(item => {
  console.log(item)
})
