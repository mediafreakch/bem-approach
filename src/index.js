var Vue = require('vue'),
    VueRouter = require('vue-router'),
    routing = require('app~routing'),
    VueResource = require('vue-resource'),
    app = require('./app.vue');

// install Router first
Vue.use(VueRouter);

// install REST API vue plugin
Vue.use(VueResource);

// use Router
var router = new VueRouter();
router.map(routing);

// init app using our router
var routeHandler = router.start(app, 'body');
