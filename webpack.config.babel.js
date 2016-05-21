import ExtractTextPlugin from 'extract-text-webpack-plugin';

module.exports = {
  cache: true,
  entry: './src/index',
  output: {
    path: 'public',
    filename: 'javascripts/application.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-1']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css!sass')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('stylesheets/styles.css')
  ]
};