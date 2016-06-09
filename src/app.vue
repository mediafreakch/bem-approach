<template>
  <div id="app">
    <r-alert type="default" icon="icon-url"
             button="{text: 'button text', action:'action'}">hello World
    </r-alert>
    <r-alert type="info"><strong>hello World</strong></r-alert>
    <r-alert type="success" closable="true">hello World</r-alert>
    <r-alert type="warning">hello World</r-alert>
    <r-alert type="danger">
      hello World
      <button class="btn btn-default pull-right">button-text</button>
    </r-alert>
    <price-box></price-box>
    <div v-for="icon in icons" style="margin-bottom: 30px;">
      <button class="btn btn-default"><span class="icon icon-{{icon}}"></span>button
        text
      </button>
      <button class="btn btn-default"><span class="icon icon-{{icon}}"></span>EASLDFJASDF
      </button>
      <button class="btn btn-default"><span class="icon icon-{{icon}}"></span>pqgjy
      </button>
      <button class="btn btn-default"><span class="icon icon-{{icon}}"></span>ÄÖÜÈÉÀ
      </button>
      <button class="btn btn-default"><span class="icon icon-{{icon}}"></span>ÄqEp
      </button>
    </div>
  </div>
</template>

<script>

  var alert = require('alert');
  var pricebox = require('pricebox');
  var elements = require('elements');
  var typo = require('typo-elements');
  var iconElements = require('icon');

  module.exports = {
    components: {
      "price-box": pricebox,
      "r-alert": alert
    },
    data: function () {
      return {
        icons: [
          'alert',
          'magnifierPlus',
          'gallery',
          'map',
          'bell',
          'calendarNumber',
          'camera',
          'creditCard',
          'download',
          'cvv',
          'envelope',
          'facebookOval',
          'funnel',
          'globe',
          'googleOval',
          'image',
          'magnifierThin',
          'mastercard',
          'medalOutlined',
          'medalRounded',
          'medal',
          'moneyTag',
          'padlockClosed',
          'padlockOpen',
          'paint',
          'pinOutlined',
          'ricardoLogo',
          'settings',
          'countdownThin',
          'starOutlined',
          'stop',
          'pdf',
          'questionmark',
          'share',
          'bubbleOutlined',
          'twitterOval',
          'userOval',
          'visa',
          'youtubeOval',
          'crop',
          'preview',
          'bin',
          'checkmarkOval',
          'copy',
          'minusOval',
          'plusOval',
          'hamburgerThin',
          'magnifierMinus',
          'pinOutlinedActive',
          'pinOutlinedAddActive',
          'pinOutlinedRemoveActive',
          'eyeClosed',
          'eyeOpen',
          'youtube',
          'twitter',
          'star',
          'money',
          'magnifier',
          'weel',
          'user',
          'printer',
          'van',
          'badge',
          'motorbike',
          'at',
          'hamburger',
          'globeFilled',
          'home',
          'info',
          'heart',
          'headphones',
          'googleplus',
          'facebook',
          'plus',
          'pencil',
          'truck',
          'cross',
          'gasoline',
          'minus',
          'checkmark',
          'cart',
          'autoricardo',
          'car',
          'arrowUp',
          'arrowRight',
          'arrowLeft',
          'arrowDown',
          'ribbon',
          'gears',
          'stopwatch',
          'flame',
          'mechanism',
          'tool',
          'pin',
          'road',
          'social',
          'spinner',
          'speechBubble',
          'calendarMonth',
          'piston',
          'delivery',
          'buildings',
          'logout',
          'lifebelt',
          'homeOutlined',
          'heartOutlined',
          'hammer',
          'closeThin',
          'categories',
          'location',
          'countdown',
          'flameOutlined',
          'dots',
          'buyerProtection',
          'arrowDownThin',
          'arrowUpThin',
          'arrowRightThin',
          'coin',
          'new',
          'arrowLeftThin',
          'electronic',
          'entertainment',
          'fashion',
          'living',
          'paperClip',
          'sport',
          'stamp',
          'toys'
        ]
      }
    }
  };
</script>
