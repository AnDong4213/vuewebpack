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
      template: './src/index.html'
    }),
    new CleanWebpackPlugin()
  ],
  // 无论同步代码的分割还是异步代码的分割都要配置optimization.splitChunks
  /* optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: false,
        default: false
      }
    }
  } */
  /* optimization: {
    splitChunks: {}  // 不写配置则用默认的配置...
  } */
  // chunks: 表示显示块的范围，有三个可选值：initial(初始块)、async(按需加载块)、all(全部块)，默认为all;
  optimization: {
    splitChunks: {
      chunks: 'all', // async只适用于异步代码import('')，同步不适用，如果要适用于同步的话改用 all或initial(适用于同步代码),再配置cacheGroups下的vendors
      minSize: 30000,
      maxSize: 0,  // 对体积大的模块进行二次拆分，一般用默认就行...
      minChunks: 1,  // 当一个模块被用了至少多少次的时候才进行代码分割
      maxAsyncRequests: 5, // 同时加载的模块数最多是几个  一般用默认就行... 最大的初始请求数是为了防止chunk划分的过于细致，导致大量的文件请求降低performance
      maxInitialRequests: 3,  // 入口文件可能会引入其他的库，引入的库最多分割成几个  一般用默认就行...模版html文件中，并行请求的javascript(不包括runtime)的数量。
      automaticNameDelimiter: '~',
      name: true,  // 以下filename配置的名称有效...
      cacheGroups: {
        // vendors: false,
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,  // 值越大优先级越高..所有的模块都符合以下的default
          filename: 'vendors.js'  //   重命名bandle的文件名,用于同步代码 (不重命名vendors~main.js) (async异步代码下注释掉，否则打包报错)  (initial配置下打包不报错,同步起作用， 异步不起作用，Magic Comments起作用)  (all 异步代码注释掉，Magic Comments不起作用；既有同步也有异步时不用注释，Magic Comments不起作用)
        },
        haha: {
          test: /[\\/]haha[\\/]/,
          // name: 'haha/index',
          name: true,
          priority: -12,
          enforce: true,
          reuseExistingChunk: true
        },
        styles: {
          name: 'styles',
          test: /\.(less|css)$/,
          chunks: 'all',
          minChunks: 1,
          reuseExistingChunk: true,
          enforce: true
        },
        default: {
          priority: -20,
          reuseExistingChunk: true,  // 拒绝重复引入的模块...
          filename: 'common.js'
        }
      }
    }
  },

  output: {
    filename: '[name].js',
    // chunkFilename: '996.js',
    path: path.resolve(__dirname, '../', 'dist')
  }
}






