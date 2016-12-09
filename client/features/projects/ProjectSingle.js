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
    },
    getStatus: () => {
      var projectId = FlowRouter.getParam('id');
      var currentProject = Projects.findOne({_id: projectId});
      switch (currentProject.status) {
        case 0:
        return "More volunteers needed";
        break;
        case 1:
        return "Going ahead - more spaces available";
        break;
        case 2:
        return "Going ahead - no spaces left";
        break;
        case 3:
        return "Taken place";
        break;
        case 4:
        return "Abandoned";
        break;
      }
    },
    volunteersRequired: () => {
        var id = FlowRouter.getParam('id');
        project = Projects.findOne({_id: id});
        if (project.volunteers === undefined) {
          var heads = project.minPeople
        } else {
          var heads = project.minPeople - project.volunteers.length
        }
        return heads
    },

});

Template.ProjectSingle.events({
  'click #delete-project' (){
    var id = FlowRouter.getParam('id');
    Projects.remove({_id: id});
    FlowRouter.go('view-projects');

  },
  'click #volunteer-for-project' (){
    var id = FlowRouter.getParam('id');
    // var project = Projects.findOne({_id: id});
    // var projectCreatedBy = project.created_by;
    var currentUserId = Meteor.userId();
    var profile = Profiles.findOne({created_by: currentUserId});
    var profile_id = profile._id
    Projects.update({_id: id}, {$push: {volunteers: currentUserId}});
    Profiles.update({_id: profile_id}, {$push: {projects: id}});
    FlowRouter.go('view-projects');

  }
});
