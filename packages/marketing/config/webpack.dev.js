const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');
const { ModuleFederationPlugin } = require('webpack').container;

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8081,
    historyApiFallback: true,
    // historyApiFallback: {
    //   index: '/index.html'
    // }
  },
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new ModuleFederationPlugin({
      name: 'marketing',
      filename: 'remoteEntry.js',
      exposes: {
        "./MarketingApp": "./src/bootstrap"
      },
      shared: ['react', 'react-dom'],
    })
  ]
}

module.exports = merge(commonConfig, devConfig)