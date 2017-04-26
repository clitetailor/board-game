const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	entry: {
		index: 'index.tsx',
		vendor: [
			'jquery',
			'react',
			'react-router-dom',
			'immu-func',
			'mobx',
			'mobx-react',
			'leroy'
		]
	},

	context: path.resolve('./src'),

	output: {
		path: path.resolve("./dist"),
		filename: "js/[name].js"
	},

	devtool: "source-map",
	target: "web",

	module: {
		rules: [{
			test: /\.(tsx|ts)?$/, loader: ["awesome-typescript-loader", "react-css-modules-loader"]
		}, {
			enforce: "pre", test: /\.js$/, loader: "source-map-loader"
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
			test: /\.(png|jpg|jpeg|svg|ico|woff2?|ttf|eot)$/,
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

		extensions: ['.ts', '.tsx', '.js', '.json', '.jsx', '.styl', '.css'],
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