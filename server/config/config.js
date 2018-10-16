var env = process.env.NODE_ENV || 'development';
console.log('env *****', env);
var db = {
    dev: 'mongodb://localhost:27017/TodoApp',
    test: 'mongodb://localhost:27017/TodoAppTest',
    mlab: 'mongodb://Geeheeb:fTwpDKK7CG3Zy4y@ds131983.mlab.com:31983/geoffs-todo'
}

if(process.env.NODE_ENV) {
    process.env.MONGODB_URI = db.mlab;
} else 
    process.env.PORT = 3000;
    if (env === 'development') {
        process.env.MONGODB_URI = db.dev;
    } else if (env === 'test') {
    process.env.MONGODB_URI = db.test;
}
console.log(process.env.MONGODB_URI);