/**
 * @fileOverview Gulp interger file
 * @author chenckang@gmail.com
 */
var gulp = require('gulp');
var taskListing = require('gulp-task-listing');
var cleanGulp = require('./gulp-clean');
var compileGulp = require('./gulp-compile');
var deployGulp = require('./gulp-deploy');
var phpGulp = require('./gulp-php');
var serverGulp = require('./gulp-server');
var watchGulp = require('./gulp-watch');
var hotloaderGulp = require('./gulp-devserver');

cleanGulp(gulp);
compileGulp(gulp);
deployGulp(gulp);
phpGulp(gulp);
serverGulp(gulp);
//watchGulp(gulp);
hotloaderGulp(gulp);

// Help task
gulp.task('help', taskListing);

// Compiling task
gulp.task('build',['clean', 'compile', 'deploy']);

// Local mock server task
gulp.task('server', ['proxy', 'phpconnect']);

gulp.task('default', ['server', 'build']);

gulp.task('hot', ['server', 'build', 'devserver']);
module.exports = gulp;