const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const babelloader = require('babel-loader')
module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.join(__dirname, '/build'),
    publicPath: "/",
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react','stage-0']
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:'./index.html'
    })
  ]
}