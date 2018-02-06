/*
 * @Author: song 
 * @Date: 2018-02-05 17:24:29 
 * @Last Modified by: song
 * @Last Modified time: 2018-02-05 17:47:59
 */
<!-- 活动资讯列表 -->
<template>
  <div class="ui_list_word_02">
    <ul class="listUl">
      <li class="listLi" v-for="(item, index) in activitysList" :key="index">
        <span v-text="item.title"></span>
        <span class="createTime" v-text="item.time"></span>
      </li>
    </ul>
    <ui_pagination></ui_pagination>
  </div>
</template>

<script>
import { Get } from "@common";
import PROJECT_CONFIG from "projectConfig";

export default {
  name: 'ui_list_word_02',
  reused: true,
  props: ["namespace"],
  data () {
    return {
      activitysList: [], // 活动资讯列表
      CONFIG: null,
    };
  },

  mounted () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].list_word.list_word_02;
    this.queryActivityInfo();
  },

  methods: {
    queryActivityInfo () {
      // 活动列表查询
      Get(this.CONFIG.url, { params: this.CONFIG.params }).then(rep => {
        this.activitysList = rep.data.data;
      });
    }
  }
}

</script>
<style>
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
  color:#BCBCBC;
}
</style>