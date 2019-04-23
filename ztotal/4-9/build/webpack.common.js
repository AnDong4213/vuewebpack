const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js'
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
      template: './src/index.html'
    }),
    new CleanWebpackPlugin()
  ],
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: 'all',
      automaticNameDelimiter: '-',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          name: 'hehe'
        }
      }
    },
    /* runtimeChunk: {
      name: 'manifest'
    } */
    // runtimeChunk: true
  },
  // performance: false,
  output: {
    path: path.resolve(__dirname, '../', 'dist')
  }
}
