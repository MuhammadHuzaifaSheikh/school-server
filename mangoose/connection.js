const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://huzaifa:karachi125@testdb.0gitw.mongodb.net/mytestdb?retryWrites=true&w=majority',{useNewUrlParser:true});
var db = mongoose.connection;

db.on('error',function (error) {
    console.log(error);
})
db.on('open',function () {
    console.log('Open');
})