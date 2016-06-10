<template>
  <div id="app">
    <r-navigation></r-navigation>
    <router-view></router-view>
  </div>
</template>

<script>
  var navigation = require('navigation');

  module.exports = {
    components: {
      "r-navigation": navigation
    }
  };
</script>
