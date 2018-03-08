<!-- 新闻详情组件，不依赖页面 -->
<template>
 <!--新闻中心-->
  <div class="work_informationdetail_01">
    <h3 style="text-align: center;" v-if="keys.topic"
        v-text="detail[keys.topic]"></h3>
    <div style="text-align: center;">
      <!-- <span v-if="keys.author"><span v-if="keys.show_key">作者：</span>{{detail[keys.author]}}</span> -->
      <span style="margin-left: 16px;" v-if="isShow('time')"><span>创建日期：</span>{{detail[keys.time] | formatTime}}</span>
      <!-- <span style="margin-left: 16px;" v-if="keys.source">来源：{{detail[keys.source]}}</span> -->
      <a style="margin-left: 16px;" v-if="isShow('collect')" href="javascript:;" @click="addCollect()">收藏</a>
      <a href="http://www.jiathis.com/share" style="margin-left: 16px;" v-if="isShow('share')"
         class="search_04-content-list-entry_box-orthers-share" target="_blank">分享</a>
    </div>
    <div class="abstract" v-if="isShow('abstract')">
      <span>摘要：</span>
      <span :title="detail[keys.abstract]"
            v-text="detail[keys.abstract] || '暂无摘要'"></span>
    </div>
    <br/>
    <p class="html-feild" v-html="detail[keys.content]" v-if="keys.content"></p>
    <div class="download" v-if="isShow('download')">
      <span>稿件下载：</span>
      <span v-if="keys.abstract" v-text="detail[keys.abstract] || '暂无摘要'"
            :title="detail[keys.abstract]"></span>
    </div>
    <div class="work_informationdetail_01-nav">
      <a class="work_informationdetail_01-nav-pre" @click="toPre">&lt;&lt;上一篇</a>
      <a href="javascript:;" @click="returnList()">返回列表</a>
      <a class="work_informationdetail_01-nav-next" @click="toNext">下一篇&gt;&gt;</a>
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
    };
  },

  computed: {
    ...mapGetters("login", {
      member: interfaces.GET_MEMBER,
    })
  },

  created () {
    this.initConfig();
    !this.projectConfig.driveMode.eventMode ? this.getParam() : this.$bus.on(this.projectConfig.driveMode.eventMode.listenEventName, this.getParam)

  },

  mounted () { },

  methods: {
    initConfig () {
      this.projectConfig = PROJECT_CONFIG[this.namespace].informationDetail.work_informationdetail_02;
      this.keys = this.projectConfig.keys;
    },
    /* 加载参数 */
    getParam (data, preNextParam) {
      console.log('详情参数打印:');
      console.log(data);
      this.detail = '';
      let driveMode = this.projectConfig.driveMode;
      this.preNextParamCache = preNextParam;

      if (driveMode.eventMode) {
        let params = {
          docID: data[driveMode.eventMode.dataKeys.docID]
        }
        this.loadData(params);
      } else if (driveMode.locationMode) {
        let query = URL.parse(document.URL, true).query;

        let params = {
          docID: query[driveMode.locationMode.dataKeys.docID]
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
      let doclibCode = this.keys.getDetailRequestParam_doclibCode + '=' + this.projectConfig.params.getDetailRequestParam_doclibCode;
      let docID = this.keys.getDetailRequestParam_docID + '=' + params.docID;

      url += '?' + doclibCode + '&' + docID;
      Get(url).then((resp) => {
        console.log('详情打印:');
        console.log(resp.data);
        this.detail = resp.data;
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
      let siteId = 'operateType=0&siteId=' + SITE_CONFIG.siteId
      let url = this.projectConfig.collectUrl + '?' + loginName + '&' + resourceType + '&' + resourceId + '&' + siteId

      Post(url).then(rep => {
        if (rep.data.result === "1") { // 操作成功
          this.$message({
            type: "success",
            message: rep.data.data.msg
          });
        } else {
          this.$message({
            type: "error",
            message: "操作失败"
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
      Get(url).then((resp) => {
        let data = resp.data.data;
        this.preNextData = data;
      })
    },
    /* 上一篇 */
    toPre () {
      let preId = this.preNextData[this.keys.preNextData_preId];
      if (preId) {
        this.getParam({ [this.projectConfig.driveMode.eventMode.dataKeys.docID]: preId }, this.preNextParamCache)
      }
    },
    /* 下一篇 */
    toNext () {
      let nextId = this.preNextData[this.keys.preNextData_nextId];
      if (nextId) {
        this.getParam({ [this.projectConfig.driveMode.eventMode.dataKeys.docID]: nextId }, this.preNextParamCache)
      }
    },
    returnList () {
      let eventMode = this.projectConfig.driveMode.eventMode;
      let locationMode = this.projectConfig.driveMode.locationMode;

      if (eventMode) {
        this.$bus.emit(this.projectConfig.eventName_back)
      } else if (locationMode) {
        window.location.go(-1); //返回刷新上一页
      }
    }

  }
}
</script>
<style>
.work_informationdetail_01 {
  min-height: 600px;
}

.work_informationdetail_01 .html-feild {
  position: relative;
}
.work_informationdetail_01-nav {
  text-align: center;
}
.work_informationdetail_01-nav-pre {
  float: left;
}
.work_informationdetail_01-nav-next {
  float: right;
}
</style>
