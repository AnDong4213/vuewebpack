let hello = require('./world');
hello.world('Hello你好,世界');

import {addClass} from './dom.js';

// require('./style.css');

import style from './style.css';
console.log(style);

function component() {
	let element = document.createElement('div');
	let pp = document.createElement('p');
	pp.innerHTML = '我是p标签...';
	// addClass(pp,'hehe');
	pp.className = style.hehe;
	element.appendChild(pp);
	return element;
}
document.body.appendChild(component());

/*var1 = '99';
console.log(var1);*/

let ff = ['给对方','uu','oo'];
console.log(ff);
ff.forEach((item) => {
	console.log(item);
});

function withoutSpac(x) {
	console.log(x);
}
withoutSpac('PP');

if (ff) {
    //...
} else if (var1) {
    //...
} else {
    //...
}