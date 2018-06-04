import { cube } from './math.js';

if (process.env.NODE_ENV !== 'production') {
   console.log('Looks like we are in development mode!');
} else {
	console.log('Looks like we are in production mode!')
}


function component() {
	var element = document.createElement('div');
	
	element.innerHTML = ['Hello webpack!','5 cubed is equal to ' + cube(5) + '~' + hhhhh].join('\n\n');   // +' '+ hhhhh 生产配置了DefinePlugin，只在生产上有效...
	
	return element;
}
document.body.appendChild(component())
