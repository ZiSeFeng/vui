import TableLink from "./src/table-link.vue";

TableLink.install = (Vue) => {
  Vue.component(TableLink.name, TableLink);
};

export default TableLink;
