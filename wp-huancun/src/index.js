import _ from 'lodash';
// import Print from './print';

function component() {
	var element = document.createElement('div');
	element.innerHTML = _.join(['Hello', 'webpack'], '~');
	// bind()方法会创建一个新函数，称为绑定函数，当调用这个绑定函数时，绑定函数会以创建它时传入 bind()方法的第一个参数作为 this，传入 bind() 方法的第二个以及以后的参数加上绑定函数运行时本身的参数按照顺序作为原函数的参数来调用原函数
	// element.onclick = Print.bind(null, 'Hello webpack!!');
	return element;
}
document.body.appendChild(component());













