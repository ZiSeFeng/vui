import DropdownItem from "../dropdown/src/dropdown-item.vue";

DropdownItem.install = (Vue) => {
  Vue.component(DropdownItem.name, DropdownItem);
};

export default DropdownItem;
