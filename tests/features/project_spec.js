import { signUp, signIn, logOut, cleanDatabase } from './helpers.js'

describe('my module', function () {
  beforeEach(function () {
    cleanDatabase();
  });
});


describe('Project', function() {
  it('adds a project @watch', function () {
    signIn();
    browser.url('localhost:3000/project/new');
    browser.setValue( '[name="location"]', 'Twickenhammy' );
    browser.setValue( '[name="description"]', 'test projecty' );
    // browser.setValue( '[name="date"]', new Date() );
    // browser.setValue( '[name="date"]', '28/12/2016, 10:30' );
    browser.setValue( '[name="minPeople"]', '4' );
    browser.setValue( '[name="maxPeople"]', '10' );
    browser.setValue( '[name="skills.0.skill"]', 'leaf blowing' );;
    browser.submitForm('#insertProjectForm');
    var getProject = server.execute( function() {
            return Projects.findOne( { description: 'test projecty' } );
          });
          expect ( getProject.description ).to.equal( 'test projecty');
  });


  it('amends a project @watch', function () {
    // signIn();
    var getProject = server.execute( function() {
            return Projects.findOne( { description: 'test projecty' } );
          });
          var projectId = getProject._id;
    browser.url('localhost:3000/project/update/' + projectId);
    browser.setValue( '[name="location"]', 'Hounslow' );
    browser.setValue( '[name="description"]', 'XYZ' );
    // browser.setValue( '[name="date"]', new Date() );
    // browser.setValue( '[name="date"]', '28/12/2016, 10:30' );
    browser.setValue( '[name="minPeople"]', '5' );
    browser.setValue( '[name="maxPeople"]', '101' );
    browser.setValue( '[name="skills.0.skill"]', 'singing' );;
    browser.submitForm('#updateProjectForm');
    var getProject = server.execute( function() {
            return Projects.findOne( { description: 'XYZ' } );
          });
          expect ( getProject.description ).to.equal( 'XYZ');
  });
});
