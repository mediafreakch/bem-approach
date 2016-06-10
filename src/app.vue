<template>
  <div id="app">
    <r-alert type="default"><p slot="text">hello World</p>
    </r-alert>
    <r-alert type="info" icon="info"><p slot="text"><strong>hello World</strong></p></r-alert>
    <r-alert type="success" closable="true" icon="checkmarkOval"><p slot="text">hello World</p></r-alert>
    <r-alert type="warning">
      <p slot="text">hello World</p>
      <button slot="button" class="btn btn-submit pull-right">button-text</button>
    </r-alert>
    <r-alert type="danger" button="true" icon="alert">
      <p slot="text">hello World</p>
      <button slot="button" class="btn btn-submit pull-right">button-text</button>
    </r-alert>
    <r-alert type="danger" button="true" icon="stop" closable="true">
      <p slot="text">Feta fromage bavarian bergkase. Cauliflower cheese monterey jack cheesy grin smelly cheese mozzarella say cheese ricotta say cheese. Fondue swiss cream cheese lancashire ricotta who moved my cheese stinking bishop boursin. Ricotta chalk and cheese.</p>
      <p slot="text">Feta fromage bavarian bergkase. Cauliflower cheese monterey jack cheesy grin smelly cheese mozzarella say cheese ricotta say cheese. Fondue swiss cream cheese lancashire ricotta who moved my cheese stinking bishop boursin. Ricotta chalk and cheese.</p>
      <button slot="button" class="btn btn-submit pull-right">button-text</button>
    </r-alert>
    <price-box></price-box>
    <div v-for="icon in icons" style="margin-bottom: 30px;">
      <button class="btn btn-default"><span class="icon icon-{{icon}}"></span>button
        text
      </button>
      <button class="btn btn-primary"><span class="icon icon-{{icon}}"></span>EASLDFJASDF
      </button>
      <button class="btn btn-secondary"><span class="icon icon-{{icon}}"></span>pqgjy
      </button>
      <button class="btn btn-link"><span class="icon icon-{{icon}}"></span>ÄÖÜÈÉÀ
      </button>
      <button class="btn btn-bid"><span class="icon icon-{{icon}}"></span>ÄqEp
      </button>
      <button class="btn btn-buy"><span class="icon icon-{{icon}}"></span>ÄqEp
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
