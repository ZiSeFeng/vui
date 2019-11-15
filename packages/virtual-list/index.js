import VirtualList from "./src/virtual-list.vue";

VirtualList.install = (Vue) => {
  Vue.component(VirtualList.name, VirtualList);
};

export default VirtualList;
