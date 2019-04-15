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
                plugins: () => [
                  require('autoprefixer')({
                    browsers: ['> 1%', 'last 2 versions']
                  })
                ]
              }
            },
            'sass-loader'
          ]
        }
      ]
    },
    devServer: {
      open: true,
      port: 8080,
      setup (app) {
        app.get('/about', (req, res) => {
          res.redirect('/about.html');
        });
        app.get('/works', (req, res) => {
          res.redirect('/works.html');
        });
        app.get('/blog', (req, res) => {
          res.redirect('/blog.html');
        });
      }
    }
  };
};
