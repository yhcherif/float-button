const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    "./src/main.js"],
	output: {
         path: './dist',
         filename: 'app.bundle.js',
         publicPath: "/"
     },
    module: {
       loaders: [
        {
        	test: /\.js$/,
         	exclude: /node_modules/,
         	loader: "babel-loader"
        },
        { test: /\.css$/, loader: "style!css" }
       ]
    },
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                // compress: {
                //     warnings: false,
                // },
                output: {
                    comments: false,
                },
            }),
            new HtmlWebpackPlugin({
                title: "Webpack",
                filename: "index.html",
                template: "src/index.html",
                inject: true,
                hash: true
            }),
            new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin(),
        ]
}
