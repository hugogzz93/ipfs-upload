const HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname);

var config = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'index_bundle.js'
  },
  devServer: {
    contentBase: BUILD_DIR
  },
  module : {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: '/node_modules/',
        use: {
          loader: 'babel-loader'
        }
      },{
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};

module.exports = config;
