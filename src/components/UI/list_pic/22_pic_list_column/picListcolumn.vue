<!-- 作者列表 -->
<template>
  <div class="ui_pic_list_22 ui_pic_list_22_main">
  <el-row>
  <el-col :span="24" v-for="(o, index) in 4" :key="o">
    <el-card :body-style="{ padding: '0px' }">
      <a href="./activitylist.html"><img src="./img/pic1.jpg"  class="ac_image"></a>
      <div style="padding: 14px;">
        <span class="ac_title">首届“防震减灾”公益作文大赛</span>
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
      currentDate: new Date()
    };
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
