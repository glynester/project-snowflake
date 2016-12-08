Template.navigation.helpers({
  currentUser(){
    var currentUser = Meteor.userId();
    return currentUser;
  },
});
