const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./client"),
  output: {
    path: path.resolve(__dirname, "./static"),
    filename: "bundle.js"
  },
  mode: "development",
  module: {
    rules: [
      {
        loader: "babel-loader",
        
        test: /\.js[x]?/,
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
          },
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader?modules=true&localIdentName=[name]__[local]___[hash: base64: 5]"
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
