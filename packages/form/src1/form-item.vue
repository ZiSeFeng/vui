<template>
  <div class="m-form-item is-error is-required">
    <label-wrap :for="prop"
                class="m-form-item--label">
      {{ label }}
    </label-wrap>
    <div class="m-form-item--content"
         style="margin-left: 100px;">
      <slot />
      <div class="m-form-item--error">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script>
import LabelWrap from "./label-wrap";

export default {
  name: "MFormItem",
  components: {
    LabelWrap
  },
  props: {
    label: String,
    error: String,
    prop: null
  }
};
</script>
