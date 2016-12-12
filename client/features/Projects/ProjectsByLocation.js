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
      return {
        center: new google.maps.LatLng(longAndLat[0],longAndLat[1]),
        zoom: 8
      };
    }
  }
});

Meteor.startup(function() {
  GoogleMaps.load();
});
