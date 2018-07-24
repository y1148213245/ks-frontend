<!-- 投票活动 -->
<template>
  <section class="work_activitydetail_08">
    <!-- 活动导航 -->
    <nav class="work_activitydetail_08-nav">
      <template v-for="(item,index) in tabArr">
        <div :key="index" class="work_activitydetail_08-nav_item" :class="{'work_activitydetail_08-title--active':currentTab.tag == item.tag}" @click="tabChange(item)">
          <span>{{item.title}}</span>
        </div>
      </template>
    </nav>
    <div class="work_activitydetail_08-content">

      <!-- 奖项说明(活动详情字段)) -->
      <p v-if="getIsHas('activityInstructions')" v-show="currentTab.tag == 'activityInstructions'" class="work_activitydetail_08-content-instructions" v-html="activityDetail[detailKeys.description]"></p>

      <!-- 活动方案(辅文详情) -->
      <work_activitydetail_02 v-if="getIsHas('activityPlan')" v-show="currentTab.tag == 'activityPlan'" :namespace="namespace" :module="CONFIG.activityPlan.modulename"></work_activitydetail_02>

      <!-- 投票大赛新闻（新闻列表） -->
      <work_activitydetail_03 v-if="getIsHas('activityNews')" :namespace="namespace" v-show="currentTab.tag == 'activityNews'"></work_activitydetail_03>

      <!-- 参选人列表（参赛人列表） -->
      <work_activitydetail_09 v-if="getIsHas('activityCandidate')" v-show="currentTab.tag == 'activityCandidate'" :namespace="namespace" :modulename="CONFIG.activityCandidate.modulename"></work_activitydetail_09>

      <!-- 获奖人列表（参赛人列表） -->
      <work_activitydetail_09 v-if="getIsHas('activityPrizewinner')" v-show="currentTab.tag == 'activityPrizewinner'" :namespace="namespace" :modulename="CONFIG.activityPrizewinner.modulename"></work_activitydetail_09>
    </div>

    <!-- 展示类活动比赛结果(辅文详情) -->
    <work_activitydetail_02 v-if="getIsHas('activityResult')" v-show="currentTab.tag == 'activityResult'" :namespace="namespace" :module="CONFIG.activityResult.modulename"></work_activitydetail_02>
  </section>
</template>

<script>
import URL from 'url'
import PROJECT_CONFIG from 'projectConfig'
import { Post, getFieldAdapter } from '@common'
export default {
  name: 'work_activitydetail_08',
  reused: true,
  props: {
    namespace: String,
  },
  data () {
    return {
      CONFIG: null,
      tabArr: null,
      currentTab: null,
      activityDetail: {},
    };
  },

  computed: {},

  created () {
    this.initConfig();
    this.$bus.$on(this.CONFIG.activityDetail.event.listenName, this.activityDetailLoaded)
  },

  mounted () { },

  methods: {
    initConfig () {
      this.CONFIG = PROJECT_CONFIG[this.namespace].activityDetail.work_activitydetail_08;
      this.tabArr = this.CONFIG.tabArr;
      this.currentTab = this.tabArr[0];
      this.detailKeys = getFieldAdapter(
        this.CONFIG.activityDetail.sysAdapter,
        this.CONFIG.activityDetail.typeAdapter
      );
    },
    tabChange (item) {
      if (item.tag == 'activityPrizewinner') {
        if(this.activityDetail[this.detailKeys.endTimeStamp] > new Date().getTime()){
          this.$message({
            type:'warning',
            message:'请等待评审结果'
          })
          return false
        }
      }
      this.currentTab = item;
    },
    activityDetailLoaded (detail) {

      this.activityDetail = detail;
    },
    getIsHas (itemText) {
      let isHas = false;
      this.tabArr.map(item => {
        if (item.tag == itemText) {
          isHas = true;
        }
      })
      if (isHas) {
        return true
      } else {
        return false;
      }

    }
  }
}
</script>
<style>
</style>
