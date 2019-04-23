import './index.css';
/*let root = document.getElementById('root'); */

import _ from 'lodash'
import $ from 'jquery'
import { ui } from './jquery.ui.js'
ui()

let dom = $('<div>');
dom.text(_.join(['Hello', 'World'], '**--'))
dom.addClass('iconfont')
$('#root').append(dom)

// 在webpack打包的过程中，生成了几个js文件，每一个js文件都叫做一个chunk

