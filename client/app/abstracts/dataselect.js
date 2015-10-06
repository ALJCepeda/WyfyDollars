   define([], function() {
	var Dataselect = function(data, semanticID) {
		var self = this;
		this.data = data;
		this[semanticID] = this; //Used strictly for semantic reasons ex: select.profile.withID(2381)

		this.withID = function(id) {
			return self.data.detailed[id];
		};

		this.allIDs = function() {
			return Object.keys(self.data.detailed);
		};

		this.hasID = function(id) {
			return !_.isUndefined(self.data.detailed[id]);
		};

		this.delete = function(id) {
			delete this.data[id];
		};
	};

	return Dataselect;
});