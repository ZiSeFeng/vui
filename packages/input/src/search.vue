<template>
  <span class="m-input-search m-input-affix-wrapper"
        style="width: 200px;">
    <input ref="input"
           :value="value"
           :placeholder="placeholder"
           :type="type"
           :class="['m-input',`m-input--${size}`]"
           @change="handleChange"
           @input="handleInput"
           @focus="handleFocus"
           @blur="handleBlur"
           @keyup.enter="handleEnter">
    <span class="m-input-suffix">
      <slot name="suffix" />
      <m-button v-if="search && enterButton && !$slots.suffix"
                class="m-input-search--button">
        <i v-if="enterButton === true"
           aria-label="图标: search"
           tabindex="-1"
           class="m-icon-search"
           @click="handleSearch" />
        <template v-else>{{ enterButton }}</template>
      </m-button>
      <i v-else
         aria-label="图标: search"
         tabindex="-1"
         class="m-icon-search"
         @click="handleSearch" />
    </span>
  </span>
</template>

<script>
import mixinCommon from "./mixin.js";

export default {
  name: "MSearch",
  componentName: "MSearh",
  mixins: [mixinCommon],
  props: {
    search: {
      type: Boolean,
      default: true
    },
    enterButton: {
      type: [String, Boolean],
      default: false
    }
  },
  methods: {
    handleSearch() {
      this.handleFocus();
      this.$emit("search", this.currentValue);
    },
    handleEnter(event) {
      if (this.search) this.$emit("onSearch", this.currentValue);
    }
  }
};
</script>
