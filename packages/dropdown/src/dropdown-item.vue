<template>
  <div class="m-dropdown-item"
       :class="{'selected': selected}"
       @click="$emit('click', $event)">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "MDropdownItem",
  props: {
    selected: {
      type: Boolean,
      default: false
    }
  }
};
</script>
