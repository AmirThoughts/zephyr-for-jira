const hooks = require('./Automation-Configuration/Hooks');
const {gherkin,include} = require('./Automation-Configuration/BddConfiguration');
const {Protractor,REST,GraphQL} = require('./Automation-Configuration/ProtractorConfiguration');

exports.config = {
  output: './output',
  helpers: {
    Protractor,
    REST: {
      headers: {
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
      },
      onRequest: async (request) => {
      },
    },
    GraphQL,
    customHelper: { require: './Automation-Library/ProtractorHelper.js' },
  },
  include,

  gherkin,
  bootstrapAll: hooks.setBootstrap,
  teardownAll: hooks.setTeardown,
  bootstrap: hooks.setBootstrap,
  teardown: hooks.setTeardown,

  plugins: {
    allure: {
      enabled: true,
      outputDir: './output',
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone'],
    },
  },
  tests: './*_test.js',
  name: 'integration-test',
  multiple: {
    group1: { grep: '@runParallel-1', browsers: "chrome" },
    group2: { grep: '@runParallel-2', browsers: "chrome" },
    group3: { grep: '@runParallel-3', browsers: "chrome" },
  },
};
