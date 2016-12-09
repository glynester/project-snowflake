Template.NewProject.events({
  'submit #insertProjectForm'(event) {
    console.log("clicky!")
    FlowRouter.go('view-projects');
  },
});
