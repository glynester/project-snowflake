function cleanDatabase() {
  server.execute(function () {
    Package['xolvio:cleaner'].resetDatabase();
  });
}

function signUp(){
  browser.url('localhost:3000');
  browser.click('#login-buttons');
  browser.click('#signup-link');
  browser.setValue( '[id="login-email"]', 'hamish.smith@test.com' );
  browser.setValue( '[id="login-password"]', 'testymctest' );
  browser.click('#login-buttons-password');
};

function logOut(){
  browser.url('localhost:3000');
  browser.click('#login-buttons');
  // browser.click('#login-buttons-logout');
};

function signIn(){
  browser.url('localhost:3000');
  browser.click('#login-buttons');
  browser.setValue( '[id="login-email"]', 'hamish.smith@test.com' );
  browser.setValue( '[id="login-password"]', 'testymctest' );
  browser.click('#login-buttons-password');
};


describe('my module', function () {
  beforeEach(function () {
    resetDatabase();
  });
});


describe('Running the signUp helper', function() {
  it('should sign a user up @watch', function () {
    signUp();
    expect(browser.getUrl()).to.equal("http://localhost:3000/naoes");
  });
});

describe('Running the logOut helper', function() {
    it('should log a user out @watch', function () {
      logOut();
      expect(browser.getUrl()).to.equal("http://localhost:3000/naoes");
    });
});

describe('RUnning the signIn helper', function() {
    it('should sign a user in @watch', function () {
      signIn();
      expect(browser.getUrl()).to.equal("http://localhost:3000/naes");
    });
});
