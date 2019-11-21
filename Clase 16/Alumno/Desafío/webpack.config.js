<<<<<<< HEAD
var CopyWebpackPlugin = require('copy-webpack-plugin')
var webpack = require('webpack')

var path = require('path')

module.exports = {
  entry: [ './src/js/index.js' ],
=======
var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack');

var path = require('path');

module.exports = {
  entry: ['./src/js/index.js'],
>>>>>>> upstream/master
  output: {
    filename: 'js/index.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.css$/,
<<<<<<< HEAD
        use: [ 'style-loader', 'css-loader' ]
=======
        use: ['style-loader', 'css-loader']
>>>>>>> upstream/master
      },
      {
        test: /\.(png|jpg|gif|svg|ico|jpeg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  devServer: {
    port: 3000,
    hot: true
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, './template'),
        to: path.resolve(__dirname, './public')
      }
    ]),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
<<<<<<< HEAD
}
=======
};
>>>>>>> upstream/master
