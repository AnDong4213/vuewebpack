const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// html-webpack-plugin 会在打包结束后，自动生成一个html文件，并把打包生成的js文件自动引入到这个html文件中
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
// plugin 可以在webpack运行到某个时刻的时候，帮你做一些事情  像vue/react的生命周期函数一样

module.exports = {
  mode: 'production',
  /* mode: 'development',
  optimization: {
    usedExports: true
  }, */
  entry: {
    main: './src/index.js'
  },
  output: {
    // publicPath:'http://cdn.com.cn',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'cheap-module-source-map',
  // devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    open: true,
    port: 8080,
    hot: true,
    hotOnly: true
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name]_[hash:7].[ext]',
            outputPath: 'images/',
            limit: 1024 * 10
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, 
        loader: 'babel-loader'
      },
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
      },
      {
        test: /\.(eot|ttf|svg|woff)($|\?)/i,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'file/',
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '',
      template: './src/index.html',
      minify: false  // true if mode is 'production', otherwise false
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()

  ]
}


