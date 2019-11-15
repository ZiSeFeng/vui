// import './validator';
import Validator from "./src/validator.vue";

Validator.install = (Vue) => {
  Vue.component(Validator.name, Validator);
};

export default Validator;
