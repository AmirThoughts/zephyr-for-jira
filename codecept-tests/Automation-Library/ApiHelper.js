const envURL = require('../Automation-Configuration/EnvConfiguration');
const {clientBaseUri, strapiBaseUri} = envURL[envURL.env].api;

module.exports = {

  getClientBaseUri(endPoint) {
    return clientBaseUri + (endPoint || '/');
  },

  getStrapiBaseUrl(endPoint){
    return strapiBaseUri + (endPoint || '/');
  }

};
