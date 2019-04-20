import './index.css';
let root = document.getElementById('root');

// 同步代码...
import _ from 'lodash';
import test from './test'
import haha from './haha/index'

console.log(test.name);
console.log(haha('好几块你看了'));

let div = document.createElement('div');
div.innerHTML = '<p class="iconfont">哈哈</p>'
root.appendChild(div);

console.log(_.join(['a', 'b', 'c']));  // a,b,c
console.log(_.join(['a', 'b', 'c'], '***'));  // a***b***c
console.log(_.join(['a', 'b', 'c', 'do'], '***'));

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

// Magic Comments  (起作用了...)  /* webpackChunkName: "lodash" */  "plugins": ["@babel/plugin-syntax-dynamic-import"]

/* async function getComponent() {
	var element = document.createElement('div');
	const _ = await import('lodash');
  element.innerHTML = _.join(['Hello', 'webpack对对对'], '**');
  element.classList.add('iconfont');
	return element;
}
getComponent().then(component => {
	root.appendChild(component);
}) */

// 在函数add2中，两个计时器均被创建，然后一起被await。 这导致程序运行出结果需要2秒而非4秒，因为这两个计时器是同时运行的 return x + await a + await b;

/* 代码分离是 webpack 中最引人注目的特性之一。此特性能够把代码分离到不同的 bundle 中，然后可以按需加载或并行加载这些文件。代码分离可以用于获取更小的 bundle，以及控制资源加载优先级，如果使用合理，会极大影响加载时间。

常用的代码分离方法有三种：

入口起点：使用 entry 配置手动地分离代码。
防止重复：使用 SplitChunksPlugin 去重和分离 chunk。
动态导入：通过模块中的内联函数调用来分离代码。 */




