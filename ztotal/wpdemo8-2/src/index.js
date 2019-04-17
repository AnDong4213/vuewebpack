import '@babel/polyfill';

/* // document.body.append(root)
import './index.scss';
import imgName from  './images/jolin.png'

let root = document.getElementById('root'), img = new Image(), div = document.createElement('div');
div.innerHTML = '<p class="iconfont icondelete"></p>'

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

// console.log(imgName)  // images/28_40e1970.png */
const arr = [
  new Promise(() => {}),
  new Promise(() => {})
]
arr.map(item => {
  console.log(item)
})
