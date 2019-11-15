<template>
  <div class="m-table-filter">
    <dropdown :items="filters"
              :parse="parse"
              @select="select"
              :value="value">
      <slot/>
      <i class="m-icon-filter"/>
    </dropdown>
  </div>
</template>

<script>
import dropdown from "../../dropdown";

export default {
  name: "MTableFilter",
  components: {
    dropdown
  },
  props: {
    filters: {
      default: () => []
    },
    value: {
      type: String,
      default: ""
    },
    parse: {
      type: Function,
      default(item) {
        return item.title;
      }
    }
  },
  watch: {
    value(v) {
      this.$emit("update:value", v);
    }
  },
  methods: {
    select(item) {
      this.$emit("select", item);
    }
  }
};
</script>
