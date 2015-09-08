define([], function() {
	var Injector = function() {
		var self = this;
		this.view;
		this.model;
		this.errors = [];

		this.injectDynamic = function(viewpath, modelpath, containerID, injectedID, complete) {
			if(!_.isFunction(complete)) { complete = function() { }; }

			self.fetchView(viewpath, function(html) {
				if(_.isUndefined(html)) { complete(); return; }
		
				self.fetchModel(modelpath, function(vm) {
					var div = self.injectHTML(containerID, injectedID, html);
					self.bindModel(vm, div);
					self.refreshDOM();

					self.view = div;
					self.model = vm;
					complete();
				});
			});
		}

		this.injectStatic = function(viewpath, containerID, injectedID, complete) {
			if(!_.isFunction(complete)) { complete = function() { }; }

			this.fetchView(viewpath, function(html) {
				if(_.isUndefined(html)) { complete(); return; }

				var div = self.injectHTML(containerID, injectedID, html);
				self.refreshDOM();

				self.view = div;
				delete self.model;
				complete();
			})
		}

		this.wrapHTML = function(ID, html) {
			var div = document.createElement('div');
			div.innerHTML = html;
			div.id = 'ID';

			return div;
		}

		this.fetchModel = function(modelpath, complete) {
			require([modelpath], function(vm) {
				complete(vm);
			});
		}

		this.fetchView = function(viewpath, complete) {
			$.get(viewpath).fail(function(error) {
				self.errors.push(error);
				complete();
			}).done(function(data) {
				complete(data);
			});
		}

		this.injectHTML = function(containerID, injectedID, html) {
			var div = this.wrapHTML(injectedID, html);
			var selector= '#' + containerID;
			$(selector).html(div);

			return div;
		}

		this.bindModel = function(model, element) {
			ko.applyBindings(model, element);
		}

		this.refreshDOM = function() {
			setTimeout(function() {
				componentHandler.upgradeDom();
			}, 20);
		}
	}

	return Injector;
});