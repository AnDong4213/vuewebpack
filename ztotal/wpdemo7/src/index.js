// document.body.append(root)
import './index.scss';
import './style.css';
import imgName from  './images/jolin.png'

import counter from './counter';
import number from './number';

let root = document.getElementById('root'), img = new Image(), div = document.createElement('div');
div.innerHTML = '<p class="iconfont icondelete"></p>'
counter();
number();
if (module.hot) {
  module.hot.accept('./number', (value) => {
    // console.log(value);  // ["./src/number.js"]
    document.body.removeChild(document.getElementById('number'));
    number();
  })
}

img.onload = function() {
  console.log('img is loaded')
}
img.onerror = function() {
  console.log('error!!')
}
img.src = imgName;
img.classList.add('imgSize')
root.classList.add('iconfont', 'iconbrightness')

root.append(img);
root.appendChild(div);

let btn = document.createElement('button');
btn.textContent = '新增';
root.append(btn);
btn.onclick = function() {
  let em = document.createElement('em');
  em.innerHTML = 'item';
  em.classList.add('iconfont', 'icondelete');
  div.appendChild(em)
}

// console.log(imgName)  // images/28_40e1970.png

