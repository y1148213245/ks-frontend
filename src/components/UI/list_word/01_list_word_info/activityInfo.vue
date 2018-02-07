/*
 * @Author: song 
 * @Date: 2018-02-01 17:31:41 
 * @Last Modified by: song
 * @Last Modified time: 2018-02-06 16:35:20
 */
<!-- 活动资讯 -->
<template>
  <div class="ui_list_word_01">
    <div>
      <div class="activitytitle">活动资讯</div>
      <div class="more" @click="moreInfo()">更多</div>
    </div>
    
    <div class="activityCon">
      <ul>
        <li v-for="(item, index) in activitysList" :key="index" v-if="activitysList.length > 0 && index < maxNum" :title="item.information_SYS_TOPIC">
          <span v-text="item.information_SYS_TOPIC"></span>
        </li>
        <li v-if="activitysList.length === 0">暂无数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Get, Post } from "@common";
import PROJECT_CONFIG from "projectConfig";

export default {
  name: 'ui_list_word_01',
  reused: true,
  props: ["namespace"],
  data () {
    return {
      activitysList: [], // 活动资讯列表
      CONFIG: null,
      maxNum: 0,
    };
  },

  mounted () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].list_word.list_word_01;
    this.maxNum = this.CONFIG.maxNum;
    this.queryActivityInfo();
  },

  methods: {
    queryActivityInfo () {
      // 活动列表查询
      Post(this.CONFIG.url, this.CONFIG.params).then(rep => {
        var data = rep.data.result;
        if (data && data instanceof Array && data.length > 0) {
          this.activitysList = data;
        }
      });
    },
    moreInfo() {
      window.location.href = "../pages/informationlist.html";
    }
  }
}

</script>
<style>
.ui_list_word_01 {
  display: inline-block;
  width: 314px;
  height: 310px;
  padding: 0px 20px;
  border: 1px solid #ddd;
}

.ui_list_word_01 .activitytitle {
  float: left;
  margin: 10px 0px;
  font-weight: bold;
}

.ui_list_word_01 .more {
  float: right;
  margin: 10px 0px;
  cursor: pointer;
}

.ui_list_word_01 .activityCon {
  clear: both;
}

.ui_list_word_01 .activityCon ul {
  padding-left: 0px;
}

.ui_list_word_01 .activityCon li {
  list-style-type: none;
  height: 32px;
  line-height: 32px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ui_list_word_01 .activityCon li span {
  cursor: pointer;
}
</style>