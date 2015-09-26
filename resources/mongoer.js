var mongo = require('mongodb').MongoClient;
var config = require('../config.js');

var Mongoer = function() {
	/*
	mongo.connect(config.mongoURL, function(err, db) {
		db.collection('users').insertOne({
			username:'AJRelic',
			password:'password'
		}, function(err, result) {
			if(err !== null) {
				console.log(err);
			} else {
				console.log('Inserted user into database');
			}

			db.close();
		});
	});*/
	/*
	mongo.connect(config.mongoURL, function(err, db) {
		db.collection('users').createIndex( {username:1 }, { unique: true} );
	});
	*/

	mongo.connect(config.mongoURL, function(err, db) {
		var cursor = db.collection('users').find({
			username:'AJRelic'
		});

		cursor.each(function(err, doc) {
			if(err !== null) {
				console.log(err);
			} else if(doc !== null) {
				console.dir(doc);
			}
		});
	});
};

module.exports = Mongoer;