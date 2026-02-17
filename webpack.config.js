const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  devServer: {
    static: { directory: path.resolve(__dirname, 'build') },
    open: true,
    host: "localhost",
    watchFiles: 'index.html',
  },
  context: path.join(__dirname, 'src'),
  entry: "./index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          // We copy static assets separately (see CopyPlugin), so avoid
          // html-loader trying to resolve/inline <img src="assets/..."> paths.
          sources: false,
        },
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        // Copy the repo-level `assets/` folder into `build/assets/`
        { from: path.resolve(__dirname, 'assets'), to: 'assets' },
      ],
    }),
    new HtmlWebpackPlugin({
      template: "index.html",
      inject: 'body',
    }),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, "build"),
  },
};
