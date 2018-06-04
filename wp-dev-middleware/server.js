// webpack-dev-middleware 是一个容器(wrapper)，它可以把 webpack 处理后的文件传递给一个服务器(server)。 webpack-dev-server 在内部使用了它，同时，它也可以作为一个单独的包来使用，以便进行更多自定义设置来实现更多的需求。接下来是一个 webpack-dev-middleware 配合 express server 的示例。

const webpackDevMiddleware  = require('webpack-dev-middleware')
const webpack = require('webpack');
const express = require('express')

const app = express()
const config = require('./webpack.config.js')
const compiler = webpack(config);

// console.log(webpack)

app.use(webpackDevMiddleware(compiler,{
	publicPath: config.output.publicPath
}))

app.listen(3000,() => {
	console.log('Example app listening on port 3000!\n');
})







