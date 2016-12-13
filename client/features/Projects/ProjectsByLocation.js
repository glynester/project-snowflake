Template.ProjectsByLocation.helpers({
  projects: () => {
    var projects = Projects.find({date: {$gte: new Date() }});
    return projects
  },
  noProjects(){
    var id = Meteor.userId();
    var prof = Profiles.findOne({created_by: id});
    var allProjects = Projects.find( {} );
    var id = Meteor.userId();
    var prof = Profiles.findOne({created_by: id});
    return allProjects.count() === 0;
  },
});

Template.ProjectsByLocation.events({
  'click #no-filter'(event) {
    FlowRouter.go('view-projects');
  },
  'click #filter-by-skills'(event) {
    FlowRouter.go('filtered-by-skills');
  },
});

Template.mapmap.helpers({
  mapOptions(){

    var id = Meteor.userId();
    var profile = Profiles.findOne({created_by: id});
    var location = profile.location;
    var long = location.split(",");
    var longAndLat =  long.map(Number);
    if (GoogleMaps.loaded()) {
      var map = {
        center: new google.maps.LatLng(longAndLat[0],longAndLat[1]),
        zoom:15
      };

    }
    return map
  }
});

Template.mapmap.onCreated(function() {
  var locations = [];
  var allProjects = Projects.find({date: {$gte: new Date() }});
  allProjects.forEach(function (proj) {
    var location = proj.location;
    locations.push(location);
  });
  GoogleMaps.ready('map', function(map) {
    for (i = 0; i < locations.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i].split(",")[0], locations[i].split(",")[1]),
        map: map.instance
      });
    };
  });
});

Meteor.startup(function() {
  GoogleMaps.load();
});
