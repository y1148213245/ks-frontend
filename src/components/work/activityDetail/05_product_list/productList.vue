<!-- 作品列表 -->
<template>
 <div class="work_activitydetail_05">
    <div class="work_activitydetail_05-totalcount">总数</div>
    <template v-for="(item,index) in list">
      <div class="work_activitydetail_05-item" :key="index">
        <el-row>
          <el-col :span="18">
            <el-row>
              <el-col :span="8" class="work_activitydetail_05-title_box"><div v-text="item[keys.title]"></div></el-col>
              <el-col :span="8" class="work_activitydetail_05-author_box"><div v-text="item[keys.author]"></div></el-col>
              <el-col :span="8" class="work_activitydetail_05-date_box"><div v-text="item[keys.date]"></div></el-col>
            </el-row>
            <div v-text="item[keys.abstract]"></div>
            <div v-text="item[keys.teacherCommentNum]"></div>
          </el-col>
          <el-col :span="6" class="work_activitydetail_05-vote_box">
            <div>
              <el-button type="button">投票</el-button>
            </div>
            <div><span v-text="item[keys.voteNum]"></span>票</div>
            </el-col>
        </el-row>
      </div>
    </template>
    <ui_pagination layout="prev, pager, next, jumper"></ui_pagination>
 </div>
</template>

<script>
import URL from "url";
import PROJECT_CONFIG from "projectConfig";
import { Post } from "@common";
export default {
  name: 'work_activitydetail_05',
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
    this.projectConfig.isDevelopment ? this.loadData() : this.$bus.on(this.projectConfig.eventName_listenLoadedData,this.loadData);
    this.$bus.on(this.projectConfig.eventName_listenSearch,this.loadData);
   },

  mounted () { },

  methods: {
    initConfig () {
      this.projectConfig = PROJECT_CONFIG[this.namespace].activityDetail.work_activitydetail_05;
      this.keys = this.projectConfig.keys;
    },
    loadData(param){
      console.log(param);
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
.work_activitydetail_05 {
  width: 100%;
}
.work_activitydetail_05-totalcount {
  margin: 10px 0;
  font-size: 14px;
}
.work_activitydetail_05-item{
  margin-top: 10px;
}
.work_activitydetail_05-title_box{

}
.work_activitydetail_05-author_box{

}
.work_activitydetail_05-date_box{
  text-align: right;
}
.work_activitydetail_05-vote_box{
  text-align: center;
}
.work_activitydetail_05-vote_box button{
  width: 40%;
}
</style>
