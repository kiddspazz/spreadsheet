#!/user/bin/env nodejs

const http = require('http');
const express = require('express');

const app = express();
const server = http.Server(app);
const port = 80;

server.listen(port, function() {
	console.log(`Spreadsheet server listening on ${port}`);
});

app.use(express.static('static'));

app.get('/index', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});
