import _ from 'lodash'
import printMe from './print.js'
import './styles.css';

function component() {
	var element = document.createElement('div');
	var btn = document.createElement('button');
	
	element.innerHTML = _.join(['Hello', 'webpack', 'HHi'], '~');
	
	btn.innerHTML = 'Click me and check the console!';
	btn.onclick = printMe;
	
	element.appendChild(btn)
	
    return element;
}

document.body.appendChild(component())









