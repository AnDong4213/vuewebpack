import './index.css';
import './index.scss';

import imgName from  './images/28.png';

let root = document.createElement('div');
root.id = 'root';
let img = new Image();
img.classList.add('imgSize')

img.src = imgName;

document.body.append(root)
root.append(img)