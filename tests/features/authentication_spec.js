import { signUp, signIn, logOut, cleanDatabase } from './helpers.js'

describe('my module', function () {
  beforeEach(function () {
    cleanDatabase();
  });
});


describe('Running the signUp helper', function() {
  it('should sign a user up', function () {
    signUp();
    expect(browser.getUrl()).to.equal("http://localhost:3000/main");
  });
});

describe('Running the logOut helper', function() {
    it('should log a user out', function () {
      logOut();
      expect(browser.getUrl()).to.equal("http://localhost:3000/main");
    });
});

describe('Signing in', function() {
    it('takes the user to the homepage and displays their email @watch', function () {
      signIn();
      expect(browser.getText('.login-link-text')).to.equal("hamish.smith@test.com ▾");
    });
});

describe('Creating a profile', function() {
    it('takes the user to the new profile page @watch', function () {
      browser.url('localhost:3000/profile/new');
      browser.waitForExist('.btn-primary', 5000);
      browser.setValue( '[name="bio"]', 'The best painter' );
      browser.setValue( '[name="location"]', 'London' );
      browser.setValue( '[name="skills.0.skill"]', 'Painting' );
      browser.submitForm('#insertProfileForm');
      browser.url('localhost:3000/profile');

      var getProfile = server.execute( function() {
        return Profiles.findOne( { bio: 'The best painter' } );
      });
      expect ( getProfile.bio ).to.equal( 'The best painter');


//
//
//       expect(browser.text.to.equal('Bio: The best painter');
//       expect(browser.text('#Location')).to.equal('Location: London');
    });
});
