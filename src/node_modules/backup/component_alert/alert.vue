<style lang="less" src="./style/index.less"></style>

<template>

  <div class="alert {{alertVariant}}{{modifiers}} clearfix" v-if="!hidden" transition="expand">
    <div class="alert_content">
      <div class="alert_text">
        <slot></slot>
      </div>
      <div class="alert_button" v-if="button">
        <slot name="button"></slot>
      </div>
    </div>
    <div class="alert_icon" v-if="icon">
      <span class="icon icon-{{icon}}"></span>
    </div>
    <div class="alert_icon" v-if="closable">
      <span class="icon icon-closeThin" @click="close()"></span>
    </div>
  </div>

</template>

<script>

  var elements = require( 'ricardo-element_form-elements' );

  module.exports = {
    props: [ 'type', 'content', 'closable', 'icon', 'button', 'hidden'],
    computed: {
      alertVariant: function() {
        if (!this.type) {
          return 'alert-default';
        }
        return 'alert-' + this.type;
      },
      modifiers: function() {
        var
            isClosable = this.closable ? ' alert-closable ' : '',
            hasIcon = this.icon ? ' alert-hasIcon ' : '',
            hasButton = this.button ? ' alert-hasButton ' : '';

        return isClosable + hasIcon + hasButton;
      }
    },
    methods: {
      close: function() {
        this.hidden = true;
      }
    }
  }

</script>
