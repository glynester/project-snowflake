Template.ProjectSingle.helpers({
    project: () => {
        var id = FlowRouter.getParam('id');
        return Projects.findOne({_id: id});
    },
    currentUserProject: () => {
        var currentUserId = Meteor.userId();
        var projectId = FlowRouter.getParam('id');
        var currentProject = Projects.findOne({_id: projectId});
        return currentProject.created_by === currentUserId;
    }
});

Template.ProjectSingle.events({
  'click #delete-project' (){
    var id = FlowRouter.getParam('id');
    Projects.remove({_id: id});
    FlowRouter.go('view-projects');

  }
});
