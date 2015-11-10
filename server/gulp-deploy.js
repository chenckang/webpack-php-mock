/**
 * @fileOverview  Gulp deploying task to build an online-like structure output
 * @author chenckang@gmail.com
 * @description  Deploying task should be used to do simple deploying works, statics files should not be moved to other place.
 */

'use strict';

require('shelljs/global');
var path = require('path');
var cwdSpace = process.cwd();
var wpmConfig = require(path.join(cwdSpace, 'wpm.config.js'));

module.exports = function (gulp) {
    // Deploy task depending on task "compile"
    gulp.task('deploy', ['compile'], function () {
        var defaultDeploy = wpmConfig.deploy.default;

        defaultDeploy.forEach(function (item, i, arr) {
            var fm = item.from;
            var to = item.to;
            var toDir = test('-d', to) ? to : path.dirname(to);

            if (!test('-d', toDir)) {
                rm('-rf', toDir);
                mkdir('-p', toDir);
            }

            console.warn('Coping ' + fm + ' to ' + to);

            cp('-rf', fm, to);
            rm('-rf', fm);
        });
    });

    return gulp;
};