const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const extractCSS = new ExtractTextPlugin({
	filename: 'styles/[name]-css.css',
	ignoreOrder: true
})
const extractLESS = new ExtractTextPlugin({
	filename: 'styles/[name]-less.css',
	ignoreOrder: true
})

const extractSTYL = new ExtractTextPlugin({
	filename: 'styles/[name]-styl.css',
	ignoreOrder: true
})

const extractSCSS = new ExtractTextPlugin({
	filename: 'styles/[name]-scss.css',
	ignoreOrder: true
})

module.exports = {
	// mode: 'production',
	mode: 'development',
	entry: {
		app: './src/index.js'
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname,'dist')
	},
	optimization: {
		splitChunks: {
			chunks: 'initial',
			automaticNameDelimiter: '--',
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'public/vendor',
					enforce: true,
					reuseExistingChunk: true   // 表示可以使用已经存在的块，即如果满足条件的块已经存在就使用已有的，不再创建一个新的块。
				}
			}
		},
		runtimeChunk: {
				name: 'page/manifest'
		}
	},
	module: {
		rules: [
			/*{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader'
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
		        test: /\.styl$/i,
		        use: extractSTYL.extract({
		        	fallback: 'style-loader',
		        	use: ['css-loader', 'stylus-loader']
		        })
		    },
		    {
		        test: /\.scss$/i,
		        use: extractSCSS.extract({
		        	fallback: 'style-loader',
		        	use: ['css-loader','sass-loader']
		        })
		    },
			{
				test: /\.(png|svg|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[hash:base64:6]--[name].[ext]',
							outputPath: 'img',
							publicPath: '../img'
						}
					}
				]
			},
			{
				test: /\.(woff2?|eot|ttf|otf)$/,
				loader: 'file-loader',
				options: {
					outputPath: 'font',
					publicPath: '../font'
				}
			},
			{
				test: /\.(csv|tsv)$/,
				use: ['csv-loader']
			},
			{
				test: /\.xml$/,
				use: ['xml-loader']
			}
			
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title: '练习',
			filename: 'html/index.html',
		}),
		/*new ExtractTextPlugin({
			filename: 'styles/[name].css'
		})*/
		extractCSS, extractLESS, extractSTYL, extractSCSS
	]
}

/*{
				test: /\.css$/,
				use: ['style-loader','css-loader']
			},*/

/*{
				test: /\.(png|svg|jpe?g|gif)$/i,
				use: [
					'file-loader',
					{
						loader: 'image-webpack-loader',
						options: {
							bypassOnDebug: true,
							mozjpeg: {
					          progressive: true,quality: 65
					       },
					        optipng: {
					          enabled: false,
					        },
					        pngquant: {
					          quality: '65-90',speed: 4
					        },
					        gifsicle: {
					          interlaced: false,
					        },
					        webp: {
					          quality: 75
					        }
						}
					}
				]
			}*/

