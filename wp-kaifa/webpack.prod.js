const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const webpack = require('webpack')

module.exports = merge(common, {
	devtool: 'source-map',
	plugins: [
		new UglifyJSPlugin({
			// UglifyJsPlugin 的 sourceMap 选项现在默认为 false 而不是 true。这意味着如果你在压缩代码时启用了 source map，或者想要让 uglifyjs 的警告能够对应到正确的代码行，你需要将 UglifyJsPlugin 的 sourceMap 设为 true。
			sourceMap: true,
			// UglifyJsPlugin 的 compress.warnings 选项现在默认为 false 而不是 true。 这意味着如果你想要看到 uglifyjs 的警告信息，你需要将 compress.warnings 设为 true。
			compress: {
				warnings: true
			}
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production'),   // 赋值时 只能这样写 JSON.stringify('')
			'hhhhh': JSON.stringify('我是生产环境哟....')
		})
	]
})






