<!-- 评论组件 Created by song 2018/1/10  re by zong 20180609 -->
<template>
  <div class="work_bookreview_01 work_bookreview_01_skin">
    <div class="title">
      <span>{{getStaticText('comments') ? getStaticText('comments') : "评论"}}</span>
      <span v-if="(CONFIG && CONFIG.toAddReview && CONFIG.toAddReview.toAddReviewShow) && (!canNotDiscussManyTimes ||isComment== '是' && (isDiscussLimit ? isDiscuss == '0' : true))" class="add_pl work_bookdetail_04_review_button_span"  @click="toAddReview()">{{CONFIG.toAddReview.toAddReviewName}}</span>
    </div>
    <div class="reviewCon" v-if="!canNotDiscussManyTimes || (isComment=='是' && (isDiscussLimit ? isDiscuss == '0' : true))">
      <div class="review">
        <span class="reviewSpan">{{getStaticText('comments') ? getStaticText('comments') : "评论"}}</span>
        <p class="star">  
          <el-rate v-model="starValue" :show-text="true" :max="5" void-color="#c1c1c0"></el-rate>
        </p>
      </div>
      <textarea ref="commentContent" maxlength="250" v-model="content"></textarea>
      <p>
        {{getStaticText('contentBefore') ? getStaticText('contentBefore') : "您还可以输入"}}
        <span class="contentLength">{{250-content.length}}</span>
        {{getStaticText('contentAfter') ? getStaticText('contentAfter') : "个字"}}
      </p>
      <input type="button" class="reviewBtn" :value="getStaticText('comments') ? getStaticText('comments') : '评论'" @click="bookReview()"/>
    </div>

    <!--评论内容-->
    <div class="bookReviewWrapper" v-if="commentList && commentList.length > 0" v-for="(queryComment, index) in commentList" :key="index" >
      <div class="personalImg">
        <img onload="DrawImage(this,35,35)" :src="queryComment.picture || defaultPic" :alt="getStaticText('noHeadPicture') ? getStaticText('noHeadPicture') : '暂无头像'"/>
      </div>
      <div class="reviewLists">
        <div>
          <span class="username" v-text="queryComment.nickName || queryComment.loginName"></span>
          <p class="score">
            <el-rate  v-model="queryComment.starNum - 0" :show-text="false" :max="5" disabled disabled-void-color="#f7ba2a" disabled-void-icon-class="el-icon-star-off"></el-rate>
          </p>
          <span class="createTime" v-text="queryComment.createTime"></span>
        </div>
        <div class="reviewContent" v-text="queryComment.content"  @click="toReviewInfo(queryComment)"></div>

        <!--点赞-->
        <div class="reviewLists_oper" v-if="operList">
          <span class="reviewLists_oper_review" :class="{ItemLikeActive_on:commentListLike[index],ItemLikeActive_off:!commentListLike[index],}" v-if="operList && operList.review && operList.review.reviewShow" @click="toReviewInfo(queryComment)">
            <i class="fa fa-review"></i>
            <span class="reviewLists_oper_review_num">{{queryComment.replyNum}}</span>
          </span>
          <span class="reviewLists_oper_like" v-if="operList && operList.like && operList.like.likeShow"  @click="getLike(queryComment.commentId,index)" :class="{'active':nowUserLikeObj[queryComment.commentId]}" :data-id="nowUserLikeObj[queryComment.commentId]">
            <i class="fa fa-like"></i>
            <span class="reviewLists_oper_like_num">{{queryComment.likeNum}}</span>
          </span>
        </div>

      </div>
    </div>
    <div class="noReview" v-if="commentList.length === 0">{{getStaticText('noComments') ? getStaticText('noComments') : '暂无评论'}}</div>
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
      content: '',  //评论内容
      pubId: '',
      starValue: 5, // 评分默认分数
      CONFIG: "",
      commentList: [], // 评论列表
      commentListLike:{},
      defaultPic: "",  // 用户默认头像
      totalCount: "",
      operList:{},//两个按钮配置项
      orReGetMenberName:false,
      loginName:'',
      pagingParams:{},
      colId:'',
      resourceId:'',
      resourceName:'',
      resourseType:'',
      resourceDetail:{},
      resourceDetailKeys:'',
      isComment:'否',  //是否能评论 (图书详情中数据)(后台新建图书开关控制)))
      isDiscuss:'1', //评论限制 (评论逻辑控制) 0 可以 1不可以
      queryConfigAddReview:0, //是否能评论完了 0可以 1不行
      nowUserLikeObj:{},
      canNotDiscussManyTimes: true, // 是否限制多次评论 现在产品规划成只能评论一次 所以默认是不能多次评论
    }
  },
  mounted () {
    this.defaultPic = require('./assets/img/people.jpg');  // 处理静态资源打包问题
    this.pubId = URL.parse(document.URL, true).query.pubId;

    if(typeof(this.CONFIG.operList)!="undefined"){
      this.operList = this.CONFIG.operList;
    }
    if(typeof(this.CONFIG.orReGetMenberName)!="undefined"){
      this.orReGetMenberName = this.CONFIG.orReGetMenberName;
    }


    if(this.orReGetMenberName){
      this.getResourceDetail();
    }else{
      this.queryComment();
    }
  },
  created: function () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].bookreview.bookreview_01;
    let resourceDetailConfig = this.CONFIG.resourceDetail ? this.CONFIG.resourceDetail : {
        sysAdapter:'sykAdapter',
        typeAdapter:'bookAdapter',
        isDiscussLimit:true
      }
    this.resourceDetailKeys = getFieldAdapter(
        resourceDetailConfig.sysAdapter,
        resourceDetailConfig.typeAdapter
      );
    this.isDiscussLimit = resourceDetailConfig.isDiscussLimit
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
        Get(CONFIG.BASE_URL + 'book/getBookDetail.do?pubId=' + this.pubId + '&loginName=' + this.loginName).then((rep) => {
          let datas = rep.data;
          if (rep.status == 200 && datas.data) {
            this.resourceDetail = datas.data;
            this.isDiscuss = this.resourceDetail.isDiscuss
            this.isComment = (this.resourceDetailKeys.isComment && this.resourceDetail.hasOwnProperty(this.resourceDetailKeys.isComment)) ? this.resourceDetail[this.resourceDetailKeys.isComment] : '是' ;
            this.queryComment();   //获取回复列表
            if(this.CONFIG.limitDisscussType && this.CONFIG.limitDisscussType.includes(this.resourceDetail.pub_content_type)) { // 当前资源的类型是在可以多次评论的数组里面
              this.canNotDiscussManyTimes = false;
            }
          }
        });
      });



    },
    /* 去评论详情页*/
    toReviewInfo (toReviewInfo) {
      if (this.loginName == undefined || this.loginName == '') {
        window.open(this.CONFIG.loginUrl ? this.CONFIG.loginUrl : '../pages/login.html');
        return false;
      }
      if(typeof(this.operList.review.toReviewInfoUrl)!='undefined'){
        window.open( this.operList.review.toReviewInfoUrl
          + "?reviewId=" + toReviewInfo.commentId
          + "&&pubId=" + this.pubId
          + "&&loginName=" + this.loginName
          + "&&tologinName=" + (toReviewInfo.nickName || toReviewInfo.loginName)
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
        window.open(this.CONFIG.loginUrl ? this.CONFIG.loginUrl : '../pages/login.html');
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
        window.open( this.CONFIG.loginUrl ? this.CONFIG.loginUrl : '../pages/login.html');
        return false;
      }
      var bookDetail = this.bookInfo;
      var content = this.$refs.commentContent.value;
      if(content.replace(/\s+/g,"")==''){
        this.$message({
          message: this.getStaticText('commentsEmptyInfo') ? this.getStaticText('commentsEmptyInfo') : '评论内容不能为空',
          type: 'error'
        })
        return false;
      }
      if(content.length>250){
        this.$message({
          message: this.getStaticText('commentsTooMany') ? this.getStaticText('commentsTooMany') : '评论不能超过250字',
          type: 'error'
        })
        return false;
      }
      // content = encodeURIComponent(content);
      var starNum = this.starValue;
      if (starNum == 0) {
        this.$message({
          message: this.getStaticText('pleaseGradeBeforeSubmitting') ? this.getStaticText('pleaseGradeBeforeSubmitting') : '请先评分再提交评论~',
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
      if(this.queryConfigAddReview){
        return false;
      }
      this.queryConfigAddReview = 1;
      Post(CONFIG.BASE_URL + queryConfig.url, paramsObj).then((rep) => {
        this.queryConfigAddReview = 0;
        var result = rep.data.result;
        if (result === "1") {
          var msg = rep.data.data.msg;
          this.$message({
            message: msg,
            type: 'success'
          });
          //重新获取判断条件
          if(this.orReGetMenberName){
            this.isDiscuss =1;
            this.getResourceDetail();
          }
          this.$refs.commentContent.value = ''; //评论完置空评分和内容
          this.content = '';
          this.starValue = 5;
          var param = {
            pubId: this.pubId,
            pageNo: '1',
            pageSize: '15'
          }
          this.queryComment(param);
        } else {
          this.$message({
            message: this.getStaticText('commentAddFailed') ? this.getStaticText('commentAddFailed') : '评论添加失败',
            type: 'error'
          });
        }
      })
    },
    getLike(reviewId,ind){
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
            window.open(this.CONFIG.loginUrl ? this.CONFIG.loginUrl : '../pages/login.html');
            return false;
          }
        }else{
          this.loginName = loginName;
        }

      var nowLike = this.nowUserLikeObj[reviewId]; // 布尔值 => 当前用户是否喜欢
      var nowLikesNum = this.commentList[ind].likeNum;
      this.getUserLike(reviewId,function(reviewId){
        paramsObj.id = reviewId;
        paramsObj.siteId = CONFIG.SITE_CONFIG.siteId;
        Get(CONFIG.BASE_URL + "comment/addOrCancelLike.do", { params: paramsObj }).then((rep) => {
          // console.log(rep);
          let datas = rep.data;
          if (datas && datas.data && datas.result==1) {
            // this.commentList = datas.data.msg;
            this.$message({
              message: datas.data.msg,
              type: 'success'
            })
            if(nowLike){
              this.commentList[ind].likeNum = nowLikesNum - 1;
              this.nowUserLikeObj[reviewId] = false;
            }else{
              this.commentList[ind].likeNum = nowLikesNum + 1;
              this.nowUserLikeObj[reviewId] = true;
            }
            console.log(this.commentList[ind].likeNum);
            // this.queryComment(this.pagingParams);
            return false;
          }
        })
      }.bind(this))
      
    },
    getUserLike(id,callback){
      if(!this.member.loginName || !this.CONFIG.queryComments.params["siteId"]){
        return;
      }
      var params = {
        "loginName":this.member.loginName,
        "id":id,
        "siteId":this.CONFIG.queryComments.params["siteId"]
      }
      // var requestUrl = "/comment/isCommentLike.do" + this.loginName + "&id=" + this.commentList[i]["commentId"] + "";
      Get(CONFIG.BASE_URL + "/comment/isCommentLike.do",{params:params}).then((req) => {
        // console.log(req);
        var datas = req.data;
        if (datas && datas.data && datas.result==1) {
          if(datas.data.code == 1){
            this.nowUserLikeObj[id] = true;
            callback && callback(id);
          }else{
            // this.commentList[len]["nowUserLike"] = false;
            this.nowUserLikeObj[id] = false;
            callback && callback(id);
          }
        }else{
          // this.commentList[len]["nowUserLike"] = false;
          this.nowUserLikeObj[id] = false;
        }
      })
    },
    queryComment (pagingParams) {
      this.loginName = this.member.loginName;
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
          //将评论列表按时间排序
          var laterComment;
          for(var i=0; i<this.commentList.length; i++){
            for(var j=i; j<this.commentList.length; j++){
              if((new Date((this.commentList[i].createTime).replace(/-/g,"\/")))<(new Date((this.commentList[j].createTime).replace(/-/g,"\/")))){
                laterComment=this.commentList[j];
                this.commentList[j]=this.commentList[i];
                this.commentList[i]=laterComment;
              }
            }
          }
          for (var i=0;i<this.commentList.length;i++)
          {
            // this.commentList[i][] = false;
            this.$set(this.nowUserLikeObj,String(this.commentList[i]["commentId"]),false)

            this.getUserLike(this.commentList[i]["commentId"]);
          }
          // console.log(this.commentList);
          this.totalCount = rep.data.totalCount;
          // 拿每条评论去调接口看用户是否点赞

          for(var a = 0 ; a < this.commentList.length ; a++ ){

          }
          // 拿每条评论去调接口看用户是否点赞 -END
        }
      })
    },
    paging: function ({ pageNo, pageSize }) { // 翻页
      var pagingParams = {
        pageNo: pageNo,
        pageSize: pageSize,
      };
      this.pagingParams = pagingParams;
      this.queryComment(pagingParams);
    },
    getStaticText (text) {
      if (this.CONFIG && this.CONFIG.staticText && this.CONFIG.staticText[text]) {
        return this.CONFIG.staticText[text]
      } else {
        return false
      }
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

