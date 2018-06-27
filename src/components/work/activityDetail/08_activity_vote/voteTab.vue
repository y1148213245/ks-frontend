<!-- 投票活动 -->
<template>
  <section>
    <!-- 活动导航 -->
    <nav class="work_activitydetail_08-nav">
      <template v-for="(item,index) in tabArr">
        <div :key="index" class="work_activitydetail_08-nav_item" :class="{'work_activitydetail_08-title--active':currentShow.tag == item.tag}" @click="tabChange(item)">
          <span>{{item.title}}</span>
        </div>
      </template>
    </nav>
    <div class="work_activitydetail_08-content">
      <!-- 奖项说明 -->
      <template v-show="currentShow.tag == 'activityInstructions'">
        <p class="work_activitydetail_08-content-instructions" v-html="activityDetail.PORTAL_ACTIVITY_DESCRIPTION"></p>
      </template>

      <!-- 投票大赛新闻 -->
      <template v-show="currentShow.tag == 'activityNews'">
        <work_activitydetail_03></work_activitydetail_03>
      </template>
      <!-- 参选人列表 -->

      <!-- 获奖人列表 -->
    </div>

  </section>
</template>

<script>
import URL from 'url'
import PROJECT_CONFIG from 'projectConfig'
import { Post } from '@common'
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
  },

  mounted () { },

  methods: {
    initConfig () {
      this.CONFIG = PROJECT_CONFIG[this.namespace].activityDetail.work_activitydetail_08;
      this.tabArr = this.CONFIG.tabArr;
      this.currentTab = this.tabArr[0];
    },
    tabChange (item) {
      this.currentTab = item;
    }
  }
}
</script>
<style>
</style>
