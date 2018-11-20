const ManifestPlugin = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: `${__dirname}/_webpack/index.js`,

  output: {
    path: `${__dirname}/assets/webpack`,
    filename: process.env.NODE_ENV === 'production'
      ? '[name].[chunkhash].js'
      : '[name].js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },

  plugins: [
    // Reference: https://github.com/danethurber/webpack-manifest-plugin
    // Output the manifest for jekyll to import
    new ManifestPlugin({
      fileName: `${__dirname}/_data/webpack.json`,
      publicPath: 'assets/webpack/',
      writeToFileEmit: true,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
  ]
};
