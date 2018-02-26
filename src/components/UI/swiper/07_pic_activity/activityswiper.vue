/*
 * @Author: song 
 * @Date: 2018-02-vue06 18:11:31 
 * @Last Modified by: song
 * @Last Modified time: 2018-02-26 16:10:01
 */
<!-- 活动轮播 点击跳到相关稿件详情 -->
<template>
  <div class="ui_swiper_07">
    <el-carousel arrow="always" :height="CONFIG.height">
			<el-carousel-item class="bigPic" v-for="(item, index) in swiperList" :key="index" :style="{backgroundImage: 'url(\'' + item[keys.bigPicture] + '\')'}">
        <div @click="toRelatedZX(item[keys.pubId])" style="width: 100%; height: 100%;"></div>
			</el-carousel-item>
		</el-carousel>
  </div>
</template>

<script>
import { Get, Post } from "@common";
import PROJECT_CONFIG from "projectConfig";

export default {
  name: 'ui_swiper_07',
  props: ['namespace'],
  reused: true,
  data () {
    return {
      CONFIG: null,
      swiperList: [],
      keys: null,
    };
  },
  created () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].swiper.swiper_07;
    this.keys = this.CONFIG.keys;
  },
  mounted () {
    this.querySwpierList();
  },
  methods: {
    querySwpierList () {
      Post(this.CONFIG.url, this.CONFIG.params).then(rep => {
        var data = rep.data.result;
        if (data && data instanceof Array && data.length > 0) {
          this.swiperList = data;
        }
      });
    },
    toRelatedZX (pubId) {
      let params = Object.assign({}, this.CONFIG.relatedZXparams);
      params.pubId = pubId;
      Get(this.CONFIG.relatedZXurl, { params: params }).then(rep => {
        var data = rep.data.data.result;
        if (data && data instanceof Array && data.length > 0) {
          let relatedId = data[0].id;
          window.location.href = this.CONFIG.detailurl + relatedId;
        }
      });
    }

  }
}

</script>
<style>
.ui_swiper_07 {
  margin-bottom: 20px;
}

.ui_swiper_07 .bigPic {
  cursor: pointer;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>