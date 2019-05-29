const path = require('path');

module.exports = {
  mode: 'development',

  entry: './src/js/main',

  output: {
      path: path.resolve(__dirname, 'dist/'),
      filename: 'bundle.min.js'
  },

  module: {
      rules: [
          {
              test: /\.css$/i,
              use: [
                  'style-loader',
                  'css-loader'
                  ]
          },
          {
              test: /\.less$/i,
              use: [
                  'style-loader',
                  'css-loader',
                  'less-loader'
              ]
          },
          {
              test: /\.(js|jsx)$/i,
              use: [
                  {
                      loader: 'babel-loader',
                      options: {
                          presets: ['@babel/preset-env']
                      }
                  }
              ]
          }
      ]
  },

    devtool: 'source-map'
};