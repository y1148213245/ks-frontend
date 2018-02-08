<!-- 竞赛详情 -->
<template>
  <div class="work_activitydetail_01">
    <p class="work_activitydetail_01-title" v-text="detail[keys.title]"></p>
    <div class="work_activitydetail_01-swiper">
      <!-- 轮播图组件 -->
      <ui_swiper_06></ui_swiper_06><!-- END 轮播图组件 -->
    </div>
    <div class="work_activitydetail_01-text_content" v-text="detail[keys.content]"></div>
    <div class="work_activitydetail_01-upload_box">
      <div class="work_activitydetail_01-upload_box-button" @click="toUploadPage">上传作品</div>
      <div class="work_activitydetail_01-upload_box-button work_activitydetail_01-upload_box-button--failed">已结束</div>
    </div>
  </div>
</template>

<script>
import URL from "url";
import PROJECT_CONFIG from "projectConfig";
import { Post } from "@common";
export default {
  name: 'work_activitydetail_01',
  reused: true,
  props: {
    namespace: String,
  },
  data () {
    return {
      projectConfig: null,
      keys:null,
      detail:{},
    };
  },

  computed: {},

  created () {
    this.initConfig();
    this.loadDatas();
  },

  mounted () { },

  methods: {
    initConfig () {
      this.projectConfig = PROJECT_CONFIG[this.namespace].activityDetail.work_activitydetail_01;
      this.keys = this.projectConfig.keys
    },
    loadDatas(){
      let url = this.projectConfig.url;

      Post(url).then((resp)=>{
        let data = resp.data.data;
        this.detail = data;
        this.$bus.emit(this.projectConfig.eventName_loadedDatas,data);
      })
    },
    toUploadPage(){
      if(this.projectConfig.toUploadPagUrl){
        window.location.href = this.projectConfig.toUploadPagUrl
      }
    }
  }
}

</script>
<style>
.work_activitydetail_01 {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
.work_activitydetail_01-title {
  text-align: center;
  font-weight: 700;
  font-style: normal;
  font-size: 28px;
}
.work_activitydetail_01-swiper {
}
.work_activitydetail_01-text_content {
}
.work_activitydetail_01-upload_box {
  width: 100%;
  text-align: center;
}
.work_activitydetail_01-upload_box-button {
  width: 200px;
  height: 45px;
  line-height: 45px;
  margin: 0 auto;
  border-radius: 11px;
  font-size: 14px;
  box-shadow: none;
  color: white;
  background-color: black;
  cursor: pointer;
}
.work_activitydetail_01-upload_box-button--failed {
  background-color: rgba(215, 215, 215, 1);
  color: #a1a1a1;
}
</style>
