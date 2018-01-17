<template>
<div>

    <el-col :span="19">
    <el-table
    :data="returnGoodsList"
    border
    style="width: 100%"
    >
     <el-table-column
      prop="id"
      label="退换货编号"
      width="130">
    </el-table-column>
    <el-table-column
      prop="orderCode"
      label="订单编号"
      width="240">
    </el-table-column>
    <el-table-column
      prop="pubId"
      label="商品名称"
      width="240">
    </el-table-column>
    <el-table-column
      prop="createTime"
      label="日期"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="num"
      label="数量"
      width="70">
    </el-table-column>
    <el-table-column
      prop="tag"
      label="全部状态"
      width="100"
      :filters="[{ text: '家', value: '1' }, { text: '公司', value: '2' }]"
      :filter-method="filterTag"
      filter-placement="bottom-end">
      <template slot-scope="scope">
        <el-tag
          :type="scope.row.tag === '1' ? 'primary' : 'success'"
          close-transition>{{scope.row.tag}}</el-tag>
      </template>
    </el-table-column>
		<el-table-column label="操作">
      <template slot-scope="scope">
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
// import * as type from 'projectConfig';

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
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          tag: "1"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          tag: "2"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          tag: "1"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          tag: "2"
        }
      ]
    };
  },
  methods: {
    loadedCallBack() {
      this.$store.dispatch("personalCenter/getReturnGoodsList", {});
    },
    filterTag(value, row) {
      return row.tag === value;
    }
  }
};
</script>