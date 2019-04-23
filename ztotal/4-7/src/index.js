// import './index.css';
let root = document.getElementById('root');

// 同步代码...
/* import _ from 'lodash';
let div = document.createElement('div');
div.innerHTML = _.join(['a', 'b', 'c'], '***');
div.classList.add('iconfont')
root.appendChild(div); */


// 异步代码  能够实现懒加载的行为  
// (模块懒加载)： 通过import()来异步的加载一个模块，什么时候来加载这个模块，不一定，看什么时候触发它
/* function getComponent() {
  return import(
    'lodash'
  ).then(_ => {
    let element = document.createElement('div');
    element.innerHTML = _.join(['hello', 'world'], '--');
    element.classList.add('iconfont');
    return element;
  })
} */
import $ from 'jquery'
import test from './test'

console.log($('#root').text())
console.log(test('zhaoandong'))

async function getComponent() {
  const _ = await import(/* webpackMode: "lazy", webpackChunkName: "lodash" */ 'lodash');
  let element = document.createElement('div');
  element.innerHTML = _.join(['hello', 'world'], '**');
  return element;
}

document.addEventListener('click', () => {
  getComponent().then(element => {
    root.appendChild(element)
  })
})

// 在webpack打包的过程中，生成了几个js文件，每一个js文件都叫做一个chunk

