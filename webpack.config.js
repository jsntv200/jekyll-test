const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },

  plugins: [
    // Reference: https://github.com/danethurber/webpack-manifest-plugin
    // Output the manifest for jekyll to import
    new ManifestPlugin({
      fileName: `${__dirname}/_data/webpack.json`,
      publicPath: '/assets/webpack/',
      writeToFileEmit: true,
    }),
  ]
};
