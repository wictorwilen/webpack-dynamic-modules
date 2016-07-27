var path = require("path");
var webpack = require('webpack');
var config = {
  entry: './src/ExternalWidget.ts',
  output: {
    libraryTarget: "commonjs",
    filename: "./dist/ExternalWidget.js",
  },
  resolve: {
    extensions: ["", ".ts", ".tsx", ".js"],
  },
  externals: {
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },
};


module.exports = config;