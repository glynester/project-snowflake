Meteor.methods({
  'deleteProject'(id){
    Projects.remove({_id: id});
  },
  'updateProjectVolunteers'(id, currentUserId){
    Projects.update({_id: id}, {$push: {volunteers: currentUserId}});
  },
  'removeUserFromProject'(id, currentUserId){
    Projects.update({_id: id}, {$pull: {volunteers: currentUserId}});
  },

});
