const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')

// console.log(require.resolve('./src/index.js'))  // F:\vuewebpack\wp-shimming\src\index.js

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
    /*polyfills: './src/polyfills.js',
    index: './src/index.js'*/
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
  	rules: [
  		{
  			test: require.resolve('./src/index.js'),
  			use: 'imports-loader?this=>window'
  		},
  		{
  			test: path.resolve('./src/globals.js'),
  			use: 'exports-loader?file,parse=helpers.parse'
  		}
  	]
  },
  plugins: [
  	new CleanWebpackPlugin(['dist']),
  	new HtmlWebpackPlugin({
		title: 'Caching',
		/*template: './src/index.html',
		filename: 'index.html',*/
		meta: {
			viewport: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0'
		}
	}),
	new webpack.ProvidePlugin({
		// _: 'lodash'
		haha: ['lodash', 'join']
	})
  	
  ]
}












