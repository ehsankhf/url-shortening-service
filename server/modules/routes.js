const express = require('express');
const router = express.Router();
const indexController = require('./controller');

router.get('/', indexController.getIndex);

module.exports = router;
