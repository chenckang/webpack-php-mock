# Webpack-php-mock

[![npm version](https://badge.fury.io/js/webpack-php-mock.svg)](https://badge.fury.io/js/webpack-php-mock)
[![Issue Stats](http://issuestats.com/github/chenckang/webpack-php-mock/badge/pr)](http://issuestats.com/github/chenckang/webpack-php-mock)

## Installation

**Webpack-php-mock** has been published as a npm module, so that one can easily install it using the **npm install** command. 

Switch to you project root directory which should already have a ***package.json*** file in it, and run command as the following:

    npm install webpack-php-mock@1.0.8-alpha --save-dev

Now you get **webpack-php-mock** installed on your project, declaring it as one of the "devDependencies".

The next important thing is to add a configuration file to the root of the project named ***wpm.config.js***, where one can add custom settings.

## Usage

You can quickly launch the mock stuff using the demo [example](https://github.com/chenckang/webpack-php-mock/tree/master/example).

Switch to the root of the example. And run the command 
    
    npm install

And start it like this.

    gulp

After that just visit [http://localhost:3000/](http://localhost:3000/).

The configuration descriptions are as below.

***

## Configuration

The first thing to be anounced is that there should be a ***webpack.config.js*** file or the similiar to support the compiling of your project using **webpack**. This is because **webpack-php-mock** is just based on **webpack** and provides no additional compiling stuff.

All the configuration usage could be found in the [wpm.config.js](https://github.com/chenckang/webpack-php-mock/blob/master/example/wpm.config.js) demo.

#### The Root Directory

**Configuration Name: root**

To help to locate all the static file, you should explicitly give the "webroot" directory. The root directory only contains static files such as JavaScript files, image files, font files and so on. The root directory will be cleaned every once you run **gulp** or **gulp clean**.

    root: path.join(mockroot, 'webroot')

#### Webpack Output Path

**Configuration Name: outputPath**

This will override the the **output.path** configuration of the ***webpack.config.js***. The purpose is put the output files to a specific place that will avoid unnecessary coverage of the **webpack** compiling output.

    outputPath: path.join(mockroot, 'webroot', 'app')

#### Jsons

**Configuration Name: jsons.path**

Specify the local path where all the json datas are located. This is mainly for the relative path of the type **local** rewrite rule.

    jsons: {
        path: path.join(mockroot, 'jsons')
    }

#### PHP Connect

**Configuration Name: phpconnect**

This is a configuration for the plugin **gulp-connect-php**, [click to check the detail](https://github.com/micahblu/gulp-connect-php.git)

    phpconnect: {
        host: 'localhost',
        port: 8000,
        root: path.join(mockroot, 'php')
    }

#### Server

**Configuration Name: server.port**

Just specify the port that the mock server will use.

    server: {
        port: 3000
    }

#### Rewrite Path

**Configuration Name: rewrite.paths**

This is the main part of the configuration, which can achieve proxy, interface mock, php request redirect.

The paths is an array which contain many individual rewrite rules. Each rule is one of the type: **local**, **proxy**, **php**. And cookie can also be injected into each rule to help the authorization.

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
This is used to mock request interface, you can spcify a local json file in "to", and when you request "from", the content of the "to" will be returned. If the mime is "application/json" it will act like a real interface. The path value of the "to" is relative to the **jsons.path** configuration.

##### Type: proxy

This is used for proxy, redirect you "from" request to "to". It can be used to pull data from a real server. Also if you specify the cookie, the proxy will have the authorization info to request backend server.

##### Type: php

This is used for php interpretation. Request based on php can use this type.

#### Deploy to Reconstruct

**Configuration Name: deploy.default**

This is used to reconstruct the output files to be online-like. We think that developing and testing you project in an online-like structure will help to reduce error-prone problems that will jump out once you push your codes online.

So just test you project as online-like.

Tips: The deploy configuration is not so completed, it is only capable of simple reconstruct such as move the template file to some other place. When you move the static files, you browser may complain that it can't find the static files for the link path just fails.

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

Once you have your ***wpm.config.js*** file, and you also have a project based on **webpack**, then all you need to do is just including the gulp tasks provided into your ***gulpfile.js*** and the run **gulp**.

The **gulpfile.js** is as follows:

    var gulp = require('gulp');
    var mock = require('webpack-php-mock');

    gulp.tasks = mock.tasks;

Here is all the gulp tasks provided:

* clean: which clean the root directory
* compile: which compile the project into root directory
* phpconnect: which start the **gulp-connect-php**
* proxy: which start the entry server
* build: which run the **clean**, **compile** and **deploy** in sequence
* server: which run the **proxy**, **phpconnect** in sequence
* default: which run the **server**, **build** in sequence

For you convenience, after getting your project ready as described above, just run

    gulp

Then the **webpack-php-mock** is running. All gulp tasks can also be runned separately.

===

## Why webpack-php-mock

Recently our team launched a new project based on webpack, react and so on. As we continued to proceed our jobs, some problems came out:

* Our backend project was based on PHP, and the frontend partial template was the Smarty which is a fast meanwhile popular backend template engine.
* When had compiled the react files, the output of the compiling was just not satisfied the files structure of the backend project online.
* We also needed mock the interface before its existance.
* Some existing interface was ready on the remote server, a proxy server will speed up the developing in the local development environment.

And there are many many reasons, I will not list them all here. So what **webpack-php-mock** can do: 

* Mock The interface with fake local data.
* Support the PHP interpretation.
* Support template engine based on PHP.
* Reconstruct the files structure of you project as they are online.
* Can be used as a proxy server for redirecting requests to the real backend server. That is an enhancement of the ***interface mocking***.
* And so on.

Additionally **webpack-dev-server** are also an another fantastic tool to do proxy things, but without PHP interpretation, project reconstruction and so on.

## Dependencies

### Gulp

**Webpack-php-mock** is base on **gulp**. That is the entry of **webpack-php-mock** is actually gulp tasks. So just install gulp first. [Here is gulp getting-started](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md).

### PHP

To interpret PHP files with **webpack-php-mock**, you should have PHP installed in your operating system first. The PHP version must be at least 5.4. **Webpack-php-mock** will automaticly launch the PHP application on you computer.

### Other

All the dependencies are list in the ***package.json*** file. Just check them out if you are interested.

## License

MIT (http://www.opensource.org/licenses/mit-license.php)