/**
 * @fileOverview Gulp watching files settings.
 * @author chenckang@gmail.com
 */

'use strict';

var cwdSpace = process.cwd();
var path = require('path');
var wbpConfig = require(path.join(cwdSpace, 'webpack.config.js'));

module.exports = function (gulp) {
    gulp.watch(wbpConfig.resolve.root.map(function (item, idx, arr) {
        return item + '/**';
    }), ['compile', 'deploy']);

    return gulp;
}
