var gulp = require('gulp');
var del = require('del');

gulp.task('clean:dist', function (cb) {
    return del(['dist'], cb);
});
