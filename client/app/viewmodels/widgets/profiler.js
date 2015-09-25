define(['services/injector', 'datasources/profile'], function(Injector, ProfileDS) {
	var Profiler = function(viewURL) {
		var self = this;
		this.view = (_.isUndefined(viewURL)) ? "app/views/widgets/profiler.html" : viewURL;		

		var profile = new ProfileDS();
		this.ds = profile;

		this.selected = ko.observable(profile.with.ID(1392));
		this.showAllBtn = ko.observable(false);

		this.clickedID = function(id) {
			self.selected(profile.with.ID(id));
		};
		this.imageFor = function(id) {
			return profile.with.ID(id).image;
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