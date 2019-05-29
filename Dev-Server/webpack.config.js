const path = require('path');

module.exports = function (env, argv) {
    env = env || {development: true};
    return {
        entry: './src/js/main',

        // 动态配置出口文件
        ...env.production ? require('./config/webpack.production') : require('./config/webpack.development'),

        // 公共解析部分
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.(jpg|png|gif)$/i,
                    use: {
                        loader: 'url-loader',
                        options: {
                            outputPath: 'imgs/',
                            limit: 4*1024
                        }
                    }
                }
            ]
        }
    }
};