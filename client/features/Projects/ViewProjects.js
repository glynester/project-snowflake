Template.ViewProjects.helpers({
  projects: () => {
    return Projects.find({date: {$gte: new Date() }});
  },
  noProjects(){
    var currentUser = Meteor.userId();
    var listOfProjects = Projects.find({});
    return listOfProjects.count() === 0;
  },
  userSignedIn(){
    var currentUser = Meteor.userId();
    return !!currentUser
  },
  getDistance(destination){
    function deg2rad(deg) {
      return deg * (Math.PI/180)
    }
    var currentUser = Profiles.findOne({created_by: Meteor.userId()});
    var origin = currentUser.location;
    var destination = destination;
    // console.log(destination)
    var originLongLat = origin.split(",");
    var destinationLongLat = destination.split(",");
    var lat1 = originLongLat[1];
    var lat2 = destinationLongLat[1];
    var lon1 =  originLongLat[0];
    var lon2 = destinationLongLat[0];


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
  }
});



    // var R = 6371e3; // metres
    // var φ1 = originLong.toRadians();
    // console.log(φ1)
    // var φ2 = destinationLongLat[1].toRadians();
    // var Δφ = (destinationLongLat[1]-originLongLat[1]).toRadians();
    // var Δλ = (destinationLongLat[0]-originLongLat[0]).toRadians();
    // var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
    // Math.cos(φ1) * Math.cos(φ2) *
    // Math.sin(Δλ/2) * Math.sin(Δλ/2);
    // var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    // var d = R * c;
    // console.log(d)
    // return d;


Template.ViewProjects.events({
  'click #filter-by-skills'(event) {
    FlowRouter.go('filtered-by-skills');
  },
  'click #filter-by-location'(event) {
    FlowRouter.go('filtered-by-location');
  },
});
