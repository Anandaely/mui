/**
 * MUI gulp cdn tasks
 * @module gulp/cdn.js
 */

'use strict';


/**
 * Load tasks
 * @param {Object} gulp - The gulp module
 * @param {String} dirName - The location of the cdn directory
 */
module.exports = function(gulp, dirName) {
  gulp.task('clean', function() {
    console.log('clean');
  });


  gulp.task('build', ['clean'], function() {

  });
};
