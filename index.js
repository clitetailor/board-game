let express = require('express');
let app = express();
let path = require('path');

let bodyParser = require('body-parser');
let multer = require('multer');
let upload = multer();

let port = 9000;

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
	res.send(req.body);
})