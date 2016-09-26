const path = require('path');
const webpack = require('webpack');
const deepAssign = require('deep-assign');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
        loaders: ['babel-loader?presets[]=es2015,presets[]=stage-0,presets[]=react']
      },
      {
        test: /\.s?[a|c]ss$/,
        exclude: [/node_modules/],
        loader: 'style-loader!css-loader!postcss-loader'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'velocity-injectable-loader?inject=velocity.data.js!./src/index.vm',
      inject: false
    })
  ],

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

  module: {
    loaders: baseConfig.module.loaders.map(l => {
      if(l.test.test('.js')) {
        l.loaders.unshift('react-hot-loader');
      }

      return l;
    })
  },

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

