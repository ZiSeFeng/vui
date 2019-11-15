# input 输入框

## 基本用法

:::demo 基本用法

```html
<m-input placeholder="Basic usage" v-model="input" />

<script>
  export default {
    data() {
      return {
        input: "请输入basic usage"
      };
    }
  };
</script>
```

:::

## 三种尺寸

:::demo 尺寸 三种大小输入框定义了三种尺寸（大、默认、小），高度分别为 40px、32px 和 24px。

```html
<m-input v-model="input1" placeholder="Basic usage" size="large" />
<m-input v-model="input2" placeholder="Basic usage" size />
<m-input v-model="input3" placeholder="Basic usage" size="small" />

<script>
  export default {
    data() {
      return {
        input1: "",
        input2: "",
        input3: ""
      };
    }
  };
</script>
```

:::

## 前置/后置标签

:::demo 用于配置一些固定组合。

```html
<div>
  <m-input placeholder="请输入内容" v-model="input1">
    <template slot="prepend"
      >Http://</template
    >
  </m-input>
</div>
<div style="margin-top: 15px;">
  <m-input placeholder="请输入内容" v-model="input2">
    <template slot="append"
      >.com</template
    >
  </m-input>
</div>
<div style="margin-top: 15px;">
  <m-input
    placeholder="请输入内容"
    v-model="input2"
    prefix="emoji"
    suffix="appreciate"
  ></m-input>
</div>

<script>
  export default {
    data() {
      return {
        input1: "",
        input2: "",
        input3: "",
        select: ""
      };
    }
  };
</script>
```

:::

## 搜索输入

:::demo

```html
<m-search
  v-model="value"
  placeholder="input search text"
  @onSearch="handleSearch"
  @onBlur="handleBlur"
  style="width: 200px; margin-right: 10px"
/>
<m-search
  v-model="value1"
  placeholder="input search text"
  @onSearch="handleSearch"
  @onBlur="handleBlur"
  style="width: 200px; margin-right: 10px"
  :enterButton="true"
>
</m-search>
<m-search
  v-model="value2"
  placeholder="input search text"
  @onSearch="handleSearch"
  @onBlur="handleBlur"
  enterButton="搜索"
  style="width: 200px; margin-right: 10px"
/>

<script>
  export default {
    data() {
      return {
        value: "",
        value1: "",
        value2: ""
      };
    },
    methods: {
      handleSearch() {
        console.log(111);
      },
      handleBlur() {
        console.log(222);
      }
    }
  };
</script>
```

:::

## 文本输入框

:::demo

```html
<m-textarea
  rows="5"
  cols="5"
  placeholder="文本输入框"
  v-model="value"
></m-textarea>

<script>
  export default {
    data() {
      return {
        value: ""
      };
    }
  };
</script>
```

:::

## 可清空

:::demo

```html
<m-input placeholder="enter something" clearable v-model="value"></m-input>

<script>
  export default {
    data() {
      return {
        value: ""
      };
    }
  };
</script>
```

:::

## API

后续一些 API 继续完善

## Input props

| 属性            |                                        说明                                         | 类型                                          |  默认值 |
| --------------- | :---------------------------------------------------------------------------------: | --------------------------------------------- | ------: |
| type            |    输入框类型，可选值为 text、password、textarea、url、email、date、number、tel     | String                                        |    text |
| value/v-model   |                          绑定的值，可使用 v-model 双向绑定                          | String                                        |  Number | 空 |
| size            |                输入框尺寸，可选值为 large、small、default 或者不设置                | String                                        |       - |
| placeholder     |                                      占位文本                                       | String                                        |       - |
| clearable       |                                  是否显示清空按钮                                   | Boolean                                       |   false |
| disabled        |                                设置输入框为禁用状态                                 | Boolean                                       |   false |
| readonly        |                                  设置输入框为只读                                   | Boolean                                       |   false |
| maxlength       |                                    最大输入长度                                     | Number                                        |       - |
| show-word-limit |                                          -                                          | 是否显示输入字数统计，可以配合 maxlength 使用 | Boolean | false |
| password        |                                          -                                          | 是否显示切换密码图标                          | Boolean | false |
| icon            |                        输入框尾部图标，仅在 text 类型下有效                         | String                                        |       - |
| prefix          |                                   输入框头部图标                                    | String                                        |       - |
| suffix          |                                   输入框尾部图标                                    | String                                        |       - |
| search          |                               是否显示为搜索型输入框                                | Boolean                                       |   false |
| enter-button    |                 开启 search 时可用，是否有确认按钮，可设为按钮文字                  | Boolean                                       |  String | false |
| rows            |                      文本域默认行数，仅在 textarea 类型下有效                       | Number                                        |       2 |
| autosize        | 自适应内容高度，仅在 textarea 类型下有效，可传入对象，如 { minRows: 2, maxRows: 6 } | Boolean                                       |  Object | false |
| number          |                           将用户的输入转换为 Number 类型                            | Boolean                                       |   false |
| autofocus       |                                    自动获取焦点                                     | Boolean                                       |   false |
| autocomplete    |                                 原生的自动完成功能                                  | String                                        |     off |
| element-id      |                         给表单元素设置 id，详见 Form 用法。                         | String                                        |       - |
| spellcheck      |                               原生的 spellcheck 属性                                | Boolean                                       |   false |
| wrap            |            原生的 wrap 属性，可选值为 hard 和 soft，仅在 textarea 下生效            | String                                        |    soft |

## Input events

| 事件名     |                      说明                      | 返回值                                    |
| ---------- | :--------------------------------------------: | ----------------------------------------- |
| onEnter    |                按下回车键时触发                | 无                                        |
| onClick    |        设置 icon 属性后，点击图标时触发        | 无                                        |
| onChange   |                 数据改变时触发                 | event                                     |
| onFocus    |                输入框聚焦时触发                | 无                                        |
| onBlur     |              输入框失去焦点时触发              | 无                                        |
| onKeyup    |               原生的 keyup 事件                | event                                     |
| onKeydown  |              原生的 keydown 事件               | event                                     |
| onKeypress |              原生的 keypress 事件              | event                                     |
| onSearch   | 开启 search 时可用，点击搜索或按下回车键时触发 | value                                     |
| onClear    |                       -                        | 开启 clearable 时可用，点击清空按钮时触发 | 无 |

## Input slot

| 名称    |                           说明 |
| ------- | -----------------------------: |
| prepend | 前置内容，仅在 text 类型下有效 |
| append  | 后置内容，仅在 text 类型下有效 |
| prefix  |                 输入框头部图标 |
| suffix  |                 输入框尾部图标 |

## Input methods

| 方法名 |      说明      | 参数 |
| ------ | :------------: | ---- |
| focus  | 手动聚焦输入框 | 无   |
