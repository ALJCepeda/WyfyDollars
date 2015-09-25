var express = require('express');
var path = require('path');
var bodyparser = require('body-parser');
var config = require('../config.js');
var session = require('cookie-session');

var appDir = path.dirname(require.main.filename);

var Staticy = function(app) {
	app.use(session({
  		name: 'session',
  		secret: 'B9954618C6B579337B63C3C581924'
	}));

	app.use(express.static(path.join(appDir, 'client')));
	app.use(bodyparser.json());       // to support JSON-encoded bodies
	app.use(bodyparser.urlencoded({     // to support URL-encoded bodies
	  extended: true
	})); 

	app.get('/lib/:name', function(req, res){
		var script = config.lib[req.params.name];
		if( typeof script !== 'undefined' ) {
			//Remove extension from dependency name
			var name = req.params.name;
			name = name.substring(0, name.indexOf('.'));

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


	app.get('/fonts/:name', function(req, res) {
		var name = req.params.name;
		res.sendFile(path.join(config.bowerdir, 'bootstrap-material-design', 'fonts', name));
	});
};

module.exports = Staticy;