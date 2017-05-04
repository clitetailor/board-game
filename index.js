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

	Conn.then(db => {

		const Users = db.collection('users');
		Users.findOne({ username })
			.then(result => {

				if (result.password === password) {

					const token = jwt.sign({ username }, 'my top secret!')
					res.status(200).json(token)

				} else {

					res.status(401).send("Invalid username or password")
				}
			})
			.catch(err => {

				res.status(401).send("Invalid username or password")
			})
	})
})



app.post('/signup', upload.array(), (req, res) => {
	const { username, password } = req.body;

	console.log({ username, password })

	if (!username || !password || username.match(/$^|\s+/) || password.match(/$^|\s+/)) {
		res.status(401).send("Invalid username or password");
		return;
	}

	Conn.then(db => {
		const Users = db.collection('users');

		Users.findOne({ username })
			.then(data => {
				res.status(409).send('Username already exists')
			})
			.catch(err => {
				Users.insertOne({ username, password })
					.then(data => {
						console.log(data);
						const token = jwt.sign({ username }, 'my top secret!')
						res.status(200).json(token);
					})
					.catch(err => {
						console.log(err);
					})
				console.log(err);
			})
	})
		.catch(err => {
			console.log(err);

			res.status(500);
		})
})


io.on('connection', socketioJwt.authorize({
	secret: "my top secret!",
	timeout: 15000 // 15 seconds to send the authentication message
}))

io.on("authenticated", (socket) => {
	socket.on('create-new-room', (room) => {
		Conn.then(db => {
			const Rooms = db.collection('rooms');

			const maxPlayers = !room.maxPlayers
				? 4 :
				room.maxPlayers >= 10
					? 10
					: room.maxPlayers > 1
						? room.maxPlayers
						: 2;
			console.log(maxPlayers)

			Rooms.insertOne({
				title: room.title,
				players: 1,
				maxPlayers: room.maxPlayers
			})
				.then(result => {
					console.log(result);

					socket.emit('new-room-created', Object.assign({}, room, {
						_id: result.insertedId
					}));
				})
				.catch(err => {
					console.log(err);
				})
		})
			.catch(err => {
				console.log(err);
			})
	})

	socket.on('request-join-room', (room) => {
		Conn.then(db => {
			const Rooms = db.collection('rooms');

			Rooms.findOne({
				_id: room._id
			})
				.then(room => {
					if (room.maxPlayers > room.players) {
						this.emit('approved', room);
					}
					else {
						socket.broadcast(socket.id);
					}
				})
				.catch(err => {
					console.log(err);
				})
		})
	})

	socket.on('join-room', (room) => {
		Conn.then(db => {
			const Rooms = db.collection('rooms');

			Rooms.update({
				_id: room._id
			}, {
					$cond: {
						if: {
							$gt: ['$maxPlayers', '$players']
						},
						then: {
							$inc: {
								$players: 1
							}
						}
					}
				})
				.then(room => {
					console.log(room);

					socket.join('room', room._id);
				})
				.catch(err => {
					console.log(err);
				})
		})
	})
})