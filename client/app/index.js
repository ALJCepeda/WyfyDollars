define(['app/resources/routes', 'app/resources/user', 'app/service/viewmodeller', 'app/models/navbar'], 
	function(routes, user, Modeller, navbar){
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

		//Inject navbar
		var modeller = new Modeller();
		modeller.inject('navbar', 'navBarContainer');
	}
);