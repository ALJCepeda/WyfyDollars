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

			this.selectedID = ko.observable(1392);
			this.selectedProfile = ko.computed(function() {
				return n.ds.profile(self.selectedID());
			});
			var p = this.selectedProfile;
			this.p = p; //p is for profile

			var profileEditor = new ProfileEditor(p);
			var e = profileEditor; //E is for editor
			this.e = profileEditor;

			var profileCard = new ProfileCard(p);
			var c = profileCard;
			this.c = profileCard;

			n.ID.clicked = function(id) {
				self.selectedID(id)
			};
			n.ID.doubleClicked = function(id) {
				console.log("Double clicked " + id);
			};

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