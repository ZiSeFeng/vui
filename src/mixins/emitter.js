/*
* @event dispatch 派发 向上查找 一个
* @params componentName 组件名称，用于匹配正确到正确的组件名
* @params eventName 事件名，需要触发的事件
* @params params 参数，触发时带入的参数
*/
function broadcast(componentName, eventName, params) {
  debugger;
  console.log(componentName, eventName, params, "888");
  this.$children.forEach(child => { // 子组件进行遍历，当匹配到对应的组件名时，则去触发对应子组件的对应事件。如果没有，则递归继续查找子组件
    const name = child.$options.componentName;

    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      broadcast.apply(child, [componentName, eventName].concat([params]));
    }
  });
}
export default {
  methods: {
    /*
    * @event dispatch
    * @params componentName 组件名称，用于匹配正确到正确的组件名
    * @params eventName 事件名，需要触发的事件
    * @params params 参数，触发时带入的参数
    */
    dispatch(componentName, eventName, params) {
      let parent = this.$parent || this.$root;
      let {name} = parent.$options;

      while (parent && (!name || name !== componentName)) { // while循环，用于循环父组件，直到找到后者达根元素，匹配不到
        parent = parent.$parent;

        if (parent) {
          name = parent.$options.componentName;
        }
      }
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
      console.log("999");
    },
    /*
    * 广播 向下查找 多个
    * @param componentName
    * @param eventName
    * @param params
    */
    broadcast(componentName, eventName, params) { // 直接对子组件进行遍历，当匹配到对应的组件名，则去触发对应的子组件的对应事件。如果没有，则递归继续查找子组件。
      broadcast.call(this, componentName, eventName, params);
    }
  }
};
