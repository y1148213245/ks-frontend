<!-- 标签导航-->
<template>
  <div class="work_activityrace_tab">
    <nav class="work_activityrace_tab-nav">
      <template v-for="(item,index) in tabArr">
        <div :key="index" class="work_activityrace_tab-item" :class="{'work_activityrace_tab-title--active':currentShow.tag == item.tag,'work_activityrace_tab-product_nav-item--hidden':activityDetail.PORTAL_ACTIVITY_IS_ENDACTIVITY != (getStaticText('yes') ? getStaticText('yes') : '是')  && currentShow.tag == 'activityProductWinning' }" @click="change(item)"><span>{{item.title}}</span></div>
      </template>
    </nav>
    <div class="work_activityrace_tab-content">
      <!-- 奖项说明 -->
      <div class="work_activityrace_tab-content-instructions" v-show="currentShow.tag == 'activityInstructions'">
          <p class="work_activityrace_tab-content-instructions_p" v-html="activityDetail.PORTAL_ACTIVITY_DESCRIPTION"></p>
      </div>

      <!-- 奖项设置 -->
      <work_activitydetail_02 v-show="currentShow.tag == 'activityPlan'" :namespace="namespace" module="module1"></work_activitydetail_02>

      <div  v-show="currentShow.tag == 'activityNews'">
        <!-- 大赛新闻 -->
        <work_activitydetail_03 :namespace="namespace"></work_activitydetail_03>

        <div class="components_acitivityrace-right">
          <div class="components_acitivityrace-notice">
              <div class="components_acitivityrace-notice-title_box">
                  <span>{{getStaticText('announcement') ? getStaticText('announcement') : '公告'}}</span>
                </div>
                <!-- 公告 -->
              <work_activitydetail_02 :namespace="namespace" module="module2"></work_activitydetail_02>
          </div>
          <div class="components_acitivityrace-good_products">
            <div class="components_acitivityrace-good_products-title_box">
                <span>{{getStaticText('displayExcellentWorks') ? getStaticText('displayExcellentWorks') : '优秀作品展示'}}</span>
            </div>
                <!-- 优秀参赛作品列表 -->
            <work_activitydetail_05 :namespace="namespace" module="module2" viewType="simple"></work_activitydetail_05>
          </div>
        </div>
      </div>
      <!-- 参赛作品 -->
      <div  v-show="currentShow.tag == 'activityProduct'">
          <el-col :span="20" class="work_activityrace_tab-join_box">
            <!-- 参赛作品条件 -->
            <work_activitydetail_04 :namespace="namespace"></work_activitydetail_04>
            <!-- 参赛作品列表 -->
            <work_activitydetail_05 :namespace="namespace" module="module1"></work_activitydetail_05>
          </el-col>
          <el-col :span="4">
            <div class="components_acitivityrace-notice">
              <div class="components_acitivityrace-notice-title_box">
                <span>{{getStaticText('announcement') ? getStaticText('announcement') : '公告'}}</span>
              </div>
              <!-- 公告 -->
              <work_activitydetail_02 :namespace="namespace" module="module2"></work_activitydetail_02>
            </div>
            <div class="components_acitivityrace-good_products">
              <div class="components_acitivityrace-good_products-title_box">
                <span>{{getStaticText('displayExcellentWorks') ? getStaticText('displayExcellentWorks') : '优秀作品展示'}}</span>
              </div>
              <!-- 优秀参赛作品列表 -->
              <work_activitydetail_05 :namespace="namespace" module="module2" viewType="simple"></work_activitydetail_05>
            </div>
          </el-col>
      </div>

      <!-- 获奖作品 -->
      <work_activitydetail_05 v-show="currentShow.tag == 'activityProductWinning'"  :namespace="namespace" module="classification" viewType="classification"></work_activitydetail_05>


      <!-- 名师指导 -->
      <div class="work_activityrace_tab-teacher_list" v-show="currentShow.tag == 'activityTeather'">
        <el-col :span="20">
          <work_activitydetail_06  :namespace="namespace"></work_activitydetail_06>
        </el-col>
        <el-col :span="4">
          <div class="components_acitivityrace-notice">
            <div class="components_acitivityrace-notice-title_box">
              <span>{{getStaticText('announcement') ? getStaticText('announcement') : '公告'}}</span>
            </div>
            <!-- 公告 -->
            <work_activitydetail_02 :namespace="namespace" module="module2"></work_activitydetail_02>
          </div>
          <div class="components_acitivityrace-good_products">
            <div class="components_acitivityrace-good_products-title_box">
              <span>{{getStaticText('displayExcellentWorks') ? getStaticText('displayExcellentWorks') : '优秀作品展示'}}</span>
            </div>
            <!-- 优秀参赛作品列表 -->
            <work_activitydetail_05 :namespace="namespace" module="module2" viewType="simple"></work_activitydetail_05>
          </div>
        </el-col>
      </div>
    </div>
    <el-row v-show="activityDetail.PORTAL_ACTIVITY_IS_COMMENT== (getStaticText('yes') ? getStaticText('yes') : '是') ">
      <el-col :span="24">
        <!-- 活动评论组件 区别于作品评论 -->
        <work_bookreview_02 :namespace="namespace" :is-show-diff=false></work_bookreview_02>
        <!-- END 活动评论组件 区别于作品评论 -->
      </el-col>
    </el-row>
  </div>
