<!-- 作品详情列表 -->
<template>
 <div class="work_activitydetail_05">
    <div class="work_activitydetail_05-totalcount">总数</div>
    <div class="work_activitydetail_05-item">
      <div>标题</div>
      <div>时间</div>
      <div>简介</div>
      <div>作者</div>
      <div>评论数</div>
      <div>票数</div>
      <div>投票按钮</div>
    </div>
    <ui_pagination layout="prev, pager, next, jumper"></ui_pagination>
 </div>
</template>

<script>
export default {
  name: 'work_activitydetail_05',
  reused: true,
  props: {},
  data () {
    return {
    };
  },

  computed: {},

  created () { },

  mounted () { },

  methods: {}
}

</script>
<style>
.work_activitydetail_05 {
  width: 100%;
}
.work_activitydetail_05-totalcount {
  margin: 10px 0;
  font-size: 14px;
}
</style>
