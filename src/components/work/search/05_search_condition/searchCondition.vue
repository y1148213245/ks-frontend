<!--  -->
<template>
 <div id="search-high-condition" class="search_jg_bg">
    <table border="0">
      <tr>
        <td height="40" width="265">
          <span>书名:</span>
          <span>
            <el-input style="width: 200px;" size="small" placeholder="请输入书名" v-model="bookName"></el-input>
          </span>
        </td>
        <td height="40" width="265">
          <span>作者:</span>
          <span>
            <el-input style="width: 150px;" size="small" placeholder="请输入作者" v-model="author"></el-input>
          </span>
        </td>
        <td height="40" width="300">
          <span>ISBN:</span>
          <span><el-input style="width: 200px;" size="small" placeholder="请输入ISBN" v-model="isbn"></el-input></span>
        </td>
        <td rowspan="2"><input type="button" class="search_jg_btn f14 color_939" value="检索" @click="toSearch"/></td>
      </tr>
      <tr>
        <td colspan="2">
          <span>出版时间:</span>
          <span class="search_jg_01">
            <el-date-picker v-model="picker_from_model" type="date" size="small" placeholder="选择日期" :picker-options="pickerOptions_from" @change="picker_from"></el-date-picker>
          </span>至
          <span class="search_jg_01">
          <el-date-picker v-model="picker_to_model" type="date" size="small" placeholder="选择日期" :picker-options="pickerOptions_to" @change="picker_to"></el-date-picker>
          </span>
        <td>
          <span>定价:</span>
          <span><el-input style="width: 100px;" size="small" placeholder="请输入价格" v-model="priceFrom"></el-input></span>至
          <span><el-input style="width: 100px;" size="small" placeholder="请输入价格" v-model="priceTo"></el-input></span>
        </td>
      </tr>
    </table>
	</div>
</template>

<script>
import PROJECT_CONFIG from "projectConfig";
export default {
  name: 'work_search_05',
  reused: true,
  props: {
    namespace: String,
  },
  data () {
    return {
      projectConfig: null,
      bookName: '',
      author: '',
      isbn: '',
      pubDateFrom: '',
      pubDateTo: '',
      priceFrom: '',
      priceTo: '',
      picker_from_model: '',
      picker_to_model: '',
      pickerOptions_from: {
        //disabledDate(time) {
        //	return time.getTime() < Date.now() - 8.64e7;
        //}	
      },
      pickerOptions_to: {}
    };
  },

  computed: {},

  created () {
    this.initConfig();
  },

  mounted () { },

  methods: {
    initConfig () {
      let projectConfig = PROJECT_CONFIG[this.namespace].search.search_condition_05;
      this.projectConfig = JSON.parse(JSON.stringify(projectConfig));
    },
    toSearch () {
      let conditions = "[" + this.projectConfig.conditions;
      conditions += this.bookName ? `,{pub_resource_name:'${this.bookName}'}` : "";
      conditions += this.author ? `,{BOOK_SYS_AUTHORS:'${this.author}'}` : "";
      conditions += this.isbn ? `,{BOOK_ISBN:'${this.isbn}'}` : "";
      conditions += this.priceFrom && this.priceTo ? `,{BOOK_EB_PRICE:'${this.priceFrom},${this.priceTo}',op:'to'}` : "";
      conditions += this.pubDateFrom && this.pubDateTo ? `,{BOOK_PUBDATE:'${this.unFmtDate(this.pubDateFrom)},${this.unFmtDate(this.pubDateTo)}',op:'to'}` : "";
      conditions += "]";

      this.$bus.emit(this.projectConfig.eventName, { conditions });
    },
    picker_from (val) {
      this.pubDateFrom = val;
    },
    picker_to (val) {
      this.pubDateTo = val;
    },
    unFmtDate (str) {
      let timestamp = Date.parse(new Date(str));
      timestamp = timestamp / 1000;
      return timestamp;
    }
  }
}

</script>
<style>
.searh_pagingBox {
  padding: 30px 0;
}
.el-date-editor span{
  padding: 0px!important;
}
.el-date-editor.el-input {
  width: 205px;
}
</style>