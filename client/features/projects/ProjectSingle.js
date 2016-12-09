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
    var currentUserId = Meteor.userId();
    var profile = Profiles.findOne({created_by: currentUserId});
    var profile_id = profile._id
    Projects.update({_id: id}, {$push: {volunteers: currentUserId}});
    Profiles.update({_id: profile_id}, {$push: {projects: id}});
    FlowRouter.go('view-projects');

  }
});
