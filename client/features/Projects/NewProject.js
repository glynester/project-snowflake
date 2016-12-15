Template.NewProject.helpers({
  userHasProfile(){
    var currentUser = Meteor.userId();
    var userProfileBoolean = Profiles.findOne({created_by: currentUser});
    return userProfileBoolean;
  },
});

Template.NewProject.events({
  'click #create-profile'(event) {
    FlowRouter.go('new-profile');
  },
});
