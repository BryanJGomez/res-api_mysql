const express = require('express');
const router = express.Router();
const  {add, adds, list, borrar, edit, editLinks }  = require('../controllers/links');
const {isLoggedIn} = require('../lib/auth')
    router.get('/add', isLoggedIn, add );

    router.post('/add', isLoggedIn, adds);

    router.get ('/', isLoggedIn, list);

    router.get('/delete/:id',isLoggedIn, borrar);

    router.get('/edit/:id', isLoggedIn, edit);

    router.post('/edit/:id',isLoggedIn, editLinks)


module.exports = router; 