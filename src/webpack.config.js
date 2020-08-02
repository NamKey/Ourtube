const path = require("path");
const autoprefixer = require("autoprefixer");
const MiniExtractCSS = require("mini-css-extract-plugin");

const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.join(__dirname, "static");

const config = {
    entry: ["@babel/polyfill", ENTRY_FILE],
    mode: MODE,
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader",
                    },
                ],
            },
        ],
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniExtractCSS.loader,
                    },
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins() {
                                return [autoprefixer()];
                            },
                        },
                    },
                    "sass-loader",
                ],
            },
        ],
    },
    output: {
        path: OUTPUT_DIR,
        filename: "[name].js",
    },
    plugins: [new MiniExtractCSS({ filename: "styles.css" })],
};

module.exports = config;
