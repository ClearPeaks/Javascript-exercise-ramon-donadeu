const common = require("./webpack.common")
const {merge} = require("webpack-merge");
const path = require("path");

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "main.[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        publicPath: path.resolve(__dirname, "dist"),
    },
});