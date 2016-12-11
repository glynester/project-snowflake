Template.ViewProjects.helpers({
  projects: () => {
    return Projects.find({date: {$gte: new Date() }});
  },
  noProjects(){
    var currentUser = Meteor.userId();
    var listOfProjects = Projects.find({});
    return listOfProjects.count() === 0;
  },
});
