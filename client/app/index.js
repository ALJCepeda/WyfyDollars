define(['resources/routemap', 'resources/user', 'services/navigator'], 
	function(routemap, user, Navigator){
		var navigation = new Navigator();
		var containerID = 'pageContainers';

		var Router = Backbone.Router.extend({
		  	routes: routemap.routes,

		  	overview: function() {
		  		navigation.display('overview', routemap.overview);
		  	},

		  	chores: function() {
		  		navigation.display('chores', routemap.chores);
		  	},

		  	goals: function() {
		  		navigation.display('goals', routemap.goals);
		  	},

		  	penalties: function() {
		  		navigation.display('penalties', routemap.penalties);
		  	},

		  	profiles: function() {
		  		navigation.display('profiles', routemap.profiles);
		  	},

		  	rewards: function() {
		  		navigation.display('rewards', routemap.rewards);
		  	}
		});

		var router = new Router();
		Backbone.history.start();
	}
);