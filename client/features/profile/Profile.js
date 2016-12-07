
Template.Profile.helpers({
  profile(){
    var currentUser = Meteor.userId();
    var userProfile = Profiles.findOne({created_by: currentUser});
    return userProfile;
  },
});

Template.UpdateProfile.helpers({
  getUserProfile(){
    var currentUser = Meteor.userId();
    var userProfile = Profiles.findOne({created_by: currentUser});
    return userProfile;
  },
});
