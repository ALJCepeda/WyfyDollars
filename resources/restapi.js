var Restful = function(app) {
	app.post('/login', function(req, res) {
		var username = ''; 
		var password = '';
		var succeeded = true;
		var data = {};

		if(!req.body || !req.body.username || !req.body.password) {
			succeeded = false;
		} else {
			username = req.body.username;
			password = req.body.password;
			console.log('Attempted to login with ' + username + ' ' + password);
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
};

module.exports = Restful;