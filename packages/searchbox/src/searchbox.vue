<template>
  <div class="m-searchbox">
    <input v-model="value"
           :placeholder="placeholder"
           type="text"
           class="m-input"
           @keyup="doSearch"
           @change="doChange"
           @input="doInput">
    <i v-if="value"
       class="m-icon-error"
       @click="clear" />
    <div v-if="value"
         class="m-searchbox-icon"
         @click="doSearch">
      <i class="m-icon-search" />
    </div>
    <i v-else
       class="m-icon-search" />
  </div>
</template>

<script>
export default {
  name: "MSearchbox",
  props: {
    placeholder: {
      type: String,
      default: "请输入关键字"
    }
  },
  data() {
    return {
      value: ""
    };
  },
  methods: {
    doSearch(event) {
      if (event.keyCode && event.keyCode !== 13) {
        return;
      }
      this.$emit("confirm", {
        value: this.value.trim(),
        event
      });
    },
    doChange(event) {
      this.$emit("change", {
        value: this.value.trim(),
        event
      });
    },
    doInput(event) {
      this.$emit("input", {
        value: this.value.trim(),
        event
      });
    },
    clear() {
      this.value = "";
      this.$emit("clear");
    }
  }
};
</script>
