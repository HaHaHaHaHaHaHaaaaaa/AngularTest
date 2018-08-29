const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  entry: {
    main:'./src/main.ts',
    vendor:'./src/polyfills.ts'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  resolve: {
    extensions: ['.ts', '.html', '.css', '.js'],
  },
  module: {
    rules: [{
        test: /\.ts$/,
        loader: 'awesome-typescript-loader!angular2-template-loader',
        exclude:/\.spec\.ts/
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.html$/,

        loader: 'html-loader'
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['main', 'vendor',]
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject:'body',
      filename: 'index.html'
    })
  ]
}
