import base from './index.css';  // 如果设置 modules: true 样式必须用  base.imgSize 这样的形式调用,#不行。。 不设置用import引入也行
import scssb from './haha.scss';

import imgName from  './images/28.png';

let root = document.getElementById('root');
root.classList.add(base.root);

let p = document.createElement('em');
p.classList.add(scssb.imgSize2);

root.innerHTML = `<p class="${base.box}"></p>`
let img = new Image();
// img.classList.add('imgSize');
img.classList.add(base.imgSize);
img.src = imgName;

root.append(img);
root.append(p);