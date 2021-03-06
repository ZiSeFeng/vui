<template>
  <div class="m-table">
    <div v-if="headerFixed"
         class="m-table-fixed">
      <table-header :columns="columns"
                    @filter="handleFilter(arguments[0].filter, arguments[0].column)"
                    @order="handleOrder(arguments[0].order, arguments[0].column)"/>
      <table-body :columns="columns"
                  :data="data"/>
    </div>
    <slot v-else>
      <table>
        <slot v-if="showHeader"
              name="header">
          <thead>
            <tr>
              <th v-for="(column, index) in columns"
                  :key="column.name || index"
                  :style="{
                    width: column.width
                  }">
                <slot name="th"
                      :column="column">
                  {{ column.title || column.name }}
                  <table-filter v-if="column.filters"
                                :filters="column.filters"
                                :value="filterValue[column.name]"
                                :parse="filterParse"
                                @select="handleFilter(arguments[0], column)"/>
                  <table-order v-if="column.order"
                               :order="column.order"
                               @order="handleOrder(arguments[0], column)"/>
                </slot>
              </th>
            </tr>
          </thead>
        </slot>
        <slot name="body">
          <tbody>
            <tr v-for="(row, index) in data"
                :key="row.rowkey || index">
              <td v-for="(col, idx) in columns"
                  :key="col.name || idx">
                <slot name="td"
                      :row="row"
                      :column="col">
                  {{ col.parse ? col.parse(col, row) : (col.name ? row[col.name] : row[idx]) }}
                </slot>
              </td>
            </tr>
          </tbody>
        </slot>
      </table>
      <slot name="empty">
        <table-empty v-if="!data.length">
{{ emptyText }}
</table-empty>
      </slot>
    </slot>
  </div>
</template>

<script>
import TableHeader from "./table-header";
import TableBody from "./table-body";
import TableFilter from "./table-filter";
import TableOrder from "./table-order";
import TableEmpty from "./table-empty";

export default {
  name: "MTable",
  components: {
    TableHeader,
    TableBody,
    TableFilter,
    TableOrder,
    TableEmpty
  },
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    columns: {
      type: Array,
      default() {
        return [];
      }
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    rowKey: {
      type: String,
      default: ""
    },
    filterValue: {
      type: Object,
      default() {
        return {};
      }
    },
    filterParse: {
      type: Function,
      default(item) {
        return item.title;
      }
    },
    headerFixed: {
      type: Boolean,
      default: false
    },
    emptyText: {
      type: String,
      default: "暂无数据"
    }
  },
  methods: {
    handleOrder(order, column) {
      this.$emit("order", { order, column });
    },
    handleFilter(filter, column) {
      this.$emit("filter", { filter, column });
    }
  }
};
</script>
