<template>
  <div id="app">
    <price-box></price-box>
  </div>
</template>

<script>
  var pricebox = require('pricebox');

  module.exports = {
    components: {
      "price-box": pricebox
    }
  };
</script>
