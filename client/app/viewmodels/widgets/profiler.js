define(['services/injector', 'mocks/profiles'], function(Injector, datasource) {
	var Profiler = function(viewURL) {
		var self = this;
		this.view = (_.isUndefined(viewURL)) ? "app/views/widgets/profiler.html" : viewURL;

		this.profiles = datasource;
		this.selected = ko.observable(this.profiles[0]);
		this.showAllBtn = ko.observable(false);

		this.clickedProfile = function(profile) {
			self.selected(profile);
		};

		this.deleteProfile = function(profile) {
			self.profiles.remove(profile);
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

		this._clickedAllBtn = function() {
			self.clickedAllBtn();
		};
		this.clickedAllBtn = function() {

		};
	}

	return Profiler;
});