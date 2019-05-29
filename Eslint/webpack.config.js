const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/main',
  output:{
      path: path.resolve(__dirname, 'dist/'),
      filename: 'bundle.js'
  },
  module: {
      rules: [
          {
              test: /\.js$/i,
              loader: 'eslint-loader',
              exclude: /node_modules/,
              options: {}
          }
      ]
  }
};