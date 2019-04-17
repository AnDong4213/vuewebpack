const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// html-webpack-plugin 会在打包结束后，自动生成一个html文件，并把打包生成的js文件自动引入到这个html文件中
const HtmlWebpackPlugin = require('html-webpack-plugin');

// plugin 可以在webpack运行到某个时刻的时候，帮你做一些事情  像vue/react的生命周期函数一样

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  output: {
    // publicPath:'http://cdn.com.cn',
    publicPath: '/',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // devtool: 'none  source-map  inline-source-map  cheap-(inline)-source-map(显示出错行就行，不用显示列,只管业务代码,不管第三方模块或loader里的错误)  cheap-(module)-inline-source-map(管业务代码,管第三方模块或loader里的错误)',
  // eval 此选项会非常快地构建。主要缺点是，由于会映射到转换后的代码，而不是映射到原始代码（没有从 loader 中获取 source map），所以不能正确的显示行数。
  // 在开发环境中建议使用  cheap-module-eval-source-map
  // 在生产环境中建议使用  cheap-module-source-map
  // source-map会生成.map的文件， 只要有inline会把.map的文件合并到打包生成的目标文件中去
  devtool: 'cheap-module-eval-source-map',
  /* devServer: {
    contentBase: path.join(__dirname, 'dist'),
    open: true,
    port: 2019
  }, */
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
    new CleanWebpackPlugin()

  ]
}


