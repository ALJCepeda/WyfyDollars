define(['services/injector'],
	function(Injector) {
		var Navigator = function() {
			var self = this;
			this.injector = new Injector();

			this.display = function(path, options, complete) {
				if(_.isUndefined(options)) {
					options = {};
				}

				if(_.isUndefined(complete)) {
					complete = function() { };
				}

				var containerID = !_.isUndefined(options.containerID) ? options.containerID : 'pageContainer';
				var injectedID = !_.isUndefined(options.injectedID) ? options.injectedID : 'injectedContent';
				if(_.isUndefined(options.tabs)) {
					//This page doesn't want a tabbar
					//We assume there's an index page at the end of path that needs to be injected
					var nomodel = !_.isUndefined(options.nomodel) ? options.nomodel : false; //By default we attempt to bind a model to the view
					$('#navigation_tabbar').css('display', 'none'); //Tabbar is not needed if we're injecting an index page
					self.displayIndex(path, containerID, injectedID, nomodel, complete);
				} else {
					$('#navigation_tabbar').css('display', 'block');
					self.bindTabs(options);
				}
			}

			this.bindTabs = function(tabs) {
				debugger;
				ko.applyBindings(tabs, $('#navigation_tabbar')[0]);
			}

			this.displayIndex = function(path, containerID, injectedID, nomodel) {
				var viewpath = 'app/views/'+ path +'/index.html';

				if(_.isUndefined(nomodel) || nomodel === false) {
					var modelpath = 'models/' + path + '/index';
					this.injector.injectDynamic(viewpath, modelpath, containerID, injectedID);
				} else {
					this.injector.injectStatic(viewpath, containerID, injectedID);
				}
			}
		}

		return Navigator;
	}
);