define(['app/resources/routes', 'app/resources/user', 'app/service/viewmodeller'], function(routes, user, Modeller){
	var Router = Backbone.Router.extend({
	  	routes: routes,

	  	help: function() {
	    	console.log("Hit help");
	  	},

	  	search: function(query, page) {
	    	console.log("Hit search");
	  	},

	  	login: function() {
	  		if(user.isLoggedIn()) {
	  			user.logout();
	  		}
	  	}

	});

	var router = new Router();
	Backbone.history.start();

	//Grab navbar html
	var modeller = new Modeller();
	modeller.fetch('navbar', 'navBarContainer');
});