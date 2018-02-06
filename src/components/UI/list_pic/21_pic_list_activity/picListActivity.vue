<!-- 作者列表 -->
<template>
  <div>
     <el-row>
  <el-col :span="17" v-for="(o, index) in 4" :key="o" :offset="index > 0 ? 4 : 0">
    <el-card :body-style="{ padding: '0px' }">
      <!-- < img src="./examples/assets/images/hamburger.png" class="image"> -->
      <div style="padding: 14px;">
        <span class="ac_title">首届“防震减灾”公益作文大赛</span>
        <div class="clearfix">
          <div class="ac_text"><span>活动时间：</span><time class="time">{{ currentDate }}</time></div>
          <el-button type="text" class="button">进行中</el-button>
        </div>
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
  name: "ui_list_pic_21",
  reused: true,
  props: {
    namespace: String
  },
  data() {
    return {
      currentDate: new Date()
    };
  }
};
</script>
<style>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}
.button {
  font-family: "Arial Negreta", "Arial";
  font-weight: 700;
  font-style: normal;
  font-size: 18px;
  color: #3498db;
  text-align: right;
}
.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.ac_title {
  font-family: "Arial Negreta", "Arial";
  font-weight: 700;
  font-style: normal;
  font-size: 18px;
}
.ac_text {
    display: inline-block;
  font-family: "Arial Normal", "Arial";
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
