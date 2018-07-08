const webpack = require('webpack')
const path = require('path')
const DashboardPlugin = require('webpack-dashboard/plugin')
const rxPaths = require('rxjs/_esm5/path-mapping')

const config = {
  devtool: 'cheap-eval-source-map',
  context: path.resolve('./app'),
  entry: {
    app: './server.js',
  },
  output: {
    path: path.resolve('./dist'),
    filename: 'server.bundle.js',
    sourceMapFilename: '[name].map',
    devtoolModuleFilenameTemplate(info) {
      return `file:///${info.absoluteResourcePath}`
    },
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$|\.jsx$/,
        exclude: ['node_modules'],
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['env', { targets: { node: '8.11' } }], ['react']],
          },
        },
      },
      {
        test: /\.scss$|\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
    modules: [path.resolve('./app'), 'node_modules'],
    alias: rxPaths(),
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new DashboardPlugin(),
  ],
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
}

// webpack.server.config.js
module.exports = config
