var
  Vue = require('vue'),
  App = require('./app.vue');
  sync = require('vuex-router-sync').sync,
  store = require('app~vuex').store,
  router = require('app~routing');
  VueResource = require('vue-resource');
  
// install REST API vue plugin
Vue.use(VueResource);

// sync store between pages / routings
sync(store, router);


// init app using our router
router.start({
  store: store,
  components: {
    App: App
  }
}, 'body');

module.exports = {};
