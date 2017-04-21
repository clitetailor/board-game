const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	entry: {
		index: 'index.jsx',
		vendor: [
			'jquery',
			'react',
			'react-router-dom',
			'redux-atomic-action',
			'immu-func',
			'history',
			'react-redux'
		]
	},

	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		port: 3000
	},

	context: path.resolve('./src'),

	output: {
		path: path.resolve("./dist"),
		filename: "js/[name].js",
	},

	devtool: "source-map",
	target: "web",

	module: {
		rules: [{
			test: /\.(js|jsx)?$/,
			include: [
				path.resolve(__dirname, "src")
			],

			use: ["babel-loader", "react-css-modules-loader"]
		}, {
			test: /\.html?$/,

			use: [{
				loader: "file-loader",
				query: {
					name: '[name].[ext]'
				}
			}]
		}, {
			test: /\.styl?$/,
			use: ExtractTextPlugin.extract({
				fallback: "style-loader",
				use: [{
					loader: "css-loader",
					query: {
						sourceMap: true,
						modules: true,
						importLoaders: 1,
						localIdentName: '[name]-[local]--[hash:base64:5]',
						camelCase: true,
						minimize: true
					}
				}, "stylus-loader"]
			})
		}, {
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				fallback: "style-loader",
				use: {
					loader: "css-loader",
					query: {
						sourceMap: true,
						modules: true,
						importLoaders: 1,
						localIdentName: '[name]-[local]--[hash:base64:5]',
						camelCase: true,
						minimize: true
					}
				}
			})
		}, {
			test: /\.(png|jpg|jpeg|svg|ico)$/,
			loader: 'file-loader',
			query: {
				name: 'assets/[hash].[ext]',
				publicPath: '/'
			}
		}, {
			test: /\.(woff2?|ttf|eot)$/,
			loader: 'file-loader',
			query: {
				name: 'assets/[hash].[ext]',
				publicPath: '/'
			}
		}],
	},

	resolve: {
		modules: [
			"node_modules",
			path.resolve("./src")
		],

		extensions: ['.js', '.json', '.jsx', '.styl', '.css'],
	},

	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: (module) => {
				return module.context && module.context.indexOf("node_modules") !== -1;
			}
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: "manifest",
			minChunks: Infinity
		}),
		new ExtractTextPlugin({
			filename: 'css/[name].css'
		})
	]
}