const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: 'production',
  entry: './src/app.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
}
