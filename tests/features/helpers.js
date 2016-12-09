export function cleanDatabase() {
  server.execute(function () {
    Package['xolvio:cleaner'].resetDatabase();
  });
}

export function signUp(){
  browser.url('localhost:3000');
  browser.waitForExist('#login-sign-in-link', 5000);
  browser.click('#login-buttons');
  browser.click('#signup-link');
  browser.setValue( '[id="login-email"]', 'hamish.smith@test.com' );
  browser.setValue( '[id="login-password"]', 'testymctest' );
  browser.click('#login-buttons-password');
  browser.waitForExist('#login-name-link', 5000);
};

export function logOut(){
  browser.url('localhost:3000');
  browser.click('#login-buttons');
  browser.click('#login-buttons-logout');
};

export function signIn(){
  browser.url('localhost:3000');
  browser.waitForExist('#login-sign-in-link', 10000);
  browser.click('#login-buttons');
  browser.setValue( '[id="login-email"]', 'hamish.smith@test.com' );
  browser.setValue( '[id="login-password"]', 'testymctest' );
  browser.click('#login-buttons-password');
  browser.waitForExist('#login-name-link', 5000);
};
