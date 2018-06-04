// 使用 JavaScript 注释把配置信息直接嵌入到一个代码源文件中。

module.exports = {
	root: true,  // 使用配置文件的第一种方式是通过 .eslintrc.* 和 package.json 文件。ESLint 将自动在要检测的文件目录里寻找它们，紧接着是父级目录，一直到文件系统的根目录（除非指定 root: true）。
	parser: 'babel-eslint',  // ESLint 默认使用Espree作为其解析器，你可以在配置文件中指定一个不同的解析器
	env: {  // 一个环境定义了一组预定义的全局变量。可用的环境包括： 可以在源文件里、在配置文件中或使用 命令行 的 --env 选项来指定环境。
		browser: true,
		commonjs: true,
		es6: true,
		node: true
	},
	extends: 'eslint:recommended',   // 禁用未声明的变量 (no-undef)   
	parserOptions: { // ESLint 允许你指定你想要支持的 JavaScript 语言选项。默认情况下，ESLint 支持 ECMAScript 5 语法。你可以覆盖该设置，以启用对 ECMAScript 其它版本和 JSX 的支持。 支持 ES6 语法并不意味着同时支持新的 ES6 全局变量或类型（比如 Set 等新类型）。使用 { "parserOptions": { "ecmaVersion": 6 } } 来启用 ES6 语法支持；要额外支持新的 ES6 全局变量，使用 { "env":{ "es6": true } }(这个设置会同时自动启用 ES6 语法支持)。
		sourceType: 'module', // sourceType - 设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)。
		ecmaVersion: 6,
	},
	globals: {
		"var1": true,
		"var2": false
	},
	rules: {
		"comma-dangle": ["error", "always-multiline"],  // 数组的第一项总是规则的严重程度（数字或字符串）。
		// "indent": ["error", 2],
		indent: 0,
		'arrow-parens': 1,
		"linebreak-style": ["error", "unix"],
		"quotes": ["error", "single"], // 如果一个规则有额外的选项，你可以使用数组字面量指定它们   这条注释为规则 quotes 指定了 “double”选项
		"semi": ["error", "always"],
		"no-unused-vars": ["warn"],
		// "no-console": ["warn"],
		// "no-console": 0,
		"no-console": "off",
		'no-trailing-spaces': 0,
		'no-mixed-spaces-and-tabs': 0,
		'space-before-function-paren': ["off"],
		"no-var": "warn",
		'keyword-spacing': 1
	}
}

// 禁用未声明的变量 (no-undef)         配置文件中的 "extends": "eslint:recommended" 属性启用了此规则。
/*eslint no-undef: "error"*/
// 要在你的 JavaScript 文件中，用注释指定全局变量，格式如下：     /* global var1, var2 */
// 在配置文件里配置全局变量时，使用 globals 指出你要使用的全局变量。将变量设置为 true 将允许变量被重写，或 false 将不允许被重写  /* global var1:false, var2:false */

// 要在你的 JavaScript 文件中使用注释来指定环境，格式如下：      /* eslint-env node, mocha */        该设置启用了 Node.js 和 Mocha 环境。

// ESLint 附带有大量的规则。你可以使用注释或配置文件修改你项目中要使用的规则。要改变一个规则设置，你必须将规则 ID 设置为下列值之一：
/*  "off" 或 0 - 关闭规则
"warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
"error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出) */

// 可以在你的文件中使用以下格式的块注释来临时禁止规则出现警告：
/* eslint-disable */
// alert('foo');
/* eslint-enable */   // 启用规则出现警告：

// 你也可以对指定的规则启用或禁用警告:  /* eslint-disable no-alert, no-console */    /* eslint-enable no-alert, no-console */

// 如果在整个文件范围内禁止规则出现警告，将 /* eslint-disable */ 块注释放在文件顶部：


// --cache  存储处理过的文件的信息以便只对有改变的文件进行操作  缓存默认被存储在 .eslintcache。启用这个选项可以显著改善 ESLint 的运行时间，确保只对有改变的文件进行检测。

// --color, --no-color   此选项强制启用/禁用彩色输出。你可以使用此方法来覆盖默认行为，


//  --fix   该选项指示 ESLint 试图修复尽可能多的问题。修复只针对实际文件本身，而且剩下的未修复的问题才会输出。不是所有的问题都能使用这个选项进行修复





















	