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
			selected:ko.observableArray([]),
			image: function(id) {
				return ds.select.profile.withID(id).image;
			},
			element: function(id) {
				return $("#profileContainer img[profile='"+id+"']")[0];
			},
			select: function(id) {
				if(ds.select.hasID(id) && self.ID.selected().indexOf(id) === -1) {
					if(self.ID.shouldSelect(id)) {
						self.ID.selected.push(id);
						self.ID.didSelect(id);
						return true;
					}
				}
				return false;
			},
			deselect: function(id) {
				if(self.ID.selected.remove(id)) {
					self.ID.didDeselect(id);
					return true;
				}
				return false;
			},
			_clicked: function(id) {
				self.ID.clicked(id);
			},
			_doubleClicked: function(id) {
				if(self.ID.selected().indexOf(id) === -1) {
					self.ID.select(id);
				} else { 
					self.ID.deselect(id);
				}

				self.ID.doubleClicked(id);
			},
			clicked: function(id) { },
			doubleClicked: function(id) { },
			shouldSelect: function(id) { return true; },
			shouldDeselect: function(id) { return true; },
			didSelect: function(id) { },
			didDeselect: function(id) { }
		}
		this.imageForID = function(id) {
			return self.ID.image(id);
		};

		this._clickedID = function(id) {
			self.ID._clicked(id);
		};
		this._doubleClickedID = function(id) {
			self.ID._doubleClicked(id);	
		};
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