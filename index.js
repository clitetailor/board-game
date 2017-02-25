let express = require('express');
let app = express();
let path = require('path');

let bodyParser = require('body-parser');
let multer = require('multer');
let upload = multer();

let port = 9000;


let MongoClient = require('mongodb').MongoClient;
let assert = require('assert');

let url = 'mongodb://localhost:27017/myproject';

let Conn = MongoClient.connect(url);

let jwt = require('jsonwebtoken');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

let server = app.listen(process.env.PORT || port, function() {
	let port = server.address().port;
	console.log(`App listening on port ${port}`);
})

app.use('/', express.static(path.resolve('./dist')));

app.get('/', function(req, res) {
	res.sendFile(path.resolve('./dist/index.html'));
})

app.get('/signup', function(req, res) {
	res.sendFile(path.resolve('./dist/signup.html'));
})

app.get('/entrance', function(req, res) {
	res.sendFile(path.resolve('./dist/login.html'));
})

app.get('/room', function(req, res) {
	res.sendFile(path.resolve('./dist/room.html'));
})

app.get('/gameplay', function(req, res) {
	res.sendFile(path.resolve('./dist/gameplay.html'));
})




app.post('/signup', upload.array(), function(req, res) {
	console.log(req.body);
	
	let username = req.body.username;
	let password = req.body.password;

	console.log({username, password});

	Conn.then((db) => {
		let Users = db.collection('users');
		
		Users.insertOne({ username, password }).then(() => {
			res.sendStatus(200);
		})
		.catch(err => {
			console.log(err);
		});
	})
	.catch((err) => {
		console.log(err);
	})
})