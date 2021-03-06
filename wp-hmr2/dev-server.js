// 当使用 webpack dev server 和 Node.js API 时，不要将 dev server 选项放在 webpack 配置对象(webpack config object)中。而是，在创建选项时，将其作为第二个参数传递。例如：
// new WebpackDevServer(compiler, options)
// 想要启用 HMR，还需要修改 webpack 配置对象，使其包含 HMR 入口起点。webpack-dev-server package 中具有一个叫做 addDevServerEntrypoints 的方法，你可以通过使用这个方法来实现

const path = require('path')
const webpackDevServer  = require('webpack-dev-server')
const webpack = require('webpack')

const config = require('./webpack.config.js')
const options = {
	contentBase: path.join(__dirname, 'dist'),
	hot: true,
	host: 'localhost',
	open: true
}

webpackDevServer.addDevServerEntrypoints(config,options)
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(8043, 'localhost', () => {
	console.log('dev server listening on port 8043');
})











