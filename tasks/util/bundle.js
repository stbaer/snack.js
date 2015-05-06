var gulp = require('gulp'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify');

function rebundle() {

    return this.bundle()
        .pipe(source('snack.js'))
        .pipe(gulp.dest('dist/'));
}

function createBundler(args) {
    args = args || {};
    args.debug = false;

    var bundle = browserify('./src/index', args),
        argv = require('minimist')(process.argv.slice(2)),
        exclude = (argv.exclude || []).concat(argv.e || []);

    for (var i = 0; i < exclude.length; ++i) {
        bundle.ignore('./' + exclude[i]);
    }

    return bundle;
}


module.exports = function bundle() {
    return rebundle.call(createBundler());
};

module.exports.rebundle = rebundle;
module.exports.createBundler = createBundler;
