FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('MainLayout', {main: 'HomeLayout'});
  }
});

FlowRouter.route('/test', {
  name: 'test',
  action() {
    BlazeLayout.render('MainLayout', {main: 'Test'});
  }
});

FlowRouter.route('/profile/new', {
  name: 'new-profile',
  action() {
    BlazeLayout.render('MainLayout', {main: 'NewProfile'});
  }
});
