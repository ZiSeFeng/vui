<template>
  <div class="m-progress g-flex-ac">
    <div class="m-progress-wrapper"
:style="progressStyle">
      <div class="m-progress-bar"
:style="barStyle">
        <div v-if="showText && textInside" class="m-progress-text inside">
{{ percentage }}%
</div>
      </div>
    </div>
    <span v-if="showText && !textInside" class="m-progress-text">{{ percentage }}%</span>
  </div>
</template>

<script>
export default {
  name: "mProgress",
  props: {
    percentage: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 12
    },
    showText: {
      type: Boolean,
      default: true
    },
    textInside: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: "#6098eb"
    }
  },
  computed: {
    progressStyle() {
      const { height } = this;
      return {
        height: height + "px",
        borderRadius: height / 2 + "px"
      };
    },
    barStyle() {
      const { percentage, height, color } = this;
      return {
        width: percentage ? percentage + "%" : "0",
        borderRadius: height / 2 + "px",
        backgroumolor: color
      };
    }
  }
};
</script>
