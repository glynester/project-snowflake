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
    var currentUser = Profiles.findOne({created_by: Meteor.userId()});
    var origin = currentUser.location;
    var destination = destination;
    var originLongLat = origin.split(",");
    var destinationLongLat = destination.split(",");
    console.log(originLongLat)
    console.log(originLongLat[0])


    var R = 6371e3; // metres
    var φ1 = originLongLat[1].toRadians();
    var φ2 = destinationLongLat[1].toRadians();
    var Δφ = (destinationLongLat[1]-originLongLat[1]).toRadians();
    var Δλ = (destinationLongLat[0]-originLongLat[0]).toRadians();
    var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(Δλ/2) * Math.sin(Δλ/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    console.log(d)
    return d;
  }
});

Template.ViewProjects.events({
  'click #filter-by-skills'(event) {
    FlowRouter.go('filtered-by-skills');
  },
  'click #filter-by-location'(event) {
    FlowRouter.go('filtered-by-location');
  },
});
