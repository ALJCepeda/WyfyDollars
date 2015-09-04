define([], function() {
	var ViewModeller = function() {
		var self = this;
		this.url = '';
		this.view = '';
		this.model = '';
		this.errors = [];

		this.inject = function(url, ID, complete) {
			self.url = url;

			$.get('app/views/' + url + '.html').fail(function(error) {
				self.errors.push(error);
			}).done(function(data) {
				var selector = '#' + ID;
				var div = document.createElement('div');
				div.innerHTML = data;
				div.id = 'injectedContentContainer';

				require(['app/models/' + url], function(vm) {
					self.model = vm;
					self.view = data;

					$(selector).html(div);
					ko.applyBindings(vm, div);
					self.refreshDOM();

					if(_.isFunction(complete)) {
						complete(div);
					}	
				});
			});			
		};

		this.refreshDOM = function() {
			setTimeout(function() {
				componentHandler.upgradeDom();
			}, 20);
		}
	}

	return ViewModeller;
});