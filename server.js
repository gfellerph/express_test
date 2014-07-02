var http = require('http');
var express = require('express');
var routes = require('./routes.js');
var sessions = require('./models/sessions.js');

var app = express();

app.use(sessions.getSession);
routes(app);

var port = 8080;

http.createServer(app).listen(port);

function test(req, res, next){
	console.log('test');
}