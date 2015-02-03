Blogger.PostsController = Ember.ArrayController.extend({
	//sortProperties: ['date', 'time'],
	actions: {
		sortByTitle: function(){
			console.log('sort title');
			console.log('title');
			this.set('sortProperties',['title']);
			var temp=this.getProperties('sortProperties');
			console.log(temp);
		}
	} 				
});
