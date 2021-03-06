<style lang="less">
  @import "styles/index.less";
</style>

<template>

  <div class="formItem {{variantClass}}" :class="{ 'input-invalid': !validation.valid }">
    <label for="{{inputId}}" :class="{ 'focused': inputHasFocus }">{{label}}</label>
    <input
        class=""
        :class="{ 'input-invalid': !validation.valid }"
        type="{{type}}"
        @keydown.enter="inputEnter"
        required
        id="{{inputId}}"
        name="{{inputId}}"
        value="{{value}}"
        @input="input()"
        @blur="blur()"
        valid="{{validRegex}}"
        v-model="value"
        placeholder="{{placeholder}}"
        :readonly="readonly"
        @focus="focus()"
    /><a
      v-if="readonly && editable"
      @click="edit"
      class="readonly_edit"
  >ändern</a><span
      v-if="!readonly"
      class="icon icon-spinner"
      :class="{ 'animated': retrievingData}"
      @click="edit"
  ></span>
    <p
        class="input_validationMessage"
        v-if="!validation.valid && validation.state === 'dirty'"
    >{{validation.message}}</p>
  </div>

</template>

<script>

  module.exports = {
    props: ['variant', 'label', 'validationType', 'validationMessage', 'icon', 'retrievingData', 'regexp', 'min', 'max', 'inputId', 'defaultValue', 'type', 'placeholder', 'readonly', 'editable' ],
    data: function() {
      return  {
        validation: {
          valid: true,
          state: 'pristine',
          methods: {
            regexp: function() {
              return this.regexp.test(this.value);
            },
            email: function(){
              return /.+@.+\..+/.test(this.value);
            },
            min: function() {
              return this.min <= Number(this.value);
            },
            max: function(){
              return this.max >= Number(this.value);
            },
            required: function() {
              return Boolean(this.value);
            },
            number: function() {
              return !isNaN(Number(this.value));
            }
          },
          message: 'Something is wrong with your input.'
        },
        value: this.defaultValue,
        inputHasFocus: false
      }
    },
    computed: {
      variantClass: function(){
        return this.variant ? 'formItem-' + this.variant : '';
      },
      validRegex: function() {
        var regexp;
        switch(this.variant) {
          case '':
            regexp = /.*/;
            break;
          case 'email':
            regexp = /.+@.+\..+/;
            break;
        }
        return regexp;
      }
    },
    methods: {
      focus: function(){
        this.inputHasFocus = !this.inputHasFocus;
      },
      blur: function(){
        this.focus();
        if (this.validation.state === 'pristine') {
          this.validation.state = 'dirty';
          this.validate();
        }
        this.$emit('input-blur', this.inputId, this.value);
      },
      input: function(){
        if(this.validation.state === 'pristine') {
          return;
        }
        this.validate();
      },
      validate(){

        try {
          var validationTypes = this.validationType.indexOf('[') > -1 ? JSON.parse(this.validationType.replace(/'/g, '"')) : [ this.validationType ];
          var validationMessages = this.validationMessage.indexOf('[') > -1 ? JSON.parse(this.validationMessage.replace(/'/g, '"')) : [ this.validationMessage ];
        } catch(e) {
          throw new TypeError('There is something wrong with the validation attributes of the ' + this.inputId + '-input field, string or array expected for validationType and validationMessage', 'form-item.vue', 'line 91');
        }

        if(!Array.isArray(validationTypes) || !Array.isArray(validationTypes)) {
          throw new TypeError('There is something wrong with the validation attributes of the ' + this.inputId + '-input field, string or array expected for validationType and validationMessage', 'form-item.vue', 'line 95');
        } else {
          for ( var i = 0; i < validationTypes.length; i++) {
            if(!this.validation.methods[validationTypes[i]].call(this)){
              this.validation.message = validationMessages[i];
              this.validation.valid = false;
              this.$emit('value-change', this.inputId, this.value, this.validation.valid);
              return false;
            } else {
              this.validation.valid = true;
              this.$emit('value-change', this.inputId, this.value, this.validation.valid);
            }
          }
          return true;
        }
      },
      edit: function(){
        this.$emit('input-edit', this.inputId);
      },
      inputEnter: function(){
        if(this.validation.state === 'pristine'){
          this.validation.state = 'dirty';
        }
        this.validate();
        this.$emit('input-enter', this.inputId, this.value, this.validation.valid );
      }
    }
  }
</script>
