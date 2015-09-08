define([], function(){
	return {
		routes: {
			'overview':'overview',
			'overview/:child':'overviewChild',

			'chores':'chores',
			'chores/:child':'choresChild',

			'rewards':'rewards',
			'penalties':'penalties',
			'goals':'goals',
			'profiles':'profiles'
		},

		chores: {
			tabmodel: {
				title: 'Chores',
				tabs: [
					{ name:'Overview', path:'#chores/overview', placeholder:'This is the overview page' },
					{ name:'Modify', path:'#chores/modify', placeholder:'This is the modify page' }
				]
			}
		}, 

		overview: {
			tabmodel: {
				title: 'Shawn\s Overview',
				tabs: [
					{ name:'Wyfy', path:'#overview/kennel', placeholder:'This is the Wyfy page' },
					{ name:'Pixel', path:'#overview/kennel', placeholder:'This is the pixel page' }
				]
			}
		}
  	};
});