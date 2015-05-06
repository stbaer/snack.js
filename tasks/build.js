var gulp = require('gulp');
var plugins = require("gulp-load-plugins")();
var bundle = require('./util/bundle');

gulp.task('scripts', function () {
    return bundle();
});

gulp.task('build', ['scripts', 'styles'], function (done) {
    return gulp.src(['dist/snack.js'])
        .pipe(plugins.uglify())
        .pipe(plugins.rename(function (path) {
            path.basename += '.min';
        }))
        .pipe(gulp.dest('dist/'));
});
