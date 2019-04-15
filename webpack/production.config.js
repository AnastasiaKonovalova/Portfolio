const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = function () {
  return {
    optimization: {
      minimizer: [
        new OptimizeCSSAssetsPlugin({ canPrint: true }),
        new TerserPlugin({
          cache: true,
          parallel: true,
          sourceMap: true
        })
      ]
    },
    plugins: [
      new MiniCSSExtractPlugin({
        filename: './css/[name].css'
      })
    ],
    mode: 'production',
    module: {
      rules: [
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
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [
                  require('autoprefixer')({
                    browsers: ['> 1%', 'last 2 versions']
                  })
                ]
              }
            },
            'sass-loader'
          ]
        },
        {
          test: /\.(jpe?g|png|gif|svg|eot|ttf|woff|woff2)$/i,
          use: [
            {
              loader: 'image-webpack-loader',
              options: {
                mozjpeg: {
                  progressive: true,
                  quality: 65
                },
                optipng: {
                  enabled: true
                },
                pngquant: {
                  quality: '65-90',
                  speed: 4
                },
                gifsicle: {
                  interlaced: false
                }
              }
            }
          ]
        }
      ]
    }
  };
};
