/*
 * @Author: song 
 * @Date: 2018-02-06 10:34:24 
 * @Last Modified by: song
 * @Last Modified time: 2018-04-21 14:59:39
 */ 
<!-- 作品详情 有两种显示方式：附件和表单 附件是显示作品简介+下载文章操作 表单是显示简介+全文-->
<template>
  <div class="work_bookdetail_03">
    <div class="topTitle">
      <div class="title" v-text="workInfo[keys.title] || '暂无'"></div>
      <div class="work_bookdetail_03_activityname">{{workInfo[keys.activityName]}}</div>
      <time class="work_bookdetail_03_createdTime">{{workInfo[keys.createdTime] | formatTimeNEW}}</time>
      <div class="vote" v-show="activityDetail[CONFIG.getActivityInfo.dataKeys.voteSwitch] && activityDetail[CONFIG.getActivityInfo.dataKeys.voteSwitch]=='是'">
        <!-- 投票组件 -->
        <work_common_03 namespace="common" v-on:vote="totalVoteNum" :docid="workInfo[keys.docId]"></work_common_03>
        <!-- END 投票组件 -->
      </div>
    </div>
    <div class="workInformation">
      <div class="author">
        <span>作者：</span>
        <span v-text="workInfo[keys.author] || '暂无'"></span>
      </div>
      <div class="comment">
        <i class="work_bookdetail_03-comment-icon"></i>
        <span v-text="commentNum"></span>
        <span>评论</span>
      </div>
      <div class="voteNum" v-show="activityDetail[CONFIG.getActivityInfo.dataKeys.voteSwitch] && activityDetail[CONFIG.getActivityInfo.dataKeys.voteSwitch]=='是'">
        <i class="work_bookdetail_03-vote-icon"></i>
        <span v-text="workInfo[keys.voteNum]"></span>
        <span>赞</span>
      </div>
      <div class="type">
        <span>参赛类别：</span>
        <span v-text="workInfo[keys.raceType]"></span>
      </div>
    </div>
    <div class="abstract">
      <div v-text="workInfo[keys.abstract]"></div>
    </div>
    <div class="info" v-if="workInfo[keys.content] && !(workInfo[keys.isHide] =='是')">   <!-- 表单类型的作品 -->
      <div v-html="workInfo[keys.content]"></div>
    </div>
    <div class="workOperation">
      <el-button size="medium" @click="addCollect()" v-if="!isMobile">
        <i class="el-icon-star-off"></i>
        <span v-if="workInfo[keys.isCollect] == '1'">已收藏</span>
        <span v-else>收藏文章</span>
      </el-button>
      <el-button size="medium" v-if="workInfo[keys.attachment] && workInfo[keys.attachment].length>0 && !(workInfo[keys.isHide] =='是')"  @click="loadWork(workInfo[keys.attachment][0].fileRecordID)">  <!-- 附件类型的作品 -->
        <i class="el-icon-download"></i>
        <span>下载文章</span>
      </el-button>
    </div>
    <div class="qrcode" v-if="!isMobile">
      <qrcode :value="url" :size="120"></qrcode>
      <div>微信扫一扫分享</div>
    </div>
    <work_bookreview_02 v-if="!isMobile" namespace="productiondetail"></work_bookreview_02>
  </div>
</template>

<script>
import { Get, Post } from "@common";
import PROJECT_CONFIG from "projectConfig";
import { mapGetters, mapActions } from 'vuex';
import * as interfaces from "@work/login/common/interfaces.js";
import qrcode from 'qrcode.vue';
import URL from 'url';

export default {
  name: 'work_bookdetail_03',
  props: ['namespace'],
  reused: true,
  data () {
    return {
      CONFIG: null,
      workInfo: {},
      url: '',
      keys: null,  // 作品详情页接口字段兼容
      commentNum: 0, // 评论数
      resourceType: '',
      resourceId: '',
      isMobile: false,  // 移动端状态 默认false
      activityDetail: '',
    };
  },
  components: {
    qrcode,
  },
  computed: {
    ...mapGetters("login", {
      member: interfaces.GET_MEMBER,
    })
  },
  created () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].bookdetail.bookdetail_03;
    this.keys = this.CONFIG.keys;
    this.$bus.$on('commentNum', (data) => {
      this.commentNum = data;
    });
    this.queryActivityInfo(); // 活动详情
  },
  mounted () {
    this.url = window.location.href + '&isMobile=true';  // 扫描二维码上移动端 去除收藏和评论功能 因为这些功能需要登录才能用
    var queryObj = URL.parse(document.URL, true).query;
    this.resourceType = queryObj.resourceType;
    this.resourceId = queryObj.resourceId;
    this.isMobile = queryObj.isMobile ? true : false;  // 是否在移动端
    this.queryWorkInfo(); // 作品详情
  },

  methods: {
    addCollect () { // 为作品添加收藏 或 取消收藏
      if (!this.member.loginName) { // 未登录时
        this.$message({
          type: "info",
          message: "请您先登录"
        });
        return false;
      }
      Post(CONFIG.BASE_URL + this.CONFIG.collectUrl + '?loginName=' + this.member.loginName + '&resourceType=' + this.resourceType + '&resourceId=' + this.resourceId + '&operateType=0&siteId=' + CONFIG.SITE_CONFIG.siteId).then(rep => {
        if (rep.data.result === "1") { // 操作成功
          this.queryWorkInfo(this.member.loginName);
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
    totalVoteNum (num) {
      this.workInfo[this.keys.voteNum] = num;
    },
    queryWorkInfo (loginName) {  // 作品详情信息查询
      loginName = loginName ? loginName : '';
      Get(CONFIG.BASE_URL + this.CONFIG.url + '?loginName=' + loginName + '&doclibCode=' + this.resourceType + '&docID=' + this.resourceId).then(rep => {
        if (rep.data) {
          this.workInfo = rep.data;
        }
      });
    },
    queryActivityInfo () {
      let config = this.CONFIG.getActivityInfo;
      let queryObj = URL.parse(document.URL, true).query;

      let params = {
        doclibCode: config.requestParams.doclibCode,
        docID: queryObj.activityId
      }
      Get(CONFIG.BASE_URL + config.url, { params }).then(resp => {
        this.activityDetail = resp.data;
      })
    },
    loadWork (fileRecordID) {  // 下载附件类型的作品
      let loadUrl = CONFIG.BASE_URL + this.CONFIG.loadUrl + fileRecordID;
      window.open(loadUrl, '_blank');
    }
  },
  watch: {
    member (newValue, oldValue) {
      if (newValue.loginName !== oldValue.loginName || newValue.loginName === undefined) {
        this.queryWorkInfo(newValue.loginName);
      }
    }
  }
}

</script>
<style>
.work_bookdetail_03 .title {
  float: left;
}

.work_bookdetail_03 .vote {
  float: right;
}

.work_bookdetail_03 .workInformation {
  clear: both;
}

.work_bookdetail_03 .workInformation div {
  display: inline-block;
  margin-right: 20px;
}

.work_bookdetail_03 .abstract {
  margin: 20px 0px;
}

.work_bookdetail_03 .qrcode {
  margin: 20px 0px;
  text-align: center;
}
</style>