import { signUp, signIn, logOut, cleanDatabase } from './helpers.js'

describe('my module', function () {
  beforeEach(function () {
    cleanDatabase();
  });
});


describe('Add Project', function() {
  it('It should go to path project/new @watch', function () {
    signIn();
    browser.url('localhost:3000/project/new');
    browser.setValue( '[name="location"]', 'Twickenham' );
    browser.setValue( '[name="description"]', 'test project' );
    //browser.setValue( '[name="date"]', '20/12/2016' );
    browser.setValue( '[name="minPeople"]', '4' );
    browser.setValue( '[name="maxPeople"]', '10' );
    browser.setValue( '[name="skills.0.skill"]', 'leaf blowing' );
    browser.click('.btn-primary');
    expect(browser.getText('.login-link-text')).to.equal("test project");
    //expect(browser.getUrl()).to.equal("http://localhost:3000/project/new");
  });
});
