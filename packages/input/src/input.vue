<template>
  <input v-if="!isGroup"
         ref="input"
         :value="value"
         :placeholder="placeholder"
         :type="type"
         :class="[
           'm-input',
           `m-input--${size}`,
           {
             'm-input-group--suffix': clearable || suffix,
             'm-input-group--prefix': prefix,
           }
         ]"
         @change="handleChange"
         @input="handleInput"
         @focus="handleFocus"
         @blur="handleBlur"
         @keyup.enter="handleEnter">
  <span v-else
        :class="{'m-input-group-wrapper': isGroup}">
    <span :class="{'m-input-wrapper m-input-group': isGroup}">
      <span v-if="$slots.prepend"
            class="m-input-group-addon">
        <slot name="prepend" />
      </span>
      <i v-if="prefix"
         :class="[`m-icon-${prefix}`, {'m-input-icon--prefix': prefix}]" />
      <input ref="input"
             :value="value"
             :placeholder="placeholder"
             :type="type"
             :class="[
               'm-input',
               `m-input--${size}`,
               {
                 'm-input-group--suffix': clearable || suffix,
                 'm-input-group--prefix': prefix,
               }
             ]"
             @change="handleChange"
             @input="handleInput"
             @focus="handleFocus"
             @blur="handleBlur"
             @keyup.enter="handleEnter">
      <span v-if="$slots.append"
            class="m-input-group-addon">
        <slot name="append" />
      </span>
      <span v-if="$slots.suffix || suffixIcon || clearable || suffix"
            class="m-input-suffix">
        <slot name="suffix" />
        <i v-if="suffixIcon"
           :class="suffixIcon" />
        <i v-if="clearable && currentValue && !disabled"
           class="m-icon-clear m-input-icon--clear"
           @click="handleClear" />
        <i v-if="suffix"
           :class="[`m-icon-${suffix}`, {'m-input-icon--suffix': suffix}]" />
      </span>
    </span>
  </span>
</template>

<script>
import mixinCommon from "./mixin.js";

export default {
  name: "MInput",
  mixins: [mixinCommon],
  props: {
    clearable: {
      type: Boolean,
      default: false
    },
    prefix: String,
    suffix: String
  },
  computed: {
    isGroup() {
      return (
        this.$slots.prepend ||
        this.$slots.append ||
        this.$slots.suffix ||
        this.suffixIcon ||
        this.clearable ||
        this.suffix ||
        this.prefix
      );
    }
  },
  methods: {
    handleClear() {
      const event = { target: { value: "" } };
      this.$emit("input", "");
      this.setCurrentValue("");
      this.$emit("on-input", event);
      this.$emit("onClear", "");
    }
  }
};
</script>
