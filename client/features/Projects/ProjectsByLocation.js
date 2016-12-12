Template.ProjectsByLocation.helpers({
  projects: () => {
    var id = Meteor.userId();
    var prof = Profiles.findOne({created_by: id});
    return Projects.find( {} );
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
    console.log(longAndLat[0]);
    if (GoogleMaps.loaded()) {
      var map = {
        center: new google.maps.LatLng(longAndLat[0],longAndLat[1]),
        zoom: 8
      };
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(longAndLat[0],longAndLat[1]),
        map: map
      });

    }
    return map
    console.log(marker)
  }
});

Template.body.onCreated(function() {
  // We can use the `ready` callback to interact with the map API once the map is ready.
  GoogleMaps.ready('map', function(map) {
    // Add a marker to the map once it's ready
    var marker = new google.maps.Marker({
      position: map.options.center,
      map: map.instance
    });
  });
});

Meteor.startup(function() {
  GoogleMaps.load();
});
