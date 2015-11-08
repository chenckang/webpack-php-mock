'use strict';

// Need to use shell to do some simple deployment
var gulp = require('gulp');
require('shelljs/global');
var path = require('path');

var cwdSpace = process.cwd();

var config = require(path.join(cwdSpace, 'wpm.config'));
var webpackConfig = require(path.join(cwdSpace, 'webpack.config.js'));

var server = require('./server');
// Gulp plugin for connecting to php-cgi
var connect = require('gulp-connect-php');

var resolveRoot = webpackConfig.resolve.root;
webpackConfig.output.path = config.outputPath;

// Initialize compiler instances
var compiler = require('./compiler');
compiler.initConfig(webpackConfig);

// Compile task
gulp.task('compile', function (cb) {
    console.log('Compiling...');
    compiler.run(cb);
});

// Deploy task depending on task "compile"
gulp.task('deploy', ['compile'], function () {
    var defaultDeploy = config.deploy.default;

    defaultDeploy.forEach(function (item, i, arr) {
        var fm = item.from;
        var to = item.to;

        console.log(fm);

        console.log('Coping ' + fm + ' to ' + to);

        mv('-f', fm, to);
    });
});

// Run proxy server
gulp.task('proxy', function() {
    server.run(config);
});


// Run gulp php connect plugin
gulp.task('phpconnect', function () {
    var phpconnect = config.phpconnect;

    // Launch server for php-cgi
    connect.server({
        base: phpconnect.root,
        port: phpconnect.port,
        keepalive: true
     });

    console.log('php-connect is running on port: ' + phpconnect.port);
});

// Clean up compiled result
gulp.task('clean', function (cb) {
    rm('-rf', config.output);
    console.log(config.output + ' is cleaned!');
});


// Watch all file changes and deploy
gulp.watch(resolveRoot.map(function (item, idx, arr) {
    return item + '/**';
}), ['compile', 'deploy']);

// Compiling task
gulp.task('build',['clean', 'compile', 'deploy']);

// Local mock server task
gulp.task('server', ['proxy', 'phpconnect']);

gulp.task('default', ['server', 'build']);

module.exports = gulp;