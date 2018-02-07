<!-- 竞赛新闻组件 -->
<template>
 <div class="work_activitydetail_03">
   <template v-for="(entry,index) in  3">
    <div class="work_activitydetail_03-item" :key="index">
      <div class="work_activitydetail_03-item-title">猪肉价格呈现高位运行 近期小幅回落猪肉价格呈现高位运行 近回</div>
      <div class="work_activitydetail_03-item-img_box">
        <img class="work_activitydetail_03-item-img" src="" alt="暂无图片">
      </div>
      <div class="work_activitydetail_03-item-content">
        <span class="work_activitydetail_03-item-content-date">2016-12-12 11:20</span>
        <div class="work_activitydetail_03-item-content-abstract">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.
        </div>
      </div>
    </div>
   </template>
 </div>
</template>

<script>
export default {
  name: 'work_activitydetail_03',
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
.work_activitydetail_03 {

  width: 100%;
}
.work_activitydetail_03-item {
    margin-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid slategray;
}
.work_activitydetail_03-item-title {
  margin: 10px 0;
  font-size: 18px
}
.work_activitydetail_03-item-img_box {
  float: left;
  width: 200px;
}
.work_activitydetail_03-item-img {
  border: 1px solid black;
  width: 100%;
  height: 100%;
  text-align: center;
}
.work_activitydetail_03-item-content {
  margin-left: 200px;
  font-size: 12px;
}
.work_activitydetail_03-item-content-date {
  font-size: 12px;
  color: #aeaeae;
}
.work_activitydetail_03-item-content-abstract {
}
</style>
