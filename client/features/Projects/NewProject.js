Template.NewProject.events({
  'submit #insertProjectForm'(event) {
    FlowRouter.go('view-projects');
  },
});
