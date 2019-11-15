<template>
  <div class="m-checkbox"
       @click="handleChange">
    <span :class="{
        'm-checkbox-input': true,
        'disabled': disabled,
        'checked': internalValue,
        'indeterminate': indeterminate && !internalValue
      }">
    </span>
    <span class="m-checkbox-label"
          :class="{'disabled': disabled}">{{label}}</span>
  </div>
</template>

<script>
export default {
  name: "mCheckbox",
  props: {
    indeterminate: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ""
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      internalValue: false
    };
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        this.internalValue = val;
      }
    }
  },
  methods: {
    handleChange() {
      this.internalValue = !this.internalValue;
      this.$emit("change", this.internalValue);
    }
  }
};
</script>
