var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  resolve: {
    extensions: [''],
    root: [path.resolve(__dirname, 'src')], //root of our project (absolute path)
  },
  entry: {
    "super-basic-webpack": ['./src/index.js']
  },
  output: {
    filename: '[name]-bundle.js',
    path: path.join(__dirname, 'build'),
    libraryTarget: 'var',
    library: 'myApp'
  },
  module: {
    loaders: [{
      test: /\.html$/,
      loader: "file-loader?name=[name].html"
    }]
  },
  plugins: [
    new CleanWebpackPlugin(['build'], {
      root: path.resolve(__dirname),
      verbose: true,
      dry: false
    })
  ]
};
