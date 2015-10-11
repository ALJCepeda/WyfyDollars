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

		this.ID = {
			image: function(id) {
				return ds.select.profile.withID(id).image;
			},
			element: function(id) {
				return $("#profileContainer img[profile='"+id+"']")[0];
			},
			_clicked: function(id) {
				self.ID.clicked(id);
			},
			_doubleClicked: function(id) {
				self.ID.doubleClicked(id);
			},
			clicked: function(id) { },
			doubleClicked: function(id) { }
		}

		this._clickedAddBtn = function() {
			self.clickedAddBtn();
		};
		this._clickedAllBtn = function() { 
			self.clickedAllBtn(); 
		};
		this.clickAddBtn = function() { };
		this.clickedAllBtn = function() { };
	}

	return Profiler;
});