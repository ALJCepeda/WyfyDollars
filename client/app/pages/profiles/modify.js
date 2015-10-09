define(['resources/services/injector', 
		'widgets/profiles/navigator', 
		'widgets/profiles/editor',
		'widgets/profiles/card'], 
	function(Injector, ProfileNavigator, ProfileEditor, ProfileCard) {
		var Model = function() {
			var self = this;

			var profileNavigator = new ProfileNavigator();
			var n = profileNavigator;
			this.n = profileNavigator; //n is for Navigator
			n.showAllBtn(false);
			n.showAddBtn(true);

			var p = n.selected;
			this.p = p; //p is for profile

			var profileEditor = new ProfileEditor(p);
			var e = profileEditor; //E is for editor
			this.e = profileEditor;

			var profileCard = new ProfileCard(p);
			var c = profileCard;
			this.c = profileCard;

			this.onLoad = function() {
				var injector = new Injector();
				injector.injectManyWidgets([
					[ 'navigator', n ],
					[ 'editor', e ],
					[ 'card', c ]
				]);
			};

			this.loadProfile = function(profile) {
				p(profile);
			};
		}

		return new Model();
	}
);