<!-- 竞赛新闻组件 -->
<template>
 <div class="work_activitydetail_03">
   <template v-for="(item,index) in  list">
    <div class="work_activitydetail_03-item" :key="index">
      <div class="work_activitydetail_03-item-title" v-text="item[keys.title]"></div>
      <div class="work_activitydetail_03-item-img_box">
        <img class="work_activitydetail_03-item-img" :src="item[keys.picUrl]" alt="暂无图片">
      </div>
      <div class="work_activitydetail_03-item-content">
        <span class="work_activitydetail_03-item-content-date" v-text="item[keys.date]"></span>
        <div class="work_activitydetail_03-item-content-abstract" v-text="item[keys.abstract]"></div>
      </div>
    </div>
   </template>
 </div>
</template>

<script>
import URL from "url";
import PROJECT_CONFIG from "projectConfig";
import { Post } from "@common";
export default {
  name: 'work_activitydetail_03',
  reused: true,
  props: {
    namespace:String
  },
  data () {
    return {
      projectConfig: null,
      keys:null,
      list:[],
    };
  },

  computed: {},

  created () {
    this.initConfig();
    this.projectConfig.isDevelopment ? this.loadDatas() : this.$bus.on(this.projectConfig.eventName_listen,this.loadDatas);
   },

  mounted () { },

  methods: {
    initConfig () {
      this.projectConfig = PROJECT_CONFIG[this.namespace].activityDetail.work_activitydetail_03;
      this.keys = this.projectConfig.keys
    },
    loadDatas(params){
      let url = this.projectConfig.url;

      Post(url).then((resp)=>{
        let data = resp.data.data;
        this.list = data;
      })
    }
  }
}

</script>
<style>
.work_activitydetail_03 {

  width: 100%;
}
.work_activitydetail_03-item {
    margin-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid slategray;
}
.work_activitydetail_03-item-title {
  margin: 10px 0;
  font-size: 18px
}
.work_activitydetail_03-item-img_box {
  float: left;
  width: 200px;
}
.work_activitydetail_03-item-img {
  border: 1px solid black;
  width: 100%;
  height: 100%;
  text-align: center;
}
.work_activitydetail_03-item-content {
  margin-left: 200px;
  font-size: 12px;
}
.work_activitydetail_03-item-content-date {
  font-size: 12px;
  color: #aeaeae;
}
.work_activitydetail_03-item-content-abstract {
}
</style>
