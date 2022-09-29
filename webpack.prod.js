const common = require("./webpack.common")
const {merge} = require("webpack-merge")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const path = require('path')
const  { fileURLToPath } = require ('url');

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "main.[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
        publicPath: path.resolve(__dirname, "dist"),
    },
    plugins: [new CleanWebpackPlugin()]
});