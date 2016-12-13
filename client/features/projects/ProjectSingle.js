
function currentProject(){
  var id = FlowRouter.getParam('id');
  return Projects.findOne({_id: id});
};

function currentUserId(){
  return Meteor.userId();
};

function currentUserProfile(){
  return Profiles.findOne({created_by: currentUserId()});
};

Template.ProjectSingle.helpers({
  project: () => {
    return currentProject()
  },
  currentUserProject: () => {
    return currentProject().created_by === currentUserId();
  },
  getStatus: () => {
    switch (currentProject().status) {
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
    if (currentProject().volunteers === undefined) {
      var heads = currentProject().minPeople
    } else {
      var heads = currentProject().minPeople - currentProject().volunteers.length
    }
    return heads
  },

  goingAhead: () => {
    if (currentProject().volunteers === undefined) {
      return false;
    } else  {
      return currentProject().volunteers.length >= currentProject().minPeople;
    }
  },

  spacesLeft: () => {
    if (currentProject().volunteers.length < currentProject().maxPeople) {
      return currentProject().maxPeople - currentProject().volunteers.length
    } else  {
      return 0
    }
  },

  spacesLeftBoolean: () => {
    if (currentProject().volunteers === undefined){
      return true
    } else {
      return currentProject().volunteers.length < currentProject().maxPeople;
    }
  },

  alreadyVolunteered: () => {
    return currentProject().volunteers.indexOf(currentUserId()) > -1;
  },
  userSignedIn(){
    var currentUser = Meteor.userId();
    return !!currentUser
  },
  userImages: () => {
    var volunteerIds = currentProject().volunteers;
    return volunteerIds.map(function(id) {
      var profile = Profiles.findOne({created_by: id});
      var imageId = profile.profileimage;
      return Images.findOne({_id: imageId});
    });
  }
});

Template.ProjectSingle.events({
  'click #delete-project' (){
    var id = FlowRouter.getParam('id');
    Meteor.call('deleteProject', id)
    FlowRouter.go('view-projects');
  },
  'click #volunteer-for-project' (){
    var id = FlowRouter.getParam('id');
    var profile_id = currentUserProfile()._id
    if (currentProject().volunteers === undefined ){
      var volunteers = 1
      Meteor.call('updateUsersProjects', profile_id, id);
      Meteor.call('updateProjectVolunteers', id, currentUserId(), currentProject(), volunteers);
      Meteor.call('sendEmail',
                  Meteor.user().emails[0].address,
                  'Hello from Snowflake!',
                  'You\'ve volunteered for a new project!!');
    } else if (currentProject().volunteers.indexOf(currentUserId) > -1){
    } else {
      var volunteers = currentProject().volunteers.length + 1
      Meteor.call('updateUsersProjects', profile_id, id);
      Meteor.call('updateProjectVolunteers', id, currentUserId(), currentProject(), volunteers);
      Meteor.call('sendEmail',
                  Meteor.user().emails[0].address,
                  'Hello from Snowflake!',
                  'You\'ve volunteered for a new project!!');
    };
    FlowRouter.go('view-projects');
  },
  'click #unvolunteer' (){
    var id = FlowRouter.getParam('id');
    var profile_id = currentUserProfile()._id;
    var volunteers = currentProject().volunteers.length - 1
    Meteor.call('removeProjectfromProfile', profile_id, id);
    Meteor.call('removeUserFromProject', id, currentUserId(), currentProject(), volunteers);
    FlowRouter.go('view-projects');
  }
});

Template.projectListingMap.helpers({
  mapOptions: () => {
    var projectId = FlowRouter.getParam('id');
    var project = Projects.findOne({_id: projectId});
    var location = project.location;
    var long = location.split(",");
    var longAndLat =  long.map(Number);
    if (GoogleMaps.loaded()) {
      var map = {
        center: new google.maps.LatLng(longAndLat[0],longAndLat[1]),
        zoom:13
      };
    }
    return map
  }
});

Template.projectListingMap.onCreated(function() {

  GoogleMaps.ready('map', function(map) {
    var projectId = FlowRouter.getParam('id');
    var project = Projects.findOne({_id: projectId});
    var location = project.location;
    var long = location.split(",");
    var longAndLat =  long.map(Number);

    marker = new google.maps.Marker({
      position: new google.maps.LatLng(longAndLat[0], longAndLat[1]),
      map: map.instance
    });
  });
});
