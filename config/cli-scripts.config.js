const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin")
const path = require("path")

module.exports = {
  mode: "production",
  entry: [
    path.resolve(__dirname, "../src/util/generatePages.js"),
    path.resolve(__dirname, "../src/util/generateRssFeed.js"),
  ],
  output: {
    path: path.resolve(__dirname, "../script/generated"),
    filename: "generateArtifacts.js",
  },
  target: "node",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "ts-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [new CaseSensitivePathsPlugin()],
}
