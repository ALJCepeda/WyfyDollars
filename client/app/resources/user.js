define([], function(){
	var User = Backbone.Collection.extend({
		url:'/users',
		sessionID: '',
		userID: '',
		username: '',

		parse: function(data) {
			return data;
		},

		isLoggedIn: function() {
			return _.isString(this.sessionID) && !_.isEmpty(this.sessionID);
		},

		logout: function() {
			//Request that this account be logged out
			//If successful or not, alert user

			delete this.sessionID; delete this.userID;
		},

		login: function(username, password) {
			//Request this account be logged in
			var self = this;

			var data = {
				username: username,
				password: password
			};
			
			$.ajax({
				type: 'POST',
				url: 'login',
				data: data,
				dataType: 'json'
			}).done(function(data) {
				self.username = username;
				self.password = password;
				self.userID = data.userID;
			}).fail(function(error) {
				alert(error.message);
			});
		}
	});

	return new User();
});