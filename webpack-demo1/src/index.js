import _ from 'lodash'
import './style.css'
import './styles.less'
import './styles.styl'
import './styles.scss'
import Icon from './logo.png'
import Data from './data.xml'

function component() {
	var element = document.createElement('div');
	var pp = document.createElement('p');
	var ii = document.createElement('i');
	var em = document.createElement('em');
	element.innerHTML = _.join(['Hello', 'webpack', 'HH'], '~');
	element.classList.add('hello');
	
	var myIcon = new Image()
	myIcon.src = Icon
	element.appendChild(myIcon)
	
	pp.innerHTML = '我是p标签...'
	pp.classList.add('hello_less');
	element.appendChild(pp)
	
	ii.innerHTML = '我是i标签...'
	ii.classList.add('hello_stylus');
	element.appendChild(ii)
	
	em.innerHTML = '我是em标签...'
	em.classList.add('hello_scss');
	element.appendChild(em)
	
	console.log(Data)
	
    return element;
}
document.body.appendChild(component())











