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
