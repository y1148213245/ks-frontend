/*
 * @Author: song 
 * @Date: 2018-02-05 17:24:29 
 * @Last Modified by: song
 * @Last Modified time: 2018-02-06 17:07:03
 */
<!-- 活动资讯列表 -->
<template>
  <div class="ui_list_word_02">
    <ul class="listUl">
      <li class="listLi" v-for="(item, index) in activitysList" :key="index">
        <span v-text="item.information_SYS_TOPIC"></span>
        <span class="createTime">{{item.information_a_pubTime | formatDate}}</span>
      </li>
    </ul>
    <ui_pagination  :pageMessage="{totalCount: totalCount - 0 || 0}" :excuteFunction="paging" namespace="pagination"></ui_pagination>
  </div>
</template>

<script>
import { Get, Post } from "@common";
import PROJECT_CONFIG from "projectConfig";
import moment from "moment";

export default {
  name: 'ui_list_word_02',
  reused: true,
  props: ["namespace"],
  data () {
    return {
      activitysList: [], // 活动资讯列表
      CONFIG: null,
      totalCount: 0,
    };
  },

  mounted () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].list_word.list_word_02;
    this.queryActivityInfo();
  },

  methods: {
    queryActivityInfo (param) { // 活动列表查询
      let paramsObj = Object.assign({}, this.CONFIG.params);
      if (param) {
        paramsObj.pageNo = param.pageNo;
        paramsObj.pageSize = param.pageSize;
      }
      Post(this.CONFIG.url, paramsObj).then(rep => {
        this.totalCount = rep.data.totalCount;
        var data = rep.data.result;
        if (data && data instanceof Array && data.length > 0) {
          this.activitysList = data;
        }
      });
    },
    paging: function ({ pageNo, pageSize }) {  // 翻页
      var param = {
        pageNo: pageNo,
        pageSize: pageSize,
      };
      this.queryActivityInfo(param);
    },
  },
  filters: {
    formatDate (value) {
      if (value) {
        return moment(value).format("YYYY-MM-DD");
      } else {
        return '暂无日期';
      }
    }
  }
}

</script>
<style>
.ui_list_word_02 {
  width: 800px;
  margin: 0 auto;
}

.ui_list_word_02 .listUl {
  padding-left: 0px;
}

.ui_list_word_02 .listUl .listLi {
  list-style-type: none;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #ddd;
}

.ui_list_word_02 .listLi .createTime {
  float: right;
  font-size: 14px;
  color: #bcbcbc;
}
</style>