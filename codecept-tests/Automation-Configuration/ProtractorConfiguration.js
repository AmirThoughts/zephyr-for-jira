const envURL = require('./EnvConfiguration');
const HOST_URL = envURL[envURL.env].web.HOST_URL;
let { serverURL } = envURL[envURL.env].server;
const Protractor = {
  url: HOST_URL,
  browser: 'chrome',
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
    args: ['--headless', '--disable-gpu', '--window-size=1366x768', '--zoom=100%', '--no-sandbox', '--ignore-certificate-errors', '--disable-infobars', '--start-maximized', '--disable-dev-shm-usage'],
      excludeSwitches: ['enable-automation'],
      w3c: false,
    },
  },

  smartWait: 5000,
  restart: false,
  angular: false,
  keepBrowserState: true,
  driver: 'hosted',
  handlesAlerts: true,
  webStorageEnabled: true,
  acceptSslCerts: true,

  firefox: {
    args: [
      '--ignore-certificate-errors', '--headless',
    ],
  },
};



const Puppeteer = {
  url: HOST_URL,
  restart: false,
  waitForNavigation: 'domcontentloaded',
  waitForAction: 200,
  show: false,
  keepCookies: true,
  browser: 'chrome',
};

const REST = {
  onRequest: async (request) => {
    request.headers = {
      'Accept': 'application/json',
      'ContentType': 'application/json; charset=utf-8',
      'Authorization': 'Bearer ' + await codeceptjs.container.helpers('Protractor').executeScript(() =>
        JSON.parse(localStorage.getItem('okta-token-storage')).accessToken.accessToken),
    };
  },
};

const GraphQL = {
  endpoint: serverURL,
  timeout: 40000,
  headers: {

  },
};

module.exports = { Protractor, REST, Puppeteer,GraphQL };
