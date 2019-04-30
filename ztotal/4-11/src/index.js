// console.log(this);    // 如果使用this的话，把下面的全部注释，否则报错  把  loader: 'imports-loader?this=>window'也注释掉

import './index.css';

import { ui } from './jquery.ui.js'
ui()

let dom = $('<div>');
dom.text(_join(['Hello', 'World'], '**--'))
dom.addClass('iconfont')
$('#root').append(dom)



// 在webpack打包的过程中，生成了几个js文件，每一个js文件都叫做一个chunk

