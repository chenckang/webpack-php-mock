'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = {
    initConfig: function (config) {
        this.compiler = webpack(config);
    },
    run: function (cb) {
        this.compiler.run(function (err, stats) {
            console.log("compiling completed!");
            cb();
        });
    }
}
