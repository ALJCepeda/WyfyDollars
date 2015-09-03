define(['app/resources/routes'], function(routes){
	var Router = Backbone.Router.extend({
	  	routes: routes,

	  	help: function() {
	    	console.log("Hit help");
	  	},

	  	search: function(query, page) {
	    	console.log("Hit search");
	  	}

	});

	var router = new Router();
	Backbone.history.start();

});