var gulp        = require('gulp');
var envify      = require('envify/custom');
var babelify    = require('babelify');
var source      = require('vinyl-source-stream');
var streamify   = require('gulp-streamify');
var uglify      = require('gulp-uglify');
var envConfig   = require('../config').env;
var handleError = require('../handleError');
var mochify     = require('mochify');


gulp.task('test', [], function() {
    return mochify('./gulp/assets/scripts/test/**/*.js', {
      extension: '.jsx',
      external: [
        'react/lib/ReactTestUtils',
        'react/addons',
        'react/lib/ReactContext',
        'react/lib/ExecutionEnvironment'
      ]
    })
    .transform('babelify', {
      presets: ['es2015', 'react', 'stage-0']
    })
    .transform(envify(envConfig.test))
    .bundle();
});