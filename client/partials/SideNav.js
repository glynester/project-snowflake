Template.HomeLayout.helpers({
  currentUser(){
    var currentUser = Meteor.userId();
    return currentUser;
  },
});
