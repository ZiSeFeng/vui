import FormItem from "../form/src/form-item.vue";

FormItem.install = (Vue) => {
  Vue.component(FormItem.name, FormItem);
};

export default FormItem;
