Template.ProjectsBySkills.helpers({
  projects: () => {
    var id = Meteor.userId();
    var prof = Profiles.findOne({created_by: id});
    return Projects.find( {skills: {$in:  prof.skills} });
  },
  noProjects(){
    var id = Meteor.userId();
    var prof = Profiles.findOne({created_by: id});
    var skillSet = Projects.find( {skills: {$in:  prof.skills} });
    return skillSet.count() === 0;
  },
});

Template.ProjectsBySkills.events({
  'click #no-filter'(event) {
    FlowRouter.go('view-projects');
  },
});
