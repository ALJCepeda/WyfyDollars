define([], function(){
	var User = Backbone.Collection.extend({
		url:'/users',
		sessionID: '',
		userID: '',
		username: '',

		parse: function(data) {
			return data;
		}
	});

	User.isLoggedIn = function() {
		return _.isString(this.sessionID) && !_.isEmpty(this.sessionID);
	}
	User.logout = function() {
		//Request that this account be logged out
		//If successful or not, alert user

		delete this.sessionID; delete this.userID;
	}
	User.login = function(password) {
		//Request this account be logged in
		var self = this;
		this.username = "DummyUser";
		this.password = "DummyPassword";

		var data = {
			username: this.username,
			password: this.password
		};
		
		$.ajax({
			url: 'login',
			data: data,
			dataType: 'json',
			method: 'POST',

		}).done(function(data) {
			
		}).fail(function(error) {

		});
	}

	return new User();
});