define(['resources/services/injector'],
	function(Injector) {
		var Navigator = function() {
			var self = this;
			this.path;
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
					this.displayView(containerID, path+'/index', complete, nomodel);
				} else {
					$('#navigation_tabbar').css('display', 'block');
					self.model(options.tabmodel);
				}
			}

			this.displayView = function(containerID, path, complete, nomodel) {
				complete = (_.isUndefined(complete)) ? function() { } : complete;
				nomodel = (_.isUndefined(nomodel)) ? false : nomodel;

				var viewpath = 'app/pages/'+ path +'.html';
				var injector = new Injector();

				if(nomodel === false) {
					var modelpath = 'pages/' + path;
					injector.injectDynamic(containerID, viewpath, modelpath,
						function() {
							self.path = path;

							//Call onLoad on model if one exists
							if(_.isFunction(injector.model.onLoad)) {
								injector.model.onLoad();
							}

							complete(injector);
					});
				} else {
					injector.injectStatic(containerID, viewpath,
						function() {
							self.path = path;
							complete(injector);
					});
				}
			}
		}

		return new Navigator();
	}
);