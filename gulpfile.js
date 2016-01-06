/**
 * MUI gulp file
 */

'use strict';


var gulp = require('gulp');


gulp.task('build-examples', ['examples-clean'], function() {

});


gulp.task('build-e2e-tests', function() {
  require('./gulp/e2e-tests')(gulp, './e2e-tests');
  gulp.start('build');
});


gulp.task('build-bower', ['bower-clean'], function() {

});


gulp.task('build-cdn', function() {
  require('./gulp/cdn')(gulp, './packages/cdn');
  gulp.start('build');
});


gulp.task('build-meteor', ['meteor-clean'], function() {

});


gulp.task('build-npm', ['npm-clean'], function() {

});
