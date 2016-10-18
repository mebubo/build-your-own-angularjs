const webpack = require('./webpack.config.js')

module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'test/**/*_spec.js'
    ],
    preprocessors: {
      'test/**/*_spec.js': ['jshint', 'webpack', 'sourcemap']
    },
    browsers: ['PhantomJS'],
    webpack: webpack,
    plugins: [
      require('karma-webpack'),
      require('karma-jasmine'),
      require('karma-phantomjs-launcher'),
      require('karma-sourcemap-loader'),
      require('karma-jshint-preprocessor')
    ]
  })
}
