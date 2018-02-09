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
          <div class="work_activitydetail_06-comment" v-text="item[keys.comment]"></div>
          <div class="work_activitydetail_06-abstract" v-text="item[keys.abstract]"></div>
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
    };
  },

  computed: {},

  created () { 
    this.initConfig();
    this.projectConfig.isDevelopment ? this.loadData() : this.$bus.on(this.projectConfig.eventName_listen,this.loadData); 
  },

  mounted () { },

  methods: {
    initConfig () {
      this.projectConfig = PROJECT_CONFIG[this.namespace].activityDetail.work_activitydetail_06;
      this.keys = this.projectConfig.keys;
    },
    loadData(param){
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
.work_activitydetail_06{
  width: 100%;
}
.work_activitydetail_06-item{
  margin-top: 10px;
  width: 100%;
}
.work_activitydetail_06-img_box{
  float: left;
  width: 100px;
}
.work_activitydetail_06-img{
  
}
.work_activitydetail_06-content{
  margin-left: 100px;
}
.work_activitydetail_06-title{

}
.work_activitydetail_06-comment{

}
.work_activitydetail_06-abstract{

}
</style>
