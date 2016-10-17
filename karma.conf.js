const webpack = require('./webpack.config.js')

module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'test/**/*_spec.js'
    ],
    preprocessors: {
      'src/**/*.js': ['jshint', 'webpack'],
      'test/**/*_spec.js': ['jshint', 'webpack']
    },
    browsers: ['PhantomJS'],
    webpack: webpack,
    plugins: [
      require('karma-webpack'),
      require('karma-jasmine'),
      require('karma-phantomjs-launcher')
    ]
  })
}
