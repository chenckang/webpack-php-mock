/**
* @fileOverview Gulp clean task for remove all related generated files
* @author chenckang@gmail.com
*/

'use strict';

var cwdSpace = process.cwd();
var path = require('path');
var wpmConfig = require(path.join(cwdSpace, 'wpm.config.js'));

module.exports = function (gulp) {
    // Clean up compiled result
    gulp.task('clean', function (cb) {
        rm('-rf', wpmConfig.root);
        console.log(wpmConfig.root + ' is cleaned!');
    });

    return gulp;
}