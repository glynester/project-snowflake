Template.UpdateProject.helpers({
    project: () => {
        var id = FlowRouter.getParam('id');
        return Projects.findOne({_id: id});
    }
});
