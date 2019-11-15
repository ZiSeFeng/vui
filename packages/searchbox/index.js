import Searchbox from "./src/searchbox.vue";

Searchbox.install = (Vue) => {
  Vue.component(Searchbox.name, Searchbox);
};

export default Searchbox;
