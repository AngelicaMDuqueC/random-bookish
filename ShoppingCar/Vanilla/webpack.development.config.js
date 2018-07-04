const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const rxPaths = require('rxjs/_esm5/path-mapping');

var config = {
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  context: path.resolve('./src'),
  entry: {
    app: './index.js',
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    devtoolModuleFilenameTemplate: function(info) {
      return 'file:///' + info.absoluteResourcePath;
    },
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$|\.jsx$/,
        exclude: ['node_modules'],
        loader: 'babel-loader',
        options: {
          presets: [
            [
              'env',
              { targets: { browsers: ['last 2 versions', 'safari >= 7'] } },
            ],
            ['react'],
          ],
        },
      },
      { test: /\.css$/, loaders: ['style', 'css'] },
    ],
  },
  resolve: {
    extensions: ['.js'],
    modules: [path.resolve('./src'), 'node_modules'],
    alias: rxPaths(),
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new DashboardPlugin(),
    new HtmlWebpackPlugin({
      title: 'Shopping Car Vanilla Starter',
      template: './index.html',
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
};

// webpack.development.config.js
module.exports = config;
