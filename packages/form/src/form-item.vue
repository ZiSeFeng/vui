<template>
  <div :class="['m-form-item', isRequired ? 'is-required': '']">
    <label class="m-form-item--label"
           :style="labelStyle">{{ label }}</label>
    <div class="m-form-item--content"
         :style="contentStyle">
      <slot />
      <div v-if="validateState === 'error'"
           class="m-form-item--message">
        {{ validateMessage }}
      </div>
    </div>
  </div>
</template>

<script>
import emitter from "src/mixins/emitter";
import schema from "async-validator";

export default {
  name: "MFormItem",
  inject: ["mForm"],
  mixins: [emitter],
  props: {
    required: {
      type: Boolean,
      default: false
    },
    label: String,
    labelWidth: [String, Number],
    prop: String
  },
  data() {
    return {
      initialValue: "", // 存储默认值
      isRequired: false, // 是否是必须
      validateState: "", // 是否校验成功
      validateMessage: "" // 校验失败文案
    };
  },
  computed: {
    labelStyle() {
      const style = {};
      const labelWidth = this.labelWidth || this.mForm.labelWidth;
      const labelStyle = isNaN(Number(labelWidth))
        ? labelWidth
        : labelWidth + "px";
      style.width = labelStyle;
      return style;
    },
    contentStyle() {
      const style = {};
      const labelWidth = this.labelWidth || this.mForm.labelWidth;
      const labelStyle = isNaN(Number(labelWidth))
        ? labelWidth
        : labelWidth + "px";
      style.marginLeft = labelStyle;
      return style;
    },
    fieldValue() {
      return this.mForm.model[this.prop];
    }
  },
  mounted() {
    // 如果没有传入prop， 则无需校验，也就无需缓存
    if (this.prop) {
      this.dispatch("MForm", "on-form-item-add", this);
      // 设置初始值，以便在重置时恢复默认值
      this.initialValue = this.fieldValue;
      // 添加表单校验
      this.setRules();
    }
  },
  methods: {
    /*
     * 绑定事件 进行是否 required 校验
     */
    setRules() {
      const rules = this.getRules(); // 拿到父组件过滤后当前需要使用的规则
      if (rules.length) {
        // every 方法用于检测数组所有元素是否都符合指定条件
        // some 只要有一个符合就返回true
        this.isRequired = rules.some(rule => {
          // 如果当前校验规则中有必填项，则标记起来
          return rule.required;
        });
      }
      /*
       * blur 事件
       */
      this.$on("on-form-blur", this.onFieldBlur);
      /*
       * chagne 事件
       */
      this.$on("on-form-change", this.onFieldChange);
    },
    /**
     * 从 Form 的 rules 属性中，获取当前 FormItem 的校验规则
     */
    getRules() {
      let { rules } = this.mForm;
      rules = rules ? rules[this.prop] : [];
      return [].concat(rules);
    },
    /*
     * blur 进行表单验证
     */
    onFieldBlur() {
      this.validation("blur");
    },
    /*
     * change 进行表单验证
     */
    onFieldChange() {
      this.validation("change");
    },
    /*
     * 校验数据
     * @param trigger 校验类型
     * @param callback 回调函数
     */
    validation(trigger, callback = function() {}) {
      // blur 和 change 是否有当前方式的规则
      const rules = this.getFilteredRule(trigger);
      // 判断当前是否有规则
      if (!rules || rules.length === 0) {
        return;
      }
      // 设置状态为校验中
      // async-validator的使用形式
      this.validateState = "validating";
      const validator = new schema({ [this.prop]: rules });
      // firstFields: true 只会校验一个
      validator.validate(
        { [this.prop]: this.fieldValue },
        { firstFields: true },
        (errors, fields) => {
          this.validateState = !errors ? "success" : "error";
          this.validateMessage = errors ? errors[0].message : "";
          callback(this.validateMessage);
        }
      );
    },
    /*
     * 只支持blur和change，所以过滤出符合要求的rule规则
     */
    getFilteredRule(trigger) {
      const rules = this.getRules();
      return rules.filter(
        res => !res.trigger || res.trigger.indexOf(trigger) !== -1
      );
    },
    /*
     * 清空当前的form-item
     */
    resetField() {
      this.mForm.model[this.prop] = this.initialValue;
    }
  },
  // 组件销毁前，将实例从form的缓存中移除
  beforeDestory() {
    this.dispatch("MForm", "on-form-item-remove", this);
  }
};
</script>
