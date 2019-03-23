module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  target: "node", // FIXME: https://webpack.js.org/concepts/targets/#multiple-targets
  output: {
    path: __dirname,
    filename: "dist/main.js",
    library: "daymet-single-pixel-client",
    libraryTarget: "commonjs2"
  }
};
