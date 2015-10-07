define([], function() {
	var Injector = function() {
		var self = this;
		this.view;
		this.model;
		this.errors = [];
 		
 		this.inject = function(containerID, html, model, complete, isWidget) {
 			self.injectHTML(containerID, html, isWidget);

 			self.refreshDOM(function() {
 				self.bindModel(containerID, model);
 				
 				self.view = html;
 				self.model = model;

 				if(_.isFunction(complete)) { complete(); }
 			});
 		};

 		this.injectWidget = function(containerID, widget, complete) {
			self.fetchView(widget.view, function(html) {
				self.inject(containerID, html, widget, function() {
					if(_.isFunction(complete)) { complete(); }
				}, true);
			});
 		}

 		this.injectView = function(containerID, html, complete) {
 			self.injectHTML(containerID, html);

 			self.refreshDOM(function() {
 				self.view = html;
 				self.model = {};

 				if(_.ifFunction(complete)) { complete(); };
 			})
 		};

		this.injectDynamic = function(containerID, viewpath, modelpath, complete) {
			if(!_.isFunction(complete)) { complete = function() { }; }

			self.fetchView(viewpath, function(html) {
				if(_.isUndefined(html)) { complete(); return; }
		
				self.fetchModel(modelpath, function(vm) {
					self.inject(containerID, html, vm, complete);
				});
			});
		};

		this.injectStatic = function(containerID, viewpath, complete) {
			if(!_.isFunction(complete)) { complete = function() { }; }

			this.fetchView(viewpath, function(html) {
				if(_.isUndefined(html)) { complete(); return; }

				self.injectView(containerID, html, complete);
			});
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

		this.injectHTML = function(containerID, html, isWidget) {
			var selector= '#' + containerID;
			//There was an issue with $().html throwing a deprecated warning
			//When injecting multiple widgets
			$(selector)[0].innerHTML = html;
		}

		this.bindModel = function(containerID, model) {
			var element = $('#'+containerID)[0];

			if(! _.isUndefined(element)) {
				//Remove previous bindings
				ko.cleanNode(element);
				ko.applyBindings(model, element);
			}

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

		this.refreshDOM = function(callback, delay) {
			delay = _.isUndefined(delay) ? 20 : delay;
			setTimeout(function() {
				//componentHandler.upgradeDom();
				callback();
			}, delay);
		}
	}

	return Injector;
});