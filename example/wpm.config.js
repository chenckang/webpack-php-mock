var path = require('path');
var mockroot = path.join(__dirname, 'mock');

module.exports = {
    root: path.join(mockroot, 'webroot'),
    rewrite: {
        paths: [
            {
                type: 'local',
                from: '/sample',
                to: '/sample.json',
                mime: 'application/json'
            },
            {
                type: 'php',
                from: '/sample.php',
                to: 'http://localhost:8000/',
                mime: 'text/html'
            },
            {
                type: 'php',
                from: '/*.tpl',
                to: 'http://localhost:8000/smarty.php',
                mime: 'text/html'
            },
            {
                type: 'proxy',
                from: '/app/*',
                to: 'http://host.com/',
                method: 'all',
                mime: 'application/json',
            },
            {
                type: 'proxy',
                from: '/app2/*',
                to: 'http://host.com/',
                mime: 'application/json',
            }
        ]
    },
    phpconnect: {
        host: 'localhost',
        port: 8000,
        root: path.join(mockroot, 'php')
    },
    server: {
        port: 3000
    },
    jsons: {
        path: path.join(mockroot, 'jsons')
    },
    deploy: {
        default: [
            {
                from: path.join('app', 'index.html'),
                to: '/'
            },
            {
                from: path.join('app', 'index.tpl'),
                to: path.sep + 'templates' + path.sep
            }
        ]
    }
};