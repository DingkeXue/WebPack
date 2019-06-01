const HtmlWebpackPlugin = require('html-webpack-plugin');
const StylelintWebpackPlugin = require('stylelint-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '../build/'),
        filename: 'bundle.min.js'
    },
    plugins: [
        new StylelintWebpackPlugin({
            files: ['**/*.css', '**/*.less', '**/*.html', '**/*.scss']
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../index.html')
        })
    ]
};