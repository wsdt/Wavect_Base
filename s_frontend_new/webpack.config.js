
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")

module.exports = {
	entry: './src/index.tsx',
	mode: 'development',
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "bundle.js"
	},
	devServer: {
		hot: true,
		inline: true,
	},
	optimization: {
		splitChunks: {
			chunks: 'all'
		},
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: true
			}),
			new OptimizeCSSAssetsPlugin({})
		],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: "awesome-typescript-loader"
			},
			{
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader"
			}, 
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader, 
					{
						loader: "css-loader",
					}, 
					{
						loader: 'sass-loader', options: {
							sourceMap: true
						}
					},
				],
			},
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./index.html"
		}),
		new MiniCssExtractPlugin({
			filename: "style.css"
		})
	],
	devtool: "source-map",
	resolve: {
		extensions: [".js", ".ts", ".tsx"]
	}
}