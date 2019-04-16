const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ClearWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');

const prod = require('./webpack/production.config');
const dev = require('./webpack/development.config');

const PATHS = {
  source: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build')
};

const common = {
  entry: {
    index: PATHS.source + '/pages/index/index.js',
    about: PATHS.source + '/pages/about/about.js',
    works: PATHS.source + '/pages/works/works.js',
    blog: PATHS.source + '/pages/blog/blog.js'
  },
  output: {
    path: PATHS.build,
    filename: './js/[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      chunks: ['index'],
      template: PATHS.source + '/pages/index/index.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      chunks: ['about'],
      template: PATHS.source + '/pages/about/about.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'blog.html',
      chunks: ['blog'],
      template: PATHS.source + '/pages/blog/blog.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'works.html',
      chunks: ['works'],
      template: PATHS.source + '/pages/works/works.pug'
    }),
    new ClearWebpackPlugin('build')
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg|eot|ttf|woff|woff2)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img'
            }
          }
        ]
      }
    ]
  }
};

module.exports = function(env) {
  if (env === 'production') {
    return merge([common, prod()]);
  }
  if (env === 'development') {
    return merge([common, dev()]);
  }
};
