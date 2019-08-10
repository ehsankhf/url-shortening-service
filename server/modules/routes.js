const express = require('express');
const router = express.Router();
const indexController = require('./controller');

router.get('/', indexController.getIndex);
router.get('/short/:short_url_id', indexController.redirection);
router.get('/urls', indexController.getAllUrls);
router.post('/urls', indexController.addOneUrl);

module.exports = router;
