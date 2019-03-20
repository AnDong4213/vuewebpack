import haDate from './show';
// import './index.scss';

// 加上 modules: true后
import haha from './index.scss';

import imgName from  './images/28.png'
import imgName2 from  './images/9.png'
import imgName3 from  './images/jolin.jpg'

let root = document.createElement('div');
root.id = 'root';
let img2 = document.createElement('img');
let img3 = document.createElement('img');
let img = new Image();

img.onload = function() {
  console.log('img is loaded')
}
img.onerror = function() {
  console.log('error!!')
}

img.src = imgName;
img2.src = imgName2;
img3.src = imgName3;

img2.classList.add(haha.imgSize2)
img3.classList.add(haha.imgSize)
root.classList.add(haha.iconfont, haha.iconbrightness)

document.body.append(root)
root.append(img)
root.append(img2)
root.append(img3)

// console.log(imgName)

console.log(haDate());