/*
 * @Author: song 
 * @Date: 2018-02-05 13:56:44 
 * @Last Modified by: song
 * @Last Modified time: 2018-02-05 17:12:00
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
        <div class="teacher" @click="toggleDiff('teacher')" :class="{'active': showItem === 'teacher'}">教师点评</div>
        <div class="user" @click="toggleDiff('user')" :class="{'active': showItem === 'user'}">用户点评</div>
      </div>
      <div class="reviewList">
        <div class="reviewListCon" v-for="(item, index) in reviewList" :key="index">
          <div class="picture">
            <img :src="item.picture ||'../../assets/img/people.jpg'" alt="">
            <div class="commentator" v-text="item.commentator"></div>
          </div>
          <div class="text" v-text="item.review"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Get } from "@common";
import PROJECT_CONFIG from "projectConfig";

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
      review: '',
      reviewList: [], // 评论列表
      showItem: 'teacher',
    };
  },

  mounted () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].bookreview.activityreview_02;
    this.queryReviewList();
  },

  methods: {
    queryReviewList () {
      // 评论列表查询
      Get(this.CONFIG.url, { params: this.CONFIG.params }).then(rep => {
        this.reviewList = rep.data.data;
        console.log(this.reviewList);
      });
    },
    doReview () {  // 添加评论

    },
    toggleDiff (type) {  // 切换评论内容： 教师点评 用户点评
      this.showItem = type;
    }
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