const path = require('path');
//console.log(path.resolve(__dirname,'..',"dist") == path.join(__dirname, '..', "dist"))  // true
//console.log(path.join(__dirname, '..', "dist"))    // F:\vuewebpack\dist

const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
	mode: 'production',
	entry: {
		app: './src/index.js'
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: '[name].js',
		publicPath: ''
		// filename: '[name]-[chunkhash].js',
		// filename: '[name]-[hash].js',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{loader: 'style-loader'},
					{
						loader: 'css-loader',
						options: {
							modules: false
						}
					}
				]
			}
		]
	},
	plugins: [
		new UglifyJsPlugin({
			test: /\.js($|\?)/i
		}),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html',
			title: '我的HWP',
			date : new Date(),
			inject: 'head',             //  'head'  true放到body中...    false不引用js文件了...
			//minify: true
			minify: {
				removeComments: true,
				collapseWhitespace: false
			}
		})
		
	]
	
}
