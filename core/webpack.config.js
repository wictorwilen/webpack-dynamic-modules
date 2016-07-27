var path = require("path");
var webpack = require('webpack');
var config = {
  entry: {
    main: ["./src/lib/main.ts", "./src/lib/Logger.ts"],
    widgetA: ["./src/widgets/WidgetA.ts","./src/widgets/WidgetAlpha.ts"],
    widgetB: ["./src/widgets/WidgetB.ts"]
  },
  output: {
    libraryTarget: "commonjs",
    filename: "./dist/[name].js",
  },
  resolve: {
    extensions: ["", ".ts", ".tsx", ".js"],
  },
  externals: {
    jquery: 'https://code.jquery.com/jquery-1.10.2.js'
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'main'
    })
  ]
};


module.exports = config;