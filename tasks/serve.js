var gulp = require('gulp');
var browserSync = require('browser-sync');

// WEB SERVER
gulp.task('serve', function () {
    browserSync({
        server: {
            baseDir: './',
            directory: true
        }
    });
});
