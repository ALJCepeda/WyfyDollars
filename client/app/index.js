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
		  	
		  	parentRoute: function(par) {
		  		this.parent = par;
		  		navigation.display(par, routemap[par]);
		  	},

		  	childRoute:function(par, child) {
		  		var path = par + '/' + child;
		  		if(this.parent !== par) {
		  			this.navigate(par, { trigger:true });
		  			this.navigate(path);
		  		}

		  		navigation.displayView(path, 'pageContainer', path);
		  	}
		});

		var router = new Router();
		Backbone.history.start();
	}
);