import Button from "../packages/button/index";
import MessageBox from "../packages/message-box/index";
import Icon from "../packages/icon/index";
import Form from "../packages/form/index";
import FormItem from "../packages/form-item/index";
import Input from "../packages/input/index";
import Textarea from "../packages/textarea/index";
import Search from "../packages/search/index";

import Breadcrumb from "../packages/breadcrumb/index";
import Card from "../packages/card/index";
import Checkbox from "../packages/checkbox/index";
import Clipboard from "../packages/clipboard/index";
import ContextMenu from "../packages/context-menu/index";
import Dropdown from "../packages/dropdown/index";
import DropdownItem from "../packages/dropdown-item/index";
import File from "../packages/file/index";
import Message from "../packages/message/index";
import Modal from "../packages/modal/index";
import Pagination from "../packages/pagination/index";
import Progress from "../packages/progress/index";
import Searchbox from "../packages/searchbox/index";
import Select from "../packages/select/index";
import TabPanel from "../packages/tab-panel/index";
import Table from "../packages/table/index";
import TableEmpty from "../packages/table-empty/index";
import TableFilter from "../packages/table-filter/index";
import TableLink from "../packages/table-link/index";
import TableOrder from "../packages/table-order/index";
import Tabs from "../packages/tabs/index";
import Timer from "../packages/timer/index";
import Tooltip from "../packages/tooltip/index";
// import Validator from "../packages/validator/index";
import VirtualList from "../packages/virtual-list/index";

const version = "0.0.1";

const components = [
  Button,
  Icon,
  Form,
  FormItem,
  Input,
  Textarea,
  Search,
  Breadcrumb,
  Card,
  Checkbox,
  Clipboard,
  ContextMenu,
  Dropdown,
  DropdownItem,
  File,
  Modal,
  Pagination,
  Progress,
  Searchbox,
  Select,
  TabPanel,
  Table,
  TableEmpty,
  TableFilter,
  TableLink,
  TableOrder,
  Tabs,
  Timer,
  Tooltip,
  // Validator,
  VirtualList
];

const install = Vue => {
  components.forEach(component => {
    Vue.use(component);
  });

  Vue.prototype.$alert = MessageBox.alert;
  Vue.prototype.$message = Message;
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  version,
  install,
  Button,
  Icon,
  Form,
  FormItem,
  Input,
  Textarea,
  Search,
  Breadcrumb,
  Card,
  Checkbox,
  Clipboard,
  ContextMenu,
  Dropdown,
  DropdownItem,
  File,
  Modal,
  Pagination,
  Progress,
  Searchbox,
  Select,
  TabPanel,
  Table,
  TableEmpty,
  TableFilter,
  TableLink,
  TableOrder,
  Tabs,
  Timer,
  Tooltip,
  // Validator,
  VirtualList,
  Message
};
