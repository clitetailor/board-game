const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	entry: {
		app: './App.jsx',
		gameplay: './GamePlay.jsx',
		room: './Room.jsx',
		entrance: './Entrance.jsx',
		signup: './SignUp.jsx',
		vendor: [
			'jquery',
			'react',
			'react-dom',
		]
	},

	devServer: {
		contentBase: path.join("./dist"),
		compress: true,
		port: 9000
	},

	context: path.resolve('./app'),

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
				path.resolve(__dirname, "app")
			],

			use: "babel-loader"
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
				use: ["css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:5]", "stylus-loader"]
			})
		}, {
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				fallback: "style-loader",
				use: "css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:5]"
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
			path.resolve("./app")
		],

		alias: {
			app: path.resolve('./app')
		},

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
		new webpack.ProvidePlugin({
			jQuery: 'jquery',
			$: 'jquery',
			jquery: 'jquery'
		}),
		new ExtractTextPlugin({
			filename: 'css/[name].css'
		})
	]
}