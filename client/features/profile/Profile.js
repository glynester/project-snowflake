
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
  usersProjects(){
    var currentUser = Meteor.userId();
    var listOfUserProjects = Projects.find({created_by: currentUser});
    var allProjects = Projects.find({});
    console.log(allProjects)


    console.log(listOfUserProjects)
    return listOfUserProjects
  },
});
Template.NewProfile.helpers({
  userHasProfile(){
    var currentUser = Meteor.userId();
    var userProfileBoolean = Profiles.findOne({created_by: currentUser});
    return userProfileBoolean;
  },
  userSignedIn(){
    var currentUser = Meteor.userId();
    return !currentUser
  },
});

Template.UpdateProfile.events({
  'submit #updateProfileForm'(event) {
    FlowRouter.go('profile');

  },
});
