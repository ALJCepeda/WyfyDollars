define(['resources/services/injector',
		'widgets/chores/table',
		'widgets/profiles/navigator'], 
	function(Injector, ChoreTable, ProfileNavigator) {
	var VM = function() {
		var self = this;
		
		var table = new ChoreTable();
		var t = table;
		this.table = t;

		this.selected = t.selected;

		var profiler = new ProfileNavigator();
		var p = profiler;
		this.profiler = p;

		p.ID.didSelect = function(id) {
			var element = p.ID.element(id);
			element.border = 3;
		};
		p.ID.didDeselect = function(id) {
			var element = p.ID.element(id);
			element.border = 0;
		};

		this.onLoad = function() {
			var injector = new Injector();
			injector.injectManyWidgets([
				['chores', t],
				['profiler', p]
			]);
		};
		
		this.onAction = function(param) {
			var steps = param.split("/");
			var action = steps[0];

			console.log(action);
			switch(action) {
				case 'edit':
					var id = param[1];
					this.edit(id);
			}
		}
	};

	return new VM();
});