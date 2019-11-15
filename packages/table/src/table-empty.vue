<template>
  <div class="m-table-empty">
    <template v-if="isSearch">
{{ searchText }}
</template>
    <template v-else>
      <slot/>
    </template>
  </div>
</template>

<script>
export default {
  name: "MTableEmpty",
  props: {
    isSearch: {
      type: Boolean,
      default: false
    },
    searchText: {
      type: String,
      default: "搜不到相关内容，请重新搜索"
    }
  }
};
</script>
