<template>
  <r-header></r-header>
  <div id="app" class="row box-component">
    <r-navigation></r-navigation>
    <router-view></router-view>
  </div>
  <r-footer></r-footer>
</template>

<script>
  var Vue = require('Vue'),
      mixins = require('app_mixins'),
      navigation = require('component_navigation'),
      header = require('component_header'),
      footer = require('component~footer'),
      store = require('app_vuex').store;
  
  for (var i = 0; i < mixins.length; i++) {
    Vue.mixin(mixins[i]);
  }
  
  

  module.exports = {
    components: {
      'r-navigation': navigation,
      'r-header': header,
      'r-footer': footer
    },
    store: store,
    replace: false
  };
</script>
