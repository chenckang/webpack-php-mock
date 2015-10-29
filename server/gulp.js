'use strict';

require('shelljs/global');
var fs = require('fs');
var gulp = require('gulp');
var path = require('path');
var compiler = require('./compiler');
var config = require('./config');
var server = require('./server');
var connect = require('gulp-connect-php');
var webpackConfig = require('../webpack.config.js');
var resolveRoot = webpackConfig.resolve.root;
var outputPath = path.join(config.output, webpackConfig.output.path);
webpackConfig.output.path = outputPath;

compiler.initConfig(webpackConfig);

gulp.task('compile', function (cb) {
    console.log('Compiling...');
    compiler.run(cb);
});

gulp.task('deploy', ['compile'], function () {
    var defaultDeploy = config.deploy.default;

    defaultDeploy.forEach(function (item, to, arr) {
        var fm = path.join(config.output, item.from);
        var to = path.join(__dirname, item.to);
        
        if (!fs.existsSync(to)){
            mkdir('-p', to);
        }

        console.log('Deploy ' + fm + ' to ' + to);
        cp('-Rf', fm, to);
    });
});

gulp.task('proxy', function() {
    server.run(config);
});

gulp.task('phpconnect', function () {
    var phpconnect = config.phpconnect;
    connect.server({
        base: phpconnect.base,
        port: phpconnect.port,
        keepalive: true
     });

    console.log('Php-connect is running on port: ' + phpconnect.port);
});

gulp.task('clean', function (cb) {
    rm('-rf', config.output);
    console.log(config.output + ' is cleaned!');
});

gulp.watch(resolveRoot.map(function (item, idx, arr) {
    return item + '/**';
}), ['compile', 'deploy']);

gulp.task('default', ['clean', 'compile', 'deploy']);
gulp.task('server', ['proxy', 'phpconnect']);