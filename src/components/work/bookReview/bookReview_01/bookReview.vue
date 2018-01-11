<!-- 评论组件 Created by song 2018/1/10 -->
<template>
  <div id="bookReview" class="work_bookreview_01 book_detail_pinglun  mt10 pl15 cl ">
    <div class="book_detail_pinglun_name color_c50 f14 pl20"><span class="pl25">精彩评论</span></div>
    <div class="book_detail_pinglun_k">
      <div class="book_detail_pinglun_k_01 mb15"><span class="fl f14 pr10 color_636">评论</span>
        <p class="xing  mt04  fl starStyle">
        <el-rate  v-model="starValue" :show-text="true" :max="5" void-color="#c1c1c0"></el-rate>
        </p>
      </div>
      <span class=""><textarea ref="commentContent" class="pinglun_02 pl10 color_767" style="width: 774px;height: 74px;margin-left: 40px;"></textarea></span>

      <input type="button" class="pinglun_btn fr mt15" value="评论" @click="bookReview()"/>
    </div>

    <!--评论内容-->
    <div class="book_detail_pinglun_con cl" v-if="commentList && commentList.length > 0" v-for="queryComment in commentList">
      <div class="book_detail_pinglun_con_tx fl  pr20">
        <img onload="DrawImage(this,35,35)" :src="queryComment.picture || '../../assets/img/people.jpg'" alt="暂无头像"/>
      </div>
      <div class="book_detail_pinglun_con_xq fl">
        <div class="line-h30">
          <span class="fl book_detail_pinglun_con_xq_xm color_636 f14" v-text="queryComment.loginName"></span>
          <p class="xing  mt08 ml10 fl starStyle">
            <el-rate  v-model="queryComment.starNum - 0" :show-text="false" :max="5" disabled disabled-void-color="#c1c1c0"></el-rate>
          </p>
          <span class="fr book_detail_pinglun_con_xq_time  f10" v-text="queryComment.createTime"></span>
        </div>
        <div class="cl book_detail_pinglun_con_xq_nr line-h20" v-text="queryComment.content">
        </div>
      </div>
    </div>
    <div class="book_detail_pinglun_con cl f14 color_636" v-if="commentList.length === 0">暂无评论</div>
    <!--评论内容-->
  </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters, mapActions, mapState } from 'vuex';
import URL from "url";
import Vue from 'vue';
import * as interfaces from "@work/login/common/interfaces.js";
import * as type from "@work/bookDetail/common/interfaces.js";
import { Get, Post } from "@common";
import PROJECT_CONFIG from "projectConfig";

export default {
  name: 'work_bookreview_01',
  reused: true,
  props: ['namespace'],
  data () {
    return {
      pubId: '',
      starValue: 0, // 评分默认分数
      CONFIG: null,
      commentList: [], // 评论列表
    }
  },
  mounted () {
    this.pubId = URL.parse(document.URL, true).query.pubId;
    this.CONFIG = PROJECT_CONFIG[this.namespace].bookreview.bookreview_01;
    var params = {
      pubId: this.pubId,
      pageIndex: 1,
      pageSize: 15
    };
    this.queryComment(params);
  },
  computed: {
    ...mapGetters({
      bookInfo: 'bookDetail/bookDetailInfo',   // 图书详情信息
    }),
    ...mapGetters("login_02", {
      member: interfaces.GET_MEMBER   // 用户信息
    }),
  },
  methods: {
    /* 评论*/
    bookReview () {
      var loginName = this.member.loginName;
      if (loginName == undefined || loginName == '') {
        this.$message({
          message: '请登录',
          type: 'error'
        })
        return false;
      }
      var bookDetail = this.bookInfo;
      var content = this.$refs.commentContent.value;
      content = encodeURIComponent(content);
      var starNum = this.starValue;
      if (starNum == 0) {
        _this.$message({
          message: '请先评分再提交评论~',
          type: 'error'
        })
        return false;
      }
      let queryConfig = this.CONFIG.addComment;
      let paramsObj = Object.assign({}, queryConfig.params);
      Post(queryConfig.url + '?pubId=' + this.pubId + '&loginName=' + loginName + '&content=' + content + '&siteId=' + paramsObj.siteId + '&type=' + paramsObj.type + '&parentId=' + paramsObj.parentId + '&starNum=' + starNum + '&deviceName=' + paramsObj.deviceName + '&colId=' + bookDetail.colId).then((rep) => {
        var result = rep.data.result;
        if (result === "1") {
          var msg = rep.data.data.msg;
          this.$message({
            message: msg,
            type: 'success'
          });
          this.$refs.commentContent.value = ''; //评论完置空评分和内容
          this.starValue = 0;
          var param = {
            pubId: this.pubId,
            pageIndex: '1',
            pageSize: '15'
          }
          this.queryComment(param);
        } else {
          this.$message({
            message: '评论添加失败',
            type: 'error'
          });
        }
      })
    },
    queryComment (param) {
      let queryConfig = this.CONFIG.queryComments;
      let paramsObj = Object.assign({}, queryConfig.params);
      if (param) {
        paramsObj.pubId = param.pubId;
        paramsObj.pageIndex = param.pageIndex;
        paramsObj.pageSize = param.pageSize;
        paramsObj.siteId = SITE_CONFIG.siteId;
      }
      Get(queryConfig.url, { params: paramsObj }).then((rep) => {
        var data = rep.data.data;
        if (data && data instanceof Array && data.length > 0) {
          this.commentList = data;
        }
      })
    }
  }
}

</script>
<style>

</style>

