<!-- 活动频道列表 -->
<template>
  <div class="ui_pic_list_22 ui_pic_list_22_main">
    <section v-for="(activity, activity_index) in activitys" :key="activity_index" v-if="(activity[keys.contentCode] && activity[keys.contentCode].indexOf(CONFIG.showActivityTypeStr)>-1)">
      <div class="ui_pic_list_22-activity_title">
        <span class="ui_pic_list_22-activity_title-icon"></span>
        <a class="ui_pic_list_22-activity_title-a" :href="getListUrl(activity[keys.id])">{{activity[keys.name]}}</a>
      </div>
      <el-card v-for="(item, index) in activityList[activity_index]" :key="index" v-if="index<2">
        <div class="ui_pic_list_22-card_item-content" @click="toDetail(item[subKeys.id])">
          <div class="ui_pic_list_22-card_item-content-img_box">
            <img :src="item[subKeys.pub_picMiddle]" class="ui_pic_list_22-card_item-content-img" :alt="getStaticText('noImg') ? getStaticText('noImg') : '暂无图片'" :href="getDetailUrl(item[subKeys.id])">
          </div>
          <div class="ui_pic_list_22-card_item-content-title_box">
            <a class="ui_pic_list_22-card_item-content-ac_title" :href="getDetailUrl(item[subKeys.id])">{{item[subKeys.PORTAL_ACTIVITY_SYS_TOPIC] }}</a>
            <div class="ui_pic_list_22-card_item-content-clearfix">
              <div class="ui_pic_list_22-card_item-content-ac_text">
                <span>{{getStaticText('activityTime') ? getStaticText('activityTime') : '活动时间：'}}</span>
                <time class="ui_pic_list_22-card_item-content-time">{{item[subKeys.PORTAL_ACTIVITY_BEGIN_TIMESTAMPNEW] | formatDateNEW}}{{getStaticText('to') ? getStaticText('to') : '至'}}{{item[subKeys.reviewDate] | formatDateNEW}}
                </time>
              </div>
              <template v-for="(status,i) in activityStatus">
                <el-button v-if="item.activityStatus == status.title" type="text" class="ui_pic_list_22-card_item-content-button" :key="i" :class="{[status.class]: item.activityStatus == status.title}">{{item.activityStatus}}</el-button>
              </template>
            </div>
          </div>
        </div>
      </el-card>
      <a v-if="activityList[activity_index] && activityList[activity_index].length>2" :href="getListUrl(activity[keys.id])" class="ui_pic_list_22-to_more">{{getStaticText('seeMore') ? getStaticText('seeMore') : '查看更多...'}}</a>
    </section>
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
  data () {
    return {
      currentDate: new Date(),
      activitys: [],
      activityList: [],
      keys: null,
      subKeys: null,
      activityStatus: []
    }
  },
  created () {
    this.activityStatus = [
      {
        title: this.getStaticText('notBegin') ? this.getStaticText('notBegin') : '未开始',
        class: 'activity_notstart'
      },
      {
        title: this.getStaticText('inProgress') ? this.getStaticText('inProgress') : '进行中',
        class: 'activity_active'
      },
      {
        title: this.getStaticText('appraisalBonus') ? this.getStaticText('appraisalBonus') : '评奖中',
        class: 'activity_review'
      },
      {
        title: this.getStaticText('haveFinished') ? this.getStaticText('haveFinished') : '已结束',
        class: 'activity_end'
      }
    ]
  },
  mounted () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].list_pic.ui_list_pic_22;
    this.keys = this.CONFIG.keys;
    this.subKeys = this.CONFIG.getActivityList.keys;
    this.getActivitys();
  },
  methods: {
    getActivitys: function () {
      let url = this.CONFIG.url + "?colId=" + this.CONFIG.params.colId;
      let _this = this
      Post(CONFIG.BASE_URL + url).then((rep) => {
        if (rep && rep.data.data instanceof Array) {
          _this.activitys = rep.data.data;
          for (let i = 0, len = _this.activitys.length; i < len; i++) {
            const activity = _this.activitys[i];
            _this.getActivityList(activity[_this.keys.id], i)

          }
        }
      });
    },
    toDetail (id) {
      window.location.href = this.CONFIG.getActivityList.detailHref + "?pubId=" + id
    },
    getDetailUrl (id) {
      return this.CONFIG.getActivityList.detailHref + "?pubId=" + id;
    },
    getListUrl: function (id) {
      return this.CONFIG.activityListUrl + "?colId=" + id;
    },
    getActivityList: function (colId, index) {
      let url = this.CONFIG.getActivityList.url;
      let keys = this.subKeys;
      let params = JSON.parse(JSON.stringify(this.CONFIG.getActivityList.params));
      let _this = this;
      params.conditions.map((item) => {
        if (item.hasOwnProperty('pub_col_id')) {
          item.pub_col_id = colId
        }
      })
      params.conditions = JSON.stringify(params.conditions);

      Post(CONFIG.BASE_URL + url, params).then((req) => {
        let data = req.data.result;
        let currentTime = new Date().getTime();
        if (data && data instanceof Array && data.length > 0) {
          data.forEach(item => {
            if (currentTime < item[keys.PORTAL_ACTIVITY_END_TIMESTAMPNEW] && currentTime < item[keys.reviewDate] && currentTime > item[keys.PORTAL_ACTIVITY_BEGIN_TIMESTAMPNEW]) {
              item.activityStatus = this.getStaticText('inProgress') ? this.getStaticText('inProgress') : '进行中';
            }
            else if (currentTime < item[keys.PORTAL_ACTIVITY_END_TIMESTAMPNEW] && currentTime > item[keys.reviewDate]) {
              item.activityStatus = this.getStaticText('appraisalBonus') ? this.getStaticText('appraisalBonus') : '评奖中';
            }
            else if (currentTime < item[keys.PORTAL_ACTIVITY_BEGIN_TIMESTAMPNEW]) {
              item.activityStatus = this.getStaticText('notBegin') ? this.getStaticText('notBegin') : '未开始';
            }
            else {
              item.activityStatus = this.getStaticText('haveFinished') ? this.getStaticText('haveFinished') : '已结束';
            }
          })
          _this.activityList[index] = data;
          _this.$forceUpdate()
        }
      })
    },
    getStaticText (text) {
      if (this.CONFIG && this.CONFIG.staticText && this.CONFIG.staticText[text]) {
        return this.CONFIG.staticText[text]
      } else {
        return false
      }
    },
  },
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
.ui_pic_list_22-card_item-content-img_box {
  cursor: pointer;
}
</style>
