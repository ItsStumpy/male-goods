// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path')

const isProduction = process.env.NODE_ENV === 'production'
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/code/main.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.html$/, use: { loader: 'html-loader' }
      },
      {
        test: /\.css$/, use: ['style-loader', 'css-loader']
      },
      {
        test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ],
  performance: { hints: false },
  watch: true, devtool: 'source-map'
}
