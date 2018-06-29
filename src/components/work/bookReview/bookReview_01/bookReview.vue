<!-- 评论组件 Created by song 2018/1/10  re by zong 20180609 -->
<template>
  <div class="work_bookreview_01 work_bookreview_01_skin">
    <div class="title">
      <span>精彩评论</span>
      <span v-if="this.CONFIG && this.CONFIG.toAddReview && this.CONFIG.toAddReview.toAddReviewShow && this.isDiscuss==0" class="add_pl work_bookdetail_04_review_button_span"  @click="toAddReview()">{{this.CONFIG.toAddReview.toAddReviewName}}</span>
    </div>
    <div class="reviewCon" v-if="this.isDiscuss==0">
      <div class="review">
        <span class="reviewSpan">评论</span>
        <p class="star">
          <el-rate v-model="starValue" :show-text="true" :max="5" void-color="#c1c1c0"></el-rate>
        </p>
      </div>
      <textarea ref="commentContent"></textarea>

      <input type="button" class="reviewBtn" value="评论" @click="bookReview()"/>
    </div>

    <!--评论内容-->
    <div class="bookReviewWrapper" v-if="commentList && commentList.length > 0" v-for="(queryComment, index) in commentList" :key="index" >
      <div class="personalImg">
        <img onload="DrawImage(this,35,35)" :src="queryComment.picture || defaultPic" alt="暂无头像"/>
      </div>
      <div class="reviewLists">
        <div>
          <span class="username" v-text="queryComment.loginName"></span>
          <p class="score">
            <el-rate  v-model="queryComment.starNum - 0" :show-text="false" :max="5" disabled disabled-void-color="#c1c1c0"></el-rate>
          </p>
          <span class="createTime" v-text="queryComment.createTime"></span>
        </div>
        <div class="reviewContent" v-text="queryComment.content"></div>

        <!--点赞-->
        <div class="reviewLists_oper" v-if="operList">
          <span class="reviewLists_oper_review" :class="{ItemLikeActive_on:commentListLike[index],ItemLikeActive_off:!commentListLike[index],}" v-if="operList && operList.review && operList.review.reviewShow" @click="toReviewInfo(queryComment)">
            <i class="fa fa-review"></i>
            <span class="reviewLists_oper_review_num">{{queryComment.replyNum}}</span>
          </span>
          <span class="reviewLists_oper_like" v-if="operList && operList.like && operList.like.likeShow"  @click="getLike(queryComment.commentId)">
            <i class="fa fa-like"></i>
            <span class="reviewLists_oper_like_num">{{queryComment.likeNum}}</span>
          </span>
        </div>

      </div>
    </div>
    <div class="noReview" v-if="commentList.length === 0">暂无评论</div>
    <!--评论内容-->
    <input type="hidden" id="work_bookreview_01_pagination" v-model="totalCount">
    <ui_pagination class="work_bookreview_01_pagination" v-if="CONFIG && CONFIG.pagination && CONFIG.pagination.showPagination"  :pageMessage="{totalCount: totalCount - 0}" :excuteFunction="paging" :page-sizes="CONFIG.pagination.pagesize"></ui_pagination>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters, mapActions, mapState } from 'vuex';
import URL from "url";
import Vue from 'vue';
import * as interfaces from "@work/login/common/interfaces.js";
import * as type from "@work/bookDetail/common/interfaces.js";
import { Get, Post, DrawImage, getFieldAdapter, toOtherPage } from "@common";
import PROJECT_CONFIG from "projectConfig";

