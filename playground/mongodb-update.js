//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser : true},  (err, client)=> {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }   
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // findOneAndUpdate

    // db.collection('Todos').findOneAndUpdate(
    //     { _id: new ObjectId("5bc035a58e56df511b0fb7e3")
    //     }, {
    //         $set: {completed: true}
    //     },
    //     {returnOriginal: false})
    //         .then((result) => {
    //         console.log(result);
    //     });

    db.collection('Users').findOneAndUpdate({
            _id: new ObjectId("5bba8928f9d31b32ac26c733")
        }, {
            $set: {name: 'Tony'},
            $inc: {age: 1}
        }, {
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        });
    });
   // client.close();
