const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ClearWebpackPlugin = require('clean-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');


const PATHS = {
  source: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build')
};

module.exports = {
  entry: {
    'index': PATHS.source + '/pages/index/index.js',
    'blog': PATHS.source + '/pages/blog/blog.js'
  },
  output: {
    path: PATHS.build,
    filename: './js/[name].js'
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      chunks: ['index'],
      template: PATHS.source + '/pages/index/index.pug',
    }),
    new HtmlWebpackPlugin({
      filename: 'blog.html',
      chunks: ['blog'],
      template: PATHS.source + '/pages/blog/blog.pug',
    }),
    new ClearWebpackPlugin('build'),
    new MiniCSSExtractPlugin({
      filename: './css/[name].css',
      
    })
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true
        }
      },
      {
        test: /\.scss|css$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          }, 
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|eot|ttf|woff|woff2)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'img'
        }
      }
    ]
  }
}