export default {
  name: 'work_bookreview_01',
  reused: true,
  props: ['namespace'],
  data () {
    return {
      pubId: '',
      starValue: 5, // 评分默认分数
      CONFIG: null,
      commentList: [], // 评论列表
      commentListLike:{},
      defaultPic: "",  // 用户默认头像
      totalCount: "",
      operList:{},//两个按钮配置项
      orReGetMenberName:false,
      loginName:'',
      colId:'',
      resourceId:'',
      resourceName:'',
      resourseType:'',
      resourceDetail:{},
      isDiscuss:0,  //是否能评论 0可以 1不行
    }
  },
  mounted () {
    this.defaultPic = require('./assets/img/people.jpg');  // 处理静态资源打包问题
    this.pubId = URL.parse(document.URL, true).query.pubId;
    this.CONFIG = PROJECT_CONFIG[this.namespace].bookreview.bookreview_01;
    if(typeof(this.CONFIG.operList)!="undefined"){
      this.operList = this.CONFIG.operList;
    }
    if(typeof(this.CONFIG.orReGetMenberName)!="undefined"){
      this.orReGetMenberName = this.CONFIG.orReGetMenberName;
    }

    this.queryComment();

    if(this.orReGetMenberName){
      this.getResourceDetail();
    }
  },
  created: function () {

  },
  computed: {
    ...mapGetters({
      bookInfo: 'bookDetail/bookDetailInfo',   // 图书详情信息
    }),
    ...mapGetters("login", {
      member: interfaces.GET_MEMBER   // 用户信息
    }),
  },

  methods: {
    ...mapActions("login", {
      getMemberInfo: interfaces.ACTION_KEEP_SESSION
    }),
    //获取图书详情
    getResourceDetail () {

      this.getMemberInfo().then((member) => {
        this.loginName = member.loginName;
      });

      Get(CONFIG.BASE_URL + 'book/getBookDetail.do?pubId=' + this.pubId + '&loginName=' + this.loginName).then((rep) => {
        let datas = rep.data;
        if (rep.status == 200 && datas.data) {
          this.resourceDetail = datas.data;
          this.isDiscuss = this.resourceDetail.isDiscuss;
        }
      });

      this.queryComment();   //获取回复列表
    },
    /* 去评论详情页*/
    toReviewInfo (toReviewInfo) {
      if (this.loginName == undefined || this.loginName == '') {
        window.open( '../pages/login.html');
        return false;
      }
      if(typeof(this.operList.review.toReviewInfoUrl)!='undefined'){
        window.open( this.operList.review.toReviewInfoUrl
          + "?reviewId=" + toReviewInfo.commentId
          + "&&pubId=" + this.pubId
          + "&&loginName=" + this.loginName
          + "&&picture=" + toReviewInfo.picture
          + "&&createTime=" + toReviewInfo.createTime
          + "&&replyNum=" + toReviewInfo.replyNum
          + "&&likeNum=" + toReviewInfo.likeNum
          + "&&starNum=" + toReviewInfo.starNum
          + "&&content=" + toReviewInfo.content
        );
      }
    },
    /* 去评论页面评论*/
    toAddReview(){
      if (this.loginName == undefined || this.loginName == '') {
        window.open( '../pages/login.html');
        return false;
      }
      if(typeof(this.CONFIG.toAddReview)!='undefined'){
        window.open( this.CONFIG.toAddReview.toAddReviewUrl + "?pubId=" + this.pubId+ "&&loginName=" + this.loginName);
    }

    },
    /* 评论*/
    bookReview () {
      var loginName = this.member.loginName;
      if (loginName == undefined || loginName == '') {
        // this.$message({
        //   message: '请登录',
        //   type: 'error'
        // })
        window.open( '../pages/login.html');
        return false;
      }
      var bookDetail = this.bookInfo;
      var content = this.$refs.commentContent.value;
      if(content==''){
        this.$message({
          message: '评论内容不能为空',
          type: 'error'
        })
        return false;
      }
      // content = encodeURIComponent(content);
      var starNum = this.starValue;
      if (starNum == 0) {
        this.$message({
          message: '请先评分再提交评论~',
          type: 'error'
        })
        return false;
      }
      let queryConfig = this.CONFIG.addComment;
      let paramsObj = Object.assign({}, queryConfig.params);
      paramsObj.pubId = this.pubId;
      paramsObj.loginName = loginName;
      paramsObj.content = content;
      paramsObj.starNum = starNum;
      paramsObj.colId = bookDetail.colId;

      if(this.orReGetMenberName && this.resourceDetail) {
        paramsObj.colId = this.resourceDetail.colId;
        paramsObj.resourceId = this.resourceDetail.resourceId;
        paramsObj.resourceName = this.resourceDetail.resourceName;
        paramsObj.resourceType = this.resourceDetail.resourceType;
      }
      Post(CONFIG.BASE_URL + queryConfig.url, paramsObj).then((rep) => {
        var result = rep.data.result;
        if (result === "1") {
          var msg = rep.data.data.msg;
          this.$message({
            message: msg,
            type: 'success'
          });
          this.$refs.commentContent.value = ''; //评论完置空评分和内容
          this.starValue = 5;
          var param = {
            pubId: this.pubId,
            pageNo: '1',
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
    getLike(reviewId){

      var loginName = this.member.loginName;
      var obj = { loginName: loginName };
      let paramsObj = Object.assign({}, obj);
      if (loginName == undefined || loginName == '') {
        if(this.loginName){
          paramsObj.loginName = this.loginName;
        }else{
          // this.$message({
          //   message: '请登录',
          //   type: 'error'
          // })
          window.open( '../pages/login.html');
          return false;
        }
      }else{
        this.loginName = loginName;
      }
      paramsObj.id = reviewId;
      paramsObj.siteId = CONFIG.SITE_CONFIG.siteId;
      Get(CONFIG.BASE_URL + "comment/addOrCancelLike.do", { params: paramsObj }).then((rep) => {
        console.log(rep);
        let datas = rep.data;
        if (datas && datas.data && datas.result==1) {
          // this.commentList = datas.data.msg;
          this.$message({
            message: datas.data.msg,
            type: 'success'
          })
          var param = {
            pubId: this.pubId,
            pageNo: '1',
            pageSize: '15'
          }
          this.queryComment(param);
          return false;
        }
      })
    },
    queryComment (pagingParams) {
      let queryConfig = this.CONFIG.queryComments;
      let paramsObj = Object.assign({}, queryConfig.params);
      paramsObj.pubId = this.pubId;

      if(typeof(paramsObj.loginName)!=='undefined'){
        paramsObj.loginName = this.loginName;
      }
      if (pagingParams) {
        paramsObj.pageIndex = pagingParams.pageNo;
        paramsObj.pageSize = pagingParams.pageSize;
      }
      Get(CONFIG.BASE_URL + queryConfig.url, { params: paramsObj }).then((rep) => {
        var data = rep.data.data;
        if (data && data instanceof Array && data.length > 0) {
          this.commentList = data;
            for (var i=0;i<this.commentList.length;i++)
            {
              this.commentListLike[i] = false;
            }
          this.totalCount = rep.data.totalCount;
        }
      })
    },
    paging: function ({ pageNo, pageSize }) { // 翻页
      var pagingParams = {
        pageNo: pageNo,
        pageSize: pageSize,
      };
      this.queryComment(pagingParams);
    },
  }
}

</script>
<style>
/* start 评论结构样式 */
.work_bookreview_01 {
  padding-left: 15px;
  margin-top: 10px;
  clear: both;
}

.work_bookreview_01 .title {
  height: 22px;
  line-height: 22px;
  border-bottom-width: 2px;
  padding-bottom: 5px;
  padding-left: 20px;
}

.work_bookreview_01 .title span {
  background-position: -9px -50px;
  padding-left: 25px;
}

.work_bookreview_01 .reviewCon {
  padding: 32px 40px 16px 40px;
  overflow: hidden;
}

.work_bookreview_01 .reviewCon .review {
  margin-bottom: 15px;
  overflow: hidden;
}

.work_bookreview_01 .reviewCon .review .reviewSpan {
  padding-right: 10px;
  float: left;
}

.work_bookreview_01 .reviewCon .star {
  float: left;
}

.work_bookreview_01 .reviewCon textarea {
  width: 774px;
  height: 74px;
  margin-left: 40px;
  padding-left: 10px;
}

.work_bookreview_01 .reviewCon .reviewBtn {
  margin-top: 15px;
  float: right;
  width: 80px;
  height: 32px;
  line-height: 32px;
  border-width: 1px;
}

.work_bookreview_01 .bookReviewWrapper {
  padding: 32px 40px 16px 40px;
  overflow: hidden;
  clear: both;
}

.work_bookreview_01 .bookReviewWrapper .personalImg {
  border-radius: 50%;
  width: 35px;
  height: 35px;
  padding-right: 20px;
  float: left;
}

.work_bookreview_01 .bookReviewWrapper .personalImg img {
  width: 35px;
  height: 35px;
}

.work_bookreview_01 .bookReviewWrapper .reviewLists {
  width: 768px;
  float: left;
}

.work_bookreview_01 .bookReviewWrapper .username {
  float: left;
}

.work_bookreview_01 .bookReviewWrapper .score {
  margin-left: 10px;
  margin-bottom: 8px;
  float: left;
}

.work_bookreview_01 .bookReviewWrapper .score .el-rate {
  height: 20px;
  line-height: 1;
}

.work_bookreview_01 .bookReviewWrapper .createTime {
  float: right;
}

.work_bookreview_01 .bookReviewWrapper .reviewContent {
  padding: 15px;
  line-height: 20px;
  clear: both;
}

.work_bookreview_01 .noReview {
  padding: 32px 40px 16px 40px;
}
/* end 评论结构样式 */

/* start 皮肤样式 */
.work_bookreview_01_skin {
  font-family: "Microsoft Yahei", "微软雅黑", "\5FAE\8F6F\96C5\9ED1", "宋体";
  font-size: 12px;
  color: #888888;
}

.work_bookreview_01_skin .title {
  color: #c50000;
  font-size: 14px;
  border-bottom-style: solid;
  border-bottom-color: #c50000;
}

.work_bookreview_01_skin .title span {
  background-image: url(/assets/img/bg_008.png);
  background-repeat: no-repeat;
}

.work_bookreview_01_skin .reviewCon .review .reviewSpan {
  color: #636363;
  font-size: 14px;
}

.work_bookreview_01_skin .reviewCon textarea {
  color: #767676;
}

.work_bookreview_01_skin .reviewCon .reviewBtn {
  border-style: solid;
  border-color: #dbdbdb;
  color: #7e7e7e;
  cursor: pointer;
  background-color: transparent;
  outline: none;
}

.work_bookreview_01_skin .bookReviewWrapper .username {
  color: #636363;
  font-size: 14px;
}

.work_bookreview_01_skin .bookReviewWrapper .createTime {
  color: #b1b1b1;
  font-size: 10px;
}

.work_bookreview_01_skin .bookReviewWrapper .reviewContent {
  background: #f9f9f9;
}

.work_bookreview_01_skin .noReview {
  color: #636363;
  font-size: 14px;
}

/* end 皮肤样式 */
</style>

