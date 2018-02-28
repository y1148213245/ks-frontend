<!-- 教师列表 -->
<template>
 <div class="work_activitydetail_06">
    <template v-for="(item,index) in list">
      <div class="work_activitydetail_06-item" :key="index">
        <div class="work_activitydetail_06-img_box">
          <img :src="item[keys.picUrl]" alt="暂无头像" class="work_activitydetail_06-img">
        </div>
        <div class="work_activitydetail_06-content">
          <div class="work_activitydetail_06-title" v-text="item[keys.name]"></div>
          <div class="work_activitydetail_06-commentProduct">点评了文章《<span v-text="item[keys.commentProduct]"></span>》</div>
          <div class="work_activitydetail_06-commentContent" v-text="item[keys.commentContent]"></div>
        </div>
      </div>
    </template>
    <div>
      <ui_pagination :pageMessage="{totalCount}" :excuteFunction="toPaging" :pageSizes="this.projectConfig.params.paging_pageSizes"></ui_pagination>
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
    namespace:String,
  },
  data () {
    return {
      projectConfig: null,
      keys: null,
      list:[],
      totalCount:0,
      activityDetailCache:null,
    };
  },

  computed: {},

  created () { 
    this.initConfig();
    this.projectConfig.isDevelopment ? this.loadData() : this.$bus.on(this.projectConfig.eventName_listen,this.loadData); 
    this.loadData()//临时
  },

  mounted () { },

  methods: {
    initConfig () {
      this.projectConfig = PROJECT_CONFIG[this.namespace].activityDetail.work_activitydetail_06;
      this.keys = this.projectConfig.keys;
    },
    loadData(activityDetail){
      if(activityDetail){
        this.activityDetailCache = activityDetail;
      }
      let param_activityId = this.keys.requestParam_activityId + '=601948';
      let param_memberType = this.keys.requestParam_memberType + '=' +  this.projectConfig.params.requestParam_memberType;
      let param_pageNo = this.keys.requestParam_pageNo + '=' + this.projectConfig.params.requestParam_pageNo;
      let param_pageSize = this.keys.requestParam_pageSize + '=' + this.projectConfig.params.requestParam_pageSize;

      let url = this.projectConfig.url + '?' + param_activityId + '&' + param_memberType + '&' + param_pageNo + '&' + param_pageSize;
      Get(url).then((resp)=>{
        let data = resp.data.data;
        this.list = data;
        this.totalCount = parseInt(resp.data.totalCount);
      })
    },
    toPaging({pageNo,pageSize}){
      this.projectConfig.params.requestParam_pageNo = pageNo;
      this.projectConfig.params.requestParam_pageSize = pageSize;
      this.loadData();
    }
  }
}

</script>
<style>
.work_activitydetail_06{
  width: 100%;
}
.work_activitydetail_06-item{
  margin-top: 10px;
  width: 100%;
  overflow: hidden;
}
.work_activitydetail_06-img_box{
  float: left;
  width: 100px;
}
.work_activitydetail_06-img{
  width: 100px;
  height: 100px;
}
.work_activitydetail_06-content{
  margin-left: 100px;
  padding-left: 20px;
}
.work_activitydetail_06-title{

}
.work_activitydetail_06-commentProduct{
  margin-top: 10px;
  font-size: 12px;
}
.work_activitydetail_06-commentContent{
  margin-top: 10px;
  font-size: 12px;

}
</style>
