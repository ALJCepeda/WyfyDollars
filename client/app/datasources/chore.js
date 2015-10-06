define(['abstracts/dataselect', 'mocks/chores'], function(Dataselect, data) {
	var ChoreDatasource = function() {
		var self = this;
		this.data = ko.observable(data);
		this.chore = new Dataselect(data);
	};

	ChoreDatasource.prototype = new Datasource();
	return ChoreDatasource;
});