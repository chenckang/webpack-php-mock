'use strict';

var Webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var WebpackConfig = require('./../webpack.config.js');
var path = require('path');
var fs = require('fs');
var mainPath = path.resolve(__dirname, '..', 'app', 'module.jsx');

module.exports = function () {
    var bundleStart = null;
    var compiler = Webpack(WebpackConfig);

    compiler.plugin('compile', function () {
        console.log('Bundling');
        bundleStart = Date.now();
    });

    compiler.plugin('done', function () {
        console.log('Bundled in ' + (Date.now() - bundleStart) + 'ms');
    });

    var bundler = new WebpackDevServer(compiler, {
        publicPath: 'wlwine',
        hot: true,
        quiet: false,
        noInfo: true,
        stats: {
            colors: true
        }
    });

    bundler.listen(8080, 'localhost', function () {
        console.log('Bundling project, please wait...');
    });
};
