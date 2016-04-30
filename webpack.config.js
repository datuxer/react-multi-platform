//
// Base Webpack Settings
//
var webpack = require('webpack');
var config = require('./configs');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  devtool: 'source-map',

  entry: [
    './index.js'
  ],

  output: {
    path: config.DIST,
    filename: 'app.js'
  },

  stats: {
    colors: true,
    reasons: true
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'React Multi Platform',
      template: './index.html',
      inject: false
    })
  ],

  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /node_modules|dist/,
        loader: 'babel'
      },
      {
        test: /\.css/,
        exclude: /node_modules|dist/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
}
