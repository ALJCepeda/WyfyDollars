define(['resources/services/injector', 'widgets/profiles/navigator', 'widgets/profiles/editor'], 
	function(Injector, ProfileNavigator, ProfileEditor) {
		var Model = function() {
			var self = this;

			var injector = new Injector();

			var profileNavigator = new ProfileNavigator();
			var p = profileNavigator;
			this.p = profileNavigator; //P is for profiler
			p.showAllBtn(false);
			p.showAddBtn(true);

			var profileEditor = new ProfileEditor(p.selected);
			var e = profileEditor;
			this.e = profileEditor;

			this.onLoad = function() {
				injector.injectWidget('navigator', p, function() {
					injector.injectWidget('editor', e);	
				});
			};

			var l = p.selected;
			this.l = l; //L is for loaded profile

			this.loadProfile = function(profile) {
				l(profile);
			};
		}

		return new Model();
	}
);