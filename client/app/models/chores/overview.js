define(['services/injector'], function(Injector) {
	var modeller = new Injector();

	var Navigation = function() {
		this.modeller = new Injector();

		this.display = function(name, options) {
			if(typeof options['tabs'] !== 'undefined') {

			}
		}
	}

	return new Navigation();
});