<!-- 投票活动 -->
<template>
  <section>
    <!-- 活动导航 -->
    <nav class="work_activitydetail_08-nav">
      <template v-for="(item,index) in tabArr">
        <div :key="index" class="work_activitydetail_08-nav_item" :class="{'work_activitydetail_08-title--active':currentTab.tag == item.tag}" @click="tabChange(item)">
          <span>{{item.title}}</span>
        </div>
      </template>
    </nav>
    <div class="work_activitydetail_08-content">

      <!-- 奖项说明 -->
      <p v-show="currentTab.tag == 'activityInstructions'" class="work_activitydetail_08-content-instructions" v-html="activityDetail[detailKeys.description]"></p>
      <!-- 活动方案 -->
      <div v-show="currentTab.tag == 'activityPlan'">活动方案</div>

      <!-- 投票大赛新闻 -->

      <!-- <work_activitydetail_03 v-show="currentTab.tag == 'activityNews'"></work_activitydetail_03> -->

      <!-- 参选人列表 -->
      <div v-show="currentTab.tag == 'activityCandidate'">参选人列表</div>
      <work_activitydetail_09 :namespace="namespace" :modulename="CONFIG.activityCandidate.modulename"></work_activitydetail_09>
      <!-- 获奖人列表 -->
      <div v-show="currentTab.tag == 'activityPrizewinner'">获奖人列表</div>

    </div>

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
      this.currentTab = item;
    },
    activityDetailLoaded (detail) {
      
      this.activityDetail = detail;
    }
  }
}
</script>
<style>
</style>
