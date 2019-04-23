/* import './index.css';
import './style.css';
let root = document.getElementById('root'); */

// async function getComponent() {
//   const _ = await import(/* webpackMode: "lazy", webpackChunkName: "lodash" */ 'lodash');
/*   let element = document.createElement('div');
  element.innerHTML = _.join(['hello', 'world'], '**');
  element.classList.add('iconfont');
  return element;
}
document.addEventListener('click', () => {
  getComponent().then(element => {
    root.appendChild(element)
  })
}) */

import _ from 'lodash'
import $ from 'jquery'

let dom = $('<div>');
dom.text(_.join(['Hello', 'World'], '**--'))
$('#root').append(dom)

// 在webpack打包的过程中，生成了几个js文件，每一个js文件都叫做一个chunk

