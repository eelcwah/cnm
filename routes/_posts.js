Blogger.PostsRoute=Ember.Route.extexd({
	controllerName: 'posts',
	renderTemplate: function(){
           this.render('posts');	
	},
	model: function(){
	   return posts;
	}
});
