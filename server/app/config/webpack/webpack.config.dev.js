const fs = require("fs");
const path = require("path");
const webpack = require("webpack");

const serverPath = path.resolve(__dirname, "..", "..", "..");
const appPath = path.resolve(serverPath, "app");
const distPath = path.resolve(serverPath, "dist");

var nodeModules = {};
fs.readdirSync("node_modules")
  .filter(function (x) {
    return [".bin"].indexOf(x) === -1;
  })
  .forEach(function (mod) {
    nodeModules[mod] = "commonjs " + mod;
  });

module.exports = {
  mode: 'development',
  target: "node",
  context: appPath,
  entry: "./src/server.ts",
  output: {
    filename: "js/[name].bundle.js",
    path: distPath
  },
  externals: nodeModules,
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          "awesome-typescript-loader",
        ]
      }
    ]
  },
  plugins: [
  ]
}
