<template>
  <div class="m-validator"
       :class="{'inline': inline, 'invalid': content, 'valid': !content}">
    <slot/>
    <span v-if="content"
          class="error"
          :class="{'border': isBorder}">
      <i v-if="isBorder"
         class="m-icon-warn-solid" />
      {{ content }}
    </span>
  </div>
</template>

<script>
export default {
  name: "MValidator",
  props: {
    inline: {
      default: false,
      type: Boolean
    },
    name: {
      type: String,
      required: true
    },
    isBorder: {
      type: Boolean,
      default: false
    },
    validate: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    content() {
      const { validate, name } = this;
      return (validate.first && validate.first(name)) || "";
    }
  }
};
</script>
