## Tabs 标签页

常见的标签页组件。

<br />

### 基础用法

:::demo

```html
<m-tabs :tabs="tabs" v-model="activeName">
  <m-tab-panel name="Kudu">Kudu</m-tab-panel>
  <m-tab-panel name="HDFS">HDFS</m-tab-panel>
  <m-tab-panel name="Kafka">Kafka</m-tab-panel>
</m-tabs>

<script>
  export default {
    data() {
      return {
        tabs: [
          {
            name: "Kudu",
            label: "Kudu"
          },
          {
            name: "HDFS",
            label: "HDFS"
          },
          {
            name: "Kafka",
            label: "Kafka"
          }
        ],
        activeName: "Kudu"
      };
    }
  };
</script>
```

:::

<br />

### 选项卡样式

选项卡样式的标签页。

:::demo 可以通过属性`isCard`来设置是否选项卡样式。

```html
<m-tabs :tabs="tabs" v-model="activeName" is-card>
  <m-tab-panel name="Kudu">Kudu</m-tab-panel>
  <m-tab-panel name="HDFS">HDFS</m-tab-panel>
  <m-tab-panel name="Kafka">Kafka</m-tab-panel>
</m-tabs>

<script>
  export default {
    data() {
      return {
        tabs: [
          {
            name: "Kudu",
            label: "Kudu"
          },
          {
            name: "HDFS",
            label: "HDFS"
          },
          {
            name: "Kafka",
            label: "Kafka"
          }
        ],
        activeName: "Kudu"
      };
    }
  };
</script>
```

:::

<br />

### Attributes

| 参数        | 说明                                                  | 类型          | 可选值 | 默认值 |
| ----------- | ----------------------------------------------------- | ------------- | ------ | ------ |
| tabs        | 标签页信息                                            | array[object] | —      | —      |
| value       | 当前选中的标签页                                      | string        | —      | —      |
| isCard      | 是否选项卡模式                                        | boolean       | —      | false  |
| closabel    | 是否支持关闭                                          | boolean       | —      | false  |
| beforeLeave | 离开当前标签页前调用的方法，返回 false ，标签页不切换 | function      | —      | —      |
| beforeClose | 关闭当前标签页前调用的方法，返回 false ，标签页不关闭 | function      | —      | —      |

<br />

### Slot

| name | 说明     |
| ---- | -------- |
| —    | 默认内容 |

<br />

### TabPanel Attributes

| 参数 | 说明           | 类型   | 可选值 | 默认值 |
| ---- | -------------- | ------ | ------ | ------ |
| name | 标签的唯一标识 | string | —      | —      |
