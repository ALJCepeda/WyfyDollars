define([], function() {
	var ViewModeller = function() {
		var self = this;
		this.url = '';
		this.view = '';
		this.model = '';
		this.errors = [];

		this.inject = function(ID, view, model) {
			var selector = '#' + ID;
			$(selector).html(view);
		};

		this.fetch = function(url, selector) {
			self.url = url;
			$.get('app/views/' + url + '.html').fail(function(error) {
				self.errors.push(error);
			}).done(function(data) {
				self.view = data;

				$.get('app/models/' + url + '.js').fail(function(error) {
					self.errors.push(error);
				}).done(function(data) {
					self.model = data;

					if(_.isString(selector) && !_.isEmpty(selector)) {
						self.inject(selector, self.view, self.model);
					}
				});
			});			
		};	
	}

	return ViewModeller;
});