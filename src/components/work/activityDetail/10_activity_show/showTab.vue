<!--  -->
<template>
  <section class="work_activitydetail_10">
    <!-- 活动导航 -->
    <nav class="work_activitydetail_10-nav">
      <template v-for="(item,index) in tabArr">
        <div :key="index" class="work_activitydetail_10-nav_item" :class="{'work_activitydetail_10-title--active':currentTab.tag == item.tag}" @click="tabChange(item)">
          <span>{{item.title}}</span>
        </div>
      </template>
    </nav>
    <div class="work_activitydetail_10-content">

      <!-- 奖项说明 -->
      <p v-show="currentTab.tag == 'activityInstructions'" class="work_activitydetail_10-content-instructions" v-html="activityDetail[detailKeys.description]"></p>
      <!-- 活动方案 -->
      <work_activitydetail_02 v-show="currentTab.tag == 'activityPlan'" :namespace="namespace" :module="CONFIG.activityPlan.modulename"></work_activitydetail_02>

      <!-- 投票大赛新闻 -->

      <work_activitydetail_03 :namespace="namespace" v-show="currentTab.tag == 'activityNews'"></work_activitydetail_03>

      <!-- 参选人列表 -->
      <work_activitydetail_09 v-show="currentTab.tag == 'activityCandidate'" :namespace="namespace" :modulename="CONFIG.activityCandidate.modulename"></work_activitydetail_09>

      <!-- 获奖人列表 -->
      <work_activitydetail_09 v-show="currentTab.tag == 'activityPrizewinner'" :namespace="namespace" :modulename="CONFIG.activityPrizewinner.modulename"></work_activitydetail_09>
    </div>

  </section>
</template>

<script>
import URL from 'url'
import PROJECT_CONFIG from 'projectConfig'
import { Post } from '@common'
export default {
  name: 'work_activitydetail_10',
  reused: true,
  props: {
    namespace: String,
  },
  data () {
    return {
      CONFIG: null
    };
  },

  computed: {},

  created () {
    this.initConfig();
  },

  mounted () { },

  methods: {
    initConfig () {
      this.CONFIG = PROJECT_CONFIG[this.namespace].activityDetail.work_activitydetail_10
    }
  }
}
</script>
<style>
</style>

