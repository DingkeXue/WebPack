const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
  mode: 'development',

  entry: './src/js/main',

  output: {
      path: path.resolve(__dirname, 'dist/'),
      filename: 'bundle.min.js'
  },

  module: {
      rules: [
          // 处理css文件
          {test: /\.css$/i, use: ['style-loader', 'css-loader', {
                  loader: 'postcss-loader',
                  options: {
                    plugins: [autoprefixer]
                  }
              }]},

          // 处理图片文件
          {test: /\.(png|jpg|gif)$/i, use:{
                loader: 'url-loader',
                options: {
                    outputPath: 'imgs/',  // 输出相对路径
                    publicPath: 'dist/imgs/',  // html 中的路径
                    limit: 4*1024  // 小于 4kb 用 url-loader, 将图片转换成 Base64 格式 否则用 file-loader
                  }
              }}
      ]
  }
};