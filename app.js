var express = require('express');
var path = require('path');
var session = require('cookie-session');
var bodyparser = require('body-parser');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fs = require('fs');

var config = require('./config.js');

http.listen(config.port, function() { console.log('listening on *: ' + config.port)});
app.use(express.static(path.join(__dirname, 'client')));
app.use( bodyparser.json() );       // to support JSON-encoded bodies
app.use(bodyparser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(session({
  name: 'session',
  secret: 'B9954618C6B579337B63C3C581924'
}));

app.get('/', function(req, res){ 
	req.session.lastPage = '/';
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/login', function(req, res) {
	var username = ''; 
	var password = '';
	var succeeded = true;
	var data = {};

	if(!req.body || !req.body['username'] || !req.body['password']) {
		succeeded = false;
	} else {
		username = req.body['username'];
		password = req.body['password'];
		console.log("Attempted to login with " + username + "  " + password);
	}

	if(succeeded) {
		data = {
			status: 'Successful',
			message: 'Successfully logged in! Welcome to ALJCepeda\'s WyfyDollars',
			userID: 1
		};

		req.session.userID = 1;
		req.session.username = username;
		console.log(req.session.ID);
	} else {
		data = {
			status: 'Unauthorized Access',
			message: 'Invalid username or password provided',
			userID: -1,
			error: {
				status: 'NOTICE',
				type: 'User Error',
				message: 'Invalid Input'
			}
		}; 
	}

	res.send(data);
});

app.get('/lib/:name', function(req, res){
	var script = config.lib[req.params.name];
	if( typeof script !== 'undefined' ) {
		//Remove extension from dependency name
		var name = req.params.name;
		name = name.substring(0, name.lastIndexOf('.'));

		//Check if dependency is mapped somewhere in the bower directory
		if( typeof config.libMap[name] !== 'undefined' ) {
			name = config.libMap[name];
		}

		//Send file or exception
		res.sendFile(path.join(config.bowerdir, name, script));
	} else {
		//No dependency by that name
		res.status('404')
			.send('Not Found');
	}
});