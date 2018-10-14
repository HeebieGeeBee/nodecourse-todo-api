var mongoose = require('mongoose');

let db = {
    localhost: 'mongodb://localhost:27017/TodoApp',
    mlab: 'mongodb://Geeheeb:fTwpDKK7CG3Zy4y@ds131983.mlab.com:31983/geoffs-todo'
}

mongoose.Promise = global.Promise;
mongoose.connect(db.mlab, { useNewUrlParser: true }, (err, data) => {
    if(err) {
        console.log('unable to connect to database', err);
        return;
    }
    //console.log('connected to data', data);
}); 

module.exports = {mongoose};