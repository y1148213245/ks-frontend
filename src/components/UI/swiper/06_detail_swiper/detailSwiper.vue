<!-- 无接口轮播图 -->
<template>
  <el-carousel :interval="5000" arrow="always" height="400px">
    <el-carousel-item v-for="(item, index) in 3" :key="index" >
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: 'ui_swiper_06',
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
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>