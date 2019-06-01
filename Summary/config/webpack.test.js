const StylelintWebpackPlugin = require('stylelint-webpack-plugin');

module.exports = {
    mode: 'development',
    output: {
        filename: 'bundle.js'
    },
    plugins: [
        new StylelintWebpackPlugin({
            files: ['**/*.css', '**/*.less', '**/*.html', '**/*.scss']
        })
    ]
};