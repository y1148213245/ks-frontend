<!-- 作品列表 -->
<template>
 <div class="work_activitydetail_05">
    <div class="work_activitydetail_05-totalcount">总数<span v-text="totalCount"></span></div>
    <template v-for="(item,index) in list">
      <div class="work_activitydetail_05-item" :key="index">
        <el-row>
          <el-col :span="18">
            <el-row>
              <el-col :span="8" class="work_activitydetail_05-title_box"><div v-text="item[keys.title]" @click="toProductDetail(item)"></div></el-col>
              <el-col :span="8" class="work_activitydetail_05-author_box"><div v-text="item[keys.author] || '暂无作者'"></div></el-col>
              <el-col :span="8" class="work_activitydetail_05-date_box"><div>{{item[keys.date] | formatTime}}</div></el-col>
            </el-row>
            <div v-text="item[keys.abstract] || '暂无简介'"></div>
            <div>共<span v-text="item[keys.teacherCommentNum]"></span>篇教师点评</div>
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
import { Get } from "@common";
import Moment from "moment";

export default {
  name: 'work_activitydetail_05',
  reused: true,
  props: {
    namespace: String,
  },
  data () {
    return {
      projectConfig: null,
      keys: null,
      list: [],
      totalCount:0,
    };
  },

  computed: {},

  created () {
    this.initConfig();
    this.projectConfig.isDevelopment ? this.loadData() : this.$bus.on(this.projectConfig.eventName_listenLoadedData, this.loadData);
    this.$bus.on(this.projectConfig.eventName_listenSearch, this.loadData);
     this.loadData ()//临时
  },

  mounted () { },

  methods: {
    initConfig () {
      this.projectConfig = PROJECT_CONFIG[this.namespace].activityDetail.work_activitydetail_05;
      this.keys = this.projectConfig.keys;
    },
    toProductDetail(product){
      let param_resourceType = this.keys.toProductDetailParam_resourceType + '=' + this.projectConfig.params.toProductDetailParam_resourceType;
      let param_resourceId = this.keys.toProductDetailParam_resourceId + '=' + product[this.keys.resourceId];
      let param_resourceName = this.keys.toProductDetailParam_resourceName + '=' + product[this.keys.resourceName];
      let param_activityId = this.keys.toProductDetailParam_activityId + '=' + product[this.keys.activityId];
      
      let url = this.projectConfig.toProductDetailUrl + '?' + param_resourceType + '&' + param_resourceId + '&' +  param_resourceName + '&' +  param_activityId + '&colId=';
      window.location.href = url;
    },
    loadData (param) {
      let url = this.projectConfig.url;
      let params = this.projectConfig.params
      if (params) {
        url += '?doclibCode=' + params.doclibCode + '&relations=' + params.relations + '&cols=' + params.cols + '&symbols=' + params.symbols + '&vals=' + params.vals +'&memberType=' + params.memberType
      }
      Get(url).then((resp) => {
        let data = resp.data.data.content;
        this.list = data;
        this.totalCount = resp.data.data.totalElements
      })
    }
  },
  filters:{
    formatTime(str){
      if(str){
        return Moment(str).format("YYYY-MM-DD hh:mm")
      }else {
        return '暂无日期'
      }
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
.work_activitydetail_05-item {
  margin-top: 10px;
}
.work_activitydetail_05-title_box {
}
.work_activitydetail_05-author_box {
}
.work_activitydetail_05-date_box {
  text-align: right;
}
.work_activitydetail_05-vote_box {
  text-align: center;
}
.work_activitydetail_05-vote_box button {
  width: 40%;
}
</style>
