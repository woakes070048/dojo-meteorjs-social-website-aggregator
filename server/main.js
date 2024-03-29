
Meteor.startup(function () {

  if (!Websites.findOne()){
    
    console.log("No websites yet. Creating starter data.");
    
    Websites.insert({
      title:"Goldsmiths Computing Department", 
      url:"http://www.gold.ac.uk/computing/", 
      description:"This is where this course was developed.", 
      createdOn:new Date()
    });
    
    Websites.insert({
      title:"University of London", 
      url:"http://www.londoninternational.ac.uk/courses/undergraduate/goldsmiths/bsc-creative-computing-bsc-diploma-work-entry-route", 
      description:"University of London International Programme.", 
      createdOn:new Date()
    });
    
    Websites.insert({
      title:"Coursera", 
      url:"http://www.coursera.org", 
      description:"Universal access to the world’s best education.", 
      createdOn:new Date()
    });
    
    Websites.insert({
      title:"Google", 
      url:"http://www.google.com", 
      description:"Popular search engine.", 
      createdOn:new Date()
    });
  }
});

Meteor.methods({
  'addVote': function(userId, siteId, vote){
    return addVote(userId,
      siteId,
      vote);
  }
});

function addVote(userId, 
  siteId,
  vote) {
    
    if (Votes.find({userId: userId, siteId: siteId})
      .count() == 0){
    
        if (userId && siteId && vote){
          Votes.insert({
            userId: userId,
            siteId: siteId,
            vote: vote
          });
        }
      }
      else{
        Votes.update({siteId: siteId, 
          userId: userId}, {$set: {vote: vote}});
      }
      
  }

