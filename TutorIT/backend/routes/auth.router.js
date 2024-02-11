var express = require('express');
var router = express.Router();

const auth = require('../services/auth.services');

router.get('/login', auth.login);

module.exports = router;
