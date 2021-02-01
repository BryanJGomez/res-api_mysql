const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const session = require('express-session');
const mysqlStore = require('express-mysql-session');
const passport = require('passport');
const {database} = require('./config');

//incializacion de la aplicacion
const app = express();+
require('./lib/passport');

//setting
app.set('port', process.env.PORT || 4000)

app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}));

app.set('view engine', '.hbs');


//Middelwares
app.use(session({
    secret: 'bryan',
    resave: false,
    saveUninitialized: false,
    store: mysqlStore(database)

}))
app.use(flash());

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());     


//Globlas Variables
app.use((req, res, next)=>{
    app.locals.success = req.flash('success');
    app.locals.message = req.flash('message');
    app.locals.user = req.user;
    next();
})

//Routes 
app.use( require('./routes'));
app.use(require('./routes/authentication'));
app.use('/links', require('./routes/links'));


//public
app.use(express.static(path.join(__dirname, 'public')));

//arrancamos el servidor
app.listen(app.get('port'), ()=>{
    console.log('El servidor esta corriendo en el puerto' , app.get('port'));
})