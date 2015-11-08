/**
 * @fileOverview Gulp compiling task for build output files based on webpack
 * @author chenckang@gmail.com
 */

'use strict';

var cwdSpace = process.cwd();
var path = require('path');
var wpmConfig = require(path.join(cwdSpace, 'wpm.config.js'));
var wbpConfig = require(path.join(cwdSpace, 'webpack.config.js'));
wbpConfig.output.path = wpmConfig.outputPath;

var compiler = require('./compiler');
compiler.initConfig(wbpConfig);

module.exports = function (gulp) {

    // Compile task
    gulp.task('compile', function (cb) {
        console.log('Compiling...');
        compiler.run(cb);
    });

    return gulp;
};