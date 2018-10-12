//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectId} = require('mongodb');

// var obj = new ObjectId();

//  console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser : true},  (err, client)=> {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }   
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: 'false'
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert Todo', err);
    //     };

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Geoff',
    //     age: 35,
    //     location: 'France'
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert User', err);
    //     }


    //     console.log(result.ops[0]._id.getTimestamp());
    // })

    client.close();
});