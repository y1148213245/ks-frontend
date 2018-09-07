<!-- 活动列表展示页 -->
<template>
  <div class="ui_pic_list_21 ui_pic_list_21_main">
    <h1 v-if="CONFIG.showItem && CONFIG.showItem.indexOf('title') != -1" class="ui_pic_list_21-h1" :style="{backgroundImage:'url('+ (CONFIG.getColDetail.keys.pic ? colDetail[CONFIG.getColDetail.keys.pic] : colDetail.big_pic) +')',backgroundPosition:'center center'}" v-text="colDetail[CONFIG.getColDetail.keys.name]"></h1>

    <el-card :body-style="{ padding: '0px' }" v-for="(item, index) in activityList" :key="index">
      <div class="ui_pic_list_21-card_content" @click="toDetail(item)">
        <div class="ui_pic_list_21-img_box">
          <img :src="item[keys.pub_picMiddle]" class="image" :alt="getStaticText('noImg') ? getStaticText('noImg') : '暂无图片'">
        </div>
        <div class="ui_pic_list_21-title_box">
          <a class="ac_title">{{item[getKeys(item,'topic')] }}</a>
          <div class="clearfix" v-if="getKeys(item,'beginTime')">
            <div class="ac_text">
              <span>{{getStaticText('activityTime') ? getStaticText('activityTime') : '活动时间：'}}</span>
              <time class="time">{{formatDateNEW(item[getKeys(item,'beginTime')])}}{{getStaticText('to')? getStaticText('to') : '至'}}{{(item[getKeys(item,'reviewDate')] || formatDateNEW(item[getKeys(item,'endTime')]))}}
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
import moment from "moment";

export default {
  name: "ui_list_pic_21",
  reused: true,
  props: {
    namespace: String
  },
  data () {
    return {
      CONFIG: "",
      currentDate: new Date(),
      activityList: [],
      totalCount: 0,
      pageNo: '',
      pageSize: '',
      keys: null,
      colDetail: '',
      activityStatus: []

    };
  },
  created () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].list_pic.ui_list_pic_21;
    this.keys = this.CONFIG.baseKeys;
    this.params = Object.assign({}, this.CONFIG.params);
    let pubColId = JSON.parse(this.params.conditions);
    this.colId = URL.parse(document.URL, true).query.colId;
    pubColId[0]["pub_col_id"] = this.colId;
    this.params.conditions = JSON.stringify(pubColId);
    this.activityStatus = [
      { title: this.getStaticText('notBegin') ? this.getStaticText('notBegin') : '未开始', class: 'activity_notstart' },
      { title: this.getStaticText('inProgress') ? this.getStaticText('inProgress') : '进行中', class: 'activity_active' },
      { title: this.getStaticText('appraisalBonus') ? this.getStaticText('appraisalBonus') : '评奖中', class: 'activity_review' },
      { title: this.getStaticText('haveFinished') ? this.getStaticText('haveFinished') : '已结束', class: 'activity_end' }
    ]
    this.getColDetail();
    this.getData();
  },
  mounted: function () {


  },
  methods: {
    getColDetail () {
      let getCol = this.CONFIG.getColDetail;
      let query = URL.parse(document.URL, true).query;
      let url = this.CONFIG.getColDetail.url + '?';
      for (const key in getCol.params) {
        const element = getCol.params[key];
        url += key + '=' + query[element] + '&'
      }
      url = url.slice(0, url.length - 1);
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
          data.forEach(item => {

            if (currentTime > item[this.getKeys(item, 'endTime')]) {
              item.activityStatus = this.getStaticText('haveFinished') ? this.getStaticText('haveFinished') : '已结束';
            } else if (currentTime < item[this.getKeys(item, 'beginTime')]) {
              item.activityStatus = this.getStaticText('notBegin') ? this.getStaticText('notBegin') : '未开始';
            } else if (this.getKeys(item,'reviewDate') && currentTime > item[this.getKeys(item,'reviewDate')]) {
              item.activityStatus = this.getStaticText('appraisalBonus') ? this.getStaticText('appraisalBonus') : '评奖中';
            } else {
              item.activityStatus = this.getStaticText('inProgress') ? this.getStaticText('inProgress') : '进行中';
            }
          })
          this.activityList = data;
        }
      })
    },
    goDetail: function (id) {
      return this.CONFIG.detailHref + "?pubId=" + id;
    },
    getKeys (activity, key) {
      let keys = this.CONFIG.keys
      switch (activity[this.keys.resourceType]) {
        case 'PORTAL_ACTIVITY': {
          return keys.contribute[key]
          break;
        }
        case 'PORTAL_VOTEACTIVITY': {
          return keys.vote[key]
          break;
        }
        case 'PORTAL_SHOWACTIVITY':{
          return keys.show[key]
        }
        default: {
          console.log('is not activity or not property:' + key);
          return ''
          break;
        }
      }
    },
    toDetail (activity) {

      let hrefs = this.CONFIG.detailHref
      let href = '';
      switch (activity[this.keys.resourceType]) {
        case 'PORTAL_ACTIVITY': {
          href = hrefs.activityrace;
          break;
        }
        case 'PORTAL_VOTEACTIVITY': {
          href = hrefs.activityvote;
          break;
        }
        case 'PORTAL_SHOWACTIVITY':{
          href = hrefs.activityshow;
          break;
        }
        default: {/* 默认为 */
          console.log('is not activity');
          break;
        }
      }
      window.location.href = href + "?pubId=" + activity[this.keys.id]
    },
    paging ({ pageNo, pageSize }) {
      this.pageNo = pageNo;
      this.pageSize = pageSize;
      this.getData();
    },
    getStaticText (text) {
      if (this.CONFIG && this.CONFIG.staticText && this.CONFIG.staticText[text]) {
        return this.CONFIG.staticText[text]
      } else {
        return false
      }
    },
    formatDateNEW (value) {
    if (value) {
      return moment(Number(value)).format("YYYY-MM-DD"); // 只接收Number类型
    } else {
      return this.getStaticText('noDate') ? this.getStaticText('noDate') : '暂无日期';
    }
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
.ui_pic_list_21-img_box,
.ac_title {
  cursor: pointer;
}
</style>
