var express = require('express');
var router = express.Router();
var indexController = require('./controller');

router.get('/', indexController.getIndex);

module.exports = router
