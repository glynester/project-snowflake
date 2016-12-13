
Template.AllProfile.helpers({
  getUserProfile(){
    var profile = FlowRouter.getParam("id");
    var userProfile = Profiles.findOne({_id: profile});
    return userProfile;
  }
});

Template.AllimageView.helpers({
  image: function () {
    var profile = FlowRouter.getParam("id");
    var userProfile = Profiles.findOne({_id: profile});
    var imageId = userProfile.profileimage
    return Images.findOne({_id: imageId});
  }
});
