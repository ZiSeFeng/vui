import Clipboard from "./src/clipboard.vue";

Clipboard.install = (Vue) => {
  Vue.component(Clipboard.name, Clipboard);
};

export default Clipboard;
