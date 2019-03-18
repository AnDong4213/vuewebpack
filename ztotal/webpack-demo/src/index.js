import haDate from './show';
import imgName from  './2.png'
import imgName2 from  './6.png'
import imgName3 from  './00.png'

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
document.body.append(root)
root.append(img)
root.append(img2)
root.append(img3)

// console.log(imgName)

console.log(haDate());