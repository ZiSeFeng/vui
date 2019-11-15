<script>
export default {
  name: "LabelWrap",
  render(h) {
    const slots = this.$slots.default;
    return <div class="m-form-item__label-wrap">{slots}</div>;
  }
};
</script>
