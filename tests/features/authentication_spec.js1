import { signUp, signIn, logOut, cleanDatabase } from './helpers.js'

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

describe('Running the logOut helper', function() {
    it('should log a user out @watch', function () {
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
