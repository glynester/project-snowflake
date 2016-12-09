// Command to run tests
// chimp --ddp=http://localhost:3000 --watch --mocha --path=tests

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


export function createproject() {
  browser.url('localhost:3000/project/new');
  browser.setValue( '[name="location"]', 'Twickenham' );
  browser.setValue( '[name="description"]', 'Test Project' );
  // browser.setValue( '[name="date"]', new Date() );
  // browser.setValue( '[name="date"]', '28/12/2016, 10:30' );
  browser.setValue( '[name="minPeople"]', '4' );
  browser.setValue( '[name="maxPeople"]', '10' );
  browser.setValue( '[name="skills.0.skill"]', 'Violin tuning' );;
  browser.submitForm('#insertProjectForm');
};
