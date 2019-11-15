# modal 模态框

:::demo

```html
<button @click="logout">打开modal</button>

<script>
  export default {
    methods: {
      confirm() {},
      cancel() {
        alert(3);
      },
      logout() {
        debugger;
        this.$alert(
          {
            title: "提示",
            text: "这是一段自定义内容"
          },
          this.confirm,
          this.cancel
        );
      }
    }
  };
</script>
```

:::
