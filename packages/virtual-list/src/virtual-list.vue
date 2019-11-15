<template>
  <div class="m-virtual-list">
    <div class="m-virtual-list-phantom"
         :style="{ height: listHeight }" />
    <div ref="list"
         class="m-virtual-list-content">
      <div v-for="(item, index) in visibleData"
           :key="index"
           class="m-virtual-list-item"
           v-html="itemRender(item)" />
    </div>
  </div>
</template>

<script>
export default {
  name: "MVirtualList",
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    itemHeight: {
      type: Number,
      default: 32
    },
    itemRender: {
      type: Function,
      default(item) {
        if (item.render && typeof item.render === "function") {
          return item.render(item);
        }
        return item;
      }
    }
  },
  data() {
    return {
      visibleCount: 0,
      visibleData: [],
      height: 0,
      start: 0,
      end: 0,
      scrollTop: 0
    };
  },
  computed: {
    totalCount() {
      return this.data.length;
    },
    listHeight() {
      return this.totalCount * this.itemHeight + "px";
    }
  },
  created() {
    window.addEventListener("resize", this._initListInfo);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this._initListInfo);
    this.$el.removeEventListener("scroll", this._scroll);
  },
  mounted() {
    this.$el.addEventListener("scroll", this._scroll);
    this._initListInfo(true);
  },
  methods: {
    _initListInfo(isCreated = false) {
      const bound = this.$el.getBoundingClientRect();
      const { height } = bound;
      if (height !== this.height) {
        this.visibleCount = Math.ceil(height / this.itemHeight) * 2;
        if (isCreated) {
          this.start = 0;
        }
        this.end = Math.min(this.start + this.visibleCount, this.totalCount);
        this.visibleData = this.data.slice(this.start, this.end);
      }
    },
    _scroll(event) {
      const { scrollTop } = this.$el;
      this.start = Math.floor(scrollTop / this.itemHeight);
      this.end = Math.min(this.start + this.visibleCount, this.totalCount);
      this.visibleData = this.data.slice(this.start, this.end);

      this.$refs.list.style.webkitTransform = `translate3d(0, ${this.start *
        this.itemHeight}px, 0)`;

      this.$emit("scroll", { event });
    }
  }
};
</script>
