module.exports = function (env, argv) {
    env = env || {};

    let config = null;
    // 判断运行模式
    if (env.production) {
        config = require('./config/webpack.production');
    } else if (env.development) {
        config = require('./config/webpack.development');
    } else {
        config = require('./config/webpack.test');
    }

    return {
        entry: './src/js/main',
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader', {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require('autoprefixer')
                            ]
                        }
                    }]
                },
                {
                    test: /\.js$/i,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env']
                            }
                        },
                        {
                        loader: 'eslint-loader',
                        exclude: /node_modules/,
                        options: {}
                    }]
                },
                {
                    test: /\.less/i,
                    use: ['style-loader', 'css-loader', 'less-loader']
                },
                {
                    test: /\.(jpg|png|gif)$/i,
                    use: ['style-loader', {
                        loader: 'url-loader',
                        options: {
                            outputPath: 'img/',
                            limit: 4*1024
                        }
                    }]
                },
                {
                    test: /\.(svg|eot|ttf|woff|woff2)/i,
                    use: ['style-loader',{
                        loader: 'url-loader',
                        options: {
                            outputPath: 'fonts/',
                            limit: 4*1024
                        }
                    }]
                }
            ]
        },
        // 根据不同模式动态引进不同配置文件
        ...config
    }
};