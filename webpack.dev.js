const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',          // [development, production, none]
  devtool: 'inline-source-map',

  devServer: {                // tell webpack where to serve up the files and they are all going to be coming from that disk dir
    static: './dist',    // in production it is going to serve everything up from memory, so not gonna output to this dis folder.
  },
  module: {
    rules: [
      // run it through "style-loader", "css-loader", "sass-loader" when see a css file
      {
        test: /\.css$/i,
        use: [
          {loader: "css-loader", options: {sourceMap: true}},
          {loader: "postcss-loader", options: {sourceMap: true}},
        ],
      },
    ]
  },
});