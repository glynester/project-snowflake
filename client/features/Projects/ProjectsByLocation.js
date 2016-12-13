Template.ProjectsByLocation.helpers({
  projects: () => {
    var projects = Projects.find({date: {$gte: new Date() }});
    console.log(projects.toArray);
    locations = []
    return projects
    console.log("WWWW")
    projects.forEach(function (proj) {
      console.log(proj.location);
      locations.push(proj.location);
    });
    console.log("SOBSOBSOB")
    console.log(locations)


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
        center: new google.maps.LatLng(54.8175053,longAndLat[1]),
        zoom: 8
      };

    }
    return map
    console.log(marker)
  }
});

Template.mapmap.onCreated(function() {
  console.log(Meteor.call('getProjects'));
  locations = []
  var allProjects = Projects.find({date: {$gte: new Date() }});
  console.log (allProjects)
  console.log(allProjects.count())
  // allProjects.forEach(function (proj) {
  //   console.log(proj.location);
  //   locations.push(proj.location);
  // });
  // console.log(locations)
  // We can use the `ready` callback to interact with the map API once the map is ready.
  GoogleMaps.ready('map', function(map) {
    // var allProjects = Sessions.get('projects');
    // console.log(allProjects);
    // Add a marker to the map once it's ready

    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(54.95268,-1.603411000000051),
      map: map.instance
    });
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(54.95268,-1.503411000000051),
      map: map.instance
    });
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(52.95268,-0.503411000000051),
      map: map.instance
    });
  });
});

Meteor.startup(function() {
  GoogleMaps.load();
});
