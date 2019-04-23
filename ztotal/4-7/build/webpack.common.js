const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: {
    main: './src/index.js',
    // vendor: ['lodash']
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
    // new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      title: '',
      template: './src/index.html'
    }),
    new CleanWebpackPlugin()
  ],
  // chunks: 表示显示块的范围，有三个可选值：initial(初始块)、async(按需加载块)、all(全部块)，默认为all;
  optimization: {
    splitChunks: {
      chunks: 'all', // async只适用于异步代码import('')，同步不适用，如果要适用于同步的话改用 all或initial(适用于同步代码),再配置cacheGroups下的vendors
      minSize: 30000,
      maxSize: 0,  // 对体积大的模块进行二次拆分，一般用默认就行...
      minChunks: 1,  // 打包生成的chunk至少有几个用到了模块的时候才进行代码分割
      maxAsyncRequests: 5, // 同时加载的模块数最多是几个  一般用默认就行... 最大的初始请求数是为了防止chunk划分的过于细致，导致大量的文件请求降低performance
      maxInitialRequests: 3,  // 入口文件可能会引入其他的库，引入的库最多分割成几个  一般用默认就行...模版html文件中，并行请求的javascript(不包括runtime)的数量。
      automaticNameDelimiter: '_',
      name: true,  // 以下filename配置的名称有效...
      cacheGroups: {
        // vendors: false,
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          /* test(module, chunks) {
            for (let key in module) {
              if (module[key] !== undefined) {
                // console.log(key)
              }
            }
            console.log(module.userRequest)
            // console.log(chunks)
            return module.type === 'javascript/auto';
          }, */
          priority: -10,  // 值越大优先级越高..所有的模块都符合以下的default
          // name: true  // name表示生成chunk的名称，设置为true则表示根据模块和缓存组秘钥自动生成。
          // filename: '[name].bundle6.js'  //   重命名bandle的文件名,用于同步代码 (不重命名vendors~main.js) (async异步代码下注释掉，否则打包报错)  (initial配置下打包不报错,同步起作用， 异步不起作用，Magic Comments起作用)  (all 异步代码注释掉，Magic Comments不起作用；既有同步也有异步时不用注释，Magic Comments不起作用)
        },
        jquery: {
          test: /[\\/]_jquery@3.4.0@jquery[\\/]/,
          // name: 'jquery/3',
          name: 'jquery_3.4',
          priority: -8,  // 优先级比test的高
          enforce: true, // Tells webpack to ignore splitChunks.minSize, splitChunks.minChunks, splitChunks.maxAsyncRequests and splitChunks.maxInitialRequests options and always create chunks for this cache group.
          reuseExistingChunk: true
        },
        test: {
          test: path.resolve(__dirname, '../', 'src'),
          name: 'an',
          priority: -1,
          enforce: true,
          reuseExistingChunk: true
        },
        default: {
          name: 'default',
          priority: -120,
          reuseExistingChunk: true,  // 拒绝重复引入的模块...
          filename: 'common.js'
        }
      }
    },
    runtimeChunk: {
      name: 'manifest'
    }
    // runtimeChunk: true
  },

  output: {
    filename: '[name].js', // 此选项不会影响那些「按需加载 chunk」的输出文件
    // chunkFilename: '[name].js',
    // chunkFilename: '[id].[chunkhash].js',
    // chunkFilename: '[id].js',
    path: path.resolve(__dirname, '../', 'dist')
  }
}


/* hash 	每一次打包都会生成一个唯一的 hash;
chunkhash 	根据每个 chunk 的内容来生成
chunk打包时，output.filename、output.chunkFilename 推荐使用 chunkhash;
contenthash 	根据提取文件的内容生成的 hash；
在使用 ExtractTextWebpackPlugin（webpack 3.x）或MiniCssExtractPlugin（webpack 4.x）时，使用 contenthash 提取出css部分代码到单独的css文件(比如：vue单文件组件中的style部分） */

/* all 	把动态和非动态模块同时进行优化打包；所有模块都扔到 vendors.bundle.js 里面。
initial 	把非动态模块打包进 vendor，动态模块优化打包
async 	把动态模块打包进 vendor，非动态模块保持原样（不优化） */

