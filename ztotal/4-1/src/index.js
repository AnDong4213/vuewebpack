// Tree Shaking  只支持 ES Module(静态)模块  不支持require('')CommonJs的引入方式(是动态引入的方式)
// tree shaking 是一个术语，通常用于描述移除 JavaScript 上下文中的未引用代码(dead-code)。它依赖于 ES2015 模块语法的 静态结构 特性，例如 import 和 export。

// 在生产环境下(production)  注意，所有导入文件都会受到 tree shaking 的影响。这意味着，如果在项目中使用类似 css-loader 并 import 一个 CSS 文件，则需要将其添加到 side effect 列表中，以免在--生产模式--中无意中将它删除，在开发模式中不用添加到side effect 列表中

import './index.css';

let root = document.getElementById('root'), div = document.createElement('div');
div.innerHTML = '<p class="iconfont">哈哈</p>'
root.appendChild(div);

console.log(_.join(['a', 'b', 'c']));  // a,b,c
console.log(_.join(['a', 'b', 'c'], '***'));  // a***b***c
console.log(_.join(['a', 'b', 'c', 'd'], '***'));

