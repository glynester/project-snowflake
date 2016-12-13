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
    var volunteers = project.volunteers;
    console.log(volunteers);
    Meteor.call('setProjectStatus', project);
    Meteor.call('deleteNullProjSkills', project);
    Meteor.call('sendEmail',
                Meteor.user().emails[0].address,
                project.volunteersEmail,
                'Hello from Snowflake!',
                project.description);
    FlowRouter.go('view-projects');
  },
});
