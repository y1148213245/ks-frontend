<template>
<div>
    <el-col :span="19">
    <el-table
    :data="returnGoodsList"
    border
    style="width: 100%"
    >
     <el-table-column
      align="center"
      prop="id"
      label="退换货编号"
      width="100">
    </el-table-column>
    <el-table-column
      align="center"
      prop="orderCode"
      label="订单编号"
      width="220">
    </el-table-column>
    <el-table-column
      align="center"
      prop="productName"
      label="商品名称"
      width="100">
    </el-table-column>
    <el-table-column
      align="center"
      prop="createTime"
      label="日期"
      sortable
      width="150">
    </el-table-column>
    <el-table-column
      align="center"
      prop="num"
      label="数量"
      width="60"
      >
    </el-table-column>
    <el-table-column
      align="center"
      prop="type"
      label="全部状态"
      width="100"
      :formatter="dateFormat"
      :filters="[{ text: '未完成', value: 1 }, { text: '待支付', value: 2 }]"
      :filter-method="filterTag"
      filter-placement="bottom-end"
      >
    </el-table-column>
		<el-table-column label="操作" width="140" align="center">
      <template slot-scope="scope" v-if="">
        <el-button
          size="small"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
    
  </el-table>
      {{returnGoodsList}}
    </el-col>
</div>

</template>

<script>
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "afterservice",
  reused: true,
  props: ["namespace"],
  mounted() {
    this.$store.dispatch("personalCenter/queryUser", {
      loadedCallBack: this.loadedCallBack
    });
  },
  computed: {
    ...mapGetters({
      returnGoodsList: "personalCenter/getReturnGoodsList"
    })
  },
  data() {
    return {};
  },
  methods: {
    loadedCallBack() {
      this.$store.dispatch("personalCenter/getReturnGoodsList", {});
    },
    filterTag(value, row) {
      return row.type === value;
    },
    dateFormat(row, column,cellValue) {
      return cellValue == 1 ? '未完成' : cellValue == 0 ? '待支付' : '已完成';
    }
  }
};
</script>