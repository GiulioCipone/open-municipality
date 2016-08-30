'use strict';

var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var favicon = require('serve-favicon');

var app = express();

app.set('port', (process.env.PORT || 3000));
var environment = process.env.NODE_ENV;
var four0four = require('./utils/404')();

app.disable('x-powered-by');
app.use(favicon(path.join(__dirname, 'favicon.ico')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));

// API endpoints
app.use('/api', require('./routes'));

console.log('About to crank up node');
console.log('PORT=' + app.get('port'));
console.log('NODE_ENV=' + environment);

switch (environment) {
  case 'build':
    console.log('** BUILD **');

    // Any invalid calls for templateUrls are under app/* and should return 404
    // app.use('/app/*', function(req, res, next) {
        // four0four.send404(req, res);
    // });

    // Any deep link calls should return index.html
    // app.use('/*', express.static(path.join(__dirname, '../build')));
    break;

  default:
    console.log('** DEV **');

    app.use('/bower_components', express.static(path.join(__dirname, '../client/bower_components')));
    app.use('/app', express.static(path.join(__dirname, '../client/src/app')));
    app.use('/', express.static(path.join(__dirname, '../client/src')));
    app.use(express.static(path.join(__dirname, '../client/.tmp')));

    // Any invalid calls for templateUrls are under app/* and should return 404
    app.use('/*', function(req, res, next) {
        four0four.send404(req, res);
    });

    break;
};

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');

  console.log([
    'env = ' + app.get('env'),
    '__dirname = ' + __dirname,
    'process.cwd = ' + process.cwd()
  ].join('\n'));
});
