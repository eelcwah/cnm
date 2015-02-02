Blogger.ContactController = Ember.Controller.extend({
  messageSent: false,
  actions: {
    showSecret: function(){
      var message=prompt("inout");
      this.set('confirmationNo',Math.round(Math.random()*100000));
      this.set('messageSent',true);
      
    }
    
  }
}
);

Blogger.AboutController = Ember.Controller.extend({
  isPictureShowing: false,
  actions: {
    showRealName: function(){
      alert ("hello");
      },
      showPicture: function(){
        this.set('isPictureShowing',true);
      },
      hidePicture: function(){
        this.set('isPictureShowing',false);
      }

  }
}
);


