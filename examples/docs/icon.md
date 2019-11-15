# icon 图标

## icon 基础用法

:::demo

```html
<m-icon name="info"></m-icon> <i class="m-icon-loading"></i>
<i class="vui-iconfont m-icon-xiangbao"></i>
```

:::

### 图标集合

:::demo 图标集合

```html
<ul class="md-icon-list">
  <li v-for="name in $icon.iconList" class="md-icon-item">
    <span class="md-icon-cell">
      <i class="md-icon-icon" :class="'m-icon-' + name"></i>
      <span class="md-icon-name">{{'m-icon-' + name}}</span>
    </span>
  </li>
</ul>
```

:::
