define(['services/injector', 'datasources/profile'], function(Injector, ProfileDS) {
	var Profiler = function(viewURL) {
		var self = this;
		this.view = (_.isUndefined(viewURL)) ? "app/views/widgets/profiler.html" : viewURL;		

		var ds = new ProfileDS();
		this.ds = ds;

		this.selected = ko.observable(ds.select.profile.withID(1392));
		this.showAllBtn = ko.observable(false);

		this.clickedID = function(id) {
			self.selected(ds.select.profile.withID(id));
		};
		this.imageFor = function(id) {
			return ds.select.profile.withID(id).image;
		};

		this.injectSelf = function(containerID, complete) {
			var injector = new Injector();
			//Inject profile navigator
			injector.fetchView(self.view, function(html) {
				injector.inject(containerID, html, self, function() {
					if(_.isFunction(complete)) { complete(); }
				});
			});
		};

		this._clickedAllBtn = function() { self.clickedAllBtn(); };
		this.clickedAllBtn = function() { };
	}

	return Profiler;
});