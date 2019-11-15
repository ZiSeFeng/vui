import emitter from "src/mixins/emitter";

export default {
  model: {
    prop: "value",
    event: "input"
  },
  mixins: [emitter],
  props: {
    placeholder: String,
    type: {
      type: String,
      default: "text"
    },
    size: {
      type: String,
      default: "default"
    },
    value: [String, Number],
    suffixIcon: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentValue: this.value
    };
  },
  computed: {
    sizeType() {
      return this.size === "" ? "default" : this.size;
    }
  },
  watch: {
    value(val) {
      this.setCurrentValue(val);
    }
  },
  methods: {
    handleChange(event) {
      this.$emit("on-change", event);
    },
    handleInput(event) {
      const { value } = event.target;
      this.$emit("input", value);
      this.setCurrentValue(value);
      this.$emit("onInput", event);
      this.dispatch("mFormItem", "on-form-change", value);
    },
    handleFocus(event) {
      this.$emit("onFocus", event);
    },
    handleBlur(event) {
      this.$emit("onBlur", event);
      this.dispatch("mFormItem", "on-form-blur", event.target.value);
    },
    setCurrentValue(val) {
      if (val === this.currentValue) return;
      this.currentValue = val;
    },
    handleEnter(event) {
      this.$emit("onEnter", event);
    }
  }
};
