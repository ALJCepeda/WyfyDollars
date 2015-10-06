define(['mocks/profiles', 'abstracts/dataselect'], function(data, DataSelect) {
	var ProfileDatasource = function() {
		var self = this;
		this.select = new DataSelect(data, 'profile');
		this.profiles = this.select.allIDs();
	};

	return ProfileDatasource;
})