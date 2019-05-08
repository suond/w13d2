module.exports = {
  entry: "./react_minesweeper.jsx",
  output: {
    filename: "./bundle.js"
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/react", "@babel/preset-env"]
        }
      }
    ]
  },
  devtool: "eval-source-map",
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};
