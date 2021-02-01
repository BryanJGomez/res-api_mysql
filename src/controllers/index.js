const pool = require('../database/index')

exports.inicio = (req, res, next)=>{
    res.render('index');
}