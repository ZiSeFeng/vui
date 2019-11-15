<template>
  <div class="m-table-order"
       @click="handleClick">
    <i class="m-icon-down"
       :class="{'selected': value === 'desc'}" />
    <i class="m-icon-up"
       :class="{'selected': value === 'asc'}" />
  </div>
</template>

<script>
export default {
  name: "MTableOrder",
  props: {
    order: {
      type: [String, Boolean],
      default: ""
    }
  },
  data() {
    return {
      value: ""
    };
  },
  watch: {
    order: {
      immediate: true,
      handler(val) {
        if (typeof value === "string") {
          return (this.value = val);
        }
        this.value = val ? "asc" : "desc";
      }
    }
  },
  methods: {
    handleClick() {
      if (this.value === "asc") {
        this.value = "desc";
      } else if (this.value === "desc") {
        this.value = "";
      } else {
        this.value = "asc";
      }
      this.$emit("order", this.value);
    }
  }
};
</script>
