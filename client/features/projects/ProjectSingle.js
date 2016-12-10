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
    alreadyVolunteered: () => {
      var id = FlowRouter.getParam('id');
      var project = Projects.findOne({_id: id});
      var currentUserId = Meteor.userId();
      return project.volunteers.indexOf(currentUserId) > -1;
    },

});

Template.ProjectSingle.events({
  'click #delete-project' (){
    var id = FlowRouter.getParam('id');
    Meteor.call('deleteProject', id)
    FlowRouter.go('view-projects');
  },
  'click #volunteer-for-project' (){
    var id = FlowRouter.getParam('id');
    var project = Projects.findOne({_id: id});
    // var projectCreatedBy = project.created_by;
    var currentUserId = Meteor.userId();
    var profile = Profiles.findOne({created_by: currentUserId});
    var profile_id = profile._id
    if (project.volunteers === undefined ){
      Meteor.call('updateUsersProjects', profile_id, id);
      Meteor.call('updateProjectVolunteers', id, currentUserId);
    } else if (project.volunteers.indexOf(currentUserId) > -1){
    } else {
      Meteor.call('updateUsersProjects', profile_id, id);
      Meteor.call('updateProjectVolunteers', id, currentUserId);
    };
    FlowRouter.go('view-projects');
  },
  'click #unvolunteer' (){
    var id = FlowRouter.getParam('id');
    var project = Projects.findOne({_id: id});
    var currentUserId = Meteor.userId();
    var profile = Profiles.findOne({created_by: currentUserId});
    var profile_id = profile._id;
    Meteor.call('removeProjectfromProfile', profile_id, id);
    Meteor.call('removeUserFromProject', id, currentUserId);
    FlowRouter.go('view-projects');
  }
});
