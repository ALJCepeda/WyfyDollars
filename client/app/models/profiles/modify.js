define([], function() {

	var Model = function() {
		this.profiles = ko.observableArray([
			{ name:'Damian Bonacci', description: 'A tenacious child that loves legos, video games, nerf guns and wheezing when he laughs', image:'https://scontent-sea1-1.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/181948_10150417588385328_7691984_n.jpg?oh=d745c3cc5226d9dc8f96b1b882c8d30d&oe=566A4013' },
			{ name:'Kassie Bonacci', description: 'Enter description here', image:'' }
		]);
	}
	
	return new Model();
});