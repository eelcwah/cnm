//Blogger.Router.reopen({
  //      location: 'none'
//}
//);


Blogger.Router.map(function(){
	this.resource('posts',{path:'/'});
	this.resource('about',{path:'about-us'});
	this.resource('contact',function(){
	this.resource('phone');
	this.resource('email');
	})
}
);



