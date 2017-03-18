import path from 'path';
const ExtractTextPlugin = require('extract-text-webpack-plugin')

export default {
  devtool: 'eval',
  entry: './client/index',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  module: {
    loaders: [
      {test: [/\.js$/, /\.jsx$/], loaders: ['babel'], exclude: /node_modules/},
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'css-loader',
          loader: 'css',
        })
      },
    ]
  },
};
