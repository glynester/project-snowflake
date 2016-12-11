Template.UpdateProject.helpers({
  project: () => {
    var id = FlowRouter.getParam('id');
    return Projects.findOne({_id: id});
  }
});

Template.UpdateProject.events({
  'submit #updateProjectForm'(event) {
    var id = FlowRouter.getParam('id');
    var project =  Projects.findOne({_id: id});
    Meteor.call('setProjectStatus', project);
    FlowRouter.go('view-projects');
  },
});
