<template>
  <div class="m-card">
    <div v-if="title"
         class="m-card-title">
      <div class="icon"></div>
      <div class="name">{{title}}</div>
      <div class="status"
           v-if="statusVisible">
        <div class="status-icon"
             :style="{ backgroumolor: statusInfo.color || '#1eb55d' }"></div>
        {{statusInfo.text}}
      </div>
    </div>
    <div class="m-card-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "mCard",
  props: {
    title: {
      type: String,
      default: ""
    },
    statusVisible: {
      type: Boolean,
      default: false
    },
    statusInfo: {
      type: Object,
      default() {
        return {
          text: "",
          color: ""
        };
      }
    }
  }
};
</script>
