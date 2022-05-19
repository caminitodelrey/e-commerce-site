const webpack = require('webpack');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');
var CompressionPlugin = require('compression-webpack-plugin');
const path = require('path');

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      process: "process/browser"
    },
    fallback: {
      "fs": false,
      "os": false,
      "path": false
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
        process: 'process/browser',
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'client/dist/**/**', to: DIST_DIR }
      ]
    }),
    new ImageminPlugin(),
    new CompressionPlugin({
      // asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ],
  devtool: 'inline-source-map',
  mode: 'development',
  optimization: {
    minimizer: [
      (compiler) => {
        const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
        new UglifyJsPlugin().apply(compiler);
      },
    ],
  },
};
