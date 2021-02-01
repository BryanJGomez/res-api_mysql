const express = require('express');
const router = express.Router();
 const auth =  require('../controllers/authentication');
const passport = require('passport');
const {isLoggedIn, isNotLoggedIn} = require('../lib/auth')
     
 //renderizamos la vista del formularios
    router.get('/signup', isNotLoggedIn,  auth.signup);

    //enviamos los datos del formulario
    router.post('/signup',  isNotLoggedIn,
         passport.authenticate('local.signup',{
        successRedirect: '/profile',
        failureRedirect: '/signup',
        failureFlash: true
    })
    );

    router.get('/signin', isNotLoggedIn, auth.signin);

    router.post('/signin', isNotLoggedIn, auth.signins);

    router.get('/profile', isLoggedIn, auth.profile);

    router.get('/logout', isLoggedIn,  auth.logout)

module.exports = router; 