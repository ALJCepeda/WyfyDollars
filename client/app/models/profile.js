define([], function() {
	var ProfileModel = function() {
		var self = this;
		this.firstname = ko.observable();
		this.middlename = ko.observable();
		this.lastname = ko.observable();

		this.birthmonth = ko.observable();
		this.birthday = ko.observable();
		this.birthyear = ko.observable();

		this.gender = ko.observable();
		this.email = ko.observable();
		this.image = ko.observable();
		this.description = ko.observable();

		this.fullname = ko.computed(function() {
			return self.firstname() + ' ' + self.middlename() + ' ' + self.lastname();
		});
	};

	return ProfileModel;
});