
Template.UpdateProfile.helpers({
  getUserProfile(){
    var currentUser = Meteor.userId();
    var userProfile = Profiles.findOne({created_by: currentUser});
    return userProfile;
  },
});

Template.Profile.helpers({
  profile(){
    var currentUser = Meteor.userId();
    var userProfile = Profiles.findOne({created_by: currentUser});
    return userProfile;
  },
});
Template.NewProfile.helpers({
  userHasProfile(){
    var currentUser = Meteor.userId();
    console.log("test");
    var userProfileBoolean = Profiles.findOne({created_by: currentUser});
    console.log("HELP!");
    console.log(userProfileBoolean);
    return userProfileBoolean;
  },
});
