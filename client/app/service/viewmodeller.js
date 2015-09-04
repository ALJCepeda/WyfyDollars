define([], function() {
	var ViewModeller = function() {
		var self = this;
		this.url = '';
		this.view = '';
		this.viewmodel = '';
		this.errors = [];

		var do_injection = function(selector) {
			debugger;
			$(selector).html(self.view);
		};

		this.inject = function(url, selector) {
			self.url = url;
			$.get('app/views/' + url + '.html').fail(function(error) {
				self.errors.push(error);
			}).done(function(data) {
				self.view = data;

				$.get('app/models/' + url + '.js').fail(function(error) {
					self.errors.push(error);
				}).done(function(data) {
					self.viewmodel = data;
					do_injection(selector);
				});
			});			
		};	
	}

	return ViewModeller;
});