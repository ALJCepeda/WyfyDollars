define(['resources/routemap', 'resources/user', 'services/navigator'], 
	function(routemap, user, navigation){

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
		  	
		  	parentRoute: function(parent) {
		  		this.parent = parent;
		  		navigation.display(parent, routemap[parent]);
		  		this.loadOptions(parent);
		  	},

		  	childRoute:function(parent, child) {
		  		var path = parent + '/' + child;
		  		if(this.parent !== parent) {
		  			this.navigate(parent, { trigger:true });
		  			this.navigate(path);
		  		}

		  		navigation.displayView('pageContainer', path,
		  			function() {
		  				this.loadOptions(parent, child);
		  		}.bind(this));
		  	},

		  	loadOptions:function(parent, child) {
		  		child = (_.isUndefined(child)) ? "" : child;
		  		var options = routemap[parent + child];
		  	}
		});

		var router = new Router();
		Backbone.history.start();
	}
);