var MongoClient = require('mongodb').MongoClient
, assert = require('assert');

// Connection URL 
var url = 'mongodb://192.168.10.10:27017/test';
// Use connect method to connect to the Server 
MongoClient.connect(url, function(err, db) {
assert.equal(null, err);

var mongoose = require('mongoose');
mongoose.connect(url);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    var kittySchema = mongoose.Schema({
        name: String
    });

    var Kitten = mongoose.model('Kitten', kittySchema);
    var silence = new Kitten({ name: 'Helo~' });
    console.log(silence.name); // 'Silence'

});

console.log("Connected correctly to server");

// document={
//     title: 'MongoDB Overview', 
//     description: 'MongoDB is no sql database',
//     by: 'tutorials point',
//     url: 'http://www.tutorialspoint.com',
//     tags: ['mongodb', 'database', 'NoSQL'],
//     likes: 100
// };

// db.test.insert(document);
// db.test.find().pretty();
});