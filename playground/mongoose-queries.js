const {ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = "5bc39ee6bbc55532d0f64d2511";

// if (!ObjectId.isValid(id)) {
//     console.log('Id is not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos: ', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo: ', todo);
// });

// Todo.findById(id).then ((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo);
// }).catch((err) => console.log(err));

// user find by id - 

var id = "5bc331a54badb71a38401a9411";

User.findById(id).then((user) => {
    if (!user) {
        return console.log('User not found');
    }
    console.log('User by id: ', user);
}).catch((err) => console.log(err));