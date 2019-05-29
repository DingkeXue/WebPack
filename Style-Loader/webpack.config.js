const path = require('path');

module.exports = {
    mode: 'development',
    entry: './js/home',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dest')
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader']
            }
        ]
    }
};