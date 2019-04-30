import './index.css';

import { ui } from './jquery.ui.js'
ui()

let dom = $('<div>');
dom.text(_join(['Hello', 'World'], '**--'))
dom.addClass('iconfont')
$('#root').append(dom)

