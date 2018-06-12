<!-- 教师列表 -->
<template>
 <div class="work_activitydetail_06">
    <template v-for="(item,index) in list">
      <div class="work_activitydetail_06-item" :key="index">
        <div class="work_activitydetail_06-img_box">
          <a href="javascript:void(0)"><img :src="item[keys.picUrl]" alt="暂无头像" class="work_activitydetail_06-img" @click="showDetail(item)"></a>
        </div>
        <div class="work_activitydetail_06-content">
          <h2 class="work_activitydetail_06-title"><a v-text="item[keys.name]" @click="showDetail(item)" href="javascript:void(0)"></a></h2>
          <span class="work_activitydetail_06-commentProduct">点评了文章《<a v-text="item[keys.commentProduct]" @click="toProductDetail(item)"></a>》</span>
          <p class="work_activitydetail_06-commentContent" v-text="item[keys.commentContent]"></p>
        </div>
      </div>
    </template>
    <el-dialog :visible.sync="dialogTableVisible">
      <img class="work_activitydetail_06-member_img" src="./assets/img/work_activitydetail_06-default.jpg" alt="暂无图片">
      <p class="work_activitydetail_06-member_introduction">静态数据：个人简介，是当事人全面而简洁地介绍自身情况的一种书面表达方式。求职过程中撰写的个人简介是求职者向欲供职单位全面、简洁、条理清晰地自我介绍、自我推荐的文书。简介是应用写作学研究的一种日常应用文体。</p>
    </el-dialog>
    <div>
      <ui_pagination :pageMessage="{totalCount}" :excuteFunction="toPaging" :pageSizes="this.CONFIG.params.paging_pageSizes"></ui_pagination>
    </div>
 </div>
</template>

<script>
import URL from "url";
import PROJECT_CONFIG from "projectConfig";
import { Get } from "@common";
export default {
  name: 'work_activitydetail_06',
  reused: true,
  props: {
    namespace: String,
  },
  data () {
    return {
      CONFIG: null,
      keys: null,
      list: [],
      totalCount: 0,
      dialogTableVisible: false,
      activityDetailCache: null,
    };
  },

  computed: {},

  created () {
    this.initConfig();
    this.CONFIG.isDevelopment ? this.loadData() : this.$bus.on(this.CONFIG.eventName_listen, this.loadData);
  },

  mounted () { },

  methods: {
    initConfig () {
      this.CONFIG = PROJECT_CONFIG[this.namespace].activityDetail.work_activitydetail_06;
      this.keys = this.CONFIG.keys;
    },
    loadData (activityDetail) {
      if (activityDetail) {
        this.activityDetailCache = activityDetail;
      }
      let param_activityId = this.keys.requestParam_activityId + '=' + this.activityDetailCache[this.keys.eventName_listenData_activityId];
      let param_memberType = this.keys.requestParam_memberType + '=' + this.CONFIG.params.requestParam_memberType;
      let param_pageNo = this.keys.requestParam_pageNo + '=' + this.CONFIG.params.requestParam_pageNo;
      let param_pageSize = this.keys.requestParam_pageSize + '=' + this.CONFIG.params.requestParam_pageSize;

      let url = this.CONFIG.url + '?' + param_activityId + '&' + param_memberType + '&' + param_pageNo + '&' + param_pageSize;
      Get(CONFIG.BASE_URL + url).then((resp) => {
        let data = resp.data.data;
        this.list = data;
        this.totalCount = parseInt(resp.data.totalCount);
      })
    },
    showDetail (item) {
      this.dialogTableVisible = true;

      Get(CONFIG.BASE_URL + 'user/getMemberByName.do', {
        params: {
          loginName: 'william'
        }
      }).then(resp => {
        // console.log(resp.data)
      })
    },
    toProductDetail (product) {
      let vconfig = this.CONFIG.toProductDetail;
      let dataKeys = vconfig.dataKeys;
      let fixKeys = vconfig.fixKeys;
      let superKeys=vconfig.superKeys;
      let url = vconfig.url + '?';

      for (const key in superKeys) {
        const element = superKeys[key];
        url += key + '=' + this.activityDetailCache[element] + '&';
      }
      for (const key in dataKeys) {
        const element = dataKeys[key];
        url += key + '=' + product[element] + '&';
      }
      for (const key in fixKeys) {
        const element = fixKeys[key];
        url += key + '=' + element + '&';
      }
      url = url.substring(0, url.length - 1);

      window.location.href = url;
    },
    toPaging ({ pageNo, pageSize }) {
      this.CONFIG.params.requestParam_pageNo = pageNo;
      this.CONFIG.params.requestParam_pageSize = pageSize;
      this.loadData();
    }
  }
}

</script>
<style>
.work_activitydetail_06 {
  width: 100%;
}
.work_activitydetail_06-item {
  margin-top: 10px;
  width: 100%;
  overflow: hidden;
}
.work_activitydetail_06-img_box {
  float: left;
  width: 100px;
}
.work_activitydetail_06-img {
  width: 100px;
  height: 100px;
}
.work_activitydetail_06-content {
  margin-left: 100px;
  padding-left: 20px;
}
.work_activitydetail_06-title {
}
.work_activitydetail_06-commentProduct {
  margin-top: 10px;
  font-size: 12px;
}
.work_activitydetail_06-commentContent {
  margin-top: 10px;
  font-size: 12px;
}
</style>
