var express = require('express');
var router = express.Router();
var http = require('http');

router.use('/', function (req, res, next) {
  next();
});

router.post('/', function(req, res, next) {
  console.log(req);
  res.send('Post received!');
});

router.get('/:user', function(req, res, next) {
  let user = req.params.user;
  res.send(user);
});

module.exports = router;
