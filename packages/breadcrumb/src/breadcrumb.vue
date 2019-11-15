<template>
  <div class="m-breadcrumb">
    <i class="m-breadcrumb-icon"
:class="icon" @click="onClick" />
    <div class="m-breadcrumb-title">
{{ title }}
</div>
  </div>
</template>

<script>
export default {
  name: "mBreadcrumb",
  props: {
    icon: {
      type: String,
      default: "m-icon-back"
    },
    title: {
      type: String,
      default: ""
    },
    click: {
      type: Function,
      default: () => {
        return true;
      }
    }
  },
  methods: {
    onClick() {
      if (this.click && this.click()) {
        this.$router && this.$router.back();
      }
    }
  }
};
</script>
