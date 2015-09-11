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
					self.injectHTML(containerID, html);
					self.bindModel(containerID, vm);;
					self.refreshDOM();

					self.view = html;
					self.model = vm;
					complete();
				});
			});
		}

		this.injectStatic = function(viewpath, containerID, injectedID, complete) {
			if(!_.isFunction(complete)) { complete = function() { }; }

			this.fetchView(viewpath, function(html) {
				if(_.isUndefined(html)) { complete(); return; }

				vself.injectHTML(containerID, html);
				self.refreshDOM();

				self.view = html;
				delete self.model;
				complete();
			})
		}

		this.wrapHTML = function(ID, html) {
			var div = document.createElement('div');
			div.innerHTML = html;
			div.id = ID;

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

		this.injectHTML = function(containerID, html) {
			var selector= '#' + containerID;
			$(selector).html(html);
		}

		this.bindModel = function(containerID, model) {
			var element = $('#'+containerID)[0];
			//Remove previous bindings
			ko.cleanNode(element);
			ko.applyBindings(model, element);

			//This needs to be put somewhere else
			//Like a final page configuration after navigator loads a page
			var c = {};
		    $(".draggable tr").draggable({
	            helper: "clone",
	            start: function(event, ui) {
	                c.tr = this;
	                c.helper = ui.helper;
	               	ui.helper.position = 'absolute';
	               	ui.helper.zIndex = 2;
	            }
		    });
		}

		this.refreshDOM = function() {
			setTimeout(function() {
				componentHandler.upgradeDom();
			}, 20);
		}
	}

	return Injector;
});