Template.HomeLayout.helpers({
  currentUser(){
    var currentUser = Meteor.userId();
    return currentUser;
  },
});

Template.Register.helpers({
  currentUser(){
    var currentUser = Meteor.userId();
    return currentUser;
  },
});
