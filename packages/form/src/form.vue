<template>
  <form :class="['m-form', labelPosition ? 'is-'+labelPosition : '']">
    <slot />
  </form>
</template>

<script>
export default {
  name: "MForm",
  props: {
    labelWidth: [Number, String],
    labelPosition: {
      type: String,
      validator: val => ["left", "top", "right"].indexOf(val) > -1
    },
    model: Object,
    rules: Object
  },
  provide() {
    return {
      mForm: this
    };
  },
  data() {
    return {
      fields: [] // 存储当前的form-item的实例
    };
  },
  created() {
    // 存储当前实例;
    this.$on("on-form-item-add", field => {
      if (field) this.fields.push(field);
      return false;
    });
    // 删除当前有的实例
    this.$on("on-form-item-remove", field => {
      if (field.prop) this.fields.splice(this.fields.indexOf(field), 1);
      return false;
    });
  },
  methods: {
    /*
     * 清空
     */
    resetFields() {
      this.fields.forEach(field => {
        field.resetField();
      });
    },
    /*
     * 校验 公开方法： 全部校验数据，支持promise
     */
    validate(callback) {
      return new Promise(resolve => {
        // 当前所有form-item进行校验
        let valid = true; // 默认通过
        let count = 0; // 匹配当前是否是全部检查完
        this.fields.forEach(field => {
          // 每个实例都会有validation的校验方法
          field.validation("", error => {
            // 只要有一个不符合，那么当前的校验就是未通过
            if (error) {
              valid = false;
            }
            // 通过当前检查完所有的form-item的时候才会被调用
            if (++count === this.fields.length) {
              resolve(valid); // 方法使用then
              if (typeof callback === "function") {
                callback(valid); // 直接调用注入的回调方法
              }
            }
          });
        });
      });
    }
  }
};
</script>
