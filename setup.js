let MongoClient = require('mongodb').MongoClient;
let assert = require('assert');

let url = 'mongodb://localhost:27017/myproject';

let Conn = MongoClient.connect(url);

Conn.then(db => {
    db.createCollection('users', (err, Users) => {
        Users.createIndex({ username: "text" }, { unique: true }, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('done!');
            }
            db.close();
        })
    })
})