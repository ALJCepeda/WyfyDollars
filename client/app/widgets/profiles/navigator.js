define(
	['resources/services/injector', 'resources/datasources/profile'], 
	function(Injector, ProfileDS) {
	
	var Profiler = function(viewURL) {
		this.view = _.isUndefined(viewURL) ? "app/widgets/profiles/navigator.html" : viewURL;		

		var self = this;
		var ds = new ProfileDS();
		this.ds = ds;

		this.showAllBtn = ko.observable(false);
		this.showAddBtn = ko.observable(false);
		this.selectedID = ko.observable(1392);
		this.selected = ko.computed(function() { return ds.select.profile.withID(self.selectedID()); });
		
		this.imageFor = function(id) {
			return ds.select.profile.withID(id).image;
		};

		this._clickedID = function(id, element) {
			self.selectedID(id);
			self.clickedID(id, element);
		};
		this._doubleClickedID = function(id, element) {
			self.doubleClickedID(id, element);
		};
		this._clickedAddBtn = function() {
			self.clickedAddBtn();
		};
		this._clickedAllBtn = function() { 
			self.clickedAllBtn(); 
		};
		this.clickedID = function(id, element) { };
		this.doubleClickedID = function(id, element) { };
		this.clickAddBtn = function(element) { };
		this.clickedAllBtn = function(element) { };
	}

	return Profiler;
});