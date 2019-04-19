const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

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
    new VueLoaderPlugin()
  ]
}