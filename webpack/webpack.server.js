const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const common = require('./common');

const isProduction = process.env.MODE === 'production';

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
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              emit: false,
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: isProduction ? '[hash:base64]' : '[name]__[local]--[hash:base64:5]',
              },
              sourceMap: !isProduction
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: !isProduction
            }
          },
        ]
      },
    ],
  },
  plugins: [
    new webpack.NormalModuleReplacementPlugin(
      /lib\/adapter\/xhr\.js/,
      './lib/adapter/http.js',
    ),
  ]
});
