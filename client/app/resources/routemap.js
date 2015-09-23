define([], function(){
	var folders = [ 'overview', 'chores', 'rewards', 'penalties', 'goals', 'profiles' ];
	var routes = {};


	return {
		routes: {
			':parent':'parentRoute',
			':parent/:child':'childRoute'
		},

		chores: {
			tabmodel: {
				title: 'Chores',
				tabs: [
					{ name:'Overview', path:'#chores/overview' },
					{ name:'Modify', path:'#chores/modify' }
				]
			}
		},
		profiles: {
			tabmodel: {
				title: 'Profiles',
				tabs: [
					{ name:'Overview', path:'#profiles/overview' },
					{ name:'Modify', path:'#profiles/modify' }
				]
			}
		}
  	};
});