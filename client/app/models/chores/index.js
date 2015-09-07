define(['services/viewmodeller'], function(ViewModeller) {
	var modeller = new ViewModeller();

	var Navigation = function() {
		this.tabs = [
			{ name:'Overview', href:'#chores/overview', placeholder:'This is the overview page' },
			{ name:'Assign', href:'#chores/assign', placeholder:'This is the assign page' },
			{ name:'Modify', href:'#chores/modify', placeholder:'This is the modify page' },
			{ name:'Create', href:'#chores/create', placeholder:'This is the create page' }
		];
	}

	return new Navigation();
});