// import { signUp, signIn, logOut, cleanDatabase } from './helpers.js'
//
// describe('Project', function() {
//
//   //This seems to work but clears the db each time.
//   // beforeEach(function () {
//   //   cleanDatabase();
//   // });
//
//   // Once we can enter dates using the test script we need to:
//   // Create a test to check projects cannot be created in the past.
//
//   // Tests below rely on the data not being deleted. Once we start
//   // to clear the database, these tests will fail.
//
//   it('adds a project @watch', function () {
//     signIn();
//     browser.url('localhost:3000/project/new');
//     browser.setValue( '[name="location"]', 'Twickenhammy' );
//     browser.setValue( '[name="description"]', 'test projecty' );
//     // browser.setValue( '[name="date"]', new Date() );
//     // browser.setValue( '[name="date"]', '28/12/2016, 10:30' );
//     browser.setValue( '[name="minPeople"]', '4' );
//     browser.setValue( '[name="maxPeople"]', '10' );
//     browser.setValue( '[name="skills.0.skill"]', 'leaf blowing' );
//     browser.submitForm('#insertProjectForm');
//     var getProject = server.execute( function() {
//             return Projects.findOne( { description: 'test projecty' } );
//           });
//           expect ( getProject.description ).to.equal( 'test projecty');
//   });
//
//
//   it('amends a project (adds a task) @watch', function () {
//     // signIn();
//     var getProject = server.execute( function() {
//             return Projects.findOne( { description: 'test projecty' } );
//           });
//     var projectId = getProject._id;
//     browser.url('localhost:3000/project/update/' + projectId);
//     browser.setValue( '[name="location"]', 'Hounslow' );
//     browser.setValue( '[name="description"]', 'XYZ' );
//     // browser.setValue( '[name="date"]', new Date() );
//     // browser.setValue( '[name="date"]', '28/12/2016, 10:30' );
//     browser.setValue( '[name="minPeople"]', '5' );
//     browser.setValue( '[name="maxPeople"]', '101' );
//     browser.setValue( '[name="skills.0.skill"]', 'singing' );
//     browser.click('.autoform-add-item');
//     browser.setValue( '[name="skills.1.skill"]', 'dancing' );
//     browser.submitForm('#updateProjectForm');
//     var getProject = server.execute( function() {
//             return Projects.findOne( { description: 'XYZ' } );
//           });
//           expect ( getProject.description ).to.equal( 'XYZ');
//   });
//
//   it('amends a project (deletes a task) @watch', function () {
//     // signIn();
//     var getProject = server.execute( function() {
//             return Projects.findOne( { description: 'XYZ' } );
//           });
//     var projectId = getProject._id;
//     browser.url('localhost:3000/project/update/' + projectId);
//     browser.click('.autoform-remove-item');
//     browser.submitForm('#updateProjectForm');
//     var getProject = server.execute( function() {
//             return Projects.findOne( { description: 'XYZ' } );
//           });
//           expect ( getProject.skills[0] ).to.equal(null);
//   });
//
//   it('deletes a project @watch', function () {
//     // signIn();
//     var getProject = server.execute( function() {
//             return Projects.findOne( { description: 'XYZ' } );
//           });
//     var projectId = getProject._id;
//     browser.url('localhost:3000/project/' + projectId);
//     // browser.submitForm('#updateProjectForm');
//     browser.click('#delete-project');
//     var getProject = server.execute( function() {
//             return Projects.findOne( { description: 'XYZ' } );
//           });
//           expect ( !getProject);
//   });
// });
