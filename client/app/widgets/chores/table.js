define([], function() {
	var ChoreTable = function(viewURL){
		this.view = _.isUndefined(viewURL) ? "app/widgets/chores/table.html" : viewURL;
		var self = this;
		
		this.editable_chores = ko.observableArray([]);
		this.chores = ko.observableArray([
			{ id:1, name:'Garbage Cleanup', editable:ko.observable(false), description:'Trash and poop bags taken out to garbage canister' },
			{ id:2, name:'Vacuum Floor', editable:ko.observable(false), description:'Floor must be clear of all trash and all accessible corners must be cleaned' },
			{ id:3, name:'Feed Dogs', editable:ko.observable(false), description:'A single overlapping scoop of kibble for both dogs. Dogs must wait before being allowed to eat' }
		]);

		this.selected = ko.observable(this.chores()[0]);

		this.edit = function(id) {
			chore.editable(!chore.editable());
		};

		this.remove = function(chore) {
			self.chores.remove(chore);
		};
	}

	return ChoreTable;
});