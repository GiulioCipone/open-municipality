var router = require('express').Router();
var four0four = require('./utils/404')();
var pkginfo = require('pkginfo')(module);
var passport = require('passport');

var appName = module.exports.name;
var appVersion = module.exports.version;

router.get('/', home);
router.get('/status', status);

router.post('/register', function(req, res) {
  var data = {};

  if (!req.body || !req.body.email) {
    data.status = 400;
    data.message = 'Email is required'
  } else if(!req.body.password) {
    data.status = 400;
    data.message = 'Password is required'
  } else if(!req.body.passwordConfirm || req.body.password !== req.body.passwordConfirm) {
    data.status = 400;
    data.message = 'The 2 passwords don\'t seem to match'
  } else {
    data.status = 200;
    data.message = req.body.email + ' registered.';
  }

  res.status(data.status).send(data.message);
});

router.post('/login', function(req, res) {
  var data = {};

  if (!req.body || !req.body.email) {
    data.status = 400;
    data.message = 'Email is required'
  } else if(!req.body.password) {
    data.status = 400;
    data.message = 'Password is required'
  } else {
    data.status = 200;
    data.message = req.body.email + ' logged in.';
  }

  res.status(data.status).send(data.message);
});

router.get('/*', four0four.notFoundMiddleware);

module.exports = router;

function status(req, res) {
  const data = {
    app: appName,
    version: appVersion,
    status: 200,
    message: 'OK - ' + Math.random().toString(36).substr(3, 8)
  };

  res.status(200).send(data);
}

function home(req, res) {
  res.status(200).send('Hello there!');
}
