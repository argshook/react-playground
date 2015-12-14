var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './index.js',

  output: {
    filename: 'index.js',
    path: __dirname + '/dist'
  },

  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        query: {
          //cacheDirectory: true,
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
