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
      normalize = require('ricardo-element_utils').normalize,
      navigation = require('component_navigation'),
      header = require('component_header'),
      footer = require('component~footer'),
      typo = require('ricardo-element_typo'),
      store = require('app_vuex').store;

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
