// import 规范不允许控制模块的名称或其他属性，因为 "chunks" 只是 webpack 中的一个概念。幸运的是，webpack 中可以通过注释接收一些特殊的参数，而无须破坏规定：
// 请注意，这两个选项可以组合起来使用，如 /* webpackMode: "lazy-once", webpackChunkName: "all-i18n-data" */，这会按没有花括号的 JSON5 对象去解析。 
// function getComponent() {
	 // return import(/* webpackMode: "lazy", webpackChunkName: "lodash" */ 'lodash').then(_ => {
/*		var element = document.createElement('div');
		element.innerHTML = _.default.join(['Hello', 'webpack'], '~');
		return element;
	}).catch(error => 'An error occurred while loading the component');
}
getComponent().then(component => {
	document.body.appendChild(component);
})*/

/*console.log(import('lodash'))  //  Promise {<pending>}
import('lodash').then((ha) => {
	console.log(ha.default.join(['Hello', 'webpack'], '~'))
})*/

async function getComponent() {
	var element = document.createElement('div');
	const _ = await import(/* webpackChunkName: "lodash" */ 'lodash');
	element.innerHTML = _.default.join(['Hello', 'webpack'], '**');
	return element;
}
getComponent().then(component => {
	document.body.appendChild(component);
})


/*function resolveAfter2Seconds() {
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
		return 'HR'
	} catch (err) {
		throw new Error(err)
	}
}
asyncCall().then(res => {
	console.log(res)
})*/

function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

/*async function add1(x) {
	var a = await resolveAfter2Seconds(20); 
	var b = await resolveAfter2Seconds(30); 
	return x + a + b; 
}
add1(10).then(v => {
	console.log(v)   // prints 60 after 4 seconds. 
})*/
async function add2(x) {
  var a = resolveAfter2Seconds(20);
  var b = resolveAfter2Seconds(30);
  return x + await a + await b;
}
add2(10).then(v => {
  console.log('在2s后打出 '+v);  // prints 60 after 2 seconds.
});
// 在函数add2中，两个计时器均被创建，然后一起被await。 这导致程序运行出结果需要2秒而非4秒，因为这两个计时器是同时运行的





// "Asynchronous Module Definition"  异步模块定义
// AMD规范... 需要用define来明确定义一个模块，需要通过返回的方式实现导出。在声明模块的时候指定所有的依赖，通过形参传递依赖到模块内容中。
// 定义了写入模块接口和加载模块接口的 JavaScript 规范
/*define(['dep1','dep2'],function(dep1,dep2) {
	return function() {}
})*/

//  define(id? dependencies?,factory)
/*define(function() {
	var exports = {}
	exports.sayHello = function() {
		console.log('Hello')
	}
	return exports
}).sayHello()*/

// CMD规范(玉伯)，与AMD规范度主要区别在于定义模块和依赖引入的部分。 在依赖部分，CMD支持动态引入...更接近于Node对CommonJS规范的定义...
/*define(function(require,exports,module) {
	// The module
})*/
// require,exports和module通过形参传递给模块，在需要依赖模块时，随时调用require()引入即可...

// 使用"立即执行函数"（Immediately-Invoked Function Expression，IIFE），可以达到不暴露私有成员的目的。
/*var module1 = (function(){
　　var _count1 = 1;
　　var _count2 = 2;

　　var m1 = function(){
　　　　console.log(_count1)
　　};
　　var m2 = function(){
　　　 console.log(_count2)
　　};

　　return {
　　　　m1: m1,
　　　　m2: m2
　　};
})();
module1.m1()*/

// 如果一个模块很大，必须分成几个部分，或者一个模块需要继承另一个模块，这时就有必要采用"放大模式"（augmentation）。
/*var module2 = (function (mod){
　　mod.m3 = function () {
		console.log(mod.m1+'--'+9)
　　};
　　return mod;
})({m1: '8'});
module2.m3()*/
