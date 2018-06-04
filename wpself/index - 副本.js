let hello = require('./world')
// require('style-loader!css-loader!./style.css')  //在命令行里指定   --module-bind   // 要使css 起作用还需加载style-loader
// webpack --mode=production --progress --entry ./src/index.js -o ./dist/bundle.js --module-bind css=style-loader!css-loader

/*import Styles from 'style-loader!css-loader?modules!./style.css';
document.getElementById('haha').className = Styles.hehe*/

// import Styles from 'style-loader!css-loader!./style.css';   // 这个不把css文件编译成模块啦... 没有 ?modules

/*import Styles from './style.css';
document.getElementById('haha').className = Styles.hehe*/   // modules为true时可以这样写...

//import Styles from './style.css';   // modules为false时可以这样写...
require('./style.css')


hello.world('Hello你好,世界');

// webpack index=./src/index.js index2=./src/index2.js --output-path='./dist' --output-filename='[name][hash].bundle.js'

// --output-path=./dist --output-filename=[name][hash].bundle.js --devtool source-map --output-source-map-filename=[name]123.map

//webpack --mode=production --entry ./src/index.js --output-path=../dist --output-filename=[hash].bundle.js --module-bind css=style-loader!css-loader

// webpack --profile --json > stats.json     // 捕获编译时每个步骤的时间信息，并且将这些信息包含在输出中。

// webpack --mode=production --progress --display-modules --entry ./src/index.js -o ./dist/bundle.js

// webpack --mode=production --entry ./src/index.js -o ./dist/bundle.js --module-bind css=style-loader!css-loader --progress --profile