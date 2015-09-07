define([], function(){
	return {
		routes: {
			'overview':'overview',
			'chores':'chores',
			'rewards':'rewards',
			'penalties':'penalties',
			'goals':'goals',
			'profiles':'profiles'
		},

		chores: {
			title: 'Chores',
			tabs: [
				{ name:'Overview', href:'#chores/overview', placeholder:'This is the overview page' },
				{ name:'Assign', href:'#chores/assign', placeholder:'This is the assign page' },
				{ name:'Modify', href:'#chores/modify', placeholder:'This is the modify page' },
				{ name:'Create', href:'#chores/create', placeholder:'This is the create page' }
			]
		}
  	};
});