var path = require('path');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  context: path.resolve('app'),
  entry: ['babel-polyfill', './app'],
  output: {
    path: path.resolve('build/js'),
    publicPath: path.resolve('/public/js'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: 'public'
  },
  plugins: [new ngAnnotatePlugin({
    add: true
  }), new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery"
  })],
  module: {
    preLoaders: [{
      test: /\.es6$/,
      exclude: /node_modules/,
      loader: 'eslint-loader'
    }],
    loaders: [
      {
        test: require.resolve("jquery"),
        loader: "imports?jQuery=jquery"
      },
      // what kind of file
      {
        test: /\.es6$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }, {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader!autoprefixer-loader'
      }, {
        test: /\.(png|jpg|woff|woff2|eot|ttf|svg)/, loader: 'url-loader?limit=10000'
      }]
  },
  resolve: {
    extensions: ['', '.js', '.es6']
  }
};