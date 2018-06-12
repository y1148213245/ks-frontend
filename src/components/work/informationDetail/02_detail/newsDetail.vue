<!-- 新闻详情组件，不依赖页面 -->
<template>
 <!--新闻中心-->
  <div class="work_informationdetail_02">
    <h3 style="text-align: center;" v-if="keys.topic"
        v-text="detail[keys.topic]"></h3>
    <div style="text-align: center;">
      <!-- <span v-if="keys.author"><span v-if="keys.show_key">作者：</span>{{detail[keys.author]}}</span> -->
      <span style="margin-left: 16px;" v-if="isShow('time')"><span>创建日期：</span>{{detail[keys.time] | formatTime}}</span>
      <!-- <span style="margin-left: 16px;" v-if="keys.source">来源：{{detail[keys.source]}}</span> -->
      <a style="margin-left: 16px;" v-if="isShow('collect')" href="javascript:;" @click="addCollect()">{{detail[keys.isCollect] == 1 ?'已收藏':'收藏'}}</a>
      <a href="http://www.jiathis.com/share" style="margin-left: 16px;" v-if="isShow('share')"
         class="search_04-content-list-entry_box-others-share" target="_blank">分享</a>
    </div>
    <div class="abstract" v-if="isShow('abstract')">
      <span>摘要：</span>
      <span v-html="detail[keys.abstract] || ''"></span>
    </div>
    <br/>
    <p class="html-feild" v-html="detail[keys.content]" v-if="keys.content"></p>
    <div class="download" v-if="isShow('download') && attach && attach['attachName']">
      <span>附件下载：<a :href="attachUrl">{{attach['attachName']}}</a></span>
    </div>
    <div class="work_informationdetail_02-nav">
      <a class="work_informationdetail_02-nav-pre" :class="{'work_informationdetail_02-nav-pre--null':!preNextData[this.keys.preNextData_preId]}" @click="toPre">&lt;&lt;上一篇</a>
      <a href="javascript:;" @click="returnList()">返回列表</a>
      <a class="work_informationdetail_02-nav-next" :class="{'work_informationdetail_02-nav-pre--null':!preNextData[this.keys.preNextData_nextId]}" @click="toNext">下一篇&gt;&gt;</a>
    </div>
  </div>
</template>

