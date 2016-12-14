AutoForm.addHooks(['insertProfileForm', 'updateProfileForm'], {
  onSuccess: function(insert, success) {
    console.log("Stop");
    FlowRouter.go('main');
  }
});
