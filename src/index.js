var
  Vue = require('vue'),
  App = require('./app.vue'),
  sync = require('vuex-router-sync').sync,
  store = require('app_vuex').store,
  router = require('app_routing'),
  VueResource = require('vue-resource'),
  trans = require('vue-translate');

// install REST API vue plugin
Vue.use(VueResource);

// sync store between pages / routings
sync(store, router);

// use translation
Vue.use(trans, { store: store });

// init app using our router
router.start({
  store,
  components: {
    App
  }
}, 'body');

module.exports = {};
