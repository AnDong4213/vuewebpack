const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const devConfig = {
  mode: 'development',
  /* optimization: {
    usedExports: true
  }, */
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../', 'dist'),
    open: true,
    port: 8080,
    hot: true,
    // hotOnly: true  // 如果注释，会刷新页面，而不是热加载  add(12, 30);
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', 
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].js',  // 此选项不会影响那些「按需加载 chunk」的输出文件
    chunkFilename: '[name].chunk.js',
  }
}
module.exports = merge(commonConfig, devConfig);


