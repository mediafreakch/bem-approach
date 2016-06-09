<template>
  <div id="app">
    <r-alert type="default" icon="icon-url" button="{text: 'button text', action:'action'}">hello World</r-alert>
    <r-alert type="info">hello World</r-alert>
    <r-alert type="success"closable="true">hello World</r-alert>
    <r-alert type="warning">hello World</r-alert>
    <r-alert type="danger">hello World <button class="btn btn-default pull-right"><span class="icon icon-heart"></span>button-text</button></r-alert>
    <price-box></price-box>
  </div>
</template>

<script>

  var alert = require('alert');
  var pricebox = require('pricebox');
  var elements = require('elements');
  var typo = require('typo-elements');

  module.exports = {
    components: {
      "price-box": pricebox,
      "r-alert": alert
    }
  };
</script>
