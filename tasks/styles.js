var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var browserSync = require('browser-sync');

gulp.task('styles', function () {

    return gulp.src('./styles/snack.less')
        .pipe(plugins.less())
        .pipe(plugins.autoprefixer())
        .pipe(gulp.dest('dist/css'))
        .pipe(plugins.csso())
        .pipe(plugins.rename(function (path) {
            path.basename += '.min';
        }))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({stream: true}));
});
