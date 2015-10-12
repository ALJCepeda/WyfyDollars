define(['mocks/profiles', 'resources/abstracts/dataselect'], function(data, DataSelect) {
	var ProfileDatasource = function() {
		var self = this;
		this.data = ko.observable(data);
		this.references = ko.computed(function() { return self.data().references; });
		this.detailed = ko.computed(function() { return self.data().detailed; });

		this.select = new DataSelect(this.detailed, 'profile');
		this.profile = function (id) {
			return this.detailed()[id];
		};
		this.profileIDs = ko.computed(function() { return self.select.allIDs(); });
	};

	return ProfileDatasource;
})