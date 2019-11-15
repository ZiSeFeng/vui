<template>
  <div class="m-tab"
       :class="[
      `m-tab-${name}`,
      active ? 'active' : ''
    ]"
       v-show="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "mTabPanel",
  inject: ["tabs"],
  props: {
    name: {
      type: String,
      default: ""
    }
  },
  computed: {
    active() {
      return this.tabs.currentName === this.name;
    }
  }
};
</script>
