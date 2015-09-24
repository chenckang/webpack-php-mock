var path = require('path');

module.exports = {
    output: path.join(__dirname, 'output'),
    rewrite: {
        paths: [
            {
                from: '/sample',
                to: '/jsons/sample.json',
                mime: 'application/json'
            },
            {
                from: '/getphp',
                to: 'http://localhost:8010/',
                mime: 'text/html'
            },
            {
                from: '/app/*',
                to: 'http://host.com/',
                method: 'all',
                mime: 'application/json',
                cookie: {
                    file: path.resolve(__dirname, 'cookie'),
                    values: ['waimai_logistics_username=baidu001_ckk'],
                    opts: {
                        maxAge: 90000
                    }
                }
            },
            {
                from: '/app2/*',
                to: 'http://host.com/',
                mime: 'application/json',
                cookie: {
                    file: path.resolve(__dirname, 'cookie'),
                    opts: {
                        maxAge: 90000
                    }
                }
            }
        ]
    },
    phpconnect: {
        host: 'localhost',
        port: 8010,
        base: __dirname
    },
    server: server = {
        port: 3000
    },
    deploy: {
        default: [
            {
                from: '/webroot/**',
                to: '/'
            },
            {
                from: '/path/to/xxx.tpl',
                to: '/templates/path/to/page'
            }
        ]
    }
};