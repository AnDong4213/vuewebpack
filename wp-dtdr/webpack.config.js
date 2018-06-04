const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin  = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index-ljz.js'
  },
  output: {
  	filename: '[name].bundle.js',
  	chunkFilename: '[name].bundle2.js',
  	path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
  	new HtmlWebpackPlugin({
			title: 'Code Splitting',
			meta: {
				viewport: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0'
			}
		})
  	
  ]

}
