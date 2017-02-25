let express = require('express');
let app = express();
let path = require('path');

let bodyParser = require('body-parser');
let multer = require('multer');
let upload = multer();

let port = 9000;


/**
 * 200: OK
 * 500: Internal Server Error
 */



let MongoClient = require('mongodb').MongoClient;
let assert = require('assert');

let url = 'mongodb://localhost:27017/myproject';

let Conn = MongoClient.connect(url);

let jwt = require('jsonwebtoken');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

let server = app.listen(process.env.PORT || port, () => {
	let port = server.address().port;
	console.log(`App listening on port ${port}`);
})

app.use('/', express.static(path.resolve('./dist')));

app.get('/', (req, res) => {
	res.sendFile(path.resolve('./dist/index.html'));
})

app.get('/signup', (req, res) => {
	res.sendFile(path.resolve('./dist/signup.html'));
})

app.get('/entrance', (req, res) => {
	res.sendFile(path.resolve('./dist/entrance.html'));
})

app.get('/room', (req, res) => {
	res.sendFile(path.resolve('./dist/room.html'));
})

app.get('/gameplay', (req, res) => {
	res.sendFile(path.resolve('./dist/gameplay.html'));
})



app.post('/login', upload.array(), (req, res) => {
	let username = req.body.username;
	let password = req.body.password;

	console.log({username, password });

	Conn.then(db => {
		let Users = db.collection('users');

		Users.findOne({ username }).then(result => {
			if (result.password !== password) {
				res.status(200).json({
					code: 1,
					err: "PASSWORD_INCORRECT"
				})
			} else {
				res.sendStatus(200);
			}
		})
	})
})

app.post('/signup', upload.array(), (req, res) => {
	let username = req.body.username;
	let password = req.body.password;

	console.log({username, password});

	Conn.then(db => {
		let Users = db.collection('users');
		
		Users.insertOne({ username, password }).then(() => {
			res.sendStatus(200);
		})
		.catch(err => {
			console.log(err);
			
			res.status(200).json({
				err: "USERNAME_ALREADY_EXISTS"
			})
		});
	})
	.catch((err) => {
		console.log(err);

		res.sendStatus(500);
	})
})