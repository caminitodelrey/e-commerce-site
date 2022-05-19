const path = require("path");
const webpack = require('webpack')

// const environmentVariables = [
//   "BASE_URL",
// ];

module.exports = {
  entry: path.join(__dirname, '/client/src/index.jsx'),

  // plugins: [
  //   new webpack.EnvironmentPlugin(environmentVariables)
  // ],

  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
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

  output: {
    filename: 'bundle.js',
    path: '/Users/haleyjung/Documents/_HACKREACTOR/2022-02_Immersive/FEC/FEC/client/dist',
  }
};