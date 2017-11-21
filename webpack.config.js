const webpack = require('webpack')
const path = require('path')

module.exports = {
	entry: './src/js/index.js',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	module: {
		rules: [{
			test: /\.scss?$/,
			use: [
				{ loader: 'style-loader' },
				{ loader: 'css-loader' },
				{ loader: 'sass-loader' }
			]
		}, {
			test: /\.js$/,
			use: [
				{ loader: 'babel-loader' },
			],
			exclude: path.join(__dirname, 'node_modules')
		}]
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		publicPath: '/',
		port: 1877
	}
}
