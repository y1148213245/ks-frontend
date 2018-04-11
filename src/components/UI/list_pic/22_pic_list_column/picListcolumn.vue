<!-- 作者列表 -->
<template>
  <div class="ui_pic_list_22 ui_pic_list_22_main">
    <el-row>
      <el-col :span="24" v-for="(item, index) in activityList" :key="index">
        <el-card :body-style="{ padding: '0px'}">
          <a :href="goList(item.id)"><img :src="item[keys.small_pic]"  class="ac_image"></a>
          <div style="padding: 14px;">
            <a class="ac_title" :href="goList(item[keys.id])">{{item[keys.name]}}</a>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import URL from "url";
import PROJECT_CONFIG from "projectConfig";
import { Post } from "@common";

export default {
  name: "ui_list_pic_22",
  reused: true,
  props: {
    namespace: String
  },
  data() {
    return {
      currentDate: new Date(),
      activityList:[],
      keys:null
    }
  },
  mounted:function(){
    this.CONFIG=PROJECT_CONFIG[this.namespace].list_pic.ui_list_pic_22;
    this.keys=this.CONFIG.keys;
    this.getList();
  },
  methods:{
    getList:function(){
      let url=this.CONFIG.url+"?colId="+this.CONFIG.params.colId;
      Post(CONFIG.BASE_URL+url).then((rep)=>{
        if(rep && rep.data.data instanceof Array){
          this.activityList=rep.data.data;
        }
      });
    },
    goList:function(id){
      return this.CONFIG.activityListUrl+"?colId="+id;
    }
  }
};
</script>
<style>
.ui_pic_list_22_main {
  width: 646px;
  float: left;
  margin-right: 30px;
  font-family: "Arial Normal", "Arial";
}

.ui_pic_list_22_main .el-card {
  margin-bottom: 20px;
}

.ui_pic_list_22_main .ac_image {
  width: 646px;
  height: 250px;
  display: block;
}

.ui_pic_list_22_main .ac_title {
  font-weight: 700;
  font-style: normal;
  font-size: 18px;
}

.ui_pic_list_22_main .ac_text {
  display: inline-block;
  font-weight: 400;
  line-height: 40px;
  font-style: normal;
  font-size: 13px;
  visibility: visible;
  text-align: left;
  color: #797979;
  white-space: nowrap;
}
</style>
