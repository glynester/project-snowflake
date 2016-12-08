FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/register', {
  name: 'register',
  action() {
    BlazeLayout.render('MainLayout', {main: 'Register'});
  }
});

FlowRouter.route('/login', {
  name: 'login',
  action() {
    BlazeLayout.render('MainLayout', {main: 'Login'});
  }
});

FlowRouter.route('/test', {
  name: 'test',
  action() {
    BlazeLayout.render('MainLayout', {main: 'Test'});
  }
});

FlowRouter.route('/profile', {
  name: 'profile',
  action() {
    BlazeLayout.render('MainLayout', {main: 'Profile'});
  }
});

FlowRouter.route('/profile/new', {
  name: 'new-profile',
  action() {
    BlazeLayout.render('MainLayout', {main: 'NewProfile'});
  }
});

FlowRouter.route('/profile/update', {
  name: 'update-profile',
  action() {
    BlazeLayout.render('MainLayout', {main: 'UpdateProfile'});
  }
});

FlowRouter.route('/project/new', {
  name: 'new-project',
  action() {
    BlazeLayout.render('MainLayout', {main: 'NewProject'});
  }
});

FlowRouter.route('/projects', {
    name: "view-projects",
    action() {
      BlazeLayout.render('MainLayout', {main: 'ViewProjects'});
    }
});

// FlowRouter.route('/project/update', {
//   name: 'update-project',
//   action() {
//     BlazeLayout.render('MainLayout', {main: 'UpdateProject'});
//   }
// });
