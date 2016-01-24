/**
 * @fileOverview  Gulp deploying task to build an online-like structure output
 * @author chenckang@gmail.com
 * @description  Deploying task should be used to do simple deploying works, statics files should not be moved to other place.
 */

'use strict';

require('shelljs/global');
var path = require('path');
var _ = require('lodash-node');
var cwdSpace = process.cwd();
var wpmConfig = require(path.join(cwdSpace, 'wpm.config.js'));
var args = process.argv.slice(2);

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
            } else {
                if (_.indexOf(wpmConfig.exclude.clean, item.to) !== -1) {
                    return;
                }
            }
            console.warn('Coping ' + fm + ' to ' + to);
            cp('-r', fm, to);

            if (_.indexOf(item.to, wpmConfig.exclude.clean) !== -1 || args[1] === '-S') {
                return;
            }
            rm('-rf', fm);
        });
    });

    return gulp;
};