const webpack = require('webpack')
const path = require('path')

module.exports = {
	entry: {
		index: './App.jsx',
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
		filename: "[name].js",
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
			use: [
				'style-loader',
				'css-loader',
				'stylus-loader'
			],
		}, {
			test: /\.css?$/,
			use: [
				'style-loader',
				'css-loader'
			]
		}, {
			test: /\.(png|jpg|jpeg|svg|ico)$/,
			use: [
				'file-loader?name=assets/[name].[ext]'
			]
		}, {
			test: /\.(woff2?|ttf|eot)$/,
			use: [
				'url-loader?limit=10000'
			]
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
			name: 'vendor'
		}),
		new webpack.ProvidePlugin({
			jQuery: 'jquery',
			$: 'jquery',
			jquery: 'jquery'
		})
	]
}