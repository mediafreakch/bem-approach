var Vue = require('vue'),
    VueRouter = require('vue-router'),
    routing = require('app~routing'),
    app = require('./app.vue');

// install Router first
Vue.use(VueRouter);

// use Router
var router = new VueRouter();
router.map(routing);

// init app using our router
var routeHandler = router.start(app, 'body');
