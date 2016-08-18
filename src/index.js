var
  Vue = require('vue'),
  App = require('./app.vue'),
  sync = require('vuex-router-sync').sync,
  store = require('app_vuex').store,
  router = require('app_routing'),
  VueResource = require('vue-resource'),
  l10n = require('vue-l10n');

// TODO: need to have a polyfill for promise as vuex 2 seems not to support it
//require('es6-promise').polyfill();

global.Promise = Promise;

// install REST API vue plugin
Vue.use(VueResource);

// sync store between pages / routings
sync(store, router);

// use translation
Vue.use(l10n);

// init app using our router
router.start({
  store: store,
  components: {
    App: App
  }
}, 'body');


module.exports = {};
