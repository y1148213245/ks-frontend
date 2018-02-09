/*
 * @Author: song 
 * @Date: 2018-02-05 17:24:29 
 * @Last Modified by: song
 * @Last Modified time: 2018-02-09 16:18:16
 */
<!-- 活动资讯列表 -->
<template>
  <div class="ui_list_word_01">
    <ul class="listUl">
      <li class="listLi" v-for="(item, index) in activitysList" :key="index" @click="toInfoDetail(item.id, item.pub_col_id)">
        <span v-text="item.information_SYS_TOPIC"></span>
        <span class="createTime" v-if="controlTime">{{item.information_a_pubTime | formatDate}}</span>
      </li>
    </ul>
    <ui_pagination v-if="controlPagination" :pageMessage="{totalCount: totalCount - 0 || 0}" :excuteFunction="paging" namespace="pagination" style="margin-top: 20px;"></ui_pagination>
  </div>
</template>

<script>
import { Get, Post } from "@common";
import PROJECT_CONFIG from "projectConfig";
import moment from "moment";

export default {
  name: 'ui_list_word_01',
  reused: true,
  props: {
    namespace: String,
    controlPagination: {  // 控制分页显示隐藏  简化版的咨询列表不需要显示分页
      type: Boolean,
      default: true,
    },
    controlTime: {  // 控制时间显示隐藏  简化版的咨询列表不需要显示时间
      type: Boolean,
      default: true,
    },
    maxNum: Number,  // 控制显示的数量 简化版需要控制显示资讯个数
  },
  data () {
    return {
      activitysList: [], // 活动资讯列表
      CONFIG: null,
      totalCount: 0,
      paramsObj: null,  // 请求参数
    };
  },

  mounted () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].list_word.list_word_02;
    this.queryActivityInfo();
  },

  methods: {
    queryActivityInfo (param) { // 活动列表查询
      this.paramsObj = Object.assign({}, this.CONFIG.params);
      if (param) {
        this.paramsObj.pageNo = param.pageNo;
        this.paramsObj.pageSize = param.pageSize;
      }
      Post(this.CONFIG.url, this.paramsObj).then(rep => {
        this.totalCount = rep.data.totalCount;
        var data = rep.data.result;
        if (data && data instanceof Array && data.length > 0) {
          this.activitysList = this.maxNum !== undefined && this.maxNum <= data.length ? data.slice(0, this.maxNum + 1) : data;
        }
      });
    },
    toInfoDetail(pubId, colId) { // 跳转咨询详情
      window.location.href = "../pages/informationdetail.html?pubId=" + pubId + '&conditions=' + this.paramsObj.conditions + '&orderBy=' + this.paramsObj.orderBy + '&pageNo=' + this.paramsObj.pageNo + '&pageSize=' + this.paramsObj.pageSize;
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
.ui_list_word_01 {
  width: 100%;
  margin: 0 auto;
}

.ui_list_word_01 .listUl {
  padding-left: 0px;
  margin: 0px;
}

.ui_list_word_01 .listUl .listLi {
  list-style-type: none;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
}

.ui_list_word_01 .listLi .createTime {
  float: right;
  font-size: 14px;
  color: #bcbcbc;
}
</style>