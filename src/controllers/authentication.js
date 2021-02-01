const passport =  require('passport');
//rendereisamos la vista del formulario
exports.signup = (req, res, next)=>{
    res.render('auth/signup');
};

exports.signin = (req, res, next)=>{
  
    res.render('auth/signin');
}


exports.profile = (req, res , next)=>{
    res.render('profile')
};

exports.signins =(req, res, next)=>{
    passport.authenticate('local.signin', {
        successRedirect: '/profile',
        failureRedirect: '/signin',
        failureFlash: true
    })(req, res, next);
}

exports.logout = (req, res, next)=>{
    req.logOut();
    res.redirect('/signin');
}