<script>
import URL from 'url'
import PROJECT_CONFIG from 'projectConfig'
import { mapGetters, mapActions } from 'vuex';
import * as interfaces from "@work/login/common/interfaces.js";
import { Post, Get } from '@common'
export default {
  name: 'work_informationdetail_02',
  reused: true,
  props: {
    namespace: String,
  },
  data () {
    return {
      projectConfig: null,
      keys: null,
      newsListItemCache: null,/* 新闻列表数据缓存 */
      preNextParamCache: null,/* 上一篇下一篇请求参数缓存 */
      preNextData: '',/* 上一篇下一篇数据 */
      detail: '',/* 新闻详情 */
      attach: '',/* 附件详情 */
      attachUrl: ''/* 附件链接 */
    };
  },

  computed: {
    ...mapGetters("login", {
      member: interfaces.GET_MEMBER,
    })
  },

  created () {
    this.initConfig();
    if (this.projectConfig.driveMode.type == 'event') {
      this.$bus.on(this.projectConfig.driveMode.eventMode.listenEventName, this.getParam)
    } else if (this.projectConfig.driveMode.type == 'location') {
      this.getParam()
    }
  },

  mounted () { },

  methods: {
    initConfig () {
      this.projectConfig = PROJECT_CONFIG[this.namespace].informationDetail.work_informationdetail_02;
      this.keys = this.projectConfig.keys;
    },
    /* 加载参数 */
    getParam (data, preNextParam) {
      this.detail = '';
      let keys = this.keys;
      let driveMode = this.projectConfig.driveMode;


      if (driveMode.type == 'event') {
        this.preNextParamCache = preNextParam;
        let params = {
          docID: data[driveMode.eventMode.dataKeys.docID]
        }
        this.loadData(params);
      } else if (driveMode.type == 'location') {
        let query = URL.parse(document.URL, true).query;

        let params = {
          docID: data && data[driveMode.locationMode.dataKeys.docID] || query[driveMode.locationMode.dataKeys.docID]
        }
        this.preNextParamCache = {
          [keys.eventListenData_preNextConfig_activityId]: query[keys.eventListenData_preNextConfig_activityId],/* 事件或href传入的上一篇下一篇查询参数 活动id字段名 */
          [keys.eventListenData_preNextConfig_pageNo]: query[keys.eventListenData_preNextConfig_pageNo],
          [keys.eventListenData_preNextConfig_pageSize]: query[keys.eventListenData_preNextConfig_pageSize],
          [keys.eventListenData_preNextConfig_orderBy]: query[keys.eventListenData_preNextConfig_orderBy],
        }
        this.loadData(params);
      }
      if (this.preNextParamCache) {
        this.getPreAndNext(this.preNextParamCache);
      }
    },
    /* 加载数据 */
    loadData (params) {
      this.newsListItemCache = params;
      let url = this.projectConfig.getDetailUrl;

      let loginName = this.keys.getDetailRequestParam_loginName + '=' + (this.member.loginName || '');
      let doclibCode = this.keys.getDetailRequestParam_doclibCode + '=' + this.projectConfig.params.getDetailRequestParam_doclibCode;
      let docID = this.keys.getDetailRequestParam_docID + '=' + params.docID;

      url += '?' + doclibCode + '&' + docID + '&' + loginName;
      Get(CONFIG.BASE_URL + url).then((resp) => {
        this.detail = resp.data;

        let attachList = this.detail[this.keys.attachList];
        if (attachList.length > 0) {
          let arr = attachList.filter((entry) => {
            return entry[this.keys.attachTypeCode] == this.projectConfig.attachTypeCode
          })
          if (arr.length > 0) {
            this.attach = arr[0]
          }
          this.getAttachUrl()
        }
      })
    },
    /* 加入收藏 */
    addCollect () {
      if (!this.member.loginName) { // 未登录时
        this.$message({
          type: "info",
          message: "请您先登录"
        });
        return false;
      }
      let loginName = 'loginName=' + this.member.loginName;
      let resourceType = 'resourceType=' + this.detail[this.keys.resourceType];
      let resourceId = 'resourceId=' + this.detail[this.keys.resourceId];
      let siteId = 'operateType=0&siteId=' + CONFIG.SITE_CONFIG.siteId
      let url = this.projectConfig.collectUrl + '?' + loginName + '&' + resourceType + '&' + resourceId + '&' + siteId
      /* 收藏请求 */
      Post(CONFIG.BASE_URL + url).then(rep => {
        if (rep.data.result === "1") { // 操作成功
          this.$message({
            type: "success",
            message: rep.data.data.msg
          });
          this.loadData(this.newsListItemCache);
        } else if (rep.error.errorCode == '403') {
          this.$message({
            type: "info",
            message: "登录超时,请您登陆"
          });
        } else {
          this.$message({
            type: "error",
            message: "服务器维护中"
          });
        }
      });
    },
    /* 功能显示 */
    isShow (str) {
      return this.projectConfig.show.indexOf(str) == -1 ? false : true;
    },
    /* 获取上一篇下一篇数据 */
    getPreAndNext (preNextParam) {
      let keys = this.keys;
      let url = this.projectConfig.getPreAndNextUrl;

      let activityId = keys.getPreNextRequestParam_activityId + '=' + preNextParam[keys.eventListenData_preNextConfig_activityId];
      let newID = keys.getPreNextRequestParam_newsID + '=' + this.newsListItemCache.docID;
      let pageNo = keys.getPreNextRequestParam_pageNo + '=' + preNextParam[keys.eventListenData_preNextConfig_pageNo];
      let pageSize = keys.getPreNextRequestParam_pageSize + '=' + preNextParam[keys.eventListenData_preNextConfig_pageSize];
      let orderBy = keys.getPreNextRequestParam_orderBy + '=' + preNextParam[keys.eventListenData_preNextConfig_orderBy];

      url += '?' + activityId + '&' + newID + '&' + pageNo + '&' + pageSize + '&' + orderBy
      Get(CONFIG.BASE_URL + url).then((resp) => {
        let data = resp.data.data;
        this.preNextData = data;
      })
    },
    /* 上一篇 */
    toPre () {
      let preId = this.preNextData[this.keys.preNextData_preId];
      if (preId) {
        this.getParam({ [this.projectConfig.driveMode.eventMode && this.projectConfig.driveMode.eventMode.dataKeys.docID || this.projectConfig.driveMode.locationMode.dataKeys.docID]: preId }, this.preNextParamCache)
      }
    },
    /* 下一篇 */
    toNext () {
      let nextId = this.preNextData[this.keys.preNextData_nextId];
      if (nextId) {
        this.getParam({ [this.projectConfig.driveMode.eventMode && this.projectConfig.driveMode.eventMode.dataKeys.docID || this.projectConfig.driveMode.locationMode.dataKeys.docID]: nextId }, this.preNextParamCache)
      }
    },
    returnList () {
      let eventMode = this.projectConfig.driveMode.eventMode;
      let locationMode = this.projectConfig.driveMode.locationMode;

      if (this.projectConfig.driveMode.type == 'event') {
        this.$bus.emit(this.projectConfig.eventName_back)
      } else if (this.projectConfig.driveMode.type == 'location') {
        window.history.go(-1); //返回刷新上一页
      }
    },
    /* 获取附件下载链接 */
    getAttachUrl () {
      let recordID = this.keys.getAttachParam_recordID + '=' + this.attach[this.keys.fileRecordID];
      let url = CONFIG.BASE_URL + this.projectConfig.attachUrl + '?' + recordID;
      this.attachUrl = url;
    }
  }
}
</script>
<style>
.work_informationdetail_02 {
  min-height: 600px;
}

.work_informationdetail_02 .html-feild {
  position: relative;
}
.work_informationdetail_02-nav {
  text-align: center;
}
.work_informationdetail_02-nav-pre {
  float: left;
}
.work_informationdetail_02-nav-next {
  float: right;
}
</style>
