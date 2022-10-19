const path = require('path');
const { merge } = require('webpack-merge');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.MODE_ === 'production';
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
        test: /\.scss$/,
        exclude: /src\/assets\/styles/,
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
      {
        test: /\.scss$/,
        include: /src\/assets\/styles/,
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
});
