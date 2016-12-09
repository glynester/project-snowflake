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

  },
  'click #volunteer-for-project' (){
    var id = FlowRouter.getParam('id');
    var project = Projects.findOne({_id: id});
    var currentUserId = Meteor.userId();
    console.log(project.skill)
    console.log(project.volunteer)
    // Projects.update-pushArray(project, { $set: { volunteers: currentUserId } });
    FlowRouter.go('view-projects');

  }
});
