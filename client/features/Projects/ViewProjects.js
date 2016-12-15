Template.ViewProjects.helpers({
  noProjects(){
    var currentUser = Meteor.userId();
    var listOfProjects = Projects.find({});
    return listOfProjects.count() === 0;
  },
  userSignedIn(){
    var currentUser = Meteor.userId();
    return !!currentUser
  },
  userHasProfile(){
    var currentUser = Meteor.userId();
    var userProfileBoolean = Profiles.findOne({created_by: currentUser});
    return userProfileBoolean;
  },
});

Template.signedIn.helpers({
  projects(){
    return Projects.find({date: {$gte: new Date() }}, {sort: {date: 1 }});
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

Template.ViewProjects.events({
  'click #filter-by-skills'(event) {
    FlowRouter.go('filtered-by-skills');
  },
  'click #filter-by-location'(event) {
    FlowRouter.go('filtered-by-location');
  },
  'click #filter-by-status'(event) {
    FlowRouter.go('filtered-by-status');
  },
});
