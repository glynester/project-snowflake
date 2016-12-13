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
  getDistance(destination){
    function deg2rad(deg) {
      return deg * (Math.PI/180)
    }
    var currentUser = Profiles.findOne({created_by: Meteor.userId()});
    var origin = currentUser.location;
    var destination = destination;
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
        zoom:12
      };

    }
    return map
  }
});

Template.mapmap.onCreated(function() {
  var locations = [];
  var descriptions = [];
  var allProjects = Projects.find({date: {$gte: new Date() }});
  allProjects.forEach(function (proj) {
    var location = proj.location;
    locations.push(location);
    var desc = proj.description;
    descriptions.push(desc);
  });
  var infowindow = new google.maps.InfoWindow();
  GoogleMaps.ready('map', function(map) {
    for (i = 0; i < locations.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i].split(",")[0], locations[i].split(",")[1]),
        map: map.instance
      });
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(descriptions[i]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    };
  });
});

Meteor.startup(function() {
  GoogleMaps.load({ v: '3', key: 'AIzaSyAqB3snrGRRRSgCH2B6ymISjj59hBRaE2I', libraries: 'geometry,places' });
});
