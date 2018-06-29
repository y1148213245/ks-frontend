<!-- 活动列表展示页 -->
<template>
  <div class="ui_pic_list_21 ui_pic_list_21_main">
      <h1 v-if="CONFIG.showItem.indexOf('title') != -1" class="ui_pic_list_21-h1" v-text="colDetail[CONFIG.getColDetail.keys.name]"></h1>
      <el-card :body-style="{ padding: '0px' }" v-for="(item, index) in activityList" :key="index">
        <div class="ui_pic_list_21-card_content"  @click="toDetail(item[keys.id])" >
            <div class="ui_pic_list_21-img_box">
              <img :src="item[keys.pub_picMiddle]" class="image" :alt="CONFIG && CONFIG.staticText && CONFIG.staticText.noImg ? CONFIG.staticText.noImg : '暂无图片'" :href="goDetail(item[keys.id])">
            </div>
            <div class="ui_pic_list_21-title_box" >
              <a class="ac_title" :href="goDetail(item[keys.id])">{{item[keys.PORTAL_ACTIVITY_SYS_TOPIC] }}</a>
              <div class="clearfix">
                <div class="ac_text">
                  <span>{{CONFIG && CONFIG.staticText && CONFIG.staticText.activityTime ? CONFIG.staticText.activityTime : '活动时间：'}}</span>
                  <time class="time">{{item[keys.PORTAL_ACTIVITY_BEGIN_TIMESTAMPNEW] |
                    formatDateNEW}}{{CONFIG && CONFIG.staticText && CONFIG.staticText.to ? CONFIG.staticText.to : '至'}}{{item[keys.reviewDate] | formatDateNEW}}
                  </time>
                </div>

                <template v-for="(status,i) in activityStatus">
                  <el-button v-if="item.activityStatus == status.title" type="text" class="button" :key="i" :class="{[status.class]: item.activityStatus == status.title}">{{item.activityStatus}}</el-button>
                </template>

              </div>
            </div>
        </div>
      </el-card>
    <ui_pagination :page-sizes="CONFIG.pageSizes" :pageMessage="{totalCount}" :excuteFunction="paging"></ui_pagination>
  </div>
</template>

<script>
import PROJECT_CONFIG from "projectConfig";
import { Post } from "@common";
import URL from "url";

export default {
  name: "ui_list_pic_21",
  reused: true,
  props: {
    namespace: String
  },
  data () {
    return {
      CONFIG: null,
      currentDate: new Date(),
      activityList: [],
      totalCount: 0,
      pageNo: '',
      pageSize: '',
      keys: null,
      colDetail: '',
      activityStatus: [
        { title: CONFIG && CONFIG.staticText && CONFIG.staticText.notBegin ? CONFIG.staticText.notBegin : '未开始', class: 'activity_notstart' },
        { title: CONFIG && CONFIG.staticText && CONFIG.staticText.inProgress ? CONFIG.staticText.inProgress :'进行中', class: 'activity_active' },
        { title: CONFIG && CONFIG.staticText && CONFIG.staticText.appraisalBonus ? CONFIG.staticText.appraisalBonus :'评奖中', class: 'activity_review' },
        { title: CONFIG && CONFIG.staticText && CONFIG.staticText.haveFinished ? CONFIG.staticText.haveFinished :'已结束', class: 'activity_end' }
      ]

    };
  },
  created () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].list_pic.ui_list_pic_21;
    this.keys = this.CONFIG.keys;
    this.params = Object.assign({}, this.CONFIG.params);
    let pubColId = JSON.parse(this.params.conditions);
    this.colId = URL.parse(document.URL, true).query.colId;
    pubColId[0]["pub_col_id"] = this.colId;
    this.params.conditions = JSON.stringify(pubColId);
    this.getColDetail();
    this.getData();
  },
  mounted: function () {


  },
  methods: {
    getColDetail () {
      let getCol = this.CONFIG.getColDetail;
      let query = URL.parse(document.URL, true).query;
      let url =  this.CONFIG.getColDetail.url + '?';
      for (const key in getCol.params) {
          const element = getCol.params[key];
          url += key + '=' + query[element] + '&'
      }
      url = url.slice(0,url.length-1);
      Post(CONFIG.BASE_URL + url).then(resp => {
        this.colDetail = resp.data.data;
      })
    },
    getData: function () {
      let keys = this.CONFIG.keys;
      this.params.pageNo = this.pageNo ? this.pageNo : this.params.pageNo;
      this.params.pageSize = this.pageSize ? this.pageSize : this.params.pageSize;
      Post(CONFIG.BASE_URL + this.CONFIG.url, this.params).then((req) => {
        let data = req.data.result;
        this.totalCount = req.data.totalCount;
        let currentTime = new Date().getTime();
        if (data && data instanceof Array && data.length > 0) {
          data.forEach(function (item) {
            if (currentTime < item[keys.PORTAL_ACTIVITY_END_TIMESTAMPNEW] && currentTime < item[keys.reviewDate] && currentTime > item[keys.PORTAL_ACTIVITY_BEGIN_TIMESTAMPNEW]) {
              item.activityStatus = CONFIG && CONFIG.staticText && CONFIG.staticText.inProgress ? CONFIG.staticText.inProgress :'进行中';
            }
            else if (currentTime < item[keys.PORTAL_ACTIVITY_END_TIMESTAMPNEW] && currentTime > item[keys.reviewDate]) {
              item.activityStatus = CONFIG && CONFIG.staticText && CONFIG.staticText.appraisalBonus ? CONFIG.staticText.appraisalBonus :'评奖中';
            }
            else if (currentTime < item[keys.PORTAL_ACTIVITY_BEGIN_TIMESTAMPNEW]) {
              item.activityStatus = CONFIG && CONFIG.staticText && CONFIG.staticText.notBegin ? CONFIG.staticText.notBegin : '未开始';
            }
            else {
              item.activityStatus = CONFIG && CONFIG.staticText && CONFIG.staticText.haveFinished ? CONFIG.staticText.haveFinished :'已结束';
            }
          })
          this.activityList = data;
        }
      })
    },
    goDetail: function (id) {
      return this.CONFIG.detailHref + "?pubId=" + id;
    },
    toDetail (id) {
      window.location.href = this.CONFIG.detailHref + "?pubId=" + id
    },
    paging ({ pageNo, pageSize }) {
      this.pageNo = pageNo;
      this.pageSize = pageSize;
      this.getData();
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
.ui_pic_list_21-title_box {
  padding: 10px;
}
.ui_pic_list_21-img_box {
  cursor: pointer;
}
</style>
