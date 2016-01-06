/**
 * MUI gulp e2e-tests tasks
 * @module gulp/e2e-tests.js
 */

'use strict';


var babelify = require('babelify'),
    babelCore = require('babel-core'),
    browserify = require('gulp-browserify'),
    injectString = require('gulp-inject-string'),
    rename = require('gulp-rename');

var babelHelpersList = [
  'inherits',
  'createClass',
  'classCallCheck',
  'possibleConstructorReturn',
  'interopRequireDefault',
  'interopRequireWildcard',
  'extends'
];


/**
 * Load tasks
 * @param {Object} gulp - The gulp module
 * @param {String} dirName - The location of the e2e-tests directory
 */
module.exports = function(gulp, dirName) {
  gulp.task('build', function() {
    var s = babelCore.buildExternalHelpers(babelHelpersList, 'global');
    
    return gulp.src(dirName + '/_tests.js')
      .pipe(browserify({
        transform: [babelify]
      }))
      .pipe(injectString.prepend(s))
      .pipe(rename('tests.js'))
      .pipe(gulp.dest(dirName));
  });
};
