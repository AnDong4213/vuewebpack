import loadIng from 'lodash';
import {dd} from './common/aa.js';
import {cc} from './component/bb.js';
import {pp} from './haha/pp.js';

console.log(
  loadIng.join(['Another', 'module', 'loaded!'], ' ')
);

console.log(dd('这是common文件夹下的aa.js'))
console.log(cc('这是component文件夹下的bb.js'))
console.log(pp('这是haha文件夹下的pp.js哟...'))







