const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports.default = {
	mode: "development",

	entry: {
		entry: "./static/entry.ts",
	},

	devtool: "cheap-module-source-map",

	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "[name].js",
	},

	resolve: {
		extensions: [".ts", ".js"],
	},

	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: "vue-loader",
			},
			{
				test: /\.ts$/,
				use: "ts-loader",
			},
		],
	},

	plugins: [
		new VueLoaderPlugin(),
	],
};
