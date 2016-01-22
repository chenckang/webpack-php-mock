'use strict';
var cwdSpace = process.cwd();
var webpack = require('webpack');
var path = require('path');
var WebpackDevServer = require('webpack-dev-server');
var wpmConfig = require(path.join(cwdSpace, 'wpm.config.js'));
var config = require(path.join(cwdSpace, 'webpack.config.js'));
module.exports = function (gulp) {
    gulp.task('devserver', function() {
        var publicPath = config.output.publicPath;
        var Server = new WebpackDevServer(webpack(config), {
            publicPath: config.output.publicPath,
            hot: true,
            historyApiFallback: true,
            stats: {
                colors: true
            },
            proxy: {
                    '/*': {
                        target: 'http://localhost:' + wpmConfig.server.port || 3000,
                        bypass: function(req, res, proxyOptions) {
                            var bypass = wpmConfig.webpackDevServer.extraBypass || function(){ return true};
                            if (!bypass(req, res, proxyOptions)){
                                return false;
                            }
                            if (req.url.indexOf('.tpl') === -1 && req.url.indexOf(publicPath) !== -1) {
                                console.log('Skipping proxy for browser request.');
                                return  req.url;
                            }
                            return false;
                        }
                    }
                }
            });
        var port = wpmConfig.webpackDevServer.port || 3001;
        Server.listen(port, 'localhost', function (err, result) {
            if (err) {
                console.log(err);
            }

            console.log('Listening at localhost:' + port);
        });
        return gulp;
    });
}