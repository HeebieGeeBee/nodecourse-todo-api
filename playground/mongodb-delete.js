//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser : true},  (err, client)=> {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }   
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // deleteMany

    // db.collection('Todos').deleteMany({text: "clean up"})
    //     .then((result) => {
    //         console.log(result);
    //     });

    // deleteOne

    // db.collection('Todos').deleteOne({text: 'clean up'}).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete

    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });
    
    // db.collection('Users').deleteMany({name: 'Geoff'}).then((result) => {
    //     console.log(result);
    // })

    db.collection('Users').findOneAndDelete(ObjectId("5bba8928f9d31b32ac26c733")).then((result) => {
        console.log(result);
    });
   // client.close();
});