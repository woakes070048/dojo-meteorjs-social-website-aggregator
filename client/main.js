
Accounts.ui.config({
  passwordSignupFields: "USERNAME_AND_EMAIL"
});

Template.body.helpers({
  
  userName: function(){
    
    if (Meteor.user()){
      
      return Meteor.user().username;
    }
    else{
      
      return "Anonymous";
    }
  }
  
});

Template.websites.helpers({
  
  websites: function(){
	  return Websites.find();
  }
});

Template.websites.events({
  
  'click .js-show-website-form': function (event) {
    
    $("#website_add_form").modal('show');
  }
});

Template.website_add_form.events({
  
  'submit .js-add-website': function(event){
    
    var title = event.target
      .website_title.value;
    
    var description = event.target
      .website_description.value;
      
    var url = event.target
      .website_url.value;
    
    if (Meteor.user()) {
      Websites.insert({
        
        title: title,
        description: description,
        url: url,
        createdOn: new Date(),
        createdBy: Meteor.user()._id
      });
    }
    
    $("#website_add_form").modal('hide');
    
    return false;
  }
  
});
