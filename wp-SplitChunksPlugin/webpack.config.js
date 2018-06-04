const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin  = require('clean-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const webpack = require('webpack')

const extractCSS = new ExtractTextPlugin({
	filename: 'styles/[name]-one.css',
	ignoreOrder: true
})
const extractLESS = new ExtractTextPlugin({
	filename: 'styles/[name]-two.css',
	ignoreOrder: true
})

module.exports = {
	mode: 'development',
	entry: {
		index: './src/index.js',
		another: './src/another-module.js'
	},
	output: {
		filename: '[name].bundle2.js',
		path: path.resolve(__dirname,'dist')
	},
	optimization: {
        splitChunks: {
            chunks: 'initial', // 只对入口文件处理             // "filename": "最后output的文件名",
            automaticNameDelimiter: '--',  // 如果不指定name，自动生成name的分隔符（‘runtime~[name]’）
            cacheGroups: {
                vendor: { // split `node_modules`目录下被打包的代码到 `page && .css` 没找到可打包文件的话，则没有。css需要依赖 `ExtractTextPlugin`
                    test: /[\\/]node_modules[\\/]/,
                    name: 'page1/vendor',
                    priority: -10,
                    enforce: true,
                    reuseExistingChunk: true   //   表示可以使用已经存在的块，即如果满足条件的块已经存在就使用已有的，不再创建一个新的块。
                },
                /*default: {
                    // test: /[\\/]default[\\/]/,
                    name: 'page-default/default',
                    priority: -20,
                    enforce: true,
                    reuseExistingChunk: true
                },*/
               // 上面是缓存组的默认配置，可以通过default:false禁用默认的缓存组，然后就可以自定义缓存组，将初始化加载时被重复引用的模块进行拆分
                commons: { // split `common`目录下被打包的代码到`page2
                    test: /[\\/]common[\\/]/,
                    name: 'page2/other',
                    //  name: true,   // name表示代码的名字，设置为true则表示根据模块和缓存组秘钥自动生成。   // commons--another--index.bundle2.js
                    priority: -20,
                    enforce: true,
                    reuseExistingChunk: true
                },
                third: { // split `component`目录下被打包的代码到`page3 && .css`
                    test: /[\\/]component[\\/]/,
                    name: 'page3/san',
                    // name: true,
                    priority: -20,
                    enforce: true,
                    reuseExistingChunk: true
                },
                /*styles: {
		          name: 'styles1',
		          test: /\.(less|css)$/,
		          chunks: 'all',
		          minChunks: 1,
		          reuseExistingChunk: true,
		          enforce: true
		        }*/
            }
        },
        runtimeChunk: {
            name: 'page/manifest'
        }
       // runtimeChunk: true
       // runtimeChunk: 'single'
    },
	module: {
		rules: [
			/*{
				test: /\.(less|css)$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
          			use: ['css-loader', 'less-loader']
				})
			},*/
			{
		        test: /\.css$/,
		        use: extractCSS.extract({
		        	fallback: 'style-loader',
		        	use: ['css-loader']
		        })
		    },
		    {
		        test: /\.less$/i,
		        use: extractLESS.extract({
		        	fallback: 'style-loader',
		        	use: ['css-loader', 'less-loader']
		        })
		    },
			{
				test: /\.(png|svg|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[hash:base64:6][name].[ext]',
							outputPath: 'img',
							publicPath: '../img'
						}
					}
				]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title: 'Code Splitting',
			meta: {
				viewport: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0'
			}
		}), 
		/*new ExtractTextPlugin({
			filename: 'styles/[name].css'
		}),*/
		/*new webpack.optimize.SplitChunksPlugin({
		    chunks: "all",
		    minSize: 20000,
		    minChunks: 1,
		    maxAsyncRequests: 5,
		    maxInitialRequests: 3,
		    name: true
		}),*/
		extractCSS, extractLESS
	]
	
} 




