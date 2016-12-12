Meteor.startup(function() {
  GoogleMaps.load({ v: '3', key: 'AIzaSyAqB3snrGRRRSgCH2B6ymISjj59hBRaE2I', libraries: 'geometry,places' });
});

Template.map.helpers({

  getCoOrdinates: () => {
    var id = FlowRouter.getParam('id');
    var proj =  Projects.findOne({_id: id});
    return proj.location;
  },
  mapOptions: function() {
    if (GoogleMaps.loaded()) {
      return {
        center: new google.maps.LatLng(-37.8136, 144.9631),
        zoom: 8
      };
    }
  }

});
