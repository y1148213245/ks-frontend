<!-- 教师列表 -->
<template>
 <div class="work_activitydetail_06">
    <template v-for="(item,index) in 3">
      <div class="work_activitydetail_06-item" :key="index">
        <div class="work_activitydetail_06-img_box">
          <img src="" alt="暂无头像" class="work_activitydetail_06-img">
        </div>
        <div class="work_activitydetail_06-content">
          <div class="work_activitydetail_06-title">教师名字</div>
          <div class="work_activitydetail_06-comment">点评了文章《钢铁是怎样炼成的》</div>
          <div class="work_activitydetail_06-abstract">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.”</div>
        </div>
      </div>
    </template>
 </div>
</template>

<script>
export default {
  name: 'work_activitydetail_06',
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
.work_activitydetail_06{
  width: 100%;
}
.work_activitydetail_06-item{
  margin-top: 10px;
  width: 100%;
}
.work_activitydetail_06-img_box{
  float: left;
  width: 100px;
}
.work_activitydetail_06-img{
  
}
.work_activitydetail_06-content{
  margin-left: 100px;
}
.work_activitydetail_06-title{

}
.work_activitydetail_06-comment{

}
.work_activitydetail_06-abstract{

}
</style>
