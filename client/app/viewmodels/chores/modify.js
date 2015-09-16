define([], function() {

	var VM = function() {
		var self = this;
		this.editable_chores = ko.observableArray([]);
		this.chores = ko.observableArray([
			{ name:'Garbage Cleanup', editable:ko.observable(false), description:'Trash and poop bags taken out to garbage canister' },
			{ name:'Vacuum Floor', editable:ko.observable(false), description:'Floor must be clear of all trash and all accessible corners must be cleaned' },
			{ name:'Feed Dogs', editable:ko.observable(false), description:'A single overlapping scoop of kibble for both dogs. Dogs must wait before being allowed to eat' }
		]);

		this.editChore = function(chore) {
			if(chore.editable()){
				chore.editable(false);
				self.editable_chores.remove(chore);
			} else {
				chore.editable(true);
				self.editable_chores.push(chore);
			}
		}

		this.removeChore = function(chore) {
			self.chores.remove(chore);
		}

		this.clearEditables = function() {
			self.editable_chores().forEach(function(chore, index) {
				chore.editable(false);
			});
			self.editable_chores([]);
		}
	}

	return new VM();
});