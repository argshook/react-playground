var path = require('path');
var webpack = require('webpack');
var Clean = require('clean-webpack-plugin');

var node_modules_dir = path.resolve(__dirname, 'node_modules');

module.exports = {
  entry: {
    javascript: path.resolve(__dirname, 'index.js'),
    html: path.resolve(__dirname, 'src/index.html')
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: [node_modules_dir],
        loader: 'babel-loader?presets[]=es2015,presets[]=react'
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      }
    ]
  },

  plugins: [
    new Clean(['dist']),
    new webpack.optimize.UglifyJsPlugin({
      include: /\.jsx?$/,
      exclude: [node_modules_dir]
    }),
    new webpack.optimize.DedupePlugin()
  ]
};

