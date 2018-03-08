<!-- 标签导航-->
<template>
 <div class="components_acitivityrace_tab">
   <el-row>
      <el-col :span="6"><div class="components_acitivityrace_tab-item" :class="{'components_acitivityrace_tab-title--active':currentShowIndex == 1}" @click="change(1)">奖项设置</div></el-col>
      <el-col :span="6"><div class="components_acitivityrace_tab-item" :class="{'components_acitivityrace_tab-title--active':currentShowIndex == 2}" @click="change(2)">大赛新闻</div></el-col>
      <el-col :span="6"><div class="components_acitivityrace_tab-item" :class="{'components_acitivityrace_tab-title--active':currentShowIndex == 3}" @click="change(3)">参赛作品</div></el-col>
      <el-col :span="6"><div class="components_acitivityrace_tab-item" :class="{'components_acitivityrace_tab-title--active':currentShowIndex == 4}"  @click="change(4)">名师指导</div></el-col>
   </el-row>
   <div class="components_acitivityrace_tab-content">
      <!-- 奖项设置 -->
			<work_activitydetail_02 v-show="currentShowIndex == 1" namespace="activityrace" module="module1"></work_activitydetail_02>

      <div  v-show="currentShowIndex == 2">
        <!-- 大赛新闻 -->
        <work_activitydetail_03 namespace="activityrace"  v-show="!isNewsDetail"></work_activitydetail_03>
        <!-- 新闻详情 -->
        <work_informationdetail_02 namespace="activityrace" v-show="isNewsDetail"></work_informationdetail_02>
      </div>
      <!-- 参赛作品 -->
      <div  v-show="currentShowIndex == 3">
        
        <el-col :span="20" class="components_acitivityrace_tab-join_box">
          <!-- 参赛作品条件 -->
          <work_activitydetail_04 namespace="activityrace"></work_activitydetail_04>
          <!-- 参赛作品列表 -->
          <work_activitydetail_05 namespace="activityrace" module="module1"></work_activitydetail_05>
          
        </el-col>
        <el-col :span="4">
          <div class="components_acitivityrace-notice">
            <div class="components_acitivityrace-notice-title_box">
              <span>公告</span>
            </div>
            <!-- 公告 -->
            <work_activitydetail_02 namespace="activityrace" module="module2"></work_activitydetail_02>
          </div>
          <div class="components_acitivityrace-good_products">
            <div class="components_acitivityrace-good_products-title_box">
              <span>优秀作品展示</span>
            </div>
            <!-- 优秀参赛作品列表 -->
            <work_activitydetail_05 namespace="activityrace" module="module2" viewType="simple"></work_activitydetail_05>
          </div>
        </el-col>

      </div>
			

			<!-- 名师指导 -->
			<work_activitydetail_06 v-show="currentShowIndex == 4"  namespace="activityrace"></work_activitydetail_06>
   </div>
 </div>
</template>

<script>
import URL from 'url'
import PROJECT_CONFIG from 'projectConfig'
import { Post } from '@common'
export default {
  name: 'components_acitivityrace_tab',
  reused: true,
  props: {
  },
  data () {
    return {
      currentShowIndex: 1,
      isShowJoin: true,
      isNewsDetail:false,
    }
  },

  computed: {},

  created () {
    this.$bus.on('eventName_toNewsDetail',this.toNewsDetail)
    this.$bus.on('eventName_backNewsList',this.backNewsList)
  },

  mounted () { },

  methods: {
    change (index) {
      this.currentShowIndex = index;
    },
    toNewsDetail(){
      this.isNewsDetail = true;
    },
    backNewsList(){
      this.isNewsDetail = false;
    }
  }
}
</script>
<style>
.components_acitivityrace_tab {
  padding: 20px 0;
  width: 100%;
}
.components_acitivityrace_tab-content {
  margin-top: 10px;
  width: 100%;
  min-height: 500px;
}
.components_acitivityrace_tab-item {
  padding: 20px 0;
  text-align: center;
  border: 1px solid black;
  cursor: pointer;
}
.components_acitivityrace_tab-title--active {
  color: brown;
}
.components_acitivityrace_tab-join_box {
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
