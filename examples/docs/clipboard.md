## Clipboard 剪贴板

常用的剪贴板功能。

<br />

### 基础用法

基础的剪贴板用法。

:::demo 使用`text`属性来定义需要复制的文案。

```html
<m-clipboard text="这是一段复制出来的话" @success="success"></m-clipboard>

<script>
  export default {
    methods: {
      success() {
        this.$message.success("复制成功");
      }
    }
  };
</script>
```

:::

<br />

### 自定义展示内容

剪贴板展示的文案内容可以自定义。

:::demo

```html
<m-clipboard text="这是另外一段复制出来的话" @success="success"
  >点击我复制</m-clipboard
>

<script>
  export default {
    methods: {
      success() {
        this.$message.success("已复制");
      }
    }
  };
</script>
```

:::

<br />

### Attributes

| 参数 | 说明           | 类型   | 可选值 | 默认值 |
| ---- | -------------- | ------ | ------ | ------ |
| text | 复制出来的文案 | string | -      | -      |

<br />

### Events

| 方法名  | 说明           | 参数                               |
| ------- | -------------- | ---------------------------------- |
| success | 复制成功时触发 | (event: Event, sender: mClipboard) |
| error   | 复制失败时触发 | (event: Event, sender: mClipboard) |
