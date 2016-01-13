'use strict';
var cwdSpace = process.cwd();
var webpack = require('webpack');
var path = require('path');
var WebpackDevServer = require('webpack-dev-server');
var wpmConfig = require(path.join(cwdSpace, 'wpm.config.js'));
var config = require(path.join(cwdSpace, 'webpack.config.js'));
module.exports = function (gulp) {
    gulp.task('hotloader', function() {

        var Server = new WebpackDevServer(webpack(config), {
            publicPath: config.output.publicPath,
            hot: true,
            historyApiFallback: true,
            stats: {
                colors: true
            },
            proxy: {
                    '/*': {
                        target: 'http://localhost:3000',
                        bypass: function(req, res, proxyOptions) {
                            if (req.url.indexOf('wlmine/app') !== -1 && req.url.indexOf('wlmine/app/pdfjs') !== -1) {
                                console.log('Skipping proxy for browser request.');
                                return  req.url;
                            }
                        }
                    }
                }
            });

        Server.listen(3001, 'localhost', function (err, result) {
            if (err) {
                console.log(err);
            }

            console.log('Listening at localhost:3001');
        });
        return gulp;
    });
}