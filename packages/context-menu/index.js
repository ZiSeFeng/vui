import ContextMenu from "./src/context-menu.vue";

ContextMenu.install = (Vue) => {
  Vue.component(ContextMenu.name, ContextMenu);
};

export default ContextMenu;
