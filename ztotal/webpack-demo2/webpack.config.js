const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  // entry: './src/index.js',
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      /* {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            //placeholders 占位符
            name: '[name]_[hash:7].[ext]',

            // name() {
            //   if (env === 'development') {
            //     return '[path][name].[ext]'
            //   }
            //   return '[hash].[ext]'
            // },

            outputPath: 'images/',
            // publicPath: 'assets/',
            emitFile: true
          }
        }
      } */

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
      /* {
        test: /\.(scss|css)$/,
        use: [
          'style-loader', 
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          }, 
          'sass-loader'
        ]
      }, */
      /* {
        test: /\.(scss|css)$/,
        use: [
          'style-loader/url',
          {
            loader: 'file-loader'
          },
          'sass-loader'
        ]
      }, */
      /* {
        test: /\.css$/,
        use: [
          'style-loader/useable',
          {
            loader: 'css-loader'
          }
        ]
      }, */
      /* {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              insertInto: 'body',
              singleton: true,
              transform: './css.transform.js'
            }
          },
          {
            loader: 'css-loader'
          },
          'sass-loader'
        ]
      }, */
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              insertInto: 'body',
              singleton: true   // 放到一个style标签里面
            }
          },
          {
            loader: 'css-loader',
            options: {
              // minimize: true // 在高版本中废除了
              // modules: true
            }
          },
          'sass-loader'
        ]
      },

      {
        test: /\.(eot|ttf|svg|woff)($|\?)/i,
        use: {
          loader: 'file-loader'
        }
      }
      
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack'
    })
  ]
}