</template>

<script>
import URL from 'url'
import PROJECT_CONFIG from 'projectConfig'
import { Post } from '@common'
export default {
  name: 'work_acitivityrace_07',
  reused: true,
  props: {
    namespace: String,
  },
  data () {
    return {
      currentShow: PROJECT_CONFIG[this.namespace].activityDetail.work_acitivityrace_07.tabArr[0],
      isShowJoin: true,
      activityDetail: {},
      tabArr: [],
      hashCache: '',
      CONFIG:""
    }
  },

  computed: {},

  created () {
    this.$bus.on('eventName_loadedDatas', this.getActivityDetail);
    this.CONFIG = PROJECT_CONFIG[this.namespace].activityDetail.work_acitivityrace_07;
    this.tabArr = this.CONFIG.tabArr;
    this.initHash();
    this.checkHash();
  },

  mounted () {

  },

  methods: {
    initHash () {
      let getLocationHash = () => {
        var hash = window.location.hash;
        if (hash) {
          var tag = hash.substring(hash.indexOf("#") + 1, hash.length);
          var item = this.tabArr.filter(entry => {
            return entry.tag == tag
          })[0];
          return item
        }
      }
      let locationHash = getLocationHash()
      this.change(locationHash ? locationHash : this.currentShow);
    },
    checkHash () {
      if (("onhashchange" in window) && ((typeof
        document.documentMode === "undefined") || document.documentMode == 8)) { //
        window.onhashchange = () => {
          this.getHashToChangeTab()
        }
      } else { // 不支持则用定时器检测的办法
        let _this = this;
        setInterval(function () {
          var hash = window.location.hash;
          if (_this.hashCache != hash) {
            _this.hashCache = hash
            _this.getHashToChangeTab();
          }
        }, 150);
      }
    },
    getHashToChangeTab () {
      var hash = window.location.hash;
      if (hash) {
        var tag = hash.substring(hash.indexOf("#") + 1, hash.length);
        var item = this.tabArr.filter(entry => {
          return entry.tag == tag
        })[0];
        this.change(item);
      }
    },
    change (item) {
      if (item.tag == 'activityProductWinning') {
        if (this.activityDetail.PORTAL_ACTIVITY_IS_ENDACTIVITY != (this.getStaticText('yes') ? this.getStaticText('yes') : '是')) {
          this.$message(
            {
              type: 'info',
              message: this.getStaticText('pleaseWaitForTheReview') ? this.getStaticText('pleaseWaitForTheReview') : '请等待评审'
            }
          )
        } else {
          window.location.hash = '#' + item.tag
          this.currentShow = item;
        }
      } else {
        window.location.hash = '#' + item.tag
        this.currentShow = item;
      }
    },
    getActivityDetail (detail) {
      this.activityDetail = detail;
      this.getHashToChangeTab();
    },
    getStaticText(text){
      if (this.CONFIG && this.CONFIG.staticText && this.CONFIG.staticText[text]){
        return this.CONFIG.staticText[text]
      } else {
        return false
      }
    }

  }
}
</script>
<style>
.work_activityrace_tab {
  padding: 20px 0;
  width: 100%;
}
.work_activityrace_tab-content {
  margin-top: 10px;
  width: 100%;
  min-height: 500px;
  overflow: hidden;
}
.work_activityrace_tab-item {
  display: inline-block;
  width: 20%;
  padding: 20px 0;
  text-align: center;
  box-sizing: border-box;
  border: 1px solid black;
  cursor: pointer;
}
.work_activityrace_tab-title--active {
  color: brown;
}
.work_activityrace_tab-product_nav {
  text-align: center;
  padding: 20px;
}
.work_activityrace_tab-product_nav-item {
  margin: 0 auto;
  width: 170px;
  height: 50px;
  line-height: 50px;
  background-color: #f2f2f2;
  color: #bcbcbc;
  cursor: pointer;
}
.work_activityrace_tab-product_nav-item--active {
  background-color: #363636;
  color: white;
}
.work_activityrace_tab-join_box {
  padding: 10px;
}
.components_acitivityrace-notice {
  padding: 10px;
  border: 1px solid dimgray;
}
.components_acitivityrace-notice-title_box {
  padding: 10px 0;
}
.components_acitivityrace-good_products {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid dimgray;
}
.components_acitivityrace-good_products-title_box {
  padding: 10px 0;
}
</style>
