
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
    return listOfUserProjects
  },
  volunteerProjects(){
    var currentUser = Meteor.userId();
    var userProfile = Profiles.findOne({created_by: currentUser});
    var projectIds = userProfile.projects;
    var listOfVolunteerProjects = Projects.find({_id: {$in: projectIds}});
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

Template.UpdateProfile.events({
  'submit #updateProfileForm'(event) {
    var currentUser = Meteor.userId();
    var userProfile = Profiles.findOne({created_by: currentUser});
    var skills = userProfile.skills
    if(skills !== undefined) {
      skills = skills.filter(function(n){ return n != undefined });
    };
    Profiles.update(userProfile._id, { $set: { skills: skills } });
    FlowRouter.go('profile');
  },
});
