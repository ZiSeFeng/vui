<template>
  <div class="m-select"
       :class="{'disabled': disabled}">
    <input ref="input"
           class="m-select-input"
           v-if="searchable && searchInputVisible"
           @click.stop
           v-model="keyword"
           :placeholder="getCurrentLabel()" >
    <div v-if="searchable && !searchInputVisible"
         class="m-select-searchbox"
         :class="{
           'disabled': disabled,
           'placeholder': !selected
         }"
         @click="togglePanel">
{{ getCurrentLabel() }}
</div>
    <div v-else
         class="m-select-label"
         :class="{'disabled': disabled, 'placeholder': !selected}"
         @click="togglePanel">
      <slot name="label"
            :option="selected">
        {{ getCurrentLabel() }}
      </slot>
    </div>

    <i class="m-select-down m-icon-chevron-down"
       @click="togglePanel"/>
    <i v-if="clearable && selected"
       class="m-select-clear m-icon-error"
       @click="clear"/>

    <div v-show="panelVisible"
         class="m-select-panel">
      <div v-if="internalOptions.length">
        <div v-for="(item, index) in internalOptions"
             class="m-select-option"
             :key="index"
             :class="{
               'selected': isSelected(item),
               'disabled': item.disabled
             }"
             @click="handleClick(item)">
          <slot name="option"
                :option="item">
            <span v-html="getCustomOption(item)"/>
          </slot>
        </div>
      </div>
      <div v-else
           class="m-select-empty">
        <span>{{ keyword ? noMatchText : noDataText }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { isObject } from "../../utils";

export default {
  name: "MSelect",
  props: {
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    value: {
      type: [String, Number],
      required: true
    },
    valueKey: {
      type: String,
      default: "value"
    },
    labelKey: {
      type: String,
      default: "label"
    },
    placeholder: {
      type: String,
      default: "请选择"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    searchable: {
      type: Boolean,
      default: false
    },
    noDataText: {
      type: String,
      default: "无数据"
    },
    noMatchText: {
      type: String,
      default: "无结果"
    },
    getOption: {
      type: Function
    }
  },
  data() {
    return {
      selected: null,
      panelVisible: false,
      keyword: "",
      searchInputVisible: false
    };
  },
  computed: {
    actualOptions() {
      return this.options.map(o => {
        const isobject = isObject(o);
        const currentLabel = isobject
          ? o[this.labelKey] || o[this.valueKey] || ""
          : o;
        const currentValue = isobject
          ? o[this.valueKey] || o[this.labelKey] || ""
          : o;
        const old = isobject ? o : {};
        return Object.assign(old, {
          currentLabel,
          currentValue,
          disabled: !!o.disabled
        });
      });
    },
    internalOptions() {
      return this.searchable
        ? this.actualOptions.filter(
            o =>
              o[this.valueKey].includes(this.keyword) ||
              o[this.labelKey].includes(this.keyword)
          )
        : this.actualOptions;
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        this.setSelect(val);
      }
    },
    panelVisible(val) {
      if (this.searchable) {
        this.keyword = "";
        this.searchInputVisible = val;
        if (val) {
          this.$nextTick(() => {
            this.$refs.input.focus();
          });
        }
      }
    }
  },
  methods: {
    getCurrentLabel() {
      return (this.selected && this.selected.currentLabel) || this.placeholder;
    },
    getCustomOption(item) {
      if (this.getOption) {
        return this.getOption(item);
      }
      return item.currentLabel;
    },
    togglePanel() {
      if (this.disabled) {
        return;
      }
      this.panelVisible = !this.panelVisible;
      if (this.panelVisible) {
        setTimeout(() => {
          document.body.addEventListener(
            "click",
            () => {
              this.panelVisible = false;
            },
            { once: true }
          );
        }, 0);
      }
      this.$emit("before-show");
    },
    isSelected(item) {
      return this.selected && this.selected.currentValue === item.currentValue;
    },
    handleClick(item) {
      this.selected = item;
      this.emitChange();
      this.panelVisible = false;
    },
    setSelect(val) {
      const arr = this.actualOptions.filter(a => a.currentValue === val);
      this.selected = arr.length ? arr[0] : null;
    },
    clear() {
      this.selected = null;
      this.emitChange();
    },
    emitChange() {
      const val = (this.selected && this.selected[this.valueKey]) || "";
      this.$emit("update:value", val);
      this.$emit("change", val);
    }
  }
};
</script>
