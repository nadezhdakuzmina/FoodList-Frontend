const path = require('path');
const { merge } = require('webpack-merge');

const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.MODE === 'production';
const isDevServerUsed = process.env.TYPE === 'dev-server';

const common = require('./common');

module.exports = merge(common, {
  entry: {
    main: path.resolve(__dirname, '../src/entries/client/index.tsx'),
  },
  output: {
    path: path.resolve(__dirname, '../dist/public'),
    publicPath: isDevServerUsed ? '/' : '/static/',
    filename: 'index.js',
    clean: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/assets/html/index.html'),
      filename: path.resolve(__dirname, '../dist/public/index.html'),
    }),
    new FaviconsWebpackPlugin({
      logo: path.resolve(__dirname, '../src/assets/images/favicon.png'),
      outputPath: path.resolve(__dirname, '../dist/public'),
      prefix: isDevServerUsed ? '/' : '/static/',
      inject: true,
      mode: isProduction ? 'webapp' : 'light',
      favicons: {
        appName: 'FoodList',
        appDescription: '',
        background: '#fff',
        theme_color: '#5095f0',
        icons: {
          appleStartup: false,
        }
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: !isProduction
            }
          },
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
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
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
});
