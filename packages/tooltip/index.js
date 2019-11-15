import Tooltip from "./src/tooltip.vue";

Tooltip.install = (Vue) => {
  Vue.component(Tooltip.name, Tooltip);
};

export default Tooltip;
