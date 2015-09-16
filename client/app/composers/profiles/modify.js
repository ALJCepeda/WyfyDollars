define(['mocks/profiles'],
	function(datasource) {
		var Composer = function() {
			var self = this;

			this.profiles = datasource;
		}
		
		return new Composer();
	}
);