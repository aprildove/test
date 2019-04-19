const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: [ 
          path.resolve(__dirname, 'src'),
        ],
        options: {
          loaders: {
            'sass': 'style-loader!css-loader!sass-loader!less-loader'
          }
        }
      },
      {
        test: /\.css$|\.sass$|\.less$/,
        use: [
          'vue-style-loader',
          'style-loader',
          'css-loader',
          'less-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        loader: 'image-webpack-loader',
        options: {
          mozjpeg: { // 压缩 jpeg 的配置
            progressive: true,
            quality: 65
          },
          optipng: { // 使用 imagemin-optipng 压缩 png，enable: false 为关闭
            enabled: false,
          },
          pngquant: { // 使用 imagemin-pngquant 压缩 png
            quality: '65-90',
            speed: 4
          },
          gifsicle: { // 压缩 gif 的配置
            interlaced: false,
          },
          webp: { // 开启 webp，会把 jpg 和 png 图片压缩为 webp 格式
            quality: 75
          }
        }
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
    modules: ['node_modules'],
    extensions: ['.vue', '.js', '.json', '.jsx', '.scss', '.css']
  },
  plugins: [
    new VueLoaderPlugin(),
    new BundleAnalyzerPlugin() // 非常好用的包组成可视化工具
  ]
}