Meteor.methods({
  'deleteProject'(id){
    Projects.remove({_id: id});
  },
  'deleteNullProjSkills'(project){
    var skills = project.skills.filter(function(n){ return n != undefined });
    Projects.update(project._id, { $set: { skills: skills } });
  },
  'updateProjectVolunteers'(id, currentUserId, project, volunteers){
    Projects.update({_id: id}, {$push: {volunteers: currentUserId}});
    Meteor.call('setProjectStatus', project, volunteers);
  },
  'removeUserFromProject'(id, currentUserId, project, volunteers){
    Projects.update({_id: id}, {$pull: {volunteers: currentUserId}});
    Meteor.call('setProjectStatus', project, volunteers);

  },
  'setProjectStatus'(project, volunteers){
    if(Meteor.call('inTheFuture', project)) {
      if(Meteor.call('minExceeded', project, volunteers)) {
        if(Meteor.call('maxExceeded', project, volunteers)){
          Projects.update({_id: project._id}, {$set: {status: 2}})
        } else {
          Projects.update({_id: project._id}, {$set: {status: 1}})
        }
      } else {
        Projects.update({_id: project._id}, {$set: {status: 0}})
      }
    } else {
      if(Meteor.call('minExceeded', project, volunteers)) {
        Projects.update({_id: project._id}, {$set: {status: 3}})
      } else {
        Projects.update({_id: project._id}, {$set: {status: 4}})
      }
    }
  },

  'maxExceeded'(project, volunteers){
    return volunteers >= project.maxPeople;
  },

  'minExceeded'(project, volunteers){
    return volunteers >= project.minPeople;
  },
  'inTheFuture'(project){
    var date = new Date();
    return project.date > date;
  }

})
