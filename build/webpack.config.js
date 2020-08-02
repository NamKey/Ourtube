"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var path = require("path");

var autoprefixer = require("autoprefixer");

var MiniExtractCSS = require("mini-css-extract-plugin");

var MODE = process.env.WEBPACK_ENV;
var ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
var OUTPUT_DIR = path.join(__dirname, "static");
var config = {
  entry: ["@babel/polyfill", ENTRY_FILE],
  mode: MODE,
  module: _defineProperty({
    rules: [{
      test: /\.js$/,
      use: [{
        loader: "babel-loader"
      }]
    }]
  }, "rules", [{
    test: /\.scss$/,
    use: [{
      loader: MiniExtractCSS.loader
    }, "css-loader", {
      loader: "postcss-loader",
      options: {
        plugins: function plugins() {
          return [autoprefixer()];
        }
      }
    }, "sass-loader"]
  }]),
  output: {
    path: OUTPUT_DIR,
    filename: "[name].js"
  },
  plugins: [new MiniExtractCSS({
    filename: "styles.css"
  })]
};
module.exports = config;