import './index.css';
let root = document.getElementById('root');

// 同步代码...
import _ from 'lodash';

let div = document.createElement('div');
div.innerHTML = '<p class="iconfont">哈哈</p>'
root.appendChild(div);

console.log(_.join(['a', 'b', 'c']));  // a,b,c
console.log(_.join(['a', 'b', 'c'], '***'));  // a***b***c

// 异步代码
function getComponent() {
  return import(
		/* webpackMode: "lazy", webpackChunkName: "lodash" */
    'lodash'
  ).then(_ => {
    let element = document.createElement('div');
    element.innerHTML = _.join(['hello', 'world'], '--');
    element.classList.add('iconfont');
    return element;
  })
}
getComponent().then(element => {
  root.appendChild(element)
})