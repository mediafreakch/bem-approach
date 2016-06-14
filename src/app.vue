<template>
  <div id="app">
    <r-navigation></r-navigation>
    <router-view></router-view>
  </div>
</template>

<script>
  var navigation = require('component~navigation'),
      typo = require('element~typo');

  module.exports = {
    components: {
      "r-navigation": navigation
    },
    replace: false
  };
</script>
