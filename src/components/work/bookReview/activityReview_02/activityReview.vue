/*
 * @Author: song 
 * @Date: 2018-02-05 13:56:44 
 * @Last Modified by: song
 * @Last Modified time: 2018-03-02 10:17:36
 */
<!-- 活动评论组件 -->
<template>
  <div class="work_bookreview_02">
    <div class="reviewCon">
      <div class="title">评论</div>
      <div class="doReview">
        <textarea placeholder="请填写评论" v-model="review"></textarea>
        <el-button type="primary" size="large" @click="doReview()">评论</el-button>
      </div>
    </div>
    <div class="reviewText">
      <div class="deffReview" v-if="isShowDiff">
        <div v-for="(review, index) in reviewType" @click="toggleDiff(review.type)" :class="{'active': showType === review.type}" :key="index">
          <span v-text="review.name"></span>
        </div>
      </div>
      <div class="reviewList">
        <div class="reviewListCon" v-for="(item, index) in reviewList" :key="index" v-if="reviewList.length >0">
          <div class="picture">
            <img :src="item.picture ||'../../assets/img/people.jpg'" alt="">
            <div class="commentator" v-text="item.loginName" :title="item.loginName"></div>
          </div>
          <div class="text" v-text="item.content"></div>
        </div>
        <div v-if="reviewList.length === 0">暂无数据</div>
      </div>
    </div>
    <div style="clear: both;">
      <!-- 分页组件 -->
      <ui_pagination :pageMessage="{totalCount: this.totalCount - 0 || 0}" :excuteFunction="paging"></ui_pagination>
      <!-- END 分页组件 -->
    </div>
  </div>
</template>

<script>
import { Get, Post } from "@common";
import PROJECT_CONFIG from "projectConfig";
import { mapGetters, mapActions } from 'vuex';
import * as interfaces from "@work/login/common/interfaces.js";
import URL from 'url';

