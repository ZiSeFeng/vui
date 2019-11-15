<template>
  <textarea ref="textarea"
            class="m-input"
            :cols="cols"
            :rows="rows"
            :placeholder="placeholder"
            :value="value"
            @input="handleInput"
            @focus="handleFocus"
            @blur="handleBlur"
            @keyup.enter="handleEnter" />
</template>

<script>
import mixinCommon from "./mixin";

export default {
  name: "MTextarea",
  mixins: [mixinCommon],
  props: {
    cols: [String, Number],
    rows: [String, Number]
  }
};
</script>
