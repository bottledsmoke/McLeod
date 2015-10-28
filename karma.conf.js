var path = require('path');

var ROOT_PATH = __dirname;

module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha'],
    files: ['tests.webpack.js'],
    preprocessors: {
      'tests.webpack.js': [
        'webpack', 'sourcemap'
      ]
    },
    browserNoActivityTimeout: 100000,
    reporters: ['mocha'],
    webpack: {
      cache: true,
      devtool: 'inline-source-map',
      resolve: {
        extensions: ['', '.js', '.jsx']
      },
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            loader: 'babel',
            include: [
              path.resolve(ROOT_PATH, 'src'),
              path.resolve(ROOT_PATH, 'lib')
            ]
          },
          {
            test: /\.css$/,
            loaders: ['style', 'css', 'postcss'],
            include: path.resolve(ROOT_PATH, 'src')
          }
        ]
      },
      postcss: function () {
        return [
          require('autoprefixer')({browsers: ['last 2 versions']}),
          require('lost'),
          require('postcss-simple-vars')({
            variables: function () {
              return require(path.resolve(ROOT_PATH, 'lib/cssVariables.js'));
            }
          })
        ];
      }
    },
    webpackServer: {
      noInfo: true
    }
  });
};
