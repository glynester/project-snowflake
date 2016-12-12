Template.ViewProjects.helpers({
  projects: () => {
    return Projects.find({date: {$gte: new Date() }});
  },
  noProjects(){
    var currentUser = Meteor.userId();
    var listOfProjects = Projects.find({});
    return listOfProjects.count() === 0;
  },
  userSignedIn(){
    var currentUser = Meteor.userId();
    return !!currentUser
  },
});

Template.ViewProjects.events({
  'click #filter-by-skills'(event) {
    FlowRouter.go('filtered-by-skills');
  },
});
