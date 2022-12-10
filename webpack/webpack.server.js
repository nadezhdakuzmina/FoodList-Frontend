const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');

const common = require('./common');

module.exports = merge(common, {
  entry: {
    main: path.resolve(__dirname, '../src/entries/server/index.tsx'),
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/static/',
    filename: 'server/index.js',
    clean: false,
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ['null-loader']
      }
    ],
  },
  plugins: [
    new webpack.NormalModuleReplacementPlugin(
      /lib\/adapter\/xhr\.js/,
      './lib/adapter/http.js',
    ),
  ]
});
