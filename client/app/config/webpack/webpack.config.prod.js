const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const webpack = require('webpack');

const clientPath = path.resolve(__dirname, "..", "..", "..");
const appPath = path.resolve(clientPath, "app");
const distPath = path.resolve(clientPath, "dist");

module.exports = {
  mode: 'production',
  context: appPath,
  entry: {
    client: [
      "./src/index.tsx"
    ],
    vendor: [
      "react",
      "react-dom"
    ]
  },
  output: {
    path: distPath,
    filename: "js/[name].bundle.js"
  },
  resolve: {
    extensions: [".css", ".tsx", ".ts", ".js"],
  },
  performance: {
    hints: false
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          "awesome-typescript-loader"
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      },
      {
        test: /\.(png|jpg|woff|woff2|eot|ttf|svg|otf)$/,
        use: 'url-loader'
      },
      {
        test: /\.(ts|tsx)?$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: {
          emitErrors: true,
          failOnHint: false
        }
      },
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin([distPath], {
      root: clientPath
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
      }
    }),
    new MiniCssExtractPlugin({
      filename: "./css/[name].css",
      chunkFilename: "[id].css"
    }),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      "window.jQuery": "jquery"
    }),
  ]
}
