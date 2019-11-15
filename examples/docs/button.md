# Button

## Button 按钮

常用的操作按钮

### 基础用法

基础的按钮用法

:::demo 使用`theme`属性来定义 Button 的样式。

```html
<template>
  <div class="button-page">
    <m-button>默认按钮</m-button>
    <m-button type="primary">主要按钮</m-button>
    <m-button type="success">成功按钮</m-button>
    <m-button type="info">信息按钮</m-button>
    <m-button type="warning">警告按钮</m-button>
    <m-button type="danger">危险按钮</m-button>
  </div>
</template>

<style>
  .button-page div {
    color: red;
  }
</style>
```

:::

:::demo 使用`theme`属性来定义 Button 的样式。

```html
<m-button>默认按钮</m-button>
<m-button type="primary">主要按钮</m-button>
<m-button type="success">成功按钮</m-button>
<m-button type="info">信息按钮</m-button>
<m-button type="warning">警告按钮</m-button>
<m-button type="danger">危险按钮</m-button>
```

:::
