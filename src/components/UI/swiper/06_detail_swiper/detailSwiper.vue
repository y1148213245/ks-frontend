<!-- 无接口轮播图 -->
<template>
  <el-carousel :interval="5000" arrow="always" height="400px" class="ui_swiper_06">
    <el-carousel-item v-for="(item, index) in (pics || 2)" :style="{backgroundImage: 'url(\''+ (pics ? item.url : '') +'\')'}" :key="index" class="ui_swiper_06-item">
      <a :href="item.href || 'javascript:void(0)'" class="ui_swiper_06-a" target="_blank"></a>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: 'ui_swiper_06',
  reused: true,
  props: {
    pics: {
      type: Array,
    },
  },
  data () {
    return {
    };
  },

  computed: {},

  created () { },

  mounted () {
  },

  methods: {
  }
}

</script>
<style>
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.ui_swiper_06-item {
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
}
.ui_swiper_06-a {
  display: inline-block;
  width: 100%;
  height: 100%;
}
</style>