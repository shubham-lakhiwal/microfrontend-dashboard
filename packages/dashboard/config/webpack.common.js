const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js'
  },
  resolve: {
    extensions: ['.js', '.vue'],
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|eot|svg|ttf|woff|woff2)$/i,
        use: [
          {loader: 'file-loader'},
        ]
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      },
      {
        test: /\.(css|scss)$/i, // Matches files ending with .css
        use: ['vue-style-loader', 'style-loader', 'css-loader', 'sass-loader'], // Apply style-loader and css-loader
      },
    ]
  },
  plugins: [new VueLoaderPlugin()],
}