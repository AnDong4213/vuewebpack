import './index.scss';

import imgName from  './images/28.png'
import imgName2 from  './images/9.png'
import imgName3 from  './images/jolin.jpg'

let root = document.createElement('div'), root2 = document.getElementById('root2');
root.id = 'root';
let img2 = document.createElement('img'), img3 = document.createElement('img');
let img = new Image();

root2.innerHTML = '<div class="iconfont icondelete"></div>'

img.onload = function() {
  console.log('img is loaded')
}
img.onerror = function() {
  console.log('error!!')
}

img.src = imgName;
img2.src = imgName2;
img3.src = imgName3;

img.classList.add('imgSize0')
img2.classList.add('imgSize2')
img3.classList.add('imgSize')
root.classList.add('iconfont', 'iconbrightness')

document.body.append(root)
root.append(img)
root.append(img2)
root.append(img3)

// console.log(imgName)  // images/28_40e1970.png