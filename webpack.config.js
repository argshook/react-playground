var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    javascript: './index.js',
    html: './index.html'
  },

  output: {
    filename: 'app.js',
    path: __dirname + '/dist'
  },

  module: {
    loaders: [
      {
        loaders: ['react-hot', 'babel-loader?presets[]=es2015,presets[]=react'],
        test: /\.jsx?$/,
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      }
    ]
  }
};
