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

      <!-- 大赛新闻 -->
			<!-- <work_activitydetail_03 v-show="currentShowIndex == 2" namespace="activityrace"></work_activitydetail_03> -->
			
			<!-- 参赛作品条件 -->
			<work_activitydetail_04 v-show="currentShowIndex == 3" namespace="activityrace"></work_activitydetail_04>
			<!-- 参赛作品列表 -->
			<work_activitydetail_05 v-show="currentShowIndex == 3" namespace="activityrace"></work_activitydetail_05>

			<!-- 名师指导 -->
			<!-- <work_activitydetail_06 v-show="currentShowIndex == 4"  namespace="activityrace"></work_activitydetail_06> -->
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
    }
  },

  computed: {},

  created () {
  },

  mounted () { },

  methods: {
    change(index){
       this.currentShowIndex = index;
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
.components_acitivityrace_tab-title--active{
  color: brown;
}
</style>
