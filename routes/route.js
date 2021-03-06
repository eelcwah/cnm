Blogger.RecentCommentsRoute = Ember.Route.extend({
	model: function (){
	 return comments;
	}
});

Blogger.PostsRoute = Ember.Route.extend({
        controllerName: 'posts',
        renderTemplate: function(){
           this.render('posts');
        },
        model: function(){
           return posts;
        }
});


Blogger.PostRoute = Ember.Route.extend({
	model: function(params) {
	return posts.findby('id',params.post_id);
	}
});

