Template.ProjectsBySkills.helpers({
  projects: () => {
    var id = Meteor.userId();
    var prof = Profiles.findOne({created_by: id});
    return Projects.find( {skills: {$in:  prof.skills},
                          date: {$gte: new Date()} });
  },
  noProjects(){
    var id = Meteor.userId();
    var prof = Profiles.findOne({created_by: id});
    var skillSet = Projects.find( {skills: {$in:  prof.skills} });
    return skillSet.count() === 0;
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
  }
});

Template.ProjectsBySkills.events({
  'click #no-filter'(event) {
    FlowRouter.go('view-projects');
  },
  'click #filter-by-location'(event) {
    FlowRouter.go('filtered-by-location');
  },
  'click #filter-by-status'(event) {
    FlowRouter.go('filtered-by-status');
  },


});
