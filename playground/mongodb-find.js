//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser : true},  (err, client)=> {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }   
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectId("5bba86cc42729919308cef3c")})
    //     .toArray().
    //     then((docs) => {
    //         console.log('Todos');
    //         console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });
    
    // db.collection('Todos').find()
    //     .count().
    //     then((count) => {
    //         console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({name: 'Geoff'})
        .toArray()
        .then((docs) => {
            console.log('Todos');
            console.log(JSON.stringify(docs, undefined, 2));
        }, (err) => {
        console.log('Unable to fetch todos', err);
    });
    
  
   // client.close();
});