/*
 * @Description: 
 * @Author: Jamboy
 * @Date: 2021-12-01 16:27:10
 * @LastEditTime: 2021-12-03 09:24:25
 */

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: "./src/main.ts",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js"
  },
  mode: "development",
  resolve: {
    extensions: [".ts",".js",".json"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    })
  ]

}