const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: 'production',
  entry: './app.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
}
