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
		
		this.clicked = function(id) {
			console.log("Clicked: " +id);
		}

		this.doubleClicked = function(id) {
			console.log("Double Clicked: " +id);
		}

		this.imageFor = function(id) {
			return ds.select.profile.withID(id).image;
		};
		this._clickedID = function(id) {
			self.selectedID(id);
			self.clickedID();
		};
		this._clickedAddBtn = function() {
			self.clickedAddBtn();
		};
		this._clickedAllBtn = function() { 
			self.clickedAllBtn(); 
		};
		this.clickedID = function() { };
		this.clickAddBtn = function() { };
		this.clickedAllBtn = function() { };
	}

	return Profiler;
});