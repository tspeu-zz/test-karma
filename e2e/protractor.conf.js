// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');


// // // const webdriver = require('selenium-webdriver');
// const webdriver = require('selenium-webdriver');
// // const chrome = require('selenium-webdriver/chrome');
// const firefox = require('selenium-webdriver/firefox');

// let driver = new webdriver.Builder()
//     .forBrowser('firefox')
// //     .setChromeOptions(/* ... */)
//     .setFirefoxOptions(/* ... */)
//     .build();
// // path to binary
// var binaryPath = '/path/to/firefox/binary';
// builder.setFirefoxOptions(
//   new firefox.Options().setBinary(binaryPath)
// );



exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome',
      // chromeOptions: {
      // binary: process.env.CHROME_BIN,
      // args: ['--headless', '--no-sandbox']

  },
  directConnect: true,
  seleniumAddress: 'http://localhost:4200',
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};
