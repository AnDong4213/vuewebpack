import './index.css';  // 如果设置 modules: true 样式必须用  base.imgSize 这样的形式调用,#不行。。 不设置用import引入也行
import './haha.scss';
import './less.less';

import imgName from  './images/28.png';

let root = document.getElementById('root');

let img = new Image();
img.classList.add('imgSize');
img.src = imgName;

root.append(img);