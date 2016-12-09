Template.ViewProjects.helpers({
  projects: () => {
    return Projects.find({});
  },
  noProjects(){
    var currentUser = Meteor.userId();
    var listOfUserProjects = Projects.find({created_by: currentUser});
    return listOfUserProjects.count() === 0;
  },
});
