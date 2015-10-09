define([], function() {
	var ProfileCard = function(profileOBS, viewURL) {
		this.view = _.isUndefined(viewURL) ? "app/widgets/profiles/card.html" : viewURL;

		var self = this;
		this.profile = profileOBS;
		var p = this.profile
		this.p =  p//L is for loaded profile
	};

	return ProfileCard;
});