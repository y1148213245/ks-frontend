<!-- 竞赛详情 -->
<template>
  <div class="work_activitydetail_01">
    <p class="work_activitydetail_01-title">首届“防震减灾”公益作文大赛</p>
    <div class="work_activitydetail_01-swiper">
      <!-- 轮播图组件 -->
      <ui_swiper_06></ui_swiper_06><!-- END 轮播图组件 -->
    </div>
    <div class="work_activitydetail_01-text_content">
      Lorem ipsum dolor sit amet,END consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet
    </div>
    <div class="work_activitydetail_01-upload_box">
      <div class="work_activitydetail_01-upload_box-button">上传作品</div>
      <div class="work_activitydetail_01-upload_box-button work_activitydetail_01-upload_box-button--failed">已结束</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'work_activitydetail_01',
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
.work_activitydetail_01 {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
.work_activitydetail_01-title {
  text-align: center;
  font-weight: 700;
  font-style: normal;
  font-size: 28px;
}
.work_activitydetail_01-swiper {
  
}
.work_activitydetail_01-text_content {
}
.work_activitydetail_01-upload_box {
  width: 100%;
  text-align: center;
}
.work_activitydetail_01-upload_box-button {
  width: 200px;
  height: 45px;
  line-height: 45px;
  margin: 0 auto;
  border-radius: 11px;
  font-size: 14px;
  box-shadow: none;
  color: white;
  background-color: black;
}
.work_activitydetail_01-upload_box-button--failed {
      background-color: rgba(215, 215, 215, 1);
      color: #A1A1A1;
}
</style>
