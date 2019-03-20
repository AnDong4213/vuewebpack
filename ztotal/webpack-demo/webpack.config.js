const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let env = 'development';
// let env = 'production';

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
      {
        test: /\.scss$/,
        use: [
          'style-loader', 
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: true
            }
          }, 
          'sass-loader', 
          'postcss-loader'
        ]
      },
      {
        test: /\.(eot|ttf|svg|woff|woff2)($|\?)/i,
        use: {
          loader: 'file-loader'
        }
      }
      
    ]
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'WP',
    })
  ]
}


