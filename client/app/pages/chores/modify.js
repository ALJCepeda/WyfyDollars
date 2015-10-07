define([], function() {
	var VM = function() {
		var self = this;
		

		this.onLoad = function() {
			
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

		this.editable_chores = ko.observableArray([]);
		this.chores = ko.observableArray([
			{ id:1, name:'Garbage Cleanup', editable:ko.observable(false), description:'Trash and poop bags taken out to garbage canister' },
			{ id:2, name:'Vacuum Floor', editable:ko.observable(false), description:'Floor must be clear of all trash and all accessible corners must be cleaned' },
			{ id:3, name:'Feed Dogs', editable:ko.observable(false), description:'A single overlapping scoop of kibble for both dogs. Dogs must wait before being allowed to eat' }
		]);

		this.edit = function(id) {

			chore.editable(!chore.editable());
		};

		this.remove = function(chore) {
			self.chores.remove(chore);
		};
	};

	return new VM();
});