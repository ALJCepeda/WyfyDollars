define(['resources/services/injector', 'widgets/profiles/navigator'], 
	function(Injector, ProfileNavigator) {
		var Model = function() {
			var self = this;

			var injector = new Injector();
			var p = new ProfileNavigator();
			this.p = p; //P is for profiler
			p.showAllBtn(false);
			p.showAddBtn(true);
			
			this.onLoad = function() {
				injector.injectWidget('profiler', p);
			};

			var l = p.selected;
			this.l = l; //L is for loaded profile

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
				debugger;
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
		}

		return new Model();
	}
);