define(['mocks/profiles'], function(data) {
	var Datasource = function() {
		var self = this;
		this.profile = self;
		this.with = {
			ID: function(id) {
				return self.data().refs[id];
			}
		};

		this.has = {
			ID: function(id) {
				return !_.isUndefined(self.data.refs[id]);
			}
		};
		
		this.data = ko.observable(data);
		this.profiles = ko.computed(function() { return Object.keys(self.data().refs); });

		this.delete = function(id) {
			delete self.data.detailed[id];
			delete self.data.refs[id];
		}
	}

	return Datasource;
})