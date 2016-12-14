
AutoForm.addHooks(['insertProjectForm', 'updateProjectForm'], {
  onSuccess: function(insert, success) {
    console.log("successy!!!")
    FlowRouter.go('view-projects');

AutoForm.addHooks(['insertProfileForm', 'updateProfileForm'], {
  onSuccess: function(insert, success) {
    console.log("Stop");
    FlowRouter.go('main');
  }
});
