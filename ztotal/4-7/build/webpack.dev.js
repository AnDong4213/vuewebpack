const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const devConfig = {
  mode: 'development',
  optimization: {
    usedExports: true
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../', 'dist'),
    open: true,
    port: 8080,
    hot: true,
    // hotOnly: true  // 如果注释，会刷新页面，而不是热加载  add(12, 30);
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
module.exports = merge(commonConfig, devConfig);


