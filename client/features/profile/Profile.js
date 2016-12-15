
Template.UpdateProfile.helpers({
  getUserProfile(){
    var currentUser = Meteor.userId();
    var userProfile = Profiles.findOne({created_by: currentUser});
    return userProfile;
  },
});

Template.imageView.helpers({
  image: function () {
    var currentUser = Meteor.userId();
    var userProfile = Profiles.findOne({created_by: currentUser});
    var imageId = userProfile.profileimage
    return Images.findOne({_id: imageId});
  }
});

Template.Profile.helpers({

  profile(){
    var currentUser = Meteor.userId();
    var userProfile = Profiles.findOne({created_by: currentUser});
    return userProfile;
  },
  usersProjects(){
    var currentUser = Meteor.userId();
    var listOfUserProjects = Projects.find({created_by: currentUser,
                                            date: {$gte: new Date() }});
    return listOfUserProjects
  },
  noProjects(){
    var currentUser = Meteor.userId();
    var listOfUserProjects = Projects.find({created_by: currentUser});
    return listOfUserProjects.count() === 0;
  },
  notVolunteering(){
    var currentUser = Meteor.userId();
    var userProfile = Profiles.findOne({created_by: currentUser});
    var projectIds = userProfile.projects;
    var listOfVolunteerProjects = Projects.find({_id: {$in: projectIds},
                                                date: {$gte: new Date()}});
        console.log()
    return listOfVolunteerProjects = Projects.find({_id: {$in: projectIds},
                                                date: {$gte: new Date()}}).count() <= 0;
  },
  volunteerProjects(){
    var currentUser = Meteor.userId();
    var userProfile = Profiles.findOne({created_by: currentUser});
    var projectIds = userProfile.projects;
    var listOfVolunteerProjects = Projects.find({_id: {$in: projectIds},
                                                date: {$gte: new Date()}});
    return listOfVolunteerProjects
  },
  getDistance(destination){
    function deg2rad(deg) {
      return deg * (Math.PI/180)
    }
    var currentUser = Profiles.findOne({created_by: Meteor.userId()});
    var origin = currentUser.location;
    var destination = destination;
    var lat1 = origin[1];
    var lat2 = destination[1];
    var lon1 =  origin[0];
    var lon2 = destination[0];
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1);
    var a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c; // Distance in km
    return Math.round(d*10)/10;
  },
  formatDate(date){
    var date = date;
    var formattedDate = date.toString().slice(0, 15);
    return formattedDate;
  },

});
Template.NewProfile.helpers({
  userHasProfile(){
    var currentUser = Meteor.userId();
    var userProfileBoolean = Profiles.findOne({created_by: currentUser});
    return userProfileBoolean;
  },
  userSignedIn(){
    var currentUser = Meteor.userId();
    return !currentUser
  },
});

Template.NewProfile.events({
  'submit #insertProfileForm'(event) {
    // FlowRouter.go('main');
    Meteor.call('sendEmail',
                Meteor.user().emails[0].address,
                '',
                'Hello from Snowflake!',
                'You\'ve added a new profile!!');
              }

});

Template.UpdateProfile.events({
  'submit #updateProfileForm'(event) {
    var currentUser = Meteor.userId();
    var userProfile = Profiles.findOne({created_by: currentUser});
    var skills = userProfile.skills
    Meteor.call('deleteNullSkills', userProfile, skills);
    FlowRouter.go('profile');
  },
  // 'submit #profileImageUpload'(event) {
  //     console.log('top level');
  //     var files = event.target.files;
  //     console.log(files);
  //     for (var i = 0, ln = files.length; i < ln; i++) {
  //       Images.insert(files[i], function (err, fileObj) {
  //         if (err){
  //            console.log('error happened');
  //         } else {
  //           console.log('this happened');
  //           var currentUser = Meteor.userId();
  //           var userProfile = Profiles.findOne({created_by: currentUser});
  //           var userProfileId = userProfile._id;
  //           var imagesURL = {
  //             image: "/cfs/files/images/" + fileObj._id
  //           };
  //           Profiles.update(userProfileId, {$set: imagesURL});
  //         }
  //       });
  //    };
  //  }
});

Template.profileMap.helpers({
  mapOptions: () => {
    var currentUser = Meteor.userId();
    var userProfile = Profiles.findOne({created_by: currentUser});
    var location = userProfile.location;
    if (GoogleMaps.loaded()) {
      var map = {
        center: new google.maps.LatLng(location[1],location[0]),
        zoom:13
      };
    }
    return map
  }
});

Template.profileMap.onCreated(function() {

  GoogleMaps.ready('map', function(map) {
    var currentUser = Meteor.userId();
    var userProfile = Profiles.findOne({created_by: currentUser});
    var location = userProfile.location;
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(location[1], location[0]),
      map: map.instance
    });
  });
});
