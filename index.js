const express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io')(server),
	path = require('path'),
	cors = require('cors'),
	expressJwt = require('express-jwt'),
	socketioJwt = require('socketio-jwt')
	fs = require('fs'),
	jwt = require('jsonwebtoken');

const MongoClient = require('mongodb').MongoClient,
	url = 'mongodb://localhost:27017/chess',
	Conn = MongoClient.connect(url);

const bodyParser = require('body-parser'),
	multer = require('multer'),
	upload = multer(),
	port = 9000;


/**
 * 200: OK
 * 500: Internal Server Error
 */


app.use(cors())
app.use('/users', expressJwt({
	secret: "my top secret!"
}).unless({ path: ['/js', '/assets', '/css', '/signup', '/'] }))


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/js', express.static(path.resolve('./dist/js')))
app.use('/assets', express.static(path.resolve('./dist/assets')))
app.use('/css', express.static(path.resolve('./dist/css')))



server.listen(process.env.PORT || port, () => {
	const port = server.address().port;
	console.log(`App listening on port ${port}`);
})

app.get(['/', '/entrance', '/signup'], (req, res) => {
	res.sendFile(path.resolve('./dist/index.html'));
})

app.get('/rooms/:id', (req, res) => {
	res.sendFile(path.resolve('./dist/index.html'));
})


app.post('/login', upload.array(), (req, res) => {
	const username = req.body.username;
	const password = req.body.password;

	console.log({ username, password });

	Conn.then(db => {

		const Users = db.collection('users');
		Users.findOne({ username }).then(result => {

			if (result.password === password) {

				const token = jwt.sign({ username }, 'my top secret!')
				res.status(200).json(token)

			} else {

				res.status(401).send("Invalid Password")
			}
		})
	})
})



app.post('/signup', upload.array(), (req, res) => {
	const username = req.body.username;
	const password = req.body.password;

	console.log({ username, password })

	if (username === '' || password === '') {
		res.status()
	}

	Conn.then(db => {
		const Users = db.collection('users');

		Users.insertOne({ username, password })
			.then(() => {

				const token = jwt.sign({ username }, 'my top secret!')

				res.sendStatus(200).json(token);
			})
			.catch(err => {
				console.log(err);

				res.status(409).send('Username already exists')
			});
	})
		.catch((err) => {
			console.log(err);

			res.sendStatus(500);
		})
})

io.on('connection', socketioJwt.authorize({
	secret: "my top secret!"
}))
	.on('authenticated', socket => {

	})
	.on('join-room', (socket, room) => {
		Conn.then(db => {
			const Rooms = db.collection('rooms');

			Rooms.findOneAndUpdate({
				_id: room._id
			}, {
					$cond: {
						if: {
							$gt: ["$max-players", "$players"],
						},
						then: { $inc: { player: 1 } }
					}
				})
			.then()
		})
	})