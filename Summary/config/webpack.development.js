const HtmlWebpackPlugin = require('html-webpack-plugin');
const StylelintWebpackPlugin = require('stylelint-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  output: {
      filename: 'bundle.js'
  },
    plugins: [
        new StylelintWebpackPlugin({
            files: ['**/*.css', '**/*.less', '**/*.html', '**/*.scss']
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../index.html')
        })
    ],
    devtool: 'source-map'
};