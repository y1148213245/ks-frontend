<!-- 活动列表展示页 -->
<template>
  <div class="ui_pic_list_21 ui_pic_list_21_main">
    <el-row>
      <el-col :span="12" v-for="(item, index) in activityList" :key="index">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="item[keys.pub_picMiddle]" class="image" alt="暂无图片" :href="goDetail(item[keys.id])">
          <div style="padding: 10px;">
            <a class="ac_title" :href="goDetail(item[keys.id])">{{item[keys.PORTAL_ACTIVITY_SYS_TOPIC] }}</a>
            <div class="clearfix">
              <div class="ac_text"><span>活动时间：</span>
                <time class="time">{{item[keys.PORTAL_ACTIVITY_BEGIN_TIMESTAMPNEW] |
                  formatDay}}至{{item[keys.PORTAL_ACTIVITY_END_TIMESTAMPNEW] | formatDay}}
                </time>
              </div>
              <el-button type="text" class="button" :class="{'activityIn': item[keys.activityStatus] == '进行中'}">{{item[keys.activityStatus]}}</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <ui_pagination :page-sizes="[8,16,32,64]"></ui_pagination>
  </div>
</template>

<script>
  import PROJECT_CONFIG from "projectConfig";
  import {Post} from "@common";
  import URL from "url";

  export default {
    name: "ui_list_pic_21",
    reused: true,
    props: {
      namespace: String
    },
    data() {
      return {
        currentDate: new Date(),
        activityList: [],
        keys:null
      };
    },
    mounted: function () {
      this.CONFIG = PROJECT_CONFIG[this.namespace].list_pic.ui_list_pic_21;
      this.keys=this.CONFIG.keys;
      this.params = Object.assign({}, this.CONFIG.params);
      let pubColId = JSON.parse(this.params.conditions);
      pubColId[0]["pub_col_id"] = URL.parse(document.URL, true).query.colId;
      this.params.conditions = JSON.stringify(pubColId);
      this.getData();
    },
    methods: {
      getData: function () {
        Post(CONFIG.BASE_URL+this.CONFIG.url, this.params).then((req) => {
          let data = req.data.result;
          let currentTime = new Date().getTime();
          if (data && data instanceof Array && data.length > 0) {
            data.forEach(function(item){
              if (item.PORTAL_ACTIVITY_END_TIMESTAMPNEW - currentTime <= 0) {
                item.activityStatus = "已结束";
              }else{
                item.activityStatus = "进行中";
              }
            })
            this.activityList=data;
          }
        })
      },
      goDetail:function(id){
        return this.CONFIG.detailHref+"?pubId="+id;
      }
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
