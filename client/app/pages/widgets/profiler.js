define(['services/injector', 'datasources/profile'], function(Injector, ProfileDS) {
	var Profiler = function(viewURL) {
		this.view = _.isUndefined(viewURL) ? "app/views/widgets/profiler.html" : viewURL;		

		var self = this;
		var ds = new ProfileDS();
		this.ds = ds;

		this.showAllBtn = ko.observable(false);
		this.selectedID = ko.observable(1392);
		this.selected = ko.computed(function() { return ds.select.profile.withID(self.selectedID()); });
		
		this.imageFor = function(id) {
			return ds.select.profile.withID(id).image;
		};
		this._clickedID = function(id) {
			self.selectedID(id);
			self.clickedID();
		};
		this._clickedAllBtn = function() { 
			self.clickedAllBtn(); 
		};
		this.clickedID = function() { };
		this.clickedAllBtn = function() { };
		this.injectSelf = function(containerID, complete) {
			var injector = new Injector();
			//Inject profile navigator
			injector.fetchView(self.view, function(html) {
				injector.inject(containerID, html, self, function() {
					if(_.isFunction(complete)) { complete(); }
				});
			});
		};
	}

	return Profiler;
});