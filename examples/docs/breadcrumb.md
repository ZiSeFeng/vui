## Breadcrumb 面包屑

显示当前页面的名称，可返回上一级

<br />

### 基础用法

基础的面包屑路径用法。

::: demo 使用`title`属性来定义 Breadcrumb 的名称。
```html
<m-breadcrumb title="任务详情" />
```
:::

<br />

### 自定义图标

可以用自定义的图标替换默认图标。

::: demo 设置`icon`属性即可，icon 的列表可以参考 m 的 icon 组件。
```html
<m-breadcrumb icon="m-icon-undo" title="任务详情" />
```
:::

<br />

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| title     | 标题   | string    |  -  |     -    |
| icon  | 图标类名 | string   |  —  |  m-icon-back  |
| click | 点击按钮时调用， 返回 false 不执行默认操作 | function | - | function() { return true; } |