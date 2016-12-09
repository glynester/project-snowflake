Template.SideNav.helpers({
  currentUser(){
    var currentUser = Meteor.userId();
    return currentUser;
  },
});
