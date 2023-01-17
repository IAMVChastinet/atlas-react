const path = require('path')
const HTMLWebpackplugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
	entry: './src/index.js',

	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.js',
	},

	plugins: [
		new HTMLWebpackplugin({
			template: './public/index.html'
		}),
		new MiniCssExtractPlugin({
			filename: "assets/css/[name]." + ".css",
		}),
	],

	module: {
		rules: [
			{
				test: /\.(js)x?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			},
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			},
		]
	}
}