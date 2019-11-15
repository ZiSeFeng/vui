import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

import "./styles/index.scss";
import "./styles/demos/index.scss";

import Vui from "../src/index";
import "../packages/theme-chalk/src/index.scss";
import "../packages/theme-chalk/src/fonts/icon.scss";
import Icon from "./icon.js";

import demoBlock from "./components/demo-block.vue";

Vue.use(Vui);
Vue.component("demo-block", demoBlock);

Vue.prototype.$icon = Icon;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
