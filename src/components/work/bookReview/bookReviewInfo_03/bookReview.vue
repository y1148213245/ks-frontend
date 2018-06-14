<!-- 评论详情组件 Created by zong 2038/6/13 -->
<template>
  <div class="bookReview_03_div">
    <div class="bookReviewMain_03" v-if="CONFIG" >
      <!--评论内容-->
      <div class="bookReviewInfo_03" v-if="CONFIG && reviewId" >
        <div class="bookReviewInfo_03_personalImg">
          <img onload="DrawImage(this,35,35)" :src="picture || defaultPic" alt="暂无头像"/>
        </div>
        <div class="bookReviewInfo_03_reviewLists">
          <div>
            <span class="bookReviewInfo_03_reviewLists_username" v-text="loginName"></span>
            <p class="bookReviewInfo_03_reviewLists_score">
              <el-rate  v-model="starNum" :show-text="false" :max="5" disabled disabled-void-color="#c1c1c0"></el-rate>
            </p>
            <span class="bookReviewInfo_03_reviewLists_createTime" v-text="createTime"></span>
          </div>
          <div class="bookReviewInfo_03_reviewLists_reviewContent" v-text="content"></div>

          <!-- 点赞  评论按钮-->
          <div class="bookReviewInfo_03_reviewLists_oper" v-if="operList">
          <span class="bookReviewInfo_03_reviewLists_oper_review" v-if="operList && operList.review && operList.review.reviewShow">
            <i class="fa fa-review"></i>
            <span class="bookReviewInfo_03_reviewLists_oper_review_num">{{replyNum}}</span>
          </span>
            <span class="bookReviewInfo_03_reviewLists_oper_like" v-if="operList && operList.like && operList.like.likeShow"  @click="getLike(reviewId)">
            <i class="fa fa-like"></i>
            <span class="bookReviewInfo_03_reviewLists_oper_like_num">{{likeNum}}</span>
          </span>
          </div>
          <!-- 点赞  end-->

        </div>
      </div>
      <!-- 评论框区域-->
      <div class="reviewCon" v-if="CONFIG && CONFIG.reviewCon && CONFIG.reviewCon.reviewConShow">
        <textarea ref="commentContent" v-bind:placeholder="CONFIG.reviewCon.placeholder"></textarea>
        <input type="button" class="reviewCon_reviewBtn" v-bind:value="CONFIG.reviewCon.buttonValue" @click="bookReview()"/>
      </div>
      <!-- 评论框区域 end-->
    </div>
    <div class="work_bookreview_03_skin">

      <!--评论回复内容-->
      <div class="work_bookreview_03_skin_bookReviewWrapper" v-if="commentList && commentList.length > 0" v-for="(queryComment, index) in commentList" :key="index" >
        <div class="work_bookreview_03_skin_bookReviewWrapper_personalImg">
          <img onload="DrawImage(this,35,35)" :src="queryComment.picture || defaultPic" alt="暂无头像"/>
        </div>
        <div class="work_bookreview_03_skin_bookReviewWrapper_reviewLists">
          <div class="work_bookreview_03_skin_bookReviewWrapper_reviewLists_nameTime">
            <span class="username" v-text="queryComment.loginName"></span>
            <span class="createTime" v-text="queryComment.createTime"></span>
          </div>
          <div class="work_bookreview_03_skin_bookReviewWrapper_reviewLists_reviewContent" v-text="queryComment.content"></div>
        </div>
      </div>
      <div class="noReview" v-if="commentList.length === 0">{{noHint}}</div>
      <!-- 评论内容 -->
      <input type="hidden" id="work_bookreview_03_pagination" v-model="totalCount">
      <ui_pagination class="work_bookreview_03_pagination" v-if="CONFIG && CONFIG.pagination && CONFIG.pagination.showPagination"  :pageMessage="{totalCount: totalCount - 0}" :excuteFunction="paging" :page-sizes="CONFIG.pagination.pagesize"></ui_pagination>
    </div>
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
    name: 'work_bookreview_03',
    reused: true,
    props: ['namespace', 'modulename'],
    data () {
      return {
        pubId: 0,
        reviewId: 0,
        loginName: '',
        CONFIG: null,
        reviewInfo:"", //评论详情
        commentList: [], // 评论回复列表
        defaultPic: "",  // 用户默认头像
        totalCount: "",
        operList:{},//两个按钮配置项
        orReGetMenberName:false,
        pageIndex: '1',
        pageSize: '15',
        picture:"",
        createTime:"",
        content:"",
        replyNum:0,
        likeNum:0,
        starNum:1,
        noHint:false,

      }
    },
    mounted () {
      this.defaultPic = require('./assets/img/people.jpg');  // 处理静态资源打包问题
      let arrPar =  URL.parse(document.URL, true).query;
      this.pubId = arrPar.pubId;
      this.starNum = Number(arrPar.starNum);
      this.reviewId = arrPar.reviewId;
      this.loginName = arrPar.loginName;
      if(arrPar.picture=='null'){
        this.picture = '';
      }else{
        this.picture = arrPar.picture;
      }

      this.createTime = arrPar.createTime;
      this.content = arrPar.content;
      this.replyNum = arrPar.replyNum;
      this.likeNum = arrPar.likeNum;

      this.CONFIG = PROJECT_CONFIG[this.namespace].bookreview.bookreview_03[this.modulename];
      this.operList = this.CONFIG.operList;
      this.orReGetMenberName = this.CONFIG.orReGetMenberName;
      this.noHint = this.CONFIG.queryComments.noHint;
      // this.getReviewInfo();   //获取回复详情
      this.queryComment();   //获取回复列表
    },
    created: function () {

    },
    computed: {
      ...mapGetters("login", {
        member: interfaces.GET_MEMBER   // 用户信息
      }),
      ...mapGetters({
        bookInfo: 'bookDetail/bookDetailInfo',   // 图书详情信息
      }),
    },

    methods: {
      ...mapActions("login", {
        getMemberInfo: interfaces.ACTION_KEEP_SESSION
      }),
      /* 评论回复*/
      bookReview () {
        if (!this.loginName) {  // 未登录
          this.$message({
            message: "请登录",
            type: 'error'
          });
          return false;
        }
        this.bookInfo().then((bookInfo) => {
          var bookDetail = bookInfo;
          // var bookDetail = this.bookDetail;
        });
        var content = this.$refs.commentContent.value;
        // content = encodeURIComponent(content);
        let queryConfig = this.CONFIG.addComment;
        let paramsObj = Object.assign({}, queryConfig.params);
        paramsObj.parentId = this.reviewId;
        paramsObj.pubId = this.pubId;
        paramsObj.loginName = this.loginName;
        paramsObj.content = content;
        paramsObj.colId = bookDetail.colId;
        paramsObj.resourceId = bookDetail.resourceId;
        paramsObj.resourceName = bookDetail.resourceName;
        paramsObj.resourceType = bookDetail.resourceType;

        Post(CONFIG.BASE_URL + queryConfig.url, paramsObj).then((rep) => {
          var result = rep.data.result;
          if (result === "1") {
            var msg = rep.data.data.msg;
            this.$message({
              message: msg,
              type: 'success'
            });
            this.$refs.commentContent.value = ''; //评论完置空评分和内容
            var param = {
              pageIndex: this.pageIndex,
              pageSize: this.pageSize
            }
            this.queryComment(param);
          } else {
            this.$message({
              message: '回复添加失败',
              type: 'error'
            });
          }
        })
      },
      getLike(reviewId){

        var loginName = this.loginName;
        var obj = { loginName: loginName };
        let paramsObj = Object.assign({}, obj);
        if (loginName == undefined || loginName == '') {
          if(this.loginName){
            paramsObj.loginName = this.loginName;
          }else{
            this.$message({
              message: '请登录',
              type: 'error'
            })
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
            return false;
          }
        })
      },
      getReviewInfo(){
        if(this.orReGetMenberName){
          this.getMemberInfo().then((member) => {
            this.loginName = member.loginName;
          });
        }
        let queryConfig = this.CONFIG.getReviewInfo;
        let paramsObj = Object.assign({}, queryConfig.params);
        paramsObj.pubId = this.pubId;
        paramsObj.reviewId = this.reviewId;
        paramsObj.loginName = this.loginName;
        Get(CONFIG.BASE_URL + queryConfig.url, { params: paramsObj }).then((rep) => {
          var data = rep.data.data;
          if (data) {
            this.reviewInfo = data;
          }
        })
      },
      queryComment (pagingParams) {
        // if(this.orReGetMenberName){
        //   this.getMemberInfo().then((member) => {
        //     this.loginName = member.loginName;
        //   });
        // }
        let queryConfig = this.CONFIG.queryComments;
        let paramsObj = Object.assign({}, queryConfig.params);
        paramsObj.parentId = this.reviewId;
        if (pagingParams) {
          paramsObj.pageIndex = pagingParams.pageNo;
          paramsObj.pageSize = pagingParams.pageSize;
        }
        Get(CONFIG.BASE_URL + queryConfig.url, { params: paramsObj }).then((rep) => {
          var data = rep.data.data;
          if (data && data instanceof Array && data.length > 0) {
            this.commentList = data;
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
  .work_bookreview_03 {
    padding-left: 15px;
    margin-top: 10px;
    clear: both;
  }

  .work_bookreview_03 .title {
    height: 22px;
    line-height: 22px;
    border-bottom-width: 2px;
    padding-bottom: 5px;
    padding-left: 20px;
  }

  .work_bookreview_03 .title span {
    background-position: -9px -50px;
    padding-left: 25px;
  }

  .work_bookreview_03 .reviewCon {
    padding: 32px 40px 16px 40px;
    overflow: hidden;
  }

  .work_bookreview_03 .reviewCon .review {
    margin-bottom: 15px;
    overflow: hidden;
  }

  .work_bookreview_03 .reviewCon_review_reviewSpan {
    padding-right: 10px;
    float: left;
  }

  .work_bookreview_03 .reviewCon .star {
    float: left;
  }

  .work_bookreview_03 .reviewCon textarea {
    width: 774px;
    height: 74px;
    margin-left: 40px;
    padding-left: 10px;
  }

  .work_bookreview_03 .reviewCon .reviewBtn {
    margin-top: 15px;
    float: right;
    width: 80px;
    height: 32px;
    line-height: 32px;
    border-width: 1px;
  }

  .work_bookreview_03 .bookReviewWrapper {
    padding: 32px 40px 16px 40px;
    overflow: hidden;
    clear: both;
  }

  .work_bookreview_03 .bookReviewWrapper .personalImg {
    border-radius: 50%;
    width: 35px;
    height: 35px;
    padding-right: 20px;
    float: left;
  }

  .work_bookreview_03 .bookReviewWrapper .personalImg img {
    width: 35px;
    height: 35px;
  }

  .work_bookreview_03 .bookReviewWrapper .reviewLists {
    width: 768px;
    float: left;
  }

  .work_bookreview_03 .bookReviewWrapper .username {
    float: left;
  }

  .work_bookreview_03 .bookReviewWrapper .score {
    margin-left: 10px;
    margin-bottom: 8px;
    float: left;
  }

  .work_bookreview_03 .bookReviewWrapper .score .el-rate {
    height: 20px;
    line-height: 1;
  }

  .work_bookreview_03 .bookReviewWrapper .createTime {
    float: right;
  }

  .work_bookreview_03 .bookReviewWrapper .reviewContent {
    padding: 15px;
    line-height: 20px;
    clear: both;
  }

  .work_bookreview_03 .noReview {
    padding: 32px 40px 16px 40px;
  }
  /* end 评论结构样式 */

  /* start 皮肤样式 */
  .work_bookreview_03_skin {
    font-family: "Microsoft Yahei", "微软雅黑", "\5FAE\8F6F\96C5\9ED1", "宋体";
    font-size: 12px;
    color: #888888;
  }

  .work_bookreview_03_skin .title {
    color: #c50000;
    font-size: 14px;
    border-bottom-style: solid;
    border-bottom-color: #c50000;
  }

  .work_bookreview_03_skin .title span {
    background-image: url(/assets/img/bg_008.png);
    background-repeat: no-repeat;
  }

  .work_bookreview_03_skin .reviewCon .review .reviewSpan {
    color: #636363;
    font-size: 14px;
  }

  .work_bookreview_03_skin .reviewCon textarea {
    color: #767676;
  }

  .work_bookreview_03_skin .reviewCon .reviewBtn {
    border-style: solid;
    border-color: #dbdbdb;
    color: #7e7e7e;
    cursor: pointer;
    background-color: transparent;
    outline: none;
  }

  .work_bookreview_03_skin .bookReviewWrapper .username {
    color: #636363;
    font-size: 14px;
  }

  .work_bookreview_03_skin .bookReviewWrapper .createTime {
    color: #b1b1b1;
    font-size: 10px;
  }

  .work_bookreview_03_skin .bookReviewWrapper .reviewContent {
    background: #f9f9f9;
  }

  .work_bookreview_03_skin .noReview {
    color: #636363;
    font-size: 14px;
  }

  /* end 皮肤样式 */
</style>

