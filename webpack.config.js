var path = require('path');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var webpack = require('webpack');

module.exports = {
  entry: {
    javascript: path.resolve(__dirname, 'index.js'),
    html: path.resolve(__dirname, 'src/index.html')
  },

  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, '/dist')
  },

  module: {
    loaders: [
      {
        loaders: ['react-hot', 'babel-loader?presets[]=es2015,presets[]=react'],
        test: /\.jsx?$/,
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      }
    ]
  },

  postcss: function() {
    return [autoprefixer, precss];
  }
};
