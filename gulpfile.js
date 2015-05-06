var gulp = require('gulp');
var requireDir = require('require-dir');
var dir = requireDir('./tasks', {recurse: true}); //jshint ignore: line

gulp.task('default', ['clean:dist', 'build']);
