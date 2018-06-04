import { cube } from './math.js';
import loadIng from 'lodash';
import {dd} from './common/aa.js';
import {cc} from './component/bb.js';
import {pp} from './haha/pp.js';
import './styles.css';
import "./styles.less"

if (process.env.NODE_ENV !== 'production') {
   console.log('Looks like we are in development mode!');
}

let haha = loadIng.join(['赵', 'ANING'], ' ')

let hehe = dd('这是common文件夹下的aa.js')

let hihi = cc('这是component文件夹下的bb.js')

let ppr = pp('这是haha文件夹下的pp.js')


function component() {
	var element = document.createElement('div');
	element.classList.add('hello');
	
	element.innerHTML = ['Hello webpack!','5 cubed is equal to ' + cube(6) + ' ' + haha + '--' + hehe+'--'+hihi+'--'+ppr].join('\n\n'); 
	
	var ppp = document.createElement('p');
	ppp.innerHTML = '我是p标签...';
	element.appendChild(ppp)
	
	return element;
}
document.body.appendChild(component())
