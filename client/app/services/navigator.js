define(['services/injector'],
	function(Injector) {
		var Navigator = function() {
			var self = this;
			this.path;
			this.injector = new Injector();
			this.model = ko.observable({
				title: 'Title',
				tabs: {}
			});

			ko.applyBindings(this.model, $('#navigation_tabbar')[0]);

			this.display = function(path, options, complete) {
				if(_.isUndefined(options)) { options = {}; }
				if(_.isUndefined(complete)) { complete = function() {}; }

				var containerID = !_.isUndefined(options.containerID) ? options.containerID : 'pageContainer';
				var injectedID = !_.isUndefined(options.injectedID) ? options.injectedID : 'injectedContent';
				if(_.isUndefined(options.tabmodel)) {
					//This page doesn't want a tabbar
					//We assume there's an index page at the end of path that needs to be injected
					var nomodel = !_.isUndefined(options.nomodel) ? options.nomodel : false; //By default we attempt to bind a model to the view
					$('#navigation_tabbar').css('display', 'none'); //Tabbar is not needed if we're injecting an index page
					self.displayIndex(path, containerID, injectedID, nomodel, complete);
				} else {
					$('#navigation_tabbar').css('display', 'block');
					self.bindModel(options.tabmodel);
				}
			}

			this.displayIndex = function(path, containerID, injectedID, nomodel) {
				this.displayView(path+'/index', containerID, injectedID, nomodel);
			}

			this.displayView = function(path, containerID, injectedID, nomodel) {
				var viewpath = 'app/views/'+ path +'.html';

				if(_.isUndefined(nomodel) || nomodel === false) {
					var modelpath = 'models/' + path;
					this.injector.injectDynamic(viewpath, modelpath, containerID, injectedID,
						function() {
							self.path = path;
					});
				} else {
					this.injector.injectStatic(viewpath, containerID, injectedID,
						function() {
							self.path = path;
					});
				}
			}
			this.bindModel = function(model) {
				self.model(model);
			}
		}

		return Navigator;
	}
);