AutoForm.addHooks(['insertProjectForm', 'updateProjectForm'], {
  onSuccess: function(insert, success) {
    console.log("successy!!!")
    FlowRouter.go('view-projects');
  }
});
