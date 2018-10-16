var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }, (err, data) => {
    if(err) {
        console.log('unable to connect to database', err);
        return;
    }
}); 

module.exports = {mongoose};
