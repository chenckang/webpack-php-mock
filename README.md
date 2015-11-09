# Webpack-php-mock

[![npm version](https://badge.fury.io/js/webpack-php-mock.svg)](https://badge.fury.io/js/webpack-php-mock)
[![Issue Stats](http://issuestats.com/github/chenckang/webpack-php-mock/badge/pr)](http://issuestats.com/github/chenckang/webpack-php-mock)
[![Issue Stats](http://issuestats.com/github/chenckang/webpack-php-mock/badge/issue)](http://issuestats.com/github/chenckang/webpack-php-mock)
[![Build Status](https://travis-ci.org/chenckang/webpack-php-mock.svg)](https://travis-ci.org/chenckang/webpack-php-mock)

## Installation

**Webpack-php-mock** is published as a npm module, so that one can easily install it using the ***npm install*** or ***npm i*** command. 

Switch to you project root directory which should have a ***package.json*** file in it, run command as follows:

    npm install webpack-php-mock --save-dev

Now you get **webpack-php-mock** installed on you project, declaring it as one of the "devDependencies".

The next import thing is to add a config file to the root of the project naming ***wpm.config.js***, which records key information to help to mock everything.

## Usage

You can quickly run you the mock stuff within the demo [example](https://github.com/chenckang/webpack-php-mock/tree/master/example). 

Switch to the root of the example demo. And run the command ***npm install*** and ***gulp*** in it. After that just visit [http://localhost:3000/](http://localhost:3000/) to check it out.

The configuration descriptions are blow.

***

## Configuration

The first thing to be anounced is that there should be a ***webpack.config.js*** file or the similiar to support the compiling of the project using webpack. This is because **webpack-php-mock** is just based on **webpack** and provides no additional compiling stuff.

All the configuration usage could be find in the [example](https://github.com/chenckang/webpack-php-mock/tree/master/example) demo.

#### The Root Directory

Configuration Name: root

To help to locate all the static file, you should explicitly give the web root directory, like nginx do. The root directory only contains static files such as JavaScript files, image files, font files and so on. The root directory will be cleaned every once you run ***gulp*** or ***gulp clean***.

    root: path.join(mockroot, 'webroot')

#### Webpack Output Path

Configuration Name: outputPath

This will override the the ***output.path*** configuration of the ***webpack.config.js***. The purpose is compiled output to a specific place avoiding files pollution of the project.

    outputPath: path.join(mockroot, 'webroot', 'app')

#### Jsons

Configuration Name: jsons.path

Specify the local path where all the json datas locate. This mainly for the rewrite of the type ***local***.

    jsons: {
        path: path.join(mockroot, 'jsons')
    }

#### PHP Connect

Configuration Name: phpconnect

This is a configuration for the plugin ***gulp-connect-php***, [click to check the detail](https://github.com/micahblu/gulp-connect-php.git)

    phpconnect: {
        host: 'localhost',
        port: 8000,
        root: path.join(mockroot, 'php')
    }

#### Server

Configuration Name: server.port

Just specify the port that the mock server will use.

    server: {
        port: 3000
    }

#### Rewrite Path

Configuration Name: rewrite.paths

This is the main part of the configuration, which can archieve proxy, interface mock, php request redirect.

The paths is an array which contain each individual rewrite rule. Each rule is one of the type: **local**, **proxy**, **php**. And cookie can also be injected into each rule to help the authorization.

Here is an example:
    
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
                type: 'proxy',
                from: '/app/*',
                to: 'http://host.com/',
                method: 'all',
                mime: 'application/json',
                cookie: {
                    file: 'fake.cookie',
                    opt: {
                        maxAge: 10000
                    }
                }
            }
        ]
    }

Below is the description of the type value:

##### Type: local
This is used to mock the interface, you can spcify a local json file in "to", and when you request "from", the content of the "to" will be returned. If the mime is "application/json" it will act like a really interface. The path value of the "to" is relative to the ***jsons.path*** configuration.

##### Type: proxy

This is used for proxy, redirect you "from" request to "to". It can used to pull data from a real server. Also if you specify the cookie, the proxy will have the authorization info to request to "to".

##### Type: php

This is used for php interpretation. Request based on php will use this type.

#### Deploy to Reconstruct

Configuration Name: deploy.default

This is used to reconstruct the project structure to be online-like, we think that when developing in an online-like project will help to reduce error-prone problems that will jump out once you push it online.

So just develop it as it is online-like.

Tips: The deploy configuration is not so completed, it is only capable of simple reconstruct such as move the template file to some other place. When you move static files, you browser may complain that it can't find the static files for the link path is just fail.

Below is what it look like:

    deploy: {
        default: [
            {
                // move the webroot/app/index.html to webroot
                from: path.join(mockroot, 'webroot', 'app', 'index.html'),
                to: path.join(mockroot, 'webroot')
            },
            {
                // move the webroot/app/index.tpl to webroot/templates
                from: path.join(mockroot, 'webroot', 'app', 'index.tpl'),
                to: path.join(mockroot, 'webroot', 'templates')
            }
        ]
    }

You can find more details in ***wpm.config.js*** of the [example](https://github.com/chenckang/webpack-php-mock/tree/master/example) demonstration.

***

### Gulp and Run

Once you have you ***wpm.config.js*** file, and you also have a project based on webpack, then all you need to do is just include the tasks provided into you ***gulpfile.js*** and the run it.

The ***gulpfile.js*** is as follows:

    var gulp = require('gulp');
    var mock = require('webpack-php-mock');

    gulp.tasks = mock.tasks;

Here is all the gulp tasks provided:

* clean: which clean the root directory
* compile: which compile the project into root directory
* phpconnect: which start the ***gulp-connect-php***
* proxy: which start the entry server
* build: which do the ***clean***, ***compile*** and ***deploy*** in sequence
* server: which do the ***proxy***, ***phpconnect*** in sequence
* default: which do the ***server***, ***build*** in sequence

For you convenience, just run

    gulp

Then every thing will be done.

===

## Why webpack-php-mock

Recently out team launched a new project based on webpack, react and so on. As we continued to proceed our jobs, some problems came out:

* Our backend project are based on PHP, and the frontend's partial template is just smarty which is a fast meanwhile popular template engine.
* When had compiled the react files, the output of the compiling is just not satisfied the structure of the backend project.
* We also need mock the interface before it's existance using the static files with the format of json and so on.

And there are many many reasons, I will not list them all here. So what webpack-php-mock will do: 

* Mock The interface with fake data.
* Support the php interpretation.
* Support template engine based on php.
* Deploy you project as the are online structured.
* Can Used as a proxy server for redirecting requests to the really server. That is an enhancement of the ***interface mocking***.
* And so on.

Additionally webpack-dev-server are also an another fantastic tool to do proxy things, but without PHP interpretation, reconstruct the project and so on.

## Dependencies

### Gulp

Webpack-php-mock is base on gulp. That is the entry of webpack-php-mock is actually gulp tasks. So just install gulp into you system globally first. [Here is the steps](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md).

### PHP

To interpret php files with webpack-php-mock, you should have PHP installed in you operating system first. The PHP version must be at least 5.4 or above. Webpack will automaticly launch the PHP application on you system.

### Other

All the dependencies are list in the ***package.json*** file. Just check it out.


## License

MIT (http://www.opensource.org/licenses/mit-license.php)