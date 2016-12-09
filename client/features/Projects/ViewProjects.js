Template.ViewProjects.helpers({
  projects: () => {
    return Projects.find({});
  },
  noProjects(){
    var currentUser = Meteor.userId();
    var listOfProjects = Projects.find({});
    return listOfProjects.count() === 0;
  },
});
