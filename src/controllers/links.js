const pool = require('../database');


exports.add = (req, res)=>{
    res.render('links/add');
};

exports.adds = async (req, res) =>{
    const {title, url, description} = req.body;

    const newLinks =  {
        title,
        url,
        description,
        user_id: req.user.id
    };
    await  pool.query('INSERT INTO links SET ? ', [newLinks])
    req.flash('success', 'Link Saved Successfully');
    res.redirect('/links')
};

exports.list = async (req, res) =>{
    const links = await pool.query('SELECT * FROM links WHERE  user_id = ?', [req.user.id]);
    res.render('links/list', {links});
};

exports.borrar = async (req, res) =>{
    const { id } = req.params;
    await pool.query('DELETE FROM links WHERE id = ?', [id]);
    req.flash('success', 'Link removed Successfully');
    res.redirect('/links')
};

exports.edit = async (req, res, next)=>{
    const { id } = req.params;
    const links =  await pool.query('SELECT * FROM links WHERE ID = ?', [id]);
    res.render('links/edit',{link: links[0]} );
};

exports.editLinks = async (req, res, next)=>{
    const {id} = req.params;
    const {title, description, url} = req.body;
    const  newlinks = {
        title,
        description,
        url
    };
    await pool.query('UPDATE links SET ? WHERE id = ?', [newlinks, id])
    req.flash('success', 'Link update Successfully');
    res.redirect('/links')
}
