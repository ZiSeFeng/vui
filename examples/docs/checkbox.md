## Checkbox 复选框

通用勾选框组件。

<br />

### 基础用法

:::demo

```html
<m-checkbox v-model="value" label="复选框"></m-checkbox>
<script>
  export default {
    data() {
      return {
        value: true
      };
    }
  };
</script>
```

:::

<br />

### 禁用状态

:::demo 通过属性`disabled`来设置复选框的禁用状态。

```html
<m-checkbox :value="true" label="复选框1" disabled></m-checkbox>
<m-checkbox :value="false" label="复选框2" disabled></m-checkbox>
```

:::

<br />

### indeterminate 状态

:::demo

```html
<m-checkbox :value="false" :indeterminate="true" label="全选"></m-checkbox>
```

:::

<br />

### Attributes

| 参数          | 说明         | 类型    | 可选值 | 默认值 |
| ------------- | ------------ | ------- | ------ | ------ |
| value         | 值           | boolean | —      | false  |
| disabled      | 是否禁用     | boolean | —      | false  |
| label         | 复选框的文案 | string  | —      | —      |
| indeterminate | 是否半勾选   | boolean | —      | false  |

### Events

| 方法名 | 说明               | 参数             |
| ------ | ------------------ | ---------------- |
| change | 复选框值改变时触发 | (value: Boolean) |
