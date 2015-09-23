define(['viewmodels/widgets/profiler'], function(Profiler) {
	var VM = function() {
		var self = this;
		
		var p = new Profiler();
		this.p = p; //p is for profiler
		p.showAllBtn(true);

		this.onLoad = function() {
			p.injectSelf('profiler');
		};
		

		this.editable_chores = ko.observableArray([]);
		this.chores = ko.observableArray([
			{ id:1, name:'Garbage Cleanup', editable:ko.observable(false), description:'Trash and poop bags taken out to garbage canister' },
			{ id:2, name:'Vacuum Floor', editable:ko.observable(false), description:'Floor must be clear of all trash and all accessible corners must be cleaned' },
			{ id:3, name:'Feed Dogs', editable:ko.observable(false), description:'A single overlapping scoop of kibble for both dogs. Dogs must wait before being allowed to eat' }
		]);

		this.editChore = function(chore) {
			chore.editable(!chore.editable());
		};

		this.removeChore = function(chore) {
			self.chores.remove(chore);
		};
	};

	return new VM();
});