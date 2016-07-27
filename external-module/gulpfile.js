'use strict';

var gulp = require('gulp');
var gutil = require('gutil');

var webpack = new require("webpack")
var nodemon = require('gulp-nodemon');
var runSequence = require('run-sequence');

var staticFiles = ["./src/*.html"]
var watcherfiles = ["./src/**/*.ts", "./src/**/*.html"]



gulp.task("webpack", function (callback) {
    // run webpack
    webpack(
        require('./webpack.config.js'),
        function (err, stats) {
            if (err) throw new gutil.PluginError("webpack", err);
            gutil.log("[webpack]", stats.toString({
                // output options
            }));
            callback();
        });
});

gulp.task('copy', function () {
    return gulp.src(staticFiles, { base: "./src" })
        .pipe(gulp.dest('./dist/'));
})

gulp.task('nodemon', function (cb) {

    var started = false;

    return nodemon({
        script: 'server.js',
        watch: ['server.js']
    }).on('start', function () {
        if (!started) {
            cb();
            started = true;
        }
    });
});

gulp.task('default', function () {
    return runSequence(['copy'], ['webpack'])
});


gulp.task('serve', ['nodemon'], function () {
    return gulp.watch(watcherfiles,
        ['default']);
})
