const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// html-webpack-plugin 会在打包结束后，自动生成一个html文件，并把打包生成的js文件自动引入到这个html文件中
const HtmlWebpackPlugin = require('html-webpack-plugin');

// plugin 可以在webpack运行到某个时刻的时候，帮你做一些事情  像vue/react的生命周期函数一样

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
    sub: './src/index.js'
  },
  output: {
    publicPath:'http://cdn.com.cn',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
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
            limit: 1024 * 20
          }
        }
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
      title: 'WP',
      template: './src/index.html',
      minify: true
    }),
    new CleanWebpackPlugin()

  ]
}


