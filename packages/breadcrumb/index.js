import Breadcrumb from "./src/breadcrumb.vue";

Breadcrumb.install = (Vue) => {
  Vue.component(Breadcrumb.name, Breadcrumb);
};

export default Breadcrumb;
