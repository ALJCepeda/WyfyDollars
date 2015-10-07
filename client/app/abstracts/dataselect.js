   define([], function() {
	var Dataselect = function(dataOBS, semanticID) {
		var self = this;
		this.data = dataOBS;
		this[semanticID] = this; //Used strictly for semantic reasons ex: select.profile.withID(2381)

		this.withID = function(id) {
			return self.data()[id];
		};

		this.allIDs = ko.computed(function() {
			return Object.keys(self.data());
		});

		this.hasID = function(id) {
			return !_.isUndefined(self.data()[id]);
		};
	};

	return Dataselect;
});