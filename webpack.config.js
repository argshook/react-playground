module.exports = {
  entry: './index',

  output: {
    filename: 'index.js',
    path: __dirname + '/dist'
  },
  loaders: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ["babel-loader"]
    }
  ]
};
