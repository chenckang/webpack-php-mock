/**
 * @fileOverview  A php-cgi connector to interpret php files
 * @author chenckang@gmail.com
 */

'use strict';

var cwdSpace = process.cwd();
var path = require('path');
var connect = require('gulp-connect-php');
var wpmConfig = require(path.join(cwdSpace, 'wpm.config.js'));

module.exports = function (gulp) {
    // Run gulp php connect plugin
    gulp.task('phpconnect', function () {
        var phpconnect = wpmConfig.phpconnect;

        // Launch server for php-cgi
        connect.server({
            base: phpconnect.root,
            port: phpconnect.port,
            keepalive: true
         });

        console.log('php-connect is running on port: ' + phpconnect.port);
    });

    return gulp;
}