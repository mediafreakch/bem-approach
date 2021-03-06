"use strict";

var
  VueRouter = require('vue-router'),
  Vue = require('vue');

Vue.use(VueRouter);

var router = new VueRouter();

router.map( {
  '/': {
    component: require( 'page~home' )
  },
  '/icon-page': {
    component: require( 'page~icons' )
  },
  '/text-page': {
    component: require( 'page~typography' )
  },
  '/form-page': {
    component: require( 'page~form-elements' )
  },
  '/user-profile': {
    name: 'user-profile',
    component: require( 'page~user-profile' ),
    subRoutes: {
      'change-email': {
        component: require('sub~change-email')
      },
      'verify-email/:token': {
        name: 'verify-email-token',
        component: require('sub~verify-email')
      },
      'verify-email-protected/:token': {
        name: 'verify-email-protected',
        component: require('sub~verify-email-protected')
      },
      '/': {
        component: require('sub~profile-email')
      }
    }
  },
  '/forgot-password': {
    name: 'forgot-password',
    component: require('page~forgot-password'),
    subRoutes: {
      'account-recovery': {
        name: 'account-recovery',
        component: require('sub~account-recovery')
      },
      'account-recreate': {
        name: 'account-recreate',
        component: require('sub~account-recreate')
      },
      '/': {
        component: require('sub~forgot-password')
      }
    }
  },
  '/panel': {
    component: require('page_panel')
  }
} );

module.exports = router;
