'use strict';

var webpack = require('webpack');
var path = require('path');
var appPath = path.join(__dirname, 'app');
var HtmlWebpackPlugin = require('html-webpack-plugin');

console.log(path.join(__dirname, 'page', 'index.html'));

module.exports = {
    target: 'web',
    cache: true,
    entry: {
        module: path.join(appPath, 'module.js'),
        common: ['react', 'react-router', 'alt']
    },
    resolve: {
        root: [appPath],
        extensions: ['', '.js'],
        moduleDirectories: ['node_modules', 'app']
    },
    output: {
        path: path.join('webroot', 'app'),
        publicPath: '/app/',
        filename: '[name].js',
        pathInfo: true
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel?cacheDirectory'},
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
        new HtmlWebpackPlugin({
            template: 'page/index.html',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            template: 'page/index.tpl',
            inject: 'body',
            filename: 'index.tpl'
        }),
        new webpack.NoErrorsPlugin()
    ],
    debug: true,
    devtool: 'source-map',
};