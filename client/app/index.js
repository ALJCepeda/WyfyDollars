define(['resources/routemap', 'resources/user', 'services/navigator'], 
	function(routemap, user, Navigator){
		var navigation = new Navigator();

		var Router = Backbone.Router.extend({
			parent: '/',
		  	routes: routemap.routes,
		  	execute: function(callback, args, name) {
		  		if(callback) {
		  			callback.apply(this, args);
		  		} else {
		  			//Display 404 error
		  		}
		  	},
		  	overview: function() {
		  		this.parent = 'overview'
		  		navigation.display('overview', routemap.overview);
		  	},
		  	overviewChild: function(child) {
		  		var path = 'overview/'+child;
		  		navigation.displayView(path, 'pageContainer', path);
		  	},

		  	chores: function() {
		  		this.parent = 'chores';
		  		navigation.display('chores', routemap.chores);
		  	},
		  	choresChild: function(child) {
		  		var path = 'chores/'+child;
		  		if(this.parent !== 'chores') {
		  			this.navigate('chores', { trigger:true });
		  			this.navigate('chores/'+child);
		  		}

		  		navigation.displayView(path, 'pageContainer', path);
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