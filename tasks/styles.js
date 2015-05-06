var gulp = require('gulp');
var plugins = require("gulp-load-plugins")();
var browserSync = require('browser-sync');

gulp.task('styles_material', function () {

    return gulp.src('./styles/snack.material.less')
        .pipe(plugins.less())
        .pipe(plugins.rename(function (path) {
            path.basename = 'snack.material';
        }))
        .pipe(plugins.autoprefixer())
        .pipe(gulp.dest('dist/css'))
        .pipe(plugins.csso())
        .pipe(plugins.rename(function (path) {
            path.basename += '.min';
        }))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({stream: true}));

});

gulp.task('styles', ['styles_material']);