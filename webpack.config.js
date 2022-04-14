const path = require('path');
const webpack = require('webpack');

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
  ],
  devtool: 'inline-source-map',
  mode: 'development',
};
