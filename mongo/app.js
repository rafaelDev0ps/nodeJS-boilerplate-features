const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = require('./config/connection.config');
const session = require('express-session');
const flash = require('connect-flash');

//Router imports
const UserRoutes = require('./routes/user');

const app = express();

// Sessao
app.use(session({
    secret: 'ljdfvslf28#!23aspdiv',
    resave: true,
    saveUninitialized: true
}));

app.use(flash());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// Middlewares
app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// Database connection
mongoose.Promise = global.Promise;
mongoose.connect(db, { 
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => {
    console.log('Connected to database...');
}).catch(err => {
    console.log(err);
});

// Route Groups
app.use('/users/', UserRoutes);

app.use((req, res, next) => {
    res.status(404).send('Page not found');
});


// Host config
// app.listen must be the last line of our code
const port = 9091;
app.listen(port, () => {
    console.log("Server running...");
    console.log("Server address http://localhost:", port);
});
