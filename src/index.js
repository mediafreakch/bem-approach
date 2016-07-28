var
  Vue = require('vue'),
  App = require('./app.vue');
  sync = require('vuex-router-sync').sync,
  store = require('app_vuex').store,
  router = require('app_routing');
  VueResource = require('vue-resource');
  
// install REST API vue plugin
Vue.use(VueResource);

// sync store between pages / routings
sync(store, router);

// init app using our router
router.start({
  store,
  components: {
    App
  }
}, 'body');

module.exports = {};
