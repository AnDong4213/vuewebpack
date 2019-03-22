import base from './index.css';
import common from './common.css';  // 如果设置 modules: true 样式必须用  base.imgSize 这样的形式调用,#不行。。 不设置用import引入也行
import './index.scss';

/* let flag = false;
setInterval(() => {
  if (flag) {
    base.unuse()
  } else {
    base.use()
  }
  flag = !flag;
}, 5000) */  //  'style-loader/useable'

import imgName from  './images/28.png';

let root = document.createElement('div');
root.id = 'root';
let img = new Image();
img.classList.add('imgSize')
// img.classList.add(base.imgSize) // 设置 modules: true 时

img.src = imgName;

document.body.append(root)
root.append(img)