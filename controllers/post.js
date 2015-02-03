Blogger.PostController = Ember.ObjectController.extend({
	isEditing: false,
	actions: {
		edit: function(){
			alert('hit');
			this.set('isEditing',true);
		},
		save: function(){
			this.set('isEditing',false);
			this.transitionToRoute('posts');
		},
		delete: function(){
			if (confirm('Are you sure?')){
				this.get('model').destroyRecord();
				this.transitionToRoute('posts');
			}
		}
	}

});
