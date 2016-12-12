
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
    var listOfUserProjects = Projects.find({created_by: currentUser,
                                            date: {$gte: new Date() }});
    return listOfUserProjects
  },
  noProjects(){
    var currentUser = Meteor.userId();
    var listOfUserProjects = Projects.find({created_by: currentUser});
    return listOfUserProjects.count() === 0;
  },
  notVolunteering(){
    var currentUser = Meteor.userId();
    var userProfile = Profiles.findOne({created_by: currentUser});
    var projectIds = userProfile.projects;
    return projectIds === undefined
  },
  volunteerProjects(){
    var currentUser = Meteor.userId();
    var userProfile = Profiles.findOne({created_by: currentUser});
    var projectIds = userProfile.projects;
    var listOfVolunteerProjects = Projects.find({_id: {$in: projectIds},
                                                date: {$gte: new Date()}});
    return listOfVolunteerProjects
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

Template.NewProfile.events({
  'submit #insertProfileForm'(event) {
    FlowRouter.go('main');
  },

});

Template.UpdateProfile.events({
  'submit #updateProfileForm'(event) {
    var currentUser = Meteor.userId();
    var userProfile = Profiles.findOne({created_by: currentUser});
    var skills = userProfile.skills
    Meteor.call('deleteNullSkills', userProfile, skills);
    FlowRouter.go('profile');
  },
});
