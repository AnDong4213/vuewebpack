// Tree Shaking  只支持 ES Module(静态)模块  不支持require('')CommonJs的引入方式(是动态引入的方式)
// tree shaking 是一个术语，通常用于描述移除 JavaScript 上下文中的未引用代码(dead-code)。它依赖于 ES2015 模块语法的 静态结构 特性，例如 import 和 export。
// 在生产环境下(production)  注意，所有导入文件都会受到 tree shaking 的影响。这意味着，如果在项目中使用类似 css-loader 并 import 一个 CSS 文件，则需要将其添加到 side effect 列表中，以免在--生产模式--中无意中将它删除，在开发模式中不用添加到side effect 列表中

import './index.css';
let root = document.getElementById('root');

// 同步代码...
/* import _ from 'lodash';
let div = document.createElement('div');
div.innerHTML = '<p class="iconfont">哈哈</p>'
root.appendChild(div);

console.log(_.join(['a', 'b', 'c']));  // a,b,c
console.log(_.join(['a', 'b', 'c'], '***'));  // a***b***c
console.log(_.join(['a', 'b', 'c', 'do'], '***')); */

// 异步代码
/* function getComponent() {
  return import(
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
}) */

// Magic Comments  (貌似不起作用了...)  /* webpackChunkName: "lodash" */

async function getComponent() {
	var element = document.createElement('div');
	const _ = await import('lodash');
  element.innerHTML = _.join(['Hello', 'webpack对对对'], '**');
  element.classList.add('iconfont');
	return element;
}
getComponent().then(component => {
	root.appendChild(component);
})


/* function resolveAfter2Seconds() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve('resolve')
		}, 2000)
	})
}
let asyncCall = async function() {
	try {
		var result = await resolveAfter2Seconds()
		console.log(result);
		return result
	} catch (err) {
		throw new Error(err)
	}
}
asyncCall().then(res => {
	console.log(res)
}) */
// print two 'resolve'


/* 代码分离是 webpack 中最引人注目的特性之一。此特性能够把代码分离到不同的 bundle 中，然后可以按需加载或并行加载这些文件。代码分离可以用于获取更小的 bundle，以及控制资源加载优先级，如果使用合理，会极大影响加载时间。

常用的代码分离方法有三种：

入口起点：使用 entry 配置手动地分离代码。
防止重复：使用 SplitChunksPlugin 去重和分离 chunk。
动态导入：通过模块中的内联函数调用来分离代码。 */




