const express = require('express');
const router = express.Router();
const indexController = require('./controller');

router.get('/', indexController.getIndex);
router.get('/urls', indexController.getAllUrls);

module.exports = router;
