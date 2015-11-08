/**
 * @fileOverview Gulp proxy task. The main server are launched here.
 * @author chenckang@gmail.com
 */

'use strict';
var cwdSpace = process.cwd();
var path = require('path')
var server = require('./server');
var wpmConfig = require(path.join(cwdSpace, 'wpm.config.js'));

module.exports = function (gulp) {
    // Run proxy server
    gulp.task('proxy', function() {
        server.run(wpmConfig);
    });

    return gulp;
}

