const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = merge(common, {
  mode: 'production',          // [development, production, none]
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    })
  ],

  module: {
    rules: [
      // run it through "style-loader", "css-loader", "sass-loader" when see a css file
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader"
        ],
      },
    ]
  },
});