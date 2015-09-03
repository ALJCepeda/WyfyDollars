var express = require('express');
var path = require('path');
var session = require('cookie-session');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fs = require('fs');

var config = require('./config.js');

http.listen(config.port, function() { console.log('listening on *: ' + config.port)});
app.use(express.static(path.join(__dirname, 'client')));
app.use(session({
  name: 'session',
  secret: 'B9954618C6B579337B63C3C581924'
}));
app.get('/', function(req, res){ 
	req.session.lastPage = '/';
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/:name', function(req, res){
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