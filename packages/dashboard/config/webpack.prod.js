const {merge} = require('webpack-merge');
const {ModuleFederationPlugin} = require('webpack').container;
const packageJson = require('../package.json');
const commonConfig = require('./webpack.common');

const prodConfigs = {
  mode: 'production', // now wbpk will do optimisations
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/dashboard/latest/'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'dashboard',
      filename: 'remoteEntry.js',
      exposes: {
        './DashboardApp': './src/bootstrap'
      },
      shared: packageJson.dependencies
    })
  ]
}

module.exports = merge(commonConfig, prodConfigs);