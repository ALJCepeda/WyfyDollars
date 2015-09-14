define([], function() {

	var Model = function() {
		var self = this;
		
		this.profiles = ko.observableArray([
			{ name:'Damian Bonacci', description: '', image:'https://scontent-sea1-1.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/181948_10150417588385328_7691984_n.jpg?oh=d745c3cc5226d9dc8f96b1b882c8d30d&oe=566A4013' },
			{ name:'Kassie Bonacci', description: 'Enter description here', image:'' }
		]);

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

		this.selectedMonth = ko.observable('January');
		this.selectedDay = ko.observable(1);
		this.selectedYear = ko.observable(2000);

		this.months = function() {
			return Object.keys(self.calendar);
		};
		this.days = ko.pureComputed(function() {
			return self.calendar[self.selectedMonth()];
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
});