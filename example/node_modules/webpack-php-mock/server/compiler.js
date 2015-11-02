'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = {
    initConfig: function (config) {
        this.compiler = webpack(config);
    },
    run: function (cb) {
        var me = this;
        this.compiler.run(function (err, stats) {
            var jsonStats = stats.toJson();
            if (err) {
                return me.handleFatalError(err);
            }
            if (jsonStats.errors.length > 0) {
                return me.handleSoftErrors(stats.toString({colors: true}));
            }
            if (jsonStats.warnings.length > 0) {
                me.handleWarnings(jsonStats.warnings);
            }
            me.successfullyCompiled(cb);
        });
    },
    successfullyCompiled: function (cb) {
        console.log('compiling completed!');
        cb();
    },
    handleSoftErrors: function (errors) {
        console.log('error:' + errors);
    },
    handleWarnings: function (warnings) {
        console.log('warning:' + warnings);
    },
};
