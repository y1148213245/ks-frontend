<!-- 辅文详情 -->
<template>
 <div class="work_activitydetail_02">
   <div class="work_activitydetail_02-content" v-html="content[keys.content]"></div>
 </div>
</template>

<script>
import URL from "url";
import PROJECT_CONFIG from "projectConfig";
import { Post } from "@common";
export default {
  name: 'work_activitydetail_02',
  reused: true,
  props: {
    namespace:String
  },
  data () {
    return {
      projectConfig: null,
      keys:null,
      content:{},
    };
  },

  computed: {},

  created () { 
    this.initConfig();
    this.projectConfig.isDevelopment ? this.loadData() : this.$bus.on(this.projectConfig.eventName_listen,this.loadData)
  },

  mounted () { },

  methods: {
    initConfig () {
      this.projectConfig = PROJECT_CONFIG[this.namespace].activityDetail.work_activitydetail_02;
      this.keys = this.projectConfig.keys;
    },
    loadData(data){
      let url = this.projectConfig.url;
      Post(url).then((resp)=>{
        let data = resp.data.data;
        this.content = data;
      })
    }
  }
}

</script>
<style>
.work_activitydetail_02{
  width: 100%;
}
.work_activitydetail_02-content{
  width: 100%;
  position: relative;
}
</style>
