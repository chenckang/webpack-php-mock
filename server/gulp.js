/**
 * @fileOverview Gulp interger file
 * @author chenckang@gmail.com
 */
var gulp = require('gulp');

var cleanGulp = require('./gulp-clean');
var compileGulp = require('./gulp-compile');
var deployGulp = require('./gulp-deploy');
var phpGulp = require('./gulp-php');
var serverGulp = require('./gulp-server');
var watchGulp = require('./gulp-watch');

cleanGulp(gulp);
compileGulp(gulp);
deployGulp(gulp);
phpGulp(gulp);
serverGulp(gulp);
watchGulp(gulp);

// Compiling task
gulp.task('build',['clean', 'compile', 'deploy']);

// Local mock server task
gulp.task('server', ['proxy', 'phpconnect']);

gulp.task('default', ['server', 'build']);

module.exports = gulp;