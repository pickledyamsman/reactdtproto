var gulp        = require('gulp');
var gutil       = require('gulp-util');
var envify      = require('envify/custom');
var browserify  = require('browserify');
var babelify    = require('babelify');
var source      = require('vinyl-source-stream');
var streamify   = require('gulp-streamify');
var uglify      = require('gulp-uglify');
var config      = require('../config').scripts;
var envConfig   = require('../config').env
var handleError = require('../handleError');

var setConfigVars = function(environment) {
  switch(environment) {
    case 'production':
      return envConfig.production;
    case 'test':
      return envConfig.test;
    default:
      return envConfig.development;
  }
}

gulp.task('scripts', ['clean:scripts'], function() {
  return browserify({entries: config.src, extensions: ['.js','.jsx'], debug: true})
      .transform('babelify', {presets: ['es2015', 'react', 'stage-0']})
      .transform(envify(setConfigVars(gutil.env.type)))
      .bundle()
      .on('error', handleError)
      .pipe(source('bundle.js'))
      .pipe(gutil.env.type === 'production' ? streamify(uglify()) : gutil.noop())
      .pipe(gulp.dest(config.dest));
});
