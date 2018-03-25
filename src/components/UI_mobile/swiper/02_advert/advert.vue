<template>
  <div class="ui_mobile_swiper_02">
    <a class="ui_mobile_swiper_02_a">
      <span>{{advertList[keys.pic]}}</span>
      <img class="ui_mobile_swiper_02_img" :src="item && item[keys.pic]" v-for="(item, index) in advertList" :key="index"/>
    </a>
  </div>
</template>

<script>
  import {Post} from "@common";
  import PROJECT_CONFIG from "projectConfig";

  export default {
    name: "ui_mobile_swiper_02",
    props: ['namespace'],
    reused: true,
    data() {
      return {
        CONFIG: null,
        advertList: [],  // 广告列表
        keys: {},
      };
    },
    mounted() {
      this.CONFIG = PROJECT_CONFIG[this.namespace].swiper.ui_mobile_swiper_02;
      this.keys = this.CONFIG.keys;
      this.queryClassificationList();
    },

    methods: {
      queryClassificationList() {
        Post(this.CONFIG.url, this.CONFIG.params).then(rep => {
          var datas = rep.data.result;
          if (datas && datas instanceof Array && datas.length > 0) {
            this.advertList = datas.slice(0, this.CONFIG.maxNum);
          }
        });
      }
    },
  }
</script>

<style>
  .ui_mobile_swiper_02_a {
    display: block;
  }

  .ui_mobile_swiper_02_img {
    height: 2.0rem;
    border: none;
    width: 100%;
  }

</style>

