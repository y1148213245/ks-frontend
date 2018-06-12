/*
 * @Author: song 
 * @Date: 2018-02-vue06 18:11:31 
 * @Last Modified by: yan.chaoming
 * @Last Modified time: 2018-04-25 14:11:02
 */
<!-- 活动轮播 点击跳到相关稿件详情 -->
<template>
  <div class="ui_swiper_07">
    <el-carousel arrow="always" :height="CONFIG.height">
			<el-carousel-item class="bigPic" v-for="(item, index) in swiperList" :key="index" :style="{backgroundImage: 'url(\'' + item[keys.bigPicture] + '\')'}">
        <div @click="toHref(item)" style="width: 100%; height: 100%;"></div>
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
    this.keys = this.CONFIG.getListData.keys;
  },
  mounted () {
    this.querySwpierList();
  },
  methods: {
    querySwpierList () {
      Post(CONFIG.BASE_URL + this.CONFIG.getListData.url, this.CONFIG.getListData.params).then(rep => {
        var data = rep.data.result;
        if (data && data instanceof Array && data.length > 0) {
          this.swiperList = data;
        }
      });
    },
    toHref (item) {

      if (this.CONFIG.linkType) {
        if (this.CONFIG.linkType == 'source') {
          window.location.href = item[this.keys.sourceUrl]
        }
      } else {
        let params = Object.assign({}, this.CONFIG.getRelatedData.params);
        params.pubId = item[this.keys.pubId];
        Get(CONFIG.BASE_URL + this.CONFIG.getRelatedData.url, { params: params }).then(rep => {
          var data = rep.data.data.result;
          if (data && data instanceof Array && data.length > 0) {
            let relatedId = data[0].id;
            window.location.href = this.CONFIG.getRelatedData.toDetailurl + relatedId;
          }
        });
      }

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