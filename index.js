let express = require('express');
let app = express();

let bodyParser = require('body-parser');
let multer = require('multer');
let upload = multer();

let port = 9000;

app.use(express.static(`${__dirname}/dist`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

let server = app.listen(process.env.PORT || port, function() {
	let port = server.address().port;
	console.log(`App listening on port ${port}`);
})

app.get('/', function(req, res) {
	res.sendFile(path.resolve('/dist/index.html'));
})

app.get('/login', function(req, res) {
	res.sendFile(path.resolve('./dist/index.html'));
})

app.post('/login', upload.array(), function(req, res) {
	console.log(req.body);
	res.send(req.body);
})

app.post('/signup', upload.array(), function(req, res) {
	console.log(req.body);
	res.send(req.body);
})