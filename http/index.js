const express = require('express');
const bodyParser = require('body-parser');
const Posts = require('./models/Posts');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/static/templates/index.html');
});

app.get('/getPosts', (req, res) => {
    Posts.findAll().then((posts) => {
        res.send({posts});
    });
});

app.post('/createPost', (req, res) => {
    Posts.create({
        title: req.body.title,
        content: req.body.content
    }).then(() => {
        res.send('Post sent!');
        //res.redirect('/');
    }).catch((error) => {
        res.send(error);
    });
});

app.get('/delete/post/:id', (req, res) => {
    Posts.destroy({where: {id: req.params.id}}).then(() => {
        res.send('Post deleted');
    });
});

// app.listen must be the last line of our code
const port = 9091;
app.listen(port, () => {
    console.log("Server running...");
    console.log("Server address http://localhost:", port);
});