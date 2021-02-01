const express = require('express');
const router = express.Router();
const  index  = require('../controllers');
const {isLoggedIn, isNotLoggedIn} = require('../lib/auth')
    router.get('/', isLoggedIn, index.inicio)

module.exports = router;