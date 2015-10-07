define([], function() {
	var ProfileEditor = function(profileOBS) {
		var self = this;
		this.profile = ko.observable(profileOBS);
		this.l =  this.profile//L is for loaded profile

		this.calendar = {
			'January' : 31,
			'February' : 28,
			'March' : 31,
			'April' : 30,
			'May' : 31,
			'June' : 30,
			'July' : 31,
			'August': 31,
			'September' : 30,
			'October' : 31,
			'November' : 30,
			'December' : 31
		};

		this.editing = ko.observable();
		this.editing_first = ko.observable(false);
		this.editing_middle = ko.observable(false);
		this.editing_last = ko.observable(false);
		this.editing_grade = ko.observable(false);
		this.editing_email = ko.observable(false);
		this.editing_image = ko.observable(false);
		this.editing_description = ko.observable(false);

		this.edit = function(field) {
			self['editing_'+field](true);
			self.editing(field);
		};
		this.stopEdit = function(isEdit) {
			if(!isEdit) {
				self.editing('');
			}
		}
		this.isEditing = ko.computed(function(field) {
			return (self.editing() === field);
		});

		this.loadProfile = function(profile) {
			l(profile);
		};

		this.months = function() {
			return Object.keys(self.calendar);
		};
		this.days = ko.pureComputed(function() {
			var result = [];

			for(var day=1; day <= self.calendar[l().birthmonth()]; day++) {
				result.push(day);
			}

			return result;
		});
		this.years = function() {
			var result = [];
			for (var year = 2015; year >= (2015-80); year--) {
				result.push(year);
			};

			return result;
		};
	};

	return ProfileEditor
});