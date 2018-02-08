<!-- 作者列表 -->
<template>
<div class="ui_pic_list_21 ui_pic_list_21_main">
  <el-row>
    <el-col :span="12" v-for="(o, index) in 4" :key="o">
      <el-card :body-style="{ padding: '0px' }">
      <img src="./img/pic1.jpg"  class="image">
      <div style="padding: 10px;">
        <span class="ac_title">首届“防震减灾”公益作文大赛</span>
        <div class="clearfix">
          <div class="ac_text"><span>活动时间：</span><time class="time">{{ currentDate }}</time></div>
          <el-button type="text" class="button">进行中</el-button>
        </div>
      </div>
      </el-card>
    </el-col>
  </el-row>
  <ui_pagination  :page-sizes="[8,16,32,64]" ></ui_pagination>
</div>
</template>

<script>
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
.ui_pic_list_21_main {
  width: 916px;
  height: 228px;
  margin: 0 auto;
}
.ui_pic_list_21_main .el-card {
  margin: 0 20px 20px 0;
}
ui_pic_list_21_main .time {
  font-size: 13px;
  color: #999;
}

ui_pic_list_21_main .bottom {
  margin-top: 13px;
  line-height: 12px;
}

ui_pic_list_21_main .button {
  padding: 0;
  float: right;
}
ui_pic_list_21_main .button {
  font-family: "Arial Negreta", "Arial";
  font-weight: 700;
  font-style: normal;
  font-size: 18px;
  color: #3498db;
  text-align: right;
}
ui_pic_list_21_main .image {
  width: 459px;
  height: 178px;
  display: block;
}

ui_pic_list_21_main .clearfix:before,
ui_pic_list_21_main .clearfix:after {
  display: table;
  content: "";
}

ui_pic_list_21_main .clearfix:after {
  clear: both;
}
ui_pic_list_21_main .ac_title {
  font-family: "Arial Negreta", "Arial";
  font-weight: 700;
  font-style: normal;
  font-size: 18px;
}
ui_pic_list_21_main .ac_text {
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
