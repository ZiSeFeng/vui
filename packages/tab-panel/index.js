import TabPanel from "../tabs/src/tab-panel.vue";

TabPanel.install = (Vue) => {
  Vue.component(TabPanel.name, TabPanel);
};

export default TabPanel;
