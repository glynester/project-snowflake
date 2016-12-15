import { signUp, signIn, logOut, cleanDatabase } from './helpers.js';

describe('my module', function () {
  beforeEach(function () {
    cleanDatabase();
  });
});


describe('Running the signUp helper', function() {
  it('should sign a user up @watch', function () {
    signUp();
    expect(browser.getUrl()).to.equal("http://localhost:3000/main");
  });
});

describe('Running the logOut helper @watch', function() {
    it('should log a user out @watch', function () {
      logOut();
      expect(browser.getUrl()).to.equal("http://localhost:3000/main");
    });
});

describe('Signing in', function() {
    it('takes the user to the homepage and displays their email @watch', function () {
      signIn();
      expect(browser.getText('#login-name-link')).to.equal("hamish.smith@test.com ▾");
    });
});

describe('Creating a profile', function() {
    it('takes the user to the new profile page @watch', function () {
      browser.url('localhost:3000/profile/new');
      browser.setValue( '[name="bio"]', 'The best painter' );
      browser.setValue( '[name="location"]', 'London' );
      browser.setValue( '[name="skills.0.skill"]', 'Painting' );
      browser.submitForm('#insertProfileForm');
      browser.url('localhost:3000/profile');

      var getProfile = server.execute( function() {
        return Profiles.findOne( { bio: 'The best painter' } );
      });
      expect ( getProfile.bio ).to.equal( 'The best painter');
    });
  it('does not allow a user to create a new profile if it already exists @watch', function() {
    browser.url('localhost:3000/profile/new');
    expect(browser.getText('#profile-error')).to.equal("You have already completed your profile");
    });
  it('updates when users fill in the update profile form @watch', function() {
    browser.url('localhost:3000/profile/update');
    browser.setValue( '[name="bio"]', 'The worst painter' );
    browser.submitForm('#updateProfileForm');

    var getProfile = server.execute( function() {
      return Profiles.findOne( { bio: 'The worst painter' } );
    });
    expect ( getProfile.bio ).to.equal( 'The worst painter');
  });

});
