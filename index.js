let express = require('express'),
	app = express(),
	path = require('path'),
	cors = require('cors'),
	jwt = require('jsonwebtoken');

let MongoClient = require('mongodb').MongoClient,
	url = 'mongodb://localhost:27017/myproject',
	Conn = MongoClient.connect(url);

let bodyParser = require('body-parser'),
	multer = require('multer'),
	upload = multer(),
	port = 9000;


/**
 * 200: OK
 * 500: Internal Server Error
 */



app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/js', express.static(path.resolve('./dist/js')))
app.use('/assets', express.static(path.resolve('./dist/assets')))
app.use('/css', express.static(path.resolve('./dist/css')))



let server = app.listen(process.env.PORT || port, () => {
	let port = server.address().port;
	console.log(`App listening on port ${port}`);
})

app.get('/', (req, res) => {
	res.sendFile(path.resolve('./dist/App.html'));
})

app.get('/signup', (req, res) => {
	res.sendFile(path.resolve('./dist/SignUp.html'));
})

app.get('/entrance', (req, res) => {
	res.sendFile(path.resolve('./dist/Entrance.html'));
})

app.get('/room', (req, res) => {
	res.sendFile(path.resolve('./dist/Room.html'));
})

app.get('/gameplay', (req, res) => {
	res.sendFile(path.resolve('./dist/GamePlay.html'));
})





app.post('/login', upload.array(), (req, res) => {
	let username = req.body.username;
	let password = req.body.password;

	console.log({ username, password });

	Conn.then(db => {
		let Users = db.collection('users');

		Users.findOne({ username }).then(result => {
			if (result.password !== password) {
				res.status(200).json({
					code: 1,
					err: "PASSWORD_INCORRECT",
					token: jwt
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

	console.log({ username, password });

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