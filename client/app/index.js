define(['resources/routemap', 'resources/user', 'resources/services/navigator'], 
	function(routemap, user, navigation){

		var Router = Backbone.Router.extend({
			parent: '/',
			child:'',
			loading:null,
			model:null,
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

		  		this.child = child;
		  		this.loading = new Promise(function(resolve, reject) {
		  			navigation.displayView('pageContainer', path,
			  			function(injector) {
			  				if(injector.errors.length === 0) { 
			  					this.loadOptions(parent, child);
			  					resolve({ view:injector.view, model:injector.model });
			  				} else {
			  					reject(injector.errors);
			  				}
			  		}.bind(this));
		  		}.bind(this));
		  	},

		  	actionRoute:function(parent, child, action) {
		  		var childPath = parent + '/' + child;
		  		var path = childPath + '/' + action;
		  		if(this.child != child) {
		  			this.navigate(childPath, { trigger:true });
		  			this.navigate(path);
		  		}

		  		this.loading.then(function(vm) {
			  		if(_.isObject(vm.model) && _.isFunction(vm.model.onAction)) {
			  			vm.model.onAction(action);
			  		} else {
			  			//Failed to load view, vm is an object with erros
			  		}
			  	});
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