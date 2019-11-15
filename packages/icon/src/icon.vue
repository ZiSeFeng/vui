<template>
  <i :class="'m-icon-' + name" />
</template>

<script>
export default {
  name: "MIcon",
  props: {
    name: String
  }
};
</script>
