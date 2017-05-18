var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
 
var path = require('path');
 
module.exports = {
  entry: {
    'polyfills': './demo/polyfills.ts',
    'vendor': './demo/vendor.ts',
    'app': './demo/main.ts'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    // publicPath: 'dist/',
    filename: '[name].[chunkhash].js'
  },
  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.css$/,
        loaders: ['to-string-loader', 'css-loader']
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 25000 }
          },
          'image-webpack-loader'
        ]
      }
    ]
  },  
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
    new HtmlWebpackPlugin({
      template: 'demo/index.html'
    })
  ]
};
