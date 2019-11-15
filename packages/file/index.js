import File from "./src/file.vue";

File.install = (Vue) => {
  Vue.component(File.name, File);
};

export default File;
