const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    background: "./src/js/background.js",
    devtools: "./src/js/devtools.js",
    content: "./src/js/Components/content.jsx",
  },
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".scss", ".css"],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{from: "src/manifest.json"}],
    }),
    new CopyWebpackPlugin({
      patterns: [{from: "src/html"}],
    }),
    new CopyWebpackPlugin({
      patterns: [{from: "src/img", to: "img"}],
    }),
  ],
};
