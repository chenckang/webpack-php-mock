/**
* @fileOverview Gulp clean task for remove all related generated files
* @author chenckang@gmail.com
*/

'use strict';

var cwdSpace = process.cwd();
var path = require('path');
var _ = require('lodash-node');
var wpmConfig = require(path.join(cwdSpace, 'wpm.config.js'));

function parentDirs (filepath) {
    var dirs = filepath.split(/\/|\\/);
    var paths = [];
    dirs.unshift('/');
    while(dirs.length) {
        dirs.pop();
        paths.push(path.join.apply(null, dirs));
    }
    return paths;
}
/**
* @params {Array} dirs
* @params {string} file
* @return {boolean}
*/
function isChildFiles (dirs, file) {
	var parentDirs = dirs.filter(function (itm) {
		return file.indexOf(itm) !== -1;
    });
	return !!parentDirs.length;
}

module.exports = function (gulp) {
    // Clean up compiled result
    gulp.task('clean', function (cb) {
        var excludes = wpmConfig.exclude.clean;
        var parentPaths = [];
        _.each(excludes, function(filepath, idx) {
            parentPaths = parentPaths.concat(parentDirs(filepath));
        });

        var paths = find(wpmConfig.root).filter(function(file) {
            if (_.indexOf(parentPaths, file) !== -1 || isChildFiles(excludes, file)) {
                return false;
            } else {
                return true;
            }
        });
        rm('-rf', paths);
        
        console.log(wpmConfig.root + ' is cleaned!');
    });

    return gulp;
};
