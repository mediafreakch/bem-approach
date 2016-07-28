<style lang="less">

  @import 'styles/index.less';

</style>

<template>

  <div class="fileUpload">
    <div class="fileUpload_interactive">
      <span class="icon icon-camera"></span>
      <input @change="readImage" type="file" id="{{inputId}}" name="{{inputId}}" />
      <p v-if="replacement" class="fileUpload_replacement">{{file.split('\\').pop() || 'No file selected yet...'}}</p>
      <label for="{{inputId}}" class="fileUpload_label btn btn-link">{{label}}</label>
    </div>
    <img v-if="file !== '#'" class="fileUpload_preview" :src="file" alt="Foto Vorschau" />
  </div>

</template>

<script>

  var icon = require('ricardo-element_icon');

  module.exports = {
    props: ['inputId', 'label', 'placeholder', 'replacement'],
    data: function() {
      return {
        file: '#'
      }
    },
    methods: {
      readImage: function () {
        var image = document.querySelector('input[type=file]').files[0],
            self = this;
        if (image) {
          var reader = new FileReader();

          reader.addEventListener('load', function () {
            self.file = reader.result;
            self.$emit('image-loaded', self.file);
          });

          reader.readAsDataURL(image);

        }
      }
    }
  }

</script>