export default {
  name: 'work_bookreview_02',
  reused: true,
  props: {
    namespace: String,
    isShowDiff: {  // 区分教师评论和用户评论 有些页面不区分
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      review: '',  // 评论内容
      reviewList: [], // 评论列表
      showType: '1',  // 显示哪一种类型的评论：教师评论 or 普通用户评论 
      reviewType: [],
      // 活动、资讯详情评论 地址栏必须传 pubId colId （视为默认正常情况）
      // 作品详情评论 地址栏必须传 resourceName resourceType resourceId colId 特殊情况 索引库查不到信息
      pubId: '',
      colId: '',
      resourceName: '',
      resourceType: '',
      resourceId: '',
      totalCount: '',
    };
  },

  computed: {
    ...mapGetters("login", {
      member: interfaces.GET_MEMBER,
    })
  },
  mounted () {
    let queryObj = URL.parse(document.URL, true).query;
    this.pubId = queryObj.pubId;
    this.colId = queryObj.colId;
    this.resourceName = queryObj.resourceName;
    this.resourceType = queryObj.resourceType;
    this.resourceId = queryObj.resourceId;
    this.activityId = queryObj.activityId;
    this.CONFIG = PROJECT_CONFIG[this.namespace].review;
    this.reviewType = this.CONFIG.queryreview.reviewType;
    this.queryReviewList(); // 不传tye的时候查询的是所有评论 为了获取总的评论数
    this.queryReviewList(this.showType);  // 查询评论列表
  },

  methods: {
    queryReviewList (type) {  // 查询评论列表
      let paramsObj = Object.assign({}, this.CONFIG.queryreview.params);
      paramsObj.type = type ? type : '';
      if (this.namespace === 'productiondetail') {  // 作品详情
        paramsObj.resourceType = this.resourceType;
        paramsObj.resourceId = this.resourceId;
      } else {   // 其他详情（活动、资讯详情） 可以理解为默认情况
        paramsObj.pubId = this.pubId;
      }
      Get(this.CONFIG.queryreview.url, { params: paramsObj }).then(rep => {
        if (rep.data.result === '1') {  //请求成功
          if (paramsObj.type === '') { // 查询评论总数
            this.$bus.$emit('commentNum', rep.data.totalCount);  // 活动评论组件（子）向作品详情组件（父）组件传值 通过发广播形式
            return false;
          }
          this.totalCount = rep.data.totalCount;
          this.reviewList = rep.data.data;
        }
      });
    },
    doReview () {  // 添加评论
      let paramsObj = Object.assign({}, this.CONFIG.addreview.params);
      if (this.review == '') {  // 没有填写评论内容不得提交评论
        this.$message({
          type: "info",
          message: '请添加评论内容'
        });
        return false;
      }
      paramsObj.loginName = this.member.loginName;
      paramsObj.content = this.review;
      paramsObj.colId = this.colId;
      paramsObj.memberType = this.member.memberType;
      if (this.namespace === 'productiondetail') {  // 作品详情
        paramsObj.resourceName = this.resourceName;
        paramsObj.resourceType = this.resourceType;
        paramsObj.resourceId = this.resourceId;
        paramsObj.activityId = this.activityId;
      } else {  // 其他详情（活动、资讯详情） 可以理解为默认情况
        paramsObj.pubId = this.pubId;
      }
      Post(this.CONFIG.addreview.url, paramsObj).then(rep => {
        if (rep.data.result === '1') {  //请求成功
          this.queryReviewList();
          this.queryReviewList(this.showType);
          this.review = ''; // 清空评论内容
          this.$message({
            type: "success",
            message: '添加评论成功'
          });
        } else {
          this.$message({
            type: "error",
            message: '添加评论失败'
          });
        }
      });
    },
    toggleDiff (type) {  // 切换评论内容： 教师点评 用户点评
      this.showType = type;
      this.queryReviewList(this.showType);
    },
    paging: function ({ pageNo, pageSize }) {
      var param = {
        pageNo: pageNo,
        pageSize: pageSize
      };
      this.queryReviewList(this.showType);
    },
  }
}

</script>
<style>
.work_bookreview_02 .title {
  display: inline-block;
  float: left;
  width: 60px;
  text-align: center;
  font-weight: bold;
}

.work_bookreview_02 .doReview {
  display: inline-block;
  float: left;
  width: calc(100% - 60px);
}

.work_bookreview_02 .doReview textarea {
  height: 100px;
  width: 100%;
  box-sizing: border-box;
}

.work_bookreview_02 .doReview button {
  margin-top: 10px;
}

.work_bookreview_02 .reviewList .reviewListCon {
  min-height: 90px;
  margin: 20px 0px;
}

.work_bookreview_02 .reviewListCon .picture {
  width: 60px;
  height: 60px;
  position: relative;
  display: inline-block;
  vertical-align: top;
  padding-top: 10px;
}

.work_bookreview_02 .reviewListCon .picture img {
  width: 100%;
  height: 60px;
  position: relative;
  display: inline-block;
}

.work_bookreview_02 .reviewListCon .commentator {
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  text-overflow: ellipsis;
  overflow-x: hidden;
}

.work_bookreview_02 .reviewListCon .text {
  display: inline-block;
  width: calc(100% - 80px);
  min-height: 90px;
  overflow: hidden;
  padding: 10px;
  box-sizing: border-box;
}

.work_bookreview_02 .reviewText .deffReview {
  height: 60px;
  line-height: 60px;
  clear: both;
  font-size: 18px;
}

.work_bookreview_02 .deffReview div {
  display: inline-block;
  width: 100px;
  text-align: left;
  cursor: pointer;
}

.work_bookreview_02 .deffReview .active {
  font-weight: bold;
}

.work_bookreview_02 .reviewText {
  clear: both;
  width: calc(100% - 60px);
  float: right;
}
</style>