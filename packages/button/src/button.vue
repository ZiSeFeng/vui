<template>
  <button class="m-button"
          :type="nativeType"
          :disabled="buttonDisabled || loading"
          :class="[
            type ? 'm-button--' + type: '',
            buttonSize ? 'm-button--' + buttonSize : '',
            {
              'is-disabled': buttonDisabled,
              'is-loading': loading,
              'is-circle': circle
            }
          ]"
          @click="handleClick">
    <i v-if="loading"
       class="n-icon-loading" />
    <i v-if="icon && loading"
       :class="icon" />
    <span v-if="$slots.default">
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  name: "MButton",
  // name: 'm-button',
  componentName: "MButton",
  props: {
    type: {
      type: String,
      default: "default"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    nativeType: {
      type: String,
      default: "button"
    },
    loading: Boolean,
    icon: {
      type: String,
      default: ""
    },
    circle: Boolean,
    size: String,
    theme: {
      default: "default",
      validator(value) {
        return ["default", "primary", "active"].includes(value);
      }
    }
  },
  computed: {
    buttonDisabled() {
      return this.disabled;
    },
    buttonSize() {
      return this.size;
    }
  },
  methods: {
    handleClick(event) {
      this.$emit("click", event);
    }
  }
};
</script>
