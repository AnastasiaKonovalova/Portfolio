
module.exports = function () {
  return {
    mode: 'development',
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.scss|css$/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [require('autoprefixer')({
                  'browsers': ['> 1%', 'last 2 versions']
                })]
              }
            },
            'sass-loader'
          ]
        }
      ]
    }
  };
};
