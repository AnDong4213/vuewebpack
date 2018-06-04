const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin  = require('clean-webpack-plugin')
const webpack = require('webpack');

module.exports = {
  entry: {
  	main: './src/index.js',
  	vendor: ['lodash']
  },
  output: {
  	filename: '[name].[chunkhash].js',
  	path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
  	new HtmlWebpackPlugin({
		title: 'Caching',   
		meta: {
			viewport: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0'
		}
	}),
	new webpack.HashedModuleIdsPlugin(),
	new webpack.optimize.CommonsChunkPlugin({
		name: 'vendor'
	}),	
	new webpack.optimize.CommonsChunkPlugin({
		name: 'manifest'
	})
  	
  ] 

}



















