<style lang="less">
  @import "./styles/pricebox.less";
</style>

<template>
  <div class="pricebox">
    <p class="txt-xsmall">Your Price</p>
    <p class="txt_currency">CHF</span> <span class="txt_price">1`500`000</p>
    <button class="btn btn-submit"><span class="icon icon-envelope"></span>Contact</button>
  </div>
  <div class="pricebox_ad">
    <a href="#" class="txt-small txt-right box-element link-secondary">Finanzierung für CHF 84.55 / Mt. ></a>
    <a href="#" class="txt-small txt-right box-element link-secondary">Prämie berechnen ></a>
  </div>
</template>

<script>
  var util = require('ricardo-element_utils');
  var elements = require('ricardo-element_form-elements');

  module.exports = {};
</script>
