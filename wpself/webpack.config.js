const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  devServer: {
    contentBase: './dist',
    port: 8076,
    open: true,
    overlay: {
    	errors: true,
    	warnings: true,
    },
  },
  module: {
    rules: [
     /*{
				test : /\.css$/,
				use : ['style-loader','css-loader']
		 },*/
     {
        test: /\.css$/,
        use: [
          // {loader: 'style-loader'},
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName : '[name]-[local]_[hash:base64:6]'
            },
          },
        ],
      },
      {
      	test: /\.js$/,
      	enforce: 'pre',
      	loader: 'eslint-loader',
      	options: {
      		emitWarning: true,
      	},
      },
      
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: '我的HWP',
    }),
		
  ],
	
};