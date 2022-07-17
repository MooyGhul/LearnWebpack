const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // automatically generate index.html file; 
                                                          // So when we run a build, our dev server webpack has something to host in the dev server

module.exports = {
  //mode: 'development',          // [development, production, none]
  entry: //'./src/index.js',     // everything you need to bundle comes from here (html, css, js)
  {
    index: {
      import: './src/js/index.js',
      dependOn: 'shared',
    },
    sum: {
      import: './src/js/sum.js',
      dependOn: 'shared',
    },
    shared: 'lodash', // lib
  },
  //devtool: 'inline-source-map',

  devServer: {                // tell webpack where to serve up the files and they are all going to be coming from that disk dir
    static: './dist',    // in production it is going to serve everything up from memory, so not gonna output to this dis folder.
  },

  plugins: [
    new HtmlWebpackPlugin(
    // {
    //   title: 'Development',
    // }
    ),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      // babel : Babel translate advanced Javascript code to something that browser understands.
      // loader is telliing babel, when you come across a specific file, use this loader in order to process it
      // here tell everytime come across a JS file, run it through a babel loader 
      {
        test: /\.m?js$/,                // everytime you come across a .js file
        exclude: /node_modules/,        
        use: {
          loader: "babel-loader",       // use babel-loader
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      // run it through "style-loader", "css-loader", "sass-loader" when see a css file
      // {
      //   test: /\.css$/i,
      //   use: [
      //     {loader: "css-loader", options: {sourceMap: true}},
      //     {loader: "postcss-loader", options: {sourceMap: true}},
      //   ],
      // },
    ]
  },


  output: {                                           // take everything from index.js, 
    filename: '[name].bundle.js',                     // output name is main.js, 
    path: path.resolve(__dirname, 'dist'),            // to the path and make a folder called dist
  },

};