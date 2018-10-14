var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
        console.log('Todo added: ', JSON.stringify(doc, undefined, 2));
    }, (err) => {
        res.status(400).send(err);
        console.log('Unable to add todo', err);
    })
    
});



app.listen(3000, () => {
    console.log('Started on port 3000');
});

