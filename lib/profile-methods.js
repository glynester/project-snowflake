Meteor.methods({
  'deleteNullSkills'(userProfile, skills){
    skills = skills.filter(function(n){ return n != undefined });
    Profiles.update(userProfile._id, { $set: { skills: skills } });
  },
  'updateUsersProjects'(profile_id, id){
    Profiles.update({_id: profile_id}, {$push: {projects: id}});
  },
  'removeProjectfromProfile'(profile_id, id){
    Profiles.update({_id: profile_id}, {$pull: {projects: id}});
  },
});
