const path = require('path');
const webpack = require('webpack');
const deepAssign = require('deep-assign');

const baseConfig = {
  entry: {
    bundle: path.resolve(__dirname, 'src', 'index.js')
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      },
      {
        test: /\.s?[a|c]ss$/,
        loader: 'style-loader!css-loader!postcss-loader'
      }
    ]
  },

  plugins: [],

  postcss: function() {
    return [
      require('autoprefixer'),
      require('precss')
    ];
  }
};

const devConfig = {
  plugins: (baseConfig.plugins || []).concat([
    new webpack.HotModuleReplacementPlugin()
  ]),

  devServer: {
    inline: true,
    hot: true,
    stats: {
      colors: true
    }
  }
};

const productionConfig = {
  plugins: (baseConfig.plugins || []).concat([
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true
      },
      minimize: true,
      comments: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      }
    })
  ])
};

module.exports = (baseConfig => {
  switch (process.env.NODE_ENV) {
    case 'dev':
    default:
      return deepAssign({}, baseConfig, devConfig);

    case 'production':
      return deepAssign({}, baseConfig, productionConfig);
  }
})(baseConfig);

