const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  devServer: {
    contentBase: './dist',
    port: 8076,
    open: false,
    overlay: {
    	errors: true,
    	warnings: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              modules: false,
            },
          },
        ],
      },
      {
      	test: /\.js$/,
      	enforce: 'pre',
      	loader: 'eslint-loader',
      	options: {
      		emitWarning: true,
      	},
      },
      {
      	test: /\.js$/,
      	use: [
      		{
      			loader: 'babel-loader',
      			/*options: {
      				presets: ['react', 'env'],
      				plugins: ['transform-object-rest-spread']
      			}*/
      		},
      	],
      	exclude: [path.resolve(__dirname, 'node_modules')],
      },
      
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: '我的HWP',
      template: './src/index.html',
			filename: 'index.html',
    }),
		
  ],
	
};


/*{
	"presets": ["react", "env"],
  "plugins": ["transform-runtime", "transform-object-rest-spread", "transform-async-generator-functions"],
	"babelrc": false,
	"comments": false
}*/

/*Plugin 会运行在 Preset 之前。
Plugin 会从第一个开始顺序执行。ordering is first to last.
Preset 的顺序则刚好相反(从最后一个逆序执行)。*/

// env 选项  在特定环境的时候，您可以用 env 选项来设置特定的配置:
/*{
  "env": {
    "production": {
    	"presets": ["es2015"],
      "plugins": ["transform-react-constant-elements"]
    }
  }
}*/


