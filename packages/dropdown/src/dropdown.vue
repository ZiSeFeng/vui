<template>
  <div class="m-dropdown">
    <div ref="target"
         class="m-dropdown-target"
         @click="toggleDropdown">
      <slot/>
    </div>
    <div v-show="visible"
         class="m-dropdown-panel"
         :style="panelStyle">
      <slot name="content">
        <m-dropdown-item v-for="(item, index) in items"
                         :key="index"
                         :selected="item[trackKey] === internalValue"
                         @click="doClick(item)">
          {{ parse(item) }}
          <i v-if="item[trackKey] === internalValue"
             class="m-icon-tick"/>
        </m-dropdown-item>
      </slot>
    </div>
  </div>
</template>

<script>
import mDropdownItem from "./dropdown-item";

export default {
  name: "MDropdown",
  components: {
    mDropdownItem
  },
  props: {
    items: {
      type: Array,
      default() {
        return [];
      }
    },
    parse: {
      type: Function,
      default(item) {
        return item.title;
      }
    },
    trackKey: {
      type: String,
      default: "key"
    },
    value: {
      type: [String, Number],
      default: ""
    },
    alignLeft: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      visible: false,
      internalValue: "",
      panelStyle: {}
    };
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        this.internalValue = val;
      }
    }
  },
  methods: {
    toggleDropdown() {
      if (this.visible) {
        this.hide();
        return;
      }

      const targetDom = this.alignLeft
        ? this.$refs.target
        : this.$refs.target.children.length
          ? this.$refs.target.children[0]
          : this.$refs.target;
      const { top, left, height } = targetDom.getBoundingClientRect();
      this.panelStyle = {
        top: top + height + (this.alignLeft ? -10 : 0) + "px",
        left: left + "px"
      };

      this.visible = true;
      setTimeout(() => {
        document.body.addEventListener(
          "click",
          () => {
            this.visible = false;
          },
          { once: true }
        );
      }, 0);
    },
    doClick(item) {
      const val = item && item[this.trackKey];
      if (val) {
        this.internalValue = val;
        this.$emit("update:value", val);
        this.$emit("select", item);
        this.hide();
        item.onclick && item.onclick();
      }
    },
    hide() {
      this.visible = false;
    }
  }
};
</script>
