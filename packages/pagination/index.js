import Pagination from "./src/pagination.vue";

Pagination.install = (Vue) => {
  Vue.component(Pagination.name, Pagination);
};

export default Pagination;
