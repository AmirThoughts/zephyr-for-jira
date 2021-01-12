/* you can use url like this:- envURL[envURL.envConfig].web.HOST_URL before this you have to add require this envConfig file.
this envConfig file is use to manage all the URLS of your app you can use multiple base ulr like this:-
I.amOnPage(envURL[envURL.env].web.HOST_URL+"/dashboard") or I.amOnPage(envURL[envURL.env].web["HOST_URL"]+"/dashboard")
and also you can use this in API like this:- I.sendGetRequest(envURL[envURL.env].api.REST_API_ENDPOINT+`/api/...`)
or I.sendGetRequest(envURL[envURL.env].api["REST_API_ENDPOINT12"]+`/api/...`)
"process.envConfig.e2e_env" is for set envType from node script like "(set AppEnv=test) && codeceptjs run --grep "" "
"process.envConfig.e2e_APPENV" is use for set envType from your system variable or test is by default. */

const envConfig = {

  'env': process.env.AppEnv || 'int-g1ga',

  'dev': {
    'web': {
      'HOST_URL': 'http://gdp-client01-dev-media-ecosystem.az.gdpclient.gdpdentsu.net',
    },
    'api': {
      'REST_API_ENDPOINT': '',
      'userManagementApi': 'http://enablers01-poc-g1ga-dan-user-mgt-svc-me.enablers01-poc-g1ga.svc.cluster.local',
      'clientBaseUri': 'http://ds-governance01-dev-dan-gov-client-svc-me.ds-governance01-dev.svc.cluster.local',
      'accountBaseUri': 'http://ds-governance01-dev-dan-gov-account-svc-me.ds-governance01-dev.svc.cluster.local',
    },
    server: {
      serverURL: '',
    },
  },

  'test': {
    'web': {
      'HOST_URL': 'http://gdp-client01-test-media-ecosystem.az.gdpclient.gdpdentsu.net',
    },
    'api': {
      'REST_API_ENDPOINT': '',
      'userManagementApi': 'http://enablers01-poc-g1ga-dan-user-mgt-svc-me.enablers01-poc-g1ga.svc.cluster.local',
      'clientBaseUri': 'http://ds-governance01-test-dan-gov-client-svc-me.ds-governance01-test.svc.cluster.local',
      'accountBaseUri': 'http://ds-governance01-test-dan-gov-account-svc-me.ds-governance01-test.svc.cluster.local',
    },
    server: {
      serverURL: '',
    },
  },

  'dint-g1ga': {
    'web': {
      'HOST_URL': 'https://gdp-client01-dint-g1ga-media-ecosystem.az.devint.gdpdentsu.net/',
      'OUTLOOK_URL': '',
    },
    'api': {
      'REST_API_ENDPOINT': '',
      'planManagerUri': 'http://ds-planner01-dint-g1ds-dan-planner-svc-me.ds-planner01-dint-g1ds.svc.cluster.local',
      'userManagementApi': 'http://enablers01-dint-g1ga-dan-user-mgt-svc-me.enablers01-dint-g1ga.svc.cluster.local',
      'clientBaseUri': 'http://ds-governance01-dint-g1ga-dan-gov-account-svc-me.ds-governance01-dint-g1ga.svc.cluster.local',
      'accountBaseUri': 'http://ds-governance01-dint-g1ga-dan-gov-account-svc-me.ds-governance01-dint-g1ga.svc.cluster.local',
      'strapiBaseUri' : 'http://gdp-client01-dint-g1ga-dentsu-cms.az.devint.gdpdentsu.net/',
      'notificationBaseUri' : 'http://enablers01-dint-g1ps-dan-notification-svc.enablers01-dint-g1ps.svc.cluster.local',
    },
    server: {
      serverURL: 'https://shared01-dint-g1ga-kong-proxy.az.devint.gdpdentsu.net/',
    },
  },

  'int-g1ga': {
    'web': {
      'HOST_URL': 'https://platform.wal.int.az.eu.mediaecosystem.io/',
      'OUTLOOK_URL': '',
    },
    'api': {
      'REST_API_ENDPOINT': '',
      'planManagerUri': 'http://ds-planner01-int-g1ds-dan-planner-svc-me.ds-planner01-int-g1ds.svc.cluster.local',
      'userManagementApi': 'http://enablers01-int-g1ga-dan-user-mgt-svc-me.enablers01-int-g1ga.svc.cluster.local',
      'clientBaseUri': 'http://ds-governance01-int-g1ga-dan-gov-account-svc-me.ds-governance01-int-g1ga.svc.cluster.local',
      'accountBaseUri': 'http://ds-governance01-int-g1ga-dan-gov-account-svc-me.ds-governance01-int-g1ga.svc.cluster.local',
      'strapiBaseUri' : 'https://cms.wal.int.az.eu.mediaecosystem.io/',
      'notificationBaseUri' : 'https://shared01-int-g1ps-kong-proxy.az.eu-az-int-tms.gdpdentsu.net/notification-svc',
      'refDataUri' : 'https://shared01-int-g1ps-kong-proxy.az.eu-az-int-tms.gdpdentsu.net/reference',
    },
    server: {
      serverURL: 'https://ga-api-gw.wal.int.az.eu.mediaecosystem.io/platform/graphql',
    },
  },

  'nft-g1ga': {
    'web': {
      'HOST_URL': 'https://platform.wal.nft.az.eu.mediaecosystem.io/',
    },
    'api': {
      'REST_API_ENDPOINT': '',
      'userManagementApi': 'http://enablers01-nft-g1ga-dan-user-mgt-svc-me.enablers01-nft-g1ga.svc.cluster.local',
      'clientBaseUri': 'http://ds-governance01-nft-g1ga-dan-gov-client-svc-me.ds-governance01-nft-g1ga.svc.cluster.local',
      'accountBaseUri': 'http://ds-governance01-nft-g1ga-dan-gov-account-svc-me.ds-governance01-nft-g1ga.svc.cluster.local',
      'strapiBaseUri' : 'https://cms.wal.nft.az.eu.mediaecosystem.io/',
      'notificationBaseUri' : 'https://shared01-nft-g1ps-kong-proxy.az.eu-az-nft-tms.gdpdentsu.net/notification-svc',
      'refDataUri' : 'https://shared01-nft-g1ps-kong-proxy.az.eu-az-nft-tms.gdpdentsu.net/reference',
    },
    server: {
      serverURL: 'https://ga-api-gw.wal.nft.az.eu.mediaecosystem.io/platform/graphql',
    },
  },

  'stg-g1ga': {
    'web': {
      'HOST_URL': 'https://platform.wal.stg.az.eu.mediaecosystem.io/',
    },
    'api': {
      'REST_API_ENDPOINT': '',
      'userManagementApi': 'http://enablers01-stg-g1ga-dan-user-mgt-svc-me.enablers01-stg-g1ga.svc.cluster.local',
      'clientBaseUri': 'http://ds-governance01-stg-g1ga-dan-gov-client-svc-me.ds-governance01-stg-g1ga.svc.cluster.local',
      'accountBaseUri': 'http://ds-governance01-stg-g1ga-dan-gov-account-svc-me.ds-governance01-stg-g1ga.svc.cluster.local',
      'strapiBaseUri' : 'https://cms.wal.stg.az.eu.mediaecosystem.io/',
      'notificationBaseUri' : 'https://shared01-stg-g1ps-kong-proxy.az.eu-az-stg-tms.gdpdentsu.net/notification-svc',
      'refDataUri' : 'https://shared01-stg-g1ps-kong-proxy.az.eu-az-stg-tms.gdpdentsu.net/reference',
    },
    server: {
      serverURL: 'https://ga-api-gw.wal.stg.az.eu.mediaecosystem.io/platform/graphql',
    },
  },

  'demo': {
    'web': {
      'HOST_URL': 'https://demo.mediaecosystem.io/',
    },
    'api': {
      'notificationBaseUri' : 'https://shared01-demo-g1ps-kong-proxy.az.eu-az-demo-tms.gdpdentsu.net/notification-svc',
      'strapiBaseUri' : 'https://cms.wal.demo.az.eu.mediaecosystem.io/',
    },
    server: {
      serverURL: 'https://ga-api-gw.wal.demo.az.eu.mediaecosystem.io/platform/graphql',
    },
  },
};

module.exports = envConfig;
